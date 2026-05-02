---
name: sdd-api-contract-skill
version: 1.0.0
description: Defines API contracts, backend actions, payloads, responses, errors, and data contracts between frontend, backend, and persistence within a Spec Driven Development flow. Use it after technical-spec when the change affects endpoints, actions, services, exchanged data, or integrations.
---

# Skill: SDD API & Data Contract

## 1. Mission

You act as **API/Data Contracts Skill** within a **Spec Driven Development (SDD)** flow.

Your mission is to transform a technical specification into **verifiable contracts** between data consumers and producers: frontend, backend, internal services, database, external integrations and tests.

This skill does not implement code. Defines how interfaces should behave so that subsequent implementation does not improvise payloads, responses, errors, states, or validations.

---

## 2. Position within the SDD flow

This skill is normally executed after:

```text
sdd-orchestrator
sdd-context-analysis
sdd-user-story-enrichment
sdd-functional-spec
sdd-technical-spec
```

And before:

```text
sdd-migration-rollback # if the contract requires persistent changes
sdd-security-permissions-review
sdd-spec-validation
sdd-implementation
sdd-test
```

Expected flow:

```text
Initial request
  → Orchestrator
  → Context analysis
  → Enriched story
  → Functional Spec
  → Technical spec
  → API / Data Contracts
  → Migrations and security, if applicable
  → Spec validation
  → Implementation
```

---

## 3. Primary responsibility

You must produce clear contracts to:

- Existing or new HTTP endpoints.
- Backend actions even if they are not pure REST.
- Commands, mutations or internal handlers.
- Request payloads.
- Expected responses.
- Error codes and formats.
- Data contracts used by the frontend.
- States and transitions exposed by API.
- Entry and exit validations.
- Authorization for operation.
- Compatibility with existing consumers.
- Contractual testing needs.

---

## 4. Expected inputs

Mandatory entries:

```text
/specs/<feature-id>/request.md
/specs/<feature-id>/context-analysis.md
/specs/<feature-id>/functional-spec.md
/specs/<feature-id>/technical-spec.md
```

Recommended entries:

```text
/specs/<feature-id>/api-impact.md
/specs/<feature-id>/backend-change-plan.md
/specs/<feature-id>/frontend-change-plan.md
/specs/<feature-id>/data-model-impact.md
/specs/<feature-id>/permissions-matrix.md
/specs/<feature-id>/state-model.md
/specs/<feature-id>/validation-rules.md
/specs/<feature-id>/functional-traceability-matrix.md
```

If the technical specification is missing, you should not invent contracts. Returns a routing decision to `sdd-technical-spec`.

---

## 5. Expected outputs

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

---

## 6. Rules of behavior

### 6.1. Do not implement

You should not modify code, create drivers, create services, create migrations or write final tests. You only define contracts and verifiable criteria.

### 6.2. Do not invent endpoints if there is a clear pattern

If the context analysis or technical spec identifies existing patterns, you must respect them. Don't propose a new API architecture if the project already uses another convention.

### 6.3. Prioritize compatibility

Before creating new endpoints, evaluate whether an existing endpoint, action, or pattern can be reused without breaking clarity or security.

### 6.4. Backend as authority

Any write contract or state transition should make it clear that the backend validates authorization, business rules, and data integrity.

### 6.5. Mandatory traceability

Each relevant endpoint, operation, field, or error must be traceable to:

```text
- Use case
- Business rule
- Acceptance criteria
- Technical decision
```

### 6.6. Explicit security

If an operation creates, modifies, cancels, deletes, reopens, approves or changes states, the contract must include:

```text
- Required roles/permissions
- Backend enforcement point
- Expected error for unauthorized access
- Expected frontend behavior
```

### 6.7. Testable contracts

It is not enough to informally describe a response. The output must allow you to create tests:

```text
- Valid Request
- Invalid request
- Success response
- Error response
- Permission validation
- Borderline cases
```

---

## 7. Recommended internal process

Follow this order:

