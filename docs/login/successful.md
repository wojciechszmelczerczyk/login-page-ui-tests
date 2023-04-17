# Successful login

## Table of contents:

- [Login](#login)
- [Logout](#logout)

## Login

### Description

This test case verifies that a user can successfully log in with valid credentials and
successful hello message is being prompted and login button text is changed to `Log Out`.

### Input data

```json
{
  "username": "test123",
  "password": "pwd"
}
```

### Steps

1. Visit the login page.
2. Enter valid credentials.
3. Click the Log In button.
4. Verify that the successful `Welcome, ${user}!` message is being prompted.
5. Verify that login button text is `Log Out`.

### Expected result

After completing the above steps, the test should pass and the user should be successfully logged in and successful log in message should be displayed, login button now contains `Log Out` text.

### Code

```typescript
it("should prompt successful hello message and change button text to Log Out, if provided credentials are correct", () => {
  const { username, password } = correctUser;

  cy.login(username, password);

  cy.get('label[id="loginstatus"]').should(
    "have.text",
    `Welcome, ${username}!`
  );

  cy.get('button[id="login"]').should("contain", "Log Out");
});
```

## Logout

### Description

This test case verifies that a user can successfully log out,
form inputs are cleared and login button text is changed to `Log In`.

### Input data

```json
{
  "username": "test123",
  "password": "pwd"
}
```

### Steps

1. Visit the login page.
2. Enter valid credentials.
3. Click the Log In button.
4. Click the Log Out button.
5. Verify that form inputs are clear.
6. Verify that login button text is `Log In`.

### Expected result

After completing the above steps, the test should pass, the user should be successfully logged out and form inputs should be cleared, login button contains `Log In` text.

### Code

```typescript
it("should change button text and clear inputs, after successful log out", () => {
  cy.login(username, password);

  cy.get('button[id="login"]').click();

  cy.get('button[id="login"]').should("contain", "Log In");

  cy.get("input").should("contain", "");
});
```
