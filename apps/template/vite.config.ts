/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { defineConfig, UserConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig(({ mode }: { mode: string }): UserConfig => {
  const sharedConfig = {
    root: "./",

    define: {
      "process.env": {},
    },

    resolve: {
      // Collapse every `react`/`react-dom` import (the app's own code and greenhouse-core's
      // createRoot) to a single copy. Without this, any React version skew between the template
      // and a consumed workspace package resolves to two instances and throws "Invalid hook call"
      // when running standalone (dev/static). Embedded in the Greenhouse host this is moot — the
      // host owns the single React — but the reference app should be robust on its own.
      dedupe: ["react", "react-dom"],
    },

    plugins: [tailwindcss(), react()],

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

      rollupOptions: {
        external: (id) => {
          if (id === "react" || id.startsWith("react/") || id === "react-dom" || id.startsWith("react-dom/")) {
            return true
          }
          if (id.startsWith("@cloudoperators/juno-ui-components")) return true
          if (id.startsWith("@cloudoperators/greenhouse-core")) return true
          return false
        },
      },
    },
  }
})
