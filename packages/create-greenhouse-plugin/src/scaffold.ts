/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { readdirSync, readFileSync, writeFileSync, mkdirSync, copyFileSync, statSync, existsSync } from "node:fs"
import { join, dirname } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))

/** The checked-in blueprint, shipped in the package tarball at <pkg>/template. */
const TEMPLATE_DIR = join(__dirname, "..", "template")

/** Placeholder written by scripts/sync-template.mjs; replaced with the plugin name. */
const APP_NAME_TOKEN = "__APP_NAME__"

/** Files whose contents carry the app-name token and must be rewritten on copy. */
const TOKENIZED_FILES = new Set(["package.json", "README.md", join("src", "types", "index.d.ts")])

/** Template files that are renamed when copied to the target. */
const RENAME: Record<string, string> = {
  "appProps.template.json": "appProps.json",
}

export interface ScaffoldOptions {
  /** Absolute or relative path to the directory to create the plugin in. */
  targetDir: string
  /** The npm package name for the generated plugin, e.g. "my-plugin" or "@scope/my-plugin". */
  appName: string
  /** Where the blueprint lives. Overridable for tests; defaults to the shipped template/. */
  templateDir?: string
}

/** True when a path does not exist or is an empty directory. */
export function isUsableTarget(targetDir: string): boolean {
  if (!existsSync(targetDir)) return true
  if (!statSync(targetDir).isDirectory()) return false
  return readdirSync(targetDir).length === 0
}

function copyTree(src: string, dest: string, appName: string, relBase = ""): void {
  mkdirSync(dest, { recursive: true })
  for (const entry of readdirSync(src)) {
    const srcPath = join(src, entry)
    const destEntry = RENAME[entry] ?? entry
    const destPath = join(dest, destEntry)
    const rel = relBase ? join(relBase, entry) : entry
    if (statSync(srcPath).isDirectory()) {
      copyTree(srcPath, destPath, appName, rel)
    } else if (TOKENIZED_FILES.has(rel)) {
      const content = readFileSync(srcPath, "utf8").split(APP_NAME_TOKEN).join(appName)
      writeFileSync(destPath, content)
    } else {
      copyFileSync(srcPath, destPath)
    }
  }
}

/**
 * Copy the standalone blueprint into `targetDir`, substituting the plugin name.
 * Returns the list of files relative to targetDir that were created.
 */
export function scaffold(options: ScaffoldOptions): void {
  const { targetDir, appName, templateDir = TEMPLATE_DIR } = options
  if (!existsSync(templateDir)) {
    throw new Error(
      `Template not found at ${templateDir}. If running from source, build the package first (pnpm sync:template).`
    )
  }
  if (!isUsableTarget(targetDir)) {
    throw new Error(`Target directory ${targetDir} already exists and is not empty.`)
  }
  copyTree(templateDir, targetDir, appName)
}
