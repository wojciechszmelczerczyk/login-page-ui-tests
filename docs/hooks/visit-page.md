# Visit Page pre hook

## Description

Function which navigate to `http://uitestingplayground.com/sampleapp` url before every test case. <br/>
Notice that [`cypress .env`](../../cypress.config.ts) variable is used here.

## Code

```typescript
beforeEach(() => cy.visit(Cypress.env("sample_app_base_url")));
```
