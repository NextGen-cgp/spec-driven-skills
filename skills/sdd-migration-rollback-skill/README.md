# SDD Migration & Rollback Skill

Skill de producción para diseñar planes de migración, rollback, backfill y verificación de datos dentro de un flujo **Spec Driven Development (SDD)**.

## Posición en el flujo

```text
sdd-technical-spec
  → sdd-api-contract, si aplica
  → sdd-migration-rollback
  → sdd-security-permissions-review, si aplica
  → sdd-spec-validation
  → sdd-implementation
```

## Cuándo usarla

Úsala cuando una feature, bugfix o refactor afecte a:

- Base de datos.
- Modelos persistidos.
- Entidades ORM.
- Estados guardados.
- Índices o constraints.
- Seeds o catálogos.
- Backfills.
- Datos históricos.
- Compatibilidad entre versiones.

## Entradas principales

```text
request.md
context-analysis.md
functional-spec.md
technical-spec.md
```

Entradas recomendadas:

```text
data-model-impact.md
api-contract.md
data-contract.md
state-model.md
validation-rules.md
backend-change-plan.md
compatibility-notes.md
operation-permissions-contract.md
```

## Salidas principales

```text
migration-plan.md
rollback-plan.md
data-impact-assessment.md
migration-report.md
```

Salidas condicionales:

```text
data-backfill-plan.md
compatibility-plan.md
migration-verification-checklist.md
seed-data-plan.md
zero-downtime-plan.md
```

## Principios

- No ejecuta migraciones.
- No escribe código final.
- No permite cambios destructivos sin advertencia explícita.
- Prioriza migraciones reversibles y compatibles.
- Exige rollback realista.
- Exige verificación pre/post.
- Mantiene trazabilidad con la spec funcional y técnica.

## Uso esperado por el orquestador

El orquestador debe invocar esta skill si detecta alguna de estas señales:

```text
- data-model-impact.md indica cambios persistentes.
- data-contract.md introduce nuevos campos o estados.
- technical-spec.md modifica entidades, tablas o modelos.
- api-contract.md requiere guardar nuevos datos.
- state-model.md añade o cambia estados persistidos.
```

Si la skill concluye que no hay impacto persistente, debe devolver:

```text
status: NOT_APPLICABLE
next_skill: sdd-spec-validation
```

## Estructura del paquete

```text
sdd-migration-rollback-skill/
├── SKILL.md
├── README.md
├── skill.yaml
├── routing/
│   └── migration-rollback-routing.yaml
├── schemas/
│   └── migration-rollback.schema.json
├── templates/
│   ├── migration-plan.md
│   ├── rollback-plan.md
│   ├── data-impact-assessment.md
│   ├── data-backfill-plan.md
│   ├── compatibility-plan.md
│   ├── migration-verification-checklist.md
│   ├── seed-data-plan.md
│   ├── zero-downtime-plan.md
│   └── migration-report.md
└── examples/
    ├── feature-cancelled-parameter-migration-rollback.md
    ├── feature-admin-analyst-panel-migration-rollback.md
    └── no-persistence-impact-report.md
```
