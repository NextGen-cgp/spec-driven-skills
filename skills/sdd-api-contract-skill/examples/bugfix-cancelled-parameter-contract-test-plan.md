# Example Contract Test Plan: Canceled Parameter

## 1.Scope

Validate that cancel/reopen operations expose stable contracts and enforce authorization, state transitions and calculation behavior.

## 1. Contract test matrix

| Test ID | Operation | Scenario | Input | Expected output | Type | Traceability |
|---|---|---|---|---|---|---|
| CT-001 | Cancel parameter | Valid pending parameter | Valid analysisId + parameterId | 200, status `CANCELLED`, `includedInGlobalResult=false` | integration | AC-001, BR-001 |
| CT-002 | Cancel parameter | Analyst lacks permission | Valid IDs, forbidden role | 403 `FORBIDDEN` | integration | AC-002 |
| CT-003 | Cancel parameter | Parameter missing | Unknown parameterId | 404 `ANALYSIS_PARAMETER_NOT_FOUND` | integration | AC-002 |
| CT-004 | Reopen parameter | Valid canceled parameter | Valid IDs | 200, status `PENDING`, `includedInGlobalResult=true` | integration | AC-004 |
| CT-005 | Get analysis details | Canceled parameter exists | analysisId | Response includes parameter status `CANCELLED` | integration/e2e | AC-003 |
| CT-006 | Complete analysis | Only canceled parameters unfilled | analysisId | Completion allowed if remaining required parameters are valid | integration/e2e | BR-002 |

## 2. Handoff to test skill

```text
sdd-test should validate these contracts after implementation and add regression coverage for global result calculation.
```
