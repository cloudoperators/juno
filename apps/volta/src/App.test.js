/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render } from "@testing-library/react"
// support shadow dom queries
// https://reactjsexample.com/an-extension-of-dom-testing-library-to-provide-hooks-into-the-shadow-dom/
import { screen } from "shadow-dom-testing-library"
import { oidcSession } from "oauth"

jest.mock("oauth", () => {
  return {
    oidcSession: jest.fn((props = {}) => {
      if (props?.onUpdate) {
        props.onUpdate({
          isProcessing: false,
          loggedIn: false,
          auth: null,
          error: null,
        })
      }
      return { login: jest.fn(), logout: jest.fn() }
    }),
  }
})
const App = require("./App").default

// mock window location
Object.defineProperty(window, "location", {
  value: {
    host: "localhost",
    port: "80",
    protocol: "http:",
    hostname: "localhost",
    href: "http://localhost/?page=1&name=testing",
    origin: "http://localhost/",
    pathname: "",
    search: "",
    hash: "",
    replace: jest.fn(),
    assign: jest.fn(),
  },
})

describe("logged in", () => {
  beforeEach(() => {
    oidcSession.mockImplementation((props = {}) => {
      if (props?.onUpdate) {
        props.onUpdate({
          isProcessing: false,
          loggedIn: true,
          auth: { JWT: "ID_TOKEN", raw: {}, parsed: {} },
          error: null,
        })
      }
      return { login: jest.fn(), logout: jest.fn() }
    })
  })

  test("do not show welcome page", async () => {
    await render(<App issuerurl={"https://sap.com"} clientid={"000000"} />)

    let welcome = await screen.queryAllByShadowText(
      /Welcome to the Converged Cloud /i
    )
    expect(welcome.length > 0).toBe(false)
  })
})

describe("not logged in", () => {
  beforeEach(() => {
    oidcSession.mockImplementation((props = {}) => {
      if (props?.onUpdate) {
        props.onUpdate({
          isProcessing: false,
          loggedIn: false,
          auth: null,
          error: null,
        })
      }
      return { login: jest.fn(), logout: jest.fn() }
    })
  })

  test("should show welcome page", async () => {
    await render(<App issuerurl={"https://sap.com"} clientid={"000000"} />)

    let welcome = await screen.queryAllByShadowText(
      /Welcome to the Converged Cloud /i
    )
    expect(welcome.length > 0).toBe(true)
  })
})
