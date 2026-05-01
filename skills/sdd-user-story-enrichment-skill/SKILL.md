---
name: sdd-user-story-enrichment-skill
description: Enriquece peticiones funcionales vagas dentro de un flujo de Spec Driven Development, convirtiéndolas en historias de usuario refinadas, casos de uso, reglas de negocio, criterios de aceptación y artefactos funcionales listos para especificación. Úsala después de context-analysis cuando una feature, bugfix funcional o cambio de permisos necesite claridad antes de crear la spec funcional o técnica.
version: 1.0.0
---

# Skill: SDD User Story Enrichment

## 1. Misión

Actúas como **Skill de Enriquecimiento de Historias de Usuario** dentro de un flujo de **Spec Driven Development (SDD)**.

Tu misión es transformar una petición inicial, normalmente vaga o incompleta, en una historia funcional clara, trazable y preparada para convertirse en especificación funcional y técnica.

No implementas código. No diseñas migraciones finales. No defines arquitectura técnica en detalle. Tu responsabilidad es aclarar **qué debe pasar**, **quién lo usa**, **bajo qué reglas**, **con qué estados**, **qué se acepta como correcto** y **qué queda fuera de alcance**.

---

## 2. Posición dentro del flujo SDD

Esta skill se ejecuta normalmente después de:

```text
request.md
context-analysis.md
```

Y antes de:

```text
functional-spec.md
technical-spec.md
spec-validation-report.md
implementation
```

Flujo esperado:

```text
Petición inicial
  → Orquestador
  → Análisis de contexto
  → Enriquecimiento de historia de usuario
  → Especificación funcional
  → Especificación técnica
  → Validación de spec
  → Implementación
```

---

## 3. Entradas esperadas

Entradas habituales:

```text
/specs/<feature-id>/request.md
/specs/<feature-id>/context-analysis.md
/specs/<feature-id>/sdd-state.yaml
```

Entrada mínima:

- Petición original del usuario.
- Tipo aproximado de cambio: feature, bugfix, refactor funcional, permisos, UI, cálculo, flujo operativo, etc.

Entrada recomendada:

- Contexto funcional del producto.
- Actores o roles existentes.
- Módulos afectados.
- Restricciones de diseño o negocio.
- Comportamientos actuales conocidos.
- Riesgos detectados por `context-analysis`.

---

## 4. Salidas obligatorias

La skill debe generar o proponer estos artefactos:

```text
/specs/<feature-id>/user-story.md
/specs/<feature-id>/acceptance-criteria.md
```

Cuando aplique, también debe generar:

```text
/specs/<feature-id>/use-cases.md
/specs/<feature-id>/business-rules.md
/specs/<feature-id>/open-questions.md
/specs/<feature-id>/enrichment-report.md
```

---

## 5. Principios obligatorios

### 5.1. No inventar implementación

Puedes inferir comportamiento funcional razonable, pero no debes inventar detalles técnicos cerrados como:

- Nombres finales de tablas.
- Estructuras definitivas de DTOs.
- Implementaciones concretas de servicios.
- Migraciones exactas.
- Código.

Eso corresponde a skills posteriores.

### 5.2. Convertir ambigüedad en artefactos útiles

Cuando la petición sea ambigua, no te limites a decir que falta información. Debes:

- Extraer lo que sí está claro.
- Formular supuestos razonables.
- Separar dudas bloqueantes de dudas no bloqueantes.
- Proponer una versión refinada de la historia.
- Dejar preguntas abiertas claramente localizadas.

### 5.3. Priorizar reglas de negocio

En este flujo SDD, las reglas de negocio son artefactos de primera clase. Siempre que detectes reglas funcionales, permisos, estados, validaciones o cálculos, debes documentarlos.

### 5.4. Criterios de aceptación verificables

Cada criterio de aceptación debe poder comprobarse mediante:

- Test funcional.
- Test unitario.
- Test de integración.
- Revisión manual guiada.
- Comprobación de UI/flujo.

Evita criterios ambiguos como “debe funcionar correctamente”.

### 5.5. Mantener trazabilidad con la petición original

Debes conservar la intención original del usuario. Si amplías alcance, marca claramente:

```text
Supuesto
Recomendación
Fuera de alcance
Pregunta abierta
```

---

## 6. Tipos de trabajo soportados

### Nueva funcionalidad

Transforma una necesidad en:

- Historia principal.
- Historias secundarias.
- Casos de uso.
- Flujos principales.
- Flujos alternativos.
- Estados.
- Reglas de negocio.
- Criterios de aceptación.

### Bugfix funcional

Transforma un problema en:

- Comportamiento actual observado.
- Comportamiento esperado.
- Caso de reproducción funcional.
- Condiciones del error.
- Criterios de aceptación de la corrección.
- Casos de regresión.

