import userCredentials from "../fixtures/credentials.json";

const { username, password } = userCredentials;

describe("Login Form", () => {
  it("if provided user credentials are correct, log in successfully", () => {
    cy.visit("http://uitestingplayground.com/sampleapp");

    cy.get('[name="UserName"]').type(username);
    cy.get('[name="Password"]').type(password);

    cy.contains("Log In").click();
  });
});
