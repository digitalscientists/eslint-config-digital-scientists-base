"use strict";
const cosmiconfig = require("cosmiconfig");
const prettierrc = cosmiconfig("prettier").searchSync();

const withPrettier = eslintConfig => {
  eslintConfig.extends.push("plugin:prettier/recommended");
  eslintConfig.plugins.push("prettier");
  eslintConfig.rules["prettier/prettier"] = ["error", prettierrc.config];
  return eslintConfig;
};

const eslintConfig = {
  extends: ["eslint:recommended", require.resolve("./rules")],

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

  plugins: [],

  rules: {},
};

module.exports = prettierrc ? withPrettier(eslintConfig) : eslintConfig;
