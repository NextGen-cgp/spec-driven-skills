# Routing example: panel for admins and analysts

## Original request

> A new panel is required for admins and analysts with different permissions depending on the role. The admin role will have a data modification panel, where you can register new quality plans and parameters, modify existing plans and parameters, and with a search function. Analysts will be able to search for quality plans and parameters, but without the ability to edit them or create new ones.

# SDD Routing

## 1. Request classification

- Main type: feature
- Secondary types: permissions, security, ui_change, api_change
- Estimated risk: high
- Probable affected modules:
  - Frontend
  - Protected routes
  - Backend
  - Authorization by role
  - Quality plans
  - Parameters
  - Search components
  - Registration/editing forms

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
  - api-contract.md
  - security-review.md
  - spec-validation-report.md
- Locks:
  - The exact permissions contract per endpoint is not yet defined.
  - It is not confirmed whether the current authorization applies only to the frontend or also to the backend.

## 3. Routing decision

- Next skill: context-analysis
- Reason: the change affects UI, backend, permissions and possible endpoints. Before enriching the story, you must understand architecture, visual patterns and the current role system.
- Entry you must receive:
  - Original request.
  - Repo structure.
  - Authentication/authorization files.
  - Current components of plans and parameters.
- Expected output:
  - context-analysis.md

## 4. Applicable Gates

- Implementation gate: blocked until spec validated.
- Security gate: mandatory.
- Database gate: pending confirmation.
- API Gate: probable.
- Test gate: mandatory.
- PR Gate: mandatory.

## 5. Recommended flow

1. context-analysis
2. user-story-enrichment
3. functional-spec
4.technical-spec
5. api-contract
6.security-permissions-review
7. spec-validation
8.implementation
9. test
10. security-permissions-review
11. final-review
12. documentation-pr

## 6. Immediate action

Run `context-analysis`.
