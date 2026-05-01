# Spec Readiness Checklist

## Required Artifacts

- [ ] `request.md` exists and preserves the original request.
- [ ] `context-analysis.md` identifies stack, architecture, patterns and affected modules.
- [ ] `user-story.md` defines actor, goal and value.
- [ ] `acceptance-criteria.md` contains verifiable criteria.
- [ ] `functional-spec.md` defines behavior, scope and rules.
- [ ] `technical-spec.md` defines implementation boundaries and impacted components.

## Conditional Artifacts

- [ ] `api-contract.md` exists if endpoints, payloads or frontend/backend contracts change.
- [ ] `data-contract.md` exists if data structures, DTOs or responses change.
- [ ] `migration-plan.md` exists if persistence changes.
- [ ] `rollback-plan.md` exists if migration/backfill/persistent changes are introduced.
- [ ] `security-permissions-review.md` exists if roles, auth, write operations or sensitive data are affected.
- [ ] `test-plan.md` exists if the change is non-trivial.

## Functional Readiness

- [ ] Scope is explicit.
- [ ] Out of scope is explicit.
- [ ] Actors are clear.
- [ ] Main flows are clear.
- [ ] Alternative flows are clear.
- [ ] Business rules are explicit.
- [ ] UI behavior is defined when applicable.
- [ ] State transitions are defined when applicable.

## Technical Readiness

- [ ] Affected modules are identified.
- [ ] Backend changes are defined when applicable.
- [ ] Frontend changes are defined when applicable.
- [ ] Data model changes are defined when applicable.
- [ ] Validation rules are defined.
- [ ] Error handling is defined.
- [ ] Compatibility constraints are defined.
- [ ] Risks are documented.

## Security Readiness

- [ ] Roles and permissions are clear.
- [ ] Backend authorization is required where needed.
- [ ] No operation relies only on UI hiding.
- [ ] Data exposure is minimal.
- [ ] Critical actions are protected.
- [ ] Authorization tests are included when applicable.

## Test Readiness

- [ ] Each acceptance criterion maps to at least one verification method.
- [ ] Positive cases are covered.
- [ ] Negative cases are covered.
- [ ] Boundary cases are covered.
- [ ] Regression cases are covered.
- [ ] Migration verification exists when applicable.
- [ ] Security/authorization verification exists when applicable.

## Implementation Gate

- [ ] Implementation can proceed without inventing requirements.
- [ ] No critical blocker remains.
- [ ] Next skill is clearly identified.
