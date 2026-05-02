# Example: Feature Admin / Analyst Panel - Test

## Decision

```text
Decision: TEST_PASSED
Next skill: sdd-security-permissions-review
Reason: The change affects role permissions and requires post-implementation review even if the functional tests pass.
```

##Scope

Validate that the `ADMIN` role can create, modify and search for plans/parameters, while the `ANALYST` role can only search and view.

## Acceptance validation

| ID | Criterion | State | Evidence |
|---|---|---|---|
| AC-001 | Admin accesses the modification panel | PASSED | Admin panel navigation and rendering test |
| AC-002 | Admin creates new quality plan | PASSED | Service test + UI validation |
| AC-003 | Analyst can search for plans | PASSED | Functional test with user analyst |
| AC-004 | Analyst cannot create or edit | PASSED | UI + API validation returns 403 |
| AC-005 | Aesthetics respect existing pattern | PARTIAL | Requires human visual review |

##Commands

```bash
npm test
npm run build
npm run lint
```

##Notes

Although the functional result is correct, the flow must go through `sdd-security-permissions-review` because there are role-protected operations.
