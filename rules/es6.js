module.exports = {
  // require braces around arrow function bodies
  "arrow-body-style": [1, "as-needed"],
  // require parentheses around arrow function arguments
  "arrow-parens": 0,
  // enforce consistent spacing before and after the arrow in arrow functions
  "arrow-spacing": 1,
  // require `super()` calls in constructors
  "constructor-super": 2,
  // enforce consistent spacing around `*` operators in generator functions
  "generator-star-spacing": 1,
  // disallow reassigning class members
  "no-class-assign": 1,
  // disallow arrow functions where they could be confused with comparisons
  "no-confusing-arrow": [1, { allowParens: true }],
  // disallow reassigning `const` variables
  "no-const-assign": 2,
  // disallow duplicate class members
  "no-dupe-class-members": 1,
  // disallow duplicate module imports
  "no-duplicate-imports": 1,
  // disallow `new` operators with the `Symbol` object
  "no-new-symbol": 1,
  // disallow specified modules when loaded by `import`
  "no-restricted-imports": 0,
  // disallow `this`/`super` before calling `super()` in constructors
  "no-this-before-super": 2,
  // disallow unnecessary computed property keys in object literals
  "no-useless-computed-key": 1,
  // disallow unnecessary constructors
  "no-useless-constructor": 1,
  // disallow renaming import, export, and destructured assignments to the same name
  "no-useless-rename": 1,
  // require `let` or `const` instead of var
  "no-var": 1,
  // require or disallow method and property shorthand syntax for object literals
  "object-shorthand": [1, "always", { avoidExplicitReturnArrows: true }],
  // require arrow functions as callbacks
  "prefer-arrow-callback": [1, { allowUnboundThis: true }],
  // require `const` declarations for variables that are never reassigned after declared
  "prefer-const": 2,
  // require destructuring from arrays and/or objects
  "prefer-destructuring": 1,
  // disallow `parseInt()` in favor of binary, octal, and hexadecimal literals
  "prefer-numeric-literals": 0,
  // require `Reflect` methods where applicable
  "prefer-reflect": 0,
  // require rest parameters instead of arguments
  "prefer-rest-params": 0,
  // require spread operators instead of `.apply()`
  "prefer-spread": 0,
  // require template literals instead of string concatenation
  "prefer-template": 0,
  // require generator functions to contain `yield`
  "require-yield": 2,
  // enforce sorted import declarations within modules
  "sort-imports": 0,
  // require symbol descriptions
  "symbol-description": 1,
  // require or disallow spacing around embedded expressions of template strings
  "template-curly-spacing": [2, "never"],
  // require or disallow spacing around the `*` in `yield*` expressions
  "yield-star-spacing": 1,
};
