# Routing example: parameter canceled in analysis

## Original request

> In the analysis records it is necessary to cancel a complete parameter so that it is not mandatory to fill it in and it is not computed in the overall result of the analysis. It must be able to be reopened later.

# SDD Routing

## 1. Request classification

- Main type: feature
- Secondary types: ui_change, database_change, business_rules, test_required
- Estimated risk: high
- Probable affected modules:
  - Analysis log UI
  - Parameter status
  - Global analysis calculation
  - Persistence of samples/parameters
  - Completion validations
  - Business rules tests

## 2. Current status detected

- Status: INTAKE
- Existing artifacts:
  - request.md
- Missing artifacts:
  - context-analysis.md
  - user-story.md
  - acceptance-criteria.md
  - functional-spec.md
  - technical-spec.md
  - migration-plan.md
  - rollback-plan.md
  - test-plan.md
  - spec-validation-report.md
- Locks:
  - It is not defined whether the canceled state is stored in the parameter entity of the analysis, sample or intermediate relationship.
  - It is not defined how exactly it should affect existing full analysis validations.

## 3. Routing decision

- Next skill: context-analysis
- Reason: the change affects critical business logic, visual state, persistence and global calculation. We must first review how analyses, parameters and samples are currently modeled.
- Entry you must receive:
  - Original request.
  - Current analysis modules.
  - Analysis entities/tables, parameters and samples.
  - Current global calculation logic.
- Expected output:
  - context-analysis.md

## 4. Applicable Gates

- Implementation gate: blocked until spec validated.
- Security gate: not mandatory unless it affects role permissions.
- Database gate: required if new persistent state is added.
- API Gate: likely if there are cancel/reopen endpoints.
- Test gate: mandatory.
- PR Gate: mandatory.

## 5. Recommended flow

1. context-analysis
2. user-story-enrichment
3. functional-spec
4.technical-spec
5. api-contract, if there are endpoints
6. migration-rollback, if there is persistence change
7. spec-validation
8.implementation
9. test
10. final-review
11. documentation-pr

## 6. Immediate action

Run `context-analysis`.
