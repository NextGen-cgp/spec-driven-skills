# Role Operation Matrix: <feature-id>

## Operations matrix by role

| Operation | ADMIN | ANALYST | OPERATOR | Observations |
|---|---:|---:|---:|---|
| Search | Yes | Yes |  |  |
| See detail | Yes | Yes |  |  |
| Create | Yes | No |  |  |
| Edit | Yes | No |  |  |
| Delete |  |  |  |  |
| Cancel |  |  |  |  |
| Reopen |  |  |  |  |
| Export |  |  |  |  |

##Default policy

```text
If an operation is not explicitly allowed for a role, it should be considered denied.
```

## Enforcement expected

| Operation | Frontend Enforcement | Enforcement backend | Expected error |
|---|---|---|---|
|  | Hide/disable UI | Guard/policy/service check | 403 |
