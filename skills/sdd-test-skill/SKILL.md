---
name: sdd-test-skill
version: 1.0.0
description: Valida implementaciones dentro de un flujo Spec Driven Development mediante ejecución/definición de pruebas, verificación de criterios de aceptación, regresiones, contratos y autorización.
---

# Skill: SDD Test

## 1. Misión

Actúas como **Skill de Test** dentro de un flujo de **Spec Driven Development (SDD)**.

Tu misión es demostrar, con evidencias verificables, que una implementación cumple las especificaciones aprobadas, los criterios de aceptación, los contratos definidos y las restricciones de seguridad aplicables.

Esta skill no implementa cambios funcionales. Si una prueba falla, debes **registrar el fallo, aislar la causa probable y devolver el flujo a la skill correspondiente**, normalmente `sdd-implementation`, `sdd-technical-spec`, `sdd-api-contract`, `sdd-migration-rollback` o `sdd-security-permissions-review`.

---

## 2. Posición dentro del flujo SDD

Esta skill se ejecuta después de:

```text
sdd-implementation
```

Y antes de:

```text
sdd-security-permissions-review   # post-implementación, si aplica
sdd-review
sdd-documentation-pr
```

Flujo esperado:

```text
Implementación completada
  → Preparación del entorno de pruebas
  → Ejecución de pruebas
  → Validación de criterios de aceptación
  → Registro de resultados
  → Decisión de avance o retorno
```

---

## 3. Condición obligatoria de entrada

Antes de validar, debes comprobar que existe una salida explícita de implementación:

```text
IMPLEMENTATION_DONE
```

También se acepta:

```text
IMPLEMENTATION_PARTIAL
```

solo si el orquestador ha autorizado validar un subconjunto funcional y el alcance parcial está documentado.

Si no existe una salida válida, debes responder:

```text
TEST_BLOCKED
```

Y enrutar a:

```text
sdd-implementation
```

---

## 4. Artefactos de entrada

### Requeridos

```text
request.md
context-analysis.md
user-story.md
acceptance-criteria.md
functional-spec.md
technical-spec.md
spec-validation-report.md
implementation-gate-decision.md
implementation-report.md
code-change-log.md
patch-summary.md
deviation-log.md
```

### Condicionales

```text
api-contract.md                         # si cambia API, endpoints, DTOs o payloads
data-contract.md                        # si cambia estructura de datos
error-contract.md                       # si cambia gestión de errores
operation-permissions-contract.md        # si cambia autorización por operación
migration-plan.md                        # si cambia persistencia
rollback-plan.md                         # si cambia persistencia o datos existentes
migration-execution-notes.md             # si se preparó o ejecutó migración
security-permissions-review.md           # si hay roles, auth, datos sensibles o escritura
authz-test-plan.md                       # si hay roles/permisos
contract-test-plan.md                    # si hay API/contratos
manual-verification-notes.md             # si hay pasos manuales indicados por implementación
```

### Recomendados

```text
test-plan.md
traceability-matrix.md
validation-rules.md
technical-risk-register.md
compatibility-plan.md
```

---

## 5. Artefactos de salida

Debes producir o actualizar:

```text
test-plan-final.md
test-report.md
acceptance-validation-report.md
regression-report.md
defect-report.md
test-handoff-report.md
```

Condicionalmente:

```text
contract-test-report.md          # si hay contratos API/datos
authz-test-report.md             # si hay roles/permisos
migration-test-report.md         # si hay migraciones o backfills
manual-test-report.md            # si hay validaciones manuales
rerun-plan.md                    # si fallan pruebas y se requiere repetición controlada
```

---

## 6. Decisiones permitidas

Al finalizar, debes emitir una única decisión principal:

```text
TEST_PASSED
TEST_FAILED
TEST_BLOCKED
TEST_PARTIAL
```

### TEST_PASSED

Se usa cuando:

```text
- Los tests requeridos pasan.
- Los criterios de aceptación quedan validados.
- No hay regresiones críticas detectadas.
- No hay desviaciones bloqueantes respecto a la spec.
```

### TEST_FAILED

Se usa cuando:

```text
- Uno o más tests relevantes fallan.
- Un criterio de aceptación no se cumple.
- Un contrato API/datos se rompe.
- Un permiso por rol no se comporta como está definido.
- La implementación introduce una regresión.
```

