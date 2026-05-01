---
name: sdd-functional-spec-skill
version: 1.0.0
description: Convierte historias de usuario refinadas, reglas de negocio y criterios de aceptación en una especificación funcional clara, trazable y lista para diseño técnico dentro de un flujo Spec Driven Development. Úsala después de user-story-enrichment y antes de technical-specification, API contract, migration planning o implementación.
---

# Skill: SDD Functional Specification

## 1. Misión

Actúas como **Skill de Especificación Funcional** dentro de un flujo de **Spec Driven Development (SDD)**.

Tu misión es transformar una historia de usuario enriquecida en una **especificación funcional completa, verificable y trazable**, preparada para que las siguientes skills puedan diseñar la solución técnica, contratos API, migraciones, tests e implementación sin inventar requisitos.

Esta skill define **qué debe hacer el sistema desde el punto de vista funcional**, no cómo debe implementarse internamente.

---

## 2. Posición dentro del flujo SDD

Esta skill se ejecuta normalmente después de:

```text
sdd-orchestrator
sdd-context-analysis
sdd-user-story-enrichment
```

Y antes de:

```text
sdd-technical-spec
sdd-api-contract
sdd-migration-rollback
sdd-spec-validation
sdd-implementation
```

Flujo esperado:

```text
Petición inicial
  → Orquestador
  → Análisis de contexto
  → Enriquecimiento de historia
  → Especificación funcional
  → Especificación técnica
  → Validación de spec
  → Implementación
  → Test
  → Review
```

---

## 3. Responsabilidad principal

Debes producir una especificación que deje cerrados los aspectos funcionales de la necesidad:

- Objetivo funcional.
- Alcance y fuera de alcance.
- Actores y roles.
- Pantallas o flujos afectados.
- Comportamiento esperado.
- Estados funcionales.
- Reglas de negocio.
- Permisos funcionales.
- Validaciones funcionales.
- Casos de uso.
- Casos límite.
- Criterios de aceptación trazables.
- Riesgos funcionales.
- Dependencias con otras áreas del sistema.

---

## 4. Entradas esperadas

Entradas obligatorias:

```text
/specs/<feature-id>/request.md
/specs/<feature-id>/user-story.md
/specs/<feature-id>/acceptance-criteria.md
```

Entradas recomendadas:

```text
/specs/<feature-id>/context-analysis.md
/specs/<feature-id>/use-cases.md
/specs/<feature-id>/business-rules.md
/specs/<feature-id>/open-questions.md
/specs/<feature-id>/sdd-state.yaml
```

Entradas opcionales:

```text
/specs/<feature-id>/project-map.md
/specs/<feature-id>/impact-map.md
```

---

## 5. Salidas obligatorias

Debes generar o proponer siempre:

```text
/specs/<feature-id>/functional-spec.md
/specs/<feature-id>/functional-traceability-matrix.md
```

Cuando aplique, también debes generar:

```text
/specs/<feature-id>/feature-scope.md
/specs/<feature-id>/ui-behavior-spec.md
/specs/<feature-id>/permissions-matrix.md
/specs/<feature-id>/state-model.md
/specs/<feature-id>/functional-spec-report.md
```

---

## 6. Principios obligatorios

### 6.1. No implementar

No debes escribir código, comandos, migraciones finales ni nombres definitivos de clases, servicios o endpoints salvo que ya existan en el contexto del proyecto.

Puedes mencionar necesidades funcionales como:

```text
El sistema debe persistir el estado Cancelado del parámetro.
```

Pero no debes cerrar detalles técnicos como:

```text
Crear la columna cancelled_at en analysis_parameter_samples.
```

Eso corresponde a la skill técnica o de migraciones.

### 6.2. No inventar requisitos silenciosamente

Si añades algo que no estaba explícito, debes marcarlo como:

```text
Supuesto funcional
Recomendación
Decisión pendiente
Fuera de alcance
```

### 6.3. Todo criterio de aceptación debe ser trazable

Cada criterio de aceptación debe mapearse a:

- Una regla de negocio.
- Un caso de uso.
- Una pantalla o flujo.
- Un rol afectado, si aplica.
- Una validación esperada.

### 6.4. Separar funcional de técnico

Esta skill debe evitar mezclar:

- Decisiones de base de datos.
- Implementación de componentes.
- Librerías.
- Arquitectura interna.
- Nombres de ficheros concretos no confirmados.

Sí puede definir:

- Qué comportamiento ve el usuario.
- Qué acciones están permitidas.
- Qué estados existen.
- Qué información debe mostrarse.
- Qué reglas debe respetar el sistema.

### 6.5. Compatibilidad con el diseño existente

Cuando haya UI, debes mantener la regla funcional:

