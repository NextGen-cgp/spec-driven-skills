# Context Analysis: <feature-name>

## 1. Executive summary

Analysis status: `<CONTEXT_ANALYSIS_READY | CONTEXT_ANALYSIS_PARTIAL | NEEDS_MORE_CONTEXT | BLOCKED_BY_MISSING_REPOSITORY_ACCESS>`

Overall confidence level: `<high | medium | low>`

Brief summary:

```text
<3-6 line summary of the detected context and the estimated impact of the change.>
```

---

## 2. Request analyzed

Original request:

```text
<Paste or summarize the user's original request.>
```

Estimated exchange rate:

```text
<feature | bugfix | refactor | security | docs | test-only | architecture>
```

---

## 3. Stack detected

| Area | Observed evidence | Conclusion | Trust |
|---|---|---|---|
| Language | `<file>` | `<technology>` | `<high/medium/low>` |
| Frontend | `<file>` | `<framework>` | `<high/medium/low>` |
| Backend | `<file>` | `<framework>` | `<high/medium/low>` |
| Database | `<file>` | `<DB>` | `<high/medium/low>` |
| ORM / Data | `<file>` | `<ORM>` | `<high/medium/low>` |
| Auth | `<file>` | `<system>` | `<high/medium/low>` |
| Testing | `<file>` | `<tool>` | `<high/medium/low>` |
| Deploy | `<file>` | `<mechanism>` | `<high/medium/low>` |

---

## 4. Architecture and structure of the repository

| Route | Observed Purpose | Evidence | Trust |
|---|---|---|---|
| `<path>` | `<description>` | `<file/pattern>` | `<high/medium/low>` |

Relevant notes:

```text
<Observations on frontend/backend separation, layers, modules, features or services.>
```

---

## 5. Relevant patterns identified

### 5.1. Frontend/UI

```text
<Component patterns, routes, forms, state, styles, visual design.>
```

### 5.2. Backend/API

```text
<Patterns of controllers, services, routes, validations, errors.>
```

### 5.3. Data and persistence

```text
<Patterns of models, entities, repositories, migrations, queries.>
```

### 5.4. Authentication, roles and permissions

```text
<Patterns of guards, middleware, claims, roles or authorization.>
```

### 5.5. Tests

```text
<Unit test patterns, integration, e2e, fixtures or mocks.>
```

---

## 6. Potentially affected modules and files

| Area | Candidate files | Reason | Trust |
|---|---|---|---|
| `<frontend/backend/db/auth/tests>` | `<path>` | `<reason>` | `<high/medium/low>` |

---

## 7. Related existing tests

| Route | Test type | Relationship with change | Trust |
|---|---|---|---|
| `<path>` | `<unit/integration/e2e>` | `<description>` | `<high/medium/low>` |

If no related tests are located:

```text
No related tests have been detected in the current analysis.
```

---

## 8. Relevant dependencies and contracts

```text
<APIs, frontend/backend contracts, shared entities, models, schemas, environment variables, queues, external services or integrations.>
```

---

## 9. Technical risks

| Risk | Severity | Reason | Suggested mitigation |
|---|---|---|---|
| `<risk>` | `<low/medium/high/critical>` | `<reason>` | `<mitigation>` |

---

## 10. Open questions

```text
- <Question 1, if applicable>
- <Question 2, if applicable>
```

If there are no open questions:

```text
There are no blocking open questions detected in this phase.
```

---

## 11. Recommendation for the Orchestrator

Recommended status:```text
<CONTEXT_ANALYSIS_READY | CONTEXT_ANALYSIS_PARTIAL | NEEDS_MORE_CONTEXT | BLOCKED_BY_MISSING_REPOSITORY_ACCESS>
```

Next recommended skill:

```text
<user-story-enrichment | technical-specification | api-contract-specification | migration-rollback-planning | security-permissions-review | blocked>
```

Reason:

```text
<Brief explanation of why that next skill is recommended.>
```

Locks:

```text
- <block or "None">
```
