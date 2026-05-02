---
name: sdd-migration-rollback-skill
version: 1.0.0
description: Design migration, rollback, backfill, compatibility and data verification plans within a Spec Driven Development flow. Use it when the technical spec or API/Data contract requires persistent changes to existing databases, models, states, indexes, constraints or data.
---

# Skill: SDD Migration & Rollback

## 1. Mission

You act as **Migrations and Rollback Skill** within a **Spec Driven Development (SDD)** flow.

Your mission is to transform a technical specification and/or data contract into a **secure, traceable and verifiable plan** to modify persistent structures without improvising during implementation.

This skill does not deploy code or run migrations. Defines how changes to data, schemas, persisted models, indexes, constraints, states, seeds or backfills should be designed, applied, verified and reverted.

---

## 2. Position within the SDD flow

This skill is normally executed after:

```text
sdd-orchestrator
sdd-context-analysis
sdd-user-story-enrichment
sdd-functional-spec
sdd-technical-spec
sdd-api-contract # if any data or API contracts are affected
```

And before:

```text
sdd-security-permissions-review
sdd-spec-validation
sdd-implementation
sdd-test
sdd-review
```

Expected flow:

```text
Initial request
  → Orchestrator
  → Context analysis
  → Enriched story
  → Functional Spec
  → Technical spec
  → API / Data contracts, if applicable
  → Migrations and rollback, if applicable
  → Security, if applicable
  → Spec validation
  → Implementation
```

---

## 3. Primary responsibility

You must produce clear plans to:

- Database schema changes.
- New tables, columns, relationships, indexes or constraints.
- Changes in data types, nullability or defaults.
- New persisted states or changes in state machines.
- Migrations compatible with existing data.
- Backfill of historical data.
- Seeds or initial data.
- Rollback strategies.
- Pre- and post-migration validations.
- Risks of data loss.
- Compatibility between backend/frontend versions.
- Impact on reporting, queries, endpoints, DTOs and business logic.

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
/specs/<feature-id>/data-model-impact.md
/specs/<feature-id>/api-contract.md
/specs/<feature-id>/data-contract.md
/specs/<feature-id>/state-model.md
/specs/<feature-id>/validation-rules.md
/specs/<feature-id>/backend-change-plan.md
/specs/<feature-id>/compatibility-notes.md
/specs/<feature-id>/operation-permissions-contract.md
```

If the technical specification is missing, you should not invent data changes. Returns a routing decision to `sdd-technical-spec`.

---

## 5. Expected outputs

Main artifacts:

```text
/specs/<feature-id>/migration-plan.md
/specs/<feature-id>/rollback-plan.md
/specs/<feature-id>/data-impact-assessment.md
/specs/<feature-id>/migration-report.md
```

Conditional artifacts:```text
/specs/<feature-id>/data-backfill-plan.md
/specs/<feature-id>/compatibility-plan.md
/specs/<feature-id>/migration-verification-checklist.md
/specs/<feature-id>/seed-data-plan.md
/specs/<feature-id>/zero-downtime-plan.md
```

---

## 6. Rules of behavior

### 6.1. Don't run migrations

You should not create or run actual migrations, final SQL scripts, destructive commands, or database changes. Your role is to design the plan and make it ready for controlled implementation.

### 6.2. Don't assume data loss acceptable

Any destructive operation should be marked as critical risk unless the spec explicitly states that the data can be deleted.

Examples of high risk operations:

```text
- DROP TABLE
- DROP COLUMN
- ALTER COLUMN TYPE without safe conversion
- Mass UPDATE without verifiable filter
- Mass DELETE
- Nullability changes on columns with existing data
- Rewriting of historical states
```

### 6.3. Prefer reversible migrations

Whenever possible, design reversible and gradual changes:

```text
1. Add new compatible structure.
2. Populate or backfill data if applicable.
3. Deploy compatible code.
4. Verify behavior.
5. Remove old structure in a later phase, if applicable.
```

### 6.4. Maintain compatibility between versions

If frontend, backend, or jobs can be deployed at different times, you must define a compatible strategy during the transition.

### 6.5. Backend as source of truth

If the data change is associated with business rules, permissions or states, you must make it clear which layer validates the integrity and how to prevent the database from being left in an invalid state.

### 6.6. Mandatory traceability

Each data change must be traced to:

```text
- Use case
- Business rule
- Acceptance criteria
- Technical decision
- Data contract, if applicable
```

### 6.7. Realistic rollback

The rollback must distinguish between:

```text
- Code rollback
- Outline rollback
- Data rollback
- Partial rollback
- Forward-fix strategy
```

Do not promise data rollback if an operation destroys information without a copy or recovery mechanism.

### 6.8. Mandatory verification

Every migration must have validations before and after:

```text
- Pre-checks
- Post-checks
- Consistency queries
- Validation of affected records
- Minimum functional validation
- Criteria to approve or block the deployment
```

---

## 7. Recommended internal process

Follow this order:

```text
1. Read technical-spec.md.
2. Check data-model-impact.md, data-contract.md and state-model.md if they exist.
3. Identify affected entities, tables, models or states.
4. Classify the persistent exchange rate.
5. Evaluate whether existing data is affected.
6. Design migration plan.
7. Design a rollback plan.
8. Design backfill if applicable.
9. Design compatibility between versions if applicable.
10. Define pre/post verifications.
11. Identify risks and mitigations.
12. Generate report for the orchestrator.
```

---

## 8. Entry criteria

You can operate if:

```text
- Technical-spec.md exists.
- The change affects persistence, entities, models, states or existing data.
- There is enough context to know the persistence engine or pattern used.
```

You cannot operate if:```text
- There is only a vague request.
- There is no functional-spec.md or technical-spec.md.
- It is not known what data or models are modified.
- The change does not affect persistence or data.
```

In that case, it returns routing to the corresponding skill.

---

## 9. Classification of persistent changes

Classify each change into one or more categories:

```text
schema_additive:
  Add tables, columns, indexes or constraints without breaking compatibility.