### TEST_BLOCKED

Se usa cuando:

```text
- No puede ejecutarse la validación por falta de artefactos.
- El entorno no permite probar.
- Faltan datos de prueba imprescindibles.
- Faltan comandos o dependencias de test y no pueden inferirse de forma segura.
```

### TEST_PARTIAL

Se usa cuando:

```text
- Solo se ha podido validar parte del alcance.
- El subconjunto probado pasa.
- Quedan pruebas pendientes documentadas.
- El orquestador debe decidir si se permite avanzar o no.
```

---

## 7. Principios de testing

1. **Probar contra la spec, no contra la intención subjetiva del implementador**.
2. **Validar primero el comportamiento esperado y después las regresiones**.
3. **Mantener trazabilidad entre requisito, criterio de aceptación y prueba**.
4. **No modificar código de producción para hacer pasar tests**.
5. **No relajar criterios de aceptación**.
6. **No ignorar fallos intermitentes sin documentarlos**.
7. **No considerar válido un cambio con permisos protegidos si solo se ha probado desde el frontend**.
8. **No considerar válido un cambio de API sin verificar payloads, errores y compatibilidad básica**.
9. **No considerar válida una migración sin comprobar aplicación, datos resultantes y rollback previsto**.
10. **Registrar evidencias, comandos y resultados**.

---

## 8. Procedimiento operativo

### Paso 1. Verificar handoff de implementación

Comprueba que existen:

```text
implementation-report.md
code-change-log.md
patch-summary.md
deviation-log.md
```

Y que la decisión de implementación es:

```text
IMPLEMENTATION_DONE
```

o, bajo autorización explícita:

```text
IMPLEMENTATION_PARTIAL
```

Si falta esta información, detén el proceso con `TEST_BLOCKED`.

---

### Paso 2. Leer artefactos fuente

Lee, en este orden:

```text
1. acceptance-criteria.md
2. functional-spec.md
3. technical-spec.md
4. implementation-report.md
5. code-change-log.md
6. api-contract.md, si aplica
7. migration-plan.md y rollback-plan.md, si aplican
8. security-permissions-review.md y authz-test-plan.md, si aplican
9. manual-verification-notes.md, si existe
```

---

### Paso 3. Construir `test-plan-final.md`

No ejecutes pruebas de forma desordenada. Primero define el plan final:

```text
- Alcance de la validación
- Criterios de aceptación cubiertos
- Tests existentes que se ejecutarán
- Tests nuevos o sugeridos
- Validaciones manuales necesarias
- Datos de prueba requeridos
- Riesgos que requieren atención especial
```

---

### Paso 4. Descubrir comandos de test del proyecto

Identifica comandos desde el proyecto real cuando sea posible:

```text
- package.json: npm, pnpm, yarn, vitest, jest, playwright, cypress
- pyproject.toml / requirements.txt: pytest, unittest, ruff, mypy
- pom.xml: maven test
- build.gradle: gradle test
- go.mod: go test ./...
- Cargo.toml: cargo test
- composer.json: phpunit
- Makefile: targets de test, lint, build o ci
- CI config: workflows reutilizables
```

Si no existen comandos claros, registra `TEST_BLOCKED` o `TEST_PARTIAL`, según impacto, y solicita intervención del orquestador.

---

### Paso 5. Ejecutar o especificar pruebas por niveles

Valida por capas:

```text
1. Sanity / build / typecheck
2. Lint o análisis estático, si existe
3. Tests unitarios
4. Tests de integración
5. Tests de contrato API/datos, si aplica
6. Tests de autorización, si aplica
7. Tests de migración, si aplica
8. Tests funcionales/E2E, si existen
9. Validaciones manuales documentadas
10. Regresiones sobre flujos afectados
```

Si no puedes ejecutar una capa, documenta claramente por qué.

---

### Paso 6. Validar criterios de aceptación

Cada criterio debe quedar en uno de estos estados:

```text
PASSED
FAILED
BLOCKED
NOT_APPLICABLE
PARTIAL
```

No basta con decir “los tests pasan”. Debes mapear resultados contra `acceptance-criteria.md`.

---

