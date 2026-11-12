/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * sync-template.mjs — build the standalone plugin blueprint.
 *
 * Scaffolds a fresh vite react-ts app into `template/` then overlays the
 * Greenhouse-specific files from `apps/template`:
 *
 *   - src/            (App.tsx, index.tsx, types/, components/, styles.css, assets/)
 *   - index.html      (appProps.json fetch + plugin mount)
 *   - vite.config.ts  (dedupe, tailwind, library build)
 *   - appProps.template.json
 *   - AGENTS.md       (intent skill-loading block)
 *   - README.md
 *   - LICENSE
 *
 * Then patches package.json to add the Greenhouse runtime deps, exports, license,
 * and intent.skills — and sets the app-name token for scaffold substitution.
 *
 * The result is checked in under `template/` and shipped in the npm tarball. Re-run
 * whenever `apps/template` or the pinned package versions change (it is idempotent).
 */

import { readFileSync, writeFileSync, rmSync, cpSync } from "node:fs"
import { join, dirname } from "node:path"
import { fileURLToPath } from "node:url"
import { execSync } from "node:child_process"

const __dirname = dirname(fileURLToPath(import.meta.url))
const PKG_ROOT = join(__dirname, "..")
const MONOREPO_ROOT = join(PKG_ROOT, "..", "..")
const TEMPLATE_SRC = join(MONOREPO_ROOT, "apps", "template")
const TEMPLATE_OUT = join(PKG_ROOT, "template")

/** Token the CLI replaces with the user's chosen plugin name. */
const APP_NAME_TOKEN = "__APP_NAME__"

/**
 * Return the latest published version of a package from the npm registry.
 * Throws if the registry is unreachable — so the template always references an
 * installable version and registry errors are visible rather than silently
 * falling back to an unpublished monorepo version.
 */
function publishedVersion(packageName) {
  const version = execSync(`npm view ${packageName} version`, { encoding: "utf8" }).trim()
  if (!version) throw new Error(`[sync-template] no version returned for ${packageName}`)
  return version
}

const TEMPLATE_PKG = JSON.parse(readFileSync(join(TEMPLATE_SRC, "package.json"), "utf8"))
const MONOREPO_PKG = JSON.parse(readFileSync(join(MONOREPO_ROOT, "package.json"), "utf8"))
const UI_COMPONENTS_VERSION = publishedVersion("@cloudoperators/juno-ui-components")
const GREENHOUSE_CORE_VERSION = publishedVersion("@cloudoperators/greenhouse-core")
const INTENT_VERSION = MONOREPO_PKG.devDependencies["@tanstack/intent"]

/** Scaffold a fresh vite react-ts app into TEMPLATE_OUT. */
function scaffoldVite() {
  const createViteBin = join(PKG_ROOT, "node_modules", "create-vite", "index.js")
  execSync(`node "${createViteBin}" template --template react-ts --no-eslint --no-immediate --no-interactive`, {
    stdio: "inherit",
    cwd: PKG_ROOT,
    env: { ...process.env, npm_config_yes: "true" },
  })
}

/** Overlay Greenhouse-specific files from apps/template on top of the vite scaffold. */
function overlayGreenhouseFiles() {
  // src/ — replace vite's default src entirely with the Greenhouse plugin source
  rmSync(join(TEMPLATE_OUT, "src"), { recursive: true, force: true })
  cpSync(join(TEMPLATE_SRC, "src"), join(TEMPLATE_OUT, "src"), { recursive: true })
  // drop the placeholder test — consumers set up their own testing
  rmSync(join(TEMPLATE_OUT, "src", "components", "AppContent.test.tsx"), { force: true })
  // public/ — not used, our index.html references src/assets/favicon.ico directly
  rmSync(join(TEMPLATE_OUT, "public"), { recursive: true, force: true })
  // index.html — fetches appProps.json and mounts the plugin
  cpSync(join(TEMPLATE_SRC, "index.html"), join(TEMPLATE_OUT, "index.html"))
  // vite.config.ts — library + static build modes, React dedupe, rollupOptions externals
  cpSync(join(TEMPLATE_SRC, "vite.config.ts"), join(TEMPLATE_OUT, "vite.config.ts"))
  // appProps.template.json — renamed to appProps.json by the CLI at scaffold time
  cpSync(join(TEMPLATE_SRC, "appProps.template.json"), join(TEMPLATE_OUT, "appProps.template.json"))
  // AGENTS.md — intent skill-loading instructions for coding agents
  cpSync(join(TEMPLATE_SRC, "AGENTS.md"), join(TEMPLATE_OUT, "AGENTS.md"))
  cpSync(join(__dirname, "template-readme.md"), join(TEMPLATE_OUT, "README.md"))
}

/** Patch the vite-generated package.json with Greenhouse runtime deps and metadata. */
function patchPackageJson() {
  const p = join(TEMPLATE_OUT, "package.json")
  const pkg = JSON.parse(readFileSync(p, "utf8"))

  pkg.name = APP_NAME_TOKEN
  pkg.version = "0.1.0"
  pkg.author = "__AUTHOR__"
  pkg.repository = "__REPOSITORY__"
  pkg.exports = { ".": "./build/index.js" }

  // Add Greenhouse runtime deps alongside the vite template's react deps.
  pkg.dependencies = {
    ...pkg.dependencies,
    "@cloudoperators/greenhouse-core": `^${GREENHOUSE_CORE_VERSION}`,
    "@cloudoperators/juno-ui-components": `^${UI_COMPONENTS_VERSION}`,
  }

  pkg.devDependencies = {
    ...pkg.devDependencies,
    "@tanstack/intent": `^${INTENT_VERSION}`,
    // vite.config.ts imports these; src/styles.css imports tailwindcss
    "@tailwindcss/vite": TEMPLATE_PKG.devDependencies["@tailwindcss/vite"],
    "tailwindcss": TEMPLATE_PKG.devDependencies["tailwindcss"],
  }

  // Add build:static and typecheck which vite's template doesn't include.
  pkg.scripts = {
    ...pkg.scripts,
    "build:static": "vite build --mode static",
    "typecheck": "tsc -b",
  }
  pkg.intent = {
    skills: ["@cloudoperators/juno-ui-components"],
  }

  writeFileSync(p, JSON.stringify(pkg, null, 2) + "\n")
}

/** Rewrite the monorepo app name to the scaffold token in src/types/index.d.ts. */
function rewriteAppNameToken() {
  const typesPath = join(TEMPLATE_OUT, "src", "types", "index.d.ts")
  const content = readFileSync(typesPath, "utf8")
  writeFileSync(typesPath, content.split("@cloudoperators/juno-app-template").join(APP_NAME_TOKEN))
}

function main() {
  console.log(`[sync-template] scaffolding vite react-ts base into ${TEMPLATE_OUT}`)
  rmSync(TEMPLATE_OUT, { recursive: true, force: true })
  scaffoldVite()

  console.log(`[sync-template] overlaying Greenhouse files from ${TEMPLATE_SRC}`)
  overlayGreenhouseFiles()
  patchPackageJson()
  rewriteAppNameToken()

  console.log(`[sync-template] done — greenhouse-core@^${GREENHOUSE_CORE_VERSION}, juno-ui-components@^${UI_COMPONENTS_VERSION}`)
}

main()
