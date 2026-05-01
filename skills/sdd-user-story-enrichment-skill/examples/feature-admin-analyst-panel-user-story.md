# User Story Enrichment: feature-admin-analyst-panel

## 1. Resumen funcional

Se necesita crear un nuevo panel diferenciado por roles para que los usuarios administradores puedan gestionar planes de calidad y parámetros, mientras que los analistas puedan consultar la misma información sin capacidad de creación ni edición.

La funcionalidad debe mantener el patrón visual actual de la aplicación y respetar la separación de permisos entre administración y análisis.

## 2. Petición original interpretada

```text
Crear un nuevo panel para admins y analistas con permisos diferentes según rol. El rol admin podrá dar de alta nuevos planes de calidad y parámetros, modificar los existentes y buscar. El rol analista podrá buscar planes y parámetros, pero no crear ni editar. Las nuevas secciones deben seguir el patrón visual de la web.
```

## 3. Clasificación

- Tipo de cambio: `feature`, `permissions`, `ui_change`, `workflow_change`
- Riesgo funcional: `high`
- Motivo del riesgo: afecta a permisos, operaciones de escritura y gestión de datos maestros del sistema.
- Módulos afectados probables:
  - Autenticación/autorización.
  - Panel de administración.
  - Planes de calidad.
  - Parámetros.
  - Búsqueda y filtrado.
  - Componentes visuales compartidos.

## 4. Actores

| Actor | Rol | Necesidad | Permisos esperados |
|---|---|---|---|
| Administrador | `admin` | Gestionar planes de calidad y parámetros | Consultar, buscar, crear, editar |
| Analista | `analyst` | Consultar planes de calidad y parámetros | Consultar y buscar únicamente |

## 5. Historias de usuario refinadas

### US-001: Gestión de planes de calidad por administrador

Como `Administrador`, quiero poder crear y modificar planes de calidad, para mantener actualizada la configuración utilizada en los análisis de calidad.

- Prioridad: `must`
- Valor funcional: permite gestionar datos maestros críticos sin intervención técnica.
- Dependencias: permisos de rol, formularios de alta/edición y persistencia de cambios.

### US-002: Gestión de parámetros por administrador

Como `Administrador`, quiero poder crear y modificar parámetros, para mantener actualizados los criterios usados en los planes de calidad y análisis.

- Prioridad: `must`
- Valor funcional: permite adaptar el sistema a nuevos criterios de control.
- Dependencias: modelo de parámetros, validaciones y asociación con planes.

### US-003: Consulta de planes y parámetros por analista

Como `Analista`, quiero poder buscar y consultar planes de calidad y parámetros, para revisar la información necesaria sin alterar la configuración del sistema.

- Prioridad: `must`
- Valor funcional: ofrece visibilidad operativa sin riesgo de modificación indebida.
- Dependencias: listado, búsqueda, detalle en modo solo lectura y control de permisos.

## 6. Casos de uso

### UC-001: Administrador crea un nuevo parámetro

- Actor: Administrador.
- Precondiciones:
  - El usuario tiene rol `admin`.
- Flujo principal:
  1. Accede a la sección de parámetros.
  2. Pulsa una acción de creación.
  3. Completa los campos requeridos.
  4. Guarda el nuevo parámetro.
  5. El sistema valida y registra el parámetro.
- Resultado esperado:
  - El parámetro queda disponible para su uso según las reglas del sistema.

### UC-002: Analista consulta un plan de calidad

- Actor: Analista.
- Precondiciones:
  - El usuario tiene rol `analyst`.
- Flujo principal:
  1. El analista accede al panel.
  2. Busca un plan de calidad.
  3. Abre su detalle.
  4. Consulta la información.
- Resultado esperado:
  - Puede visualizar la información, pero no crear ni editar.

## 7. Reglas de negocio

