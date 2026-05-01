# Security Checklist: <feature-id>

## Autenticación

- [ ] El usuario debe estar autenticado para acceder a la operación.
- [ ] El comportamiento para usuario no autenticado está definido.
- [ ] No se filtran detalles internos en errores de autenticación.

## Autorización

- [ ] El backend valida el rol/permiso requerido.
- [ ] El frontend no es la única barrera.
- [ ] Las operaciones de lectura y escritura están separadas.
- [ ] Los roles denegados están documentados.

## API

- [ ] Cada endpoint nuevo o modificado tiene permisos definidos.
- [ ] Los errores 401/403/404/409/422 están definidos si aplica.
- [ ] El contrato API no expone campos innecesarios.

## Datos

- [ ] Las respuestas están filtradas por rol y scope.
- [ ] No hay exposición de campos sensibles o internos sin justificación.
- [ ] Los cambios persistentes tienen rollback o mitigación.

## Estados

- [ ] Las transiciones permitidas están documentadas.
- [ ] Las transiciones no permitidas se bloquean en backend.
- [ ] Las acciones reversibles o irreversibles tienen reglas claras.

## Tests

- [ ] Existen tests positivos por rol permitido.
- [ ] Existen tests negativos por rol denegado.
- [ ] Existen tests de payload inválido.
- [ ] Existen tests de datos no expuestos.
