/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { describe, it, expect, beforeAll, afterAll } from "vitest"
import { mkdtempSync, rmSync, existsSync, readFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { scaffold } from "./scaffold.js"

const APP_NAME = "@acme/my-greenhouse-plugin"

interface PackageJson {
  name?: string
  private?: boolean
  exports?: unknown
  intent?: unknown
  dependencies?: Record<string, string>
  devDependencies?: Record<string, string>
}

interface TsConfig {
  extends?: string
  references?: unknown[]
}

function readJson<T>(path: string): T {
  return JSON.parse(readFileSync(path, "utf8")) as T
}

describe("scaffold (bootstrap smoke test)", () => {
  let target: string

  beforeAll(() => {
    target = mkdtempSync(join(tmpdir(), "gh-plugin-"))
    scaffold({ targetDir: target, appName: APP_NAME })
  })

  afterAll(() => {
    rmSync(target, { recursive: true, force: true })
  })

  it("creates the core plugin files", () => {
    for (const f of [
      "package.json",
      "tsconfig.json",
      "tsconfig.app.json",
      "vite.config.ts",
      "index.html",
      "appProps.json",
      "AGENTS.md",
      join("src", "index.tsx"),
      join("src", "App.tsx"),
      join("src", "types", "index.d.ts"),
    ]) {
      expect(existsSync(join(target, f)), `expected ${f} to exist`).toBe(true)
    }
    // template source file must be renamed, not copied verbatim
    expect(existsSync(join(target, "appProps.template.json"))).toBe(false)
  })

  it("does not carry monorepo-only files", () => {
    expect(existsSync(join(target, "turbo.json"))).toBe(false)
    expect(existsSync(join(target, ".turbo"))).toBe(false)
  })

  it("substitutes the plugin name in package.json and the type declaration", () => {
    const pkg = readJson<PackageJson>(join(target, "package.json"))
    expect(pkg.name).toBe(APP_NAME)

    const types = readFileSync(join(target, "src", "types", "index.d.ts"), "utf8")
    expect(types).toContain(`declare module "${APP_NAME}"`)
    expect(types).not.toContain("__APP_NAME__")
  })

  it("has the correct metadata", () => {
    const pkg = readJson<PackageJson>(join(target, "package.json"))
    expect(pkg.private).toBe(true)
    expect(pkg.exports).toEqual({ ".": "./build/index.js" })
  })

  it("has zero monorepo dependencies", () => {
    const pkg = readJson<PackageJson>(join(target, "package.json"))
    const deps = pkg.dependencies ?? {}
    const devDeps = pkg.devDependencies ?? {}
    const allDeps = { ...deps, ...devDeps }

    // No workspace protocol anywhere.
    for (const [name, range] of Object.entries(allDeps)) {
      expect(range.startsWith("workspace:"), `${name} must not use workspace:`).toBe(false)
    }

    // The private config package must be gone.
    expect(allDeps["@cloudoperators/juno-config"]).toBeUndefined()

    // intent.skills kept with bare npm name (no workspace: prefix).
    expect(pkg.intent).toBeDefined()
    const skills = (pkg.intent as { skills: string[] }).skills
    expect(skills.every((s) => !s.startsWith("workspace:"))).toBe(true)
    expect(skills).toContain("@cloudoperators/juno-ui-components")

    // Published runtime pinned to npm ranges.
    expect(deps["@cloudoperators/greenhouse-core"]).toMatch(/^\^\d+\.\d+\.\d+/)
    expect(deps["@cloudoperators/juno-ui-components"]).toMatch(/^\^\d+\.\d+\.\d+/)
  })

  it("has a self-contained vite tsconfig setup", () => {
    // create-vite uses a split tsconfig: tsconfig.json references tsconfig.app.json + tsconfig.node.json
    const ts = readJson<TsConfig>(join(target, "tsconfig.json"))
    expect(ts.references).toBeDefined()
    expect(existsSync(join(target, "tsconfig.app.json"))).toBe(true)
  })
})
