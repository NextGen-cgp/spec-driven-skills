# Auditability Notes: <feature-id>

## 1. Operaciones auditables

| Operación | Debe auditarse | Motivo | Datos mínimos del log |
|---|---:|---|---|
|  | Sí/No |  | actor, timestamp, recurso, estado anterior, estado nuevo |

## 2. Eventos recomendados

- Creación de datos maestros.
- Edición de datos maestros.
- Cambio de estado crítico.
- Cancelación o reapertura.
- Eliminación lógica o física.
- Importación/exportación.

## 3. Requisitos mínimos

```text
- Actor que ejecuta la acción.
- Recurso afectado.
- Fecha/hora.
- Resultado de la operación.
- Motivo si aplica.
- Estado anterior y nuevo si aplica.
```

## 4. Decisión

```yaml
auditability_required: true|false
reason: ""
```
