/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import dts from "vite-plugin-dts"

export default {
  build: {
    lib: {
      entry: "src/index.ts", // or 'src/main.ts' if TypeScript
      name: "k8s-client", // Replace with your library's global name
      formats: ["es", "cjs"], // Output formats: ESM and CommonJS
      fileName: (format) => `index.${format}.js`, // Output file names
    },
    outDir: "build",
  },
  plugins: [
    dts({
      exclude: ["./test/**/*.test.ts", "vitest.setup.ts"],
      insertTypesEntry: true, // Ensure types are properly exported
      outDir: "build", // Specify where to output the types
    }),
  ],
}
