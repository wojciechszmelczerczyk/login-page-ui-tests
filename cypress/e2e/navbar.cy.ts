import * as screenDimensions from "../fixtures/devices.json";

const { iphone7, macbook13 } = screenDimensions;

beforeEach(() => cy.visit(Cypress.env("sample_app_url")));

describe("Navbar", () => {
  describe("Redirect", () => {
    it("should redirect to main page when UITAP logo is clicked", () =>
      cy.verifyUrlRedirect("/"));

    it("should redirect to home page when home element is clicked", () =>
      cy.verifyUrlRedirect("/home"));

    it("should redirect to resources page when resources element is clicked", () =>
      cy.verifyUrlRedirect("/resources"));
  });

  describe("Responsiveness", () => {
    context("Mobile", () => {
      it("hamburger menu should be visible on mobile size screen", () => {
        cy.checkHamburgerMenuVisibility(iphone7);
      });

      it("navbar home and resources elements should not be visible on mobile size screen", () => {
        cy.checkNavbarElementsVisibility(iphone7);
      });
    });

    context("Laptop", () => {
      it("hamburger menu should not be visible on laptop size screen", () => {
        cy.checkHamburgerMenuVisibility(macbook13);
      });

      it("navbar home and resources elements should be visible on laptop size screen", () => {
        cy.checkNavbarElementsVisibility(macbook13);
      });
    });
  });
});
