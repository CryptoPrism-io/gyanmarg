// Handler routing/storage behaviour against an in-memory DynamoDB stand-in.
import test from 'node:test';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import { gunzipSync } from 'node:zlib';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';

process.env.FIREBASE_PROJECT_ID = 'proj-x';
process.env.USERS_TABLE = 'users';
process.env.BETA_USERS_TABLE = 'beta';

// In-memory table honouring the two condition expressions the handler uses.
const tables = { users: new Map(), beta: new Map() };
DynamoDBClient.prototype.send = async function (cmd) {
  const { TableName, Key, Item, ConditionExpression, ExpressionAttributeValues } = cmd.input;
  const t = tables[TableName];
  if (cmd.constructor.name === 'GetItemCommand') return { Item: t.get(Key.uid.S) };
  const cur = t.get(Item.uid.S);
  const fail = () => Object.assign(new Error('cond'), { name: 'ConditionalCheckFailedException' });
  if (ConditionExpression === 'attribute_not_exists(uid)' && cur) throw fail();
  if (ConditionExpression === 'version = :v' && (!cur || cur.version.N !== ExpressionAttributeValues[':v'].N)) throw fail();
  t.set(Item.uid.S, Item);
  return {};
};

// Serve test-signed tokens through the real cert-fetch path.
const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', { modulusLength: 2048 });
globalThis.fetch = async () => new Response(JSON.stringify({ k1: publicKey.export({ type: 'spki', format: 'pem' }) }),
  { headers: { 'cache-control': 'max-age=60' } });
const token = (sub) => {
  const n = Math.floor(Date.now() / 1000);
  const enc = (o) => Buffer.from(JSON.stringify(o)).toString('base64url');
  const d = `${enc({ alg: 'RS256', kid: 'k1' })}.${enc({ aud: 'proj-x', iss: 'https://securetoken.google.com/proj-x', sub, iat: n, exp: n + 600 })}`;
  return `${d}.${crypto.sign('RSA-SHA256', Buffer.from(d), privateKey).toString('base64url')}`;
};

const { handler } = await import('../src/index.mjs');
const call = async (method, path, sub, body) => {
  const r = await handler({
    requestContext: { http: { method } }, rawPath: path,
    headers: sub ? { authorization: `Bearer ${token(sub)}` } : {},
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  return { status: r.statusCode, body: r.body ? JSON.parse(r.body) : null };
};
const stored = (uid) => JSON.parse(gunzipSync(tables.users.get(uid).doc.B).toString());

test('rejects requests without a token', async () => assert.equal((await call('GET', '/users/me')).status, 401));

test('GET on a new user is 404', async () => assert.equal((await call('GET', '/users/me', 'alice')).status, 404));

test('POST creates, ignores client-supplied uid and entitlement fields', async () => {
  const r = await call('POST', '/users/me', 'alice', {
    uid: 'mallory', email: 'a@x', displayName: 'A', hasLifetimeAccess: true, purchasedModules: ['m1'],
    user: { isOnboarded: true }, progress: { longestStreak: 3 }, habits: { habits: [] },
    spacedRepetition: { reviewHistory: Array.from({ length: 1500 }, (_, i) => i), totalReviews: 1500 },
  });
  assert.equal(r.status, 201);
  const doc = stored('alice');
  assert.equal(doc.uid, 'alice');
  assert.equal(doc.hasLifetimeAccess, undefined);
  assert.equal(doc.purchasedModules, undefined);
  assert.equal(doc.spacedRepetition.reviewHistory.length, 1000);
  assert.equal(doc.spacedRepetition.reviewHistory[0], 500);
  assert.equal(tables.users.get('alice').version.N, '1');
});

test('second POST is a 409, data untouched', async () => {
  assert.equal((await call('POST', '/users/me', 'alice', { user: { isOnboarded: false } })).status, 409);
  assert.equal(stored('alice').user.isOnboarded, true);
});

test('PATCH replaces only the given top-level fields', async () => {
  const before = stored('alice');
  const r = await call('PATCH', '/users/me', 'alice', { progress: { longestStreak: 9 }, email: 'evil@x', createdAt: 'x' });
  assert.equal(r.status, 200);
  const doc = stored('alice');
  assert.deepEqual(doc.progress, { longestStreak: 9 });
  assert.deepEqual(doc.user, before.user);
  assert.deepEqual(doc.habits, before.habits);
  assert.equal(doc.email, 'a@x');
  assert.equal(doc.createdAt, before.createdAt);
  assert.equal(tables.users.get('alice').version.N, '2');
});

test('a user cannot read or write another user', async () => {
  assert.equal((await call('GET', '/users/me', 'bob')).status, 404);
  assert.equal((await call('PATCH', '/users/me', 'bob', { progress: {} })).status, 404);
  assert.equal(stored('alice').progress.longestStreak, 9);
});

test('GET returns the stored document', async () => {
  const r = await call('GET', '/users/me', 'alice');
  assert.equal(r.status, 200);
  assert.equal(r.body.progress.longestStreak, 9);
});

test('PATCH retries once on a concurrent write', async () => {
  const realSend = DynamoDBClient.prototype.send;
  let bumped = false;
  DynamoDBClient.prototype.send = async function (cmd) {
    if (!bumped && cmd.constructor.name === 'PutItemCommand') {
      bumped = true; // simulate another tab writing first
      const cur = tables.users.get('alice');
      tables.users.set('alice', { ...cur, version: { N: String(Number(cur.version.N) + 1) } });
    }
    return realSend.call(this, cmd);
  };
  const r = await call('PATCH', '/users/me', 'alice', { habits: { habits: [1] } });
  DynamoDBClient.prototype.send = realSend;
  assert.equal(r.status, 200);
  assert.deepEqual(stored('alice').habits, { habits: [1] });
});

test('beta signup stores only allowed fields', async () => {
  assert.equal((await call('PUT', '/beta-users/me', 'carol', { name: 'C', email: 'c@x', age: '30', gender: 'f', admin: true })).status, 200);
  const item = tables.beta.get('carol');
  assert.equal(item.name.S, 'C');
  assert.equal(item.admin, undefined);
});

test('unknown route is 404', async () => assert.equal((await call('DELETE', '/users/me', 'alice')).status, 404));
