// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

Cypress.Commands.add("login", (username, password) => {
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

Cypress.Commands.add("verifyUrlRedirect", (url: string) => {
  cy.get(`a[href='${url}']`).click();

  cy.url().should("be.equal", `http://uitestingplayground.com${url}`);
});

Cypress.Commands.add("checkHamburgerMenuVisibility", (device: string) => {
  cy.viewport(device as any);

  cy.get("[data-target='#navbarSupportedContent'").should(
    `${device === "macbook-13" ? "not.be.visible" : "be.visible"}`
  );
});

Cypress.Commands.add("checkNavbarElementsVisibility", (deviceName: string) => {
  cy.viewport(deviceName as any);

  cy.get("a[href='/home'").should(
    `${deviceName !== "macbook-13" ? "not.be.visible" : "be.visible"}`
  );

  cy.get("a[href='/resources'").should(
    `${deviceName !== "macbook-13" ? "not.be.visible" : "be.visible"}`
  );
});

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

declare global {
  namespace Cypress {
    interface Chainable {
      login(username: string, password: string): Chainable<void>;
      verifyUrlRedirect(url: string): Chainable<void>;
      checkHamburgerMenuVisibility(deviceName: string): Chainable<void>;
      checkNavbarElementsVisibility(deviceName: string): Chainable<void>;
      //   drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
      //   dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
      //   visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
    }
  }
}

export {};
