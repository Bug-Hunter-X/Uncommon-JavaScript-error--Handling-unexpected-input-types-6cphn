# Uncommon JavaScript Error: Handling Unexpected Input Types

This repository demonstrates a common but subtle error in JavaScript that arises when a function doesn't properly handle unexpected input types.  The `foo` function attempts to access the `length` property of the input `x`, which leads to a `TypeError` if `x` is not a string or an array.

The `bug.js` file contains the erroneous code. The `bugSolution.js` file demonstrates a more robust solution that uses type checking to prevent errors.

## How to reproduce the error

Clone this repository and run `bug.js`. Observe the `TypeError` when the function receives input that doesn't have a `length` property (e.g., `undefined`, `null`, or a number).

## How to solve the error

The solution uses `typeof` checks to ensure the input is either a string or an array before accessing the `length` property. This prevents the `TypeError` and makes the function more reliable.