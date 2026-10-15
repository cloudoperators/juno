/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { existsSync, readFileSync, writeFileSync } from "node:fs"
import { join } from "node:path"

export const MANIFEST_FILE = ".greenhouse-plugin.json"

/**
 * The baseline manifest, written at scaffold time and living in the adopter's
 * repo. `files` maps each emitted file's relative path to the sha256 of its
 * content AS EMITTED — the "A" (last reconciled) baseline the `check` command
 * compares against. See the plan for the three-hash (A/B/C) model.
 */
export interface Manifest {
  templateVersion: string
  files: Record<string, string>
}

export function manifestPath(dir: string): string {
  return join(dir, MANIFEST_FILE)
}

export function readManifest(dir: string): Manifest | null {
  const p = manifestPath(dir)
  if (!existsSync(p)) return null
  try {
    const parsed = JSON.parse(readFileSync(p, "utf8")) as Manifest
    if (!parsed || typeof parsed.templateVersion !== "string" || typeof parsed.files !== "object") return null
    return parsed
  } catch {
    return null
  }
}

export function writeManifest(dir: string, manifest: Manifest): void {
  writeFileSync(manifestPath(dir), JSON.stringify(manifest, null, 2) + "\n")
}
