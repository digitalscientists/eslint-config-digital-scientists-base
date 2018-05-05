module.exports = {
  "callback-return": 0, // require `return` statements after callbacks
  "global-require": 0, // require `require()` calls to be placed at top-level module scope
  "handle-callback-err": [2, "^(err|error|.+Error$)"], // require error handling in max-nested-callbacks
  "no-mixed-requires": 1, // disallow `require` calls to be mixed with regular `var` declarations
  "no-new-require": 1, // disallow `new` operators with calls to `require`
  "no-path-concat": 1, // disallow string concatenation with `__dirname` and `__filename`
  "no-process-env": 0, // disallow the use of `process.env`
  "no-process-exit": 0, // disallow the use of `process.exit()`
  "no-restricted-modules": 0, // disallow specified modules when loaded by `require`
  "no-sync": 0, // disallow synchronous methods
};
