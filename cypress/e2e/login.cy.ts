import * as userCredentials from "../fixtures/credentials.json";

const [correctUser, incorrectUser] = userCredentials;

describe("Login Form", () => {
  beforeEach(() => cy.visit("http://uitestingplayground.com/sampleapp"));

  it("should prompt successful hello message, if provided credentials are correct", () => {
    const { username, password } = correctUser;

    cy.login(username, password);

    cy.get('label[id="loginstatus"]').should(
      "have.text",
      `Welcome, ${username}!`
    );
  });

  it("should prompt error validation message, if provided credentials are incorrect", () => {
    const { username, password } = incorrectUser;

    cy.login(username, password);

    cy.get('label[id="loginstatus"]').should(
      "have.text",
      "Invalid username/password"
    );
  });
});
