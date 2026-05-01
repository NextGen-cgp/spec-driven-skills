# SDD Functional Specification Skill

Skill de producción para el flujo **Spec Driven Development** encargada de convertir historias de usuario refinadas en especificaciones funcionales completas, trazables y listas para diseño técnico.

## Cuándo usarla

Úsala después de:

- `sdd-orchestrator`
- `sdd-context-analysis`
- `sdd-user-story-enrichment`

Y antes de:

- `sdd-technical-spec`
- `sdd-api-contract`
- `sdd-migration-rollback`
- `sdd-spec-validation`
- `sdd-implementation`

## Objetivo

Evitar que la implementación tenga que inventar requisitos funcionales. Esta skill deja claro:

- Qué debe hacer el sistema.
- Quién lo puede hacer.
- Dónde ocurre el flujo.
- Qué reglas de negocio aplican.
- Qué estados existen.
- Qué criterios de aceptación verifican el resultado.
- Qué skills posteriores deben intervenir.

## Artefactos principales

```text
functional-spec.md
functional-traceability-matrix.md
```

Artefactos opcionales según el cambio:

```text
feature-scope.md
ui-behavior-spec.md
permissions-matrix.md
state-model.md
functional-spec-report.md
```

## Estado de salida habitual

```text
READY_FOR_TECHNICAL_SPEC
```

Otros estados posibles:

```text
NEEDS_REFINEMENT
NEEDS_SECURITY_REVIEW_BEFORE_TECH_SPEC
BLOCKED
```
