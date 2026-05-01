# Role Operation Matrix: <feature-id>

## Matriz de operaciones por rol

| Operación | ADMIN | ANALYST | OPERATOR | Observaciones |
|---|---:|---:|---:|---|
| Buscar | Sí | Sí |  |  |
| Ver detalle | Sí | Sí |  |  |
| Crear | Sí | No |  |  |
| Editar | Sí | No |  |  |
| Eliminar |  |  |  |  |
| Cancelar |  |  |  |  |
| Reabrir |  |  |  |  |
| Exportar |  |  |  |  |

## Política por defecto

```text
Si una operación no está explícitamente permitida para un rol, debe considerarse denegada.
```

## Enforcement esperado

| Operación | Enforcement frontend | Enforcement backend | Error esperado |
|---|---|---|---|
|  | Ocultar/deshabilitar UI | Guard/policy/service check | 403 |
