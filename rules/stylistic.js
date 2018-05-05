module.exports = {
  "array-bracket-spacing": 0, // enforce consistent spacing inside array brackets
  "block-spacing": 0, // enforce consistent spacing inside single-line blocks
  "brace-style": 0, // enforce consistent brace style for blocks
  camelcase: 1, // enforce camelcase naming convention
  "capitalized-comments": 0, // enforce or disallow capitalization of the first letter of a comment
  "comma-dangle": [2, "always-multiline"], // require or disallow trailing commas
  "comma-spacing": 1, // enforce consistent spacing before and after commas
  "comma-style": 0, // enforce consistent comma style
  "computed-property-spacing": 0, // enforce consistent spacing inside computed property brackets
  "consistent-this": [1, "self"], // enforce consistent naming when capturing the current execution context
  "eol-last": 1, // enforce at least one newline at the end of files
  "func-call-spacing": 1, // require or disallow spacing between `function` identifiers and their invocations
  "func-name-matching": 1, // require function names to match the name of the variable or property to which they are assigned
  "func-names": 0, // enforce named `function` expressions
  "function-paren-newline": ["error", "multiline"],
  "func-style": 0, // enforce the consistent use of either `function` declarations or expressions
  "id-blacklist": 0, // disallow specified identifiers
  "id-length": [1, { exceptions: ["_", "$", "i", "j", "k"] }], // enforce minimum and maximum identifier lengths
  "id-match": 0, // require identifiers to match a specified regular expression
  indent: [
    0,
    2,
    { SwitchCase: 1, VariableDeclarator: { var: 2, let: 2, const: 3 } },
  ], // enforce consistent indentation
  "jsx-quotes": [0, "prefer-double"], // enforce the consistent use of either double or single quotes in JSX attributes
  "key-spacing": [1, { mode: "minimum" }], // enforce consistent spacing between keys and values in object literal properties
  "keyword-spacing": 1, // enforce consistent spacing before and after keywords
  "line-comment-position": 0, // enforce position of line comments
  "linebreak-style": 1, // enforce consistent linebreak style
  "lines-around-comment": 0, // require empty lines around comments
  "lines-around-directive": 0, // require or disallow newlines around directives
  "max-depth": [1, { max: 6 }], // enforce a maximum depth that blocks can be nested
  "max-len": [
    1,
    { code: 100, ignoreStrings: true, ignoreTemplateLiterals: true },
  ], // enforce a maximum line length
  "max-lines": [0, { max: 300 }], // enforce a maximum file length
  "max-nested-callbacks": [1, { max: 6 }], // enforce a maximum depth that callbacks can be nested
  "max-params": [1, { max: 6 }], // enforce a maximum number of parameters in `function` definitions
  "max-statements": [1, 30], // enforce a maximum number of statements allowed in `function` blocks
  "max-statements-per-line": [1, { max: 2 }], // enforce a maximum number of statements allowed per line
  "new-cap": [
    1,
    {
      capIsNew: false,
    },
  ], // require constructor `function` names to begin with a capital letter
  "new-parens": 1, // require parentheses when invoking a constructor with no arguments
  "newline-after-var": [1, "always"], // require or disallow an empty line after `var` declarations
  "newline-before-return": 0, // require an empty line before `return` statements
  "newline-per-chained-call": [1, { ignoreChainWithDepth: 3 }], // require a newline after each call in a method chain
  "no-array-constructor": 1, // disallow `Array` constructors
  "no-bitwise": [1, { allow: ["~"] }], // disallow bitwise operators
  "no-continue": 0, // disallow `continue` statements
  "no-inline-comments": 0, // disallow inline comments after code
  "no-lonely-if": 1, // disallow `if` statements as the only statement in `else` blocks
  "no-mixed-operators": 0, // disallow mixes of different operators
  "no-mixed-spaces-and-tabs": [1, "smart-tabs"], // disallow mixed spaces and tabs for indentation
  "no-multi-assign": 1, // disallow use of chained assignment expressions
  "no-multiple-empty-lines": [1, { max: 2, maxEOF: 1 }], // disallow multiple empty lines
  "no-negated-condition": 0, // disallow negated conditions
  "no-nested-ternary": 1, // disallow nested ternary expressions
  "no-new-object": 0, // disallow `Object` constructors
  "no-plusplus": 0, // disallow the unary operators `++` and `--`
  "no-restricted-syntax": 0, // disallow specified syntax
  "no-spaced-func": 1, // disallow spacing between `function` identifiers and their applications
  "no-tabs": 0, // disallow tabs in file
  "no-ternary": 0, // disallow ternary operators
  "no-trailing-spaces": 1, // disallow trailing whitespace at the end of lines
  "no-underscore-dangle": 0, // disallow dangling underscores in identifiers
  "no-unneeded-ternary": 1, // disallow ternary operators when simpler alternatives exist
  "no-whitespace-before-property": 1, // disallow whitespace before properties
  "nonblock-statement-body-position": 1, // enforce the location of single-line statements
  "object-curly-newline": 0, // enforce consistent line breaks inside braces
  "object-curly-spacing": 0, // enforce consistent spacing inside braces
  "object-property-newline": 0, // enforce placing object properties on separate lines
  "one-var": 0, // enforce variables to be declared either together or separately in functions
  "one-var-declaration-per-line": 0, // require or disallow newlines around `var` declarations
  "operator-assignment": 0, // require or disallow assignment operator shorthand where possible
  "operator-linebreak": 0, // enforce consistent linebreak style for operators
  "padded-blocks": 0, // require or disallow padding within blocks
  "quote-props": [1, "as-needed"], // require quotes around object literal property names
  quotes: [0, "double", { avoidEscape: true, allowTemplateLiterals: true }], // enforce the consistent use of either backticks, double, or single quotes
  "require-jsdoc": 0, // require JSDoc comments
  semi: [0, "always"], // require or disallow semicolons instead of ASI
  "semi-spacing": 0, // enforce consistent spacing before and after semicolons
  "sort-keys": [
    "warn",
    "asc",
    {
      caseSensitive: false,
      natural: true,
    },
  ], // requires object keys to be sorted
  "sort-vars": 1, // require variables within the same declaration block to be sorted
  "space-before-blocks": 0, // enforce consistent spacing before blocks
  "space-before-function-paren": 0, // enforce consistent spacing before `function` definition opening parenthesis
  "space-in-parens": 0, // enforce consistent spacing inside parentheses
  "space-infix-ops": 1, // require spacing around operators
  "space-unary-ops": 1, // enforce consistent spacing before or after unary operators
  "spaced-comment": 1, // enforce consistent spacing after the `//` or `/*` in a comment
  "template-tag-spacing": 0, // require or disallow spacing between template tags and their literals
  "unicode-bom": 0, // require or disallow the Unicode BOM
  "wrap-regex": 0, // require parenthesis around regex literals
};
