# Authorization Test Plan: <feature-id>

## 1. Objetivo

Definir los tests mínimos de autorización y seguridad funcional que deben existir antes de cerrar la implementación.

## 2. Matriz de tests por operación

| ID | Operación | Rol | Caso | Resultado esperado | Tipo de test |
|---|---|---|---|---|---|
| AUTHZ-001 |  | ADMIN | Acceso permitido | 200/201/204 | integración/e2e |
| AUTHZ-002 |  | ANALYST | Acceso denegado | 403 | integración/e2e |
| AUTHZ-003 |  | anonymous | No autenticado | 401 | integración/e2e |

## 3. Tests de datos expuestos

- [ ] El listado no devuelve campos restringidos.
- [ ] El detalle no devuelve campos restringidos.
- [ ] Las búsquedas respetan el scope esperado.

## 4. Tests de validación backend

- [ ] Payload inválido rechazado.
- [ ] Transición de estado no permitida rechazada.
- [ ] Operación sobre recurso inexistente devuelve error controlado.
- [ ] Operación sobre recurso fuera de scope devuelve 403 o 404 según política definida.

## 5. Tests de regresión

- [ ] Roles existentes conservan permisos anteriores.
- [ ] Funcionalidades no afectadas mantienen comportamiento.
