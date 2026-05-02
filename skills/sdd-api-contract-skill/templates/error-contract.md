# Error Contract: <feature-id>

## 1. Metadata

- Feature ID: `<feature-id>`
- Owner skill: `sdd-api-contract`

## 2.Standard error format

Defines the project-compatible error format. If the project already has one, reuse it.

```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable message",
    "details": {}
  }
}
```

## 2. Catalog error

| Error code | Status | Scenario | User-facing message guidance | Developer notes |
|---|---:|---|---|---|
| `VALIDATION_ERROR` | 400 | Invalid input | `<message>` | `<notes>` |
| `UNAUTHORIZED` | 401 | Missing/invalid authentication | `<message>` | `<notes>` |
| `FORBIDDEN` | 403 | Authenticated but not allowed | `<message>` | `<notes>` |
| `NOT_FOUND` | 404 | Resource not found | `<message>` | `<notes>` |
| `CONFLICT` | 409 | Invalid state or duplicate operation | `<message>` | `<notes>` |
| `INTERNAL_ERROR` | 500 | Unexpected error | `<message>` | `<notes>` |

## 3. Validation errors

| Field | Rule | Error code | Message guidance |
|---|---|---|---|
| `<field>` | `<rule>` | `<ERROR_CODE>` | `<message>` |

## 4. Authorization errors

| Operation | Role/permission missing | Expected status | Error code |
|---|---|---:|---|
| `<operation>` | `<permission>` | 403 | `FORBIDDEN` |

## 5. Conflict/state errors

| Operation | Invalid state | Expected status | Error code | Notes |
|---|---|---:|---|---|
| `<operation>` | `<state>` | 409 | `INVALID_STATE_TRANSITION` | `<notes>` |
