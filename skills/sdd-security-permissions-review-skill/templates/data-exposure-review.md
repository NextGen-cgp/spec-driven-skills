# Data Exposure Review: <feature-id>

## 1. Exhibition surfaces

| Surface | Consumer | Returned data | Risk | Control |
|---|---|---|---|---|
| Listing | Frontend |  |  |  |
| Detail | Frontend |  |  |  |
| Search | Frontend |  |  |  |
| Export | User |  |  |  |

## 2. Allowed and restricted fields

| Entity/DTO | Field | Allowed for | Restricted to | Reason |
|---|---|---|---|---|
|  |  |  |  |  |

## 3. Filtering rules

```text
- Filtered by role:
- Filtered by ownership:
- Filtered by department/area:
- Filtered by status:
```

## 4. Decision

```yaml
data_exposure_status: <APPROVED | APPROVED_WITH_WARNINGS | CHANGES_REQUIRED | BLOCKED>
reason: ""
```
