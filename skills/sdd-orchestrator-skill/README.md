# SDD Orchestrator Skill

Skill de orquestación para un flujo de **Spec Driven Development (SDD)**.

Esta skill actúa como router principal del proceso. Clasifica la petición, detecta el estado actual, decide la siguiente skill, valida gates obligatorios y evita que el flujo avance a implementación sin especificación suficiente.

## Contenido del paquete

```text
sdd-orchestrator-skill/
├── SKILL.md
├── README.md
├── routing/
│   └── sdd-routing.yaml
├── schemas/
│   └── sdd-state.schema.json
├── templates/
│   ├── sdd-state.yaml
│   ├── routing-decision.md
│   └── orchestration-report.md
└── examples/
    ├── feature-admin-analyst-panel.md
    └── bugfix-cancelled-parameter.md
```

## Uso recomendado

Coloca esta carpeta dentro del directorio de skills de tu sistema de agentes, por ejemplo:

```text
/skills/sdd-orchestrator/
```

El archivo principal es:

```text
SKILL.md
```

## Rol dentro del flujo

El orquestador no sustituye a las demás skills. Su misión es decidir qué skill debe actuar en cada momento.

Flujo base:

```text
Petición inicial
  → Orquestador
  → Análisis de contexto
  → Enriquecimiento de historia
  → Spec funcional
  → Spec técnica
  → Validación de spec
  → Implementación
  → Test
  → Seguridad
  → Review
  → Documentación / PR
```

## Decisión fundamental

La regla principal es:

```text
No se implementa nada sin una spec suficientemente validada.
```

## Estados principales

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

## Artefactos habituales

Por feature:

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

## Personalización

Puedes ajustar:

- `routing/sdd-routing.yaml` para cambiar flujos.
- `schemas/sdd-state.schema.json` para validar estado.
- `templates/*.md` para adaptar salidas.
- `SKILL.md` para cambiar el comportamiento principal del agente.

## Versión

`1.0.0`
