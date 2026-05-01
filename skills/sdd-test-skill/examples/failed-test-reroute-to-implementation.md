# Example: Failed Test - Return to Implementation

## Decision

```text
Decision: TEST_FAILED
Next skill: sdd-implementation
Reason: El criterio AC-004 falla: el parámetro cancelado sigue computando en el resultado global.
```

## Defect

### DEF-001

- Severidad: high
- Área: lógica de cálculo global
- Criterio relacionado: AC-004
- Resultado esperado: los parámetros con estado `CANCELLED` no deben computar.
- Resultado obtenido: el cálculo global sigue incluyendo el valor anterior del parámetro cancelado.

## Reproduction steps

1. Crear análisis con tres parámetros.
2. Registrar muestras para dos parámetros.
3. Cancelar el tercer parámetro.
4. Completar análisis.
5. Revisar resultado global.

## Route

```text
sdd-implementation
```

La spec es clara; el fallo está en la implementación de la lógica de agregación.
