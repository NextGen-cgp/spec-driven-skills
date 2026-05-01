# sdd-security-permissions-review-skill

Skill de **Seguridad y Permisos** para un flujo de **Spec Driven Development (SDD)**.

Esta skill actúa como gate de seguridad antes de validar una especificación y, opcionalmente, después de la implementación. Su objetivo es evitar que el flujo avance con permisos ambiguos, autorización solo en frontend, exposición innecesaria de datos o validaciones backend incompletas.

## Cuándo usarla

Úsala cuando un cambio afecte a:

- Roles y permisos.
- Autenticación o autorización.
- Endpoints o acciones backend.
- Operaciones de escritura.
- Paneles de administración.
- Estados como cancelar, reabrir, aprobar, completar o eliminar.
- Datos maestros o datos sensibles.
- Migraciones, backfills o cambios persistentes.

## Posición en el flujo

```text
Technical Spec / API Contract / Migration Plan
        ↓
Security & Permissions Review
        ↓
Spec Validation
        ↓
Implementation
```

También puede ejecutarse después de tests:

```text
Implementation → Test → Security Review → Final Review
```

## Artefactos principales

```text
security-permissions-review.md
permission-risk-matrix.md
security-findings.md
security-review-report.md
```

## Estado de salida

```text
SECURITY_APPROVED
SECURITY_APPROVED_WITH_WARNINGS
SECURITY_CHANGES_REQUIRED
SECURITY_BLOCKED
NOT_APPLICABLE
```

## Principio principal

El frontend puede adaptar la experiencia de usuario, pero el backend debe ser siempre la autoridad real de permisos y validaciones.
