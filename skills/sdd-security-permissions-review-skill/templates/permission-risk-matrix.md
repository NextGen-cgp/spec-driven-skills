# Permission Risk Matrix: <feature-id>

## Permissions and risks matrix

| Operation | Actor/Role | Allowed | Risk if improperly allowed | Severity | Control required | Test required |
|---|---|---:|---|---|---|---|
| Search records | ADMIN | Yes | Low | LOW | Authenticated access | Test reading allowed |
| Search records | ANALYST | Yes | Low/Medium depending on scope | LOW/MEDIUM | Filtered by scope if applicable | Test reading allowed |
| Create record | ANALYST | No | Unauthorized creation of master data | HIGH | Backend 403 | Test access denied |
| Edit record | ANALYST | No | Unauthorized modification | HIGH | Backend 403 | Test access denied |

## Quick sort

```text
CRITICAL: Serious improper access, privilege escalation, mass exposure, or data loss.
HIGH: Unauthorized writing/modification, permission bypass, or API without backend control.
MEDIUM: Scope ambiguity, incomplete validation, or insufficient logging.
LOW: hardening, consistency or documentation.
INFO: informative note.
```
