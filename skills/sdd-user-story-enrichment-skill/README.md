# SDD User Story Enrichment Skill

Skill de enriquecimiento de historias de usuario para un flujo de **Spec Driven Development (SDD)**.

Esta skill convierte una petición funcional vaga en artefactos claros para que el resto del flujo pueda continuar sin interpretar libremente los requisitos.

## Contenido del paquete

```text
sdd-user-story-enrichment-skill/
├── SKILL.md
├── README.md
├── skill.yaml
├── routing/
│   └── user-story-enrichment-routing.yaml
├── schemas/
│   └── user-story-enrichment.schema.json
├── templates/
│   ├── user-story.md
│   ├── acceptance-criteria.md
│   ├── use-cases.md
│   ├── business-rules.md
│   ├── open-questions.md
│   └── enrichment-report.md
└── examples/
    ├── feature-admin-analyst-panel-user-story.md
    └── feature-cancelled-parameter-user-story.md
```

## Rol dentro del flujo

Esta skill se ejecuta después de `context-analysis` y antes de `functional-spec`.

```text
request.md
  → context-analysis.md
  → user-story-enrichment
  → user-story.md
  → acceptance-criteria.md
  → functional-spec
```

## Objetivo

Transformar una petición como:

```text
Necesitamos un panel para admins y analistas con diferentes permisos.
```

En artefactos como:

```text
- Historia principal refinada
- Historias por rol
- Casos de uso
- Reglas de negocio
- Criterios de aceptación
- Estados funcionales
- Supuestos
- Preguntas abiertas
```

## Artefactos principales

```text
/specs/<feature-id>/user-story.md
/specs/<feature-id>/acceptance-criteria.md
/specs/<feature-id>/use-cases.md
/specs/<feature-id>/business-rules.md
/specs/<feature-id>/open-questions.md
/specs/<feature-id>/enrichment-report.md
```

## Estados de salida

- `READY_FOR_FUNCTIONAL_SPEC`: la historia puede pasar a especificación funcional.
- `NEEDS_CLARIFICATION`: faltan aclaraciones, pero se puede avanzar parcialmente con supuestos.
- `BLOCKED`: faltan decisiones funcionales críticas.

## Regla principal

```text
La implementación no debe tener que inventar requisitos.
```

## Versión

`1.0.0`
