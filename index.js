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
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    require.resolve("./rules"),
  ],

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

  plugins: ["import", "no-loops", "promise"],

  rules: {
    "import/no-dynamic-require": 0,
    "import/no-commonjs": 0,
    "import/no-nodejs-modules": 0,
    "import/first": [2, "absolute-first"],
    "import/exports-last": 1,
    "import/no-duplicates": 2,
    "import/no-namespace": 1,
    "import/extensions": [
      2,
      "always",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "import/order": [
      1,
      {
        "newlines-between": "always",
      },
    ],
    "import/newline-after-import": [1, { count: 2 }],
    "import/prefer-default-export": 0,
    "import/max-dependencies": 0,
    "import/no-unassigned-import": 1,
    "import/no-default-export": 0,
    "import/no-anonymous-default-export": 0,
    "import/group-exports": 0,
    "no-loops/no-loops": 1,
    "promise/always-return": "error",
    "promise/avoid-new": "warn",
    "promise/catch-or-return": "error",
    "promise/no-callback-in-promise": "warn",
    "promise/no-native": "off",
    "promise/no-nesting": "warn",
    "promise/no-new-statics": "error",
    "promise/no-promise-in-callback": "warn",
    "promise/no-return-in-finally": "warn",
    "promise/no-return-wrap": "error",
    "promise/param-names": "error",
    "promise/valid-params": "warn",
  },
};

module.exports = prettierrc ? withPrettier(eslintConfig) : eslintConfig;
