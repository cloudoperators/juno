/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { defineConfig } from "vite"

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.js", // or 'src/main.ts' if TypeScript
      name: "url-state-provider", // Replace with your library's global name
      formats: ["es"], // Output formats: ESM and CommonJS
      fileName: () => `index.js`, // Output file names
    },
    outDir: "build",
  },
})
