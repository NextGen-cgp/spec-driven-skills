# Example: Admin / Analyst Panel — Migration & Rollback

## Context

Feature: nuevo panel con permisos diferenciados. Admin puede crear y modificar planes/parámetros. Analista puede buscar y consultar sin editar.

## Persistence Impact

El impacto persistente depende de la arquitectura existente:

```yaml
possible_impacts:
  - Nuevas tablas o relaciones de roles/permisos si no existen.
  - Nuevos campos de auditoría si la edición de planes/parámetros requiere trazabilidad.
  - Nuevos índices para búsqueda de planes y parámetros.
  - Sin migración si roles, permisos y búsqueda ya existen.
```

## Data Impact Assessment

| Area | Impact | Risk |
|---|---|---|
| Roles | Puede requerir seed o mapping | Medium |
| Permissions | Puede requerir reglas persistidas | Medium |
| Search | Puede requerir índices | Low/Medium |
| Existing users | Puede requerir asignación de rol | Medium |

## Migration Plan — Conditional

### Case A: Roles already exist

```text
1. No crear nuevas tablas.
2. Confirmar valores existentes: admin, analyst.
3. Añadir índices de búsqueda si la spec técnica los requiere.
4. Validar que backend aplica permisos por rol.
```

### Case B: Roles do not exist

```text
1. Crear o extender tabla/campo de roles.
2. Seed controlado para roles iniciales.
3. Definir mapping de usuarios existentes.
4. Añadir constraints para evitar roles inválidos.
5. Validar permisos desde backend.
```

## Rollback Plan

```text
Code rollback:
  Revertir UI y endpoints de gestión.

Schema rollback:
  Mantener estructura aditiva si no rompe compatibilidad.

Data rollback:
  Si se asignaron roles nuevos a usuarios existentes, documentar si se revierten o se conservan.
```

## Verification Checklist

- [ ] Admin puede crear plan.
- [ ] Admin puede modificar parámetro.
- [ ] Analista puede buscar.
- [ ] Analista no puede crear ni editar.
- [ ] Restricción está en backend, no solo en UI.
- [ ] Índices de búsqueda no degradan consultas existentes.

## Routing Recommendation

```yaml
skill: sdd-migration-rollback
status: MIGRATION_PLAN_READY
risk_level: medium
security_review_required: true
next_skill: sdd-security-permissions-review
reason: La feature afecta permisos, roles y potencialmente datos de usuarios/operaciones administrativas.
```
