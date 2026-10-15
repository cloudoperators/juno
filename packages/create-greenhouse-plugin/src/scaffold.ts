/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { existsSync, mkdirSync, readdirSync, writeFileSync } from "node:fs"
import { dirname, join, resolve } from "node:path"

import { hashContent } from "./hash.ts"
import { type Manifest, writeManifest } from "./manifest.ts"
import { readTemplate } from "./template.ts"

export interface ScaffoldOptions {
  pluginName: string
  targetDir: string
  templateVersion: string
  /**
   * Local-testing only: override the generated package.json's juno-ui-components
   * dependency to a `file:` tarball path (e.g. a build that includes the Intent
   * skills before they are published to npm). Never used in a real scaffold.
   */
  junoTarball?: string
}

export interface ScaffoldResult {
  targetDir: string
  fileCount: number
  junoOverridden: boolean
}

/** Validate the plugin name: lowercase letters, digits, hyphens (becomes @cloudoperators/juno-app-<name>). */
export function validatePluginName(name: string): string | null {
  if (!/^[a-z][a-z0-9-]*$/.test(name)) {
    return `Invalid plugin name "${name}". Use lowercase letters, digits and hyphens, starting with a letter (e.g. "my-plugin").`
  }
  return null
}

/** Rewrite the juno-ui-components dep in a generated package.json to a file: tarball (local testing). */
function overrideJunoDep(pkgJson: string, tarballPath: string): string {
  const pkg = JSON.parse(pkgJson) as { dependencies?: Record<string, string> }
  if (!pkg.dependencies?.["@cloudoperators/juno-ui-components"]) {
    throw new Error("generated package.json has no @cloudoperators/juno-ui-components dependency to override")
  }
  const abs = resolve(tarballPath)
  if (!existsSync(abs)) throw new Error(`--juno-tarball not found: ${abs}`)
  pkg.dependencies["@cloudoperators/juno-ui-components"] = `file:${abs}`
  return JSON.stringify(pkg, null, 2) + "\n"
}

export function scaffold(opts: ScaffoldOptions): ScaffoldResult {
  const { pluginName, targetDir, templateVersion, junoTarball } = opts

  if (existsSync(targetDir) && readdirSync(targetDir).length > 0) {
    throw new Error(`Target directory "${targetDir}" already exists and is not empty.`)
  }

  const files = readTemplate(pluginName)
  const manifestFiles: Record<string, string> = {}
  let junoOverridden = false

  for (const { rel, content } of files) {
    // The manifest baseline (A) always hashes the PRISTINE template content, so a
    // --juno-tarball override reads as a local "customization" on package.json
    // (which it is), not a false "safe update" against the published template.
    manifestFiles[rel] = hashContent(content)

    // Apply the local tarball override to package.json only on what is WRITTEN to disk.
    let out: Buffer = content
    if (junoTarball && rel === "package.json") {
      out = Buffer.from(overrideJunoDep(content.toString("utf8"), junoTarball), "utf8")
      junoOverridden = true
    }
    const dest = join(targetDir, rel)
    mkdirSync(dirname(dest), { recursive: true })
    writeFileSync(dest, out)
  }

  const manifest: Manifest = { templateVersion, files: manifestFiles }
  writeManifest(targetDir, manifest)

  return { targetDir, fileCount: files.length, junoOverridden }
}
