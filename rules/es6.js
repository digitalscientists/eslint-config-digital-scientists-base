module.exports = {
  "arrow-body-style": 0, // require braces around arrow function bodies
  "arrow-parens": 1, // require parentheses around arrow function arguments
  "arrow-spacing": 1, // enforce consistent spacing before and after the arrow in arrow functions
  "constructor-super": 2, // require `super()` calls in constructors
  "generator-star-spacing": 1, // enforce consistent spacing around `*` operators in generator functions
  "no-class-assign": 1, // disallow reassigning class members
  "no-confusing-arrow": [1, { allowParens: true }], // disallow arrow functions where they could be confused with comparisons
  "no-const-assign": 2, // disallow reassigning `const` variables
  "no-dupe-class-members": 1, // disallow duplicate class members
  "no-duplicate-imports": 1, // disallow duplicate module imports
  "no-new-symbol": 1, // disallow `new` operators with the `Symbol` object
  "no-restricted-imports": 0, // disallow specified modules when loaded by `import`
  "no-this-before-super": 2, // disallow `this`/`super` before calling `super()` in constructors
  "no-useless-computed-key": 1, // disallow unnecessary computed property keys in object literals
  "no-useless-constructor": 1, // disallow unnecessary constructors
  "no-useless-rename": 1, // disallow renaming import, export, and destructured assignments to the same name
  "no-var": 1, // require `let` or `const` instead of var
  "object-shorthand": 0, // require or disallow method and property shorthand syntax for object literals
  "prefer-arrow-callback": 0, // require arrow functions as callbacks
  "prefer-const": 2, // require `const` declarations for variables that are never reassigned after declared
  "prefer-destructuring": 1, // require destructuring from arrays and/or objects
  "prefer-numeric-literals": 0, // disallow `parseInt()` in favor of binary, octal, and hexadecimal literals
  "prefer-reflect": 0, // require `Reflect` methods where applicable
  "prefer-rest-params": 0, // require rest parameters instead of arguments
  "prefer-spread": 0, // require spread operators instead of `.apply()`
  "prefer-template": 0, // require template literals instead of string concatenation
  "require-yield": 2, // require generator functions to contain `yield`
  "sort-imports": 0, // enforce sorted import declarations within modules
  "symbol-description": 1, // require symbol descriptions
  "template-curly-spacing": [2, "never"], // require or disallow spacing around embedded expressions of template strings
  "yield-star-spacing": 1, // require or disallow spacing around the `*` in `yield*` expressions
};
