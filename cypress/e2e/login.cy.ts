import * as userCredentials from "../fixtures/credentials.json";

const [correctUser, incorrectUser] = userCredentials;

describe("Login Form", () => {
  it("if provided user credentials are correct, prompt successful login message", () => {
    cy.visit("http://uitestingplayground.com/sampleapp");

    const { username, password } = correctUser;

    cy.login(username, password);

    cy.get('label[id="loginstatus"]').should(
      "have.text",
      `Welcome, ${username}!`
    );
  });
  it("if provided user credentials are incorrect, prompt error validation message", () => {
    cy.visit("http://uitestingplayground.com/sampleapp");

    const { username, password } = incorrectUser;

    cy.login(username, password);

    cy.get('label[id="loginstatus"]').should(
      "have.text",
      "Invalid username/password"
    );
  });
});
