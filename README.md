# spec-driven-skills

Skills orquestadas para un flujo avanzado de Spec Driven Development con IA.

Este paquete puede instalar todas las skills SDD en las rutas usadas por Claude
y por agentes compatibles con OpenAI/Codex.

## Instalacion rapida

Desde la raiz del proyecto donde quieras usar las skills:

```bash
npx spec-driven-skills
```

Por defecto instala el paquete completo en:

```text
./.claude/skills/
./.agents/skills/
```

## Comandos disponibles

Instalar en el proyecto actual para Claude y OpenAI:

```bash
npx spec-driven-skills --scope project
```

Instalar globalmente para el usuario:

```bash
npx spec-driven-skills --scope global
```

Instalar solo para Claude:

```bash
npx spec-driven-skills --provider claude
```

Instalar solo para OpenAI/Codex:

```bash
npx spec-driven-skills --provider openai
```

Los flags se pueden combinar en el mismo comando. Por ejemplo, instalar
globalmente solo para Claude:

```bash
npx spec-driven-skills --scope global --provider claude
```

Instalar globalmente solo para OpenAI/Codex:

```bash
npx spec-driven-skills --scope global --provider openai
```

Tambien se admite la sintaxis con `=`:

```bash
npx spec-driven-skills --scope=global --provider=claude
```

Instalar en un proyecto concreto:

```bash
npx spec-driven-skills --cwd /path/to/project
```

Ver que haria el instalador sin escribir archivos:

```bash
npx spec-driven-skills --dry-run
```

## Rutas de instalacion

| Scope | Claude | OpenAI/Codex |
|---|---|---|
| Proyecto | `./.claude/skills/` | `./.agents/skills/` |
| Global | `~/.claude/skills/` | `~/.agents/skills/` |

El instalador copia todas las carpetas de `skills/` manteniendo sus nombres.

## Conflictos y backups

Si ya existe una skill SDD con el mismo nombre en el destino, el instalador:

1. Crea un backup con timestamp.
2. Reemplaza solo esa skill.
3. Conserva archivos no relacionados dentro de `.claude` o `.agents`.

Los backups se guardan en:

```text
.claude/sdd-skills-backups/<timestamp>/
.agents/sdd-skills-backups/<timestamp>/
```

Tambien se escribe un manifest de instalacion:

```text
.claude/sdd-skills-manifest.json
.agents/sdd-skills-manifest.json
```


## Desarrollo

Ejecutar tests:

```bash
npm test
```

Smoke test del instalador:

```bash
npm run smoke
```
