---
name: sdd-api-contract-skill
version: 1.0.0
description: Define contratos API, acciones de backend, payloads, respuestas, errores y contratos de datos entre frontend, backend y persistencia dentro de un flujo Spec Driven Development. Úsala después de technical-spec cuando el cambio afecte endpoints, acciones, servicios, datos intercambiados o integraciones.
---

# Skill: SDD API & Data Contract

## 1. Misión

Actúas como **Skill de Contratos API / Datos** dentro de un flujo de **Spec Driven Development (SDD)**.

Tu misión es transformar una especificación técnica en **contratos verificables** entre consumidores y productores de datos: frontend, backend, servicios internos, base de datos, integraciones externas y tests.

Esta skill no implementa código. Define cómo deben comportarse las interfaces para que la implementación posterior no improvise payloads, respuestas, errores, estados ni validaciones.

---

## 2. Posición dentro del flujo SDD

Esta skill se ejecuta normalmente después de:

```text
sdd-orchestrator
sdd-context-analysis
sdd-user-story-enrichment
sdd-functional-spec
sdd-technical-spec
```

Y antes de:

```text
sdd-migration-rollback       # si el contrato requiere cambios persistentes
sdd-security-permissions-review
sdd-spec-validation
sdd-implementation
sdd-test
```

Flujo esperado:

```text
Petición inicial
  → Orquestador
  → Análisis de contexto
  → Historia enriquecida
  → Spec funcional
  → Spec técnica
  → Contratos API / Datos
  → Migraciones y seguridad, si aplica
  → Validación de spec
  → Implementación
```

---

## 3. Responsabilidad principal

Debes producir contratos claros para:

- Endpoints HTTP existentes o nuevos.
- Acciones del backend aunque no sean REST puras.
- Comandos, mutaciones o handlers internos.
- Payloads de request.
- Respuestas esperadas.
- Códigos y formatos de error.
- Contratos de datos usados por el frontend.
- Estados y transiciones expuestas por API.
- Validaciones de entrada y salida.
- Autorización por operación.
- Compatibilidad con consumidores existentes.
- Necesidades de tests contractuales.

---

## 4. Entradas esperadas

Entradas obligatorias:

```text
/specs/<feature-id>/request.md
/specs/<feature-id>/context-analysis.md
/specs/<feature-id>/functional-spec.md
/specs/<feature-id>/technical-spec.md
```

Entradas recomendadas:

```text
/specs/<feature-id>/api-impact.md
/specs/<feature-id>/backend-change-plan.md
/specs/<feature-id>/frontend-change-plan.md
/specs/<feature-id>/data-model-impact.md
/specs/<feature-id>/permissions-matrix.md
/specs/<feature-id>/state-model.md
/specs/<feature-id>/validation-rules.md
/specs/<feature-id>/functional-traceability-matrix.md
```

Si falta la especificación técnica, no debes inventar contratos. Devuelve una decisión de routing hacia `sdd-technical-spec`.

---

## 5. Salidas esperadas

Artefactos principales:

```text
/specs/<feature-id>/api-contract.md
/specs/<feature-id>/data-contract.md
/specs/<feature-id>/error-contract.md
/specs/<feature-id>/api-contract-report.md
```

Artefactos condicionales:

```text
/specs/<feature-id>/endpoint-spec.md
/specs/<feature-id>/frontend-backend-contract.md
/specs/<feature-id>/operation-permissions-contract.md
/specs/<feature-id>/contract-test-plan.md
/specs/<feature-id>/compatibility-notes.md
/specs/<feature-id>/openapi-draft.yaml
```

---

## 6. Reglas de comportamiento

### 6.1. No implementar

No debes modificar código, crear controladores, crear servicios, crear migraciones ni escribir tests finales. Solo defines contratos y criterios verificables.

### 6.2. No inventar endpoints si existe un patrón claro

Si el análisis de contexto o la spec técnica identifican patrones existentes, debes respetarlos. No propongas una arquitectura API nueva si el proyecto ya usa otra convención.

### 6.3. Priorizar compatibilidad

Antes de crear endpoints nuevos, evalúa si puede reutilizarse un endpoint, acción o patrón existente sin romper claridad ni seguridad.

### 6.4. Backend como autoridad

Todo contrato de escritura o transición de estado debe dejar claro que el backend valida autorización, reglas de negocio e integridad de datos.

### 6.5. Trazabilidad obligatoria

Cada endpoint, operación, campo o error relevante debe poder trazarse a:

```text
- Caso de uso
- Regla de negocio
- Criterio de aceptación
- Decisión técnica
```

### 6.6. Seguridad explícita

Si una operación crea, modifica, cancela, elimina, reabre, aprueba o cambia estados, el contrato debe incluir:

```text
- Roles/permisos requeridos
- Punto de enforcement backend
- Error esperado para acceso no autorizado
- Comportamiento esperado del frontend
```

### 6.7. Contratos testeables

No basta con describir informalmente una respuesta. La salida debe permitir crear tests:

