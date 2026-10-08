/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * ESLint configuration for build tool config files (vite.config.ts, vitest.config.ts, etc.)
 *
 * This config enables linting and type-checking for configuration files that use Node.js APIs.
 * We declare `process` as a readonly global rather than adding full Node.js globals,
 * as config files typically only use process.env.
 */
export default [
  {
    files: ["vite.config.ts", "vite.config.mts", "vite.config.js", "vite.config.mjs"],
    languageOptions: {
      globals: {
        process: "readonly",
      },
    },
  },
  {
    files: ["vitest.config.ts", "vitest.config.mts", "vitest.config.js", "vitest.config.mjs"],
    languageOptions: {
      globals: {
        // vitest configs typically don't use process, but included for completeness
        process: "readonly",
      },
    },
  },
]
