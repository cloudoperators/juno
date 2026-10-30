/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { describe, it, expect, vi } from "vitest"
import { createPluginMount } from "./createPluginMount"
import type { MountOptions, PluginModule, PluginProps } from "./types"

interface AppProps extends PluginProps {
  label?: string
}

const App = ({ label = "default-label" }: AppProps) => <p data-testid="app">{label}</p>

// Build `MountOptions` from the plugin's own `AppProps` for the tests below. Since `AppProps
// extends PluginProps`, the plugin's shape is assignable to the host's `MountOptions.props`
// without a cast — passing plugin-specific fields through is exactly what the real host does at
// runtime (`...config.props` on the mount call in `usePluginLoader.ts`).
const asHostOptions = (props: AppProps): MountOptions => ({ props })

describe("createPluginMount", () => {
  it("returns an object with `mount` and `unmount` functions", () => {
    const plugin = createPluginMount(App)
    expect(typeof plugin.mount).toBe("function")
    expect(typeof plugin.unmount).toBe("function")
  })

  it("mount renders the App into the given container with the provided props", async () => {
    const container = document.createElement("div")
    document.body.appendChild(container)

    const { mount, unmount } = createPluginMount(App)
    void mount(container, asHostOptions({ label: "hello" }))

    await vi.waitFor(() => {
      expect(container.querySelector("[data-testid='app']")?.textContent).toBe("hello")
    })

    unmount()
    document.body.removeChild(container)
  })

  it("mount with no `options` renders the App with default props", async () => {
    const container = document.createElement("div")
    document.body.appendChild(container)

    const { mount, unmount } = createPluginMount(App)
    void mount(container)

    await vi.waitFor(() => {
      expect(container.querySelector("[data-testid='app']")?.textContent).toBe("default-label")
    })

    unmount()
    document.body.removeChild(container)
  })

  it("unmount tears down the React tree", async () => {
    const container = document.createElement("div")
    document.body.appendChild(container)

    const { mount, unmount } = createPluginMount(App)
    void mount(container, asHostOptions({ label: "will-be-gone" }))
    await vi.waitFor(() => {
      expect(container.querySelector("[data-testid='app']")).not.toBeNull()
    })

    unmount()
    expect(container.querySelector("[data-testid='app']")).toBeNull()

    document.body.removeChild(container)
  })

  it("re-mounting into the same container replaces the previous root", async () => {
    const container = document.createElement("div")
    document.body.appendChild(container)

    const { mount, unmount } = createPluginMount(App)
    void mount(container, asHostOptions({ label: "first" }))
    await vi.waitFor(() => {
      expect(container.querySelector("[data-testid='app']")?.textContent).toBe("first")
    })

    void mount(container, asHostOptions({ label: "second" }))
    await vi.waitFor(() => {
      expect(container.querySelector("[data-testid='app']")?.textContent).toBe("second")
    })

    unmount()
    document.body.removeChild(container)
  })

  // Type-level regression guard: `createPluginMount(App)` MUST produce a `PluginModule`.
  // If `PluginModule` ever changes in a way the helper no longer satisfies, `tsc` fails here
  // before any runtime test runs.
  it("satisfies the PluginModule contract (type-level)", () => {
    const plugin = createPluginMount(App) satisfies PluginModule
    expect(plugin).toBeDefined()
  })
})
