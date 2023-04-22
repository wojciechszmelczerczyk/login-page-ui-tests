import * as userCredentials from "../fixtures/credentials.json";

const [correctUser, incorrectUser, emptyUser] = userCredentials;

beforeEach(() => cy.visit(Cypress.env("sample_app_url")));

describe("Login Form", () => {
  describe("Successful login", () => {
    const { username, password } = correctUser;

    it("should prompt successful hello message and change button text to Log Out, if provided credentials are correct", () => {
      cy.login(username, password);

      cy.get('label[id="loginstatus"]').should(
        "have.text",
        `Welcome, ${username}!`
      );

      cy.get('button[id="login"]').should("contain", "Log Out");
    });

    it("should change button text to Log In and clear inputs, after successful log out", () => {
      cy.login(username, password);

      cy.get('button[id="login"]').click();

      cy.get('button[id="login"]').should("contain", "Log In");

      cy.get("input").should("contain", "");
    });
  });

  describe("Unsuccessful login", () => {
    it("should prompt error validation message, if provided credentials are incorrect", () => {
      const { username, password } = incorrectUser;

      cy.login(username, password);

      cy.get('label[id="loginstatus"]').should(
        "have.text",
        "Invalid username/password"
      );
    });
    it("should prompt error validation message, if no credentials are provided", () => {
      const { username, password } = emptyUser;

      cy.login(username, password);

      cy.get('label[id="loginstatus"]').should(
        "have.text",
        "Invalid username/password"
      );
    });
  });
});
