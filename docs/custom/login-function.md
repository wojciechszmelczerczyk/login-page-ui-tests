# Login custom function

## Description

Function which handle login process:

1. Type username,

2. Type password,

3. Submit button.

## Code

```typescript
Cypress.Commands.add("login", (username: string, password: string) => {
  // if user provide some username and password data, type and submit
  if (username.length && password.length) {
    cy.get('[name="UserName"]').type(username);
    cy.get('[name="Password"]').type(password);
    cy.contains("Log In").click();
    // otherwise just click submit
  } else {
    cy.contains("Log In").click();
  }
});
```
