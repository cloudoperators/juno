/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * sync-template.mjs — derive the bundled plugin template from `apps/template`.
 *
 * `apps/template` is the single source of truth. This script produces
 * `packages/create-greenhouse-plugin/template/` by copying most files verbatim
 * and applying a small set of deterministic transforms to the handful of files
 * that must differ for a STANDALONE, PUBLISHABLE, EMBEDDABLE plugin:
 *
 *   - package.json      workspace:* -> pinned versions; + intent.skills;
 *                       + exports.types; drop "private"; name -> token
 *   - tsconfig.json     extends juno-config -> inlined options
 *   - eslint.config.mjs import from juno-config -> inlined flat config
 *   - types/index.d.ts  bare -> full `declare module` with mount/unmount
 *   - vite.config.ts    + rollup externalization of react/juno singletons
 *
 * The script ASSERTS its assumptions about the source. If apps/template changes
 * shape in a way a transform does not anticipate, the build FAILS LOUDLY here
 * instead of emitting a broken plugin.
 *
 * Plain Node ESM (no TypeScript) so it runs with `node` on any supported Node
 * version — no `tsx`/loader, matching the repo's `.mjs` tooling convention.
 *
 * Modes:
 *   (default)  write template/ (overwrite)
 *   --check    regenerate into a temp dir and diff against the committed
 *              template/; exit non-zero on any difference (CI drift guard)
 */

