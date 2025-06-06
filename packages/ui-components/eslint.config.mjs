// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import junoConfigs from "@cloudoperators/juno-config/eslint/juno-typescript.mjs"

export default [...junoConfigs, {
  files: ["test/__mocks__/svgLib.js", "src/**/*.test.js"],
  languageOptions: { sourceType: "module" },
}, {
  ignores: ["setupTests.js"],
}, ...storybook.configs["flat/recommended"]];
