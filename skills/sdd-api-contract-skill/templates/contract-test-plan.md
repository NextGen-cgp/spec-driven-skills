# Contract Test Plan: <feature-id>

## 1.Scope

Describe which contracts need tests and why.

## 1. Contract test matrix

| Test ID | Operation | Scenario | Input | Expected output | Type | Traceability |
|---|---|---|---|---|---|---|
| CT-001 | `<operation>` | Valid request | `<input>` | `<output>` | `<unit/integration/e2e>` | `<AC/BR>` |
| CT-002 | `<operation>` | Invalid request | `<input>` | `<error>` | `<unit/integration/e2e>` | `<AC/BR>` |
| CT-003 | `<operation>` | Forbidden role | `<input>` | `403 FORBIDDEN` | `<integration/e2e>` | `<AC/BR>` |

## 2. Required fixtures

| Fixtures | Purpose | Notes |
|---|---|---|
| `<fixture>` | `<purpose>` | `<notes>` |

## 3. Regression cases

- `<regression-case-1>`
- `<regression-case-2>`

## 4. Handoff to test skill

```text
sdd-test should verify these contracts after implementation.
```
