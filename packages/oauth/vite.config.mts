/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { defineConfig } from "vite"
import dts from "vite-plugin-dts"

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts", // or 'src/main.ts' if TypeScript
      name: "oauth", // Replace with your library's global name
      formats: ["es"], // Output formats: ESM and CommonJS
      fileName: (format) => `oauth.${format}.js`, // Output file names
    },
    outDir: "build",
  },
  plugins: [
    dts({
      exclude: ["./__tests__/**/*.test.ts", "vitest.setup.ts"],
      insertTypesEntry: true, // Ensure types are properly exported
      outDir: "build/types", // Specify where to output the types
    }),
  ],
})
