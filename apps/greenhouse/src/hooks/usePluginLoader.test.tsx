/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, act } from "react"
import { render, cleanup, type RenderResult } from "@testing-library/react"
import { describe, test, expect, vi, beforeEach, afterEach } from "vitest"
import { usePluginLoader, clearPluginCache } from "./usePluginLoader"

// Mock the router
vi.mock("@tanstack/react-router", () => ({
  useRouter: vi.fn(() => ({
    basepath: "/",
  })),
}))

// Mock an internal plugin module — it exposes a single `plugin: Plugin` named export, matching the
// shape the loader reads for co-located plugins (`(await import(...)).plugin`).
vi.mock("@cloudoperators/juno-app-supernova", () => ({
  plugin: {
    mount: vi.fn(),
    unmount: vi.fn(),
  },
}))

// Access the mocked plugin so we can assert on its mount/unmount.
import { plugin as supernovaPlugin } from "@cloudoperators/juno-app-supernova"

const mockAppProps = { enableHashedRouting: false }
const mockPluginAuth = {} as any
const mockConfig = {
  id: "supernova",
  name: "supernova",
  props: { theme: "theme-dark" as const },
}

// Test harness: render the hook inside a Suspense boundary (the hook now suspends while loading).
function Harness() {
  const { containerRef } = usePluginLoader({
    pluginName: "supernova",
    config: mockConfig,
    appProps: mockAppProps,
    pluginAuth: mockPluginAuth,
  })
  return <div data-testid="container" ref={containerRef} />
}

// Wrapping render in `await act` lets React resolve the suspended load before assertions run.
const renderHarness = async (): Promise<RenderResult> => {
  let result: RenderResult
  await act(async () => {
    result = render(
      <Suspense fallback={<div>loading</div>}>
        <Harness />
      </Suspense>
    )
  })
  return result!
}

describe("usePluginLoader", () => {
  beforeEach(() => {
    vi.clearAllMocks()
    // Drop the cached promise so each test re-runs the load against fresh mocks.
    clearPluginCache("supernova")
  })

  afterEach(() => {
    cleanup()
  })

  test("loads and mounts an internal plugin", async () => {
    await renderHarness()

    expect(supernovaPlugin.mount).toHaveBeenCalledTimes(1)
    // Mounted into a real container with the host-forwarded props.
    const [container, options] = (supernovaPlugin.mount as any).mock.calls[0]
    expect(container).toBeInstanceOf(HTMLElement)
    expect(options.props).toMatchObject({ embedded: true, basePath: "/supernova" })
  })

  test("unmounts the plugin on cleanup", async () => {
    const { unmount } = await renderHarness()

    expect(supernovaPlugin.mount).toHaveBeenCalled()

    unmount()
    expect(supernovaPlugin.unmount).toHaveBeenCalled()
  })
})
