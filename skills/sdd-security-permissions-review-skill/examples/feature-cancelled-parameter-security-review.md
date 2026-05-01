# Security & Permissions Review: feature-cancelled-parameter

## 1. Estado de salida

- **Estado**: `SECURITY_APPROVED_WITH_WARNINGS`
- **Siguiente skill recomendada**: `sdd-spec-validation`
- **Motivo**: Las operaciones de cancelar y reabrir parámetro están definidas como transiciones de estado y requieren autorización backend. Queda como advertencia añadir auditoría si el negocio necesita trazabilidad completa.

---

## 2. Alcance revisado

| Área | ¿Afecta? | Detalle |
|---|---:|---|
| Autorización | Sí | Solo usuarios con permiso de edición del análisis pueden cancelar/reabrir parámetros. |
| API | Sí | Acción de transición de estado sobre parámetro de análisis. |
| Estado | Sí | Pendiente ↔ Cancelado. |
| Cálculo global | Sí | Cancelado no computa. |
| Datos críticos | Medio | Afecta resultado operativo del análisis. |

---

## 3. Operaciones revisadas

| Operación | Tipo | Roles permitidos | Roles denegados | Enforcement backend requerido | Endpoint/acción |
|---|---|---|---|---|---|
| Cancelar parámetro | transition | ADMIN, ANALYST/OPERATOR autorizado | Usuario sin permiso sobre análisis | Sí | PATCH /analysis-parameters/:id/cancel |
| Reabrir parámetro | transition | ADMIN, ANALYST/OPERATOR autorizado | Usuario sin permiso sobre análisis | Sí | PATCH /analysis-parameters/:id/reopen |
| Calcular resultado global | backend rule | Sistema | Usuario cliente | Sí | Servicio de cálculo |

---

## 4. Hallazgos

| ID | Severidad | Bloqueante | Área | Hallazgo | Acción requerida |
|---|---|---:|---|---|---|
| SEC-001 | MEDIUM | No | state_transition | La cancelación/reapertura debe validarse en backend y no solo desde el botón de UI. | Mantener control en servicio backend. |
| SEC-002 | MEDIUM | No | audit | La cancelación puede alterar el resultado global; conviene registrar actor y timestamp. | Añadir auditoría si aplica al negocio. |
| SEC-003 | LOW | No | validation | Reabrir un parámetro debería devolverlo a estado Pendiente y reactivar captura de muestras. | Cubrir con tests funcionales. |

---

## 5. Tests requeridos

- Usuario autorizado puede cancelar parámetro pendiente.
- Usuario autorizado puede reabrir parámetro cancelado.
- Usuario no autorizado recibe 403 al cancelar.
- Usuario no autorizado recibe 403 al reabrir.
- Parámetro cancelado no computa en resultado global.
- Reapertura restaura estado pendiente y vuelve a computar según reglas normales.

---

## 6. Decisión para el orquestador

```yaml
status: SECURITY_APPROVED_WITH_WARNINGS
next_skill: sdd-spec-validation
blocked: false
reason: "El modelo de permisos es suficiente para avanzar, pero se recomienda definir auditoría para cancelación/reapertura."
```
