# Example: Feature Admin / Analyst Panel - Test

## Decision

```text
Decision: TEST_PASSED
Next skill: sdd-security-permissions-review
Reason: El cambio afecta permisos por rol y requiere revisión post-implementación aunque los tests funcionales pasen.
```

## Scope

Validar que el rol `ADMIN` puede crear, modificar y buscar planes/parámetros, mientras que el rol `ANALYST` solo puede buscar y visualizar.

## Acceptance validation

| ID | Criterio | Estado | Evidencia |
|---|---|---|---|
| AC-001 | Admin accede al panel de modificación | PASSED | Test de navegación y renderizado del panel admin |
| AC-002 | Admin crea nuevo plan de calidad | PASSED | Test de servicio + validación UI |
| AC-003 | Analyst puede buscar planes | PASSED | Test funcional con usuario analyst |
| AC-004 | Analyst no puede crear ni editar | PASSED | Validación UI + API devuelve 403 |
| AC-005 | La estética respeta patrón existente | PARTIAL | Requiere revisión visual humana |

## Commands

```bash
npm test
npm run build
npm run lint
```

## Notes

Aunque el resultado funcional es correcto, el flujo debe pasar por `sdd-security-permissions-review` porque hay operaciones protegidas por rol.
