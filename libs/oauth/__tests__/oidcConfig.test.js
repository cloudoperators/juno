/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { getOidcConfig, resetCache } from "../src/oidcConfig"

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
  })
)

// add a custom matcher to jest to match URLs
expect.extend({
  matchURL(received, argument) {
    let url = received instanceof URL ? received.href : received
    if (url === argument) {
      return {
        pass: true,
        message: () => `expected ${received} to be ${argument}`,
      }
    } else {
      return {
        pass: false,
        message: () => `expected ${received} not to be ${argument}`,
      }
    }
  },
})

describe("getOidcConfig", () => {
  it("should throw if no issuerURL is provided", async () => {
    await expect(getOidcConfig()).rejects.toThrow("No issuerURL provided")
  })
  it("should throw if issuerURL is bad", async () => {
    await expect(getOidcConfig("bad")).rejects.toThrow()
  })
  it("should return a promise", () => {
    expect(getOidcConfig("https://test.com").then).toBeDefined()
  })
  it("should call fetch", async () => {
    await getOidcConfig("https://test.com")
    expect(global.fetch).toHaveBeenCalled()
  })
  it("should call fetch with the correct url", async () => {
    await getOidcConfig("https://test.com")
    expect(global.fetch).toHaveBeenCalledWith(
      expect.matchURL("https://test.com/.well-known/openid-configuration")
    )
  })

  it("should cache the result", async () => {
    jest.clearAllMocks()
    resetCache()
    await getOidcConfig("https://test.com")
    await getOidcConfig("https://test.com")
    expect(global.fetch).toHaveBeenCalledTimes(1)
  })

  it("should cache the result for 5 minutes", async () => {
    jest.clearAllMocks()
    resetCache()
    await getOidcConfig("https://test.com")
    const now = Date.now() + 5 * 60 * 60 * 1000
    jest.spyOn(Date, "now").mockImplementation(() => now)
    await getOidcConfig("https://test.com")
    expect(global.fetch).toHaveBeenCalledTimes(2)
  })

  it("should preserve the URL pathname", async () => {
    jest.clearAllMocks()
    resetCache()
    await getOidcConfig("https://test.com/with/path")
    expect(global.fetch).toHaveBeenLastCalledWith(
      expect.matchURL(
        "https://test.com/with/path/.well-known/openid-configuration"
      )
    )
  })
})
