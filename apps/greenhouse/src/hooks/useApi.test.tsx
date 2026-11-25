/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { renderHook } from "@testing-library/react"
import { describe, test, expect, vi, beforeEach } from "vitest"
import { useAuth } from "../components/AuthProvider"
import { useGlobalsApiEndpoint, useGlobalsAssetsHost } from "../components/StoreProvider"
import useApi from "./useApi"

// k8s client: createClient returns a client whose get() we control per test.
const mockGet = vi.fn()
vi.mock("@cloudoperators/juno-k8s-client", () => ({
  createClient: vi.fn(() => ({ get: mockGet })),
}))

// Auth + globals are consumed via hooks; mock them so useApi has an endpoint, token and namespace.
vi.mock("../components/AuthProvider", () => ({ useAuth: vi.fn() }))
vi.mock("../components/StoreProvider", () => ({
  useGlobalsApiEndpoint: vi.fn(),
  useGlobalsAssetsHost: vi.fn(),
}))

// NOTE: createPluginConfig (../lib/plugin) is intentionally NOT mocked — the test exercises the real
// CR -> config mapping, so url resolution is validated end to end.

const defaultAuth = {
  JWT: "jwt-token",
  raw: { groups: ["organization:my-org"] },
  parsed: { fullName: "Jane Doe", supportGroups: ["sg-1", "sg-2"] },
}

// Minimal Plugin CR item; override `status`/`spec` per test.
const pluginItem = (status: any, spec: any = { displayName: "My Plugin" }) => ({
  metadata: { name: "my-plugin" },
  spec,
  status,
})

const callGetPluginConfigs = async (): Promise<Record<string, any>> => {
  const { result } = renderHook(() => useApi())
  return result.current.getPluginConfigs()
}

describe("useApi.getPluginConfigs", () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.mocked(useAuth).mockReturnValue({ data: defaultAuth } as any)
    vi.mocked(useGlobalsApiEndpoint).mockReturnValue("https://api.example.com")
    vi.mocked(useGlobalsAssetsHost).mockReturnValue("https://assets.example.com")
  })

  test("returns an empty config when the user has no organization namespace", async () => {
    vi.mocked(useAuth).mockReturnValue({ data: { ...defaultAuth, raw: { groups: [] } } } as any)

    const config = await callGetPluginConfigs()

    expect(config).toEqual({})
    expect(mockGet).not.toHaveBeenCalled()
  })

  test("queries the org's plugins with the ui-plugin label selector", async () => {
    mockGet.mockResolvedValue({ items: [] })

    await callGetPluginConfigs()

    expect(mockGet).toHaveBeenCalledWith("/apis/greenhouse.sap/v1alpha1/namespaces/my-org/plugins", {
      params: { labelSelector: "greenhouse.sap/ui-plugin=true" },
    })
  })

  test("uses the first exposed-service URL when status.exposedServices is non-empty", async () => {
    mockGet.mockResolvedValue({
      items: [
        pluginItem({
          weight: 10,
          uiApplication: { name: "myplugin", version: "1.2.3", url: "https://fallback.example.com/index.js" },
          exposedServices: {
            "https://plugin.example.com/": { name: "svc", namespace: "ns", type: "ingress" },
            "https://second.example.com/": { name: "svc2", namespace: "ns", type: "service" },
          },
        }),
      ],
    })

    const config = await callGetPluginConfigs()

    expect(config["my-plugin"].url).toBe("https://plugin.example.com/")
  })

  test("falls back to uiApplication.url when there are no exposed services", async () => {
    mockGet.mockResolvedValue({
      items: [
        pluginItem({
          uiApplication: { name: "myplugin", version: "1.2.3", url: "https://fallback.example.com/index.js" },
        }),
      ],
    })

    const config = await callGetPluginConfigs()

    expect(config["my-plugin"].url).toBe("https://fallback.example.com/index.js")
  })

  test("falls back to uiApplication.url when exposedServices is an empty map", async () => {
    mockGet.mockResolvedValue({
      items: [
        pluginItem({
          uiApplication: { name: "myplugin", version: "1.2.3", url: "https://fallback.example.com/index.js" },
          exposedServices: {},
        }),
      ],
    })

    const config = await callGetPluginConfigs()

    expect(config["my-plugin"].url).toBe("https://fallback.example.com/index.js")
  })

  test("maps core fields and merges option values with derived appProps", async () => {
    mockGet.mockResolvedValue({
      items: [
        pluginItem(
          {
            weight: 42,
            uiApplication: { name: "myplugin", version: "2.0.0", url: "https://fallback.example.com/index.js" },
          },
          { displayName: "My Plugin", optionValues: [{ name: "endpoint", value: "https://ep.example.com" }] }
        ),
      ],
    })

    const config = await callGetPluginConfigs()
    const entry = config["my-plugin"]

    expect(entry).toMatchObject({
      id: "my-plugin",
      name: "myplugin",
      displayName: "My Plugin",
      weight: 42,
      version: "2.0.0",
    })
    expect(entry.props).toMatchObject({
      id: "my-plugin",
      endpoint: "https://ep.example.com",
      username: "Jane Doe",
      initialFilters: { support_group: ["sg-1", "sg-2"] },
    })
  })

  test("skips plugins whose uiApplication has no name", async () => {
    mockGet.mockResolvedValue({
      items: [pluginItem({ uiApplication: { url: "https://plugin.example.com/index.js" } })],
    })

    const config = await callGetPluginConfigs()

    expect(config).toEqual({})
  })
})
