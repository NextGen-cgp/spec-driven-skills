# SDD Context Analysis Skill

Skill de producción para analizar el contexto de un proyecto dentro de un flujo **Spec Driven Development**.

Esta skill se ejecuta después del orquestador y antes de enriquecer historias de usuario o generar especificaciones técnicas.

## Objetivo

Evitar que el sistema SDD avance sobre suposiciones. La skill analiza el repositorio, detecta stack, arquitectura, patrones, módulos afectados, tests existentes y riesgos técnicos.

## Entrada principal

```text
/specs/<feature-name>/request.md
```

Opcionalmente:

```text
/specs/<feature-name>/sdd-state.yaml
/specs/<feature-name>/user-story.md
/specs/<feature-name>/technical-spec.md
```

## Salida principal

```text
/specs/<feature-name>/context-analysis.md
```

## Uso en el flujo SDD

```text
Orquestador
  → Context Analysis
  → User Story Enrichment
  → Technical Specification
  → Spec Validation
  → Implementation
```

## Estado que puede devolver

```text
CONTEXT_ANALYSIS_READY
CONTEXT_ANALYSIS_PARTIAL
NEEDS_MORE_CONTEXT
BLOCKED_BY_MISSING_REPOSITORY_ACCESS
```

## Siguiente skill recomendada

La skill debe terminar siempre recomendando una de estas rutas:

```text
user-story-enrichment
technical-specification
api-contract-specification
migration-rollback-planning
security-permissions-review
blocked
```

## Filosofía

Esta skill no implementa. Solo entiende, clasifica y prepara contexto fiable para que el resto del flujo SDD trabaje con seguridad.
