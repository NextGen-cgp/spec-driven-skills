# SDD Documentation & PR Skill

Final skill for a **Spec Driven Development** flow.

## Purpose

Converts an approved implementation into a delivery package ready for human review, Pull Request, merge, or release.

Generates:

- PR summary.
- Changelog.
- Release notes.
- Document update plan.
- Merge package.
- Formal SDD closure.
- Final index of artifacts.

## Location in the flow

```text
sdd-final-review
  → sdd-documentation-pr
  → READY_FOR_PR
```

## Possible decisions

```text
DOCUMENTATION_READY_FOR_PR
DOCUMENTATION_READY_WITH_NOTES
DOCUMENTATION_CHANGES_REQUESTED
DOCUMENTATION_BLOCKED
```

## Main files

```text
SKILL.md
skill.yaml
manifest.json
routing/documentation-pr-routing.yaml
schemas/documentation-pr.schema.json
templates/*.md
examples/*.md
```

## Key rule

This skill should not correct code or reopen technical decisions. If evidence is missing, you should block and route to the appropriate point in the flow.
