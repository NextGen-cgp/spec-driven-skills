# Functional Specification: Cancel and Reopen Analysis Parameters

## 1.Summary

During an analysis record, some parameters may not need to be filled. Instead of allowing empty fields, the system must provide an explicit cancellation action for a complete parameter. When canceled, the parameter becomes `Cancelled`, its sample input area closes, and the parameter is excluded from the global analysis result. Users must also be able to reopen the parameter, returning it to `Pending` and making the sample input area available again.

## 1. Functional Goal

Allow analysts to intentionally exclude non-applicable parameters from an analysis without confusing them with forgotten or incomplete mandatory parameters.

## 2. Scope

### In Scope

- Add a visible action to cancel an analysis parameter.
- Change the parameter pill/status from `Pending` to `Cancelled` when cancelled.
- Close or collapse the sample registration box for a canceled parameter.
- Exclude canceled parameters from the global analysis result.
- Add a visible action to reopen a canceled parameter.
- Restore the parameter to `Pending` when reopened.
- Reopen the sample registration box when the parameter returns to `Pending`.
- Preserve the existing visual style of the analysis registration page.

### Out of Scope

- Allowing arbitrary empty mandatory parameters without explicit cancellation.
- Changing the definition of quality plans.
- Changing the severity/range rules of measured parameters.
- Deleting parameters from the analysis.
- Auditing cancellation reasons unless requested later.

## 3. Actors and Roles

| Actor / Role | Functional responsibility | Notes |
|---|---|---|
| Analyst | Registers analysis samples and may cancel or reopen a parameter when it does not apply. | Primary actor. |
| Admin | May have visibility or management permissions depending on existing product rules. | Permissions should be checked by later security review. |

## 4. Affected User Flows

| FlowID | Flow | Description | Affected roles |
|---|---|---|---|
| F-001 | Register analysis parameter | Analyst fills samples for required parameters. | Analyst |
| F-002 | Cancel analysis parameter | Analyst marks a full parameter as cancelled. | Analyst |
| F-003 | Reopen canceled parameter | Analyst returns canceled parameter to pending. | Analyst |
| F-004 | Complete analysis | System computes global result excluding canceled parameters. | Analyst |

## 5. Functional Requirements

| ID | Requirement | Priority | Source |
|---|---|---|---|
| FR-001 | The system must provide an explicit cancel action for an analysis parameter. | MUST | request.md |
| FR-002 | Canceling a parameter must change its visible status/pill to `Cancelled`. | MUST | request.md |
| FR-003 | Canceling a parameter must close or collapse its sample registration box. | MUST | request.md |
| FR-004 | A canceled parameter must not be computed in the global analysis result. | MUST | request.md |
| FR-005 | The system must provide a reopen action for a canceled parameter. | MUST | request.md |
| FR-006 | Reopening a parameter must return it to `Pending`. | MUST | request.md |
| FR-007 | Reopening a parameter must make its sample registration box available again. | MUST | request.md |
| FR-008 | The cancellation/reopen controls must follow the visual style of the page. | SHOULD | request.md |
| FR-009 | Empty non-cancelled required parameters must continue blocking analysis completion. | MUST | inferred from request.md |

## 6. Business Rules

| ID | Rule | Rationale |
|---|---|---|
| BR-001 | A required parameter cannot simply remain empty unless explicitly canceled. | Prevents analyst omissions. |
| BR-002 | A canceled parameter is excluded from the global analysis result. | Non-applicable parameters should not penalize or block completion. |
| BR-003 | A canceled parameter can be reopened during the analysis. | Analysts may decide later that the parameter should be registered. |
| BR-004 | Reopened parameters return to `Pending` and must be treated as required again. | Restores normal validation. |
| BR-005 | Cancellation applies to the complete parameter, not to an individual sample only. | Matches the user requirement. |

## 7. State Model

| State | Description | Visible to user | Terminal |
|---|---|---|---|
| Pending | Parameter still requires registration. | yes | not |
| Canceled | Parameter intentionally excluded from the analysis. | yes | not |
| Completed | Parameter has enough valid samples according to existing rules. | yes | may depend on current workflow |

### Valid Transitions

