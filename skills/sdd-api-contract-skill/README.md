# SDD API Contract Skill

**API / Data Contracts** skill for a **Spec Driven Development** flow.

This skill is executed after the technical specification when a change affects endpoints, backend actions, payloads, responses, errors, exchanged data models, permissions per operation or integrations.

## Position in the flow

```text
sdd-orchestrator
  → sdd-context-analysis
  → sdd-user-story-enrichment
  → sdd-functional-spec
  → sdd-technical-spec
  → sdd-api-contract
  → sdd-migration-rollback # if applicable
  → sdd-security-review # if applicable
  → sdd-spec-validation
  → sdd-implementation
```

## What it produces

Main artifacts:

```text
/specs/<feature-id>/api-contract.md
/specs/<feature-id>/data-contract.md
/specs/<feature-id>/error-contract.md
/specs/<feature-id>/api-contract-report.md
```

Conditional artifacts:

```text
/specs/<feature-id>/endpoint-spec.md
/specs/<feature-id>/frontend-backend-contract.md
/specs/<feature-id>/operation-permissions-contract.md
/specs/<feature-id>/contract-test-plan.md
/specs/<feature-id>/compatibility-notes.md
/specs/<feature-id>/openapi-draft.yaml
```

## When to use it

Use it if the change affects:

- HTTP Endpoints.
- Backend actions.
- Entry payloads.
- API responses.
- Error codes.
- States exposed to the frontend.
- Permits per operation.
- Data models exchanged.
- Integrations between services.

## When not to use it

It does not apply if the change is purely visual, documentary or internal and does not alter data contracts or actions between layers.

## Key rule

This skill **does not implement**. Its function is to leave contracts clear enough so that implementation, testing, security and review can work without ambiguity.
