# Example Technical Spec: Canceled Analysis Parameter

## 1. Metadata

- Feature ID: `feature-cancelled-parameter`
- Change type: `feature`
- Current SDD state: `TECHNICAL_SPEC_READY`
- Owner skill: `sdd-technical-spec`

## 2. Technical summary

The analysis flow must support canceling and reopening individual parameters. A canceled parameter must no longer be required for completion and must be excluded from the global analysis result calculation. The canceled state must be persisted server-side and represented in the UI through a clear state transition from Pending to Canceled and back to Pending when reopened.

## 3. Affected layers

| Layer | Affected? | Details |
|---|---:|---|
| Frontend | yes | Parameter cards, pending/cancelled pill, sample input container open/closed behavior |
| Backend | yes | Completion validation and global result calculation |
| Database | yes | Persist canceled state at analysis-parameter level if not already available |
| API | yes | Cancel/reopen operation or update action needed |
| Authorization | yes | Only allowed analyst/admin roles should cancel/reopen according to app policy |
| Testing | yes | Completion and result-calculation regression tests |

## 4. Technical decisions

| Decision | Rationale | Traceability |
|---|---|---|
| Persist cancellation as explicit state | Avoid treating empty values ​​as accidental omissions | AC-001, BR-001 |
| Exclude canceled parameters from global calculation | Matches functional rule that canceled parameters do not compute | AC-003, BR-002 |
| Provide reopen transition | Supports correction during analysis | AC-004 |
| Keep server-side validation authoritative | Prevent incomplete analyzes from being completed accidentally | AC-002 |

## 5. Data model impact

A persisted state is required if the current model only stores sample values. This requires `sdd-migration-rollback` before implementation.

## 6. API impact

The UI needs a way to request cancel/reopen transitions. This requires `sdd-api-contract` unless an existing update endpoint already supports this safely.

## 7. Required next skills

```text
sdd-migration-rollback
sdd-api-contract
sdd-security-permissions-review
sdd-spec-validation
```

## 8. Recommended exit state

```text
READY_FOR_MIGRATION_ROLLBACK
```
