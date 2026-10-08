/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { defineConfig, UserConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import { TanStackRouterVite } from "@tanstack/router-plugin/vite"

export default defineConfig(({ mode }: { mode: string }): UserConfig => {
  // In library mode, disable autoCodeSplitting since the host app handles routing
  // and we need all imports to respect the external configuration
  const isLibraryMode = mode !== "static"

  const sharedConfig = {
    root: "./",

    define: {
      "process.env": {},
    },

    plugins: [tailwindcss(), TanStackRouterVite({ target: "react", autoCodeSplitting: !isLibraryMode }), react()],

    server: {
      host: "0.0.0.0",
      port: parseInt(process.env.PORT || "3000"),
    },
  }

  // with vite it is possible to have different configurations based on the mode
  // we can use this to create a static build for previewing the app in github pages
  // and also to create a docker image for the standalone app
  if (mode === "static") {
    return {
      ...sharedConfig,
      build: {
        outDir: "build",
      },
    }
  }

  // Default is a library - externalize shared dependencies for embedding in greenhouse
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
          // Externalize react and its subpaths
          if (id === "react" || id.startsWith("react/") || id === "react-dom" || id.startsWith("react-dom/")) {
            return true
          }
          if (id === "react-error-boundary") return true
          // Externalize Juno packages and their subpaths (e.g., /index)
          if (id.startsWith("@cloudoperators/juno-ui-components")) return true
          if (id.startsWith("@cloudoperators/juno-url-state-provider")) return true
          if (id.startsWith("@cloudoperators/juno-messages-provider")) return true
          // Externalize TanStack packages
          if (id.startsWith("@tanstack/react-router")) return true
          return false
        },
      },
    },
  }
})
