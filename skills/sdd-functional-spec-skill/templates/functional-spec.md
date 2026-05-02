# Functional Specification: <feature-name>

## 1.Summary

<Short description of the functional change.>

## 1. Functional Goal

<What user/business problem this change solves.>

## 2. Scope

### In Scope

- <Included behavior>

### Out of Scope

- <Explicitly excluded behavior>

## 3. Actors and Roles

| Actor / Role | Functional responsibility | Notes |
|---|---|---|
| <role> | <what this role does> | <notes> |

## 4. Affected User Flows

| FlowID | Flow | Description | Affected roles |
|---|---|---|---|
| F-001 | <flow> | <description> | <roles> |

## 5. Functional Requirements

| ID | Requirement | Priority | Source |
|---|---|---|---|
| FR-001 | <requirement> | MUST | <source> |

## 6. Business Rules

| ID | Rule | Rationale |
|---|---|---|
| BR-001 | <rule> | <why it exists> |

## 7. State Model

<Describe states and transitions if applicable. Otherwise mark as N/A.>

## 8. UI/UX Behavior

<Describes expected user-visible behavior, feedback, states, disabled actions and messages.>

## 9. Permissions Matrix

<Reference permissions-matrix.md if applicable. Otherwise mark as N/A.>

## 10. Validations and Error Handling

| Scenario | Expected behavior |
|---|---|
| <scenario> | <expected behavior> |

## 11. Acceptance Criteria Mapping

| AC ID | Functional requirement | Business rules | Verification method |
|---|---|---|---|
| AC-001 | FR-001 | BR-001 | <test/manual> |

## 12. Edge Cases

- <edge case>

## 13. Functional Risks

| Risk | Impact | Mitigation |
|---|---|---|
| <risk> | <impact> | <mitigation> |

## 14. Dependencies

- <dependency>

## 15. Required Next Skills

- `sdd-technical-spec`
- `<other-skill-if-needed>`

## 16. Flags

```yaml
affects_ui: false
affects_api: false
affects_database: false
affects_permissions: false
affects_authentication: false
affects_critical_calculation: false
affects_workflow_state: false
requires_migration_plan: false
requires_api_contract: false
requires_security_review: false
requires_test_plan: true
requires_documentation: true
```

## 17. Final Status

`READY_FOR_TECHNICAL_SPEC`
