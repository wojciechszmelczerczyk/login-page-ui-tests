# Check navbar elements visibility

## Description

Function which base on screen resolution verify if navbar elements are visible or not.

## Code

Function takes device as a parameter which has [`schema`](/cypress/fixtures/devices.json). Next viewport is set specifically for provided device. If device width is larger than `991px`, which is breakpoint for UI/UX changes on test page, then navbar elements should be visible. Otherwise they aren't.

```typescript
Cypress.Commands.add(
  "checkNavbarElementsVisibility",
  (device: IScreenDimensions) => {
    const { width, height } = device;

    cy.viewport(width, height);

    cy.get("a[href='/home'").should(
      `${width > 991 ? "be.visible" : "not.be.visible"}`
    );

    cy.get("a[href='/resources'").should(
      `${width > 991 ? "be.visible" : "not.be.visible"}`
    );
  }
);
```
