# SDD Migration & Rollback Skill

Production skill to design migration, rollback, backfill and data verification plans within a **Spec Driven Development (SDD)** flow.

## Position in the flow

```text
sdd-technical-spec
  → sdd-api-contract, if applicable
  → sdd-migration-rollback
  → sdd-security-permissions-review, if applicable
  → sdd-spec-validation
  → sdd-implementation
```

## When to use it

Use it when a feature, bugfix or refactor affects:

- Database.
- Persistent models.
- ORM entities.
- Saved states.
- Indices or constraints.
- Seeds or catalogs.
- Backfills.
- Historical data.
- Compatibility between versions.

## Main entries

```text
request.md
context-analysis.md
functional-spec.md
technical-spec.md
```

Recommended entries:

```text
data-model-impact.md
api-contract.md
data-contract.md
state-model.md
validation-rules.md
backend-change-plan.md
compatibility-notes.md
operations-permissions-contract.md
```

## Main outputs

```text
migration-plan.md
rollback-plan.md
data-impact-assessment.md
migration-report.md
```

Conditional outputs:

```text
data-backfill-plan.md
compatibility-plan.md
migration-verification-checklist.md
seed-data-plan.md
zero-downtime-plan.md
```

## Principles

- Does not execute migrations.
- Does not write final code.
- Does not allow destructive changes without explicit warning.
- Prioritize reversible and compatible migrations.
- Demands realistic rollback.
- Requires pre/post verification.
- Maintains traceability with the functional and technical spec.

## Expected usage by orchestrator

The orchestrator should invoke this skill if it detects any of these signals:

```text
- data-model-impact.md indicates persistent changes.
- data-contract.md introduces new fields or states.
- technical-spec.md modifies entities, tables or models.
- api-contract.md requires saving new data.
- state-model.md adds or changes persisted states.
```

If the skill concludes that there is no persistent impact, it should return:

```text
status: NOT_APPLICABLE
next_skill: sdd-spec-validation
```

## Package structure

```text
sdd-migration-rollback-skill/
├── SKILL.md
├── README.md
├── skill.yaml
├── routing/
│ └── migration-rollback-routing.yaml
├── schemas/
│ └── migration-rollback.schema.json
├── templates/
│ ├── migration-plan.md
│ ├── rollback-plan.md
│ ├── data-impact-assessment.md
│ ├── data-backfill-plan.md
│ ├── compatibility-plan.md
│ ├── migration-verification-checklist.md
│ ├── seed-data-plan.md
│ ├── zero-downtime-plan.md
│ └── migration-report.md
└── examples/
    ├── feature-cancelled-parameter-migration-rollback.md
    ├── feature-admin-analyst-panel-migration-rollback.md
    └── no-persistence-impact-report.md
```
