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

### Uso por defecto

Instala en el proyecto actual para Claude y OpenAI/Codex:

```bash
npx spec-driven-skills
```

Equivale a:

```bash
npx spec-driven-skills --scope project --provider all
```

### Elegir alcance

Instalar en el proyecto actual:

```bash
npx spec-driven-skills --scope project
```

Instalar globalmente para el usuario:

```bash
npx spec-driven-skills --scope global
```

### Elegir proveedor

Instalar solo para Claude:

```bash
npx spec-driven-skills --provider claude
```

Instalar solo para OpenAI/Codex:

```bash
npx spec-driven-skills --provider openai
```

Instalar para ambos proveedores:

```bash
npx spec-driven-skills --provider all
```

### Combinar flags

Los flags se pueden combinar en el mismo comando.

Instalar globalmente solo para Claude:

```bash
npx spec-driven-skills --scope global --provider claude
```

Instalar globalmente solo para OpenAI/Codex:

```bash
npx spec-driven-skills --scope global --provider openai
```

Instalar en el proyecto actual solo para Claude:

```bash
npx spec-driven-skills --scope project --provider claude
```

Tambien se admite la sintaxis con `=` para cualquier flag:

```bash
npx spec-driven-skills --scope=global --provider=claude
```

### Elegir otro proyecto

Instalar en un proyecto concreto:

```bash
npx spec-driven-skills --cwd /path/to/project
```

Instalar en un proyecto concreto solo para OpenAI/Codex:

```bash
npx spec-driven-skills --cwd /path/to/project --provider openai
```

### Simular la instalacion

Ver que haria el instalador sin escribir archivos:

```bash
npx spec-driven-skills --dry-run
```

Simular una instalacion global solo para Claude:

```bash
npx spec-driven-skills --scope global --provider claude --dry-run
```

## Rutas de instalacion

| Scope | Claude | OpenAI/Codex |
|---|---|---|
| Proyecto | `./.claude/skills/` | `./.agents/skills/` |
| Global | `~/.claude/skills/` | `~/.agents/skills/` |

El instalador copia todas las carpetas de `skills/` manteniendo sus nombres.

## Activar el flujo SDD con AGENTS.md

El repositorio incluye un archivo `AGENTS.md` con instrucciones adicionales para
forzar el uso del flujo SDD.

Ese archivo indica al agente que, antes de responder a peticiones de producto,
codigo, tests, documentacion, seguridad, permisos, API o base de datos, debe:

1. Revisar las skills locales instaladas.
2. Empezar por `sdd-orchestrator-skill`.
3. Seguir los gates SDD antes de implementar.
4. Usar los `templates/`, `schemas/`, `routing/` y `examples/` incluidos.

Para activar estas reglas en un proyecto, copia o conserva `AGENTS.md` en la
raiz del repositorio donde vayas a trabajar con el agente:

```text
./AGENTS.md
```

En instalaciones para OpenAI/Codex, el archivo referencia las skills en:

```text
./.agents/skills/
```

En instalaciones para Claude, las skills se copian en:

```text
./.claude/skills/
```

Si quieres que Claude siga exactamente las mismas reglas, puedes adaptar esas
referencias en tu archivo de instrucciones del proyecto para apuntar a
`.claude/skills/`.

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
