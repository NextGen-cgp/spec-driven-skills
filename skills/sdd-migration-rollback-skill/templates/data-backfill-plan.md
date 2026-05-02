# Data Backfill Plan

## Metadata

-Feature ID:
- Skill: `sdd-migration-rollback`
- Required: yes/no
- Status:

## 1.Purpose

Explain why existing data needs to be populated, normalized, recalculated or repaired.

## 1. Target Data

| Object | Field/state | Source value | Target value | Rule |
|---|---|---|---|---|
|  |  |  |  |  |

## 2. Backfill Strategy

```text
- Synchronous migration
- Separate script/job
-Batched process
- Lazy backfill on read/write
- Manual data correction
```

## 3. Idempotency

Explain how the backfill avoids duplicate or inconsistent updates if executed more than once.

## 4. Validation

- [ ] Count expected affected records.
- [ ] Count updated records.
- [ ] Validate no invalid nulls remain.
- [ ] Validate state transitions are consistent.
- [ ] Validate representative records manually if required.

## 5. Rollback

Explain whether backfilled data can be reverted and how.

## 6. Risks

| Risk | Level | Mitigation |
|---|---|---|
|  |  |  |
