// Polymind user-data API (replaces direct browser access to Firestore).
//
// Auth: Firebase ID token (Google sign-in stays on Firebase Auth), verified here
// against Google's published signing certs. A caller can only touch their own
// record — the uid always comes from the verified token, never from the request.
//
// Storage: one DynamoDB item per user. The user document is stored as gzipped
// JSON in `doc` (binary) so large progress/review histories stay far below the
// 400 KB item limit, plus a few plain attributes for lookups and auditing.
//
// Routes (Lambda Function URL):
//   GET   /users/me        -> 200 user document | 404
//   POST  /users/me        -> create (409 if it already exists)
//   PATCH /users/me        -> replace the given top-level fields (404 if missing)
//   PUT   /beta-users/me   -> record a beta signup

import crypto from 'node:crypto';
import { gzipSync, gunzipSync } from 'node:zlib';
import { DynamoDBClient, GetItemCommand, PutItemCommand } from '@aws-sdk/client-dynamodb';

const PROJECT_ID = process.env.FIREBASE_PROJECT_ID;
const USERS_TABLE = process.env.USERS_TABLE;
const BETA_TABLE = process.env.BETA_USERS_TABLE;
const CERTS_URL =
  'https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com';
const MAX_BODY_BYTES = 2 * 1024 * 1024;
const MAX_REVIEW_HISTORY = 1000;

// Top-level fields a client may write. Purchase entitlements are deliberately
// absent so a client cannot grant itself access.
const PROFILE_FIELDS = ['email', 'displayName', 'photoURL'];
const DATA_FIELDS = ['user', 'progress', 'habits', 'spacedRepetition'];
const BETA_FIELDS = ['name', 'email', 'age', 'gender'];

const ddb = new DynamoDBClient({});

// ── Firebase ID token verification ──────────────────────────────────────────

let certCache = { certs: null, expiresAt: 0 };

async function getCerts() {
  if (certCache.certs && Date.now() < certCache.expiresAt) return certCache.certs;
  const res = await fetch(CERTS_URL);
  if (!res.ok) throw new Error(`cert fetch failed: ${res.status}`);
  const maxAge = Number(/max-age=(\d+)/.exec(res.headers.get('cache-control') || '')?.[1] || 3600);
  certCache = { certs: await res.json(), expiresAt: Date.now() + maxAge * 1000 };
  return certCache.certs;
}

const b64urlJson = (s) => JSON.parse(Buffer.from(s, 'base64url').toString('utf8'));

export async function verifyIdToken(token, { certs, now = Date.now() / 1000 } = {}) {
  const parts = token.split('.');
  if (parts.length !== 3) throw new Error('malformed token');
  const [h, p, sig] = parts;
  const header = b64urlJson(h);
  const payload = b64urlJson(p);
  if (header.alg !== 'RS256') throw new Error('bad alg');
  const pem = (certs || (await getCerts()))[header.kid];
  if (!pem) throw new Error('unknown kid');
  const ok = crypto.verify(
    'RSA-SHA256',
    Buffer.from(`${h}.${p}`),
    crypto.createPublicKey(pem),
    Buffer.from(sig, 'base64url'),
  );
  if (!ok) throw new Error('bad signature');
  if (payload.aud !== PROJECT_ID) throw new Error('bad aud');
  if (payload.iss !== `https://securetoken.google.com/${PROJECT_ID}`) throw new Error('bad iss');
  if (typeof payload.sub !== 'string' || !payload.sub || payload.sub.length > 128) throw new Error('bad sub');
  if (!(payload.exp > now)) throw new Error('expired');
  if (!(payload.iat <= now + 300)) throw new Error('issued in future');
  return payload;
}

// ── Storage ─────────────────────────────────────────────────────────────────

const pack = (doc) => gzipSync(Buffer.from(JSON.stringify(doc), 'utf8'));
const unpack = (buf) => JSON.parse(gunzipSync(Buffer.from(buf)).toString('utf8'));

async function loadUser(uid) {
  const { Item } = await ddb.send(
    new GetItemCommand({ TableName: USERS_TABLE, Key: { uid: { S: uid } }, ConsistentRead: true }),
  );
  return Item ? { doc: unpack(Item.doc.B), version: Number(Item.version.N) } : null;
}

