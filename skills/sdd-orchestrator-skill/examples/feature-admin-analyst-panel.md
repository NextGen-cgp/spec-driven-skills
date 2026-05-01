# Ejemplo de routing: panel para admins y analistas

## Petición original

> Se requiere un nuevo panel para admins y analistas con permisos diferentes en función del rol. El rol de admin tendrá un panel de modificación de datos, donde podrá dar de alta nuevos planes de calidad y parámetros, modificar los planes y parámetros existentes, y con función de búsqueda. Los analistas podrán buscar planes de calidad y parámetros, pero sin capacidad de editarlos ni crear nuevos.

# Routing SDD

## 1. Clasificación de la petición

- Tipo principal: feature
- Tipos secundarios: permissions, security, ui_change, api_change
- Riesgo estimado: alto
- Módulos afectados probables:
  - Frontend
  - Rutas protegidas
  - Backend
  - Autorización por rol
  - Planes de calidad
  - Parámetros
  - Componentes de búsqueda
  - Formularios de alta/edición

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
  - api-contract.md
  - security-review.md
  - spec-validation-report.md
- Bloqueos:
  - No está definido todavía el contrato exacto de permisos por endpoint.
  - No está confirmado si la autorización actual se aplica solo en frontend o también en backend.

## 3. Decisión de routing

- Siguiente skill: context-analysis
- Motivo: el cambio afecta a UI, backend, permisos y posibles endpoints. Antes de enriquecer la historia hay que entender arquitectura, patrones visuales y sistema actual de roles.
- Entrada que debe recibir:
  - Petición original.
  - Estructura del repo.
  - Archivos de autenticación/autorización.
  - Componentes actuales de planes y parámetros.
- Salida esperada:
  - context-analysis.md

## 4. Gates aplicables

- Gate de implementación: bloqueado hasta spec validada.
- Gate de seguridad: obligatorio.
- Gate de base de datos: pendiente de confirmar.
- Gate de API: probable.
- Gate de test: obligatorio.
- Gate de PR: obligatorio.

## 5. Flujo recomendado

1. context-analysis
2. user-story-enrichment
3. functional-spec
4. technical-spec
5. api-contract
6. security-permissions-review
7. spec-validation
8. implementation
9. test
10. security-permissions-review
11. final-review
12. documentation-pr

## 6. Acción inmediata

Ejecutar `context-analysis`.
