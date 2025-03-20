/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { describe, it, expect, vi, beforeEach } from "vitest"
import tokenSession, { composeAuthData } from "../src/tokenSession"
import { testIdToken } from "./__utils__/idTokenMock"
import * as tokenHelpers from "../src/tokenHelpers"

describe("composeAuthData", () => {
  // Cleanup mocks after each test
  afterEach(() => {
    vi.restoreAllMocks() // Restores original implementations
  })

  it("should handle invalid token gracefully", () => {
    vi.spyOn(tokenHelpers, "decodeIDToken").mockImplementation(() => {
      throw new Error("This is not a valid token error message")
    })

    const result = composeAuthData("invalidToken", {})

    expect(result).toEqual({
      authData: null,
      error: new Error("Could not decode token: invalidToken. This is not a valid token error message"),
    })
  })

  it("should decode the token and merge with options", () => {
    const options = { anySpecialAttribute: "miau" }
    const result = composeAuthData(testIdToken, options)

    expect(result?.authData?.JWT).toEqual(testIdToken)
    expect(result?.authData?.raw?.anySpecialAttribute).toEqual("miau")
    expect(result?.authData?.refreshToken).toEqual("TOKEN")
    expect(result?.authData?.parsed).not.toEqual(null)
  })

  it("should handle invalid parse token information gracefully", () => {
    vi.spyOn(tokenHelpers, "parseIdTokenData").mockImplementation(() => {
      throw new Error("Something happened while parsing the token")
    })

    const result = composeAuthData(testIdToken, {})

    expect(result).toEqual({
      authData: null,
      error: new Error(`Could not parse token: ${testIdToken}. Something happened while parsing the token`),
    })
  })
})

describe("tokenSession", () => {
  let onUpdateMock: any
  beforeEach(() => {
    onUpdateMock = vi.fn()
  })

  // Cleanup mocks after each test
  afterEach(() => {
    vi.restoreAllMocks() // Restores original implementations
  })

  it("should initialize the session with correct default state", () => {
    const session = tokenSession({ token: testIdToken, onUpdate: onUpdateMock })

    expect(session.currentState()).toEqual({
      auth: null,
      error: null,
      loggedIn: false,
      isProcessing: false,
    })
    expect(onUpdateMock).not.toHaveBeenCalled()
  })

  it("should initialize if initialLogin boolean set", () => {
    const options = { anySpecialAttribute: "miau" }
    const session = tokenSession({ token: testIdToken, options, initialLogin: true, onUpdate: onUpdateMock })

    expect(onUpdateMock).toHaveBeenCalledWith(
      expect.objectContaining({
        auth: expect.objectContaining({
          JWT: testIdToken,
          raw: expect.objectContaining({ anySpecialAttribute: "miau" }),
          refreshToken: "TOKEN",
        }),
        error: null,
        loggedIn: true,
        isProcessing: false,
      })
    )

    expect(session.currentState()).toEqual({
      auth: null,
      error: null,
      loggedIn: false,
      isProcessing: false,
    })
  })

  it("should log in and set correctly the state", () => {
    const { login } = tokenSession({
      token: testIdToken,
      onUpdate: onUpdateMock,
    })
    login()
    expect(onUpdateMock).toHaveBeenCalledWith(
      expect.objectContaining({
        auth: expect.objectContaining({
          JWT: testIdToken,
          refreshToken: "TOKEN",
        }),
        error: null,
        loggedIn: true,
        isProcessing: false,
      })
    )
  })

  it("should log out and reset the state", () => {
    const { logout } = tokenSession({
      token: testIdToken,
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
    vi.spyOn(tokenHelpers, "decodeIDToken").mockImplementation(() => {
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
