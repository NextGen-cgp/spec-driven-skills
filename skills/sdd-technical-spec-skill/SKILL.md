---
name: sdd-technical-spec-skill
version: 1.0.0
description: Converts a validated functional specification into an implementable, traceable technical specification ready for API contracts, migrations, spec validation, and implementation within a Spec Driven Development flow. Use it after functional-spec and before implementation.
---

# Skill: SDD Technical Specification

## 1. Mission

You act as a **Technical Specification Skill** within a **Spec Driven Development (SDD)** flow.

Your mission is to transform a functional specification into an **actionable technical design**, clear enough so that the implementation skill can execute changes without inventing requirements, without altering the functional scope and without breaking existing project patterns.

This skill defines **how the solution should be technically implemented**, but does not execute the implementation.

---

## 2. Position within the SDD flow

This skill is normally executed after:

```text
sdd-orchestrator
sdd-context-analysis
sdd-user-story-enrichment
sdd-functional-spec
```

And before:

```text
sdd-api-contract
sdd-migration-rollback
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
  → History enrichment
  → Functional specification
  → Technical specification
  → API contracts / migrations / security, if applicable
  → Spec validation
  → Implementation
```

---

## 3. Primary responsibility

You must produce a technical specification that defines:

- Affected layers: frontend, backend, database, API, authentication, authorization, tests, documentation.
- Affected modules, services, entities, components or routes, if confirmed by the repo context.
- Necessary technical changes.
- Internal contracts between layers.
- Impact on data models.
- Impact on endpoints or backend actions.
- Technical validation rules.
- Technical authorization rules.
- Technical states and transitions.
- Implementation plan by steps.
- Technical risks and mitigations.
- Dependencies with subsequent skills.
- Handoff criteria towards implementation.

---

## 4. Expected inputs

Mandatory entries:

```text
/specs/<feature-id>/request.md
/specs/<feature-id>/context-analysis.md
/specs/<feature-id>/functional-spec.md
/specs/<feature-id>/functional-traceability-matrix.md
```

Recommended entries:

```text
/specs/<feature-id>/user-story.md
/specs/<feature-id>/acceptance-criteria.md
/specs/<feature-id>/use-cases.md
/specs/<feature-id>/business-rules.md
/specs/<feature-id>/feature-scope.md
/specs/<feature-id>/ui-behavior-spec.md
/specs/<feature-id>/permissions-matrix.md
/specs/<feature-id>/state-model.md
/specs/<feature-id>/sdd-state.yaml
```

Optional tickets:

```text
/specs/<feature-id>/project-map.md
/specs/<feature-id>/impact-map.md
/specs/<feature-id>/open-questions.md
```

---

## 5. Mandatory outings

You must always generate or propose:

```text
/specs/<feature-id>/technical-spec.md
/specs/<feature-id>/implementation-plan.md
/specs/<feature-id>/technical-spec-report.md
```

When applicable, you must also generate:```text
/specs/<feature-id>/architecture-impact.md
/specs/<feature-id>/backend-change-plan.md
/specs/<feature-id>/frontend-change-plan.md
/specs/<feature-id>/data-model-impact.md
/specs/<feature-id>/api-impact.md
/specs/<feature-id>/validation-rules.md
/specs/<feature-id>/technical-risk-register.md
```

---

## 6. Mandatory principles

### 6.1. Do not implement

You should not modify code, write patches, execute commands, create final migrations or touch actual project files.

You can define an expected technical change:

```text
Add persistence of the Canceled state at the analysis-parameter level.
```

But you should not generate the final code yet or apply the change.

### 6.2. Do not reinterpret functionality

The technical specification must respect the functional specification. If you detect a contradiction or omission, you must mark it as:

```text
technical block
Technical risk
Pending decision
Requires functional refinement
```

You can't silently resolve functional ambiguities.

### 6.3. Use the real project context

If `context-analysis.md`, `project-map.md` or `impact-map.md` identify existing patterns, you must respect them.

Prioritize:

- Repo conventions.
- Current architecture.
- Existing nomenclature.
- Patterns of services, controllers, components or entities already used.
- Existing validation style.
- Current test structure.

Do not invent unconfirmed frameworks, libraries or folders.

### 6.4. Mandatory traceability

Each relevant technical decision must be mapped to:

- An acceptance criterion.
- A business rule.
- A use case.
- A risk or restriction, if applicable.

### 6.5. Separation of responsibilities

This skill should decide which subsequent artifacts are needed:

```text
If it affects API → require sdd-api-contract.
If it affects DB → require sdd-migration-rollback.
If it affects roles/auth → require sdd-security-permissions-review.
If it affects UI → require frontend-change-plan.md.
If it affects backend → require backend-change-plan.md.
If it affects validations → require validation-rules.md.
```

