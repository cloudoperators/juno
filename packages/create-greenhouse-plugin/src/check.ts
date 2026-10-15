/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { existsSync } from "node:fs"
import { join } from "node:path"

import { hashContent, hashFile } from "./hash.ts"
import { type Manifest, readManifest } from "./manifest.ts"
import { readTemplate } from "./template.ts"

export type Verdict =
  | "up-to-date"
  | "safe-update" // author hasn't touched it, template changed
  | "customization" // author changed it, template unchanged
  | "conflict" // both changed
  | "deleted-locally" // in baseline, missing on disk
  | "new-template-file" // in latest template, not in baseline

export interface FileFinding {
  rel: string
  verdict: Verdict
}

export interface CheckResult {
  /** null when no manifest was found (2-way fallback was used). */
  baselineVersion: string | null
  comparedVersion: string
  findings: FileFinding[]
  /** true when any finding needs the author's attention. */
  actionNeeded: boolean
}

/**
 * Three-way drift check (see plan): A = baseline manifest, B = files on disk,
 * C = the template bundled in THIS CLI version. Pure read; writes nothing.
 * Degrades to a 2-way (B vs C) compare when the manifest is missing.
 */
export function check(pluginDir: string, pluginName: string, comparedVersion: string): CheckResult {
  const manifest: Manifest | null = readManifest(pluginDir)
  const latest = readTemplate(pluginName) // C
  const latestHashes: Record<string, string> = {}
  for (const f of latest) latestHashes[f.rel] = hashContent(f.content)

  const findings: FileFinding[] = []
  const seen = new Set<string>()

  for (const [rel, cHash] of Object.entries(latestHashes)) {
    seen.add(rel)
    const abs = join(pluginDir, rel)
    const bHash = existsSync(abs) ? hashFile(abs) : null // B
    const aHash = manifest?.files[rel] ?? null // A

    if (bHash === null) {
      // present in template, absent on disk
      findings.push({ rel, verdict: aHash ? "deleted-locally" : "new-template-file" })
      continue
    }

    if (!manifest) {
      // 2-way fallback: only B vs C
      if (bHash !== cHash) findings.push({ rel, verdict: "conflict" })
      continue
    }

    if (aHash === null) {
      findings.push({ rel, verdict: "new-template-file" })
      continue
    }

    const authorEdited = bHash !== aHash
    const templateChanged = cHash !== aHash
    if (!authorEdited && !templateChanged) findings.push({ rel, verdict: "up-to-date" })
    else if (!authorEdited && templateChanged) findings.push({ rel, verdict: "safe-update" })
    else if (authorEdited && !templateChanged) findings.push({ rel, verdict: "customization" })
    else findings.push({ rel, verdict: "conflict" })
  }

  // Baseline files no longer present in the latest template that are also gone on disk → ignore;
  // but a baseline file missing on disk yet still in template is handled above. Nothing else to add.

  const actionNeeded = findings.some(
    (f) => f.verdict === "safe-update" || f.verdict === "conflict" || f.verdict === "deleted-locally" || f.verdict === "new-template-file"
  )

  return {
    baselineVersion: manifest?.templateVersion ?? null,
    comparedVersion,
    findings,
    actionNeeded,
  }
}
