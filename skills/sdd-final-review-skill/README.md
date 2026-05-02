# SDD Final Review Skill

Final review skill for a **Spec Driven Development** flow.

## Purpose

It acts as the last gate before documentation, PR, merge or delivery. Check:

- Compliance with the functional and technical spec.
- Evidence of tests.
- Code quality.
- Security and permissions if applicable.
- Migrations and data if applicable.
- Open risks.
- Preparation for documentation/PR.

## Location in the flow

```text
sdd-implementation
  → sdd-test
  → sdd-security-permissions-review # if applicable
  → sdd-final-review
  → sdd-documentation-pr
```

## Possible decisions

```text
FINAL_REVIEW_APPROVED
FINAL_REVIEW_APPROVED_WITH_NOTES
FINAL_REVIEW_CHANGES_REQUESTED
FINAL_REVIEW_BLOCKED
```

## Main files

```text
SKILL.md
skill.yaml
manifest.json
routing/final-review-routing.yaml
schemas/final-review.schema.json
templates/final-review-report.md
templates/merge-readiness-decision.md
```
