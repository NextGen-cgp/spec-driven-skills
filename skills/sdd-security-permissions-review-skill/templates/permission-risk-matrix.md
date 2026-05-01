# Permission Risk Matrix: <feature-id>

## Matriz de permisos y riesgos

| Operación | Actor/Rol | Permitido | Riesgo si se permite indebidamente | Severidad | Control requerido | Test requerido |
|---|---|---:|---|---|---|---|
| Buscar registros | ADMIN | Sí | Bajo | LOW | Authenticated access | Test lectura permitida |
| Buscar registros | ANALYST | Sí | Bajo/Medio según scope | LOW/MEDIUM | Filtrado por scope si aplica | Test lectura permitida |
| Crear registro | ANALYST | No | Creación no autorizada de datos maestros | HIGH | Backend 403 | Test acceso denegado |
| Editar registro | ANALYST | No | Modificación no autorizada | HIGH | Backend 403 | Test acceso denegado |

## Clasificación rápida

```text
CRITICAL: acceso indebido grave, escalada de privilegios, exposición masiva o pérdida de datos.
HIGH: escritura/modificación no autorizada, bypass de permisos o API sin control backend.
MEDIUM: ambigüedad de scope, validación incompleta o logging insuficiente.
LOW: hardening, consistencia o documentación.
INFO: nota informativa.
```
