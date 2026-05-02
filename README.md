# spec-driven-skills

Orchestrated skills for an advanced AI-assisted Spec Driven Development flow.

This package can install all SDD skills into the paths used by Claude and by OpenAI/Codex-compatible agents.

## Quick installation

From the root of the project where you want to use the skills:

```bash
npx spec-driven-skills
```

By default, it installs the full package into:

```text
./.claude/skills/
./.agents/skills/
```

## Available commands

### Default usage

Install into the current project for Claude and OpenAI/Codex:

```bash
npx spec-driven-skills
```

Equivalent to:

```bash
npx spec-driven-skills --scope project --provider all
```

### Choose scope

Install into the current project:

```bash
npx spec-driven-skills --scope project
```

Install globally for the user:

```bash
npx spec-driven-skills --scope global
```

### Choose provider

Install only for Claude:

```bash
npx spec-driven-skills --provider claude
```

Install only for OpenAI/Codex:

```bash
npx spec-driven-skills --provider openai
```

Install for both providers:

```bash
npx spec-driven-skills --provider all
```

### Combine flags

Flags can be combined in the same command.

Install globally only for Claude:

```bash
npx spec-driven-skills --scope global --provider claude
```

Install globally only for OpenAI/Codex:

```bash
npx spec-driven-skills --scope global --provider openai
```

Install into the current project only for Claude:

```bash
npx spec-driven-skills --scope project --provider claude
```

The `=` syntax is also supported for any flag:

```bash
npx spec-driven-skills --scope=global --provider=claude
```

### Choose another project

Install into a specific project:

```bash
npx spec-driven-skills --cwd /path/to/project
```

Install into a specific project only for OpenAI/Codex:

```bash
npx spec-driven-skills --cwd /path/to/project --provider openai
```

### Simulate installation

See what the installer would do without writing files:

```bash
npx spec-driven-skills --dry-run
```

Simulate a global installation only for Claude:

```bash
npx spec-driven-skills --scope global --provider claude --dry-run
```

## Installation paths

| Scope | Claude | OpenAI/Codex |
|---|---|---|
| Project | `./.claude/skills/` | `./.agents/skills/` |
| Global | `~/.claude/skills/` | `~/.agents/skills/` |

The installer copies all folders from `skills/` while preserving their names.

## Enable the SDD flow with AGENTS.md

The repository includes an `AGENTS.md` file with additional instructions to enforce use of the SDD flow.

That file tells the agent that, before responding to product, code, test, documentation, security, permissions, API or database requests, it must:

1. Review the installed local skills.
2. Start with `sdd-orchestrator-skill`.
3. Follow the SDD gates before implementing.
4. Use the included `templates/`, `schemas/`, `routing/` and `examples/`.

To enable these rules in a project, copy or keep `AGENTS.md` at the root of the repository where you will work with the agent:

```text
./AGENTS.md
```

In OpenAI/Codex installations, the file references skills in:

```text
./.agents/skills/
```

In Claude installations, the skills are copied into:

```text
./.claude/skills/
```

If you want Claude to follow exactly the same rules, you can adapt those references in your project instruction file to point to `.claude/skills/`.

## Conflicts and backups

If an SDD skill with the same name already exists in the destination, the installer:

1. Creates a timestamped backup.
2. Replaces only that skill.
3. Preserves unrelated files inside `.claude` or `.agents`.

Backups are stored in:

```text
.claude/sdd-skills-backups/<timestamp>/
.agents/sdd-skills-backups/<timestamp>/
```

An installation manifest is also written:

```text
.claude/sdd-skills-manifest.json
.agents/sdd-skills-manifest.json
```
