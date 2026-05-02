# Context Analysis: admin-analyst-panel

## 1. Executive summary

Analysis status: `CONTEXT_ANALYSIS_PARTIAL`

Overall confidence level: 'medium'

The petition introduces new capabilities differentiated by role for administrators and analysts. The change likely affects UI, protected routes, permissions logic, search components, upload/edit forms, and plan/parameter endpoints. It requires special attention to ensure that the restrictions are not only in the frontend.

---

## 2. Request analyzed

Original request:

```text
Create a new panel for admins and analysts with different permissions. Admin can modify, create and search plans/parameters. Analyst can search but not edit or create.
```

Estimated exchange rate:

```text
feature
```

---

## 3. Stack detected

| Area | Observed evidence | Conclusion | Trust |
|---|---|---|---|
| Frontend | Not confirmed in this example | Web application with existing visual pattern | medium |
| Backend | Not confirmed in this example | Data layer/API must exist for plans/parameters | low |
| Auth/Roles | The petition mentions admin/analyst | Requires role authorization | high |

---

## 4. Architecture and structure of the repository

Not confirmed in this example. The actual skill must inspect the repository before closing this section.

---

## 5. Relevant patterns identified

### 5.1. Frontend/UI

You should look for the existing visual pattern of dashboards, cards, forms, tables, filters and navigation.

### 5.2. Backend/API

Existing endpoints or services must be identified for quality plans and parameters.

### 5.3. Authentication, roles and permissions

The change requires backend validation, not just frontend button hiding.

---

## 6. Potentially affected modules and files

| Area | Candidate files | Reason | Trust |
|---|---|---|---|
| Frontend/UI | Administration and search routes | New sections differentiated by role | high |
| Backend/API | Plan and parameter services | Registration, editing and reading control | high |
| Auth/Permissions | Guards/middleware roles | Separate admin/analyst permissions | high |
| Tests | Functional tests and authorization | Validate restrictions by role | high |

---

## 7. Related existing tests

No related tests were detected in this example. The actual skill must inspect the repo.

---

## 8. Relevant dependencies and contracts

It will probably be necessary to define a contract for:

```text
- Search for plans.
- Parameter search.
- Registration of plans.
- Editing of plans.
- Registration of parameters.
- Parameter editing.
- 403 answers for analysts in write operations.
```

---

## 9. Technical risks

| Risk | Severity | Reason | Suggested mitigation |
|---|---|---|---|
| Permissions applied only in UI | high | An analyst could invoke endpoints directly | Validate authorization in backend |
| Duplicate existing components | medium | Can break visual coherence | Reuse current UI patterns |
| Lack of tests by role | high | Risk of security regressions | Authorization tests |

---

## 10. Open questions

```text
- Are there already ADMIN and ANALYST roles in the system?
- Do plans and parameters have separate endpoints?
- Should the search be common or have different filters by role?
```

---

## 11. Recommendation for the Orchestrator

Recommended status:

```text
CONTEXT_ANALYSIS_PARTIAL
```

Next recommended skill:

```text
security-permissions-review
```

Reason:

```text
The change directly affects roles and permissions. It is advisable to review authorization rules before closing the technical spec.
```

Locks:

```text
- Actual inspection of the repository is missing in this example.
```
