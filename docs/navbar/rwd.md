# Responsiveness test cases

### Description

This test cases checks, if specific elements are visible/not visible in desktop and mobile size screens.

## Table of contents:

- [Steps](#steps)
- [Hamburger menu](#hamburger-menu)
- [Navbar elements](#navbar-resources-and-home-elements)

- [Code](#code)

## Hamburger menu

### Steps

1. Visit the login page. <br/>
   2a. Adjust screen width below 991px, size in this case to IPhone 7 size. <br/>
   2b. Adjust screen width above 991px, size in this case to Macbook 13 size. <br/>
   3a. Hamburger menu should be visible. <br/>
   3b. Hamburger menu should not be visible.

### Expected result

After completing the above steps for `a` alternative case, hamburger menu should be visible. However for `b` case hamburger should not be visible.

## Navbar resources and home elements

### Steps

1. Visit the login page.
   2a. Adjust screen width below 991px, size in this case to IPhone 7 size.
   2b. Adjust screen width above 991px, size in this case to Macbook 13 size.
   3a. Navbar elements should not be visible.
   3b. Navbar elements should be visible.

### Expected result

After completing the above steps for `a` alternative case, navbar home and resources elements should not be visible. However for `b` case elements should be visible.

## Code

[Responsive test cases](/cypress/e2e/navbar.cy.ts)
