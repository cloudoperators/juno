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
    it("log error on missing name", () => {
      // @ts-ignore: Expected error case
      broadcast()
      expect(globalThis.console.error).toHaveBeenCalledWith(
        "Communicator Error:",
        "(broadcast) the message name must be given."
      )
    })

    it("log warning on missing data", () => {
      const callback = vi.fn()
      watch("TEST", callback)
      broadcast("TEST", "data")
      expect(callback).toHaveBeenCalledWith("data", {
        sourceWindowId: expect.anything(),
        thisWindowId: expect.anything(),
      })
    })

    it("unknown options", () => {
      broadcast("TEST", { test: "test" }, { unknownOption: true })
      expect(globalThis.console.warn).toHaveBeenCalledWith(
        "Communicator Warning:",
        "(broadcast) unknown options: unknownOption"
      )
    })

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

    it("log error if wrong debug value", () => {
      // @ts-ignore: Expected error case
      broadcast("TEST", { name: "test" }, { debug: "true" })

      expect(globalThis.console.warn).toHaveBeenCalledWith(
        "Communicator Warning:",
        "(broadcast) debug must be a boolean"
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
    it("log error on missing name", () => {
      // @ts-ignore: Expected error case
      watch()
      expect(globalThis.console.error).toHaveBeenCalledWith(
        "Communicator Error:",
        "(watch) the message name must be given."
      )
    })

    it("log error on missing callback", () => {
      // @ts-ignore: Expected error case
      watch("TEST")
      expect(globalThis.console.error).toHaveBeenCalledWith(
        "Communicator Error:",
        "(watch) the callback parameter must be a function."
      )
    })

    it("log error if callback is not a function", () => {
      // @ts-ignore: Expected error case
      watch("TEST", "callback")
      expect(globalThis.console.error).toHaveBeenCalledWith(
        "Communicator Error:",
        "(watch) the callback parameter must be a function."
      )
    })

    it("unknown options", () => {
      watch("TEST", () => null, { unknownOption: true })
      expect(globalThis.console.warn).toHaveBeenCalledWith(
        "Communicator Warning:",
        "(watch) unknown options: unknownOption"
      )
    })

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
    it("log error on missing name", () => {
      // @ts-ignore: Expected error case
      get()
      expect(globalThis.console.error).toHaveBeenCalledWith(
        "Communicator Error:",
        "(get) the message name must be given."
      )
    })

    it("log error on missing callback", () => {
      // @ts-ignore: Expected error case
      get("TEST")
      expect(globalThis.console.error).toHaveBeenCalledWith(
        "Communicator Error:",
        "(get) the callback parameter must be a function."
      )
    })

    it("log error if callback is not a function", () => {
      // @ts-ignore: Expected error case
      get("TEST", "callback")
      expect(globalThis.console.error).toHaveBeenCalledWith(
        "Communicator Error:",
        "(get) the callback parameter must be a function."
      )
    })

    it("unknown options", () => {
      get("TEST", () => null, { unknownOption: true })
      expect(globalThis.console.warn).toHaveBeenCalledWith(
        "Communicator Warning:",
        "(get) unknown options: unknownOption"
      )
    })

    it("execute callback", () => {
      const callback = vi.fn()
      onGet("TEST_12345", callback)
      get("TEST_12345", callback)
      expect(callback).toHaveBeenCalled()
    })
  })

  // ############### ON GET ##################
  describe("onGet", () => {
    it("log error on missing name", () => {
      // @ts-ignore: Expected error case
      onGet()
      expect(globalThis.console.error).toHaveBeenCalledWith(
        "Communicator Error:",
        "(onGet) the message name must be given."
      )
    })

    it("log error on missing callback", () => {
      // @ts-ignore: Expected error case
      onGet("TEST")
      expect(globalThis.console.error).toHaveBeenCalledWith(
        "Communicator Error:",
        "(onGet) the callback parameter must be a function."
      )
    })

    it("log error if callback is not a function", () => {
      // @ts-ignore: Expected error case
      onGet("TEST", "callback")
      expect(globalThis.console.error).toHaveBeenCalledWith(
        "Communicator Error:",
        "(onGet) the callback parameter must be a function."
      )
    })

    it("unknown options", () => {
      onGet("TEST", () => null, { unknownOption: true })
      expect(globalThis.console.warn).toHaveBeenCalledWith(
        "Communicator Warning:",
        "(onGet) unknown options: unknownOption"
      )
    })

    it("returns a function", () => {
      const cancel = onGet("TEST", () => null)
      expect(typeof cancel).toEqual("function")
    })
  })
})
