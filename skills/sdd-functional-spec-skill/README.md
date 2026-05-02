# SDD Functional Specification Skill

Production skill for the **Spec Driven Development** flow in charge of converting refined user stories into complete functional specifications, traceable and ready for technical design.

## When to use it

Use it after:

- `sdd-orchestrator`
- `sdd-context-analysis`
- `sdd-user-story-enrichment`

And before:

- `sdd-technical-spec`
- `sdd-api-contract`
- `sdd-migration-rollback`
- `sdd-spec-validation`
- `sdd-implementation`

## Objective

Avoid the implementation having to invent functional requirements. This skill makes it clear:

- What the system should do.
- Who can do it.
- Where the flow occurs.
- What business rules apply.
- What states exist.
- What acceptance criteria verify the result.
- What subsequent skills should intervene.

##Main artifacts

```text
functional-spec.md
functional-traceability-matrix.md
```

Optional artifacts depending on the change:

```text
feature-scope.md
ui-behavior-spec.md
permissions-matrix.md
state-model.md
functional-spec-report.md
```

## Usual exit status

```text
READY_FOR_TECHNICAL_SPEC
```

Other possible states:

```text
NEEDS_REFINEMENT
NEEDS_SECURITY_REVIEW_BEFORE_TECH_SPEC
BLOCKED
```
