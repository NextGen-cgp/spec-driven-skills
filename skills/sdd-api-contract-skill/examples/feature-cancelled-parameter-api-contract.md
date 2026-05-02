# Example API Contract: Canceled Analysis Parameter

## 1. Metadata

- Feature ID: `feature-cancelled-parameter`
- Change type: `feature`
- Current SDD state: `API_CONTRACT_READY`
- Owner skill: `sdd-api-contract`

## 2. Contract summary

The analysis flow needs explicit backend operations to cancel and reopen an analysis parameter. A canceled parameter must be excluded from completion validation and global result calculation. The contract must expose state transitions in a controlled way and reject invalid or unauthorized transitions.

## 3. Operations overview

| Operation ID | Name | Type | Method/action | Path/action name | Auth required? | Traceability |
|---|---|---|---|---|---:|---|
| OP-001 | Cancel analysis parameter | transition | POST/PATCH | `/analyses/{analysisId}/parameters/{parameterId}/cancel` | yes | UC-001, BR-001, AC-001 |
| OP-002 | Reopen parameter analysis | transition | POST/PATCH | `/analyses/{analysisId}/parameters/{parameterId}/reopen` | yes | UC-002, BR-003, AC-004 |
| OP-003 | Get analysis details | read | GET | `/analyses/{analysisId}` | yes | UC-003, AC-003 |

## 4. OP-001 — Cancel analysis parameter

### Authorization

| Requirement | Value |
|---|---|
| Auth required | yes |
| Roles/permissions | `ANALYST`, `ADMIN` or project-defined equivalent |
| Backend enforcement point | Route guard plus service-level validation |
| Frontend behavior | Show cancel icon only when parameter is pending/active and user has permission |

### Request contract

| Field | Type | Required? | Nullable? | Validation | Description |
|---|---|---:|---:|---|---|
| reason | string | not | yes | project max length | Optional reason if product decides to capture it |

Example request:

```json
{
  "reason": null
}
```

### Response contract: success

Status/code:

```text
200 OK
```

Example response:

```json
{
  "analysisId": "analysis-123",
  "parameterId": "NET_WEIGHT",
  "status": "CANCELLED",
  "includedInGlobalResult": false
}
```

### Response contract: errors

| Scenario | Status | Error code | Notes |
|---|---:|---|---|
| Analysis not found | 404 | `ANALYSIS_NOT_FOUND` | Resource does not exist or is not visible |
| Parameter not found in analysis | 404 | `ANALYSIS_PARAMETER_NOT_FOUND` | Avoid leaking unrelated identifiers |
| User cannot cancel | 403 | `FORBIDDEN` | Backend enforcement required |
| Analysis already completed | 409 | `INVALID_ANALYSIS_STATE` | Depends on business policy |
| Parameter already canceled | 409 | `INVALID_PARAMETER_STATE` | Idempotency decision must be explicit |

### State transition

| Current state | Operation | New state | Allowed roles | Notes |
|---|---|---|---|---|
| `PENDING` | cancel | `CANCELLED` | `ANALYST`, `ADMIN` | Parameter no longer blocks completion |
| `CANCELLED` | cancel | `CANCELLED` or 409 | `ANALYST`, `ADMIN` | Project must choose idempotent vs conflict behavior |

## 5. OP-002 — Reopen analysis parameter

### Response contract: success

```json
{
  "analysisId": "analysis-123",
  "parameterId": "NET_WEIGHT",
  "status": "PENDING",
  "includedInGlobalResult": true
}
```

### State transition

| Current state | Operation | New state | Allowed roles | Notes |
|---|---|---|---|---|
| `CANCELLED` | reopen | `PENDING` | `ANALYST`, `ADMIN` | UI must reopen the sample input area |

## 6. Data contract impact

The parameter state must be represented explicitly. If current persistence only stores sample values, this requires a migration and rollback plan.

## 7. Required next skills

```text
sdd-migration-rollback
sdd-security-permissions-review
sdd-spec-validation
```

## 8. Recommended exit state

```text
NEEDS_MIGRATION_ROLLBACK
```
