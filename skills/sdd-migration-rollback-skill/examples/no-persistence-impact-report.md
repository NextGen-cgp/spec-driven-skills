# Example: No Persistence Impact Report

## Context

Feature or change only modifies presentation, labels, visual style or frontend behavior without new fields, states, API payloads, persisted configuration, indexes or model changes.

## Assessment

```yaml
has_impact: false
change_types:
  - no_persistence_impact
affected_objects: []
```

## Reasoning

- No database schema changes required.
- No existing data needs backfill.
- No new persisted state is introduced.
- No seed data required.
- No compatibility transition required.

## Outputs

```text
migration-plan.md: not required
rollback-plan.md: not required
data-impact-assessment.md: generated as NOT_APPLICABLE
migration-report.md: generated as NOT_APPLICABLE
```

## Routing Recommendation

```yaml
skill: sdd-migration-rollback
status: NOT_APPLICABLE
risk_level: low
security_review_required: false
next_skill: sdd-spec-validation
reason: No persistence impact detected. The flow can continue to spec validation.
```
