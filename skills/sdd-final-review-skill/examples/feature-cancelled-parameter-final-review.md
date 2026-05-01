# Example: Final Review - Cancelled Analysis Parameter

## Decision

```text
FINAL_REVIEW_APPROVED
```

## Summary

The implementation allows cancelling and reopening individual analysis parameters. Cancelled parameters are excluded from global result calculation and do not block analysis completion. Reopened parameters return to pending state and can be completed normally.

## Spec Compliance

| Requirement | Implemented | Tested | Status |
|---|---:|---:|---|
| Cancel parameter | Yes | Yes | Passed |
| Reopen parameter | Yes | Yes | Passed |
| Exclude cancelled from global calculation | Yes | Yes | Passed |
| Avoid silent empty fields | Yes | Yes | Passed |
| Preserve existing completed parameter behavior | Yes | Yes | Passed |

## Test Evidence Review

```text
TEST_PASSED
```

Regression tests cover pending, completed, cancelled and reopened states.

## Security Final Review

Security review required: `YES`.

Reason:

```text
state transition, write operation, analysis workflow
```

Result:

```text
PASSED
```

Cancel/reopen actions are validated server-side according to allowed roles and analysis state.

## Findings

No blocker, high or medium findings.

## Next Route

```text
sdd-documentation-pr
```
