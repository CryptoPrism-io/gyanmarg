"""Copy Polymind users from a Firestore REST export into DynamoDB, then verify.

Input is the JSON written by a full Firestore export ({"collections": {"users": [...]}}).
Safe to re-run:
  * a user not yet in DynamoDB is created;
  * a user already there is refreshed ONLY if it is still the migrated copy
    (version 1, never written by the new app) and Firestore has a newer updateTime;
  * anything the new app has written (version > 1) is never touched.
Every user is read back and compared field-by-field with the source.

Usage: python migrate_firestore.py <export.json> [--dry-run]
"""
import gzip, json, sys
from datetime import datetime, timezone

import boto3
from botocore.exceptions import ClientError

TABLE = "polymind-users"
ddb = boto3.client("dynamodb", region_name="us-east-1")


def plain(v):
    """Firestore typed REST value -> plain JSON (timestamps become ISO-8601 strings)."""
    (kind, x), = v.items()
    if kind == "nullValue": return None
    if kind in ("stringValue", "booleanValue"): return x
    if kind == "integerValue": return int(x)
    if kind == "doubleValue": return float(x)
    if kind == "timestampValue":
        return datetime.fromisoformat(x.replace("Z", "+00:00")).astimezone(timezone.utc) \
            .isoformat(timespec="milliseconds").replace("+00:00", "Z")
    if kind == "mapValue": return {k: plain(i) for k, i in x.get("fields", {}).items()}
    if kind == "arrayValue": return [plain(i) for i in x.get("values", [])]
    raise ValueError(f"unsupported Firestore type {kind}")


def unpack(item):
    return json.loads(gzip.decompress(item["doc"]["B"]).decode("utf-8"))


def main(path, dry_run):
    users = json.load(open(path, encoding="utf-8"))["collections"]["users"]
    created = refreshed = skipped = 0
    for src in users:
        uid = src["name"].rsplit("/", 1)[-1]
        doc = {k: plain(v) for k, v in src.get("fields", {}).items()}
        doc["uid"] = uid
        src_updated = src["updateTime"]
        item = {
            "uid": {"S": uid},
            "doc": {"B": gzip.compress(json.dumps(doc, ensure_ascii=False).encode("utf-8"))},
            "version": {"N": "1"},
            "email": {"S": doc.get("email") or ""},
            "lastSyncAt": {"S": doc.get("lastSyncAt") or ""},
            "migratedFrom": {"S": "firestore:social-data-pipeline-and-push"},
            "sourceUpdateTime": {"S": src_updated},
        }
        cur = ddb.get_item(TableName=TABLE, Key={"uid": {"S": uid}}, ConsistentRead=True).get("Item")
        if cur is None:
            action, cond = "create", {"ConditionExpression": "attribute_not_exists(uid)"}
        elif cur["version"]["N"] == "1" and cur.get("sourceUpdateTime", {}).get("S", "") < src_updated:
            action, cond = "refresh", {
                "ConditionExpression": "version = :one AND sourceUpdateTime = :prev",
                "ExpressionAttributeValues": {":one": {"N": "1"}, ":prev": cur["sourceUpdateTime"]},
            }
        else:
            why = "written by new app" if cur["version"]["N"] != "1" else "already current"
            print(f"skip    {uid[:6]}… ({why})")
            skipped += 1
            continue
        print(f"{action:7} {uid[:6]}… {len(item['doc']['B']) // 1024} KB gz")
        if not dry_run:
            try:
                ddb.put_item(TableName=TABLE, Item=item, **cond)
            except ClientError as e:
                if e.response["Error"]["Code"] == "ConditionalCheckFailedException":
                    print(f"  changed underneath, left alone: {uid[:6]}…"); skipped += 1; continue
                raise
        created += action == "create"; refreshed += action == "refresh"

    # Verify: every source user exists and round-trips exactly (unless the app has since written it).
    mismatches = 0
    for src in users:
        uid = src["name"].rsplit("/", 1)[-1]
        cur = ddb.get_item(TableName=TABLE, Key={"uid": {"S": uid}}, ConsistentRead=True).get("Item")
        if cur is None:
            if not dry_run: print(f"MISSING {uid[:6]}…"); mismatches += 1
            continue
        if cur["version"]["N"] != "1":
            continue
        expected = {k: plain(v) for k, v in src.get("fields", {}).items()}
        expected["uid"] = uid
        if unpack(cur) != expected:
            print(f"MISMATCH {uid[:6]}…"); mismatches += 1
    print(f"\nsource={len(users)} created={created} refreshed={refreshed} skipped={skipped} "
          f"mismatches={mismatches}{' (dry run)' if dry_run else ''}")
    return 1 if mismatches else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1], "--dry-run" in sys.argv))
