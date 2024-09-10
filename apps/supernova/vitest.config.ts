/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */
import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import svgr from "vite-plugin-svgr"

export default defineConfig({
  plugins: [
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
  test: {
    globals: true,
    environment: "jsdom",
    include: ["**/*.test.tsx"],
    setupFiles: "./vitest.setup.ts",
    watch: true,
    typecheck: {
      tsconfig: "tsconfig.json",
    },
  },
})
