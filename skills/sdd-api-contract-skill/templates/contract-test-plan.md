# Contract Test Plan: <feature-id>

## 1. Scope

Describe which contracts need tests and why.

## 2. Contract test matrix

| Test ID | Operation | Scenario | Input | Expected output | Type | Traceability |
|---|---|---|---|---|---|---|
| CT-001 | `<operation>` | Valid request | `<input>` | `<output>` | `<unit/integration/e2e>` | `<AC/BR>` |
| CT-002 | `<operation>` | Invalid request | `<input>` | `<error>` | `<unit/integration/e2e>` | `<AC/BR>` |
| CT-003 | `<operation>` | Forbidden role | `<input>` | `403 FORBIDDEN` | `<integration/e2e>` | `<AC/BR>` |

## 3. Required fixtures

| Fixture | Purpose | Notes |
|---|---|---|
| `<fixture>` | `<purpose>` | `<notes>` |

## 4. Regression cases

- `<regression-case-1>`
- `<regression-case-2>`

## 5. Handoff to test skill

```text
sdd-test should verify these contracts after implementation.
```
