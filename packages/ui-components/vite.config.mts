/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { PluginOption } from "vite"
import react from "@vitejs/plugin-react"

import tailwindcss from "@tailwindcss/vite"
import dts from "vite-plugin-dts"
import svgr from "vite-plugin-svgr"
import { defineConfig } from "vite"

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts", // or 'src/main.ts' if TypeScript
      name: "ui-components", // Replace with your library's global name
      formats: ["es"], // Output formats: ESM and CommonJS
      fileName: () => `index.js`, // Output file names
    },
    rollupOptions: {
      external: ["react", "react-dom"],
    },
    outDir: "build",
  },
  plugins: [
    tailwindcss(),
    dts({
      exclude: ["./__tests__/**/*.test.ts", "vitest.setup.ts"],
      insertTypesEntry: true, // Ensure types are properly exported
      outDir: "build", // Specify where to output the types
    }) as PluginOption,
    react() as PluginOption,
    svgr({
      svgrOptions: {
        ref: true,
        svgo: false,
        titleProp: true,
      },
      include: "**/*.svg",
    }) as PluginOption,
  ],
})
