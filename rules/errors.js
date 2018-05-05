module.exports = {
  "no-await-in-loop": 0, // disallow `await` inside of loops
  "no-compare-neg-zero": 1, // disallow comparing against -0
  "no-cond-assign": 2, // disallow assignment operators in conditional expressions
  "no-console": 0, // disallow the use of `console`
  "no-constant-condition": 2, // disallow constant expressions in conditions
  "no-control-regex": 2, // disallow control characters in regular expressions
  "no-debugger": 2, // disallow the use of `debugger`
  "no-dupe-args": 2, // disallow duplicate arguments in function definitions
  "no-dupe-keys": 2, // disallow duplicate keys in object literals
  "no-duplicate-case": 2, // disallow duplicate case labels
  "no-empty": 2, // disallow empty block statements
  "no-empty-character-class": 2, // disallow empty character classes in regular expressions
  "no-ex-assign": 2, // disallow reassigning exceptions in `catch` clauses
  "no-extra-boolean-cast": 2, // disallow unnecessary boolean casts
  "no-extra-parens": [
    0,
    "all",
    { returnAssign: false, nestedBinaryExpressions: false },
  ], // disallow unnecessary parentheses
  "no-extra-semi": 2, // disallow unnecessary semicolons
  "no-func-assign": 2, // disallow reassigning `function` declarations
  "no-inner-declarations": [2, "functions"], // disallow `function` or `var` declarations in nested blocks
  "no-invalid-regexp": 2, // disallow invalid regular expression strings in RegExp constructors
  "no-irregular-whitespace": 2, // disallow irregular whitespace outside of strings and comments
  "no-negated-in-lhs": 2, // disallow negating the left operand in `in` expressions
  "no-obj-calls": 2, // disallow calling the `Math` and `JSON` objects as functions,
  "no-prototype-builtins": 0, // Disallow use of `Object.prototypes` builtins directly
  "no-regex-spaces": 2, // disallow multiple spaces in regular expression literals
  "no-sparse-arrays": 2, // disallow sparse arrays
  "no-template-curly-in-string": 1, // disallow template literal placeholder syntax in regular strings
  "no-unexpected-multiline": 2, // disallow confusing multiline expressions
  "no-unreachable": 2, // disallow unreachable code after `return`, `throw`, `continue`, and `break` statements
  "no-unsafe-finally": 1, // disallow control flow statements in `finally` blocks
  "no-unsafe-negation": 2, // disallow negating the left operand of relational operators
  "use-isnan": 2, // require calls to `isNaN()` when checking for NaN
  "valid-jsdoc": 0, // enforce valid JSDoc comments
  "valid-typeof": 2, // enforce comparing `typeof` expressions against valid strings
};
