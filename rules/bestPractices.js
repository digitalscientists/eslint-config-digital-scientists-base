module.exports = {
  "accessor-pairs": 2, // enforce getter and setter pairs in objects
  "array-callback-return": 1, // enforce `return` statements in callbacks of array methods
  "block-scoped-var": 1, // enforce the use of variables within the scope they are defined
  "class-methods-use-this": 1, // enforce that class methods utilize `this`
  complexity: [1, { max: 5 }], // enforce a maximum cyclomatic complexity allowed in a program
  "consistent-return": 0, // require return statements to either always or never specify values
  curly: [1, "multi-line", "consistent"], // enforce consistent brace style for all control statements
  "default-case": 1, // require `default` cases in switch statements
  "dot-location": 0, // enforce consistent newlines before and after dots
  "dot-notation": 1, // enforce dot notation whenever possible
  eqeqeq: [1, "smart"], // require the use of === and !==
  "guard-for-in": 1, // require `for-in` loops to include an `if` statement
  "no-alert": 1, // disallow the use of `alert`, `confirm`, and `prompt`
  "no-caller": 2, // disallow the use of `arguments.caller` or `arguments.callee`
  "no-case-declarations": 1, // disallow lexical declarations in case clauses
  "no-div-regex": 2, // disallow division operators explicitly at the beginning of regular expressions
  "no-else-return": 0, // disallow `else` blocks after `return` statements in `if` statements
  "no-empty-function": 0, // disallow empty functions
  "no-empty-pattern": 1, // disallow empty destructuring patterns
  "no-eq-null": 1, // disallow `null` comparisons without type-checking operators
  "no-eval": 1, // disallow the use of `eval()`
  "no-extend-native": 1, // disallow extending native types
  "no-extra-bind": 1, // disallow unnecessary calls to `.bind()`
  "no-extra-label": 1, // disallow unnecessary labels
  "no-fallthrough": 1, // disallow fallthrough of `case` statements
  "no-floating-decimal": 1, // disallow leading or trailing decimal points in numeric literals
  "no-global-assign": 1, // disallow assignments to native objects or read-only global variables
  "no-implicit-coercion": 0, // disallow shorthand type conversions
  "no-implicit-globals": 0, // disallow `var` and named `function` declarations in the global scope
  "no-implied-eval": 1, // disallow the use of `eval()`-like methods
  "no-invalid-this": 0, // disallow `this` keywords outside of classes or class-like objects
  "no-iterator": 2, // disallow the use of the `__iterator__` property
  "no-labels": 1, // disallow labeled statements
  "no-lone-blocks": 1, // disallow unnecessary nested blocks
  "no-loop-func": 1, // disallow `function` declarations and expressions inside loop statements
  "no-magic-numbers": [0, { ignore: [0, 1, 24, 60] }], // disallow magic numbers
  "no-multi-spaces": [
    0,
    { exceptions: { VariableDeclarator: true, Property: true } },
  ], // disallow multiple spaces
  "no-multi-str": 1, // disallow multiline strings
  "no-native-reassign": 2, // disallow reassigning native objects
  "no-new": 2, // disallow `new` operators outside of assignments or comparisons
  "no-new-func": 1, // disallow `new` operators with the `Function` object
  "no-new-wrappers": 2, // disallow `new` operators with the `String`, `Number`, and `Boolean` objects
  "no-octal": 2, // disallow octal literals
  "no-octal-escape": 2, // disallow octal escape sequences in string literals
  "no-param-reassign": 1, // disallow reassigning `function` parameters
  "no-proto": 2, // disallow the use of the `__proto__` property
  "no-redeclare": [1, { builtinGlobals: true }], // disallow `var` redeclaration
  "no-restricted-properties": 0, // disallow certain properties on certain objects
  "no-return-assign": [1, "always"], // disallow assignment operators in `return` statements
  "no-return-await": 1, // disallow unnecessary `return await`
  "no-script-url": 2, // disallow `javascript` urls
  "no-self-assign": [2, { props: true }], // disallow assignments where both sides are exactly the same
  "no-self-compare": 2, // disallow comparisons where both sides are exactly the same
  "no-sequences": 1, // disallow comma operators
  "no-throw-literal": 1, // disallow throwing literals as exceptions
  "no-unmodified-loop-condition": 1, // disallow unmodified loop conditions
  "no-unused-expressions": [
    2,
    {
      allowTaggedTemplates: true,
      allowShortCircuit: true,
      allowTernary: true,
    },
  ], // disallow unused expressions
  "no-unused-labels": 2, // disallow unused labels
  "no-useless-call": 1, // disallow unnecessary calls to `.call()` and `.apply()`
  "no-useless-concat": 1, // disallow unnecessary concatenation of literals or template literals
  "no-useless-escape": 1, // disallow unnecessary escape characters
  "no-useless-return": 1, // disallow redundant return statements
  "no-void": 1, // disallow `void` operators
  "no-warning-comments": 1, // disallow specified warning terms in comments
  "no-with": 2, // disallow `with` statements
  "prefer-promise-reject-errors": 1, // require using Error objects as Promise rejection reasons
  radix: 1, // enforce the consistent use of the radix argument when using `parseInt()`
  "require-await": 1, // disallow async functions which have no `await` expression
  "vars-on-top": 1, // require `var` declarations be placed at the top of their containing scope
  "wrap-iife": [1, "any"], // require parentheses around immediate function invocations
  yoda: 0, // require or disallow “Yoda” conditions

  // Strict Mode
  strict: 0, // require or disallow strict mode directives

  // Variables
  "init-declarations": [2, "always"], // require or disallow initialization in `var` declarations
  "no-catch-shadow": 1, // disallow `catch` clause parameters from shadowing variables in the outer scope
  "no-delete-var": 2, // disallow deleting variables
  "no-label-var": 2, // disallow labels that share a name with a variable
  "no-restricted-globals": 0, // disallow specified global variables
  "no-shadow": 1, // disallow `var` declarations from shadowing variables in the outer scope
  "no-shadow-restricted-names": 2, // disallow identifiers from shadowing restricted names
  "no-undef": 1, // disallow the use of undeclared variables unless mentioned in `/*global */` comments
  "no-undef-init": 0, // disallow initializing variables to `undefined`
  "no-undefined": 0, // disallow the use of `undefined` as an identifier
  "no-unused-vars": [1, { argsIgnorePattern: "^(next|_)$" }], // disallow unused variables
  "no-use-before-define": [
    1,
    {
      variables: false,
      functions: false,
      classes: true,
    },
  ], // disallow the use of variables before they are defined
};
