/* eslint-disable quotes */

module.exports = {
  extends: ['eslint:recommended'], // overridden below unless new recommended rules are added before this doc is updated

  plugins: [],

  rules: {
    // http://eslint.org/docs/rules/

    // --------------------- POSSIBLE ERRORS ----------------------
    'no-await-in-loop': 0, // disallow `await` inside of loops
    'no-compare-neg-zero': 1, // disallow comparing against -0
    'no-cond-assign': 2, // disallow assignment operators in conditional expressions
    'no-console': 0, // disallow the use of `console`
    'no-constant-condition': 2, // disallow constant expressions in conditions
    'no-control-regex': 2, // disallow control characters in regular expressions
    'no-debugger': 2, // disallow the use of `debugger`
    'no-dupe-args': 2, // disallow duplicate arguments in function definitions
    'no-dupe-keys': 2, // disallow duplicate keys in object literals
    'no-duplicate-case': 2, // disallow duplicate case labels
    'no-empty': 2, // disallow empty block statements
    'no-empty-character-class': 2, // disallow empty character classes in regular expressions
    'no-ex-assign': 2, // disallow reassigning exceptions in `catch` clauses
    'no-extra-boolean-cast': 2, // disallow unnecessary boolean casts
    'no-extra-parens': [0, 'all', { returnAssign: false, nestedBinaryExpressions: false }], // disallow unnecessary parentheses
    'no-extra-semi': 2, // disallow unnecessary semicolons
    'no-func-assign': 2, // disallow reassigning `function` declarations
    'no-inner-declarations': [2, 'functions'], // disallow `function` or `var` declarations in nested blocks
    'no-invalid-regexp': 2, // disallow invalid regular expression strings in RegExp constructors
    'no-irregular-whitespace': 2, // disallow irregular whitespace outside of strings and comments
    'no-negated-in-lhs': 2, // disallow negating the left operand in `in` expressions
    'no-obj-calls': 2, // disallow calling the `Math` and `JSON` objects as functions,
    'no-prototype-builtins': 0, // Disallow use of `Object.prototypes` builtins directly
    'no-regex-spaces': 2, // disallow multiple spaces in regular expression literals
    'no-sparse-arrays': 2, // disallow sparse arrays
    'no-template-curly-in-string': 1, // disallow template literal placeholder syntax in regular strings
    'no-unexpected-multiline': 2, // disallow confusing multiline expressions
    'no-unreachable': 2, // disallow unreachable code after `return`, `throw`, `continue`, and `break` statements
    'no-unsafe-finally': 1, // disallow control flow statements in `finally` blocks
    'no-unsafe-negation': 2, // disallow negating the left operand of relational operators
    'use-isnan': 2, // require calls to `isNaN()` when checking for NaN
    'valid-jsdoc': 0, // enforce valid JSDoc comments
    'valid-typeof': 2, // enforce comparing `typeof` expressions against valid strings

    // --------------------- BEST PRACTICES ----------------------
    'accessor-pairs': 2, // enforce getter and setter pairs in objects
    'array-callback-return': 0, // enforce `return` statements in callbacks of array methods
    'block-scoped-var': 0, // enforce the use of variables within the scope they are defined
    'class-methods-use-this': 1, // enforce that class methods utilize `this`
    complexity: [1, { max: 15 }], // enforce a maximum cyclomatic complexity allowed in a program
    'consistent-return': 0, // require return statements to either always or never specify values
    curly: [1, 'multi-line', 'consistent'], // enforce consistent brace style for all control statements
    'default-case': 1, // require `default` cases in switch statements
    'dot-location': 0, // enforce consistent newlines before and after dots
    'dot-notation': 1, // enforce dot notation whenever possible
    eqeqeq: [1, 'smart'], // require the use of === and !==
    'guard-for-in': 1, // require `for-in` loops to include an `if` statement
    'no-alert': 1, // disallow the use of `alert`, `confirm`, and `prompt`
    'no-caller': 2, // disallow the use of `arguments.caller` or `arguments.callee`
    'no-case-declarations': 1, // disallow lexical declarations in case clauses
    'no-div-regex': 2, // disallow division operators explicitly at the beginning of regular expressions
    'no-else-return': 0, // disallow `else` blocks after `return` statements in `if` statements
    'no-empty-function': 0, // disallow empty functions
    'no-empty-pattern': 1, // disallow empty destructuring patterns
    'no-eq-null': 1, // disallow `null` comparisons without type-checking operators
    'no-eval': 1, // disallow the use of `eval()`
    'no-extend-native': 1, // disallow extending native types
    'no-extra-bind': 1, // disallow unnecessary calls to `.bind()`
    'no-extra-label': 1, // disallow unnecessary labels
    'no-fallthrough': 1, // disallow fallthrough of `case` statements
    'no-floating-decimal': 1, // disallow leading or trailing decimal points in numeric literals
    'no-global-assign': 1, // disallow assignments to native objects or read-only global variables
    'no-implicit-coercion': 0, // disallow shorthand type conversions
    'no-implicit-globals': 0, // disallow `var` and named `function` declarations in the global scope
    'no-implied-eval': 1, // disallow the use of `eval()`-like methods
    'no-invalid-this': 0, // disallow `this` keywords outside of classes or class-like objects
    'no-iterator': 2, // disallow the use of the `__iterator__` property
    'no-labels': 1, // disallow labeled statements
    'no-lone-blocks': 1, // disallow unnecessary nested blocks
    'no-loop-func': 1, // disallow `function` declarations and expressions inside loop statements
    'no-magic-numbers': [0, { ignore: [0, 1, 24, 60] }], // disallow magic numbers
    'no-multi-spaces': [0, { exceptions: { VariableDeclarator: true, Property: true } }], // disallow multiple spaces
    'no-multi-str': 1, // disallow multiline strings
    'no-native-reassign': 2, // disallow reassigning native objects
    'no-new': 2, // disallow `new` operators outside of assignments or comparisons
    'no-new-func': 1, // disallow `new` operators with the `Function` object
    'no-new-wrappers': 2, // disallow `new` operators with the `String`, `Number`, and `Boolean` objects
    'no-octal': 2, // disallow octal literals
    'no-octal-escape': 2, // disallow octal escape sequences in string literals
    'no-param-reassign': 0, // disallow reassigning `function` parameters
    'no-proto': 2, // disallow the use of the `__proto__` property
    'no-redeclare': [1, { builtinGlobals: true }], // disallow `var` redeclaration
    'no-restricted-properties': 0, // disallow certain properties on certain objects
    'no-return-assign': [1, 'always'], // disallow assignment operators in `return` statements
    'no-return-await': 1, // disallow unnecessary `return await`
    'no-script-url': 2, // disallow `javascript` urls
    'no-self-assign': [2, { props: true }], // disallow assignments where both sides are exactly the same
    'no-self-compare': 2, // disallow comparisons where both sides are exactly the same
    'no-sequences': 1, // disallow comma operators
    'no-throw-literal': 1, // disallow throwing literals as exceptions
    'no-unmodified-loop-condition': 1, // disallow unmodified loop conditions
    'no-unused-expressions': [
      2,
      {
        allowTaggedTemplates: true,
        allowShortCircuit: true,
        allowTernary: true,
      },
    ], // disallow unused expressions
    'no-unused-labels': 2, // disallow unused labels
    'no-useless-call': 1, // disallow unnecessary calls to `.call()` and `.apply()`
    'no-useless-concat': 1, // disallow unnecessary concatenation of literals or template literals
    'no-useless-escape': 1, // disallow unnecessary escape characters
    'no-useless-return': 1, // disallow redundant return statements
    'no-void': 1, // disallow `void` operators
    'no-warning-comments': 1, // disallow specified warning terms in comments
    'no-with': 2, // disallow `with` statements
    'prefer-promise-reject-errors': 1, // require using Error objects as Promise rejection reasons
    radix: 1, // enforce the consistent use of the radix argument when using `parseInt()`
    'require-await': 1, // disallow async functions which have no `await` expression
    'vars-on-top': 0, // require `var` declarations be placed at the top of their containing scope
    'wrap-iife': [1, 'any'], // require parentheses around immediate function invocations
    yoda: 0, // require or disallow “Yoda” conditions

    // Strict Mode
    strict: 0, // require or disallow strict mode directives

    // Variables
    'init-declarations': 0, // require or disallow initialization in `var` declarations
    'no-catch-shadow': 1, // disallow `catch` clause parameters from shadowing variables in the outer scope
    'no-delete-var': 2, // disallow deleting variables
    'no-label-var': 2, // disallow labels that share a name with a variable
    'no-restricted-globals': 0, // disallow specified global variables
    'no-shadow': 1, // disallow `var` declarations from shadowing variables in the outer scope
    'no-shadow-restricted-names': 2, // disallow identifiers from shadowing restricted names
    'no-undef': 1, // disallow the use of undeclared variables unless mentioned in `/*global */` comments
    'no-undef-init': 0, // disallow initializing variables to `undefined`
    'no-undefined': 0, // disallow the use of `undefined` as an identifier
    'no-unused-vars': [1, { argsIgnorePattern: '^(next|_)$' }], // disallow unused variables
    'no-use-before-define': [
      1,
      {
        variables: false,
        functions: false,
        classes: true,
      },
    ], // disallow the use of variables before they are defined

    // --------------------- NODE.JS AND COMMONJS ----------------------
    'callback-return': 0, // require `return` statements after callbacks
    'global-require': 0, // require `require()` calls to be placed at top-level module scope
    'handle-callback-err': [2, '^(err|error|.+Error$)'], // require error handling in max-nested-callbacks
    'no-mixed-requires': 1, // disallow `require` calls to be mixed with regular `var` declarations
    'no-new-require': 1, // disallow `new` operators with calls to `require`
    'no-path-concat': 1, // disallow string concatenation with `__dirname` and `__filename`
    'no-process-env': 0, // disallow the use of `process.env`
    'no-process-exit': 0, // disallow the use of `process.exit()`
    'no-restricted-modules': 0, // disallow specified modules when loaded by `require`
    'no-sync': 0, // disallow synchronous methods

    // --------------------- STYLISTIC ISSUES ----------------------
    'array-bracket-spacing': 0, // enforce consistent spacing inside array brackets
    'block-spacing': 0, // enforce consistent spacing inside single-line blocks
    'brace-style': 0, // enforce consistent brace style for blocks
    camelcase: 1, // enforce camelcase naming convention
    'capitalized-comments': 0, // enforce or disallow capitalization of the first letter of a comment
    'comma-dangle': [2, 'always-multiline'], // require or disallow trailing commas
    'comma-spacing': 1, // enforce consistent spacing before and after commas
    'comma-style': 0, // enforce consistent comma style
    'computed-property-spacing': 0, // enforce consistent spacing inside computed property brackets
    'consistent-this': 0, // enforce consistent naming when capturing the current execution context
    'eol-last': 1, // enforce at least one newline at the end of files
    'func-call-spacing': 1, // require or disallow spacing between `function` identifiers and their invocations
    'func-name-matching': 1, // require function names to match the name of the variable or property to which they are assigned
    'func-names': 0, // enforce named `function` expressions
    'function-paren-newline': ['error', 'multiline'],
    'func-style': 0, // enforce the consistent use of either `function` declarations or expressions
    'id-blacklist': 0, // disallow specified identifiers
    'id-length': [1, { exceptions: ['_', '$', 'i', 'j', 'k'] }], // enforce minimum and maximum identifier lengths
    'id-match': 0, // require identifiers to match a specified regular expression
    indent: [0, 2, { SwitchCase: 1, VariableDeclarator: { var: 2, let: 2, const: 3 } }], // enforce consistent indentation
    'jsx-quotes': [2, 'prefer-double'], // enforce the consistent use of either double or single quotes in JSX attributes
    'key-spacing': [1, { mode: 'minimum' }], // enforce consistent spacing between keys and values in object literal properties
    'keyword-spacing': 1, // enforce consistent spacing before and after keywords
    'line-comment-position': 0, // enforce position of line comments
    'linebreak-style': 1, // enforce consistent linebreak style
    'lines-around-comment': 0, // require empty lines around comments
    'lines-around-directive': 0, // require or disallow newlines around directives
    'max-depth': [1, { max: 6 }], // enforce a maximum depth that blocks can be nested
    'max-len': [1, { code: 100, ignoreStrings: true, ignoreTemplateLiterals: true }], // enforce a maximum line length
    'max-lines': [0, { max: 300 }], // enforce a maximum file length
    'max-nested-callbacks': [1, { max: 6 }], // enforce a maximum depth that callbacks can be nested
    'max-params': [1, { max: 6 }], // enforce a maximum number of parameters in `function` definitions
    'max-statements': [1, 30], // enforce a maximum number of statements allowed in `function` blocks
    'max-statements-per-line': [1, { max: 2 }], // enforce a maximum number of statements allowed per line
    'new-cap': [
      1,
      {
        capIsNew: false,
      },
    ], // require constructor `function` names to begin with a capital letter
    'new-parens': 0, // require parentheses when invoking a constructor with no arguments
    'newline-after-var': 0, // require or disallow an empty line after `var` declarations
    'newline-before-return': 0, // require an empty line before `return` statements
    'newline-per-chained-call': [1, { ignoreChainWithDepth: 3 }], // require a newline after each call in a method chain
    'no-array-constructor': 1, // disallow `Array` constructors
    'no-bitwise': [1, { allow: ['~'] }], // disallow bitwise operators
    'no-continue': 0, // disallow `continue` statements
    'no-inline-comments': 0, // disallow inline comments after code
    'no-lonely-if': 1, // disallow `if` statements as the only statement in `else` blocks
    'no-mixed-operators': 0, // disallow mixes of different operators
    'no-mixed-spaces-and-tabs': [1, 'smart-tabs'], // disallow mixed spaces and tabs for indentation
    'no-multi-assign': 0, // disallow use of chained assignment expressions
    'no-multiple-empty-lines': [1, { max: 2, maxEOF: 1 }], // disallow multiple empty lines
    'no-negated-condition': 0, // disallow negated conditions
    'no-nested-ternary': 1, // disallow nested ternary expressions
    'no-new-object': 0, // disallow `Object` constructors
    'no-plusplus': 0, // disallow the unary operators `++` and `--`
    'no-restricted-syntax': 0, // disallow specified syntax
    'no-spaced-func': 1, // disallow spacing between `function` identifiers and their applications
    'no-tabs': 0, // disallow tabs in file
    'no-ternary': 0, // disallow ternary operators
    'no-trailing-spaces': 1, // disallow trailing whitespace at the end of lines
    'no-underscore-dangle': 0, // disallow dangling underscores in identifiers
    'no-unneeded-ternary': 1, // disallow ternary operators when simpler alternatives exist
    'no-whitespace-before-property': 1, // disallow whitespace before properties
    'nonblock-statement-body-position': 1, // enforce the location of single-line statements
    'object-curly-newline': 0, // enforce consistent line breaks inside braces
    'object-curly-spacing': 0, // enforce consistent spacing inside braces
    'object-property-newline': 0, // enforce placing object properties on separate lines
    'one-var': 0, // enforce variables to be declared either together or separately in functions
    'one-var-declaration-per-line': 0, // require or disallow newlines around `var` declarations
    'operator-assignment': 0, // require or disallow assignment operator shorthand where possible
    'operator-linebreak': 0, // enforce consistent linebreak style for operators
    'padded-blocks': 0, // require or disallow padding within blocks
    'quote-props': [1, 'as-needed'], // require quotes around object literal property names
    quotes: [1, 'single', { avoidEscape: true, allowTemplateLiterals: true }], // enforce the consistent use of either backticks, double, or single quotes
    'require-jsdoc': 0, // require JSDoc comments
    semi: [0, 'always'], // require or disallow semicolons instead of ASI
    'semi-spacing': 0, // enforce consistent spacing before and after semicolons
    'sort-keys': [
      'warn',
      'asc',
      {
        caseSensitive: false,
        natural: true,
      },
    ], // requires object keys to be sorted
    'sort-vars': 0, // require variables within the same declaration block to be sorted
    'space-before-blocks': 0, // enforce consistent spacing before blocks
    'space-before-function-paren': 0, // enforce consistent spacing before `function` definition opening parenthesis
    'space-in-parens': 0, // enforce consistent spacing inside parentheses
    'space-infix-ops': 1, // require spacing around operators
    'space-unary-ops': 1, // enforce consistent spacing before or after unary operators
    'spaced-comment': 1, // enforce consistent spacing after the `//` or `/*` in a comment
    'template-tag-spacing': 0, // require or disallow spacing between template tags and their literals
    'unicode-bom': 0, // require or disallow the Unicode BOM
    'wrap-regex': 0, // require parenthesis around regex literals

    // --------------------- ECMASCRIPT 6 ----------------------
    'arrow-body-style': 0, // require braces around arrow function bodies
    'arrow-parens': 0, // require parentheses around arrow function arguments
    'arrow-spacing': 1, // enforce consistent spacing before and after the arrow in arrow functions
    'constructor-super': 2, // require `super()` calls in constructors
    'generator-star-spacing': 1, // enforce consistent spacing around `*` operators in generator functions
    'no-class-assign': 1, // disallow reassigning class members
    'no-confusing-arrow': [1, { allowParens: true }], // disallow arrow functions where they could be confused with comparisons
    'no-const-assign': 2, // disallow reassigning `const` variables
    'no-dupe-class-members': 0, // disallow duplicate class members
    'no-duplicate-imports': 1, // disallow duplicate module imports
    'no-new-symbol': 1, // disallow `new` operators with the `Symbol` object
    'no-restricted-imports': 0, // disallow specified modules when loaded by `import`
    'no-this-before-super': 2, // disallow `this`/`super` before calling `super()` in constructors
    'no-useless-computed-key': 1, // disallow unnecessary computed property keys in object literals
    'no-useless-constructor': 1, // disallow unnecessary constructors
    'no-useless-rename': 1, // disallow renaming import, export, and destructured assignments to the same name
    'no-var': 0, // require `let` or `const` instead of var
    'object-shorthand': 0, // require or disallow method and property shorthand syntax for object literals
    'prefer-arrow-callback': 0, // require arrow functions as callbacks
    'prefer-const': 1, // require `const` declarations for variables that are never reassigned after declared
    'prefer-destructuring': 1, // require destructuring from arrays and/or objects
    'prefer-numeric-literals': 0, // disallow `parseInt()` in favor of binary, octal, and hexadecimal literals
    'prefer-reflect': 0, // require `Reflect` methods where applicable
    'prefer-rest-params': 0, // require rest parameters instead of arguments
    'prefer-spread': 0, // require spread operators instead of `.apply()`
    'prefer-template': 0, // require template literals instead of string concatenation
    'require-yield': 2, // require generator functions to contain `yield`
    'sort-imports': 0, // enforce sorted import declarations within modules
    'symbol-description': 1, // require symbol descriptions
    'template-curly-spacing': [2, 'never'], // require or disallow spacing around embedded expressions of template strings
    'yield-star-spacing': 1, // require or disallow spacing around the `*` in `yield*` expressions
  },
};