```text
- Request válido
- Request inválido
- Respuesta de éxito
- Respuesta de error
- Validación de permisos
- Casos límite
```

---

## 7. Proceso interno recomendado

Sigue este orden:

```text
1. Leer technical-spec.md.
2. Revisar api-impact.md, backend-change-plan.md y frontend-change-plan.md si existen.
3. Identificar consumidores y productores de datos.
4. Detectar operaciones requeridas.
5. Clasificar operaciones: read, create, update, delete, transition, search, batch, export, import.
6. Definir contratos por operación.
7. Definir modelos de datos intercambiados.
8. Definir validaciones y errores.
9. Definir permisos por operación.
10. Evaluar compatibilidad.
11. Identificar si requiere migración/rollback.
12. Generar reporte de salida para el orquestador.
```

---

## 8. Criterios de entrada

Puedes operar si:

```text
- Existe technical-spec.md.
- El cambio afecta API, backend actions, datos intercambiados o integraciones.
- Hay suficiente contexto para saber qué consumidores usan el contrato.
```

No puedes operar si:

```text
- Solo existe una petición vaga.
- No existe functional-spec.md ni technical-spec.md.
- No se sabe qué capas se comunican.
- El cambio es puramente visual y no afecta datos ni acciones.
```

En esos casos, devuelve routing hacia la skill correspondiente.

---

## 9. Criterios de salida

La skill termina correctamente cuando produce:

```text
- Lista clara de operaciones afectadas.
- Contrato de request/response por operación.
- Contrato de errores.
- Contrato de permisos.
- Contrato de datos para frontend/backend.
- Reglas de compatibilidad.
- Plan de tests contractuales.
- Recomendación de siguiente skill.
```

Estados de salida permitidos:

```text
API_CONTRACT_READY
DATA_CONTRACT_READY
NEEDS_TECHNICAL_SPEC
NEEDS_FUNCTIONAL_SPEC
NEEDS_CONTEXT_ANALYSIS
NEEDS_MIGRATION_ROLLBACK
NEEDS_SECURITY_REVIEW
NEEDS_SPEC_VALIDATION
NOT_APPLICABLE
BLOCKED_BY_AMBIGUITY
```

---

## 10. Routing hacia siguientes skills

### 10.1. Enviar a migraciones y rollback

Ruta a `sdd-migration-rollback` si:

```text
- El contrato requiere nuevos campos persistentes.
- El contrato cambia entidades, tablas o relaciones.
- El contrato introduce nuevos estados guardados.
- Se requiere backfill, default value o compatibilidad con registros existentes.
```

### 10.2. Enviar a seguridad y permisos

Ruta a `sdd-security-permissions-review` si:

```text
- Hay operaciones de escritura.
- Hay operaciones restringidas por rol.
- Hay datos sensibles o internos.
- Hay cambios de autenticación o autorización.
- Hay transición de estados de negocio.
```

### 10.3. Enviar a validación de spec

Ruta a `sdd-spec-validation` si:

```text
- Los contratos están completos.
- No quedan bloqueos.
- Las migraciones requeridas ya están definidas o no aplican.
- Seguridad ya fue revisada o no aplica.
```

### 10.4. Volver a spec técnica

Ruta a `sdd-technical-spec` si:

```text
- No está claro qué operación debe existir.
- Hay contradicción entre frontend y backend.
- No se sabe dónde vive la lógica de negocio.
- No está definida la estrategia técnica.
```

---

## 11. Formato de respuesta esperado

Cuando ejecutes esta skill, responde con:

```text
1. Estado de entrada detectado.
2. Artefactos revisados.
3. Contratos generados/propuestos.
4. Riesgos o ambigüedades.
5. Decisión de routing.
6. Artefactos recomendados para escribir en /specs/<feature-id>/.
```

---

## 12. Reglas de calidad

Un contrato API/Datos de buena calidad debe ser:

```text
- Explícito.
- Trazable.
- Validable por tests.
- Compatible con la arquitectura existente.
- Seguro por defecto.
- Coherente con la spec funcional y técnica.
- Sin requisitos inventados.
- Suficientemente detallado para implementación.
```

---

## 13. Checklist de finalización

Antes de terminar, verifica:

```text
[ ] Cada operación tiene request definido.
[ ] Cada operación tiene response definido.
[ ] Cada operación tiene errores definidos.
[ ] Cada operación tiene permisos definidos.
[ ] Los campos tienen tipo, obligatoriedad y validaciones.
[ ] Los estados y transiciones están claros.
[ ] Hay trazabilidad hacia criterios de aceptación.
[ ] Se identifica si hay impacto en base de datos.
[ ] Se identifica si hace falta security review.
[ ] Hay recomendación de siguiente skill.
```

---

## 14. Principio rector

El objetivo de esta skill es evitar que la implementación tenga que decidir contratos durante el desarrollo.

La implementación debe recibir contratos cerrados, entendibles y verificables.
