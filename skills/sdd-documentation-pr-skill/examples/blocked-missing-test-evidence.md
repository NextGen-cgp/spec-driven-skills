# Example: Blocked Documentation - Missing Test Evidence

## Decision

```text
DOCUMENTATION_BLOCKED
```

##Summary

The final review references successful validation, but the required test artifacts are missing. The documentation package cannot claim readiness without evidence.

## Missing Artifacts

| Artifact | Required | Route To |
|---|---:|---|
| test-report.md | yes | sdd-test |
| acceptance-validation-report.md | yes | sdd-test |
| regression-report.md | yes | sdd-test |

##RequiredNextRoute

```text
sdd-test
```

## State

```text
BLOCKED_PENDING_EVIDENCE
```
