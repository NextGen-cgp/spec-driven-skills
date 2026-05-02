---
name: sdd-context-analysis-skill
description: Context analysis skill for Spec Driven Development flows. It is responsible for inspecting the project, identifying stack, architecture, conventions, affected modules, dependencies and risks before other skills generate refined stories, technical specifications or implement changes.
version: 1.0.0
status: production-ready
owner: sdd-orchestrator
---

# Skill: SDD Context Analysis

## 1. Purpose

This skill analyzes the actual context of the project before the SDD flow moves toward functional refinement, technical specification, or implementation.

Its objective is to prevent the following skills from working on assumptions. It must provide a clear and verifiable view of:

- Technological stack detected.
- Repository structure.
- Existing architectural patterns.
- Potentially affected modules, folders and files.
- Code conventions, names, routes, tests and documentation.
- Integration risks.
- Relevant previous artifacts within `/specs`.
- Routing recommendation for the orchestrator.

This skill **does not implement code**, **does not modify application files**, and **does not make final functional decisions**. Its output serves as the basis for subsequent skills.

---

## 2. When should it be invoked

The orchestrator must invoke this skill when:

1. A new functional, technical, bugfix, refactor or security change request arrives.
2. There is no context analysis yet for the current feature.
3. There are questions about which parts of the repo are affected.
4. Implementation requires understanding previous project patterns.
5. The request mentions roles, permissions, backend, frontend, database, tests, routes, UI, API or migrations.
6. You must validate if related SDD artifacts already exist.

It can also be reinvoked if:

- Change the scope of the request.
- Spec validation detects a context gap.
- The implementation finds a discrepancy between the spec and the real code.
- The final review detects that a project pattern was ignored.

---

## 3. Expected inputs

The skill can receive one or more of these inputs:

```text
/specs/<feature-name>/request.md
/specs/<feature-name>/sdd-state.yaml
/specs/<feature-name>/user-story.md
/specs/<feature-name>/technical-spec.md
```

Additionally, you must analyze the project repository available in the workspace.

Recommended minimum entry:

```text
- Original user request.
- Tentative name of the feature.
- Estimated change type: feature, bugfix, refactor, security, docs, test-only, architecture.
```

---

## 4. Mandatory outputs

The skill must generate or update the following artifact:

```text
/specs/<feature-name>/context-analysis.md
```

Optionally, if the project is large or the change has broad impact, it can generate:

```text
/specs/<feature-name>/project-map.md
/specs/<feature-name>/impact-map.md
```

The main output must include:

```text
- Summary of the project context.
- Stack detected.
- Observed architecture.
- Relevant conventions.
- Affected modules and files.
- Relevant dependencies.
- Related existing tests.
- Technical risks.
- Open questions, if they exist.
- Routing recommendation for the orchestrator.
```

---

## 5. Mandatory rules

### 5.1. Do not invent architecture

If no evidence is found in the repository, it must be explicitly stated:

```text
Not committed in the current repository.
```

Frameworks, routes, models, endpoints and patterns should not be assumed without evidence.

---

### 5.2. Do not modify implementation

This skill can propose candidate files, but should not modify:

```text
/src
/app
/pages
/components
/server
/api
/db
/migrations
/tests
```

You can only create or update SDD artifacts within:

```text
/specs/<feature-name>/
```

---

### 5.3. Separate facts from inferences

Any conclusion must be classified as:

```text
- Observed evidence
- Reasonable inference
- Risk
- Pending confirmation
```

---

### 5.4. Prioritize existing patterns

When you detect several possible ways to solve something, you must prioritize:

```text
1. Patterns already existing in the project.
2. Conventions of the framework used.
3. General good practices.
```

---

### 5.5. Prepare for the next skill

The output should be useful for the subsequent skill. It should always end with a section:

```text
## Recommendation for the Orchestrator
```

With one of these states:

```text
READY_FOR_USER_STORY_REFINEMENT
READY_FOR_TECHNICAL_SPECIFICATION
NEEDS_MORE_CONTEXT
BLOCKED_BY_MISSING_REPOSITORY_ACCESS
```

---

## 6. Analysis procedure

The skill must follow this order:

### Step 1: Read existing SDD artifacts

Search if they exist:

```text
/specs/<feature-name>/request.md
/specs/<feature-name>/sdd-state.yaml
/specs/<feature-name>/context-analysis.md
/specs/<feature-name>/user-story.md
/specs/<feature-name>/technical-spec.md
```

Determine if there is reusable prior context.

---

### Step 2: Identify project stack

Review files like:

