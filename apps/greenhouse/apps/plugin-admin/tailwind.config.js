/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

module.exports = {
  presets: [
    require("@cloudoperators/juno-ui-components/build/lib/tailwind.config"), // important, do not change
  ],
  prefix: "", // important, do not change
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html", "../utils/**/*.{js,jsx,ts,tsx}"],
  corePlugins: {
    preflight: false, // important, do not change
  },
  theme: {},
  plugins: [],
}
