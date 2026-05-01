# Business Rules: <feature-id>

## 1. Reglas de negocio

### BR-001: <nombre>

**Regla:**  
<Describe la regla de forma atómica y verificable.>

**Motivo:**  
<Por qué existe esta regla.>

**Aplica a:**  
<roles, pantallas, entidades, estados o procesos.>

**Verificación:**  
<Cómo se puede comprobar.>

**Riesgo si se incumple:** `<low | medium | high>`

---

## 2. Reglas de permisos, si aplica

| ID | Rol | Puede | No puede | Validación backend requerida |
|---|---|---|---|---|
| `BR-PERM-001` | `<rol>` | `<acciones>` | `<acciones>` | `<sí/no>` |

## 3. Reglas de estados, si aplica

| ID | Estado inicial | Acción | Estado final | Efecto |
|---|---|---|---|---|
| `BR-STATE-001` | `<estado>` | `<acción>` | `<estado>` | `<efecto>` |

## 4. Reglas de cálculo, si aplica

| ID | Entrada | Regla | Salida esperada | Casos límite |
|---|---|---|---|---|
| `BR-CALC-001` | `<entrada>` | `<regla>` | `<salida>` | `<casos>` |
