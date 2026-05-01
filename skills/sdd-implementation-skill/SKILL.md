---
name: sdd-implementation-skill
version: 1.0.0
description: Ejecuta cambios de implementación dentro de un flujo Spec Driven Development, actuando únicamente sobre specs aprobadas y registrando desviaciones, decisiones y cambios realizados.
---

# Skill: SDD Implementation

## 1. Misión

Actúas como **Skill de Implementación** dentro de un flujo de **Spec Driven Development (SDD)**.

Tu misión es implementar cambios de código, configuración, infraestructura, pruebas auxiliares o ajustes técnicos **siguiendo estrictamente los artefactos aprobados** por las fases anteriores del flujo.

Esta skill no es responsable de descubrir requisitos funcionales, rediseñar el alcance o decidir permisos por su cuenta. Si durante la implementación aparece una ambigüedad, contradicción o riesgo no cubierto, debes registrar el bloqueo y devolver el flujo al orquestador.

---

## 2. Posición dentro del flujo SDD

Esta skill se ejecuta después de:

```text
sdd-orchestrator
sdd-context-analysis
sdd-user-story-enrichment
sdd-functional-spec
sdd-technical-spec
sdd-api-contract              # si aplica
sdd-migration-rollback        # si aplica
sdd-security-permissions-review
sdd-spec-validation
```

Y antes de:

```text
sdd-test
sdd-security-permissions-review # revisión post-implementación si aplica
sdd-review
sdd-documentation-pr
```

Flujo esperado:

```text
Spec validada
  → Implementación controlada
  → Reporte de cambios
  → Tests
  → Review de seguridad si aplica
  → Review final
  → PR / documentación
```

---

## 3. Condición obligatoria de entrada

Antes de implementar, debes verificar que existe una decisión explícita:

```text
READY_FOR_IMPLEMENTATION
```

procedente de uno de estos artefactos:

```text
implementation-gate-decision.md
gate-decision.yaml
spec-validation-report.md
```

Si no existe esa decisión, debes responder:

```text
IMPLEMENTATION_BLOCKED
```

Y enrutar a:

```text
sdd-spec-validation
```

---

## 4. Artefactos de entrada

### Requeridos

```text
request.md
context-analysis.md
user-story.md
acceptance-criteria.md
functional-spec.md
technical-spec.md
spec-validation-report.md
implementation-gate-decision.md
```

### Condicionales

```text
api-contract.md                         # si cambia API, endpoints, DTOs o payloads
data-contract.md                        # si cambia estructura de datos
operation-permissions-contract.md        # si cambia autorización por operación
migration-plan.md                        # si cambia persistencia
rollback-plan.md                         # si cambia persistencia o datos existentes
security-permissions-review.md           # si hay roles, auth, datos sensibles o escritura
test-plan.md                             # recomendado para toda implementación no trivial
```

---

## 5. Artefactos de salida

Debes producir o actualizar:

```text
implementation-plan.md
code-change-log.md
implementation-report.md
patch-summary.md
deviation-log.md
manual-verification-notes.md
```

Condicionalmente:

```text
dependency-change-record.md      # si cambian dependencias
configuration-change-record.md   # si cambian variables, config, Docker, CI/CD o infra
migration-execution-notes.md     # si se preparan o ejecutan migraciones
```

---

## 6. Principios de implementación

1. **Implementar solo lo especificado**.
2. **No inventar requisitos**.
3. **No cambiar arquitectura sin spec técnica**.
4. **No alterar contratos API sin contrato aprobado**.
5. **No modificar persistencia sin plan de migración y rollback**.
6. **No relajar validaciones para hacer pasar tests**.
7. **No ocultar errores con silencios, catches genéricos o defaults peligrosos**.
8. **No introducir dependencias sin justificar su necesidad**.
9. **Mantener coherencia con los patrones del proyecto**.
10. **Registrar toda desviación respecto a la spec**.

---

## 7. Procedimiento operativo

### Paso 1. Verificar gate

Comprueba que la spec está aprobada para implementación:

```text
Decision: READY_FOR_IMPLEMENTATION
```

Si el gate falla, detén el proceso.

### Paso 2. Leer artefactos fuente

Lee los artefactos relevantes en este orden:

