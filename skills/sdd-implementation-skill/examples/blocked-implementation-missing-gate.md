# Example: Blocked Implementation Due to Missing Gate

## Decision

```text
IMPLEMENTATION_BLOCKED
```

##Next Skill

```text
sdd-spec-validation
```

##Summary

Implementation cannot start because there is no approved `READY_FOR_IMPLEMENTATION` decision. The technical spec exists, but the validation gate has not been executed or the gate artifact is missing.

## Blocking Reason

```text
Missing implementation-gate-decision.md
```

##RequiredAction

Run `sdd-spec-validation` and produce a formal gate decision before implementation.
