# Example: Blocked Documentation - Missing Final Review

## Decision

```text
DOCUMENTATION_BLOCKED
```

##Summary

The documentation and PR package cannot be generated because no approved final review decision is available. The flow must return to `sdd-final-review` before creating PR-ready artifacts.

## Missing Artifacts

| Artifact | Required | Reason |
|---|---:|---|
| final-review-report.md | yes | Required to confirm quality approval. |
| merge-readiness-decision.md | yes | Required to confirm whether the change can move to PR. |

##RequiredNextRoute

```text
sdd-final-review
```

## State

```text
BLOCKED_PENDING_REVIEW
```
