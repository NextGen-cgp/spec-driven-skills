# Migration Plan

## Metadata

- Feature ID:
- Skill: `sdd-migration-rollback`
- Source technical spec:
- Source data contract:
- Date:
- Owner:
- Status:

## 1. Scope

### Included

- 

### Excluded

- 

## 2. Current State

Describe the current persistence model:

- Tables/entities:
- Columns/fields:
- Relations:
- Existing states:
- Existing constraints:
- Existing indexes:

## 3. Target State

Describe the target persistence model:

- New/modified tables:
- New/modified columns:
- New/modified relations:
- New/modified states:
- New/modified constraints:
- New/modified indexes:

## 4. Change Classification

| Change | Type | Object | Reversible | Risk |
|---|---|---|---|---|
|  | schema_additive / schema_breaking / data_backfill / state_change / seed_data / index_performance / relationship_change |  | yes/no | low/medium/high/critical |

## 5. Migration Strategy

Recommended approach:

```text
1. Add compatible structure first.
2. Keep old behavior working during transition.
3. Backfill or seed data if required.
4. Deploy compatible application code.
5. Verify functionality and data consistency.
6. Remove deprecated structure only in a later migration if required.
```

## 6. Migration Steps

| Order | Step | Type | Depends on | Reversible | Verification |
|---:|---|---|---|---|---|
| 1 |  |  |  | yes/no |  |

## 7. Deployment Sequence

```text
1. Pre-checks
2. Apply schema migration
3. Apply seed/backfill if needed
4. Deploy backend/frontend code
5. Run post-checks
6. Validate acceptance criteria
```

## 8. Pre-Checks

- [ ] Confirm backup/snapshot strategy if applicable.
- [ ] Confirm target environment.
- [ ] Confirm current schema matches expected baseline.
- [ ] Confirm affected rows count.
- [ ] Confirm no incompatible application version is running.

## 9. Post-Checks

- [ ] Confirm migration completed.
- [ ] Confirm expected objects exist.
- [ ] Confirm expected constraints/indexes exist.
- [ ] Confirm affected records are consistent.
- [ ] Confirm app-level workflow works.
- [ ] Confirm no critical errors in logs.

## 10. Risks and Mitigations

| Risk | Level | Mitigation | Owner |
|---|---|---|---|
|  |  |  |  |

## 11. Traceability

| Migration item | Functional rule | Acceptance criterion | Technical decision |
|---|---|---|---|
|  |  |  |  |
