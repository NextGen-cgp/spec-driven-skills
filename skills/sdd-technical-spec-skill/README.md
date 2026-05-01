# SDD Technical Spec Skill

Skill de **Especificación Técnica** para un flujo de **Spec Driven Development**.

Esta skill transforma una especificación funcional ya refinada en un diseño técnico implementable, sin ejecutar cambios de código todavía. Su salida debe permitir que la skill de implementación trabaje con límites claros, artefactos trazables y decisiones suficientemente documentadas.

## Posición en el flujo

```text
sdd-orchestrator
  → sdd-context-analysis
  → sdd-user-story-enrichment
  → sdd-functional-spec
  → sdd-technical-spec
  → sdd-api-contract        # si aplica
  → sdd-migration-rollback  # si aplica
  → sdd-security-review     # si aplica
  → sdd-spec-validation
  → sdd-implementation
```

## Qué produce

Artefactos principales:

```text
/specs/<feature-id>/technical-spec.md
/specs/<feature-id>/implementation-plan.md
/specs/<feature-id>/technical-spec-report.md
```

Artefactos condicionales:

```text
/specs/<feature-id>/architecture-impact.md
/specs/<feature-id>/backend-change-plan.md
/specs/<feature-id>/frontend-change-plan.md
/specs/<feature-id>/data-model-impact.md
/specs/<feature-id>/api-impact.md
/specs/<feature-id>/validation-rules.md
/specs/<feature-id>/technical-risk-register.md
```

## Cuándo usarla

Úsala cuando ya exista una historia enriquecida y una especificación funcional suficientemente clara, especialmente si el cambio afecta a:

- Backend.
- Frontend.
- Modelos o entidades.
- API.
- Estados de negocio.
- Roles y permisos.
- Base de datos.
- Validaciones.
- Integraciones.
- Arquitectura o patrones existentes.

## Regla clave

Esta skill diseña técnicamente, pero **no implementa**. No debe modificar código, ejecutar comandos, crear migraciones finales ni corregir tests. Su función es preparar una entrega clara para las skills posteriores.
