/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */
import { beforeEach, describe, expect, test, it, vi } from "vitest"

import "./__utils__/globalsMock"
import mockedSession, { mockedAuthData } from "../src/mockedSession"

describe("mockedSession", () => {
  // initialLogin,
  // onUpdate,
  it("throw error on missing onUpdate callback", () => {
    expect(() => {
      mockedSession()
    }).toThrow()
  })

  test("warn if unknown options", () => {
    mockedSession({ onUpdate: () => null, test: "test", test2: "test" })

    expect(globalThis.console.warn).toHaveBeenLastCalledWith(
      "WARNING: (OAUTH) unknown options: test,test2. Allowed options are token, initialLogin, onUpdate"
    )
  })

  test("should be a function", () => {
    expect(typeof mockedSession).toEqual("function")
  })

  test("responds to login function", () => {
    const session = mockedSession({ onUpdate: () => null })
    expect(typeof session.login).toEqual("function")
  })

  test("responds to logout function", () => {
    const session = mockedSession({ onUpdate: () => null })
    expect(typeof session.logout).toEqual("function")
  })

  test("responds to refresh function", () => {
    const session = mockedSession({ onUpdate: () => null })
    expect(typeof session.refresh).toEqual("function")
  })

  test("responds to currentState function", () => {
    const session = mockedSession({ onUpdate: () => null })
    expect(typeof session.currentState).toEqual("function")
  })

  test("should return a mocked session", () => {
    const session = mockedSession({ onUpdate: () => null })
    expect(session).toBeDefined()
  })

  describe("session", () => {
    let session :any = undefined
    let onUpdate :any = undefined
    beforeEach(() => {
      onUpdate = vi.fn()
      session = mockedSession({ onUpdate, initialLogin: true })
    })

    test("session's current state is defined", () => {
      expect(session.currentState()).toBeDefined()
    })

    test("session's current state contains JWT", () => {
      expect(session.currentState().auth?.JWT).toBeDefined()
    })

    test("session's current state contains token data", () => {
      expect(session.currentState().auth?.raw).toBeDefined()
    })

    test("session's current state contains parsed data", () => {
      expect(session.currentState().auth?.parsed).toBeDefined()
    })

    test("session's current state is auth data", () => {
      expect(session.currentState().auth).toEqual(mockedAuthData())
    })

    test("onUpdate have been called initialy", () => {
      expect(onUpdate).toHaveBeenLastCalledWith(session.currentState())
    })

    test("logout", () => {
      session.logout()
      expect(onUpdate).toHaveBeenLastCalledWith({
        auth: null,
        error: null,
        loggedIn: false,
        isProcessing: false,
      })
    })

    test("login", () => {
      session.logout()
      session.login()
      expect(onUpdate).toHaveBeenLastCalledWith({
        auth: expect.anything(),
        error: null,
        loggedIn: true,
        isProcessing: false,
      })
    })

    describe("custom token", () => {
      let onUpdate :any = undefined
      beforeEach(() => {
        onUpdate = vi.fn()
        mockedSession({
          onUpdate,
          initialLogin: true,
          token: {
            email: "test.user@sap.com",
            email_verified: true,
            groups: ["test1", "test2"],
            name: "D123456",
          },
        })
      })

      test("session contains values from custom token", () => {
        expect(onUpdate).toHaveBeenLastCalledWith({
          auth: {
            raw: expect.objectContaining({
              email: "test.user@sap.com",
              email_verified: true,
              groups: ["test1", "test2"],
              name: "D123456",
            }),
            parsed: expect.anything(),
            JWT: expect.anything(),
            refreshToken: expect.anything(),
          },
          loggedIn: true,
          error: null,
          isProcessing: false,
        })
      })
    })
  })
})
