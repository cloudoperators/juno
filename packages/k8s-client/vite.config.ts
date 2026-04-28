/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { defineConfig, esmExternalRequirePlugin } from "vite"
import dts from "vite-plugin-dts"

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "k8s-client",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format}.js`,
    },
    outDir: "build",
  },
  plugins: [
    // Vite 8: externalize node built-ins and convert require() to import
    esmExternalRequirePlugin({
      external: ["https"], // https is a Node.js built-in module, not from package.json
    }),
    dts({
      exclude: ["./test/**/*.test.ts", "vitest.setup.ts"],
      insertTypesEntry: true,
      outDir: "build",
    }),
  ],
})
