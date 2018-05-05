"use strict";

module.exports = {
  extends: ["eslint:recommended"],

  env: {
    es6: true,
    browser: true,
    node: true,
    mocha: true,
    jasmine: true,
    jest: true,
  },

  globals: {
    angular: true,
  },

  parserOptions: {
    ecmaVersion: 2018,
  },

  rules: Object.keys(require("./rules")).length,
};
