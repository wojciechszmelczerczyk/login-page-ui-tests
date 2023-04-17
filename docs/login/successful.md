# Successful login

## Description

This test case verifies that a user can successfully log in with valid credentials and
successful hello message is being prompted.

## Input data

```json
{
  "username": "test123",
  "password": "pwd"
}
```

## Steps

1. Visit the login page.
2. Enter valid credentials.
3. Click the Log In button.
4. Verify that the successful "Welcome, user!" message is being prompted.

## Expected result

After completing the above steps, the test should pass and the user should be successfully logged in and successful log in message should be displayed.

## Code

```typescript
it("should prompt successful hello message, if provided credentials are correct", () => {
  const { username, password } = correctUser;

  cy.login(username, password);

  cy.get('label[id="loginstatus"]').should(
    "have.text",
    `Welcome, ${username}!`
  );
});
```
