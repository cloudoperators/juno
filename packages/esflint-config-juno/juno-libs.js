const { resolve } = require("node:path");
/*
 * This is a custom ESLint configuration for use with
 * internal (bundled by their consumer) libraries
 * that utilize React.
 */

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended",
    "prettier",
    "plugin:react/recommended",
    // Turborepo custom eslint configuration configures the following rules:
    //  - https://github.com/vercel/turbo/blob/main/packages/eslint-plugin-turbo/docs/rules/no-undeclared-env-vars.md
    "eslint-config-turbo",
  ],
  plugins: ["only-warn","react"],
  globals: {
    React: true,
    JSX: true,
  },
  parserOptions: {
    sourceType: "module",
    allowImportExportEverywhere: true,
    ecmaVersion: "latest",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
  },
  ignorePatterns: [
    // Ignore dotfiles
    "node_modules/",
    "build/",
  ],
  rules: {
    "import/no-default-export": "off",
  },
  overrides: [
    // Force ESLint to detect .tsx files
    { files: ["*.js?(x)"] },
  ],
};
