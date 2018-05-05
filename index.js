"use strict";

module.exports = {
  extends: ["eslint:recommended", "./rules"].map(require.resolve),

  env: {
    es6: true,
    browser: true,
    node: true,
    mocha: true,
    jasmine: true,
    jest: true,
  },

  parserOptions: {
    ecmaVersion: 2018,
  },

  globals: {
    angular: true,
  },
};
