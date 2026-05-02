# Example: Canceled Parameter — Migration & Rollback

##Context

Feature: allow you to cancel an entire parameter within an analysis so that it does not compute in the global result, and allow you to reopen it later.

## Persistence Impact

```yaml
has_impact: true
change_types:
  - schema_additive
  - state_change
affected_objects:
  - name: analysis_parameter_results
    object_type: table
    impact: Add canceled state or equivalent flags to exclude the parameter from the global calculation.
  - name: parameter_status
    object_type: state
    impact: Add transition pending -> canceled and canceled -> pending.
```

## Data Impact Assessment

| Area | Impact | Risk |
|---|---|---|
| Existing records | They should not be modified initially | Low |
| New state | Added `cancelled` | Medium |
| Global calculation | You must exclude canceled records | Medium |
| Compatibility | Old code might not interpret the new state | Medium |

## Recommended Migration Plan

```text
1. Add compatible column to represent cancellation if a sufficient status field does not exist.
2. Keep default compatible with current behavior: pending/not canceled parameters.
3. Do not modify historical records unless the spec requires it.
4. Update backend to exclude canceled parameters from global calculation.
5. Update frontend to show Canceled status and reopen action.
6. Verify that old analyzes continue to calculate the same.
```

## Possible Schema Strategy

Recommended option if status field already exists:

```text
- Extend allowed state values to support `cancelled`.
```

Alternative option if no persisted state exists:

```text
- Add `status` column with default `pending`.
- Expected values: pending, completed, canceled.
```

## Rollback Plan

```text
Code rollback:
  Go back to the previous version of the backend/frontend.

Rollback scheme:
  If the new column is additive and nullable/default compatible, it can be kept temporarily without breaking the above code.

Data rollback:
  If there are parameters marked as canceled, before returning to old code you must decide whether to transform them to pending or keep the data for forward-fix.

Preferred strategy:
  Forward-fix or keep column compatible, avoiding immediate DROP.
```

## Verification Checklist

- [ ] Create analysis with normal parameters.
- [ ] Cancel a parameter.
- [ ] Confirm that it does not count in the overall result.
- [ ] Reopen canceled parameter.
- [ ] Confirm that it returns to pending status.
- [ ] Confirm that old analyzes do not change their results.
- [ ] Confirm that users without permission cannot cancel if applicable.

## Routing Recommendation

```yaml
skill: sdd-migration-rollback
status: MIGRATION_PLAN_READY
risk_level: medium
security_review_required: true
next_skill: sdd-security-permissions-review
reason: The migration introduces a persisted state that modifies calculation rules and can be associated with operation permissions.
```
