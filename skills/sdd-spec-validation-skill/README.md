# SDD Spec Validation Skill

Skill de validación formal de especificaciones para un flujo **Spec Driven Development**.

## Objetivo

Actuar como gate previo a implementación, verificando que los artefactos generados por las skills anteriores son completos, coherentes, trazables y suficientemente seguros para permitir ejecución.

## Lugar en el flujo

```text
sdd-functional-spec
  → sdd-technical-spec
  → sdd-api-contract, si aplica
  → sdd-migration-rollback, si aplica
  → sdd-security-permissions-review, si aplica
  → sdd-spec-validation
  → sdd-implementation
```

## Decisiones posibles

- `READY_FOR_IMPLEMENTATION`: la implementación puede comenzar.
- `NEEDS_REFINEMENT`: se debe volver a una skill anterior.
- `BLOCKED`: hay bloqueo crítico y debe intervenir el orquestador o una decisión humana.

## Artefactos principales

```text
spec-validation-report.md
spec-readiness-checklist.md
traceability-matrix.md
implementation-gate-decision.md
spec-remediation-plan.md
```

## Uso recomendado

Usar esta skill siempre antes de ejecutar `sdd-implementation`. El orquestador debe invocarla como gate obligatorio cuando exista cualquier cambio funcional, técnico, de datos, permisos o API.
