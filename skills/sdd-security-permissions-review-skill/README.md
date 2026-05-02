# sdd-security-permissions-review-skill

**Security and Permissions** skill for a **Spec Driven Development (SDD)** flow.

This skill acts as a security gate before validating a specification and, optionally, after implementation. Its goal is to prevent the flow from moving forward with ambiguous permissions, frontend-only authorization, unnecessary data exposure, or incomplete backend validations.

## When to use it

Use it when a change affects:

- Roles and permissions.
- Authentication or authorization.
- Endpoints or backend actions.
- Writing operations.
- Administration panels.
- Statuses like cancel, reopen, approve, complete or delete.
- Master data or sensitive data.
- Migrations, backfills or persistent changes.

## Position in the flow

```text
Technical Spec / API Contract / Migration Plan
        ↓
Security & Permissions Review
        ↓
Spec Validation
        ↓
Implementation
```

It can also be run after tests:

```text
Implementation → Test → Security Review → Final Review
```

##Main artifacts

```text
security-permissions-review.md
permission-risk-matrix.md
security-findings.md
security-review-report.md
```

## Exit status

```text
SECURITY_APPROVED
SECURITY_APPROVED_WITH_WARNINGS
SECURITY_CHANGES_REQUIRED
SECURITY_BLOCKED
NOT_APPLICABLE
```

## Main principle

The frontend can adapt the user experience, but the backend should always be the real authority for permissions and validations.
