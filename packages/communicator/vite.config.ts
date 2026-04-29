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
      name: "communicator",
      formats: ["es"],
      fileName: () => `index.js`,
    },
    outDir: "build",
  },
  plugins: [
    dts({
      exclude: ["**/*.test.ts", "vitest.setup.ts"],
      include: ["src/**/*.ts", "types/**/*.ts"],
      insertTypesEntry: true,
      outDir: "build",
      tsconfigPath: "./tsconfig.json",
      copyDtsFiles: true,
      compilerOptions: {
        rootDir: "src",
        exclude: ["**/*.test.ts", "vitest.setup.ts"],
      },
    }),
  ],
})
