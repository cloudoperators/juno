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
import { decodeIDToken, parseIdTokenData } from "../src/tokenHelpers"

describe("composeAuthData", () => {
  it("should decode the token and merge with options", () => {
    const token = "validToken"
    const options = { role: "admin" }
    const result = composeAuthData(token, options)

    expect(result).toEqual({
      authData: {
        JWT: token,
        raw: { sub: "12345", name: "Test User", test: "test", role: "admin" },
        refreshToken: "TOKEN",
        parsed: { sub: "12345", name: "Test User" },
      },
      error: null,
    })
  })

  it("should handle invalid token gracefully", () => {
    const invalidToken = "invalidToken"
    const options = { role: "guest" }

    vi.mocked(decodeIDToken).mockImplementationOnce(() => {
      throw new Error("This is not a valid token error message")
    })

    const result = composeAuthData(invalidToken, options)

    expect(result).toEqual({
      authData: null,
      error: new Error("Could not decode token: invalidToken. This is not a valid token error message"),
    })
  })

  it("should handle invalid parse token information gracefully", () => {
    const invalidToken = "invalidToken"
    const options = { role: "guest" }

    vi.mocked(parseIdTokenData).mockImplementationOnce(() => {
      throw new Error("Something happened while parsing the token")
    })

    const result = composeAuthData(invalidToken, options)

    expect(result).toEqual({
      authData: null,
      error: new Error("Could not parse token: invalidToken. Something happened while parsing the token"),
    })
  })

  describe("tokenSession", () => {
    let onUpdateMock: any

    beforeEach(() => {
      onUpdateMock = vi.fn()
    })

    it("should initialize the session with correct default state", () => {
      const token = "validToken"
      const session = tokenSession({ token, onUpdate: onUpdateMock })

      expect(session.currentState()).toEqual({
        auth: null,
        error: null,
        loggedIn: false,
        isProcessing: false,
      })
      expect(onUpdateMock).not.toHaveBeenCalled()
    })

    it("should initialize if initialLogin boolean set", () => {
      const token = "validToken"
      const options = { role: "user" }

      const session = tokenSession({ token, options, initialLogin: true, onUpdate: onUpdateMock })

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
        auth: null,
        error: null,
        loggedIn: false,
        isProcessing: false,
      })
    })

    it("should log in and set correctly the state", () => {
      const token = "validToken"
      const { login } = tokenSession({
        token: token,
        onUpdate: onUpdateMock,
      })

      login()
      expect(onUpdateMock).toHaveBeenCalledWith({
        auth: {
          JWT: token,
          raw: { sub: "12345", name: "Test User", test: "test" },
          refreshToken: "TOKEN",
          parsed: { sub: "12345", name: "Test User" },
        },
        error: null,
        loggedIn: true,
        isProcessing: false,
      })
    })

    it("should log out and reset the state", () => {
      const { logout } = tokenSession({
        token: "validToken",
        onUpdate: onUpdateMock,
      })

      logout()
      expect(onUpdateMock).toHaveBeenCalledWith({
        auth: null,
        error: null,
        loggedIn: false,
        isProcessing: false,
      })
    })

    it("should pass error from composeAuthData to the state", () => {
      vi.mocked(decodeIDToken).mockImplementationOnce(() => {
        throw new Error("This is not a valid token error message")
      })

      const { currentState } = tokenSession({
        token: "invalidToken",
        onUpdate: onUpdateMock,
        initialLogin: true,
      })

      expect(currentState()).toEqual({
        auth: null,
        error: new Error("Could not decode token: invalidToken. This is not a valid token error message"),
        loggedIn: false,
        isProcessing: false,
      })
    })
  })
})
