# Security & Permissions Review: feature-cancelled-parameter

## 1. Exit status

- **Status**: `SECURITY_APPROVED_WITH_WARNINGS`
- **Next recommended skill**: `sdd-spec-validation`
- **Reason**: Cancel and reopen parameter operations are defined as state transitions and require backend authorization. It remains as a warning to add auditing if the business needs complete traceability.

---

## 2. Revised scope

| Area | Does it affect? | Detail |
|---|---:|---|
| Authorization | Yes | Only users with analysis editing permission can cancel/reopen parameters. |
| API | Yes | State transition action on analysis parameter. |
| State | Yes | Pending ↔ Cancelled. |
| Global calculation | Yes | Canceled does not count. |
| Critical data | Medium | Affects operational result of the analysis. |

---

## 3. Revised operations

| Operation | Type | Allowed roles | Denied Roles | Enforcement backend required | Endpoint/action |
|---|---|---|---|---|---|
| Cancel parameter | transition | ADMIN, ANALYST/OPERATOR authorized | User without permission on analysis | Yes | PATCH /analysis-parameters/:id/cancel |
| Reopen parameter | transition | ADMIN, ANALYST/OPERATOR authorized | User without permission on analysis | Yes | PATCH /analysis-parameters/:id/reopen |
| Calculate overall result | backend rule | System | Client user | Yes | Calculation service |

---

## 4. Findings

| ID | Severity | Blocker | Area | Finding | Action required |
|---|---|---:|---|---|---|
| SEC-001 | MEDIUM | No | state_transition | Cancellation/reopening should be validated in backend and not just from the UI button. | Maintain control in backend service. |
| SEC-002 | MEDIUM | No | audit | Cancellation may alter the overall result; it is convenient to register actor and timestamp. | Add audit if applicable to the business. |
| SEC-003 | LOW | No | validation | Reopening a parameter should return it to Pending status and reactivate sample capture. | Cover with functional tests. |

---

## 5. Required tests

- Authorized user can cancel pending parameter.
- Authorized user can reopen canceled parameter.
- Unauthorized user receives 403 when canceling.
- Unauthorized user receives 403 upon reopening.
- Canceled parameter does not compute in the global result.
- Reopening restores pending status and re-computes according to normal rules.

---

## 6. Decision for the orchestrator

```yaml
status: SECURITY_APPROVED_WITH_WARNINGS
next_skill: sdd-spec-validation
blocked: false
reason: "The permissions model is sufficient to move forward, but it is recommended to define audit for cancellation/reopening."
```
