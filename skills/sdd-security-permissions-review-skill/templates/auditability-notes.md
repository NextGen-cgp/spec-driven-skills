# Auditability Notes: <feature-id>

## 1. Auditable operations

| Operation | Must be audited | Reason | Minimum log data |
|---|---:|---|---|
|  | Yes/No |  | actor, timestamp, resource, old state, new state |

## 2. Recommended events

- Creation of master data.
- Master data editing.
- Critical status change.
- Cancellation or reopening.
- Logical or physical elimination.
- Import/export.

## 3. Minimum requirements

```text
- Actor who executes the action.
- Affected resource.
- Date/time.
- Result of the operation.
- Reason if applicable.
- Previous and new status if applicable.
```

## 4. Decision

```yaml
auditability_required: true|false
reason: ""
```
