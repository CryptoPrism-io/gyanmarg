// Run: npm test
import test from 'node:test';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';

process.env.FIREBASE_PROJECT_ID = 'proj-x';
const { verifyIdToken } = await import('../src/index.mjs');

const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', { modulusLength: 2048 });
const other = crypto.generateKeyPairSync('rsa', { modulusLength: 2048 });
const certs = { k1: publicKey.export({ type: 'spki', format: 'pem' }) };
const now = 1_700_000_000;

function sign(payload, { key = privateKey, kid = 'k1', alg = 'RS256' } = {}) {
  const enc = (o) => Buffer.from(JSON.stringify(o)).toString('base64url');
  const data = `${enc({ alg, kid })}.${enc(payload)}`;
  return `${data}.${crypto.sign('RSA-SHA256', Buffer.from(data), key).toString('base64url')}`;
}
const good = { aud: 'proj-x', iss: 'https://securetoken.google.com/proj-x', sub: 'uid123', iat: now - 10, exp: now + 3600 };
const v = (t) => verifyIdToken(t, { certs, now });

test('accepts a valid token', async () => assert.equal((await v(sign(good))).sub, 'uid123'));
test('rejects wrong signing key', () => assert.rejects(v(sign(good, { key: other.privateKey })), /bad signature/));
test('rejects unknown kid', () => assert.rejects(v(sign(good, { kid: 'nope' })), /unknown kid/));
test('rejects alg other than RS256', () => assert.rejects(v(sign(good, { alg: 'none' })), /bad alg/));
test('rejects other project (aud)', () => assert.rejects(v(sign({ ...good, aud: 'evil' })), /bad aud/));
test('rejects wrong issuer', () => assert.rejects(v(sign({ ...good, iss: 'https://evil' })), /bad iss/));
test('rejects expired', () => assert.rejects(v(sign({ ...good, exp: now - 1 })), /expired/));
test('rejects empty sub', () => assert.rejects(v(sign({ ...good, sub: '' })), /bad sub/));
test('rejects tampered payload', async () => {
  const [h, , s] = sign(good).split('.');
  const p = Buffer.from(JSON.stringify({ ...good, sub: 'victim' })).toString('base64url');
  await assert.rejects(v(`${h}.${p}.${s}`), /bad signature/);
});
test('rejects malformed', () => assert.rejects(v('abc'), /malformed/));
