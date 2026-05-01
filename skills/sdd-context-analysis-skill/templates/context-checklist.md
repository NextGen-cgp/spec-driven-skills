# Context Analysis Checklist

## Artefactos SDD

- [ ] Existe `/specs/<feature-name>/request.md`.
- [ ] Existe `/specs/<feature-name>/sdd-state.yaml` si el flujo ya fue iniciado.
- [ ] Se han revisado artefactos SDD previos relacionados.

## Repositorio

- [ ] Se ha identificado el stack principal.
- [ ] Se ha revisado la estructura raíz del repo.
- [ ] Se han localizado módulos candidatos.
- [ ] Se han identificado patrones de frontend si aplica.
- [ ] Se han identificado patrones de backend si aplica.
- [ ] Se han identificado patrones de base de datos si aplica.
- [ ] Se han identificado patrones de auth/roles si aplica.
- [ ] Se han localizado tests relacionados o se ha documentado su ausencia.

## Riesgos

- [ ] Se han identificado riesgos técnicos.
- [ ] Se han marcado riesgos de seguridad si aplica.
- [ ] Se ha indicado si hacen falta migraciones.
- [ ] Se ha indicado si hace falta contrato API.

## Salida

- [ ] Se ha creado `/specs/<feature-name>/context-analysis.md`.
- [ ] Se ha indicado estado final.
- [ ] Se ha recomendado siguiente skill.
- [ ] No se han modificado archivos de implementación.
