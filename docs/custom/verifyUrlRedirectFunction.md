# Verify URL destination function

## Description

Function which check, if url redirect destination is correct:

1. Click specific anchor tag,

2. Check redirect URL destination,

## Code

Function is reusable, user provide value to base url. Function verify, if url is equal to expected. <br />
Notice that [`cypress .env`](../../cypress.config.ts) variable is used here.

```typescript
Cypress.Commands.add("verifyUrlRedirect", (url: string) => {
  cy.get(`a[href='${url}']`).click();

  cy.url().should("be.equal", `${Cypress.env(base_url)}${url}`);
});
```
