/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { broadcast, watch, get, onGet } from "./index"
import { describe, it, vi, afterEach, expect } from "vitest"

globalThis.console.warn = vi.fn()
globalThis.console.error = vi.fn()
describe("Communicator", () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  // ################ BROADCAST #####################
  describe("broadcast", () => {
    it("create new broadcast channel", () => {
      const callback = vi.fn()
      watch("TEST_12345", callback)
      broadcast("TEST_12345", { name: "test" })
      expect(callback).toHaveBeenCalledWith({ name: "test" }, expect.anything())
    })

    it("include options in message payload", () => {
      const callback = vi.fn()
      watch("TEST_123456", callback)
      broadcast("TEST_123456", { name: "test" }, { debug: true })
      expect(callback).toHaveBeenCalledWith(
        { name: "test" },
        { sourceWindowId: expect.anything(), thisWindowId: expect.anything() }
      )
    })

    it("close channel after broadcast", () => {
      const postMessage = vi.fn()

      vi.spyOn(BroadcastChannel.prototype, "postMessage").mockImplementation(postMessage)
      broadcast("TEST", { name: "test" }, { crossWindow: true })

      expect(postMessage).toHaveBeenCalled()
    })
  })

  // ################## WATCH ###################
  describe("watch", () => {
    it("watch for events", () => {
      const callback = vi.fn()
      watch("TEST", callback)
      broadcast("TEST")
      expect(callback).toHaveBeenCalled()
    })

    it("multiple watchers", () => {
      const callback1 = vi.fn()
      const callback2 = vi.fn()
      watch("TEST", callback1)
      watch("TEST", callback2)
      broadcast("TEST")
      expect(callback1).toHaveBeenCalled()
      expect(callback2).toHaveBeenCalled()
    })
  })

  // ############### GET ##################
  describe("get", () => {
    it("execute callback", () => {
      const callback = vi.fn()
      onGet("TEST_12345", callback)
      get("TEST_12345", callback)
      expect(callback).toHaveBeenCalled()
    })
  })

  // ############### ON GET ##################
  describe("onGet", () => {
    it("returns a function", () => {
      const cancel = onGet("TEST", () => null)
      expect(typeof cancel).toEqual("function")
    })
  })
})
