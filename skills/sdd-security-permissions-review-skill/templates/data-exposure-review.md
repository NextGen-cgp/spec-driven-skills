# Data Exposure Review: <feature-id>

## 1. Superficies de exposición

| Superficie | Consumidor | Datos devueltos | Riesgo | Control |
|---|---|---|---|---|
| Listado | Frontend |  |  |  |
| Detalle | Frontend |  |  |  |
| Búsqueda | Frontend |  |  |  |
| Exportación | Usuario |  |  |  |

## 2. Campos permitidos y restringidos

| Entidad/DTO | Campo | Permitido para | Restringido para | Motivo |
|---|---|---|---|---|
|  |  |  |  |  |

## 3. Reglas de filtrado

```text
- Filtrado por rol:
- Filtrado por ownership:
- Filtrado por departamento/área:
- Filtrado por estado:
```

## 4. Decisión

```yaml
data_exposure_status: <APPROVED | APPROVED_WITH_WARNINGS | CHANGES_REQUIRED | BLOCKED>
reason: ""
```
