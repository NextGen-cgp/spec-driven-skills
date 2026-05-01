# User Story Enrichment: feature-cancel-analysis-parameter

## 1. Resumen funcional

Se necesita permitir que determinados parámetros de un análisis puedan marcarse como cancelados cuando no corresponda rellenarlos. Esta cancelación debe ser una acción explícita, no un campo vacío, para evitar errores por olvido. Un parámetro cancelado no debe computar en el resultado global del análisis y debe poder reabrirse si el analista decide registrarlo posteriormente.

## 2. Petición original interpretada

```text
En los registros de análisis, algunos parámetros no tienen que rellenarse. No se quiere permitir dejarlos vacíos sin más. Debe existir un icono para cancelar un parámetro completo, cambiar su pill de Pendiente a Cancelado y cerrar la caja de muestra. También debe existir una acción para reabrir el parámetro, volviendo a Pendiente y reabriendo la caja de registro. En backend, si un parámetro está Cancelado, no computa en el resultado global del análisis.
```

## 3. Clasificación

- Tipo de cambio: `feature`, `ui_change`, `workflow_change`, `business_rule`, `critical_calculation`
- Riesgo funcional: `high`
- Motivo del riesgo: afecta al estado de parámetros, validación de completado y cálculo global del análisis.
- Módulos afectados probables:
  - Registro de análisis.
  - Cards/cajas de parámetros.
  - Estado visual de parámetros.
  - Cálculo global del resultado.
  - Validaciones de completado.
  - Persistencia del estado del parámetro.

## 4. Actores

| Actor | Rol | Necesidad | Permisos esperados |
|---|---|---|---|
| Analista | Usuario operativo | Cancelar parámetros que no aplican y reabrirlos si procede | Consultar análisis, registrar muestras, cancelar/reabrir parámetros según permisos actuales |
| Sistema | Motor de cálculo | Excluir parámetros cancelados del resultado global | Aplicar regla de cálculo de forma automática |

## 5. Historias de usuario refinadas

### US-001: Cancelar un parámetro de análisis

Como `Analista`, quiero poder cancelar explícitamente un parámetro que no corresponde rellenar, para completar el análisis sin dejar campos vacíos ambiguos.

- Prioridad: `must`
- Valor funcional: evita errores de interpretación y permite distinguir entre “no rellenado por olvido” y “no aplica”.

### US-002: Reabrir un parámetro cancelado

Como `Analista`, quiero poder reabrir un parámetro cancelado, para registrar muestras si durante el análisis se decide que sí debe evaluarse.

- Prioridad: `must`
- Valor funcional: permite corregir decisiones durante el flujo operativo.

### US-003: Excluir parámetros cancelados del resultado global

Como `Sistema`, quiero excluir los parámetros cancelados del cálculo global del análisis, para que el resultado final solo tenga en cuenta parámetros realmente evaluados.

- Prioridad: `must`
- Valor funcional: evita penalizar o bloquear análisis por parámetros que no aplican.

## 6. Casos de uso

### UC-001: Analista cancela un parámetro pendiente

- Actor: Analista.
- Precondiciones:
  - Existe un análisis en curso.
  - El parámetro está en estado `Pendiente`.
  - La caja de registro de muestras está visible o disponible.
- Flujo principal:
  1. El analista identifica que un parámetro no debe rellenarse.
  2. Pulsa el icono de cancelación del parámetro.
  3. El sistema cambia el estado visual del parámetro a `Cancelado`.
  4. El sistema cierra la caja de registro de muestras del parámetro.
  5. El sistema excluye el parámetro del cálculo global.
- Resultado esperado:
  - El parámetro queda marcado como cancelado y no bloquea el avance del análisis.

### UC-002: Analista reabre un parámetro cancelado

- Actor: Analista.
- Precondiciones:
  - Existe un análisis en curso.
  - El parámetro está en estado `Cancelado`.
- Flujo principal:
  1. El analista pulsa el icono de reapertura.
  2. El sistema cambia el estado del parámetro a `Pendiente`.
  3. El sistema reabre la caja de registro de muestras.
  4. El parámetro vuelve a formar parte de las validaciones y cálculo que correspondan.
- Resultado esperado:
  - El parámetro puede volver a completarse normalmente.

## 7. Reglas de negocio

- `BR-001`: Un parámetro no debe quedar vacío como sustituto de “no aplica”; debe marcarse explícitamente como `Cancelado`.
- `BR-002`: Al cancelar un parámetro, su estado visual debe cambiar de `Pendiente` a `Cancelado`.
- `BR-003`: Al cancelar un parámetro, la caja de registro de muestras asociada debe cerrarse.
- `BR-004`: Un parámetro en estado `Cancelado` no computa en el resultado global del análisis.
- `BR-005`: Un parámetro en estado `Cancelado` no debe bloquear la finalización del análisis por falta de muestras.
- `BR-006`: Un parámetro cancelado debe poder reabrirse.
- `BR-007`: Al reabrir un parámetro cancelado, su estado vuelve a `Pendiente`.
- `BR-008`: Al reabrir un parámetro cancelado, la caja de registro de muestras vuelve a estar disponible.
- `BR-009`: La acción de cancelar/reabrir debe seguir el estilo visual existente de la página.
- `BR-010`: Si existen muestras previamente registradas en un parámetro que se cancela, la spec funcional debe definir si se conservan, se ocultan o se invalidan.

