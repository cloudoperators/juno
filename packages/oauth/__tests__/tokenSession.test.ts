import { describe, it, expect, vi, beforeEach } from "vitest"
import tokenSession, { composeAuthData } from "../src/tokenSession"

// Mock the functions decodeIDToken and parseIdTokenData
vi.mock("../src/tokenHelpers", async () => {
  const actual = await vi.importActual("../src/tokenHelpers")
  return {
    ...actual,
    decodeIDToken: vi.fn(() => ({ sub: "12345", name: "Test User", test: "test" })),
    parseIdTokenData: vi.fn(() => ({ sub: "12345", name: "Test User" })),
  }
})

import { decodeIDToken } from "../src/tokenHelpers"

describe("composeAuthData", () => {
  it("should decode the token and merge with options", () => {
    const token = "validToken"
    const options = { role: "admin" }
    const result = composeAuthData(token, options)

    expect(result).toEqual({
      JWT: token,
      raw: { sub: "12345", name: "Test User", test: "test", role: "admin" },
      refreshToken: "TOKEN",
      parsed: { sub: "12345", name: "Test User" },
    })
  })
  it("should handle invalid token gracefully", () => {
    const invalidToken = "invalidToken"
    const options = { role: "guest" }

    vi.mocked(decodeIDToken).mockImplementationOnce(() => {
      throw new Error("Invalid token")
    })

    const result = composeAuthData(invalidToken, options)

    expect(result).toEqual({
      JWT: invalidToken,
      raw: { role: "guest" }, // token is invalid, so only options should be returned
      refreshToken: "TOKEN",
      parsed: { sub: "12345", name: "Test User" },
    })
  })

  describe("tokenSession", () => {
    let onUpdateMock: any

    beforeEach(() => {
      onUpdateMock = vi.fn()
    })

    it("should initialize and call login", () => {
      const token = "validToken"
      const options = { role: "user" }

      const session = tokenSession({ token, options, onUpdate: onUpdateMock })

      expect(onUpdateMock).toHaveBeenCalledWith({
        auth: {
          JWT: token,
          raw: { sub: "12345", name: "Test User", test: "test", role: "user" },
          refreshToken: "TOKEN",
          parsed: { sub: "12345", name: "Test User" },
        },
        error: null,
        loggedIn: true,
        isProcessing: false,
      })

      expect(session.currentState()).toEqual({
        auth: {
          JWT: token,
          raw: { sub: "12345", name: "Test User", test: "test", role: "user" },
          refreshToken: "TOKEN",
          parsed: { sub: "12345", name: "Test User" },
        },
        error: null,
        loggedIn: true,
        isProcessing: false,
      })
    })

    it("should throw an error if onUpdate is not a function", () => {
      expect(() => tokenSession({ token: "validToken", options: {} })).toThrow(
        "(OAUTH MOCK) onUpdate should be a function"
      )
    })

    it("should warn about unknown properties", () => {
      const consoleWarnSpy = vi.spyOn(console, "warn").mockImplementation()

      tokenSession({ token: "validToken", options: {}, onUpdate: onUpdateMock, extraProp: true })

      expect(consoleWarnSpy).toHaveBeenCalledWith(
        "WARNING: (OAUTH) unknown options: extraProp. Allowed options are token, onUpdate"
      )

      consoleWarnSpy.mockRestore()
    })
  })
})
