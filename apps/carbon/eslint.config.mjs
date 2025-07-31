import junoConfigs from "@cloudoperators/juno-config/eslint/juno-typescript.mjs"
import reactHooksPlugin from "eslint-plugin-react-hooks"
import tailwindcssPlugin from "eslint-plugin-tailwindcss/lib/config/recommended.js"
import typescriptPlugin from "@typescript-eslint/eslint-plugin"

export default [
  ...junoConfigs,
  {
    files: ["test/__mocks__/svgLib.js", "src/**/*.test.js"],
    ignores: ["setupTests.js"],
    languageOptions: {
      sourceType: "module",
    },
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended",
      "plugin:tailwindcss/recommended",
    ],
    plugins: {
      "react-hooks": reactHooksPlugin,
      tailwindcss: tailwindcssPlugin,
      "@typescript-eslint": typescriptPlugin,
    },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "tailwindcss/classnames-order": "warn",
      "tailwindcss/no-custom-classname": "warn",
      "tailwindcss/no-contradicting-classname": "error",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
    },
  },
]
