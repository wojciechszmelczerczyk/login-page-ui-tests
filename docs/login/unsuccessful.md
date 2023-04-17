# Unsuccessful login

## Description

This test case prevent user from successful log in, when credentials are invalid and validation error message is being prompted.

## Input data

```json
{
  "username": "test123",
  "password": "s"
}
```

## Steps

1. Visit the login page.
2. Enter invalid credentials.
3. Click the Log In button.
4. Verify that the `Invalid username/password` validation error message is shown.

## Expected result

After completing the above steps, the test should pass and the user should be prompted with an error message.

## Code

```typescript
it("should prompt error validation message, if provided credentials are incorrect", () => {
  const { username, password } = incorrectUser;

  cy.login(username, password);

  cy.get('label[id="loginstatus"]').should(
    "have.text",
    "Invalid username/password"
  );
});
```
