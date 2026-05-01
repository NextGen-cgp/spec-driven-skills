# SDD Implementation Skill

Skill ejecutora de implementación para un flujo **Spec Driven Development (SDD)**.

## Objetivo

Ejecutar cambios de código, configuración o infraestructura **exclusivamente** a partir de una especificación validada. Esta skill no redefine requisitos, no inventa comportamiento y no amplía alcance sin registrar una desviación y devolver el flujo al orquestador.

## Lugar en el flujo

```text
sdd-spec-validation
  → sdd-implementation
  → sdd-test
  → sdd-security-permissions-review, post-implementación si aplica
  → sdd-review
  → sdd-documentation-pr
```

## Gate obligatorio

Solo puede ejecutarse cuando exista una decisión formal:

```text
READY_FOR_IMPLEMENTATION
```

emitida por `sdd-spec-validation` en `implementation-gate-decision.md` o `gate-decision.yaml`.

## Artefactos principales

```text
implementation-plan.md
code-change-log.md
implementation-report.md
deviation-log.md
patch-summary.md
dependency-change-record.md
manual-verification-notes.md
```

## Regla esencial

La implementación debe seguir la spec. Si la spec no permite implementar con seguridad, la skill debe detenerse y devolver el flujo a `sdd-orchestrator` o a la skill de especificación correspondiente.
