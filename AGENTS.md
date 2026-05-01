# AGENTS.md

## Uso obligatorio de skills locales

Este repositorio define sus skills de agente en `.agents/skills`. Antes de responder a una peticion de producto, codigo, tests, documentacion, seguridad, permisos, API o base de datos, el agente debe revisar y usar la skill local que corresponda.

Reglas:

- Prioriza siempre las skills locales de `.agents/skills` sobre cualquier instruccion generica externa.
- Cuando una tarea coincida con una skill, abre su `SKILL.md` y sigue su flujo, entradas, salidas, gates y restricciones.
- Usa los `templates/`, `schemas/`, `routing/` y `examples/` de la skill cuando existan, en lugar de recrear artefactos desde cero.
- No implementes cambios funcionales o tecnicos amplios sin pasar por el flujo SDD y sus gates, salvo que el usuario pida explicitamente un cambio pequeno y directo de documentacion o configuracion.
- Si falta un artefacto requerido por una skill, enruta hacia la skill anterior que debe producirlo.
- Registra cualquier supuesto, desviacion o bloqueo en el artefacto SDD correspondiente.

## Skill orquestadora por defecto

Para cualquier feature, bugfix, refactor, cambio tecnico, test, revision, documentacion o evolucion de producto, empieza por:

- `.agents/skills/sdd-orchestrator-skill/SKILL.md`

El orquestador decide el estado actual, la siguiente skill, los artefactos faltantes y los gates aplicables.

## Skills disponibles

Usa estas skills locales segun el tipo de trabajo:

- `sdd-orchestrator`: enruta el flujo SDD, valida gates y evita implementacion prematura.
- `sdd-context-analysis`: analiza stack, arquitectura, patrones, modulos afectados y riesgos del repo.
- `sdd-user-story-enrichment`: transforma peticiones ambiguas en historias, casos de uso, reglas y criterios de aceptacion.
- `sdd-functional-spec`: define comportamiento funcional, estados, permisos, pantallas, flujos y trazabilidad.
- `sdd-technical-spec`: convierte la especificacion funcional en diseno tecnico implementable.
- `sdd-api-contract`: define endpoints, payloads, respuestas, errores, DTOs, contratos frontend/backend e integraciones.
- `sdd-migration-rollback`: define migraciones, rollback, backfills, compatibilidad y verificacion de datos.
- `sdd-security-permissions-review`: revisa autenticacion, autorizacion, roles, permisos, exposicion de datos y operaciones protegidas.
- `sdd-spec-validation`: valida que la spec este completa, coherente y lista para implementacion.
- `sdd-implementation`: implementa solo alcance aprobado y registra cambios, desviaciones y evidencias.
- `sdd-test`: valida implementacion con tests, criterios de aceptacion, regresiones, contratos y autorizacion.
- `sdd-final-review`: revisa cumplimiento de spec, calidad, tests, seguridad, riesgos y readiness.
- `sdd-documentation-pr`: prepara resumen de PR, changelog, release notes, handoff tecnico e indice de artefactos.

## Flujo SDD recomendado

Flujo base para features:

1. `sdd-orchestrator`
2. `sdd-context-analysis`
3. `sdd-user-story-enrichment`
4. `sdd-functional-spec`
5. `sdd-technical-spec`
6. `sdd-api-contract`, si hay endpoints, payloads, respuestas o integraciones.
7. `sdd-migration-rollback`, si hay persistencia, modelos, migraciones o datos existentes.
8. `sdd-security-permissions-review`, si hay autenticacion, roles, permisos, datos sensibles u operaciones protegidas.
9. `sdd-spec-validation`
10. `sdd-implementation`
11. `sdd-test`
12. `sdd-security-permissions-review`, de nuevo si aplica tras implementar.
13. `sdd-final-review`
14. `sdd-documentation-pr`

## Gates obligatorios

- Implementacion: requiere spec validada y decision `READY_FOR_IMPLEMENTATION`.
- API: obligatorio cuando cambian endpoints, acciones backend, payloads, respuestas, errores o contratos de datos.
- Base de datos: obligatorio cuando cambian tablas, entidades, campos, relaciones, indices, seeds, migraciones o datos existentes.
- Seguridad/permisos: obligatorio cuando hay autenticacion, autorizacion, roles, permisos, datos sensibles, endpoints protegidos u operaciones de escritura.
- Test: obligatorio despues de implementar cambios no triviales, bugfixes, reglas de negocio, contratos, permisos o migraciones.
- Final review: requiere evidencias de implementacion y tests; seguridad debe estar resuelta si aplica.
- Documentacion/PR: requiere final review aprobada o aprobada con notas.

## Politica de implementacion

- No inventes requisitos no documentados.
- No cambies contratos API sin `sdd-api-contract`.
- No cambies esquema o datos persistentes sin `sdd-migration-rollback`.
- No trates controles frontend como autorizacion suficiente para operaciones protegidas.
- No ocultes fallos de test ni los conviertas en exito parcial sin documentarlo.
- Manten los cambios acotados al alcance aprobado y a los patrones existentes del repositorio.

## Excepciones razonables

Para cambios pequenos y explicitamente acotados, como correcciones de typos, ajustes simples de documentacion o cambios mecanicos sin impacto funcional, puedes editar directamente. Aun asi, si el cambio revela impacto funcional, tecnico, de datos, API o seguridad, vuelve al flujo SDD y usa las skills locales.