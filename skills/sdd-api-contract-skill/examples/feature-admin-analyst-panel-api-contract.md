# Example API Contract: Admin and Analyst Panels

## 1. Metadata

- Feature ID: `feature-admin-analyst-panel`
- Change type: `feature`
- Current SDD state: `API_CONTRACT_READY`
- Owner skill: `sdd-api-contract`

## 2. Contract summary

The admin and analyst panels require role-aware contracts for searching, reading, creating and updating quality plans and parameters. Analysts can consume read/search operations only. Admins can consume read/search and write operations. Backend authorization is mandatory for all write operations; Frontend visibility is only a UX aid.

## 3. Consumers and producers

| Consumer | Producer | Purpose | Notes |
|---|---|---|---|
| Admin panel UI | Backend API | Search, create and update quality plans/parameters | Write operations admin-only |
| Analyst Dashboard UI | Backend API | Search and read quality plans/parameters | Read-only |

## 4. Operations overview

| Operation ID | Name | Type | Method/action | Path/action name | Auth required? | Traceability |
|---|---|---|---|---|---:|---|
| OP-001 | Search quality plans | search | GET | `/quality-plans` | yes | UC-001, UC-003, AC-001 |
| OP-002 | Get quality plan detail | read | GET | `/quality-plans/{id}` | yes | UC-001, UC-003 |
| OP-003 | Create quality plan | create | POST | `/quality-plans` | yes | UC-002, AC-002 |
| OP-004 | Update quality plan | update | PATCH | `/quality-plans/{id}` | yes | UC-002, AC-002 |
| OP-005 | Search parameters | search | GET | `/parameters` | yes | UC-001, UC-003 |
| OP-006 | Create/update parameter | create/update | POST/PATCH | `/parameters` or `/parameters/{id}` | yes | UC-002 |

## 5. Operation contract example

### OP-003 — Create quality plan

#### Authorization

| Requirement | Value |
|---|---|
| Auth required | yes |
| Roles/permissions | `ADMIN` |
| Backend enforcement point | Route guard, controller policy or service authorization layer |
| Frontend behavior | Analysts must not see create action; backend must still reject direct calls |

#### Request contract

| Field | Type | Required? | Nullable? | Validation | Description |
|---|---|---:|---:|---|---|
| name | string | yes | not | non-empty, project max length | Quality plan name |
| description | string | not | yes | project max length | Optional description |
| parameters | array | yes | not | at least one item if required by business rules | Parameter definitions |

#### Response contract: success

Status/code:

```text
201 Created
```

| Field | Type | Required? | Nullable? | Description |
|---|---|---:|---:|---|
| id | string | yes | not | Quality plan identifier |
| name | string | yes | not | Quality plan name |
| createdAt | string | yes | not | ISO date |

#### Response contract: errors

| Scenario | Status | Error code | Notes |
|---|---:|---|---|
| Missing required field | 400 | `VALIDATION_ERROR` | Field-level details recommended |
| Analyst attempts write | 403 | `FORBIDDEN` | Backend must enforce |
| Duplicate plan name, if unique | 409 | `CONFLICT` | Optional depending on business rules |

## 6. Required next skills

```text
sdd-security-permissions-review
sdd-spec-validation
```

## 7. Recommended exit state

```text
NEEDS_SECURITY_REVIEW
```
