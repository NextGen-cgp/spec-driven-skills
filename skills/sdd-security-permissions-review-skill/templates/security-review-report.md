# Security Review Report: <feature-id>

## 1. Resultado

```yaml
status: <SECURITY_APPROVED | SECURITY_APPROVED_WITH_WARNINGS | SECURITY_CHANGES_REQUIRED | SECURITY_BLOCKED | NOT_APPLICABLE>
review_type: <pre_spec_validation | post_implementation | post_test | final_gate>
next_skill: <sdd-spec-validation | sdd-technical-spec | sdd-api-contract | sdd-migration-rollback | sdd-review>
blocked: true|false
```

## 2. Decisión ejecutiva

Resume en 3-5 líneas si el cambio puede avanzar, con qué condiciones y qué riesgos quedan registrados.

## 3. Puntos revisados

- [ ] Roles y permisos.
- [ ] Endpoints o acciones backend.
- [ ] Operaciones de escritura.
- [ ] Transiciones de estado.
- [ ] Validaciones backend.
- [ ] Exposición de datos.
- [ ] Migraciones o impacto de datos.
- [ ] Tests de autorización.

## 4. Bloqueantes

| ID | Severidad | Descripción | Acción requerida |
|---|---|---|---|
|  |  |  |  |

## 5. Advertencias

| ID | Severidad | Descripción | Seguimiento |
|---|---|---|---|
|  |  |  |  |

## 6. Recomendación final

```text
- Avanzar a spec validation.
- Volver a technical spec.
- Volver a API contract.
- Volver a migration rollback.
- Ejecutar revisión post-implementación.
```
