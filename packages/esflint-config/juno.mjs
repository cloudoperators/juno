import globals from "globals"
import pluginJs from "@eslint/js"
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js"
import { fixupConfigRules } from "@eslint/compat"
import jest from "eslint-plugin-jest"
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended"

// export default [
//   { files: ["**/*.{js,mjs,cjs,jsx}"] },
//   { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
//   { languageOptions: { globals: globals.browser } },
//   pluginJs.configs.recommended,
//   ...fixupConfigRules(pluginReactConfig),
// ]

export default [
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      sourceType: "module",
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: globals.browser,
    },
  },

  {
    files: [
      "**/*.test.js",
      "**/*.config.js",
      "__tests__/**",
      "test/__mocks__/**",
    ],
    languageOptions: { sourceType: "commonjs" },
  },

  pluginJs.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
  // ######### JEST ##########
  {
    files: ["__tests__/**", "**/*.test.js"],
    ...jest.configs["flat/recommended"],
    rules: {
      ...jest.configs["flat/recommended"].rules,
      "jest/prefer-expect-assertions": "off",
    },
  },
  //eslintPluginPrettierRecommended,
  {
    ignores: ["**/build/*"],
  },
]
