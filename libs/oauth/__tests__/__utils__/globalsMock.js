/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

globalThis.console.error = jest.fn()
globalThis.console.warn = jest.fn()
globalThis.console.info = jest.fn()

delete global.window.location
// global.window = Object.create(window)
// global.window.location = {}

global.window.location = {
  ancestorOrigins: null,
  hash: null,
  host: "dummy.com",
  port: "80",
  protocol: "http:",
  hostname: "dummy.com",
  href: "http://dummy.com",
  origin: "http://dummy.com",
  pathname: null,
  search: null,
  assign: null,
  reload: null,
  replace: null,
}

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
  })
)