## 8. Estados funcionales

| Estado | Descripción | Computa en resultado global | Caja de muestras |
|---|---|---|---|
| `Pendiente` | Parámetro pendiente de registro/evaluación | Sí, cuando tenga datos válidos o según regla actual | Abierta/disponible |
| `Cancelado` | Parámetro marcado explícitamente como no aplicable | No | Cerrada |
| `Completado` | Parámetro registrado y evaluado | Sí | Según comportamiento actual |

## 9. Criterios de aceptación

### AC-001: Cancelación explícita de parámetro

**Dado que** un parámetro está en estado `Pendiente`,  
**cuando** el analista pulsa el icono de cancelación,  
**entonces** el parámetro cambia a estado `Cancelado` y se muestra visualmente como cancelado.

- Tipo de verificación: `e2e_test`
- Reglas relacionadas: `BR-001`, `BR-002`

### AC-002: Cierre de caja de muestras

**Dado que** un parámetro está visible para registrar muestras,  
**cuando** el analista lo cancela,  
**entonces** la caja de registro de muestras se cierra o deja de estar disponible para ese parámetro.

- Tipo de verificación: `ui_check`
- Reglas relacionadas: `BR-003`

### AC-003: Exclusión del cálculo global

**Dado que** un análisis contiene parámetros cancelados y parámetros evaluados,  
**cuando** el sistema calcula el resultado global,  
**entonces** ignora los parámetros cancelados y calcula el resultado solo con los parámetros aplicables.

- Tipo de verificación: `unit_test`
- Reglas relacionadas: `BR-004`

### AC-004: Parámetro cancelado no bloquea finalización

**Dado que** todos los parámetros obligatorios aplicables están completos y uno o varios parámetros están cancelados,  
**cuando** el analista intenta completar el análisis,  
**entonces** el sistema permite completar el análisis si el resto de reglas se cumplen.

- Tipo de verificación: `integration_test`
- Reglas relacionadas: `BR-005`

### AC-005: Reapertura de parámetro cancelado

**Dado que** un parámetro está en estado `Cancelado`,  
**cuando** el analista pulsa la acción de reapertura,  
**entonces** el parámetro vuelve a `Pendiente` y la caja de muestras queda disponible.

- Tipo de verificación: `e2e_test`
- Reglas relacionadas: `BR-006`, `BR-007`, `BR-008`

## 10. Casos límite

- Cancelar un parámetro con muestras ya introducidas.
- Reabrir un parámetro cancelado después de haber avanzado en otros parámetros.
- Intentar completar un análisis con todos los parámetros cancelados.
- Cancelar un parámetro ya completado.
- Reabrir un parámetro cancelado y dejarlo sin completar.
- Parámetros cancelados dentro de cálculos de severidad o resultado global.

## 11. Fuera de alcance

- Cambiar todas las reglas de cálculo de calidad existentes.
- Rediseñar completamente las cards de parámetros.
- Crear un sistema avanzado de motivos de cancelación, salvo que se defina como requisito adicional.
- Auditoría detallada de cancelaciones, salvo decisión posterior.

## 12. Supuestos

- La cancelación se aplica a nivel de parámetro dentro de un análisis concreto, no al parámetro maestro del plan de calidad.
- La reapertura devuelve el parámetro a un estado funcional equivalente a `Pendiente`.
- La exclusión de cálculo se aplica únicamente mientras el parámetro está en estado `Cancelado`.
- La validación de análisis completo debe tratar `Cancelado` como estado válido para no exigir muestras.

## 13. Preguntas abiertas

### Bloqueantes

- ¿Qué debe ocurrir si se cancela un parámetro que ya tiene muestras registradas: conservarlas, eliminarlas, ocultarlas o dejarlas sin computar?
- ¿Se debe permitir cancelar un parámetro ya completado o solo parámetros pendientes?

### No bloqueantes

- ¿Debe pedirse un motivo de cancelación?
- ¿Debe registrarse quién canceló o reabrió el parámetro?
- ¿Debe haber confirmación antes de cancelar si ya existen datos introducidos?

## 14. Estado de salida

- Estado: `NEEDS_CLARIFICATION`
- Motivo: existen decisiones funcionales relevantes sobre muestras existentes y cancelación de parámetros completados.
- Siguiente skill recomendada: `sdd-orchestrator`
- Si el orquestador decide avanzar con supuestos, la siguiente skill puede ser `sdd-functional-spec`.
- Skills requeridas más adelante:
  - `sdd-functional-spec`
  - `sdd-technical-spec`
  - `sdd-migration-rollback`, si el estado cancelado requiere persistencia nueva.
  - `sdd-test`, por impacto en cálculo global.