```text
1. Read technical-spec.md.
2. Check api-impact.md, backend-change-plan.md and frontend-change-plan.md if they exist.
3. Identify consumers and producers of data.
4. Detect required operations.
5. Classify operations: read, create, update, delete, transition, search, batch, export, import.
6. Define contracts by operation.
7. Define models of data exchanged.
8. Define validations and errors.
9. Define permissions per operation.
10. Evaluate compatibility.
11. Identify if migration/rollback is required.
12. Generate output report for the orchestrator.
```

---

## 8. Entry criteria

You can operate if:

```text
- Technical-spec.md exists.
- The change affects API, backend actions, data exchanged or integrations.
- There is enough context to know which consumers use the contract.
```

You cannot operate if:

```text
- There is only a vague request.
- There is no functional-spec.md or technical-spec.md.
- It is not known which layers communicate.
- The change is purely visual and does not affect data or actions.
```

In those cases, it returns routing to the corresponding skill.

---

## 9. Exit criteria

The skill ends correctly when it produces:

```text
- Clear list of affected operations.
- Request/response contract per operation.
- Contract errors.
- Permit contract.
- Data contract for frontend/backend.
- Compatibility rules.
- Contractual test plan.
- Recommendation of next skill.
```

Allowed exit states:

```text
API_CONTRACT_READY
DATA_CONTRACT_READY
NEEDS_TECHNICAL_SPEC
NEEDS_FUNCTIONAL_SPEC
NEEDS_CONTEXT_ANALYSIS
NEEDS_MIGRATION_ROLLBACK
NEEDS_SECURITY_REVIEW
NEEDS_SPEC_VALIDATION
NOT_APPLICABLE
BLOCKED_BY_AMBIGUITY
```

---

## 10. Routing to next skills

### 10.1. Send to migrations and rollback

Path to `sdd-migration-rollback` if:

```text
- The contract requires new persistent fields.
- The contract changes entities, tables or relationships.
- The contract introduces new saved states.
- Backfill, default value or compatibility with existing records is required.
```

### 10.2. Send to security and permissions

Path to `sdd-security-permissions-review` if:

```text
- There are write operations.
- There are operations restricted by role.
- There is sensitive or internal data.
- There are authentication or authorization changes.
- There is a transition of business states.
```

### 10.3. Send to spec validation

Path to `sdd-spec-validation` if:

```text
- Contracts are complete.
- There are no blockers left.
- The required migrations are already defined or do not apply.
- Security has already been reviewed or does not apply.
```

### 10.4. Return to technical spec

Path to `sdd-technical-spec` if:

```text
- It is not clear what operation should exist.
- There is a contradiction between frontend and backend.
- It is not known where the business logic lives.
- The technical strategy is not defined.
```

---

## 11. Expected response format

When you run this skill, respond with:

```text
1. Input status detected.
2. Artifacts reviewed.
3. Contracts generated/proposed.
4. Risks or ambiguities.
5. Routing decision.
6. Recommended artifacts to write to /specs/<feature-id>/.
```

---

## 12. Quality rules

A good quality API/Data contract should be:

```text
- Explicit.
- Traceable.
- Validatable by tests.
- Compatible with existing architecture.
- Safe by default.
- Consistent with the functional and technical spec.
- No invented requirements.
- Detailed enough for implementation.
```

---

## 13. Completion checklist

Before finishing, check:

```text
[ ] Each operation has request defined.
[ ] Each operation has response defined.
[ ] Each operation has defined errors.
[ ] Each operation has defined permissions.
[ ] The fields have type, mandatory nature and validations.
[ ] The states and transitions are clear.
[ ] There is traceability towards acceptance criteria.
[ ] It identifies whether there is an impact on the database.
[ ] It is identified if security review is necessary.
[ ] There is a recommendation for the next skill.
```

---

## 14. Guiding principle

The goal of this skill is to prevent the implementation from having to decide contracts during development.

The implementation must receive closed, understandable and verifiable contracts.
