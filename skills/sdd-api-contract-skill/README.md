# SDD API Contract Skill

Skill de **Contratos API / Datos** para un flujo de **Spec Driven Development**.

Esta skill se ejecuta después de la especificación técnica cuando un cambio afecta a endpoints, acciones de backend, payloads, respuestas, errores, modelos de datos intercambiados, permisos por operación o integraciones.

## Posición en el flujo

```text
sdd-orchestrator
  → sdd-context-analysis
  → sdd-user-story-enrichment
  → sdd-functional-spec
  → sdd-technical-spec
  → sdd-api-contract
  → sdd-migration-rollback      # si aplica
  → sdd-security-review          # si aplica
  → sdd-spec-validation
  → sdd-implementation
```

## Qué produce

Artefactos principales:

```text
/specs/<feature-id>/api-contract.md
/specs/<feature-id>/data-contract.md
/specs/<feature-id>/error-contract.md
/specs/<feature-id>/api-contract-report.md
```

Artefactos condicionales:

```text
/specs/<feature-id>/endpoint-spec.md
/specs/<feature-id>/frontend-backend-contract.md
/specs/<feature-id>/operation-permissions-contract.md
/specs/<feature-id>/contract-test-plan.md
/specs/<feature-id>/compatibility-notes.md
/specs/<feature-id>/openapi-draft.yaml
```

## Cuándo usarla

Úsala si el cambio afecta a:

- Endpoints HTTP.
- Acciones de backend.
- Payloads de entrada.
- Respuestas de API.
- Códigos de error.
- Estados expuestos al frontend.
- Permisos por operación.
- Modelos de datos intercambiados.
- Integraciones entre servicios.

## Cuándo no usarla

No aplica si el cambio es puramente visual, documental o interno y no altera contratos de datos o acciones entre capas.

## Regla clave

Esta skill **no implementa**. Su función es dejar contratos lo bastante claros para que implementación, test, seguridad y review puedan trabajar sin ambigüedad.
