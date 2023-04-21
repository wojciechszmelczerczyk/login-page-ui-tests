# Redirect test cases

### Description

This tests cases check if redirects from `Login page` navbar works correctly i.e. if redirect destination url's are as expected.

## Table of contents:

- [Resource/URL map](#resourceurl-map)
- [Steps](#steps)
- [Expected result](#expected-result)
- [Code](#code)

### Resource/URL map

<b>Resource -> URL destination</b>

UITAP logo -> [`http://uitestingplayground.com/`](http://uitestingplayground.com/) <br/>
Home element -> [`http://uitestingplayground.com/home`](http://uitestingplayground.com/home) <br/>
Resources element -> [`http://uitestingplayground.com/resources`](http://uitestingplayground.com/resources)

### Steps

1. Visit the login page.
2. Click resource from a navbar.
3. Verify if url destination is as expected.

### Expected result

After completing the above steps, user should be redirected to destinated page.

### Code

[Redirect test cases](/cypress/e2e/navbar.cy.ts)
