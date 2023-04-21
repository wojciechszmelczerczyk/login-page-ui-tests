beforeEach(() => cy.visit("http://uitestingplayground.com/sampleapp"));

describe("Navbar", () => {
  describe("Redirect", () => {
    it("should redirect to main page when UITAP logo is click", () =>
      cy.checkRedirect("/"));

    it("should redirect to home page when home element is click", () =>
      cy.checkRedirect("/home"));

    it("should redirect to resources page when resources element is click", () =>
      cy.checkRedirect("/resources"));
  });
});
