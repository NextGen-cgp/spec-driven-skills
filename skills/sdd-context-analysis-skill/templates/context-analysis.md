# Context Analysis: <feature-name>

## 1. Resumen ejecutivo

Estado del análisis: `<CONTEXT_ANALYSIS_READY | CONTEXT_ANALYSIS_PARTIAL | NEEDS_MORE_CONTEXT | BLOCKED_BY_MISSING_REPOSITORY_ACCESS>`

Nivel de confianza global: `<alto | medio | bajo>`

Resumen breve:

```text
<Resumen de 3-6 líneas sobre el contexto detectado y el impacto estimado del cambio.>
```

---

## 2. Petición analizada

Petición original:

```text
<Pegar o resumir la petición original del usuario.>
```

Tipo de cambio estimado:

```text
<feature | bugfix | refactor | security | docs | test-only | architecture>
```

---

## 3. Stack detectado

| Área | Evidencia observada | Conclusión | Confianza |
|---|---|---|---|
| Lenguaje | `<archivo>` | `<tecnología>` | `<alta/media/baja>` |
| Frontend | `<archivo>` | `<framework>` | `<alta/media/baja>` |
| Backend | `<archivo>` | `<framework>` | `<alta/media/baja>` |
| Base de datos | `<archivo>` | `<DB>` | `<alta/media/baja>` |
| ORM / Datos | `<archivo>` | `<ORM>` | `<alta/media/baja>` |
| Auth | `<archivo>` | `<sistema>` | `<alta/media/baja>` |
| Testing | `<archivo>` | `<herramienta>` | `<alta/media/baja>` |
| Deploy | `<archivo>` | `<mecanismo>` | `<alta/media/baja>` |

---

## 4. Arquitectura y estructura del repositorio

| Ruta | Propósito observado | Evidencia | Confianza |
|---|---|---|---|
| `<ruta>` | `<descripción>` | `<archivo/patrón>` | `<alta/media/baja>` |

Notas relevantes:

```text
<Observaciones sobre separación frontend/backend, capas, módulos, features o servicios.>
```

---

## 5. Patrones relevantes identificados

### 5.1. Frontend/UI

```text
<Patrones de componentes, rutas, formularios, estado, estilos, diseño visual.>
```

### 5.2. Backend/API

```text
<Patrones de controladores, servicios, rutas, validaciones, errores.>
```

### 5.3. Datos y persistencia

```text
<Patrones de modelos, entidades, repositorios, migraciones, queries.>
```

### 5.4. Autenticación, roles y permisos

```text
<Patrones de guards, middleware, claims, roles o autorización.>
```

### 5.5. Tests

```text
<Patrones de tests unitarios, integración, e2e, fixtures o mocks.>
```

---

## 6. Módulos y archivos potencialmente afectados

| Área | Archivos candidatos | Motivo | Confianza |
|---|---|---|---|
| `<frontend/backend/db/auth/tests>` | `<ruta>` | `<motivo>` | `<alta/media/baja>` |

---

## 7. Tests existentes relacionados

| Ruta | Tipo de test | Relación con el cambio | Confianza |
|---|---|---|---|
| `<ruta>` | `<unit/integration/e2e>` | `<descripción>` | `<alta/media/baja>` |

Si no se localizan tests relacionados:

```text
No se han detectado tests relacionados en el análisis actual.
```

---

## 8. Dependencias y contratos relevantes

```text
<APIs, contratos frontend/backend, entidades compartidas, modelos, esquemas, variables de entorno, colas, servicios externos o integraciones.>
```

---

## 9. Riesgos técnicos

| Riesgo | Severidad | Motivo | Mitigación sugerida |
|---|---|---|---|
| `<riesgo>` | `<baja/media/alta/crítica>` | `<motivo>` | `<mitigación>` |

---

## 10. Preguntas abiertas

```text
- <Pregunta 1, si aplica>
- <Pregunta 2, si aplica>
```

Si no hay preguntas abiertas:

```text
No hay preguntas abiertas bloqueantes detectadas en esta fase.
```

---

## 11. Recomendación para el Orquestador

Estado recomendado:

```text
<CONTEXT_ANALYSIS_READY | CONTEXT_ANALYSIS_PARTIAL | NEEDS_MORE_CONTEXT | BLOCKED_BY_MISSING_REPOSITORY_ACCESS>
```

Siguiente skill recomendada:

```text
<user-story-enrichment | technical-specification | api-contract-specification | migration-rollback-planning | security-permissions-review | blocked>
```

Motivo:

```text
<Explicación breve de por qué se recomienda esa siguiente skill.>
```

Bloqueos:

```text
- <bloqueo o "Ninguno">
```
