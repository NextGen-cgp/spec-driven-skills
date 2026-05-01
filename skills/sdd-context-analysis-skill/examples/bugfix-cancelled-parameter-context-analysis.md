# Context Analysis: cancelled-analysis-parameter

## 1. Resumen ejecutivo

Estado del análisis: `CONTEXT_ANALYSIS_PARTIAL`

Nivel de confianza global: `medio`

La petición afecta al flujo de registro de análisis, el estado de parámetros, la UI de muestras y la lógica de cálculo global. Es probable que requiera cambios tanto en frontend como en backend, además de tests sobre reglas de negocio.

---

## 2. Petición analizada

Petición original:

```text
Permitir cancelar un parámetro de análisis para que no sea obligatorio ni compute en el resultado global, con opción de reapertura.
```

Tipo de cambio estimado:

```text
feature
```

---

## 3. Stack detectado

No confirmado en este ejemplo. La skill real debe inspeccionar el repositorio.

---

## 4. Arquitectura y estructura del repositorio

No confirmado en este ejemplo.

---

## 5. Patrones relevantes identificados

### 5.1. Frontend/UI

Debe revisarse el patrón actual de cards de parámetros, pills de estado, cajas de muestra e iconografía.

### 5.2. Backend/API

Debe identificarse dónde se calcula el resultado global del análisis y dónde se validan parámetros obligatorios.

### 5.3. Datos y persistencia

Hay que comprobar si los estados de parámetro están persistidos y si existe una tabla intermedia de análisis-parámetro o muestra.

---

## 6. Módulos y archivos potencialmente afectados

| Área | Archivos candidatos | Motivo | Confianza |
|---|---|---|---|
| Frontend/UI | Componentes de registro de análisis | Iconos cancelar/reabrir y estado visual | alta |
| Backend/API | Servicios de cálculo de análisis | Excluir cancelados del resultado global | alta |
| Base de datos | Modelo de estado de parámetro | Persistir estado cancelado si no existe | media |
| Tests | Tests de cálculo global | Validar que cancelados no computan | alta |

---

## 7. Tests existentes relacionados

No se han detectado tests relacionados en este ejemplo.

---

## 8. Dependencias y contratos relevantes

Contratos potencialmente afectados:

```text
- Estado del parámetro en análisis.
- Endpoint de actualización de parámetro.
- Cálculo del resultado global.
- Validación de completitud del análisis.
```

---

## 9. Riesgos técnicos

| Riesgo | Severidad | Motivo | Mitigación sugerida |
|---|---|---|---|
| Cancelar sin persistir estado | alta | Se perdería la decisión al recargar | Confirmar modelo de datos |
| Excluir incorrectamente del cálculo | alta | Resultado global erróneo | Tests de cálculo |
| Campo vacío confundido con cancelado | media | Puede ocultar errores de analista | Estado explícito CANCELLED |

---

## 10. Preguntas abiertas

```text
- ¿El estado del parámetro se guarda por análisis o por muestra?
- ¿Existe ya un enum de estados?
- ¿El parámetro cancelado debe aparecer en detalle histórico?
```

---

## 11. Recomendación para el Orquestador

Estado recomendado:

```text
CONTEXT_ANALYSIS_PARTIAL
```

Siguiente skill recomendada:

```text
user-story-enrichment
```

Motivo:

```text
La necesidad funcional está clara en alto nivel, pero requiere definir flujos, estados, criterios de aceptación y reglas de negocio antes de especificar técnicamente.
```

Bloqueos:

```text
- Falta inspección real del repositorio en este ejemplo.
```
