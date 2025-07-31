/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import junoConfigs from "@cloudoperators/juno-config/eslint/juno-typescript.mjs"
import reactHooksPlugin from "eslint-plugin-react-hooks"

export default [
  ...junoConfigs,
  {
    files: ["**/*.ts", "**/*.tsx"],
    plugins: {
      "react-hooks": reactHooksPlugin,
    },
    rules: {
      "no-unused-vars": "off",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "react/no-unused-vars": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "off",
      "tailwindcss/classnames-order": "off",
      "tailwindcss/no-custom-classname": "off",
      "tailwindcss/no-contradicting-classname": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-floating-promises": "off",
      "@typescript-eslint/no-redundant-type-constituents": "off",
      "@typescript-eslint/restrict-template-expressions": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unnecessary-type-assertion": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-misused-promises": "off",
      "@typescript-eslint/require-await": "off",
      "no-extra-boolean-cast": "off",
      "prefer-const": "off",
    },
    ignores: ["vitest.config.ts", "vite.config.ts", "vitest.setup.ts", "tailwind.config.ts"],
  },
]
