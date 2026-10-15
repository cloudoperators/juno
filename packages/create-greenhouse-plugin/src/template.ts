/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { readdirSync, readFileSync, statSync } from "node:fs"
import { dirname, join, relative, resolve } from "node:path"
import { fileURLToPath } from "node:url"

export const PLUGIN_NAME_TOKEN = "__PLUGIN_NAME__"

/** Dotfiles are shipped underscore-prefixed (npm strips real dotfiles); map back on emit. */
const RENAME: Record<string, string> = {
  "_package.json": "package.json",
  _gitignore: ".gitignore",
  _nvmrc: ".nvmrc",
}

/** The bundled template dir, resolved relative to the built CLI (build/cli.js → ../template). */
export function templateRoot(): string {
  const here = dirname(fileURLToPath(import.meta.url))
  // Works both from build/cli.js and from src/ during tests (../template in both layouts).
  const candidates = [resolve(here, "../template"), resolve(here, "../../template")]
  for (const c of candidates) {
    try {
      statSync(c)
      return c
    } catch {
      /* try next */
    }
  }
  throw new Error("[create-greenhouse-plugin] bundled template/ not found; was the package built?")
}

export interface EmittedFile {
  /** Final relative path in the generated plugin (dotfiles renamed). */
  rel: string
  /** File content with the plugin-name token substituted. */
  content: Buffer
}

/** Read the bundled template, applying rename + token substitution for a given plugin name. */
export function readTemplate(pluginName: string, root = templateRoot()): EmittedFile[] {
  const out: EmittedFile[] = []
  const walk = (dir: string) => {
    for (const name of readdirSync(dir)) {
      const abs = join(dir, name)
      if (statSync(abs).isDirectory()) {
        walk(abs)
        continue
      }
      const relRaw = relative(root, abs)
      const rel = RENAME[relRaw] ?? relRaw
      const content = substituteToken(readFileSync(abs), pluginName, rel)
      out.push({ rel, content })
    }
  }
  walk(root)
  return out
}

/** Replace __PLUGIN_NAME__ in text files; binary assets (e.g. favicon) are left untouched. */
function substituteToken(buf: Buffer, pluginName: string, rel: string): Buffer {
  if (isBinary(rel)) return buf
  const text = buf.toString("utf8")
  if (!text.includes(PLUGIN_NAME_TOKEN)) return buf
  return Buffer.from(text.split(PLUGIN_NAME_TOKEN).join(pluginName), "utf8")
}

function isBinary(rel: string): boolean {
  return /\.(ico|png|jpg|jpeg|gif|woff2?|ttf|otf|eot)$/i.test(rel)
}
