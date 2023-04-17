import * as userCredentials from "../fixtures/credentials.json";

const { username, password } = userCredentials;

describe("Login Form", () => {
  it("if provided user credentials are correct, prompt successful login message", () => {
    cy.visit("http://uitestingplayground.com/sampleapp");

    cy.login(username, password);

    cy.get('label[id="loginstatus"]').should(
      "have.text",
      `Welcome, ${username}!`
    );
  });
});
