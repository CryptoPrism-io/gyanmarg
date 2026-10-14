# Polymind API

User-data API for Polymind. It replaces the browser writing straight to Firestore.

- **Auth:** Firebase ID token in `Authorization: Bearer …`, verified against Google's signing certs (`aud`/`iss` = `social-data-pipeline-and-push`). The uid always comes from the token.
- **Storage:** DynamoDB `polymind-users` (one item per user, gzipped JSON `doc`, optimistic `version`) and `polymind-beta-users`. Both have point-in-time recovery and deletion protection.
- **Routes:** `GET|POST|PATCH /users/me`, `PUT /beta-users/me`.
- **URL:** https://dqr544m5uud7tam2f4kawetwsu0xguno.lambda-url.us-east-1.on.aws (stack `polymind-api`, us-east-1)

## Test

```bash
npm install
npm test
```

## Deploy

```bash
aws cloudformation package --template-file template.yaml \
  --s3-bucket cryptoprism-gcp-migration-backups-405633560616 \
  --s3-prefix lambda-artifacts/polymind-api --output-template-file packaged.yaml
aws cloudformation deploy --stack-name polymind-api --template-file packaged.yaml --capabilities CAPABILITY_IAM
```

## Firestore migration

`migrate_firestore.py <export.json> [--dry-run]` loads a full Firestore REST export. It is safe to re-run: it only creates missing users, refreshes users that are still the untouched migrated copy when Firestore is newer, never overwrites anything the app has written, and verifies every user field by field.
