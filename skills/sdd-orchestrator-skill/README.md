# SDD Orchestrator Skill

Orchestration skill for a **Spec Driven Development (SDD)** flow.

This skill acts as the main router of the process. Classifies the request, detects the current state, decides the next skill, validates mandatory gates and prevents the flow from advancing to implementation without sufficient specification.

## Package Contents

```text
sdd-orchestrator-skill/
├── SKILL.md
├── README.md
├── routing/
│ └── sdd-routing.yaml
├── schemas/
│ └── sdd-state.schema.json
├── templates/
│ ├── sdd-state.yaml
│ ├── routing-decision.md
│ └── orchestration-report.md
└── examples/
    ├── feature-admin-analyst-panel.md
    └── bugfix-cancelled-parameter.md
```

## Recommended use

Place this folder inside the skills directory of your agent system, for example:

```text
/skills/sdd-orchestrator/
```

The main file is:

```text
SKILL.md
```

## Role within the flow

The orchestrator does not replace the other skills. Your mission is to decide which skill should act at all times.

Base flow:

```text
Initial request
  → Orchestrator
  → Context analysis
  → History enrichment
  → Functional Spec
  → Technical spec
  → Spec validation
  → Implementation
  → Test
  → Security
  → Review
  → Documentation / PR
```

## Fundamental decision

The main rule is:

```text
Nothing is implemented without a sufficiently validated spec.
```

## Main states

- `INTAKE`
- `CONTEXT_ANALYSIS_REQUIRED`
- `USER_STORY_REFINEMENT_REQUIRED`
- `TECHNICAL_SPEC_REQUIRED`
- `SPEC_VALIDATION_REQUIRED`
- `READY_FOR_IMPLEMENTATION`
- `IMPLEMENTATION_DONE`
- `TESTING_DONE`
- `SECURITY_REVIEW_DONE`
- `FINAL_REVIEW_DONE`
- `READY_FOR_PR`
- `DONE`
- `BLOCKED`

## Common artifacts

By feature:

```text
/specs/<feature-name>/request.md
/specs/<feature-name>/context-analysis.md
/specs/<feature-name>/user-story.md
/specs/<feature-name>/acceptance-criteria.md
/specs/<feature-name>/functional-spec.md
/specs/<feature-name>/technical-spec.md
/specs/<feature-name>/test-plan.md
/specs/<feature-name>/spec-validation-report.md
/specs/<feature-name>/implementation-report.md
/specs/<feature-name>/test-report.md
/specs/<feature-name>/security-review.md
/specs/<feature-name>/review-report.md
/specs/<feature-name>/pr-summary.md
```

## Customization

You can adjust:

- `routing/sdd-routing.yaml` to change flows.
- `schemas/sdd-state.schema.json` to validate state.
- `templates/*.md` to adapt outputs.
- `SKILL.md` to change the main behavior of the agent.

## Version

`1.0.0`
