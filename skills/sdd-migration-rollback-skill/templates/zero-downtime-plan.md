# Zero-Downtime Migration Plan

## Metadata

- Feature ID:
- Skill: `sdd-migration-rollback`
- Required: yes/no
- Status:

## 1. Need for Zero-Downtime

Explain why the migration must avoid downtime or support rolling deployment.

## 2. Expand and Contract Strategy

```text
Expand:
  Add new compatible structures.

Migrate:
  Backfill or synchronize data.

Switch:
  Move reads/writes to new structures.

Contract:
  Remove old structures later.
```

## 3. Transitional Compatibility

- Old code can read new schema:
- New code can read old schema:
- Dual-read required:
- Dual-write required:

## 4. Monitoring During Migration

- Metrics:
- Logs:
- Alerts:
- Manual checks:

## 5. Abort Conditions

- 
