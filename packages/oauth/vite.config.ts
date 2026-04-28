/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { defineConfig } from "vite"
import dts from "vite-plugin-dts"

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "oauth",
      formats: ["es"],
      fileName: () => `index.js`,
    },
    outDir: "build",
  },
  plugins: [
    dts({
      exclude: ["./__tests__/**/*.test.ts", "vitest.setup.ts"],
      insertTypesEntry: true,
      outDir: "build",
    }),
  ],
})
