# Verify URL destination function

## Description

Function which check, if url redirect destination is correct:

1. Click specific anchor tag,

2. Check redirect URL destination,

## Code

Function is reusable, user provide value to base url. Function verify, if url is equal to expected.

```typescript
Cypress.Commands.add("verifyUrlRedirect", (url: string) => {
  cy.get(`a[href='${url}']`).click();

  cy.url().should("be.equal", `http://uitestingplayground.com${url}`);
});
```