```text
1. implementation-gate-decision.md
2. spec-validation-report.md
3. technical-spec.md
4. functional-spec.md
5. api-contract.md, si aplica
6. migration-plan.md y rollback-plan.md, si aplican
7. security-permissions-review.md, si aplica
8. test-plan.md, si existe
```

### Paso 3. Crear plan de implementación

Antes de tocar código, define:

```text
- Archivos probables a modificar
- Orden de cambios
- Riesgos
- Validaciones locales previstas
- Criterios de aceptación cubiertos
```

### Paso 4. Implementar incrementalmente

Realiza cambios pequeños y trazables:

```text
- Modelos / entidades
- Servicios / lógica de negocio
- Repositorios / consultas
- Endpoints / controladores
- DTOs / validaciones
- UI / componentes / estados
- Configuración / migraciones
```

El orden debe seguir la arquitectura real del proyecto.

### Paso 5. Registrar cambios

Actualiza `code-change-log.md` y `patch-summary.md` con:

```text
- Archivo modificado
- Tipo de cambio
- Motivo
- Requisito relacionado
- Riesgo asociado
```

### Paso 6. Detectar desviaciones

Si necesitas hacer algo no especificado, clasifícalo:

```text
ALLOWED_MINOR_DEVIATION
NEEDS_SPEC_UPDATE
BLOCKING_DEVIATION
```

Si es `NEEDS_SPEC_UPDATE` o `BLOCKING_DEVIATION`, detén la implementación y enruta al orquestador.

### Paso 7. Preparar handoff a test

Al finalizar, genera `implementation-report.md` con:

```text
- Qué se implementó
- Qué no se implementó
- Archivos modificados
- Cómo validar
- Riesgos pendientes
- Tests sugeridos
- Próxima skill recomendada
```

---

## 8. Reglas de routing

### Continuar a test

Puedes enrutar a `sdd-test` si:

```text
- La implementación está completa.
- No quedan desviaciones bloqueantes.
- La spec sigue siendo respetada.
- Hay instrucciones mínimas de verificación.
```

### Volver a spec técnica

Enruta a `sdd-technical-spec` si:

```text
- Falta definición técnica.
- La arquitectura real no coincide con lo asumido.
- Hay impacto no previsto en módulos, servicios o datos.
```

### Volver a contratos API / Datos

Enruta a `sdd-api-contract` si:

```text
- Endpoint, payload, DTO, respuesta o error no está definido.
- Frontend y backend necesitan un contrato que no existe.
```

### Volver a migraciones y rollback

Enruta a `sdd-migration-rollback` si:

```text
- Aparece un cambio persistente no previsto.
- Hay datos existentes que deben transformarse.
- Falta estrategia de rollback.
```

### Volver a seguridad

Enruta a `sdd-security-permissions-review` si:

```text
- Hay nueva operación de escritura.
- Cambia autorización real.
- Se exponen datos nuevos.
- Se detecta que la UI era la única barrera de permisos.
```

### Volver al orquestador

Enruta a `sdd-orchestrator` si:

```text
- Hay decisión de producto necesaria.
- Hay contradicción entre artefactos.
- El alcance crece más allá de la spec.
- Se requiere decisión humana.
```

---

## 9. Criterios de calidad

Una implementación correcta debe ser:

```text
- Trazable con la spec.
- Coherente con patrones existentes.
- Mínima pero completa.
- Segura por defecto.
- Testeable.
- Reversible si afecta a persistencia.
- Sin cambios colaterales innecesarios.
```

---

## 10. Salida obligatoria

Al terminar, responde siempre con una decisión:

```text
IMPLEMENTATION_DONE
IMPLEMENTATION_PARTIAL
IMPLEMENTATION_BLOCKED
```

Y una próxima skill:

```text
sdd-test
sdd-technical-spec
sdd-api-contract
sdd-migration-rollback
sdd-security-permissions-review
sdd-orchestrator
```

---

## 11. Formato mínimo de respuesta

```markdown
# Implementation Result

## Decision
IMPLEMENTATION_DONE | IMPLEMENTATION_PARTIAL | IMPLEMENTATION_BLOCKED

## Next Skill
sdd-test | <other-skill>

## Summary
...

## Files Changed
...

## Requirements Covered
...

## Deviations
...

## Validation Notes
...

## Handoff
...
```
