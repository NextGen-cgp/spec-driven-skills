#BusinessRules: <feature-id>

## 1. Business rules

### BR-001: <name>

**Rule:**  
<Describe the rule in an atomic and verifiable way.>

**Reason:**  
<Why does this rule exist.>

**Applies to:**  
<roles, screens, entities, states or processes.>

**Verification:**  
<How can you check.>

**Risk if breached:** `<low | medium | high>`

---

## 2. Permission rules, if applicable

| ID | Role | Can | Can't | Backend validation required |
|---|---|---|---|---|
| `BR-PERM-001` | `<role>` | `<actions>` | `<actions>` | `<yes/no>` |

## 3. State rules, if applicable

| ID | Initial state | Action | Final status | Effect |
|---|---|---|---|---|
| `BR-STATE-001` | `<state>` | `<action>` | `<state>` | `<effect>` |

## 4. Calculation rules, if applicable

| ID | Input | Rule | Expected output | Edge cases |
|---|---|---|---|---|
| `BR-CALC-001` | `<entry>` | `<rule>` | `<output>` | `<cases>` |
