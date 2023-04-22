# Login page test cases

## Description

Test cases for the [Sample page](http://uitestingplayground.com/sampleapp).

## Table of contents

- [Techstack](#techstack)
- [Test cases](#test-cases)
- [To run](#to-run)

## Techstack

- `Cypress`
- `TypeScript`

## Test cases

### Login

|                      Test case                       |
| :--------------------------------------------------: |
|   [`Successful login`](./docs/login/successful.md)   |
| [`Unsuccessful login`](./docs/login/unsuccessful.md) |

### Navbar

|                  Test case                  |
| :-----------------------------------------: |
| [`Redirects`](./docs/navbar/urlRedirect.md) |
|  [`Responsiveness`](./docs/navbar/rwd.md)   |

### Helper functions

|                             Function                              |
| :---------------------------------------------------------------: |
|        [`Login function`](./docs/custom/loginFunction.md)         |
|          [`Visit page hook`](./docs/hooks/visit-page.md)          |
|  [`Verify redirect`](./docs/custom/verifyUrlRedirectFunction.md)  |
| [`Verify hamburger visibility`](./docs/custom/checkHamMenuVis.md) |
|          [`Visit page hook`](./docs/hooks/visit-page.md)          |

## To run

Clone repository.

```sh
git clone https://github.com/wojciechszmelczerczyk/login-page-ui-tests.git
```

Navigate to project root folder.

```sh
cd ./login-page-ui-tests
```

Install dependencies.

```sh
npm i
```

Run tests.

```sh
npm run cypress:open
```
