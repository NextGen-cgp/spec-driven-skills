---
name: sdd-context-analysis-skill
description: Skill de análisis de contexto para flujos Spec Driven Development. Se encarga de inspeccionar el proyecto, identificar stack, arquitectura, convenciones, módulos afectados, dependencias y riesgos antes de que otras skills generen historias refinadas, specs técnicas o implementen cambios.
version: 1.0.0
status: production-ready
owner: sdd-orchestrator
---

# Skill: SDD Context Analysis

## 1. Propósito

Esta skill analiza el contexto real del proyecto antes de que el flujo SDD avance hacia refinamiento funcional, especificación técnica o implementación.

Su objetivo es evitar que las siguientes skills trabajen sobre suposiciones. Debe proporcionar una visión clara y verificable de:

- Stack tecnológico detectado.
- Estructura del repositorio.
- Patrones de arquitectura existentes.
- Módulos, carpetas y archivos potencialmente afectados.
- Convenciones de código, nombres, rutas, tests y documentación.
- Riesgos de integración.
- Artefactos previos relevantes dentro de `/specs`.
- Recomendación de routing para el orquestador.

Esta skill **no implementa código**, **no modifica archivos de aplicación** y **no toma decisiones funcionales finales**. Su salida sirve como base para las skills posteriores.

---

## 2. Cuándo debe invocarse

El orquestador debe invocar esta skill cuando:

1. Llega una nueva petición funcional, técnica, bugfix, refactor o cambio de seguridad.
2. No existe todavía un análisis de contexto para la feature actual.
3. Existen dudas sobre qué partes del repo están afectadas.
4. La implementación requiere entender patrones previos del proyecto.
5. La petición menciona roles, permisos, backend, frontend, base de datos, tests, rutas, UI, API o migraciones.
6. Hay que validar si ya existen artefactos SDD relacionados.

También puede reinvocarse si:

- Cambia el alcance de la petición.
- La validación de spec detecta una laguna de contexto.
- La implementación encuentra una discrepancia entre la spec y el código real.
- La review final detecta que se ignoró un patrón del proyecto.

---

## 3. Entradas esperadas

La skill puede recibir una o varias de estas entradas:

```text
/specs/<feature-name>/request.md
/specs/<feature-name>/sdd-state.yaml
/specs/<feature-name>/user-story.md
/specs/<feature-name>/technical-spec.md
```

Además, debe analizar el repositorio del proyecto disponible en el workspace.

Entrada mínima recomendada:

```text
- Petición original del usuario.
- Nombre tentativo de la feature.
- Tipo de cambio estimado: feature, bugfix, refactor, security, docs, test-only, architecture.
```

---

## 4. Salidas obligatorias

La skill debe generar o actualizar el siguiente artefacto:

```text
/specs/<feature-name>/context-analysis.md
```

Opcionalmente, si el proyecto es grande o el cambio tiene impacto amplio, puede generar:

```text
/specs/<feature-name>/project-map.md
/specs/<feature-name>/impact-map.md
```

La salida principal debe incluir:

```text
- Resumen del contexto del proyecto.
- Stack detectado.
- Arquitectura observada.
- Convenciones relevantes.
- Módulos y archivos afectados.
- Dependencias relevantes.
- Tests existentes relacionados.
- Riesgos técnicos.
- Preguntas abiertas, si existen.
- Recomendación de routing para el orquestador.
```

---

## 5. Reglas obligatorias

### 5.1. No inventar arquitectura

Si no se encuentra evidencia en el repositorio, debe indicarse explícitamente:

```text
No confirmado en el repositorio actual.
```

No se deben asumir frameworks, rutas, modelos, endpoints ni patrones sin evidencia.

---

### 5.2. No modificar implementación

Esta skill puede proponer archivos candidatos, pero no debe modificar:

```text
/src
/app
/pages
/components
/server
/api
/db
/migrations
/tests
```

Solo puede crear o actualizar artefactos SDD dentro de:

```text
/specs/<feature-name>/
```

---

### 5.3. Separar hechos de inferencias

Toda conclusión debe clasificarse como:

```text
- Evidencia observada
- Inferencia razonable
- Riesgo
- Pendiente de confirmar
```

---

### 5.4. Priorizar patrones existentes

Cuando detecte varias formas posibles de resolver algo, debe priorizar:

```text
1. Patrones ya existentes en el proyecto.
2. Convenciones del framework usado.
3. Buenas prácticas generales.
```

---

### 5.5. Preparar a la siguiente skill

La salida debe ser útil para la skill posterior. Debe terminar siempre con una sección:

```text
## Recomendación para el Orquestador
```

Con uno de estos estados:

```text
READY_FOR_USER_STORY_REFINEMENT
READY_FOR_TECHNICAL_SPECIFICATION
NEEDS_MORE_CONTEXT
BLOCKED_BY_MISSING_REPOSITORY_ACCESS
```

---

## 6. Procedimiento de análisis

La skill debe seguir este orden:

### Paso 1: Leer artefactos SDD existentes

Buscar si existen:

```text
/specs/<feature-name>/request.md
/specs/<feature-name>/sdd-state.yaml
/specs/<feature-name>/context-analysis.md
/specs/<feature-name>/user-story.md
/specs/<feature-name>/technical-spec.md
```

Determinar si hay contexto previo reutilizable.

---

### Paso 2: Identificar stack del proyecto

Revisar archivos como:

