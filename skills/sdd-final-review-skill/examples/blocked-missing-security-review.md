# Example: Blocked Review - Missing Required Security Review

## Decision

```text
FINAL_REVIEW_BLOCKED
```

## Summary

The change modifies admin and analyst permissions, but no `security-permissions-review.md`, `post-implementation-security-review.md` or `authz-test-report.md` was provided. The final review cannot approve a role-sensitive implementation without evidence of backend authorization review and tests.

## Blocking Finding

| ID | Severity | Category | Description | Recommendation | Route To |
|---|---|---|---|---|---|
| FR-001 | BLOCKER | security | Required security review is missing for a permissions-sensitive change. | Execute `sdd-security-permissions-review` and produce authz test evidence. | sdd-security-permissions-review |

## Next Route

```text
sdd-security-permissions-review
```
