# Example: Admin / Analyst Panel — Migration & Rollback

##Context

Feature: new panel with differentiated permissions. Admin can create and modify plans/parameters. Analyst can search and query without editing.

## Persistence Impact

The persistent impact depends on the existing architecture:

```yaml
possible_impacts:
  - New tables or roles/permissions relationships if they do not exist.
  - New audit fields if editing plans/parameters requires traceability.
  - New indexes for searching plans and parameters.
  - No migration if roles, permissions and search already exist.
```

## Data Impact Assessment

| Area | Impact | Risk |
|---|---|---|
| Roles | May require seed or mapping | Medium |
| Permissions | May require persisted rules | Medium |
| Search | May require indexes | Low/Medium |
| Existing users | May require role assignment | Medium |

## Migration Plan — Conditional

### Case A: Roles already exist

```text
1. Do not create new tables.
2. Confirm existing values: admin, analyst.
3. Add search indexes if the technical spec requires them.
4. Validate which backend applies permissions per role.
```

### Case B: Roles do not exist

```text
1. Create or extend roles table/field.
2. Controlled seed for initial roles.
3. Define mapping of existing users.
4. Add constraints to avoid invalid roles.
5. Validate permissions from backend.
```

## Rollback Plan

```text
Code rollback:
  Roll back UI and management endpoints.

Rollback scheme:
  Keep additive structure if it does not break compatibility.

Data rollback:
  If new roles were assigned to existing users, document whether they are reverted or preserved.
```

## Verification Checklist

- [ ] Admin can create plan.
- [ ] Admin can modify parameter.
- [ ] Analyst can search.
- [ ] Analyst cannot create or edit.
- [ ] Restriction is in backend, not just in UI.
- [ ] Search indexes do not demote existing queries.

## Routing Recommendation

```yaml
skill: sdd-migration-rollback
status: MIGRATION_PLAN_READY
risk_level: medium
security_review_required: true
next_skill: sdd-security-permissions-review
reason: The feature affects permissions, roles, and potentially user data/administrative operations.
```
