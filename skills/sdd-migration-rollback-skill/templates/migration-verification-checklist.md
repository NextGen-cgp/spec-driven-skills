# Migration Verification Checklist

## Metadata

-Feature ID:
- Skill: `sdd-migration-rollback`
- Status:

## Pre-Migration Checks

- [ ] Environment confirmed.
- [ ] Schema baseline confirmed.
- [ ] Backup/snapshot strategy confirmed if required.
- [ ] Affected records count captured.
- [ ] Required permissions confirmed.
- [ ] Maintenance window or deployment strategy confirmed if required.

## Migration Checks

- [ ] Migration applied without errors.
- [ ] Expected tables/columns/indexes/constraints exist.
- [ ] Defaults and nullability behave as expected.
- [ ] Backfill/seed executed if required.
- [ ] No unexpected row count changes.

## Post-Migration Functional Checks

- [ ] Main use case works.
- [ ] Alternative use case works.
- [ ] Error/validation case works.
- [ ] Role/permission case works if applicable.
- [ ] Existing behavior has no regression.

## Post-Migration Technical Checks

- [ ] Logs reviewed.
- [ ] Slow queries reviewed if applicable.
- [ ] API contract still valid.
- [ ] Tests pass.
- [ ] Monitoring or health checks are clean.

## Rollback Readiness

- [ ] Rollback plan reviewed.
- [ ] Rollback triggers defined.
- [ ] Irreversible changes documented.
- [ ] Manual approvals identified if required.
