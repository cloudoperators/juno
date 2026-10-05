/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */
import { beforeEach, describe, expect, test } from "vitest"

import "./__utils__/globalsMock"

import oidcSession from "../src/oidcSession"
import type { OidcSessionInstance } from "../src/types"

describe("oidcSession", () => {
  test("should be a function", () => {
    expect(typeof oidcSession).toEqual("function")
  })

  test("allowed options", () => {
    oidcSession({
      clientID: "test",
      issuerURL: "http://dummy.com",
      refresh: true,
      requestParams: { organization: "Test" },
      // @ts-expect-error - Testing unknown options
      unknown: true,
      test: "test",
    })
    expect(globalThis.console.warn).toHaveBeenLastCalledWith(
      "WARNING: (OAUTH) unknown options: unknown,test. Allowed options are issuerURL, clientID, initialLogin, refresh, flowType, onUpdate, requestParams, callbackURL"
    )
  })

  test("onUpdate is a function", () => {
    expect(() => {
      oidcSession({
        clientID: "test",
        issuerURL: "http://dummy.com",
        // @ts-expect-error - Testing invalid type
        onUpdate: true,
      })
    }).toThrow("(OAUTH) onUpdate should be a function")
  })

  test("issuerURL is required", () => {
    expect(() => {
      // @ts-expect-error - Testing missing required parameter
      oidcSession({ clientID: "test" })
    }).toThrow()
  })

  test("clientID is required", () => {
    expect(() => {
      // @ts-expect-error - Testing missing required parameter
      oidcSession({ issuerURL: "http://dummy.com" })
    }).toThrow()
  })

  test("flowType is undefined", () => {
    oidcSession({ issuerURL: "http://dummy.com", clientID: "test" })
    expect(console.info).toHaveBeenCalledWith("INFO: (OAUTH) no flowType provided, default to code")
  })
  test("flowType is not supported", () => {
    expect(() => {
      oidcSession({
        issuerURL: "http://dummy.com",
        clientID: "test",
        // @ts-expect-error - Testing invalid flowType
        flowType: "something",
      })
    }).toThrow("(OAUTH) flowType something is not supported!")
  })

  test("flowType does not cause warning when provided", () => {
    // Regression test: flowType should not appear in unknownProps warning
    oidcSession({
      clientID: "test",
      issuerURL: "http://dummy.com",
      flowType: "code",
    })
    // console.warn should not have been called with flowType in the message
    expect(globalThis.console.warn).not.toHaveBeenCalled()
  })

  describe("returned result", () => {
    let session: OidcSessionInstance
    beforeEach(() => {
      session = oidcSession({ clientID: "test", issuerURL: "http://dummy.com" })
    })

    test("should return an object", () => {
      expect(typeof session).toEqual("object")
    })

    test("contains currentState", () => {
      expect(session.currentState).toBeDefined()
    })
    test("contains login", () => {
      expect(session.login).toBeDefined()
    })
    test("contains logout", () => {
      expect(session.logout).toBeDefined()
    })

    test("contains refresh", () => {
      expect(session.logout).toBeDefined()
    })

    test("login is a function", () => {
      expect(typeof session.login).toEqual("function")
    })
    test("logout is a function", () => {
      expect(typeof session.logout).toEqual("function")
    })

    test("refresh is a function", () => {
      expect(typeof session.refresh).toEqual("function")
    })

    test("currentState is a function", () => {
      expect(typeof session.currentState).toEqual("function")
    })
  })
})