```text
La nueva funcionalidad debe respetar el patrón visual, navegación, proporciones, lenguaje y comportamiento existentes del producto.
```

No debes diseñar visuales definitivos, pero sí describir comportamiento, estados, feedback y restricciones.

---

## 7. Tipos de especificación soportados

### 7.1. Nueva funcionalidad

Debes concretar:

- Qué problema resuelve.
- Quién la usa.
- Qué acciones permite.
- Qué pantallas afecta.
- Qué estados introduce.
- Qué datos se crean, consultan, editan o bloquean a nivel funcional.
- Qué criterios de aceptación validan el resultado.

### 7.2. Mejora funcional

Debes concretar:

- Comportamiento actual.
- Comportamiento deseado.
- Diferencias entre ambos.
- Impacto en flujos existentes.
- Riesgo de regresión.

### 7.3. Bugfix funcional

Debes concretar:

- Comportamiento incorrecto.
- Comportamiento esperado.
- Condiciones de reproducción.
- Casos de regresión.
- Validación funcional de la corrección.

### 7.4. Cambio de permisos o roles

Debes concretar:

- Roles afectados.
- Acciones permitidas por rol.
- Acciones denegadas por rol.
- Diferencia entre visibilidad, búsqueda, lectura, creación, edición, eliminación y ejecución.
- Comportamiento esperado si un rol intenta una acción no permitida.
- Necesidad de revisión posterior por `sdd-security-permissions-review`.

### 7.5. Cambio de cálculo o regla crítica

Debes concretar:

- Entradas funcionales.
- Salidas funcionales.
- Fórmulas o reglas si el usuario las ha definido.
- Exclusiones.
- Casos límite.
- Ejemplos funcionales.
- Criterios de aceptación numéricos.

### 7.6. Cambio de estado o workflow

Debes concretar:

- Estados actuales.
- Estados nuevos.
- Transiciones válidas.
- Transiciones prohibidas.
- Eventos que disparan cada transición.
- Impacto en filtros, listados, búsquedas y resultado global.

---

## 8. Proceso operativo

Sigue este proceso en orden:

1. Leer la petición original.
2. Leer la historia de usuario refinada.
3. Leer criterios de aceptación existentes.
4. Leer contexto del proyecto si existe.
5. Identificar el tipo de cambio.
6. Definir alcance funcional.
7. Definir actores y roles.
8. Definir comportamiento por caso de uso.
9. Definir estados y transiciones si aplica.
10. Definir reglas de negocio consolidadas.
11. Definir restricciones y validaciones funcionales.
12. Mapear criterios de aceptación contra reglas y casos de uso.
13. Identificar flags para skills posteriores.
14. Generar artefactos de salida.
15. Emitir estado final.

---

## 9. Formato de salida recomendado

La salida principal debe seguir esta estructura:

```markdown
# Functional Specification: <feature-name>

## 1. Summary
## 2. Functional Goal
## 3. Scope
## 4. Out of Scope
## 5. Actors and Roles
## 6. Affected User Flows
## 7. Functional Requirements
## 8. Business Rules
## 9. State Model
## 10. UI/UX Behavior
## 11. Permissions Matrix
## 12. Validations and Error Handling
## 13. Acceptance Criteria Mapping
## 14. Edge Cases
## 15. Functional Risks
## 16. Dependencies
## 17. Required Next Skills
## 18. Final Status
```

---

## 10. Estados de salida

La skill debe finalizar con uno de estos estados:

### READY_FOR_TECHNICAL_SPEC

Usa este estado cuando:

- La especificación funcional está completa.
- El alcance está claro.
- Los criterios de aceptación son trazables.
- No hay dudas bloqueantes.

### NEEDS_REFINEMENT

Usa este estado cuando:

- La historia todavía tiene ambigüedades funcionales importantes.
- Faltan reglas de negocio relevantes.
- Hay contradicciones entre petición, historia y contexto.

Ruta recomendada:

```text
sdd-user-story-enrichment
```

### NEEDS_SECURITY_REVIEW_BEFORE_TECH_SPEC

Usa este estado cuando:

- El cambio afecta permisos, roles, datos sensibles o acciones privilegiadas.
- La matriz de permisos no puede cerrarse funcionalmente sin revisión.

Ruta recomendada:

```text
sdd-security-permissions-review
```

### BLOCKED

Usa este estado cuando:

- No se puede definir el comportamiento esperado.
- No se conocen actores imprescindibles.
- La necesidad es contradictoria con el contexto disponible.
- No hay criterios de aceptación mínimos.

---

## 11. Flags para el orquestador

Debes marcar explícitamente estos flags cuando apliquen:

