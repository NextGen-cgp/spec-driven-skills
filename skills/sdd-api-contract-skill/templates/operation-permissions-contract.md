# Operation Permissions Contract: <feature-id>

## 1. Permission model summary

Describes how role/permission checks apply to the operations defined in the API contract.

## 2. Operation permissions

| Operation | Type | Roles allowed | Permissions required | Backend enforcement | Frontend behavior |
|---|---|---|---|---|---|
| `<operation>` | `<read/write/transition>` | `<roles>` | `<permissions>` | `<middleware/service/policy>` | `<hide/disable/show>` |

## 3. Negative cases

| Case | Expected status/result | Error code | Notes |
|---|---|---|---|
| Unauthenticated user calls protected operation | 401 | `UNAUTHORIZED` | `<notes>` |
| Authenticated user without permission calls operation | 403 | `FORBIDDEN` | `<notes>` |
| User tampers with hidden frontend action | 403 | `FORBIDDEN` | Backend must reject |

## 4. Required security review

```text
<sdd-security-permissions-review required/not required>
```

Reason:

```text
<reason>
```
