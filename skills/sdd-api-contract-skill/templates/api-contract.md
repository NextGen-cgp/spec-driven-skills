# API Contract: <feature-id>

## 1. Metadata

- Feature ID: `<feature-id>`
- Change type: `<feature | bugfix | refactor | security | performance | documentation | test-only | architecture>`
- Current SDD state: `<state>`
- Source technical spec: `/specs/<feature-id>/technical-spec.md`
- Owner skill: `sdd-api-contract`

## 2. Contract summary

Describe the API/data contract in 3-6 sentences.

## 3. Consumers and producers

| Consumer | Producer | Purpose | Notes |
|---|---|---|---|
| `<frontend/backend/service>` | `<backend/service/db>` | `<purpose>` | `<notes>` |

## 4. Operations overview

| Operation ID | Name | Type | Method/action | Path/action name | Auth required? | Traceability |
|---|---|---|---|---|---:|---|
| OP-001 | `<name>` | `<read/write/transition/search>` | `<GET/POST/PATCH/action>` | `<path-or-action>` | `<yes/no>` | `<AC/BR/UC>` |

---

## 5. Operation contracts

### 5.1. OP-001 — `<operation-name>`

####Purpose

`<purpose>`

#### Trigger

`<user action, system event or service call>`

#### Endpoint/action

```text
<HTTP METHOD> <path>
```

Or, for non-HTTP actions:

```text
<action/command/handler name>
```

#### Authorization

| Requirement | Value |
|---|---|
| Auth required | `<yes/no>` |
| Roles/permissions | `<roles/permissions>` |
| Backend enforcement point | `<controller/middleware/service/policy>` |
| Frontend behavior | `<hide/disable/show error/etc.>` |

#### Request contract

| Field | Type | Required? | Nullable? | Validation | Description |
|---|---|---:|---:|---|---|
| `<field>` | `<type>` | `<yes/no>` | `<yes/no>` | `<rule>` | `<description>` |

Example request:

```json
{
  "field": "value"
}
```

#### Response contract: success

Status/code:

```text
<200/201/204/etc.>
```

| Field | Type | Required? | Nullable? | Description |
|---|---|---:|---:|---|
| `<field>` | `<type>` | `<yes/no>` | `<yes/no>` | `<description>` |

Example response:

```json
{
  "field": "value"
}
```

#### Response contract: errors

| Scenario | Status/code | Error code | Message guidance | Notes |
|---|---:|---|---|---|
| Validation error | 400 | `<ERROR_CODE>` | `<message>` | `<notes>` |
| Unauthorized | 401 | `UNAUTHORIZED` | `<message>` | `<notes>` |
| Forbidden | 403 | `FORBIDDEN` | `<message>` | `<notes>` |
| Not found | 404 | `NOT_FOUND` | `<message>` | `<notes>` |
| Conflict | 409 | `CONFLICT` | `<message>` | `<notes>` |

#### State transition, if applicable

| Current state | Operation | New state | Allowed roles | Notes |
|---|---|---|---|---|
| `<state>` | `<operation>` | `<state>` | `<roles>` | `<notes>` |

#### Traceability

| Source | Reference |
|---|---|
| Use case | `<UC-id>` |
| Business rules | `<BR-id>` |
| Acceptance criteria | `<AC-id>` |
| Technical decision | `<decision-id>` |

---

## 6. Compatibility notes

- `<compatibility-note-1>`
- `<compatibility-note-2>`

## 7. Contract test requirements

- `<test-requirement-1>`
- `<test-requirement-2>`

## 8. Required next skills

```text
<next-skill-1>
<next-skill-2>
```
