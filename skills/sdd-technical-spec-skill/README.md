# SDD Technical Spec Skill

**Technical Specification** skill for a **Spec Driven Development** flow.

This skill transforms an already refined functional specification into an implementable technical design, without executing code changes yet. Its output must allow the implementation skill to work with clear boundaries, traceable artifacts, and sufficiently documented decisions.

## Position in the flow

```text
sdd-orchestrator
  → sdd-context-analysis
  → sdd-user-story-enrichment
  → sdd-functional-spec
  → sdd-technical-spec
  → sdd-api-contract # if applicable
  → sdd-migration-rollback # if applicable
  → sdd-security-review # if applicable
  → sdd-spec-validation
  → sdd-implementation
```

## What it produces

Main artifacts:

```text
/specs/<feature-id>/technical-spec.md
/specs/<feature-id>/implementation-plan.md
/specs/<feature-id>/technical-spec-report.md
```

Conditional artifacts:

```text
/specs/<feature-id>/architecture-impact.md
/specs/<feature-id>/backend-change-plan.md
/specs/<feature-id>/frontend-change-plan.md
/specs/<feature-id>/data-model-impact.md
/specs/<feature-id>/api-impact.md
/specs/<feature-id>/validation-rules.md
/specs/<feature-id>/technical-risk-register.md
```

## When to use it

Use it when a rich story and a sufficiently clear functional specification already exist, especially if the change affects:

- Backend.
- Frontend.
- Models or entities.
- API.
- Business states.
- Roles and permissions.
- Database.
- Validations.
- Integrations.
- Existing architecture or patterns.

## Key rule

This skill technically designs, but **does not implement**. You should not modify code, execute commands, create final migrations or correct tests. Its role is to prepare a clear delivery for subsequent skills.
