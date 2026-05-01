# SDD Documentation & PR Skill

Skill final para un flujo **Spec Driven Development**.

## Propósito

Convierte una implementación aprobada en un paquete de entrega listo para revisión humana, Pull Request, merge o release.

Genera:

- Resumen de PR.
- Changelog.
- Release notes.
- Plan de actualización documental.
- Paquete de merge.
- Cierre formal SDD.
- Índice final de artefactos.

## Ubicación en el flujo

```text
sdd-final-review
  → sdd-documentation-pr
  → READY_FOR_PR
```

## Decisiones posibles

```text
DOCUMENTATION_READY_FOR_PR
DOCUMENTATION_READY_WITH_NOTES
DOCUMENTATION_CHANGES_REQUESTED
DOCUMENTATION_BLOCKED
```

## Archivos principales

```text
SKILL.md
skill.yaml
manifest.json
routing/documentation-pr-routing.yaml
schemas/documentation-pr.schema.json
templates/*.md
examples/*.md
```

## Regla clave

Esta skill no debe corregir código ni reabrir decisiones técnicas. Si falta evidencia, debe bloquear y enrutar al punto adecuado del flujo.