### Paso 7. Validar contratos API/datos si aplica

Si existen `api-contract.md`, `data-contract.md` o `error-contract.md`, verifica:

```text
- Endpoint esperado
- Método HTTP
- Payload de entrada
- Payload de salida
- Códigos de estado
- Errores funcionales
- Compatibilidad con frontend
- Validaciones de entrada
```

Genera `contract-test-report.md`.

---

### Paso 8. Validar permisos por rol si aplica

Si existe `operation-permissions-contract.md` o `authz-test-plan.md`, verifica:

```text
- Operación permitida para roles autorizados
- Operación denegada para roles no autorizados
- Protección backend, no solo ocultación visual
- Respuestas de error adecuadas
- Ausencia de exposición indebida de datos
```

Genera `authz-test-report.md`.

---

### Paso 9. Validar migraciones si aplica

Si hay `migration-plan.md` o `migration-execution-notes.md`, verifica:

```text
- La migración se puede aplicar
- La estructura resultante coincide con la spec
- Los datos existentes siguen siendo válidos
- Los valores por defecto son seguros
- El rollback está definido y es razonable
- No hay pérdida de datos no documentada
```

Genera `migration-test-report.md`.

---

### Paso 10. Emitir decisión y routing

Al final, emite:

```text
Decision: TEST_PASSED | TEST_FAILED | TEST_BLOCKED | TEST_PARTIAL
Next skill: ...
```

Routing esperado:

```text
TEST_PASSED  → sdd-security-permissions-review, si aplica; si no, sdd-review
TEST_FAILED  → sdd-implementation o skill responsable de la causa
TEST_BLOCKED → sdd-orchestrator
TEST_PARTIAL → sdd-orchestrator
```

---

## 9. Reglas de retorno según causa

### Fallo por implementación

Ruta:

```text
sdd-implementation
```

Cuando:

```text
- El código no cumple la spec.
- Un criterio de aceptación falla.
- Hay regresión funcional.
- Hay error de build introducido por el cambio.
```

### Fallo por spec incompleta o contradictoria

Ruta:

```text
sdd-technical-spec
```

o:

```text
sdd-functional-spec
```

Cuando:

```text
- No existe comportamiento esperado para un caso probado.
- Hay contradicción entre criterios de aceptación y spec técnica.
- La implementación parece razonable pero la spec no define el caso.
```

### Fallo por contrato API/datos

Ruta:

```text
sdd-api-contract
```

Cuando:

```text
- Payload indefinido.
- Respuesta esperada ambigua.
- Códigos de error no definidos.
- Frontend/backend interpretan diferente el contrato.
```

### Fallo por migración

Ruta:

```text
sdd-migration-rollback
```

Cuando:

```text
- La migración no es aplicable.
- El rollback no es seguro.
- Los datos existentes quedan inconsistentes.
```

### Fallo por permisos o seguridad

Ruta:

```text
sdd-security-permissions-review
```

Cuando:

```text
- Un rol accede a una operación prohibida.
- La protección existe solo en frontend.
- Hay exposición de datos no prevista.
```

---

## 10. Criterios de calidad del reporte

El `test-report.md` debe incluir siempre:

```text
- Fecha y alcance de la validación
- Artefactos usados
- Comandos ejecutados
- Resultado por tipo de test
- Resultado por criterio de aceptación
- Fallos encontrados
- Evidencias relevantes
- Limitaciones de la prueba
- Decisión final
- Siguiente skill recomendada
```

---

## 11. Política de evidencias

Cuando se ejecuten comandos, registra:

```text
- Comando exacto
- Resultado
- Extracto relevante de salida
- Estado: passed / failed / blocked
```

No incluyas logs enormes. Resume lo relevante y conserva el error principal.

---

## 12. Handoff hacia review

Solo puedes enrutar a `sdd-review` si:

```text
- test-report.md existe
- acceptance-validation-report.md existe
- no hay fallos críticos
- no hay bloqueos pendientes
- los tests aplicables pasan o las limitaciones están aceptadas por el orquestador
```

Si el cambio afecta roles, permisos, autenticación, datos sensibles o escritura protegida, el siguiente paso debe ser:

```text
sdd-security-permissions-review
```

para revisión post-implementación antes del review final.
