#RollbackPlan

## Metadata

-Feature ID:
- Skill: `sdd-migration-rollback`
- Related migration plan:
- Status:

## 1. Rollback Strategy

Describe whether rollback is:

```text
- Fully reversible
- Partially reversible
- Code-only rollback
- Schema-only rollback
- Data rollback requiring backup
- Forward-fix recommended
```

## 2. Rollback Triggers

Rollback should be considered if:

- 

## 3. Code Rollback

Describe how application code can be reverted safely:

- Backend:
- Frontend:
- Jobs/workers:
- Feature flags, if any:

## 4. Schema Rollback

| Step | Action | Risk | Validation |
|---:|---|---|---|
| 1 |  |  |  |

## 5. Data Rollback

Describe how data changes can be reverted:

- No data rollback required:
- Manual correction required:
- Backup restore required:
- Forward-fix preferred:

## 6. Irreversible Changes

| Change | Why irreversible | Mitigation |
|---|---|---|
|  |  |  |

## 7. Validation After Rollback

- [ ] Application starts correctly.
- [ ] Previous workflow works.
- [ ] New incompatible data does not break old code.
- [ ] No orphan records exist.
- [ ] Logs show no critical errors.

## 8. Decision Notes

- Recommended rollback option:
- Manual intervention required:
- Approval required before rollback:
