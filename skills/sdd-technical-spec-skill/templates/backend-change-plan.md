# Backend Change Plan: <feature-id>

## 1. Backend scope

- Affected modules/services: `<list>`
- Affected business logic: `<list>`
- Affected validations: `<list>`

## 2. Domain logic changes

| Rule | Current behavior | New behavior | Traceability |
|---|---|---|---|
| `<rule>` | `<current>` | `<new>` | `<AC/BR/UC>` |

## 3. Server-side validations

| Validation | Trigger | Expected behavior | Error handling |
|---|---|---|---|
| `<validation>` | `<trigger>` | `<behavior>` | `<error>` |

## 4. Authorization controls

| Operation | Required role/permission | Enforcement point | Notes |
|---|---|---|---|
| `<operation>` | `<role>` | `<backend layer>` | `<notes>` |

## 5. Service flow

```text
<input/action>
  → <controller/action>
  → <service/use-case>
  → <domain validation>
  → <repository/persistence>
  → <response/result>
```

## 6. Risks

- `<risk-1>`
