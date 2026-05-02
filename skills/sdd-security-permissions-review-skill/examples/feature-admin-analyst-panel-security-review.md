# Security & Permissions Review: feature-admin-analyst-panel

## 1. Exit status

- **State**: `SECURITY_CHANGES_REQUIRED`
- **Next recommended skill**: `sdd-api-contract`
- **Reason**: The functional spec correctly distinguishes between ADMIN and ANALYST, but the API contract must explicitly declare which create/edit endpoints are blocked for ANALYST and what response the backend returns.

---

## 2. Revised scope

| Area | Does it affect? | Detail |
|---|---:|---|
| Authentication | Yes | Sections require authenticated user. |
| Authorization | Yes | ADMIN can modify data; ANALYST query only. |
| Roles | Yes | Functional difference between ADMIN and ANALYST. |
| Endpoints/API | Yes | Search, registration and editing of plans/parameters. |
| Write operations | Yes | Create and modify plans/parameters. |
| Critical data | Yes | Master data of quality plans and parameters. |

---

## 3. Roles and operations

| Operation | Type | Allowed roles | Denied Roles | Enforcement backend required | Endpoint/action |
|---|---|---|---|---|---|
| Find quality plans | search | ADMIN, ANALYST | — | Yes | GET /quality-plans |
| Search parameters | search | ADMIN, ANALYST | — | Yes | GET /parameters |
| Create quality plan | create | ADMIN | ANALYST | Yes | POST /quality-plans |
| Edit quality plan | update | ADMIN | ANALYST | Yes | PATCH /quality-plans/:id |
| Create parameter | create | ADMIN | ANALYST | Yes | POST /parameters |
| Edit parameter | update | ADMIN | ANALYST | Yes | PATCH /parameters/:id |

---

## 4. Findings

| ID | Severity | Blocker | Area | Finding | Action required |
|---|---|---:|---|---|---|
| SEC-001 | HIGH | Yes | authorization | The contract must declare 403 response for ANALYST on create/edit operations. | Update `operation-permissions-contract.md` and `api-contract.md`. |
| SEC-002 | MEDIUM | No | frontend | The UI should hide editing actions for ANALYST, but this does not replace the authz backend. | Document frontend behavior. |
| SEC-003 | MEDIUM | No | audit | Master data editing should be auditable. | Add `auditability-notes.md`. |

---

## 5. Required tests

- `ADMIN` can create and edit quality plans.
- `ADMIN` can create and edit parameters.
- `ANALYST` can search for plans and parameters.
- `ANALYST` receives 403 when trying to create or edit plans.
- `ANALYST` receives 403 when trying to create or edit parameters.
- The `ANALYST` UI does not render upload/edit buttons.

---

## 6. Decision for the orchestrator

```yaml
status: SECURITY_CHANGES_REQUIRED
next_skill: sdd-api-contract
blocked: true
reason: "Explicit backend authorization contract missing for role-differentiated write operations."
```
