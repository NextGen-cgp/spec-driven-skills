# Security & Permissions Review: feature-admin-analyst-panel

## 1. Estado de salida

- **Estado**: `SECURITY_CHANGES_REQUIRED`
- **Siguiente skill recomendada**: `sdd-api-contract`
- **Motivo**: La spec funcional distingue correctamente entre ADMIN y ANALYST, pero el contrato API debe declarar de forma explícita qué endpoints de creación/edición quedan bloqueados para ANALYST y qué respuesta devuelve el backend.

---

## 2. Alcance revisado

| Área | ¿Afecta? | Detalle |
|---|---:|---|
| Autenticación | Sí | Las secciones requieren usuario autenticado. |
| Autorización | Sí | ADMIN puede modificar datos; ANALYST solo consulta. |
| Roles | Sí | Diferencia funcional entre ADMIN y ANALYST. |
| Endpoints/API | Sí | Búsqueda, alta y edición de planes/parámetros. |
| Operaciones de escritura | Sí | Crear y modificar planes/parámetros. |
| Datos críticos | Sí | Datos maestros de planes de calidad y parámetros. |

---

## 3. Roles y operaciones

| Operación | Tipo | Roles permitidos | Roles denegados | Enforcement backend requerido | Endpoint/acción |
|---|---|---|---|---|---|
| Buscar planes de calidad | search | ADMIN, ANALYST | — | Sí | GET /quality-plans |
| Buscar parámetros | search | ADMIN, ANALYST | — | Sí | GET /parameters |
| Crear plan de calidad | create | ADMIN | ANALYST | Sí | POST /quality-plans |
| Editar plan de calidad | update | ADMIN | ANALYST | Sí | PATCH /quality-plans/:id |
| Crear parámetro | create | ADMIN | ANALYST | Sí | POST /parameters |
| Editar parámetro | update | ADMIN | ANALYST | Sí | PATCH /parameters/:id |

---

## 4. Hallazgos

| ID | Severidad | Bloqueante | Área | Hallazgo | Acción requerida |
|---|---|---:|---|---|---|
| SEC-001 | HIGH | Sí | authorization | El contrato debe declarar respuesta 403 para ANALYST en operaciones de creación/edición. | Actualizar `operation-permissions-contract.md` y `api-contract.md`. |
| SEC-002 | MEDIUM | No | frontend | La UI debe ocultar acciones de edición para ANALYST, pero esto no sustituye backend authz. | Documentar comportamiento frontend. |
| SEC-003 | MEDIUM | No | audit | La edición de datos maestros debería ser auditable. | Añadir `auditability-notes.md`. |

---

## 5. Tests requeridos

- `ADMIN` puede crear y editar planes de calidad.
- `ADMIN` puede crear y editar parámetros.
- `ANALYST` puede buscar planes y parámetros.
- `ANALYST` recibe 403 al intentar crear o editar planes.
- `ANALYST` recibe 403 al intentar crear o editar parámetros.
- La UI de `ANALYST` no renderiza botones de alta/edición.

---

## 6. Decisión para el orquestador

```yaml
status: SECURITY_CHANGES_REQUIRED
next_skill: sdd-api-contract
blocked: true
reason: "Falta contrato explícito de autorización backend para operaciones de escritura diferenciadas por rol."
```
