# Example: Changes Requested - Spec Compliance Failure

## Decision

```text
FINAL_REVIEW_CHANGES_REQUESTED
```

## Summary

The implementation passes basic tests but does not fully comply with the approved functional spec. The spec requires cancelled parameters to be excluded from global calculations, but the implementation only changes the UI state and leaves the backend aggregate calculation unchanged.

## Finding

| ID | Severity | Category | Description | Recommendation | Route To |
|---|---|---|---|---|---|
| FR-001 | BLOCKER | implementation | Backend calculation still includes cancelled parameters. | Update calculation logic and add/adjust regression tests for aggregate result computation. | sdd-implementation |

## Next Route

```text
sdd-implementation
```
