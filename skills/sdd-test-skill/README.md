# sdd-test-skill

Skill de Test para un flujo de **Spec Driven Development (SDD)**.

Esta skill valida una implementación ya realizada contra los artefactos aprobados del flujo: criterios de aceptación, especificación funcional, especificación técnica, contratos API/datos, planes de migración y reglas de permisos.

## Posición en el flujo

```text
sdd-implementation
  → sdd-test
  → sdd-security-permissions-review # si aplica
  → sdd-review
  → sdd-documentation-pr
```

## Responsabilidad principal

```text
Implementación = construye el cambio.
Test = demuestra que el cambio funciona.
Review = evalúa si el cambio está bien hecho.
```

## Decisiones posibles

```text
TEST_PASSED
TEST_FAILED
TEST_BLOCKED
TEST_PARTIAL
```

## Artefactos principales generados

```text
test-plan-final.md
test-report.md
acceptance-validation-report.md
regression-report.md
defect-report.md
test-handoff-report.md
```

## Uso recomendado

Invocar esta skill solo cuando `sdd-implementation` haya generado un handoff válido mediante `implementation-report.md`, `code-change-log.md`, `patch-summary.md` y `deviation-log.md`.
