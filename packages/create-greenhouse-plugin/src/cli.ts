/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { readFileSync } from "node:fs"
import { basename, dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"

import { check, type CheckResult, type Verdict } from "./check.ts"
import { scaffold, validatePluginName } from "./scaffold.ts"

function cliVersion(): string {
  const here = dirname(fileURLToPath(import.meta.url))
  for (const p of [resolve(here, "../package.json"), resolve(here, "../../package.json")]) {
    try {
      return (JSON.parse(readFileSync(p, "utf8")) as { version: string }).version
    } catch {
      /* next */
    }
  }
  return "0.0.0"
}

const HELP = `create-greenhouse-plugin — scaffold a Greenhouse external plugin

Usage:
  pnpm create greenhouse-plugin <name> [--dir <path>]   Scaffold a new plugin
  create-greenhouse-plugin check [--json]               Check for template drift (run in a plugin dir)

Options:
  --dir <path>            Target directory (default: ./<name>)
  --juno-tarball <path>   Local testing: point juno-ui-components at a file: tarball
                          (e.g. a build with Intent skills not yet on npm)
  --json                  Machine-readable output (check)
  -h, --help              Show this help
`

function arg(flag: string, argv: string[]): string | undefined {
  const i = argv.indexOf(flag)
  return i >= 0 ? argv[i + 1] : undefined
}

function runScaffold(argv: string[]): number {
  // The plugin name is the first positional arg — skip flags and the values
  // that follow value-taking flags (so `--juno-tarball <path>` isn't mistaken for it).
  const VALUE_FLAGS = new Set(["--dir", "--juno-tarball"])
  const name = argv.find((a, i) => !a.startsWith("-") && !(i > 0 && VALUE_FLAGS.has(argv[i - 1])))
  if (!name) {
    console.error("Error: plugin name is required.\n\n" + HELP)
    return 1
  }
  const nameErr = validatePluginName(name)
  if (nameErr) {
    console.error("Error: " + nameErr)
    return 1
  }
  const targetDir = resolve(arg("--dir", argv) ?? `./${name}`)
  const junoTarball = arg("--juno-tarball", argv)
  try {
    const res = scaffold({ pluginName: name, targetDir, templateVersion: cliVersion(), junoTarball })
    console.log(`✔ Created @cloudoperators/juno-app-${name} (${res.fileCount} files) in ${res.targetDir}`)
    if (res.junoOverridden) {
      console.log(`\n⚠ Local override: juno-ui-components points at the --juno-tarball (a file: path).`)
      console.log(`  This is for local testing only — do not commit this package.json to a real plugin.`)
    }
    console.log(`\nNext:\n  cd ${basename(res.targetDir)}\n  nvm use\n  pnpm install\n  pnpm dev`)
    console.log(`\nTo integrate into Greenhouse, see the generated README (manual loader registration).`)
    return 0
  } catch (e) {
    console.error("Error: " + (e as Error).message)
    return 1
  }
}

function report(r: CheckResult): void {
  const from = r.baselineVersion ?? "unknown (no manifest — 2-way compare)"
  console.log(`Scaffolded from template v${from} · comparing against v${r.comparedVersion}\n`)

  const by = (v: Verdict) => r.findings.filter((f) => f.verdict === v)
  const ok = by("up-to-date").length
  if (ok) console.log(`✔ ${ok} files up to date`)

  const groups: [Verdict, string][] = [
    ["safe-update", "↑ safe updates (unmodified locally)"],
    ["conflict", "⚠ conflicts (changed both sides — manual merge)"],
    ["deleted-locally", "✗ deleted locally (template still expects these)"],
    ["new-template-file", "＋ new template files (consider adding)"],
    ["customization", "· your customizations (template unchanged)"],
  ]
  for (const [v, title] of groups) {
    const items = by(v)
    if (!items.length) continue
    console.log(`${title}:`)
    for (const f of items) console.log(`    ${f.rel}`)
  }

  const updates = by("safe-update").length
  const conflicts = by("conflict").length
  console.log(`\n${updates} update(s) available, ${conflicts} conflict(s) → exit ${r.actionNeeded ? 1 : 0}`)
}

function runCheck(argv: string[]): number {
  const dir = resolve(".")
  // Derive plugin name from the dir's package.json name (@cloudoperators/juno-app-<name>).
  let pluginName = basename(dir)
  try {
    const pkg = JSON.parse(readFileSync(resolve(dir, "package.json"), "utf8")) as { name?: string }
    const m = pkg.name?.match(/^@cloudoperators\/juno-app-(.+)$/)
    if (m) pluginName = m[1]
  } catch {
    /* fall back to dir name */
  }
  const result = check(dir, pluginName, cliVersion())
  if (argv.includes("--json")) {
    console.log(JSON.stringify(result, null, 2))
  } else {
    report(result)
  }
  return result.actionNeeded ? 1 : 0
}

function main(): number {
  const argv = process.argv.slice(2)
  if (argv.includes("-h") || argv.includes("--help") || argv.length === 0) {
    console.log(HELP)
    return argv.length === 0 ? 1 : 0
  }
  if (argv[0] === "check") return runCheck(argv.slice(1))
  return runScaffold(argv)
}

process.exit(main())
