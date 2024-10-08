/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */
import { describe, expect, vi, it } from "vitest"

import { getOidcConfig, resetCache } from "../src/oidcConfig"

const mockResponse = {
  ok: true,
  statusText: "OK",
  json: async () => {},
} as Response
global.fetch = vi.fn().mockResolvedValue(mockResponse)

export function matchURL(expected: string) {
  return {
    asymmetricMatch(received: URL | string) {
      const url = received instanceof URL ? received : new URL(received)
      const expectedUrl = new URL(expected)
      return url.href === expectedUrl.href
    },
    toString() {
      return `matchURL("${expected}")`
    },
    getExpectedType() {
      return "string"
    },
  }
}

describe("getOidcConfig", () => {
  it("should throw if issuerURL is bad", async () => {
    await expect(getOidcConfig("bad")).rejects.toThrow()
  })
  it("should return a promise", () => {
    expect(getOidcConfig("https://test.com")).toBeInstanceOf(Promise)
  })
  it("should call fetch", async () => {
    await getOidcConfig("https://test.com")
    expect(global.fetch).toHaveBeenCalled()
  })
  it("should call fetch with the correct url", async () => {
    await getOidcConfig("https://test.com")
    expect(global.fetch).toHaveBeenLastCalledWith(matchURL("https://test.com/.well-known/openid-configuration"))
  })

  it("should cache the result", async () => {
    vi.clearAllMocks()
    resetCache()
    await getOidcConfig("https://test.com")
    await getOidcConfig("https://test.com")
    expect(global.fetch).toHaveBeenCalledTimes(1)
  })

  it("should cache the result for 5 minutes", async () => {
    vi.clearAllMocks()
    resetCache()
    await getOidcConfig("https://test.com")
    const now = Date.now() + 5 * 60 * 60 * 1000
    vi.spyOn(Date, "now").mockImplementation(() => now)
    await getOidcConfig("https://test.com")
    expect(global.fetch).toHaveBeenCalledTimes(2)
  })

  it("should preserve the URL pathname", async () => {
    vi.clearAllMocks()
    resetCache()
    await getOidcConfig("https://test.com/with/path")
    expect(global.fetch).toHaveBeenLastCalledWith(
      matchURL("https://test.com/with/path/.well-known/openid-configuration")
    )
  })
})
