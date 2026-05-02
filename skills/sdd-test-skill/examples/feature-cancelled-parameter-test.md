# Example: Feature Canceled Parameter - Test

## Decision

```text
Decision: TEST_PASSED
Next skill: sdd-review
Reason: The functional criteria pass and there are no blocking findings after validating global calculation and reopening.
```

##Scope

Validate that an analysis parameter can be canceled, that it stops computing in the global result, and that it can be reopened to return to the pending state.

## Acceptance validation

| ID | Criterion | State | Evidence |
|---|---|---|---|
| AC-001 | The user can cancel a pending parameter | PASSED | UI interaction test |
| AC-002 | The pill changes to Canceled | PASSED | Visual status test |
| AC-003 | The sample box closes | PASSED | Conditional rendering test |
| AC-004 | The canceled parameter does not compute in the global result | PASSED | Calculation unit test |
| AC-005 | The parameter can be reopened | PASSED | Functional transition test Canceled → Pending |
| AC-006 | It is not allowed to complete analysis with forgotten parameters unless canceled | PASSED | Completeness validation test |

## Regression checks

| Flow | State |
|---|---|
| Complete analysis with all parameters filled in | PASSED |
| Complete analysis with empty mandatory parameter not canceled | PASSED |
| Global calculation without canceled parameters | PASSED |
