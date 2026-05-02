# Security Checklist: <feature-id>

## Authentication

- [ ] The user must be authenticated to access the operation.
- [ ] The behavior for unauthenticated user is defined.
- [ ] Internal details are not leaked in authentication errors.

## Authorization

- [ ] The backend validates the required role/permission.
- [ ] The frontend is not the only barrier.
- [ ] Read and write operations are separated.
- [ ] Denied roles are documented.

## API

- [ ] Each new or modified endpoint has defined permissions.
- [ ] Errors 401/403/404/409/422 are defined if applicable.
- [ ] The API contract does not expose unnecessary fields.

## Data

- [ ] Responses are filtered by role and scope.
- [ ] There is no exposure of sensitive or internal fields without justification.
- [ ] Persistent changes have rollback or mitigation.

## States

- [ ] Allowed transitions are documented.
- [ ] Unallowed transitions are blocked in backend.
- [ ] Reversible or irreversible actions have clear rules.

## Tests

- [ ] There are positive tests per allowed role.
- [ ] There are negative tests due to a denied role.
- [ ] There are invalid payload tests.
- [ ] There are tests of unexposed data.
