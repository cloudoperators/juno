/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import react from "@vitejs/plugin-react"
import tailwindcss from "tailwindcss"
import autoprefixer from "autoprefixer"
import svgr from "vite-plugin-svgr"

export default ({ mode }) => {
  const sharedConfig = {
    root: "./",

    define: {
      "process.env": {},
    },

    plugins: [react(), svgr()],
    css: {
      postcss: {
        plugins: [tailwindcss, autoprefixer],
      },
    },

    server: {
      host: "0.0.0.0",
      port: parseInt(process.env.PORT || "8000"),
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

  // Default is a library
  return {
    ...sharedConfig,
    build: {
      outDir: "build",

      lib: {
        entry: "src/index.ts",
        formats: ["es"],
        fileName: () => `index.js`,
      },
    },
  }
}
