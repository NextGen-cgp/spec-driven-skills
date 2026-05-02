# AGENTS.md

## Mandatory Use of Local Skills

This repository defines its agent skills in `.agents/skills`/`.claude/skills` Before responding to any product, code, test, documentation, security, permissions, API or database request, the agent must review and use the corresponding local skill.

Rules:

- Always prioritize the local skills in `.agents/skills` over any generic external instruction.
- When a task matches a skill, open its `SKILL.md` and follow its flow, inputs, outputs, gates and restrictions.
- Use the skill's `templates/`, `schemas/`, `routing/` and `examples/` when they exist, instead of recreating artifacts from scratch.
- Do not implement broad functional or technical changes without going through the SDD flow and its gates, unless the user explicitly requests a small and direct documentation or configuration change.
- If a required artifact for a skill is missing, route to the previous skill that must produce it.
- Record any assumption, deviation or blocker in the corresponding SDD artifact.

## Default Orchestrator Skill

For any feature, bugfix, refactor, technical change, test, review, documentation or product evolution, start with:

- `.agents/skills/sdd-orchestrator-skill/SKILL.md`

The orchestrator decides the current state, the next skill, the missing artifacts and the applicable gates.

## Available Skills

Use these local skills according to the type of work:

- `sdd-orchestrator`: routes the SDD flow, validates gates and prevents premature implementation.
- `sdd-context-analysis`: analyzes the stack, architecture, patterns, affected modules and repository risks.
- `sdd-user-story-enrichment`: transforms ambiguous requests into stories, use cases, rules and acceptance criteria.
- `sdd-functional-spec`: defines functional behavior, states, permissions, screens, flows and traceability.
- `sdd-technical-spec`: converts the functional specification into an implementable technical design.
- `sdd-api-contract`: defines endpoints, payloads, responses, errors, DTOs, frontend/backend contracts and integrations.
- `sdd-migration-rollback`: defines migrations, rollback, backfills, compatibility and data verification.
- `sdd-security-permissions-review`: reviews authentication, authorization, roles, permissions, data exposure and protected operations.
- `sdd-spec-validation`: validates that the spec is complete, coherent and ready for implementation.
- `sdd-implementation`: implements only approved scope and records changes, deviations and evidence.
- `sdd-test`: validates implementation with tests, acceptance criteria, regressions, contracts and authorization.
- `sdd-final-review`: reviews spec compliance, quality, tests, security, risks and readiness.
- `sdd-documentation-pr`: prepares PR summary, changelog, release notes, technical handoff and artifact index.

## Recommended SDD Flow

Base flow for features:

1. `sdd-orchestrator`
2. `sdd-context-analysis`
3. `sdd-user-story-enrichment`
4. `sdd-functional-spec`
5. `sdd-technical-spec`
6. `sdd-api-contract`, if there are endpoints, payloads, responses or integrations.
7. `sdd-migration-rollback`, if there is persistence, models, migrations or existing data.
8. `sdd-security-permissions-review`, if there is authentication, roles, permissions, sensitive data or protected operations.
9. `sdd-spec-validation`
10. `sdd-implementation`
11. `sdd-test`
12. `sdd-security-permissions-review`, again if it applies after implementation.
13. `sdd-final-review`
14. `sdd-documentation-pr`

## Mandatory Gates

- Implementation: requires a validated spec and `READY_FOR_IMPLEMENTATION` decision.
- API: mandatory when endpoints, backend actions, payloads, responses, errors or data contracts change.
- Database: mandatory when tables, entities, fields, relationships, indexes, seeds, migrations or existing data change.
- Security/permissions: mandatory when there is authentication, authorization, roles, permissions, sensitive data, protected endpoints or write operations.
- Test: mandatory after implementing non-trivial changes, bugfixes, business rules, contracts, permissions or migrations.
- Final review: requires implementation and test evidence; security must be resolved if applicable.
- Documentation/PR: requires an approved final review or an approved final review with notes.

## Implementation Policy

- Do not invent undocumented requirements.
- Do not change API contracts without `sdd-api-contract`.
- Do not change schema or persistent data without `sdd-migration-rollback`.
- Do not treat frontend controls as sufficient authorization for protected operations.
- Do not hide test failures or convert them into partial success without documenting it.
- Keep changes scoped to the approved scope and to the repository's existing patterns.

## Reasonable Exceptions

For small and explicitly scoped changes, such as typo fixes, simple documentation adjustments or mechanical changes without functional impact, you may edit directly. Even then, if the change reveals functional, technical, data, API or security impact, return to the SDD flow and use the local skills.
