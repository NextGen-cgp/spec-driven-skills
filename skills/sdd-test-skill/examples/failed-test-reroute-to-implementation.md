# Example: Failed Test - Return to Implementation

## Decision

```text
Decision: TEST_FAILED
Next skill: sdd-implementation
Reason: Criterion AC-004 fails: the canceled parameter continues to compute in the global result.
```

## Defect

### DEF-001

- Severity: high
- Area: global calculation logic
- Related criterion: AC-004
- Expected result: parameters with status `CANCELLED` should not be computed.
- Result obtained: the global calculation continues to include the previous value of the canceled parameter.

## Reproduction steps

1. Create analysis with three parameters.
2. Record samples for two parameters.
3. Cancel the third parameter.
4. Complete analysis.
5. Review global result.

## Route

```text
sdd-implementation
```

The spec is clear; The fault is in the implementation of the aggregation logic.
