# Security & Permissions Review: <feature-id>

## 1. Exit status

- **Status**: `<SECURITY_APPROVED | SECURITY_APPROVED_WITH_WARNINGS | SECURITY_CHANGES_REQUIRED | SECURITY_BLOCKED | NOT_APPLICABLE>`
- **Next recommended skill**: `<sdd-spec-validation | sdd-technical-spec | sdd-api-contract | sdd-migration-rollback | sdd-test | sdd-review>`
- **Reason**:

---

## 2. Artifacts revised

| Artifact | State | Observations |
|---|---|---|
| request.md | Pending/Reviewed/Not applicable |  |
| context-analysis.md | Pending/Reviewed/Not applicable |  |
| functional-spec.md | Pending/Reviewed/Not applicable |  |
| technical-spec.md | Pending/Reviewed/Not applicable |  |
| api-contract.md | Pending/Reviewed/Not applicable |  |
| migration-plan.md | Pending/Reviewed/Not applicable |  |

---

## 3. Safety scope

| Area | Does it affect? | Detail |
|---|---:|---|
| Authentication | No |  |
| Authorization | Yes/No |  |
| Roles | Yes/No |  |
| Endpoints/API | Yes/No |  |
| Write operations | Yes/No |  |
| State transitions | Yes/No |  |
| Sensitive or critical data | Yes/No |  |
| Migrations | Yes/No |  |

---

## 4. Revised roles

| Role | Expected capabilities | Expected restrictions | Observations |
|---|---|---|---|
| ADMIN |  |  |  |
| ANALYST |  |  |  |
| OPERATOR |  |  |  |

---

## 5. Revised operations

| Operation | Type | Allowed roles | Denied Roles | Enforcement backend required | Endpoint/action |
|---|---|---|---|---|---|
|  | read/create/update/delete/transition/search |  |  | Yes |  |

---

## 6. Backend permissions review

Describes here how actual authorization should be applied in the backend.

```text
- Guard/middleware/policy expected:
- Authorization rule:
- Expected error for unauthenticated:
- Expected error for unauthorized:
```

---

## 7. Review of exposed data

| Answer/list/detail | Allowed fields | Restricted fields | Risk |
|---|---|---|---|
|  |  |  |  |

---

## 8. Review of server-side validations

| Validation | Expected layer | Operation affected | Blocker |
|---|---|---|---:|
|  | Backend/DB/API |  | Yes/No |

---

## 9. Findings

| ID | Severity | Blocker | Area | Finding | Action required |
|---|---|---:|---|---|---|
| SEC-001 | HIGH | Yes | authorization |  |  |

---

## 10. Required controls

- [ ] Control 1.
- [ ] Control 2.
- [ ] Control 3.

---

## 11. Authorization tests required

- [ ] Allowed role can execute operation.
- [ ] Illegal role receives 403.
- [ ] Unauthenticated user receives 401.
- [ ] Invalid payload is rejected in backend.
- [ ] Invalid state does not allow transition.
- [ ] The response does not expose restricted fields.

---

## 12. Decision for the orchestrator

```yaml
status: <SECURITY_APPROVED | SECURITY_APPROVED_WITH_WARNINGS | SECURITY_CHANGES_REQUIRED | SECURITY_BLOCKED | NOT_APPLICABLE>
next_skill: <sdd-spec-validation | sdd-technical-spec | sdd-api-contract | sdd-migration-rollback | sdd-test | sdd-review>
blocked: true|false
reason: ""
```