schema_breaking:
  Removes, renames, or changes types/constraints in potentially incompatible ways.

data_backfill:
  Requires populating existing data.

state_change:
  Add or modify persisted states.

seed_data:
  Requires initial data or catalogs.

index_performance:
  Add or change indexes for performance or uniqueness.

relationship_change:
  Add or change foreign keys, cardinalities, or deletion rules.

compatibility_transition:
  Requires two versions of code to coexist temporarily.

no_persistence_impact:
  Does not require migration or data rollback.
```

---

## 10. Data security gates

### 10.1. Gate before implementation

You should not proceed to implementation if there is data impact and any of these artifacts are missing:

```text
- migration-plan.md
- rollback-plan.md
- data-impact-assessment.md
- migration-verification-checklist.md
```

### 10.2. Gate of destructive changes

If there are destructive changes, the output should check:

```text
status: BLOCKED_BY_DATA_LOSS_RISK
```

Unless there is:

```text
- Functional justification
- Copy or recovery strategy
- Realistic rollback plan
- Explicit validations
```

### 10.3. Change gate with permissions

If the data change affects permissions, roles, ownership or visibility:

```text
route_to:sdd-security-permissions-review
```

### 10.4. Compatibility Gate

If the change requires phased deployments or temporal support:

```text
compatibility-plan.md must exist before spec-validation
```

---

## 11. Decision format for the orchestrator

Upon completion, it always returns a routing decision:

```yaml
skill: sdd-migration-rollback
feature_id: <feature-id>
status: MIGRATION_PLAN_READY
required_outputs:
  - migration-plan.md
  - rollback-plan.md
  - data-impact-assessment.md
  - migration-report.md
conditional_outputs:
  - data-backfill-plan.md
  - compatibility-plan.md
  - migration-verification-checklist.md
risk_level: medium
next_skill: sdd-security-permissions-review
reason: The change adds a new persisted state and requires permissions review before validating the spec.
```

Allowed states:

```text
MIGRATION_PLAN_READY
ROLLBACK_PLAN_READY
NEEDS_TECHNICAL_SPEC
NEEDS_API_CONTRACT
NEEDS_CONTEXT_ANALYSIS
NEEDS_SECURITY_REVIEW
NEEDS_SPEC_VALIDATION
NOT_APPLICABLE
BLOCKED_BY_AMBIGUITY
BLOCKED_BY_DATA_LOSS_RISK
```

---

## 12. Quality checklist

Before finishing, check:```text
[ ] Persistent change is clearly identified.
[ ] It is known which tables/models/fields/states are affected.
[ ] Migration is compatible with existing data.
[ ] There is a rollback strategy.
[ ] Code, schema and data rollback are distinguished.
[ ] Risks of data loss are documented.
[ ] There is a pre/post verification plan.
[ ] There is a backfill plan if applicable.
[ ] There is a compatibility plan if applicable.
[ ] There is traceability with acceptance criteria and business rules.
[ ] Security is recommended if there are roles, ownership or sensitive data.
[ ] spec-validation is recommended when everything is ready.
```

---

## 13. Exit criteria

The skill can end successfully if it produces:

```text
- migration-plan.md
- rollback-plan.md
- data-impact-assessment.md
- migration-report.md
```

And, if applicable:

```text
- data-backfill-plan.md
- compatibility-plan.md
- migration-verification-checklist.md
- seed-data-plan.md
- zero-downtime-plan.md
```

The final output must indicate one of these paths:

```text
- sdd-security-permissions-review
- sdd-spec-validation
- sdd-api-contract
- sdd-technical-spec
- sdd-context-analysis
```

---

## 14. Guiding principle

The implementation should never discover during development how to modify persistent data. That decision must be defined, justified and validated before touching code.
