# Frontend/Backend Contract: <feature-id>

## 1. UI actions mapped to backend operations

| UI action | Component/screen | Backend operation | Expected UI feedback | Traceability |
|---|---|---|---|---|
| `<action>` | `<component/screen>` | `<operation>` | `<loading/success/error>` | `<AC/UC>` |

## 2. Client state expectations

| Client state | Source | Update trigger | Reset trigger | Notes |
|---|---|---|---|---|
| `<state>` | `<api/local/server>` | `<trigger>` | `<trigger>` | `<notes>` |

## 3. Loading behavior

| Operation | Loading indicator | Optimistic update? | Rollback on error? |
|---|---|---:|---:|
| `<operation>` | `<behavior>` | `<yes/no>` | `<yes/no>` |

## 4. Error UX behavior

| Error | UIbehavior | User guidance |
|---|---|---|
| `<error>` | `<toast/inline/modal/etc.>` | `<message guidance>` |

## 5. Permission-driven UI behavior

| Role | Allowed UI actions | Hidden/disabled actions | Backend still enforces? |
|---|---|---|---:|
| `<role>` | `<actions>` | `<actions>` | yes |
