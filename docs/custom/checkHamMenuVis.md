# Check hamburger menu visibility

## Description

Function which base on screen resolution verify if hamburger menu is visible or not.

## Code

Function takes device as a parameter which has [`schema`](/cypress/fixtures/devices.json). Next viewport is set specifically for provided device. If device width is larger than `991px`, which is breakpoint for UI/UX changes on test page, then hamburger menu should not be visible.

```typescript
Cypress.Commands.add(
  "checkHamburgerMenuVisibility",
  (device: IScreenDimensions) => {
    const { width, height } = device;

    cy.viewport(width, height);

    cy.get("[data-target='#navbarSupportedContent'").should(
      `${width > 991 ? "not.be.visible" : "be.visible"}`
    );
  }
);
```
