# Login form test cases

## Description

Sample test cases for the [login form](http://uitestingplayground.com/sampleapp).

## Table of contents

- [Techstack](#techstack)
- [To run](#to-run)

## Techstack

- `Cypress`
- `TypeScript`

## Test cases

|                      Test case                       |                                          URL                                           |
| :--------------------------------------------------: | :------------------------------------------------------------------------------------: |
|   [`Successful login`](./docs/login/successful.md)   | [`http://uitestingplayground.com/sampleapp`](http://uitestingplayground.com/sampleapp) |
| [`Unsuccessful login`](./docs/login/unsuccessful.md) | [`http://uitestingplayground.com/sampleapp`](http://uitestingplayground.com/sampleapp) |

## Helper functions

|                      Function                       |
| :-------------------------------------------------: |
| [`Login function`](./docs/custom/login-function.md) |
|   [`Visit page hook`](./docs/hooks/visit-page.md)   |

## To run

Clone repository.

```sh
git clone https://github.com/wojciechszmelczerczyk/login-form-ui-tests.git
```

Navigate to project root folder.

```sh
cd ./login-form-ui-tests
```

Install dependencies.

```sh
npm i
```

Run tests.

```sh
npm run cypress:open
```
