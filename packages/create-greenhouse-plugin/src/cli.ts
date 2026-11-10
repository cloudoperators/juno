#!/usr/bin/env node
/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { resolve, basename } from "node:path"
import { scaffold, isUsableTarget } from "./scaffold.js"

interface ParsedArgs {
  targetDir?: string
  appName?: string
  help: boolean
}

function parseArgs(argv: string[]): ParsedArgs {
  const parsed: ParsedArgs = { help: false }
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]
    if (arg === "-h" || arg === "--help") {
      parsed.help = true
    } else if (arg === "--name") {
      parsed.appName = argv[++i]
    } else if (!arg.startsWith("-") && parsed.targetDir === undefined) {
      parsed.targetDir = arg
    }
  }
  return parsed
}

/** Derive a default npm name from the target directory (e.g. "./my-plugin" -> "my-plugin"). */
function defaultAppName(targetDir: string): string {
  const base = basename(resolve(targetDir))
  // Keep it a valid unscoped npm name: lowercase, strip anything but [a-z0-9-_.].
  const normalized = base
    .toLowerCase()
    .replace(/[^a-z0-9-_.]/g, "-")
    .replace(/^-+|-+$/g, "")
  return normalized || "greenhouse-plugin"
}

const HELP = `
create-greenhouse-plugin — bootstrap a standalone Greenhouse plugin

Usage:
  npx @cloudoperators/create-greenhouse-plugin <target-dir> [--name <package-name>]

Arguments:
  <target-dir>        Directory to create the plugin in (must be empty or non-existent).

Options:
  --name <name>       npm package name for the plugin (default: derived from <target-dir>).
  -h, --help          Show this help.

After scaffolding:
  cd <target-dir>
  pnpm install
  pnpm dev
`

function main(): void {
  const args = parseArgs(process.argv.slice(2))

  if (args.help || !args.targetDir) {
    process.stdout.write(HELP)
    process.exit(args.help ? 0 : 1)
  }

  const targetDir = resolve(args.targetDir)
  const appName = args.appName ?? defaultAppName(args.targetDir)

  if (!isUsableTarget(targetDir)) {
    process.stderr.write(`Error: target directory ${targetDir} already exists and is not empty.\n`)
    process.exit(1)
  }

  try {
    scaffold({ targetDir, appName })
  } catch (err) {
    process.stderr.write(`Error: ${err instanceof Error ? err.message : String(err)}\n`)
    process.exit(1)
  }

  process.stdout.write(
    [
      ``,
      `Created a standalone Greenhouse plugin "${appName}" in ${targetDir}`,
      ``,
      `Next steps:`,
      `  cd ${args.targetDir}`,
      `  pnpm install`,
      `  pnpm dev`,
      ``,
    ].join("\n")
  )
}

main()
