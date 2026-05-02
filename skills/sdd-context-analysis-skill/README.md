# SDD Context Analysis Skill

Production skill to analyze the context of a project within a **Spec Driven Development** flow.

This skill runs after the orchestrator and before enriching user stories or generating technical specifications.

## Objective

Prevent the SDD system from advancing on assumptions. The skill analyzes the repository, detects stack, architecture, patterns, affected modules, existing tests and technical risks.

## Main entrance

```text
/specs/<feature-name>/request.md
```

Optionally:

```text
/specs/<feature-name>/sdd-state.yaml
/specs/<feature-name>/user-story.md
/specs/<feature-name>/technical-spec.md
```

## Main output

```text
/specs/<feature-name>/context-analysis.md
```

## Use in SDD flow

```text
Orchestrator
  → Context Analysis
  → User Story Enrichment
  → Technical Specification
  → Spec Validation
  → Implementation
```

## Status you can return

```text
CONTEXT_ANALYSIS_READY
CONTEXT_ANALYSIS_PARTIAL
NEEDS_MORE_CONTEXT
BLOCKED_BY_MISSING_REPOSITORY_ACCESS
```

## Next recommended skill

The skill should always end by recommending one of these routes:

```text
user-story-enrichment
technical-specification
api-contract-specification
migration-rollback-planning
security-permissions-review
blocked
```

## Philosophy

This skill does not implement. It only understands, classifies and prepares reliable context for the rest of the SDD flow to work safely.