```text
package.json
pnpm-lock.yaml
yarn.lock
package-lock.json
tsconfig.json
next.config.*
vite.config.*
astro.config.*
Dockerfile
docker-compose.yml
compose.yml
requirements.txt
pyproject.toml
pom.xml
build.gradle
cargo.toml
go.mod
Gemfile
.env.example
README.md
```

Detect:

```text
- Main language.
- Frontend framework.
- Backend framework.
- ORM or data layer.
- Database.
- Authentication system.
- Test tools.
- Lint/build tools.
- Deployment mechanism.
```

---

### Step 3: Map repository structure

Identify main folders:

```text
/app
/src
/pages
/components
/features
/modules
/server
/api
/routes
/controllers
/services
/repositories
/entities
/models
/db
/migrations
/tests
/specs
/docs
```

Describe what each one seems to be used for.

---

### Step 4: Detect existing patterns

Find patterns in:

```text
- Status management.
- UI components.
- Backend services.
- Validations.
- Error control.
- Authorization by roles.
- Access to database.
- Migrations.
- Tests.
- Naming conventions.
```

Record specific examples of files if they are identified.

---

### Step 5: Relate the request to affected modules

From the request, detect possible areas:

```text
- Frontend/UI
- Backend/API
- Database
- Authentication/authorization
- Calculation or business logic
- Tests
- Documentation
- CI/CD
```

For each area, indicate:

```text
- Candidate files.
- Confidence level: high, medium, low.
- Reason for impact.
```

---

### Step 6: Detect technical risks

Identify risks such as:```text
- Change in permissions or roles.
- Database migrations.
- Alteration of critical logic.
- Breaking frontend/backend compatibility.
- Lack of existing tests.
- Duplication of patterns.
- Relevant technical debt.
- Lack of documentation.
```

---

### Step 7: Recommend next skill

The recommendation must follow these rules:

```text
If the request is vague:
  route_to: user-story-enrichment

If the request is already clear but the technical design is missing:
  route_to: technical-specification

If it affects API or frontend/backend contracts:
  route_to: api-contract-specification

If it affects the database:
  route_to:migration-rollback-planning

If it affects roles, permissions, or authentication:
  route_to:security-permissions-review

If sufficient access to the repo is missing:
  route_to: blocked
```

---

## 7. Required output format

The main output should use this structure:

```markdown
# Context Analysis: <feature-name>

## 1. Executive summary

## 2. Request analyzed

## 3. Stack detected

## 4. Architecture and structure of the repository

## 5. Relevant patterns identified

## 6. Potentially affected modules and files

## 7. Related existing tests

## 8. Relevant dependencies and contracts

## 9. Technical risks

## 10. Open questions

## 11. Recommendation for the Orchestrator
```

---

## 8. Quality criteria

An exit from this skill is considered valid if:

```text
-Does not invent unobserved details.
- Differentiates facts, inferences and risks.
- Clearly identifies affected modules.
- Explain the confidence level of each affectation.
- Indicates existing tests or absence of them.
- Recommends a specific next skill.
- Leave the context ready for refinement or technical specification.
```

---

## 9. Possible states

The skill can return one of these states:

```text
CONTEXT_ANALYSIS_READY
CONTEXT_ANALYSIS_PARTIAL
NEEDS_MORE_CONTEXT
BLOCKED_BY_MISSING_REPOSITORY_ACCESS
```

### CONTEXT_ANALYSIS_READY

There is enough context to follow the SDD flow.

### CONTEXT_ANALYSIS_PARTIAL

Part of the context has been identified, but there are areas of uncertainty. You can move forward if the risk is low.

### NEEDS_MORE_CONTEXT

There is a lack of relevant data that prevents the creation of a reliable spec.

### BLOCKED_BY_MISSING_REPOSITORY_ACCESS

It cannot be analyzed because there is no access to the repo or the necessary files.

---

## 10. Integration with the Orchestrator

The orchestrator must read the section:

```text
## 11. Recommendation for the Orchestrator
```

And update:

```text
/specs/<feature-name>/sdd-state.yaml
```

Example:

```yaml
current_state: CONTEXT_ANALYSIS_READY
last_completed_skill: sdd-context-analysis
recommended_next_skill: user-story-enrichment
blocking_issues: []
required_artifacts:
  - /specs/<feature-name>/context-analysis.md
```

---

## 11. Anti-forbidden patterns

This skill must not:

```text
- Implement changes.
- Create migrations.
- Create UI components.
- Write tests.
- Decide business rules not indicated.
- Skip context analysis by assuming known stack.
- Generate a complete technical spec without going through the corresponding skill.
- Check READY_FOR_IMPLEMENTATION.
```

---

## 12. Guiding principle

```text
First understand the real system; then specify; only then implement.
```
