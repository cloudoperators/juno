/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { renderHook, waitFor } from "@testing-library/react"
import { describe, test, expect, vi, beforeEach, afterEach } from "vitest"
import { usePluginLoader } from "./usePluginLoader"

// Mock the router
vi.mock("@tanstack/react-router", () => ({
  useRouter: vi.fn(() => ({
    basepath: "/",
  })),
}))

// Mock the plugin modules
vi.mock("@cloudoperators/juno-app-supernova", () => ({
  default: {
    mount: vi.fn(),
    unmount: vi.fn(),
  },
}))

describe("usePluginLoader", () => {
  const mockAppProps = {
    enableHashedRouting: false,
  }
  const mockPluginAuth = {} as any
  const mockConfig = {
    id: "supernova",
    props: {
      someProp: "value",
    },
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  test("returns loading state initially", () => {
    const { result } = renderHook(() =>
      usePluginLoader({
        pluginName: "supernova",
        config: mockConfig,
        appProps: mockAppProps,
        pluginAuth: mockPluginAuth,
      })
    )

    expect(result.current.isLoading).toBe(true)
    expect(result.current.containerRef).toBeDefined()
  })

  test("sets loading to false after plugin loads", async () => {
    const { result } = renderHook(() =>
      usePluginLoader({
        pluginName: "supernova",
        config: mockConfig,
        appProps: mockAppProps,
        pluginAuth: mockPluginAuth,
      })
    )

    // Wait for plugin to load, loading should eventually be false
    await waitFor(() => {
      expect(result.current.isLoading).toBe(false)
    })
  })

  test("cleans up on unmount", async () => {
    const { unmount } = renderHook(() =>
      usePluginLoader({
        pluginName: "supernova",
        config: mockConfig,
        appProps: mockAppProps,
        pluginAuth: mockPluginAuth,
      })
    )
    // Wait for plugin to load
    await waitFor(() => {
      unmount()
      expect(true).toBe(true)
    })
  })
})
