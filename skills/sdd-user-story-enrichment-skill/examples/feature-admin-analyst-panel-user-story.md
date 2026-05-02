# User Story Enrichment: feature-admin-analyst-panel

## 1. Functional summary

A new panel differentiated by roles needs to be created so that administrative users can manage quality plans and parameters, while analysts can consult the same information without the ability to create or edit.

The functionality must maintain the current visual pattern of the application and respect the separation of permissions between administration and analysis.

## 2. Original request interpreted

```text
Create a new panel for admins and analysts with different permissions depending on the role. The admin role will be able to register new quality plans and parameters, modify existing ones and search. The analyst role will be able to search for plans and parameters, but not create or edit. The new sections must follow the visual pattern of the website.
```

## 3. Classification

- Change type: `feature`, `permissions`, `ui_change`, `workflow_change`
- Functional risk: `high`
- Reason for risk: affects permissions, write operations and system master data management.
- Probable affected modules:
  - Authentication/authorization.
  - Administration panel.
  - Quality plans.
  - Parameters.
  - Search and filtering.
  - Shared visual components.

## 4. Actors

| Actor | Role | Need | Expected permissions |
|---|---|---|---|
| Administrator | `admin` | Manage quality plans and parameters | Consult, search, create, edit |
| Analyst | `analyst` | Consult quality plans and parameters | Consult and search only |

## 5. Refined User Stories

### US-001: Management of quality plans by administrator

As an 'Administrator', I want to be able to create and modify quality plans, to keep the settings used in quality analyzes up to date.

- Priority: `must`
- Functional value: allows you to manage critical master data without technical intervention.
- Dependencies: role permissions, registration/editing forms and persistence of changes.

### US-002: Parameter management by administrator

As an 'Administrator', I want to be able to create and modify parameters, to keep the criteria used in quality and analysis plans updated.

- Priority: `must`
- Functional value: allows the system to be adapted to new control criteria.
- Dependencies: parameter model, validations and association with plans.

### US-003: Consultation of plans and parameters by analyst

As an 'Analyst', I want to be able to search and consult quality plans and parameters, to review the necessary information without altering the system configuration.

- Priority: `must`
- Functional value: offers operational visibility without risk of undue modification.
- Dependencies: list, search, details in read-only mode and permission control.

## 6. Use cases

### UC-001: Administrator creates a new parameter

- Actor: Administrator.
- Preconditions:
  - The user has the `admin` role.
- Main flow:
  1. Access the parameters section.
  2. Tap a create action.
  3. Complete the required fields.
  4. Save the new parameter.
  5. The system validates and registers the parameter.
- Expected result:
  - The parameter becomes available for use according to the system rules.

### UC-002: Analyst views a quality plan

- Actor: Analyst.
- Preconditions:
  - The user has the `analyst` role.
- Main flow:
  1. The analyst accesses the panel.
  2. Look for a quality plan.
  3. Open your detail.
  4. Check the information.
- Expected result:
  - You can view the information, but not create or edit.

## 7. Business rules

- `BR-001`: A user with the `admin` role can consult, search, create and edit quality plans.
- `BR-002`: A user with the `admin` role can consult, search, create and edit parameters.
- `BR-003`: A user with the `analyst` role can consult and search for quality plans, but cannot create or edit them.
- `BR-004`: A user with the `analyst` role can query and search for parameters, but cannot create or edit them.
- `BR-005`: Creation and editing actions should not depend solely on hiding buttons on the frontend; They must also be validated in the backend.
- `BR-006`: New sections must respect the aesthetics, proportions, components and existing visual patterns of the application.

## 8. Functional states

- `view_mode`: user can view information.
- `edit_mode`: user can modify information, only allowed for admin.
- `create_mode`: user can create new records, only allowed for admin.
- `forbidden_action`: attempt to access an action that is not allowed.

## 9. Acceptance criteria

### AC-001: Admin can search for quality plans

**Given** a user with the `admin` role accesses the panel,  
**when** you use quality plan search,  
**then** the system shows matching results and allows you to open the detail.

- Verification type: `e2e_test`
- Related rules: `BR-001`

### AC-002: Admin can create quality plans

**Given** a user with the `admin` role is in the plans section,  
**when** you complete a valid quality plan registration,  
**then** the system saves the new plan and displays it in the corresponding search or listing.

- Verification type: `integration_test`
- Related rules: `BR-001`

### AC-003: Analyst can search for plans and parameters

**Given** a user with the `analyst` role accesses the dashboard,  
**when** you search for quality plans or parameters,  
**then** you can view results and open details in read-only mode.

- Verification type: `e2e_test`
- Related rules: `BR-003`, `BR-004`

### AC-004: Analyst cannot create or edit

**Given** a user with the `analyst` role attempts to create or edit a plan or parameter,  
**when** you perform the action from UI, direct route or backend request,  
**then** the system prevents the operation.

- Verification type: `integration_test`
- Related rules: `BR-003`, `BR-004`, `BR-005`

## 10. Borderline cases

- User without recognized role accesses the panel.
- Analyst tries to access an edition via direct URL.
- Admin creates a plan with incomplete data.
- Search without results.
- Parameter associated with existing plans that you are trying to modify.
- Session expired during a create or edit operation.

## 11. Out of reach

- Complete redesign of the application.
- Changes in the global authentication model except what is necessary for permissions.
- Advanced auditing of changes, unless the orchestrator marks it as mandatory.
- Mass import of plans or parameters.

## 12. Assumptions

- There are differentiable roles between `admin` and `analyst`.
- The backend has or will have validation of permissions by role.
- There are already reusable visual patterns in the application.
- The search must allow locating both plans and parameters.

## 13. Open questions

### Blockers

- Is the actual role of the analyst in the system called `analyst`, `analyst` or another internal value?
- Does editing plans/parameters require historical tracking or mandatory audit?

### Non-blocking

- Should the search be global in a single box or separated by section?
- Should there be pagination, advanced filters or just basic search?

## 14. Exit status

- Status: `READY_FOR_FUNCTIONAL_SPEC`
- Next recommended skill: `sdd-functional-spec`
- Skills required later:
  - `sdd-security-permissions-review`
  - `sdd-api-contract`, if new or modified endpoints exist.
  - `sdd-migration-rollback`, if there are changes to tables or entities.
