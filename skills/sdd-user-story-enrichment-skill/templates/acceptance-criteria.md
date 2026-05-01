# Acceptance Criteria: <feature-id>

## 1. Criterios funcionales

### AC-001: <título>

**Dado que** `<contexto o precondición>`,  
**cuando** `<acción o evento>`,  
**entonces** `<resultado observable y verificable>`.

- Tipo de verificación: `<unit_test | integration_test | e2e_test | manual_review | ui_check | api_test>`
- Reglas relacionadas: `<BR-001, BR-002>`
- Prioridad: `<must | should | could>`

## 2. Criterios de permisos, si aplica

### AC-PERM-001: <título>

**Dado que** `<usuario con rol>`,  
**cuando** `<intenta realizar acción>`,  
**entonces** `<permitir/bloquear/ocultar/mostrar>`.

- Validación requerida en backend: `<sí/no>`
- Validación requerida en frontend: `<sí/no>`

## 3. Criterios de estados, si aplica

### AC-STATE-001: <título>

**Dado que** `<entidad en estado inicial>`,  
**cuando** `<acción>`,  
**entonces** `<nuevo estado y efectos funcionales>`.

## 4. Criterios de regresión

- `AC-REG-001`: <comportamiento existente que debe conservarse>

## 5. Criterios fuera de alcance

- `<fuera de alcance>`
