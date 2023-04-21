beforeEach(() => cy.visit("http://uitestingplayground.com/sampleapp"));

describe("Navbar", () => {
  describe("Redirect", () => {
    it("should redirect to main page when UITAP logo is clicked", () =>
      cy.checkRedirect("/"));

    it("should redirect to home page when home element is clicked", () =>
      cy.checkRedirect("/home"));

    it("should redirect to resources page when resources element is clicked", () =>
      cy.checkRedirect("/resources"));
  });

  describe("Responsiveness", () => {
    context("Mobile", () => {
      it("hamburger menu should be visible on mobile size screen", () => {
        cy.viewport("iphone-7");
        cy.get("[data-target='#navbarSupportedContent'").should("be.visible");
      });

      it("navbar home and resources elements should not be visible on mobile size screen", () => {
        cy.viewport("iphone-7");
        cy.get("a[href='/home'").should("not.be.visible");
        cy.get("a[href='/resources'").should("not.be.visible");
      });
    });

    context("Laptop", () => {
      it("hamburger menu should not be visible on laptop size screen", () => {
        cy.viewport("macbook-13");
        cy.get("[data-target='#navbarSupportedContent'").should(
          "not.be.visible"
        );
      });

      it("navbar home and resources elements should be visible on laptop size screen", () => {
        cy.viewport("macbook-13");
        cy.get("a[href='/home'").should("be.visible");
        cy.get("a[href='/resources'").should("be.visible");
      });
    });
  });
});
