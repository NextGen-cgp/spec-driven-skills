# Ejemplo de routing: parámetro cancelado en análisis

## Petición original

> En los registros de análisis se necesita cancelar un parámetro completo para que no sea obligatorio rellenarlo y no compute en el resultado global del análisis. Debe poder reabrirse después.

# Routing SDD

## 1. Clasificación de la petición

- Tipo principal: feature
- Tipos secundarios: ui_change, database_change, business_rules, test_required
- Riesgo estimado: alto
- Módulos afectados probables:
  - UI de registro de análisis
  - Estado de parámetros
  - Cálculo global del análisis
  - Persistencia de muestras/parámetros
  - Validaciones de completado
  - Tests de reglas de negocio

## 2. Estado actual detectado

- Estado: INTAKE
- Artefactos existentes:
  - request.md
- Artefactos faltantes:
  - context-analysis.md
  - user-story.md
  - acceptance-criteria.md
  - functional-spec.md
  - technical-spec.md
  - migration-plan.md
  - rollback-plan.md
  - test-plan.md
  - spec-validation-report.md
- Bloqueos:
  - No está definido si el estado cancelado se almacena en la entidad de parámetro del análisis, muestra o relación intermedia.
  - No está definido cómo debe afectar exactamente a validaciones existentes de análisis completo.

## 3. Decisión de routing

- Siguiente skill: context-analysis
- Motivo: el cambio afecta a lógica crítica de negocio, estado visual, persistencia y cálculo global. Hay que revisar primero cómo se modelan actualmente análisis, parámetros y muestras.
- Entrada que debe recibir:
  - Petición original.
  - Módulos actuales de análisis.
  - Entidades/tablas de análisis, parámetros y muestras.
  - Lógica actual de cálculo global.
- Salida esperada:
  - context-analysis.md

## 4. Gates aplicables

- Gate de implementación: bloqueado hasta spec validada.
- Gate de seguridad: no obligatorio salvo que afecte permisos por rol.
- Gate de base de datos: obligatorio si se añade nuevo estado persistente.
- Gate de API: probable si hay endpoints de cancelar/reabrir.
- Gate de test: obligatorio.
- Gate de PR: obligatorio.

## 5. Flujo recomendado

1. context-analysis
2. user-story-enrichment
3. functional-spec
4. technical-spec
5. api-contract, si hay endpoints
6. migration-rollback, si hay cambio de persistencia
7. spec-validation
8. implementation
9. test
10. final-review
11. documentation-pr

## 6. Acción inmediata

Ejecutar `context-analysis`.
