/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { defineConfig, esmExternalRequirePlugin } from "vite"
import dts from "vite-plugin-dts"
import { peerDependencies } from "./package.json"

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "messages-provider",
      formats: ["es"],
      fileName: () => `index.js`,
    },
    outDir: "build",
  },
  plugins: [
    // Vite 8: externalize peer dependencies and convert require() to import
    esmExternalRequirePlugin({
      external: Object.keys(peerDependencies),
    }),
    dts({
      exclude: ["**/*.test.ts", "vitest.setup.ts"],
      include: ["src/**/*.ts"],
      insertTypesEntry: true,
      outDir: "build",
      tsconfigPath: "./tsconfig.json",
      copyDtsFiles: true,
      compilerOptions: {
        rootDir: "src",
      },
    }),
  ],
})