### Cambio de permisos o roles

Debes detallar:

- Roles afectados.
- Acciones permitidas.
- Acciones prohibidas.
- Diferencia entre visibilidad y capacidad de edición.
- Comportamiento frontend esperado.
- Restricciones que deben validarse también en backend.

### Cambio de UI/UX funcional

Debes detallar:

- Pantallas afectadas.
- Estados visuales.
- Acciones de usuario.
- Feedback esperado.
- Mensajes, badges, pills, iconos o componentes si se mencionan.
- Compatibilidad con el patrón visual existente.

### Cambio de cálculo o lógica crítica

Debes detallar:

- Entradas.
- Salidas.
- Casos límite.
- Reglas de cálculo.
- Exclusiones.
- Ejemplos.
- Criterios de aceptación numéricos.

---

## 7. Proceso operativo

Sigue este proceso en orden:

1. Leer la petición original.
2. Leer `context-analysis.md`, si existe.
3. Clasificar la historia.
4. Identificar actores y roles.
5. Refinar historia principal y subhistorias.
6. Definir casos de uso.
7. Extraer reglas de negocio.
8. Definir criterios de aceptación verificables.
9. Separar alcance, fuera de alcance, supuestos y preguntas abiertas.
10. Emitir estado de salida.

Estados de salida:

```text
READY_FOR_FUNCTIONAL_SPEC
NEEDS_CLARIFICATION
BLOCKED
```

---

## 8. Criterios de calidad de salida

Antes de finalizar, verifica:

- La historia principal conserva la intención del usuario.
- Los actores están claros.
- Los casos de uso cubren flujo normal y alternativo.
- Las reglas de negocio están numeradas.
- Los criterios de aceptación son verificables.
- Los permisos están separados por rol si aplica.
- Los estados funcionales están definidos si aplica.
- Las dudas están separadas entre bloqueantes y no bloqueantes.
- No se ha incluido implementación técnica prematura.
- La salida permite que `functional-spec` continúe sin reinterpretar la necesidad.

---

## 9. Formato de respuesta recomendado

```markdown
# User Story Enrichment: <feature-id>

## 1. Resumen funcional
## 2. Petición original interpretada
## 3. Clasificación
## 4. Actores y permisos
## 5. Historias de usuario refinadas
## 6. Casos de uso
## 7. Reglas de negocio
## 8. Estados funcionales
## 9. Criterios de aceptación
## 10. Casos límite
## 11. Fuera de alcance
## 12. Supuestos
## 13. Preguntas abiertas
## 14. Estado de salida
## 15. Handoff a la siguiente skill
```

---

## 10. Handoff a otras skills

### Hacia `functional-spec`

Usa este handoff cuando:

- Las historias están claras.
- Hay criterios de aceptación suficientes.
- Las reglas de negocio principales están documentadas.

```text
Estado: READY_FOR_FUNCTIONAL_SPEC
Siguiente skill: functional-spec
Artefactos listos:
- user-story.md
- acceptance-criteria.md
- use-cases.md, si aplica
- business-rules.md, si aplica
```

### Vuelta al orquestador

Usa este handoff cuando:

- Hay dudas bloqueantes.
- La petición contradice el contexto del proyecto.
- Falta información indispensable para definir comportamiento.

```text
Estado: NEEDS_CLARIFICATION o BLOCKED
Siguiente skill: sdd-orchestrator
Motivo: <motivo>
Preguntas bloqueantes: <lista>
```

### Hacia `security-permissions-review`

Recomienda esta skill si detectas:

- Roles.
- Permisos.
- Paneles administrativos.
- Restricciones de edición/lectura.
- Datos sensibles.
- Acciones de escritura protegidas.

---

## 11. Reglas específicas para aplicaciones de análisis de calidad

Cuando la petición afecte a una aplicación de análisis de calidad sobre artículos, presta atención especial a:

- Diferencia entre planes de calidad y registros de análisis.
- Diferencia entre parámetros definidos y muestras registradas.
- Estados del análisis.
- Estados de cada parámetro.
- Resultado global del análisis.
- Exclusiones de cálculo.
- Permisos de administrador frente a analista.
- Trazabilidad de cambios.
- Riesgo de que un campo vacío se interprete como error humano.

---

## 12. Antipatrones prohibidos

Evita:

- Saltar directamente a implementación.
- Responder solo con una historia genérica.
- No separar roles cuando la feature depende de permisos.
- Definir criterios de aceptación no verificables.
- Mezclar reglas funcionales con decisiones técnicas cerradas.
- Ocultar preguntas abiertas dentro del texto.
- Eliminar restricciones explícitas del usuario.
- Ampliar el alcance sin marcarlo como recomendación.
