# Compatibility Plan

## Metadata

-Feature ID:
- Skill: `sdd-migration-rollback`
- Required: yes/no
- Status:

## 1. Compatibility Need

Explain why compatibility is required between versions, consumers or data forms.

## 2. Versions Involved

| Component | Old behavior | New behavior | Compatibility requirement |
|---|---|---|---|
| Frontend |  |  |  |
| Backend |  |  |  |
| Database |  |  |  |
| Jobs/workers |  |  |  |
| API consumers |  |  |  |

## 3. Safe Deployment Sequence

```text
1. Add compatible schema.
2. Deploy code that can read both old and new data.
3. Backfill if needed.
4. Switch writes to new shape/state.
5. Verify.
6. Remove legacy behavior in later change, if applicable.
```

## 4. Feature Flags or Transitional Logic

- Feature flags required:
- Dual-read required:
- Dual-write required:
- Fallback behavior:

## 5. Removal of Transitional Support

- Removal condition:
- Follow-up task:
-Owner:
