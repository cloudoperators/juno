/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import dts from "vite-plugin-dts"
import { peerDependencies } from "./package.json"

export default {
  build: {
    lib: {
      entry: "src/index.ts", // or 'src/main.ts' if TypeScript
      name: "messages-provider", // Replace with your library's global name
      formats: ["es"], // Output formats: ESM and CommonJS
      fileName: () => `index.js`, // Output file names
    },
    outDir: "build",
    rollupOptions: {
      external: Object.keys(peerDependencies), // Specify which dependencies are external
    },
  },
  plugins: [
    dts({
      exclude: ["**/*.test.ts", "vitest.setup.ts"], // Exclude test files from type generation
      include: ["src/**/*.ts", "types/**/*.ts"], // Include your source and global types
      insertTypesEntry: true, // Ensure types are properly exported
      outDir: "build", // Specify where to output the types
      tsconfigPath: "./tsconfig.json",
      copyDtsFiles: true,
      compilerOptions: {
        // Exclude test files from the type generation
        exclude: ["**/*.test.ts", "vitest.setup.ts"],
      },
    }),
  ],
}
