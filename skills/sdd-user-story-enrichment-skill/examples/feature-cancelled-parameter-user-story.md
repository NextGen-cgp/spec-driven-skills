# User Story Enrichment: feature-cancel-analysis-parameter

## 1. Functional summary

It is necessary to allow certain parameters of an analysis to be marked as canceled when they do not correspond to be filled. This cancellation must be an explicit action, not an empty field, to avoid errors due to forgetfulness. A canceled parameter must not be counted in the overall result of the analysis and must be able to be reopened if the analyst decides to record it later.

## 2. Original request interpreted

```text
In analysis logs, some parameters do not have to be filled out. You don't want to allow yourself to just leave them empty. There should be an icon to cancel an entire parameter, change its pill from Pending to Canceled, and close the sample box. There must also be an action to reopen the parameter, returning to Pending and reopening the record box. In the backend, if a parameter is Canceled, it does not compute in the overall analysis result.
```

## 3. Classification

- Change type: `feature`, `ui_change`, `workflow_change`, `business_rule`, `critical_calculation`
- Functional risk: `high`
- Reason for risk: affects the status of parameters, validation of completion and global calculation of the analysis.
- Probable affected modules:
  - Analysis log.
  - Parameter cards/boxes.
  - Visual status of parameters.
  - Global calculation of the result.
  - Completion validations.
  - Persistence of the parameter state.

## 4. Actors

| Actor | Role | Need | Expected permissions |
|---|---|---|---|
| Analyst | Operational user | Cancel parameters that do not apply and reopen them if appropriate | View analyses, log samples, cancel/reopen parameters based on current permissions |
| System | Calculation engine | Exclude canceled parameters from global result | Apply business rule automatically |

## 5. Refined User Stories

### US-001: Cancel an analysis parameter

As an `Analyst`, I want to be able to explicitly cancel a parameter that does not need to be populated, to complete the analysis without leaving ambiguous empty fields.

- Priority: `must`
- Functional value: avoids errors of interpretation and allows us to distinguish between “not filled in due to forgetfulness” and “not applicable”.

### US-002: Reopen a canceled parameter

As an 'Analyst', I want to be able to reopen a canceled parameter, to record samples if during the analysis it is decided that it should be evaluated.

- Priority: `must`
- Functional value: allows you to correct decisions during the operational flow.

### US-003: Exclude canceled parameters from global result

As `System`, I want to exclude canceled parameters from the overall calculation of the analysis, so that the final result only takes into account parameters actually evaluated.

- Priority: `must`
- Functional value: avoids penalizing or blocking analysis for parameters that do not apply.

## 6. Use cases

### UC-001: Analyst cancels a pending parameter

- Actor: Analyst.
- Preconditions:
  - There is an analysis in progress.
  - The parameter is in `Pending` state.
  - The sample registration box is visible or available.
- Main flow:
  1. The analyst identifies that a parameter should not be filled.
  2. Press the parameter cancel icon.
  3. The system changes the visual status of the parameter to `Cancelled`.
  4. The system closes the parameter sample record box.
  5. The system excludes the parameter from the overall calculation.
- Expected result:
  - The parameter is marked as canceled and does not block the analysis progress.

### UC-002: Analyst reopens a canceled parameter

- Actor: Analyst.
- Preconditions:
  - There is an analysis in progress.
  - The parameter is in `Cancelled` state.
- Main flow:
  1. The analyst presses the reopen icon.
  2. The system changes the parameter status to `Pending`.
  3. The system reopens the sample registration box.
  4. The parameter once again forms part of the corresponding validations and calculations.
- Expected result:
  - The parameter can be filled normally again.

## 7. Business rules

- `BR-001`: A parameter must not be left empty as a substitute for “not applicable”; must be explicitly marked as `Cancelled`.
- `BR-002`: When canceling a parameter, its visual state should change from `Pending` to `Cancelled`.
- `BR-003`: When canceling a parameter, the associated sample registration box must be closed.
- `BR-004`: A parameter in the `Cancelled` state does not count in the overall result of the analysis.
- `BR-005`: A parameter in the `Cancelled` state should not block the completion of the analysis due to lack of samples.
- `BR-006`: A canceled parameter must be reopenable.
- `BR-007`: When reopening a canceled parameter, its status returns to `Pending`.
- `BR-008`: When reopening a canceled parameter, the sample registration box becomes available again.
- `BR-009`: The cancel/reopen action should follow the existing visual style of the page.
- `BR-010`: If there are samples previously registered in a parameter that is canceled, the functional spec must define whether they are preserved, hidden or invalidated.