| From | To | Trigger | Allowed roles | Conditions |
|---|---|---|---|---|
| Pending | Canceled | User clicks cancel parameter action. | Analyst or authorized role | Parameter belongs to current analysis and is not locked. |
| Canceled | Pending | User clicks reopen action. | Analyst or authorized role | Analysis is still editable. |
| Pending | Completed | Existing completion logic. | Analyst or system | Required samples are valid. |

### Invalid Transitions

| From | To | Reason |
|---|---|---|
| Canceled | Completed | A canceled parameter must first be reopened and filled. |
| Completed | Canceled | Depends on existing editability rules; must be confirmed by technical/security review. |

## 8. UI/UX Behavior

- Each parameter card/section should expose a cancel action aligned with the existing visual language.
- When cancelled, the visible pill/status changes to `Cancelled`.
- The sample registration area closes or becomes unavailable.
- A reopen action appears for canceled parameters.
- Reopening restores the previous registration interface and returns status to `Pending`.
- Cancel and reopen icons must be visually clear but not disruptive.

## 9. Permissions Matrix

| Role | View | Cancel parameter | Reopen parameter | Register samples | Notes |
|---|---|---|---|---|---|
| Analyst | allowed | allowed | allowed | allowed when not canceled | Primary workflow owner. |
| Admin | allowed | conditional | conditional | conditional | Depends on existing Admin behavior in analysis records. |

## 10. Validations and Error Handling

| Scenario | Expected behavior |
|---|---|
| User cancels a pending parameter | Status becomes `Cancelled` and sample box closes. |
| User completes analysis with a canceled parameter | Global result ignores the canceled parameter. |
| User completes analysis with a pending empty parameter | Completion remains blocked. |
| User reopens a canceled parameter | Status becomes `Pending` and sample box is available. |
| User tries to cancel after analysis is locked/completed | Operation is denied if existing workflow does not allow edits. |

## 11. Acceptance Criteria Mapping

| AC ID | Functional requirement | Business rules | Verification method |
|---|---|---|---|
| AC-001 | FR-001, FR-002, FR-003 | BR-001, BR-005 | e2e_test |
| AC-002 | FR-004 | BR-002 | unit_test + integration_test |
| AC-003 | FR-005, FR-006, FR-007 | BR-003, BR-004 | e2e_test |
| AC-004 | FR-009 | BR-001 | integration_test |
| AC-005 | FR-008 | N/A | manual_review |

## 12. Edge Cases

- Canceling a parameter after partially entering samples.
- Reopening a parameter that previously had partial samples.
- Completing an analysis where all optional/non-applicable parameters are canceled.
- Attempting to cancel a parameter after the analysis is completed or locked.
- Repeated cancel/reopen actions in the same analysis session.

## 13. Functional Risks

| Risk | Impact | Mitigation |
|---|---|---|
| Canceled parameter still computed in global result | Incorrect analysis result. | Require calculation-specific tests. |
| Empty pending parameters become indistinguishable from canceled ones | Analysts may forget required parameters. | Keep explicit `Cancelled` status and validation rules. |
| Reopen behavior loses previously entered values ​​unexpectedly | Data confusion. | Technical spec must define whether partial samples are preserved or cleared. |

## 14. Dependencies

- Existing analysis parameter states.
- Existing global analysis result calculation.
- Existing validation that blocks completion when required parameters are empty.
- Existing visual components for pills, cards, icons and sample boxes.

## 15. Required Next Skills

- `sdd-technical-spec`
- `sdd-api-contract`
- `sdd-migration-rollback`
- `sdd-security-permissions-review`
- `sdd-test-plan`

## 16. Flags

```yaml
affects_ui: true
affects_api: true
affects_database: true
affects_permissions: true
affects_authentication: false
affects_critical_calculation: true
affects_workflow_state: true
requires_migration_plan: true
requires_api_contract: true
requires_security_review: true
requires_test_plan: true
requires_documentation: true
```

## 17. Final Status

`READY_FOR_TECHNICAL_SPEC`

## 18. Open Functional Questions

| Question | Blocking | Recommended owner |
|---|---|---|
| Should partially entered samples be preserved when a parameter is canceled and then reopened? | not | Product/technical spec |
| Can completed parameters be canceled, or only pending parameters? | not | Product/technical spec |
| Can Admin users cancel/reopen parameters in analysis records, or only Analysts? | not | Security/permissions review |
