# Context Analysis Checklist

## SDD artifacts

- [ ] `/specs/<feature-name>/request.md` exists.
- [ ] `/specs/<feature-name>/sdd-state.yaml` exists if the flow has already been started.
- [ ] Previous related SDD artifacts have been reviewed.

## Repository

- [ ] The main stack has been identified.
- [ ] The root structure of the repo has been revised.
- [ ] Candidate modules have been located.
- [ ] Frontend patterns have been identified if applicable.
- [ ] Backend patterns have been identified if applicable.
- [ ] Database patterns have been identified if applicable.
- [ ] Auth/role patterns have been identified if applicable.
- [ ] Related tests have been located or their absence has been documented.

## Risks

- [ ] Technical risks have been identified.
- [ ] Security risks have been marked if applicable.
- [ ] It has been indicated if migrations are necessary.
- [ ] It has been indicated if an API contract is required.

## Output

- [ ] `/specs/<feature-name>/context-analysis.md` has been created.
- [ ] Final status has been indicated.
- [ ] The following skill has been recommended.
- [ ] No implementation files have been modified.
