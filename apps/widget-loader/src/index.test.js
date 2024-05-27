/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

// const warn = jest.spyOn(global.console, "warn")
global.console.warn = jest.fn()
// global.console.log = jest.fn((t) => console.log("===", t))
global.console.error = jest.fn()

globalThis.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
  })
)

const script = document.createElement("script")
script.setAttribute("data-url", "https://localhost")
script.src = "https://test.com"

delete document.currentScript
Object.defineProperty(document, "currentScript", {
  value: script,
})

require("./index.js")

describe("window.__JUNO_WIDGET_LOADER", () => {
  test("window.__JUNO_WIDGET_LOADER is defined", async () => {
    expect(window.__JUNO_WIDGET_LOADER).toBeDefined()
  })
})
