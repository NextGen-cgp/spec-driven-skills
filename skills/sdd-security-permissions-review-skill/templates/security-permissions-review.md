# Security & Permissions Review: <feature-id>

## 1. Estado de salida

- **Estado**: `<SECURITY_APPROVED | SECURITY_APPROVED_WITH_WARNINGS | SECURITY_CHANGES_REQUIRED | SECURITY_BLOCKED | NOT_APPLICABLE>`
- **Siguiente skill recomendada**: `<sdd-spec-validation | sdd-technical-spec | sdd-api-contract | sdd-migration-rollback | sdd-test | sdd-review>`
- **Motivo**:

---

## 2. Artefactos revisados

| Artefacto | Estado | Observaciones |
|---|---|---|
| request.md | Pendiente/Revisado/No aplica |  |
| context-analysis.md | Pendiente/Revisado/No aplica |  |
| functional-spec.md | Pendiente/Revisado/No aplica |  |
| technical-spec.md | Pendiente/Revisado/No aplica |  |
| api-contract.md | Pendiente/Revisado/No aplica |  |
| migration-plan.md | Pendiente/Revisado/No aplica |  |

---

## 3. Alcance de seguridad

| Área | ¿Afecta? | Detalle |
|---|---:|---|
| Autenticación | No |  |
| Autorización | Sí/No |  |
| Roles | Sí/No |  |
| Endpoints/API | Sí/No |  |
| Operaciones de escritura | Sí/No |  |
| Transiciones de estado | Sí/No |  |
| Datos sensibles o críticos | Sí/No |  |
| Migraciones | Sí/No |  |

---

## 4. Roles revisados

| Rol | Capacidades esperadas | Restricciones esperadas | Observaciones |
|---|---|---|---|
| ADMIN |  |  |  |
| ANALYST |  |  |  |
| OPERATOR |  |  |  |

---

## 5. Operaciones revisadas

| Operación | Tipo | Roles permitidos | Roles denegados | Enforcement backend requerido | Endpoint/acción |
|---|---|---|---|---|---|
|  | read/create/update/delete/transition/search |  |  | Sí |  |

---

## 6. Revisión de permisos backend

Describe aquí cómo debe aplicarse la autorización real en backend.

```text
- Guard/middleware/policy esperado:
- Regla de autorización:
- Error esperado para no autenticado:
- Error esperado para no autorizado:
```

---

## 7. Revisión de datos expuestos

| Respuesta/listado/detalle | Campos permitidos | Campos restringidos | Riesgo |
|---|---|---|---|
|  |  |  |  |

---

## 8. Revisión de validaciones server-side

| Validación | Capa esperada | Operación afectada | Bloqueante |
|---|---|---|---:|
|  | Backend/DB/API |  | Sí/No |

---

## 9. Hallazgos

| ID | Severidad | Bloqueante | Área | Hallazgo | Acción requerida |
|---|---|---:|---|---|---|
| SEC-001 | HIGH | Sí | authorization |  |  |

---

## 10. Controles requeridos

- [ ] Control 1.
- [ ] Control 2.
- [ ] Control 3.

---

## 11. Tests de autorización requeridos

- [ ] Rol permitido puede ejecutar operación.
- [ ] Rol no permitido recibe 403.
- [ ] Usuario no autenticado recibe 401.
- [ ] Payload inválido es rechazado en backend.
- [ ] Estado inválido no permite transición.
- [ ] La respuesta no expone campos restringidos.

---

## 12. Decisión para el orquestador

```yaml
status: <SECURITY_APPROVED | SECURITY_APPROVED_WITH_WARNINGS | SECURITY_CHANGES_REQUIRED | SECURITY_BLOCKED | NOT_APPLICABLE>
next_skill: <sdd-spec-validation | sdd-technical-spec | sdd-api-contract | sdd-migration-rollback | sdd-test | sdd-review>
blocked: true|false
reason: ""
```
