# Example Technical Spec: Admin and Analyst Panels

## 1. Metadata

- Feature ID: `feature-admin-analyst-panel`
- Change type: `feature`
- Current SDD state: `TECHNICAL_SPEC_READY`
- Owner skill: `sdd-technical-spec`

## 2. Technical summary

The application must introduce role-aware administration and analyst panel behavior without duplicating business logic. Admin users require create/update capabilities for quality plans and parameters, while analyst users require read/search-only access. Authorization must be enforced in the backend, with frontend behavior reflecting available actions according to role.

## 3. Functional traceability

| Functional item | Acceptance criteria | Technical response | Notes |
|---|---|---|---|
| UC-001 Admin searches plans | AC-001 | Reuse existing search/query pattern where available | Must preserve UI style |
| UC-002 Admin creates/updates plans | AC-002 | Add guarded write operations for admin role | Requires security review |
| UC-003 Analyst searches plans | AC-003 | Expose read-only search path for analyst role | Analyst must not see edit/create actions |
| UC-004 Analyst cannot edit | AC-004 | Backend must reject write attempts from analyst role | Frontend restriction is not enough |

## 4. Affected layers

| Layer | Affected? | Details |
|---|---:|---|
| Frontend | yes | Admin/analyst panels, search views, create/edit controls |
| Backend | yes | Role-based actions for quality plans and parameters |
| Database | possibly | Only if existing models lack required metadata or audit fields |
| API | yes | Search, create and update operations may need explicit contracts |
| Authorization | yes | Admin write access, analyst read-only access |
| Validation | yes | Backend validation for create/update payloads |
| Testing | yes | Role-specific access and UI behavior tests |

## 5. Technical decisions

| Decision | Rationale | Traceability |
|---|---|---|
| Keep role enforcement in backend | Prevent unauthorized writes through direct API calls | AC-004 |
| Reflect permissions in frontend | Improve UX and avoid exposing invalid actions | AC-003, AC-004 |
| Reuse existing visual/layout pattern | Maintain consistency with product design | Functional spec UI constraints |

## 6. Required next skills

```text
sdd-api-contract
sdd-security-permissions-review
sdd-spec-validation
```

## 7. Recommended exit state

```text
READY_FOR_SECURITY_REVIEW
```