async function saveUser(uid, doc, expectedVersion) {
  const item = {
    uid: { S: uid },
    doc: { B: pack(doc) },
    version: { N: String((expectedVersion ?? 0) + 1) },
    email: { S: doc.email || '' },
    lastSyncAt: { S: doc.lastSyncAt },
  };
  // Optimistic locking: create only if absent, update only if nobody wrote in between.
  const cond =
    expectedVersion === null
      ? { ConditionExpression: 'attribute_not_exists(uid)' }
      : {
          ConditionExpression: 'version = :v',
          ExpressionAttributeValues: { ':v': { N: String(expectedVersion) } },
        };
  await ddb.send(new PutItemCommand({ TableName: USERS_TABLE, Item: item, ...cond }));
}

function capReviewHistory(sr) {
  if (!sr || !Array.isArray(sr.reviewHistory)) return sr;
  return { ...sr, reviewHistory: sr.reviewHistory.slice(-MAX_REVIEW_HISTORY) };
}

function pickFields(body, allowed) {
  const out = {};
  for (const k of allowed) if (body[k] !== undefined) out[k] = body[k];
  if (out.spacedRepetition) out.spacedRepetition = capReviewHistory(out.spacedRepetition);
  return out;
}

// ── HTTP ────────────────────────────────────────────────────────────────────

const json = (statusCode, body) => ({
  statusCode,
  headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
  body: body === undefined ? '' : JSON.stringify(body),
});

function parseBody(event) {
  if (!event.body) return {};
  const raw = event.isBase64Encoded ? Buffer.from(event.body, 'base64').toString('utf8') : event.body;
  if (Buffer.byteLength(raw) > MAX_BODY_BYTES) throw Object.assign(new Error('too large'), { status: 413 });
  const body = JSON.parse(raw);
  if (!body || typeof body !== 'object' || Array.isArray(body)) throw new Error('body must be an object');
  return body;
}

export async function handler(event) {
  const method = event.requestContext?.http?.method;
  const path = event.rawPath;

  const authz = event.headers?.authorization || '';
  if (!authz.startsWith('Bearer ')) return json(401, { error: 'missing token' });
  let uid;
  try {
    uid = (await verifyIdToken(authz.slice(7))).sub;
  } catch (e) {
    return json(401, { error: 'invalid token' });
  }

  let body;
  try {
    body = method === 'GET' ? {} : parseBody(event);
  } catch (e) {
    return json(e.status || 400, { error: e.message });
  }

  const now = new Date().toISOString();
  try {
    if (path === '/users/me' && method === 'GET') {
      const found = await loadUser(uid);
      return found ? json(200, found.doc) : json(404, { error: 'not found' });
    }

    if (path === '/users/me' && method === 'POST') {
      const doc = {
        uid,
        email: '',
        displayName: '',
        photoURL: null,
        ...pickFields(body, [...PROFILE_FIELDS, ...DATA_FIELDS]),
        createdAt: now,
        lastSyncAt: now,
      };
      await saveUser(uid, doc, null);
      return json(201, doc);
    }

    if (path === '/users/me' && method === 'PATCH') {
      // Retry once on a concurrent write (two tabs syncing at the same moment).
      for (let attempt = 0; ; attempt++) {
        const found = await loadUser(uid);
        if (!found) return json(404, { error: 'not found' });
        const doc = { ...found.doc, ...pickFields(body, DATA_FIELDS), lastSyncAt: now };
        try {
          await saveUser(uid, doc, found.version);
          return json(200, { lastSyncAt: now });
        } catch (e) {
          if (e.name !== 'ConditionalCheckFailedException' || attempt >= 1) throw e;
        }
      }
    }

    if (path === '/beta-users/me' && method === 'PUT') {
      const fields = pickFields(body, BETA_FIELDS);
      const item = { uid: { S: uid }, signedUpAt: { S: now } };
      for (const [k, v] of Object.entries(fields)) item[k] = { S: String(v).slice(0, 500) };
      await ddb.send(new PutItemCommand({ TableName: BETA_TABLE, Item: item }));
      return json(200, { ok: true });
    }

    return json(404, { error: 'no such route' });
  } catch (e) {
    if (e.name === 'ConditionalCheckFailedException') return json(409, { error: 'conflict' });
    console.error(JSON.stringify({ msg: 'request failed', method, path, err: e.name, detail: e.message }));
    return json(500, { error: 'internal error' });
  }
}
