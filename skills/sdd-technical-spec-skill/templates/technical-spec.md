# Technical Spec: <feature-id>

## 1. Metadata

- Feature ID: `<feature-id>`
- Change type: `<feature | bugfix | refactor | security | performance | documentation | test-only | architecture>`
- Current SDD state: `<state>`
- Source functional spec: `/specs/<feature-id>/functional-spec.md`
- Source context analysis: `/specs/<feature-id>/context-analysis.md`
- Owner skill: `sdd-technical-spec`

## 2. Technical summary

Describe the technical solution in 3-6 sentences.

## 3. Functional traceability

| Functional item | Acceptance criteria | Technical response | Notes |
|---|---|---|---|
| `<use-case-id>` | `<AC-id>` | `<technical decision>` | `<notes>` |

## 4. Affected layers

| Layer | Affected? | Details |
|---|---:|---|
| Frontend | `<yes/no>` | `<screens/components/routes>` |
| Backend | `<yes/no>` | `<services/controllers/domain logic>` |
| Database | `<yes/no>` | `<entities/tables/state persistence>` |
| API | `<yes/no>` | `<endpoints/contracts/actions>` |
| Authentication | `<yes/no>` | `<login/session/token impact>` |
| Authorization | `<yes/no>` | `<roles/permissions>` |
| Validation | `<yes/no>` | `<server/client validations>` |
| Testing | `<yes/no>` | `<test areas>` |
| Documentation | `<yes/no>` | `<docs to update>` |

## 5.Architecture alignment

### 5.1. Existing patterns regarding

- `<pattern-1>`
- `<pattern-2>`

### 5.2. Proposed technical approach

- `<decision-1>`
- `<decision-2>`

### 5.3. Alternatives considered

| Alternative | Pros | Cons | Decision |
|---|---|---|---|
| `<alternative>` | `<pros>` | `<cons>` | `<accepted/rejected>` |

## 6. Backend design

> Use this section only if backend is affected.

### 6.1. Modules/services affected

| Module/service | Expected change | Traceability |
|---|---|---|
| `<module>` | `<change>` | `<AC/BR/UC>` |

### 6.2. domain logic

- `<domain-rule-1>`
- `<domain-rule-2>`

### 6.3. Backend validations

- `<validation-1>`
- `<validation-2>`

### 6.4. Error handling

| Scenario | Expected technical behavior | User/API feedback |
|---|---|---|
| `<scenario>` | `<behavior>` | `<feedback>` |

## 7. Frontend design

> Use this section only if frontend is affected.

### 7.1. Screens/components affected

| Screen/component | Expected change | State impact |
|---|---|---|
| `<screen>` | `<change>` | `<state>` |

### 7.2. UI states

| State | Trigger | Expected behavior |
|---|---|---|
| `<state>` | `<trigger>` | `<behavior>` |

### 7.3. Client validations

- `<validation-1>`
- `<validation-2>`

## 8. Data model impact

> Use this section only if database or persisted state is affected.

| Entity/table/model | Impact | Migration needed? | Notes |
|---|---|---:|---|
| `<entity>` | `<impact>` | `<yes/no>` | `<notes>` |

Required next skill if applicable:

```text
sdd-migration-rollback
```

## 9. API impact

> Use this section only if API is affected.

| API/action | Change type | Contract impact | Notes |
|---|---|---|---|
| `<endpoint/action>` | `<new/modify/remove>` | `<request/response/error>` | `<notes>` |

Required next skill if applicable:

```text
sdd-api-contract
```

## 10. Security and permissions impact

| Role/permission | Technical control required | Backend enforced? | Frontend reflected? |
|---|---|---:|---:|
| `<role>` | `<control>` | `<yes/no>` | `<yes/no>` |

Required next skill if applicable:

```text
sdd-security-permissions-review
```

## 11. Implementation sequence

| Step | Description | Depends on | Validation |
|---:|---|---|---|
| 1 | `<step>` | `<dependency>` | `<validation>` |
| 2 | `<step>` | `<dependency>` | `<validation>` |

## 12. Test implications

| Test area | Required coverage | Related acceptance criteria |
|---|---|---|
| Unit | `<coverage>` | `<AC-id>` |
| Integration | `<coverage>` | `<AC-id>` |
| Functional | `<coverage>` | `<AC-id>` |
| Regression | `<coverage>` | `<AC-id>` |

## 13. Technical risks

| Risk ID | Risk | Severity | Mitigation |
|---|---|---|---|
| R-001 | `<risk>` | `<low/medium/high/critical>` | `<mitigation>` |

## 14. Open questions

| Question | Blocking? | Owner | Recommended route |
|---|---:|---|---|
| `<question>` | `<yes/no>` | `<skill/user>` | `<route>` |

## 15. Handoff decision

Recommended next skill:

```text
<sdd-api-contract | sdd-migration-rollback | sdd-security-permissions-review | sdd-spec-validation | sdd-implementation>
```

Recommended exit state:

```text
<READY_FOR_API_CONTRACT | READY_FOR_MIGRATION_ROLLBACK | READY_FOR_SECURITY_REVIEW | READY_FOR_SPEC_VALIDATION | READY_FOR_IMPLEMENTATION | NEEDS_FUNCTIONAL_REFINEMENT | NEEDS_CONTEXT_ANALYSIS | BLOCKED>
```
