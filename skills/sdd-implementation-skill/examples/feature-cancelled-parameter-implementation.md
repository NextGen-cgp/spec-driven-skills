# Example: Cancelled Parameter Implementation

## Decision

```text
IMPLEMENTATION_DONE
```

## Next Skill

```text
sdd-test
```

## Summary

The implementation added support for cancelling and reopening individual analysis parameters. Cancelled parameters are visually marked as `Cancelado`, their sample input section is collapsed, and they are excluded from the global analysis result calculation.

## Files Changed

| File | Layer | Change | Reason |
|---|---|---|---|
| `src/modules/analysis/entities/analysis-parameter.entity.ts` | backend | modified | Added cancellable status support. |
| `src/modules/analysis/analysis-result.service.ts` | backend | modified | Excluded cancelled parameters from aggregation. |
| `src/modules/analysis/routes.ts` | backend | modified | Added cancel/reopen operations. |
| `src/components/analysis/ParameterCard.tsx` | frontend | modified | Added cancel/reopen icon behavior. |
| `src/components/analysis/StatusPill.tsx` | frontend | modified | Added Cancelado state. |

## Requirements Covered

| Requirement | Status | Evidence |
|---|---:|---|
| Cancel parameter | implemented | Cancel action sets status and collapses sample box. |
| Reopen parameter | implemented | Reopen action restores pending state and expands input area. |
| Exclude from global result | implemented | Aggregation ignores cancelled parameters. |

## Deviations

| ID | Type | Description | Action |
|---|---|---|---|
| DEV-001 | ALLOWED_MINOR_DEVIATION | Reused existing status enum naming instead of adding a separate boolean flag. | Documented as implementation detail with no functional impact. |

## Handoff

Test state transitions, aggregation behavior, persistence after reload and permissions for cancel/reopen actions.
