import { PluginOption, defineConfig, esmExternalRequirePlugin } from "vite"
import react from "@vitejs/plugin-react"

import tailwindcss from "@tailwindcss/vite"
import dts from "vite-plugin-dts"
import svgr from "vite-plugin-svgr"
import { peerDependencies } from "./package.json"

// Detect if running under Storybook by checking process.argv
const isStorybookBuild = process.argv.some(arg =>
  arg.includes('storybook') || arg.includes('.storybook')
)

export default defineConfig({
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
    !isStorybookBuild ? esmExternalRequirePlugin({
      external: Object.keys(peerDependencies),
    }) : null,
    tailwindcss(),
    dts({
      exclude: ["./__tests__/**/*.test.ts", "vitest.setup.ts"],
      include: ["src/**/*.ts", "src/**/*.tsx"],
      insertTypesEntry: true,
      outDir: "build",
      tsconfigPath: "./tsconfig.json",
      copyDtsFiles: true,
      compilerOptions: {
        rootDir: "src",
      },
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
})
