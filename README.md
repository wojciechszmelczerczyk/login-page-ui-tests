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

|                      Test case                       |
| :--------------------------------------------------: |
|   [`Successful login`](./docs/login/successful.md)   |
| [`Unsuccessful login`](./docs/login/unsuccessful.md) |

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
