/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Type-level contract tests. These "tests" assert properties of the type system; they produce no
 * runtime behaviour beyond `expect(…).toBeDefined()` so that vitest counts them as passing when
 * `tsc` succeeds — and `tsc` is what actually enforces them.
 *
 * The regression we are guarding against: a drift between a plugin's `mount` / `App` and the
 * shared contract must surface as a `tsc` error at the exact consuming site. These assertions
 * encode a plugin-shaped usage pattern so that if the contract ever stops matching, the build
 * fails here before any test runs.
 */

import { describe, it, expect } from "vitest"
import type { ComponentType } from "react"

import type { PluginModule, PluginProps, MountOptions } from "./types"

describe("contract types (type-level assertions)", () => {
  it("a hand-written mount/unmount pair satisfies PluginModule", () => {
    // The shape every plugin exports — the same shape Greenhouse's loader imports as a type. We
    // keep the implementation here deliberately trivial: the test is about the TYPE assignment,
    // not about mount semantics.
    const module = {
      mount: (_container: HTMLElement, _options?: MountOptions) => {
        /* a real plugin would createRoot + render here */
      },
      unmount: () => {
        /* and tear it down here */
      },
    } satisfies PluginModule

    expect(module.mount).toBeDefined()
    expect(module.unmount).toBeDefined()
  })

  it("App components typed as (p: PluginProps) accept Greenhouse's mount props", () => {
    const App: ComponentType<PluginProps> = (_props) => null

    // Only `theme` and `embedded` are pinned by the contract. Router-specific fields
    // (basePath, enableHashedRouting) and auth values reach the plugin via a plugin-specific
    // `AppProps extends PluginProps { … }`, not via an index signature on the contract itself.
    const propsFromHost: PluginProps = {
      theme: "theme-dark",
      embedded: true,
    }
    const options: MountOptions = { props: propsFromHost }
    expect(App).toBeDefined()
    expect(options).toBeDefined()
  })

  it("MountOptions<P> is generic in the plugin's prop type", () => {
    interface MyProps extends PluginProps {
      special: string
    }
    const options: MountOptions<MyProps> = { props: { special: "ok" } }
    expect(options.props?.special).toBe("ok")
  })

  it("a plugin's narrower AppProps still assigns from Greenhouse's PluginProps", () => {
    // Pattern a real plugin uses to type its own App.tsx: `AppProps extends PluginProps { … }`.
    interface AppProps extends PluginProps {
      title?: string
      description?: string
    }
    const App: ComponentType<AppProps> = (_props) => null

    // What arrives from the host still assigns:
    const hostProps: PluginProps = { theme: "theme-light", embedded: true }
    const narrowed: AppProps = hostProps
    expect(App).toBeDefined()
    expect(narrowed).toBeDefined()
  })
})