- `BR-001`: Un usuario con rol `admin` puede consultar, buscar, crear y editar planes de calidad.
- `BR-002`: Un usuario con rol `admin` puede consultar, buscar, crear y editar parámetros.
- `BR-003`: Un usuario con rol `analyst` puede consultar y buscar planes de calidad, pero no crearlos ni editarlos.
- `BR-004`: Un usuario con rol `analyst` puede consultar y buscar parámetros, pero no crearlos ni editarlos.
- `BR-005`: Las acciones de creación y edición no deben depender únicamente de ocultar botones en frontend; deben validarse también en backend.
- `BR-006`: Las nuevas secciones deben respetar la estética, proporciones, componentes y patrones visuales existentes de la aplicación.

## 8. Estados funcionales

- `view_mode`: usuario puede consultar información.
- `edit_mode`: usuario puede modificar información, solo permitido para admin.
- `create_mode`: usuario puede crear nuevos registros, solo permitido para admin.
- `forbidden_action`: intento de acceso a acción no permitida.

## 9. Criterios de aceptación

### AC-001: Admin puede buscar planes de calidad

**Dado que** un usuario con rol `admin` accede al panel,  
**cuando** usa la búsqueda de planes de calidad,  
**entonces** el sistema muestra resultados coincidentes y permite abrir el detalle.

- Tipo de verificación: `e2e_test`
- Reglas relacionadas: `BR-001`

### AC-002: Admin puede crear planes de calidad

**Dado que** un usuario con rol `admin` está en la sección de planes,  
**cuando** completa un alta válida de plan de calidad,  
**entonces** el sistema guarda el nuevo plan y lo muestra en la búsqueda o listado correspondiente.

- Tipo de verificación: `integration_test`
- Reglas relacionadas: `BR-001`

### AC-003: Analista puede buscar planes y parámetros

**Dado que** un usuario con rol `analyst` accede al panel,  
**cuando** busca planes de calidad o parámetros,  
**entonces** puede visualizar resultados y abrir detalles en modo solo lectura.

- Tipo de verificación: `e2e_test`
- Reglas relacionadas: `BR-003`, `BR-004`

### AC-004: Analista no puede crear ni editar

**Dado que** un usuario con rol `analyst` intenta crear o editar un plan o parámetro,  
**cuando** realiza la acción desde UI, ruta directa o petición backend,  
**entonces** el sistema impide la operación.

- Tipo de verificación: `integration_test`
- Reglas relacionadas: `BR-003`, `BR-004`, `BR-005`

## 10. Casos límite

- Usuario sin rol reconocido accede al panel.
- Analista intenta acceder por URL directa a una edición.
- Admin crea un plan con datos incompletos.
- Búsqueda sin resultados.
- Parámetro asociado a planes existentes que se intenta modificar.
- Sesión expirada durante una operación de creación o edición.

## 11. Fuera de alcance

- Rediseño completo de la aplicación.
- Cambios en el modelo global de autenticación salvo lo necesario para permisos.
- Auditoría avanzada de cambios, salvo que el orquestador la marque como obligatoria.
- Importación masiva de planes o parámetros.

## 12. Supuestos

- Existen roles diferenciables entre `admin` y `analyst`.
- El backend dispone o dispondrá de validación de permisos por rol.
- Ya existen patrones visuales reutilizables en la aplicación.
- La búsqueda debe permitir localizar tanto planes como parámetros.

## 13. Preguntas abiertas

### Bloqueantes

- ¿El rol real del analista en el sistema se denomina `analyst`, `analista` u otro valor interno?
- ¿La edición de planes/parámetros requiere historial o auditoría obligatoria?

### No bloqueantes

- ¿La búsqueda debe ser global en una sola caja o separada por sección?
- ¿Debe existir paginación, filtros avanzados o solo búsqueda básica?

## 14. Estado de salida

- Estado: `READY_FOR_FUNCTIONAL_SPEC`
- Siguiente skill recomendada: `sdd-functional-spec`
- Skills requeridas más adelante:
  - `sdd-security-permissions-review`
  - `sdd-api-contract`, si existen endpoints nuevos o modificados.
  - `sdd-migration-rollback`, si hay cambios en tablas o entidades.
