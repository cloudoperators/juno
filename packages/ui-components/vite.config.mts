/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { PluginOption, defineConfig, esmExternalRequirePlugin, UserConfig } from "vite"
import react from "@vitejs/plugin-react"

import tailwindcss from "@tailwindcss/vite"
import dts from "vite-plugin-dts"
import svgr from "vite-plugin-svgr"
import { peerDependencies } from "./package.json"

export default defineConfig((): UserConfig => {
  // Skip esmExternalRequirePlugin during Storybook builds to allow React bundling in static builds
  const isStorybookBuild = process.env.STORYBOOK_BUILDER === "true" || process.env.STORYBOOK === "true"

  return {
    build: {
      lib: {
        entry: "src/index.ts",
        name: "ui-components",
        formats: ["es"],
        fileName: () => `index.js`,
      },
      outDir: "build",
    },
    plugins: [
      // Vite 8: externalize peer dependencies and convert require() to import
      // Skip during Storybook builds to allow React bundling in static builds
      !isStorybookBuild
        ? esmExternalRequirePlugin({
            external: Object.keys(peerDependencies),
          })
        : undefined,
      tailwindcss(),
      dts({
        exclude: ["./__tests__/**/*.test.ts", "vitest.setup.ts"],
        insertTypesEntry: true,
        outDir: "build",
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
    ].filter(Boolean),
  }
})
