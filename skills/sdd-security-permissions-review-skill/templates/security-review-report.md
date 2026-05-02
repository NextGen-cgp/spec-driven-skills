# Security Review Report: <feature-id>

## 1. Result

```yaml
status: <SECURITY_APPROVED | SECURITY_APPROVED_WITH_WARNINGS | SECURITY_CHANGES_REQUIRED | SECURITY_BLOCKED | NOT_APPLICABLE>
review_type: <pre_spec_validation | post_implementation | post_test | final_gate>
next_skill: <sdd-spec-validation | sdd-technical-spec | sdd-api-contract | sdd-migration-rollback | sdd-review>
blocked: true|false
```

## 2. Executive decision

Summarize in 3-5 lines whether the change can advance, under what conditions and what risks are registered.

## 3. Points reviewed

- [ ] Roles and permissions.
- [ ] Endpoints or backend actions.
- [ ] Write operations.
- [ ] State transitions.
- [ ] Backend validations.
- [ ] Data exposure.
- [ ] Migrations or data impact.
- [ ] Authorization tests.

## 4. Blockers

| ID | Severity | Description | Action required |
|---|---|---|---|
|  |  |  |  |

## 5. Warnings

| ID | Severity | Description | Tracking |
|---|---|---|---|
|  |  |  |  |

## 6. Final recommendation

```text
- Advance to spec validation.
- Return to technical spec.
- Return to API contract.
- Return to migration rollback.
- Execute post-implementation review.
```
