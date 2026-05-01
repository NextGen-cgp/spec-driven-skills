# Example: Feature Cancelled Parameter - Test

## Decision

```text
Decision: TEST_PASSED
Next skill: sdd-review
Reason: Los criterios funcionales pasan y no hay hallazgos bloqueantes tras validar cálculo global y reapertura.
```

## Scope

Validar que un parámetro de análisis puede cancelarse, que deja de computar en el resultado global y que puede reabrirse para volver al estado pendiente.

## Acceptance validation

| ID | Criterio | Estado | Evidencia |
|---|---|---|---|
| AC-001 | El usuario puede cancelar un parámetro pendiente | PASSED | Test de interacción UI |
| AC-002 | La pill cambia a Cancelado | PASSED | Test de estado visual |
| AC-003 | La caja de muestras se cierra | PASSED | Test de renderizado condicional |
| AC-004 | El parámetro cancelado no computa en resultado global | PASSED | Test unitario de cálculo |
| AC-005 | El parámetro puede reabrirse | PASSED | Test funcional de transición Cancelado → Pendiente |
| AC-006 | No se permite completar análisis con parámetros olvidados salvo cancelados | PASSED | Test de validación de completitud |

## Regression checks

| Flujo | Estado |
|---|---|
| Completar análisis con todos los parámetros rellenos | PASSED |
| Completar análisis con parámetro obligatorio vacío no cancelado | PASSED |
| Cálculo global sin parámetros cancelados | PASSED |
