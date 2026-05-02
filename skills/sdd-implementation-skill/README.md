# SDD Implementation Skill

Deployment executor skill for a **Spec Driven Development (SDD)** flow.

## Objective

Execute code, configuration, or infrastructure changes **exclusively** from a validated specification. This skill does not redefine requirements, does not invent behavior, and does not extend scope without recording a deviation and returning the flow to the orchestrator.

## Place in the flow

```text
sdd-spec-validation
  → sdd-implementation
  → sdd-test
  → sdd-security-permissions-review, post-implementation if applicable
  → sdd-review
  → sdd-documentation-pr
```

## Gate required

It can only be executed when there is a formal decision:

```text
READY_FOR_IMPLEMENTATION
```

issued by `sdd-spec-validation` in `implementation-gate-decision.md` or `gate-decision.yaml`.

##Main artifacts

```text
implementation-plan.md
code-change-log.md
implementation-report.md
deviation-log.md
patch-summary.md
dependency-change-record.md
manual-verification-notes.md
```

## Essential rule

The implementation must follow the spec. If the spec does not allow safe implementation, the skill must stop and return the flow to `sdd-orchestrator` or the corresponding spec skill.
