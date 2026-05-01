# Example: Cancelled Parameter — Migration & Rollback

## Context

Feature: permitir cancelar un parámetro completo dentro de un análisis para que no compute en el resultado global, y permitir reabrirlo posteriormente.

## Persistence Impact

```yaml
has_impact: true
change_types:
  - schema_additive
  - state_change
affected_objects:
  - name: analysis_parameter_results
    object_type: table
    impact: Añadir estado cancelado o flags equivalentes para excluir el parámetro del cálculo global.
  - name: parameter_status
    object_type: state
    impact: Añadir transición pending -> cancelled y cancelled -> pending.
```

## Data Impact Assessment

| Area | Impact | Risk |
|---|---|---|
| Existing records | No deberían modificarse inicialmente | Low |
| New state | Se añade `cancelled` | Medium |
| Global calculation | Debe excluir registros cancelados | Medium |
| Compatibility | Código antiguo podría no interpretar el nuevo estado | Medium |

## Recommended Migration Plan

```text
1. Añadir columna compatible para representar cancelación si no existe un campo de estado suficiente.
2. Mantener default compatible con el comportamiento actual: parámetros pendientes/no cancelados.
3. No modificar registros históricos salvo que la spec lo exija.
4. Actualizar backend para excluir parámetros cancelados del cálculo global.
5. Actualizar frontend para mostrar estado Cancelado y acción de reapertura.
6. Verificar que análisis antiguos siguen calculando igual.
```

## Possible Schema Strategy

Opción recomendada si ya existe campo de estado:

```text
- Extender valores permitidos del estado para admitir `cancelled`.
```

Opción alternativa si no existe estado persistido:

```text
- Añadir columna `status` con default `pending`.
- Valores esperados: pending, completed, cancelled.
```

## Rollback Plan

```text
Code rollback:
  Volver a la versión anterior del backend/frontend.

Schema rollback:
  Si la columna nueva es aditiva y nullable/default compatible, puede mantenerse temporalmente sin romper el código anterior.

Data rollback:
  Si existen parámetros marcados como cancelled, antes de volver a código antiguo hay que decidir si se transforman a pending o se conserva el dato para forward-fix.

Preferred strategy:
  Forward-fix o mantener columna compatible, evitando DROP inmediato.
```

## Verification Checklist

- [ ] Crear análisis con parámetros normales.
- [ ] Cancelar un parámetro.
- [ ] Confirmar que no computa en resultado global.
- [ ] Reabrir parámetro cancelado.
- [ ] Confirmar que vuelve a estado pendiente.
- [ ] Confirmar que análisis antiguos no cambian de resultado.
- [ ] Confirmar que usuarios sin permiso no pueden cancelar si aplica.

## Routing Recommendation

```yaml
skill: sdd-migration-rollback
status: MIGRATION_PLAN_READY
risk_level: medium
security_review_required: true
next_skill: sdd-security-permissions-review
reason: La migración introduce un estado persistido que modifica reglas de cálculo y puede estar asociado a permisos de operación.
```