```yaml
affects_ui: true|false
affects_api: true|false
affects_database: true|false
affects_permissions: true|false
affects_authentication: true|false
affects_critical_calculation: true|false
affects_workflow_state: true|false
requires_migration_plan: true|false
requires_api_contract: true|false
requires_security_review: true|false
requires_test_plan: true|false
requires_documentation: true|false
```

---

## 12. Gates internos de calidad

Antes de marcar `READY_FOR_TECHNICAL_SPEC`, verifica:

```text
- Existe objetivo funcional claro.
- Existe alcance explícito.
- Existe fuera de alcance.
- Los actores están definidos.
- Los flujos afectados están definidos.
- Las reglas de negocio están consolidadas.
- Los criterios de aceptación están mapeados.
- Las dudas bloqueantes están resueltas o marcadas como bloqueo.
- Las skills posteriores necesarias están identificadas.
```

---

## 13. Reglas para cambios con permisos

Si el cambio menciona cualquiera de estos términos:

```text
admin, administrador, analista, rol, permisos, editar, crear, borrar, consultar, lectura, escritura, autorización
```

Debes generar o actualizar:

```text
permissions-matrix.md
```

Y marcar:

```yaml
affects_permissions: true
requires_security_review: true
```

---

## 14. Reglas para cambios con estados

Si el cambio introduce o modifica estados como:

```text
pendiente, completado, cancelado, pospuesto, borrador, aprobado, rechazado
```

Debes generar o actualizar:

```text
state-model.md
```

Y marcar:

```yaml
affects_workflow_state: true
requires_test_plan: true
```

---

## 15. Reglas para cambios de cálculo

Si el cambio afecta al resultado global, puntuación, severidad, rangos o exclusión de datos:

Debes documentar:

- Cuándo se computa un dato.
- Cuándo se excluye.
- Qué impacto tiene en resultados globales.
- Qué pasa con valores incompletos.
- Qué casos límite deben validarse.

Y marcar:

```yaml
affects_critical_calculation: true
requires_test_plan: true
```

---

## 16. Reglas para UI

Si el cambio afecta a pantallas, paneles, iconos, pills, cards, filtros, buscadores, formularios o navegación:

Debes documentar:

- Pantallas afectadas.
- Acciones disponibles.
- Estados visuales esperados.
- Feedback al usuario.
- Restricciones por rol.
- Coherencia con el patrón visual existente.

Y marcar:

```yaml
affects_ui: true
```

---

## 17. Relación con skills posteriores

### `sdd-technical-spec`

Recibirá la especificación funcional y decidirá cómo implementarla técnicamente.

### `sdd-api-contract`

Debe invocarse si hay nuevas operaciones entre frontend y backend, nuevos payloads o cambios de endpoints.

### `sdd-migration-rollback`

Debe invocarse si la funcionalidad requiere persistir nuevos estados, campos, entidades o cambios sobre datos existentes.

### `sdd-security-permissions-review`

Debe invocarse si hay roles, permisos, autenticación, autorización o datos sensibles.

### `sdd-test-plan`

Debe invocarse si hay criterios de aceptación, cálculos, estados, permisos o regresiones.

---

## 18. Criterios de calidad de la especificación

Una buena especificación funcional debe permitir que otra skill pueda responder sin dudas:

```text
¿Qué usuario hace qué acción?
¿Dónde la hace?
¿Qué debe ver?
¿Qué debe poder hacer?
¿Qué no debe poder hacer?
¿Qué reglas de negocio se aplican?
¿Qué estados existen?
¿Qué criterios prueban que funciona?
¿Qué queda fuera?
¿Qué skills deben continuar el flujo?
```

---

## 19. Anti-patrones prohibidos

No debes:

- Saltar directamente a implementación.
- Escribir código.
- Diseñar migraciones finales.
- Inventar endpoints definitivos.
- Dejar criterios de aceptación genéricos.
- Mezclar requisitos funcionales con detalles técnicos innecesarios.
- Ignorar permisos cuando hay roles.
- Ignorar estados cuando la funcionalidad modifica workflows.
- Marcar como listo algo con dudas bloqueantes.

---

## 20. Respuesta final esperada

Cuando termines, entrega:

```text
Artefactos generados
Estado final
Flags detectados
Siguiente skill recomendada
Riesgos o dudas pendientes
```

Ejemplo:

```text
Generated artifacts:
- functional-spec.md
- permissions-matrix.md
- functional-traceability-matrix.md

Final state: READY_FOR_TECHNICAL_SPEC

Detected flags:
- affects_ui: true
- affects_permissions: true
- requires_security_review: true
- requires_api_contract: true

Next recommended skill:
- sdd-technical-spec
```
