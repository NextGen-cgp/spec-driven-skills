# Example: Admin / Analyst Panel Spec Validation

## Decision

```text
NEEDS_REFINEMENT
```

## Next Skill

```text
sdd-security-permissions-review
```

## Validation Summary

The feature is functionally and technically described, but it cannot proceed to implementation because the permission model is not yet explicit enough. The spec defines that admins can create and edit quality plans and parameters, while analysts can search and view them, but backend enforcement and operation-level permissions are not fully mapped.

## Blocking Issues

| ID | Severity | Issue | Route To |
|---|---|---|---|
| VAL-001 | CRITICAL | Admin and analyst operations are described at UI level, but backend authorization requirements are incomplete. | sdd-security-permissions-review |
| VAL-002 | HIGH | There is no operation-permissions contract mapping create/edit/search/view actions to roles. | sdd-api-contract |

## Artifact Readiness

| Artifact | Status | Notes |
|---|---:|---|
| request.md | Present | Original request preserved. |
| context-analysis.md | Present | Project patterns identified. |
| user-story.md | Present | Actors and goals are clear. |
| functional-spec.md | Present | UI behavior and role separation are described. |
| technical-spec.md | Present | Backend and frontend impact defined. |
| api-contract.md | Incomplete | Missing operation permissions per endpoint. |
| security-permissions-review.md | Missing | Required because roles and write operations are affected. |
| test-plan.md | Incomplete | Authorization tests missing. |

## Gate Decision

```text
Implementation Gate: FAIL
Security Gate: FAIL
API Gate: FAIL
Test Gate: FAIL
```

## Required Remediation

| ID | Target Skill | Action | Priority |
|---|---|---|---|
| REM-001 | sdd-security-permissions-review | Define role-operation matrix and backend authorization expectations. | critical |
| REM-002 | sdd-api-contract | Add permission rules per endpoint/action. | high |
| REM-003 | sdd-test-planning | Add tests verifying analysts cannot create or edit data. | high |
