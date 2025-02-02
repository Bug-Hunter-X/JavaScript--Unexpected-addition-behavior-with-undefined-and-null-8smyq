This repository demonstrates a common, yet easily missed, quirk in JavaScript's type coercion with the `+` operator. When adding `undefined` or `null` to a number, the result is unexpected. This can lead to subtle bugs in your code.

The `bug.js` file shows the unexpected behavior. The `bugSolution.js` file provides a fix using explicit checks for null and undefined values.