# Context Analysis: admin-analyst-panel

## 1. Resumen ejecutivo

Estado del análisis: `CONTEXT_ANALYSIS_PARTIAL`

Nivel de confianza global: `medio`

La petición introduce nuevas capacidades diferenciadas por rol para administradores y analistas. El cambio probablemente afecta a UI, rutas protegidas, lógica de permisos, componentes de búsqueda, formularios de alta/edición y endpoints de planes/parámetros. Requiere especial atención a que las restricciones no queden solo en frontend.

---

## 2. Petición analizada

Petición original:

```text
Crear un nuevo panel para admins y analistas con permisos diferentes. Admin puede modificar, crear y buscar planes/parámetros. Analista puede buscar pero no editar ni crear.
```

Tipo de cambio estimado:

```text
feature
```

---

## 3. Stack detectado

| Área | Evidencia observada | Conclusión | Confianza |
|---|---|---|---|
| Frontend | No confirmado en este ejemplo | Aplicación web con patrón visual existente | media |
| Backend | No confirmado en este ejemplo | Debe existir capa de datos/API para planes/parámetros | baja |
| Auth/Roles | La petición menciona admin/analista | Requiere autorización por rol | alta |

---

## 4. Arquitectura y estructura del repositorio

No confirmado en este ejemplo. La skill real debe inspeccionar el repositorio antes de cerrar este apartado.

---

## 5. Patrones relevantes identificados

### 5.1. Frontend/UI

Se debe buscar el patrón visual existente de dashboards, cards, formularios, tablas, filtros y navegación.

### 5.2. Backend/API

Se deben identificar endpoints o servicios existentes para planes de calidad y parámetros.

### 5.3. Autenticación, roles y permisos

El cambio requiere validación en backend, no solo ocultación de botones en frontend.

---

## 6. Módulos y archivos potencialmente afectados

| Área | Archivos candidatos | Motivo | Confianza |
|---|---|---|---|
| Frontend/UI | Rutas de administración y búsqueda | Nuevas secciones diferenciadas por rol | alta |
| Backend/API | Servicios de planes y parámetros | Control de alta, edición y lectura | alta |
| Auth/Permisos | Guards/middleware de roles | Separar permisos admin/analista | alta |
| Tests | Tests funcionales y autorización | Validar restricciones por rol | alta |

---

## 7. Tests existentes relacionados

No se han detectado tests relacionados en este ejemplo. La skill real debe inspeccionar el repo.

---

## 8. Dependencias y contratos relevantes

Probablemente será necesario definir contrato para:

```text
- Búsqueda de planes.
- Búsqueda de parámetros.
- Alta de planes.
- Edición de planes.
- Alta de parámetros.
- Edición de parámetros.
- Respuestas 403 para analistas en operaciones de escritura.
```

---

## 9. Riesgos técnicos

| Riesgo | Severidad | Motivo | Mitigación sugerida |
|---|---|---|---|
| Permisos aplicados solo en UI | alta | Un analista podría invocar endpoints directamente | Validar autorización en backend |
| Duplicar componentes existentes | media | Puede romper coherencia visual | Reutilizar patrones UI actuales |
| Falta de tests por rol | alta | Riesgo de regresiones de seguridad | Tests de autorización |

---

## 10. Preguntas abiertas

```text
- ¿Existen ya roles ADMIN y ANALYST en el sistema?
- ¿Los planes y parámetros tienen endpoints separados?
- ¿La búsqueda debe ser común o tener filtros distintos por rol?
```

---

## 11. Recomendación para el Orquestador

Estado recomendado:

```text
CONTEXT_ANALYSIS_PARTIAL
```

Siguiente skill recomendada:

```text
security-permissions-review
```

Motivo:

```text
El cambio afecta directamente a roles y permisos. Conviene revisar reglas de autorización antes de cerrar la spec técnica.
```

Bloqueos:

```text
- Falta inspección real del repositorio en este ejemplo.
```
