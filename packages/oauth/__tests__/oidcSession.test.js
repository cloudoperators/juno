/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import "./__utils__/globalsMock"

import oidcSession from "../src/oidcSession"

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
        onUpdate: true,
      })
    }).toThrowError("(OAUTH) onUpdate should be a function")
  })

  test("issuerURL is required", () => {
    expect(() => {
      oidcSession({ clientID: "test" })
    }).toThrowError()
  })

  test("clientID is required", () => {
    expect(() => {
      oidcSession({ issuerURL: "http://dummy.com" })
    }).toThrowError()
  })

  test("flowType is undefined", () => {
    oidcSession({ issuerURL: "http://dummy.com", clientID: "test" })
    expect(console.info).toHaveBeenCalledWith(
      "INFO: (OAUTH) no flowType provided, default to code"
    )
  })
  test("flowType is not supported", () => {
    expect(() => {
      oidcSession({
        issuerURL: "http://dummy.com",
        clientID: "test",
        flowType: "something",
      })
    }).toThrowError("(OAUTH) flowType something is not supported!")
  })

  describe("returned result", () => {
    let session
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
