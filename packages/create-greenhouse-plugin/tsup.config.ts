/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["src/cli.ts"],
  format: ["esm"],
  target: "node20",
  outDir: "build",
  clean: true,
  // CLI entry gets a shebang so `pnpm dlx` / `npx` can execute it directly.
  banner: { js: "#!/usr/bin/env node" },
})
