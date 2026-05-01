# Example: Cancelled Parameter - Documentation & PR

## Decision

```text
DOCUMENTATION_READY_WITH_NOTES
```

## PR Summary

### Suggested Title

```text
feat(analysis): allow cancelling and reopening analysis parameters
```

### Context

Some analysis parameters may legitimately not require completion. This change allows users to mark a parameter as cancelled instead of leaving empty values, preventing accidental omissions while excluding cancelled parameters from the global analysis result.

### What Changed

- Added cancelled state for analysis parameters.
- Added reopen behavior to return cancelled parameters to pending.
- Excluded cancelled parameters from global analysis result computation.
- Added UI behavior notes for collapsed sample input when cancelled.
- Added regression evidence for result calculation.

### Tests Executed

- Acceptance tests for cancel/reopen flow.
- Calculation tests excluding cancelled parameters.
- Regression tests for pending/completed parameter behavior.
- Authorization checks for state transitions.

### Notes

A future improvement may add audit trail visualization for cancel/reopen actions if required by business operations.

## Generated Artifacts

```text
pr-summary.md
changelog-entry.md
release-notes.md
documentation-update-plan.md
docs-impact-report.md
technical-handoff.md
merge-package.md
sdd-closeout-report.md
final-artifact-index.md
known-limitations.md
```

## PR Readiness

```text
READY_FOR_PR_WITH_NOTES
```

## Required Next Route

```text
none
```
