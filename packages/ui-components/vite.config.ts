/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "tailwindcss"
import autoprefixer from "autoprefixer"
import dts from "vite-plugin-dts"
import viteGlobPlugin from "vite-plugin-glob"

import svgr from "vite-plugin-svgr"

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  build: {
    lib: {
      entry: "src/index.ts", // or 'src/main.ts' if TypeScript
      name: "url-state-provider", // Replace with your library's global name
      formats: ["es"], // Output formats: ESM and CommonJS
      fileName: () => `index.js`, // Output file names
    },
    rollupOptions: {
      external: ["react", "react-dom"],
    },
    outDir: "build",
  },
  plugins: [
    viteGlobPlugin(),
    dts({
      exclude: ["./__tests__/**/*.test.ts", "vitest.setup.ts"],
      insertTypesEntry: true, // Ensure types are properly exported
      outDir: "build/types", // Specify where to output the types
    }),
    react(),
    svgr({
      svgrOptions: {
        ref: true,
        svgo: false,
        titleProp: true,
      },
      include: "**/*.svg",
    }),
  ],
})
