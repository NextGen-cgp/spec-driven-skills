# SDD Final Review Skill

Skill de revisión final para un flujo **Spec Driven Development**.

## Propósito

Actúa como último gate antes de documentación, PR, merge o entrega. Revisa:

- Cumplimiento de la spec funcional y técnica.
- Evidencia de tests.
- Calidad de código.
- Seguridad y permisos si aplica.
- Migraciones y datos si aplica.
- Riesgos abiertos.
- Preparación para documentación/PR.

## Ubicación en el flujo

```text
sdd-implementation
  → sdd-test
  → sdd-security-permissions-review   # si aplica
  → sdd-final-review
  → sdd-documentation-pr
```

## Decisiones posibles

```text
FINAL_REVIEW_APPROVED
FINAL_REVIEW_APPROVED_WITH_NOTES
FINAL_REVIEW_CHANGES_REQUESTED
FINAL_REVIEW_BLOCKED
```

## Archivos principales

```text
SKILL.md
skill.yaml
manifest.json
routing/final-review-routing.yaml
schemas/final-review.schema.json
templates/final-review-report.md
templates/merge-readiness-decision.md
```
