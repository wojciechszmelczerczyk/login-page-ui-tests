# Visit Page pre hook

## Description

Function which navigate to `http://uitestingplayground.com/sampleapp` url before every test case.

## Code

```typescript
beforeEach(() => cy.visit("http://uitestingplayground.com/sampleapp"));
```
