# Data Model Impact: <feature-id>

## 1. Data impact summary

Describes whether the change requires new persistence, modified persistence, derived values, backfill, cleanup or state migration.

## 2. Entities/tables/models affected

| Entity/table/model | Current responsibility | Proposed impact | Migration required? |
|---|---|---|---:|
| `<entity>` | `<current>` | `<impact>` | `<yes/no>` |

## 3. Persistence requirements

- `<requirement-1>`
- `<requirement-2>`

## 4. Data compatibility

| Concern | Impact | Mitigation |
|---|---|---|
| Existing records | `<impact>` | `<mitigation>` |
| Null/default values ​​| `<impact>` | `<mitigation>` |
| Historical data | `<impact>` | `<mitigation>` |
| Rollback | `<impact>` | `<mitigation>` |

## 5. Required next skill

```text
sdd-migration-rollback
```
