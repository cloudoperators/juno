/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

module.exports = {
  presets: [require("@cloudoperators/juno-ui-components/build/lib/tailwind.config")],
  prefix: "", // important, do not change
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  corePlugins: {
    preflight: false,
  },
  theme: {},
  plugins: [],
}
