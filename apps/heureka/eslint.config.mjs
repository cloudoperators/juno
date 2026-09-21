/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import junoConfigs from "@cloudoperators/juno-config/eslint/vite-react-ts.mjs"

export default [
  ...junoConfigs,
  {
    // Config files are not included in tsconfig.json; ignoring them entirely
    // avoids "parserOptions.project" errors for files outside the project's include list.
    ignores: ["vite.config.ts", "vitest.config.ts", "vitest.setup.ts", "tailwind.config.ts"],
  },
  {
    rules: {
      // TanStack Router file-based routes require exporting both Route and the component from the
      // same file — splitting them would break the router's type inference. Fast-refresh impact is
      // acceptable because route files are not hot-reloaded on every save in production.
      "react-refresh/only-export-components": "off",

      // Several components intentionally call setState inside useEffect to synchronize derived
      // state when a prop changes (e.g. resetting pagination cursors, promise references). This
      // is a known React pattern documented at https://react.dev/learn/you-might-not-need-an-effect
      // and the rule produces false positives here because the setState calls are guarded by the
      // dependency that triggered the effect.
      "react-hooks/set-state-in-effect": "off",
    },
    // Some eslint-disable comments are needed only in CI where package type resolution differs.
    // Silencing unused-directive warnings avoids false positives in local development.
    linterOptions: {
      reportUnusedDisableDirectives: "off",
    },
  },
]