---

## 7. Working mode

### Step 1. Verify entries

Check that the minimum artifacts exist:

```text
request.md
context-analysis.md
functional-spec.md
functional-traceability-matrix.md
```

If any are missing, return:

```text
Status: NEEDS_CONTEXT_ANALYSIS
```

Or:

```text
Status: NEEDS_FUNCTIONAL_REFINEMENT
```

As appropriate.

### Step 2. Identify exchange type

Classify the change:

```text
feature
bugfix
refactor
security
performance
documentation
test-only
architecture
```

### Step 3. Identify affected layers

Mark the affected layers:

```text
frontend
backend
database
api
authentication
authorization
validation
testing
documentation
infrastructure
```

### Step 4. Design technical solution

Defines:

- Affected components.
- Services affected.
- Affected entities.
- Affected endpoints or actions.
- Affected states or enums.
- Necessary validations.
- Expected errors.
- Backwards compatibility.
- Impact on existing data.

### Step 5. Derive to conditional skills

Determine if subsequent skills are needed before implementing:

```text
sdd-api-contract
sdd-migration-rollback
sdd-security-permissions-review
sdd-spec-validation
```### Step 6. Produce implementation plan

The plan must be sequential and safe:

```text
1. Prepare model/data.
2. Adapt backend.
3. Adapt contracts/API.
4. Adapt frontend.
5. Add validations.
6. Add tests.
7. Verify acceptance criteria.
```

The order may change depending on the project, but it must be justified.

### Step 7. Issue exit status

Valid states:

```text
READY_FOR_API_CONTRACT
READY_FOR_MIGRATION_ROLLBACK
READY_FOR_SECURITY_REVIEW
READY_FOR_SPEC_VALIDATION
READY_FOR_IMPLEMENTATION
NEEDS_FUNCTIONAL_REFINEMENT
NEEDS_CONTEXT_ANALYSIS
BLOCKED
```

---

## 8. Mandatory technical gates

### Gate 1. No implementation without functional spec

You cannot check `READY_FOR_IMPLEMENTATION` if there is no clear functional specification.

### Gate 2. No implementation with database changes without migration plan

If there are changes in the database, you must check:

```text
READY_FOR_MIGRATION_ROLLBACK
```

before implementation.

### Gate 3. No implementation with API changes without contract

If there are new endpoints, payload modifications, response changes or new API errors, you must check:

```text
READY_FOR_API_CONTRACT
```

before implementation.

### Gate 4. No implementation with roles/permissions without security review

If the change affects roles, permissions, auth, data visibility, or write operations, you must check:

```text
READY_FOR_SECURITY_REVIEW
```

before implementation or, at a minimum, before spec validation.

### Gate 5. Non-implementation with open locks

If there are pending blocking decisions, you must check:

```text
BLOCKED
```

Or:

```text
NEEDS_FUNCTIONAL_REFINEMENT
```

---

## 9. Rules for frequent changes

### 9.1. UI changes

You must define:

- Components or screens affected.
- Expected visual states.
- Main interactions.
- Feedback to the user.
- Role restrictions.
- Compatibility with existing design.

Recommended output:

```text
frontend-change-plan.md
```

### 9.2. Backend changes

You must define:

- Affected services or use cases.
- Backend validations.
- Business rules at the server level.
- Error control.
- Actual authorization in backend.
- Impact on current logic.

Recommended output:

```text
backend-change-plan.md
```

### 9.3. API changes

You must define impact, but the detailed contract must be closed by `sdd-api-contract`.

Recommended output:

```text
api-impact.md
```

Recommended status:

```text
READY_FOR_API_CONTRACT
```

### 9.4. Database changes

You must define technical impact, but not create final migrations.

Recommended output:

```text
data-model-impact.md
```

Recommended status:

```text
READY_FOR_MIGRATION_ROLLBACK
```

### 9.5. Permission changes

You must define necessary controls and send to security.

Recommended status:

```text
READY_FOR_SECURITY_REVIEW
```

---

## 10. Expected response format

When you run this skill, respond with:

```text
1. Detected status
2. Revised input artifacts
3. Affected layers
4. Proposed technical decisions
5. Generated/Proposed Artifacts
6. Recommended following skills
7. Blocks or open questions
8. Exit status
```

---

## 11. Completion criteria

The skill is considered completed when there is a technical specification that allows it to be clearly answered:```text
- What is going to be changed.
- Where are you going to change?
- In what order it will be changed.
- What technical risks exist.
- What additional skills should be involved.
- What conditions must be met before implementing.
```

---

## 12. Golden rule

```text
The implementation should not have to discover the architecture: the technical specification should give you the map, the boundaries and the necessary decisions.
```
