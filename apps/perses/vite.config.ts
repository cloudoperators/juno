/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import { Plugin } from "vite"

// Vite externalizes Node.js built-ins (e.g. diagnostics_channel, used by lru-cache)
// into a __vite-browser-external.mjs shim. When a consuming vite app (like greenhouse)
// serves that shim via /@fs/, its own browser-external plugin intercepts and replaces it
// with a shim that only exports `default` — breaking the `{ _ }` static import in our
// App chunk. This plugin redirects the problematic built-ins to harmless empty modules
// before rollup ever sees them, so the shim is never emitted.
function shimNodeBuiltins(): Plugin {
  const nodeBuiltins = ["diagnostics_channel", "node:diagnostics_channel"]
  const emptyModule = "export default {};\n"

  return {
    name: "shim-node-builtins",
    enforce: "pre",
    resolveId(id) {
      if (nodeBuiltins.includes(id)) return "\0shim:" + id
    },
    load(id) {
      if (id.startsWith("\0shim:")) return emptyModule
    },
  }
}

// https://vite.dev/config/
export default ({ mode }: { mode: string }) => {
  const sharedConfig = {
    root: "./",

    define: {
      "process.env": {},
      global: "window",
    },

    plugins: [tailwindcss(), react()],

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
        target: "esnext",
      },
    }
  }

  // Default is a library
  return {
    ...sharedConfig,
    plugins: [...(sharedConfig.plugins ?? []), shimNodeBuiltins()],
    build: {
      outDir: "build",
      target: "esnext",
      lib: {
        entry: "src/index.tsx",
        formats: ["es"],
        fileName: () => `index.js`,
      },
    },
  }
}