```text
package.json
pnpm-lock.yaml
yarn.lock
package-lock.json
tsconfig.json
next.config.*
vite.config.*
astro.config.*
Dockerfile
docker-compose.yml
compose.yml
requirements.txt
pyproject.toml
pom.xml
build.gradle
Cargo.toml
go.mod
Gemfile
.env.example
README.md
```

Detectar:

```text
- Lenguaje principal.
- Framework frontend.
- Framework backend.
- ORM o capa de datos.
- Base de datos.
- Sistema de autenticación.
- Herramientas de test.
- Herramientas de lint/build.
- Mecanismo de despliegue.
```

---

### Paso 3: Mapear estructura del repositorio

Identificar carpetas principales:

```text
/app
/src
/pages
/components
/features
/modules
/server
/api
/routes
/controllers
/services
/repositories
/entities
/models
/db
/migrations
/tests
/specs
/docs
```

Describir para qué parece servir cada una.

---

### Paso 4: Detectar patrones existentes

Buscar patrones en:

```text
- Gestión de estado.
- Componentes UI.
- Servicios backend.
- Validaciones.
- Control de errores.
- Autorización por roles.
- Acceso a base de datos.
- Migraciones.
- Tests.
- Naming conventions.
```

Registrar ejemplos concretos de archivos si se identifican.

---

### Paso 5: Relacionar la petición con módulos afectados

A partir de la petición, detectar posibles áreas:

```text
- Frontend/UI
- Backend/API
- Base de datos
- Autenticación/autorización
- Cálculo o lógica de negocio
- Tests
- Documentación
- CI/CD
```

Para cada área, indicar:

```text
- Archivos candidatos.
- Nivel de confianza: alto, medio, bajo.
- Razón de afectación.
```

---

### Paso 6: Detectar riesgos técnicos

Identificar riesgos como:

```text
- Cambio en permisos o roles.
- Migraciones de base de datos.
- Alteración de lógica crítica.
- Ruptura de compatibilidad frontend/backend.
- Falta de tests existentes.
- Duplicidad de patrones.
- Deuda técnica relevante.
- Falta de documentación.
```

---

### Paso 7: Recomendar siguiente skill

La recomendación debe seguir estas reglas:

```text
Si la petición es vaga:
  route_to: user-story-enrichment

Si la petición ya está clara pero falta diseño técnico:
  route_to: technical-specification

Si afecta a API o contratos frontend/backend:
  route_to: api-contract-specification

Si afecta a base de datos:
  route_to: migration-rollback-planning

Si afecta a roles, permisos o autenticación:
  route_to: security-permissions-review

Si falta acceso suficiente al repo:
  route_to: blocked
```

---

## 7. Formato de salida requerido

La salida principal debe usar esta estructura:

```markdown
# Context Analysis: <feature-name>

## 1. Resumen ejecutivo

## 2. Petición analizada

## 3. Stack detectado

## 4. Arquitectura y estructura del repositorio

## 5. Patrones relevantes identificados

## 6. Módulos y archivos potencialmente afectados

## 7. Tests existentes relacionados

## 8. Dependencias y contratos relevantes

## 9. Riesgos técnicos

## 10. Preguntas abiertas

## 11. Recomendación para el Orquestador
```

---

## 8. Criterios de calidad

Una salida de esta skill se considera válida si:

```text
- No inventa detalles no observados.
- Diferencia hechos, inferencias y riesgos.
- Identifica claramente módulos afectados.
- Explica el nivel de confianza de cada afectación.
- Señala tests existentes o ausencia de ellos.
- Recomienda una siguiente skill concreta.
- Deja el contexto preparado para refinamiento o especificación técnica.
```

---

## 9. Estados posibles

La skill puede devolver uno de estos estados:

```text
CONTEXT_ANALYSIS_READY
CONTEXT_ANALYSIS_PARTIAL
NEEDS_MORE_CONTEXT
BLOCKED_BY_MISSING_REPOSITORY_ACCESS
```

### CONTEXT_ANALYSIS_READY

Hay suficiente contexto para seguir el flujo SDD.

### CONTEXT_ANALYSIS_PARTIAL

Se ha identificado parte del contexto, pero hay zonas con incertidumbre. Puede avanzar si el riesgo es bajo.

### NEEDS_MORE_CONTEXT

Faltan datos relevantes que impiden crear una spec fiable.

### BLOCKED_BY_MISSING_REPOSITORY_ACCESS

No se puede analizar porque no hay acceso al repo o a los archivos necesarios.

---

## 10. Integración con el Orquestador

El orquestador debe leer la sección:

```text
## 11. Recomendación para el Orquestador
```

Y actualizar:

```text
/specs/<feature-name>/sdd-state.yaml
```

Ejemplo:

```yaml
current_state: CONTEXT_ANALYSIS_READY
last_completed_skill: sdd-context-analysis
recommended_next_skill: user-story-enrichment
blocking_issues: []
required_artifacts:
  - /specs/<feature-name>/context-analysis.md
```

---

## 11. Anti-patrones prohibidos

Esta skill no debe:

```text
- Implementar cambios.
- Crear migraciones.
- Crear componentes UI.
- Escribir tests.
- Decidir reglas de negocio no indicadas.
- Saltarse el análisis de contexto por asumir stack conocido.
- Generar una spec técnica completa sin pasar por la skill correspondiente.
- Marcar READY_FOR_IMPLEMENTATION.
```

---

## 12. Principio rector

```text
Primero entender el sistema real; después especificar; solo entonces implementar.
```