import { createHash } from "node:crypto"
import {
  cpSync,
  existsSync,
  mkdirSync,
  mkdtempSync,
  readdirSync,
  readFileSync,
  rmSync,
  statSync,
  writeFileSync,
} from "node:fs"
import { tmpdir } from "node:os"
import { dirname, join, relative, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const HERE = dirname(fileURLToPath(import.meta.url))
const PKG_ROOT = resolve(HERE, "..")
const TEMPLATE_SRC = resolve(PKG_ROOT, "../../apps/template")
const REPO_ROOT = resolve(PKG_ROOT, "../..")
const PLUGIN_NAME_TOKEN = "__PLUGIN_NAME__"

// Versions the emitted plugin pins (external consumers cannot use workspace:*).
const PINNED = {
  "@cloudoperators/juno-ui-components": "^9.6.0",
  react: "19.3.0",
  "react-dom": "19.3.0",
}

/** Files copied byte-for-byte from apps/template into template/. */
const VERBATIM = [
  "src/index.tsx",
  "src/App.tsx",
  "src/styles.css",
  "src/components/AppContent.tsx",
  "src/components/AppContent.test.tsx",
  "src/assets/favicon.ico",
  "index.html",
  "appProps.json",
  "vitest.config.ts",
  "vitest.setup.ts",
]

function assert(cond, msg) {
  if (!cond) {
    throw new Error(
      `[sync-template] assumption about apps/template broke: ${msg}\n` +
        `A transform in sync-template.mjs needs updating before the plugin template can be regenerated.`
    )
  }
}

function read(rel) {
  const p = join(TEMPLATE_SRC, rel)
  assert(existsSync(p), `expected source file ${rel} to exist`)
  return readFileSync(p, "utf8")
}

// --- transforms -------------------------------------------------------------

function transformPackageJson() {
  const raw = read("package.json")
  const pkg = JSON.parse(raw)
  assert(pkg.dependencies?.["@cloudoperators/juno-ui-components"] === "workspace:*", "ui-components dep is workspace:*")

  const out = {
    name: `@cloudoperators/juno-app-${PLUGIN_NAME_TOKEN}`,
    version: "0.0.1",
    author: "UI-Team",
    license: "Apache-2.0",
    type: "module",
    source: "src/index.tsx",
    exports: { ".": { types: "./src/types/index.d.ts", default: "./build/index.js" } },
    engines: pkg.engines ?? { node: ">=20.19.0", pnpm: ">=11.25.0" },
    scripts: pkg.scripts,
    dependencies: {
      "@cloudoperators/juno-ui-components": PINNED["@cloudoperators/juno-ui-components"],
      react: PINNED.react,
      "react-dom": PINNED["react-dom"],
    },
    // Keep the devDeps the plugin needs to build/lint/test standalone, pinned as-is.
    devDependencies: stripWorkspaceDeps(pkg.devDependencies ?? {}),
    // Intent: allowlist Juno's component skills so an adopter's AI gets guidance.
    intent: { skills: ["@cloudoperators/juno-ui-components"] },
  }
  return JSON.stringify(out, null, 2) + "\n"
}

/** Drop workspace:* devDeps (e.g. juno-config) — external plugins inline config. */
function stripWorkspaceDeps(deps) {
  const out = {}
  for (const [name, version] of Object.entries(deps)) {
    if (version === "workspace:*") continue
    out[name] = version
  }
  return out
}

function transformTypes() {
  const raw = read("src/types/index.d.ts")
  assert(raw.includes("vite/client"), "types/index.d.ts references vite/client")
  return (
    `/*\n * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors\n` +
    ` * SPDX-License-Identifier: Apache-2.0\n */\n\n` +
    `/// <reference types="vite/client" />\n\n` +
    `declare module "@cloudoperators/juno-app-${PLUGIN_NAME_TOKEN}" {\n` +
    `  export type PluginModule = {\n` +
    `    mount: (container: HTMLElement, options?: Record<string, unknown>) => void\n` +
    `    unmount: () => void\n` +
    `  }\n` +
    `  export function mount(container: HTMLElement, options?: Record<string, unknown>): void\n` +
    `  export function unmount(): void\n` +
    `}\n`
  )
}

function transformViteConfig() {
  const raw = read("vite.config.ts")
  assert(raw.includes("lib: {") && raw.includes("src/index.tsx"), "vite.config has a lib build on src/index.tsx")
  assert(!raw.includes("rollupOptions"), "vite.config has no rollupOptions yet (we add externalization)")
  // Inject a rollupOptions.external block into the library-build return.
  const externalBlock =
    `      rollupOptions: {\n` +
    `        // The Greenhouse host provides single shared instances of these.\n` +
    `        external: (id: string) => {\n` +
    `          if (id === "react" || id.startsWith("react/")) return true\n` +
    `          if (id === "react-dom" || id.startsWith("react-dom/")) return true\n` +
    `          if (id.startsWith("@cloudoperators/juno-ui-components")) return true\n` +
    `          return false\n` +
    `        },\n` +
    `      },\n`
  const marker = `      lib: {\n        entry: "src/index.tsx",\n        formats: ["es"],\n        fileName: () => \`index.js\`,\n      },\n`
  assert(raw.includes(marker), "vite.config lib block matches the expected exact shape")
  return raw.replace(marker, marker + externalBlock)
}

function inlinedTsconfig() {
  // Mirrors @cloudoperators/juno-config/typescript/base.json + apps/template's app options,
  // flattened so an external plugin needs no dependency on the private config package.
  return (
    JSON.stringify(
      {
        compilerOptions: {
          target: "ES2020",
          module: "ESNext",
          moduleResolution: "Bundler",
          jsx: "react-jsx",
          lib: ["ES2022", "DOM", "DOM.Iterable"],
          strict: true,
          strictNullChecks: true,
          esModuleInterop: true,
          skipLibCheck: true,
          forceConsistentCasingInFileNames: true,
          allowJs: true,
          resolveJsonModule: true,
          isolatedModules: true,
          allowImportingTsExtensions: true,
          noEmit: true,
          allowSyntheticDefaultImports: true,
          outDir: "build",
          types: ["vitest/globals", "@testing-library/jest-dom", "@types/react", "node"],
        },
        include: ["src/**/*.ts", "src/**/*.tsx", "types/**/*.ts", "*.config.ts", "*.setup.ts"],
        exclude: ["node_modules", "build"],
      },
      null,
      2
    ) + "\n"
  )
}

function inlinedEslint() {
  // Inlined flat config equivalent to @cloudoperators/juno-config/eslint/vite-react-ts.mjs,
  // so an external plugin lints the Juno way without depending on the private config package.
  return `/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import js from "@eslint/js"
import globals from "globals"
import tseslint from "typescript-eslint"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"

export default tseslint.config(
  { ignores: ["**/build/*", "**/dist/*", "**/vite.config.ts.timestamp-*"] },
  {
    files: ["**/*.{ts,tsx}"],
    extends: [js.configs.recommended, ...tseslint.configs.recommendedTypeChecked, reactHooks.configs["recommended-latest"], reactRefresh.configs.vite],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { project: true },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
    },
  }
)
`
}

// --- writers ----------------------------------------------------------------

function buildFileMap() {
  /** @type {Record<string, string | { copyFrom: string }>} */
  const map = {}
  for (const rel of VERBATIM) map[rel] = { copyFrom: join(TEMPLATE_SRC, rel) }
  // dotfiles shipped with underscore prefix (npm strips real dotfiles from tarballs)
  map["_gitignore"] = "build\nnode_modules\n.turbo\n"
  map["_package.json"] = transformPackageJson()
  map["tsconfig.json"] = inlinedTsconfig()
  map["eslint.config.mjs"] = inlinedEslint()
  map["vite.config.ts"] = transformViteConfig()
  map["src/types/index.d.ts"] = transformTypes()
  // Pin the Node version so external adopters don't hit ERR_PNPM_UNSUPPORTED_ENGINE.
  map["_nvmrc"] = nvmrc()
  // Intent discovery block for AI assistants in the scaffolded plugin.
  map["AGENTS.md"] = agentsMd()
  return map
}

/** Read the repo's pinned Node version so the emitted plugin stays in lockstep. */
function nvmrc() {
  const p = join(REPO_ROOT, ".nvmrc")
  assert(existsSync(p), "repo root .nvmrc exists")
  const version = readFileSync(p, "utf8").trim()
  assert(/^\d+\.\d+\.\d+$/.test(version), `repo .nvmrc holds a plain x.y.z version (got "${version}")`)
  return version + "\n"
}

function agentsMd() {
  return `<!-- intent-skills -->
This project uses TanStack Intent for AI guidance. Before editing UI code:
- Run \`npx @tanstack/intent list\` to see available skills.
- Run \`npx @tanstack/intent load <package>#<skill>\` to load relevant guidance.

Allowlisted: @cloudoperators/juno-ui-components (see package.json#intent.skills).
<!-- /intent-skills -->
`
}

function writeTemplate(destRoot, map) {
  for (const [rel, val] of Object.entries(map)) {
    const dest = join(destRoot, rel)
    mkdirSync(dirname(dest), { recursive: true })
    if (typeof val === "string") writeFileSync(dest, val)
    else cpSync(val.copyFrom, dest)
  }
}

function hashDir(root) {
  const out = {}
  const walk = (dir) => {
    for (const name of readdirSync(dir)) {
      const p = join(dir, name)
      if (statSync(p).isDirectory()) walk(p)
      else out[relative(root, p)] = createHash("sha256").update(readFileSync(p)).digest("hex")
    }
  }
  if (existsSync(root)) walk(root)
  return out
}

// --- main -------------------------------------------------------------------

function main() {
  const check = process.argv.includes("--check")
  const map = buildFileMap()
  const committed = resolve(PKG_ROOT, "template")

  if (!check) {
    rmSync(committed, { recursive: true, force: true })
    writeTemplate(committed, map)
    console.log(`[sync-template] wrote ${Object.keys(map).length} files to template/`)
    return
  }

  // --check: regenerate to temp, diff against committed template/
  const tmp = mkdtempSync(join(tmpdir(), "ghp-template-"))
  try {
    writeTemplate(tmp, map)
    const want = hashDir(tmp)
    const have = hashDir(committed)
    const diffs = []
    for (const rel of new Set([...Object.keys(want), ...Object.keys(have)])) {
      if (want[rel] !== have[rel]) {
        diffs.push(`  ${!have[rel] ? "missing" : !want[rel] ? "extra" : "changed"}: ${rel}`)
      }
    }
    if (diffs.length) {
      console.error(
        `[sync-template] committed template/ is out of sync with apps/template.\n` +
          diffs.join("\n") +
          `\nRun \`pnpm --filter @cloudoperators/create-greenhouse-plugin sync:template\` and commit the result.`
      )
      process.exit(1)
    }
    console.log("[sync-template] template/ is in sync with apps/template")
  } finally {
    rmSync(tmp, { recursive: true, force: true })
  }
}

main()
