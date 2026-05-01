# Example: Blocked Spec Due to Destructive Migration

## Decision

```text
BLOCKED
```

## Next Skill

```text
sdd-orchestrator
```

## Validation Summary

The proposed change requires deleting or transforming existing persisted data, but the spec does not provide a rollback strategy, backup requirement, data retention decision or business approval. This cannot proceed as normal refinement because a human decision is required.

## Blocking Issues

| ID | Severity | Issue | Route To |
|---|---|---|---|
| VAL-001 | CRITICAL | Destructive data migration lacks rollback and backup strategy. | sdd-orchestrator |
| VAL-002 | CRITICAL | No explicit business approval for data loss or irreversible transformation. | sdd-orchestrator |

## Gate Decision

```text
Implementation Gate: FAIL
Migration Gate: FAIL
```

## Required Decision

The orquestador must request or document a business decision before this spec can continue.
