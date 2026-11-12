/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * smoke-e2e.mjs — integration smoke test for the scaffolder.
 *
 * Scaffolds a plugin into a temp directory OUTSIDE the monorepo, installs its
 * published dependencies with pnpm, then verifies both TypeScript projects compile
 * and the production build completes without errors.
 *
 * Run manually before a release or in CI as a pre-publish gate:
 *
 *   pnpm --filter @cloudoperators/create-greenhouse-plugin test:e2e
 *
 * Requires: pnpm on PATH, network access to the npm registry.
 */

import { mkdtempSync, rmSync, existsSync } from "node:fs"
import { tmpdir } from "node:os"
import { join, dirname } from "node:path"
import { fileURLToPath } from "node:url"
import { execSync } from "node:child_process"

const __dirname = dirname(fileURLToPath(import.meta.url))
const PKG_ROOT = join(__dirname, "..")
const CLI = join(PKG_ROOT, "build", "cli.js")

if (!existsSync(CLI)) {
  console.error(`[smoke-e2e] build/cli.js not found — run 'pnpm build' first`)
  process.exit(1)
}

const APP_NAME = "@smoke/greenhouse-plugin-e2e"
const target = mkdtempSync(join(tmpdir(), "gh-plugin-e2e-"))

function run(cmd, cwd = target) {
  console.log(`\n$ ${cmd}`)
  execSync(cmd, { stdio: "inherit", cwd })
}

try {
  console.log(`\n[smoke-e2e] scaffolding into ${target}`)
  run(`node "${CLI}" "${target}" --name "${APP_NAME}"`, tmpdir())

  console.log(`\n[smoke-e2e] installing published dependencies`)
  run(`pnpm install --no-frozen-lockfile`)

  console.log(`\n[smoke-e2e] type-checking both tsconfig references (tsc -b)`)
  run(`pnpm typecheck`)

  console.log(`\n[smoke-e2e] production library build`)
  run(`pnpm build`)

  console.log(`\n[smoke-e2e] PASSED`)
} catch (err) {
  console.error(`\n[smoke-e2e] FAILED: ${err.message}`)
  process.exitCode = 1
} finally {
  rmSync(target, { recursive: true, force: true })
}