## 8. Functional states

| State | Description | Computes global result | Sample box |
|---|---|---|---|
| `Pending` | Parameter pending registration/evaluation | Yes, when you have valid data or according to current rule | Open/available |
| `Cancelled` | Parameter explicitly marked as not applicable | No | Closed |
| `Completed` | Registered and evaluated parameter | Yes | According to current behavior |

## 9. Acceptance criteria

### AC-001: Explicit parameter override

**Given** a parameter is in `Pending` state,  
**when** the analyst presses the cancel icon,  
**then** the parameter changes to `Cancelled` state and is visually displayed as cancelled.

- Verification type: `e2e_test`
- Related rules: `BR-001`, `BR-002`

### AC-002: Sample box closure

**Given** a parameter is visible to record samples,  
**when** the analyst cancels it,  
**then** the sample registration box is closed or becomes unavailable for that parameter.

- Check type: `ui_check`
- Related rules: `BR-003`

### AC-003: Exclusion of global calculation

**Given** an analysis contains canceled parameters and evaluated parameters,  
**when** the system calculates the overall result,  
**then** ignores the canceled parameters and calculates the result with only the applicable parameters.

- Verification type: `unit_test`
- Related rules: `BR-004`

### AC-004: Canceled parameter does not block completion

**Given** all applicable mandatory parameters are complete and one or more parameters are canceled,  
**when** the analyst attempts to complete the analysis,  
**then** the system allows the analysis to be completed if the rest of the rules are met.

- Verification type: `integration_test`
- Related rules: `BR-005`

### AC-005: Parameter reopening canceled

**Given** a parameter is in `Cancelled` state,  
**when** the analyst hits the reopen action,  
**then** the parameter returns to `Pending` and the sample box becomes available.

- Verification type: `e2e_test`
- Related rules: `BR-006`, `BR-007`, `BR-008`

## 10. Borderline cases

- Cancel a parameter with samples already entered.
- Reopen a canceled parameter after having advanced on other parameters.
- Try to complete an analysis with all parameters canceled.
- Cancel a parameter already completed.
- Reopen a canceled parameter and leave it uncompleted.
- Parameters canceled within severity or global result calculations.

## 11. Out of reach

- Change all existing quality calculation rules.
- Completely redesign the parameter cards.
- Create an advanced system of cancellation reasons, unless defined as an additional requirement.
- Detailed audit of cancellations, unless subsequently decided.

## 12. Assumptions

- The cancellation is applied at the parameter level within a specific analysis, not to the master parameter of the quality plan.
- Reopening returns the parameter to a functional state equivalent to `Pending`.
- Calculation exclusion applies only while the parameter is in `Cancelled` state.
- Full analysis validation should treat `Cancelled` as a valid status to not require samples.

## 13. Open questions

### Blockers

- What should happen if a parameter that already has registered samples is canceled: keep them, delete them, hide them or leave them uncomputed?
- Should canceling an already completed parameter or only pending parameters be allowed?

### Non-blocking

- Should a reason for cancellation be requested?
- Should it be recorded who canceled or reopened the parameter?
- Should there be confirmation before canceling if there is already data entered?

## 14. Exit status

- Status: `NEEDS_CLARIFICATION`
- Reason: There are relevant functional decisions on existing samples and cancellation of completed parameters.
- Next recommended skill: `sdd-orchestrator`
- If the orchestrator decides to move forward with assumptions, the next skill can be `sdd-functional-spec`.
- Skills required later:
  - `sdd-functional-spec`
  - `sdd-technical-spec`
  - `sdd-migration-rollback`, if canceled state requires new persistence.
  - `sdd-test`, for impact on global calculation.
