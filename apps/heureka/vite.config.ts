/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import react from "@vitejs/plugin-react"
import tailwindcss from "tailwindcss"
import autoprefixer from "autoprefixer"
import tsconfigPaths from "vite-tsconfig-paths"
import svgr from "vite-plugin-svgr"
import { TanStackRouterVite } from "@tanstack/router-plugin/vite"

export default ({ mode }) => {
  const sharedConfig = {
    root: "./",

    define: {
      "process.env": {},
    },

    plugins: [TanStackRouterVite({ target: "react", autoCodeSplitting: true }), react(), tsconfigPaths(), svgr()],
    css: {
      postcss: {
        plugins: [tailwindcss, autoprefixer],
      },
    },

    server: {
      host: "0.0.0.0",
      port: parseInt(process.env.PORT || "3000"),
      allowedHosts: true,
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
        assetsDir: "", // Prevents assets from being placed in a subdirectory
        rollupOptions: {
          output: {
            entryFileNames: "assets/[name]-[hash].js",
            chunkFileNames: "assets/[name]-[hash].js",
            assetFileNames: "assets/[name]-[hash][extname]",
            // This ensures files include a hash for cache busting
            sanitizeFileName: (name) => name.replace(/^_+/, ""), // Remove leading underscores
          },
        },
      },
    }
  }

  // Default is a library
  return {
    ...sharedConfig,
    build: {
      outDir: "build",

      lib: {
        entry: "src/index.tsx",
        formats: ["es"],
        fileName: () => `index.js`,
      },
    },
  }
}
