# Endpoint Spec: <feature-id>

## 1. Endpoint list

| Operation ID | Method | Path | Description | Auth | Notes |
|---|---|---|---|---:|---|
| OP-001 | `<GET/POST/PATCH/DELETE>` | `<path>` | `<description>` | `<yes/no>` | `<notes>` |

## 2. Endpoint details

### `<METHOD> <path>`

#### Description

`<description>`

#### Query parameters

| Parameters | Type | Required? | Validation | Description |
|---|---|---:|---|---|
| `<param>` | `<type>` | `<yes/no>` | `<rule>` | `<description>` |

#### Path parameters

| Parameters | Type | Required? | Validation | Description |
|---|---|---:|---|---|
| `<param>` | `<type>` | `<yes/no>` | `<rule>` | `<description>` |

#### Body

```json
{
  "field": "value"
}
```

#### Responses

| Status | Meaning | Body? | Notes |
|---:|---|---:|---|
| 200 | Success | yes | `<notes>` |
| 400 | Validation error | yes | `<notes>` |
| 403 | Forbidden | yes | `<notes>` |
| 404 | Not found | yes | `<notes>` |
| 409 | Conflict | yes | `<notes>` |
