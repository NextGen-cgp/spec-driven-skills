# sdd-test-skill

Test Skill for a **Spec Driven Development (SDD)** flow.

This skill validates an already completed implementation against the flow's approved artifacts: acceptance criteria, functional specification, technical specification, API/data contracts, migration plans, and permissions rules.

## Position in the flow

```text
sdd-implementation
  → sdd-test
  → sdd-security-permissions-review # if applicable
  → sdd-review
  → sdd-documentation-pr
```

## Primary responsibility

```text
Implementation = build the change.
Test = proves that the change works.
Review = evaluates whether the change is done well.
```

## Possible decisions

```text
TEST_PASSED
TEST_FAILED
TEST_BLOCKED
TEST_PARTIAL
```

## Main artifacts generated

```text
test-plan-final.md
test-report.md
acceptance-validation-report.md
regression-report.md
defects-report.md
test-handoff-report.md
```

## Recommended use

Invoke this skill only when `sdd-implementation` has generated a valid handoff using `implementation-report.md`, `code-change-log.md`, `patch-summary.md` and `deviation-log.md`.
