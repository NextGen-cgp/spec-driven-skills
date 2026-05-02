# Data Contract: <feature-id>

## 1. Metadata

- Feature ID: `<feature-id>`
- Owner skill: `sdd-api-contract`
- Source API contract: `/specs/<feature-id>/api-contract.md`

## 2. Data contract summary

Describes the data shapes exchanged between frontend, backend, services and persistence boundaries.

## 3. DTOs / view models / payload models

### 3.1. `<ContractName>`

Purpose:

```text
<purpose>
```

| Field | Type | Required? | Nullable? | Default | Validation | Source of truth | Notes |
|---|---|---:|---:|---|---|---|---|
| `<field>` | `<type>` | `<yes/no>` | `<yes/no>` | `<default>` | `<rule>` | `<frontend/backend/db>` | `<notes>` |

Example:

```json
{
  "field": "value"
}
```

## 4. State values

| State | Meaning | Produced by | Consumed by | Notes |
|---|---|---|---|---|
| `<state>` | `<meaning>` | `<producer>` | `<consumer>` | `<notes>` |

## 5. Derived values

| Value | Derived from | Calculation/source | Persisted? | Notes |
|---|---|---|---:|---|
| `<value>` | `<source>` | `<logic>` | `<yes/no>` | `<notes>` |

## 6. Persistence implications

| Concern | Impact | Do you require migration? | Notes |
|---|---|---:|---|
| New field | `<impact>` | `<yes/no>` | `<notes>` |
| Changed nullability | `<impact>` | `<yes/no>` | `<notes>` |
| New state | `<impact>` | `<yes/no>` | `<notes>` |
| Backfill | `<impact>` | `<yes/no>` | `<notes>` |

## 7. Compatibility rules

- Existing consumers must continue to receive fields they depend on unless explicitly versioned.
- New required fields must not break existing records without a migration/default strategy.
- Nullable fields must be handled consistently by frontend and backend.
- State values ​​must be documented before implementation.
