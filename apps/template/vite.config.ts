/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { defineConfig, UserConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig(({ mode }: { mode: string }): UserConfig => {
  const sharedConfig = {
    root: "./",

    define: {
      "process.env": {},
      "process.env.NODE_ENV": JSON.stringify(mode === "production" ? "production" : "development"),
    },

    plugins: [tailwindcss(), react(), tsconfigPaths()],

    server: {
      host: "0.0.0.0",
      port: parseInt(process.env.PORT || "3000"),
    },
  }

  // Static build mode (full standalone app)
  if (mode === "static") {
    return {
      ...sharedConfig,
      build: {
        outDir: "build",
      },
    }
  }

  // Production library build
  return {
    ...sharedConfig,
    build: {
      outDir: "build",

      lib: {
        entry: "src/index.tsx",
        formats: ["es"],
        fileName: () => `index.js`,
      },

      // For PoC: Bundle everything including React
      // Production: Should externalize and use import maps
      rollupOptions: {
        output: {
          inlineDynamicImports: true,
        },
      },
    },
  }
})
