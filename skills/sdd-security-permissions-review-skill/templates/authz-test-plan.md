# Authorization Test Plan: <feature-id>

## 1. Objective

Define the minimum authorization and functional security tests that must exist before closing the implementation.

## 2. Matrix of tests per operation

| ID | Operation | Role | Case | Expected result | Test type |
|---|---|---|---|---|---|
| AUTHZ-001 |  | ADMIN | Access allowed | 200/201/204 | integration/e2e |
| AUTHZ-002 |  | ANALYST | Access Denied | 403 | integration/e2e |
| AUTHZ-003 |  | anonymous | Unauthenticated | 401 | integration/e2e |

## 3. Exposed data tests

- [ ] The listing does not return restricted fields.
- [ ] The detail does not return restricted fields.
- [ ] Searches respect the expected scope.

## 4. Backend validation tests

- [ ] Invalid payload rejected.
- [ ] Illegal state transition rejected.
- [ ] Operation on a non-existent resource returns a controlled error.
- [ ] Operation on resource out of scope returns 403 or 404 according to defined policy.

## 5. Regression tests

- [ ] Existing roles retain previous permissions.
- [ ] Unaffected functionalities maintain behavior.
