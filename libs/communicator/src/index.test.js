/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

test("HI", () => expect(true).toEqual(true))
globalThis.console.log = jest.fn()
globalThis.console.warn = jest.fn()
globalThis.console.error = jest.fn()

const bc = {
  postMessage: jest.fn(),
  close: jest.fn(() => true),
}

globalThis.BroadcastChannel = jest.fn().mockImplementation(() => {
  return bc
})

const { broadcast, watch, get, onGet } = require("./index")

describe("Communicator", () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  // ################ BROADCAST #####################
  describe("broadcast", () => {
    test("log error on missing name", () => {
      broadcast()
      expect(globalThis.console.error).toHaveBeenCalledWith(
        "Communicator Error:",
        "(broadcast) the message name must be given."
      )
    })
    test("log warning on missing data", () => {
      let callback = jest.fn()
      watch("TEST", callback)
      broadcast("TEST", "data")
      expect(callback).toHaveBeenCalledWith("data", {
        sourceWindowId: expect.anything(),
        thisWindowId: expect.anything(),
      })
    })

    test("unknown options", () => {
      broadcast("TEST", { test: "test" }, { unknownOption: true })
      expect(globalThis.console.warn).toHaveBeenCalledWith(
        "Communicator Warning:",
        "(broadcast) unknown options: unknownOption"
      )
    })

    test("create new broadcast channel", () => {
      let callback = jest.fn()
      watch("TEST_12345", callback)
      broadcast("TEST_12345", { name: "test" })
      expect(callback).toHaveBeenCalledWith({ name: "test" }, expect.anything())
    })

    test("include options in message payload", () => {
      let callback = jest.fn()
      watch("TEST_123456", callback)
      broadcast("TEST_123456", { name: "test" }, { debug: true })
      expect(callback).toHaveBeenCalledWith(
        { name: "test" },
        { sourceWindowId: expect.anything(), thisWindowId: expect.anything() }
      )
    })

    test("log error if wrong debug value", () => {
      broadcast("TEST", { name: "test" }, { debug: "true" })

      expect(globalThis.console.warn).toHaveBeenCalledWith(
        "Communicator Warning:",
        "(broadcast) debug must be a boolean"
      )
    })

    test("close channel after broadcast", () => {
      broadcast("TEST", { name: "test" }, { crossWindow: true })

      expect(bc.postMessage).toHaveBeenCalled()
    })
  })

  // ################## WATCH ###################
  describe("watch", () => {
    test("log error on missing name", () => {
      watch()
      expect(globalThis.console.error).toHaveBeenCalledWith(
        "Communicator Error:",
        "(watch) the message name must be given."
      )
    })
    test("log error on missing callback", () => {
      watch("TEST")
      expect(globalThis.console.error).toHaveBeenCalledWith(
        "Communicator Error:",
        "(watch) the callback parameter must be a function."
      )
    })

    test("log error if callback is not a function", () => {
      watch("TEST", "callback")
      expect(globalThis.console.error).toHaveBeenCalledWith(
        "Communicator Error:",
        "(watch) the callback parameter must be a function."
      )
    })

    test("unknown options", () => {
      watch("TEST", () => null, { unknownOption: true })
      expect(globalThis.console.warn).toHaveBeenCalledWith(
        "Communicator Warning:",
        "(watch) unknown options: unknownOption"
      )
    })

    test("watch for events", () => {
      let callback = jest.fn()
      watch("TEST", callback)
      broadcast("TEST")
      expect(callback).toHaveBeenCalled()
    })

    test("multiple watchers", () => {
      let callback1 = jest.fn()
      let callback2 = jest.fn()
      watch("TEST", callback1)
      watch("TEST", callback2)
      broadcast("TEST")
      expect(callback1).toHaveBeenCalled()
      expect(callback2).toHaveBeenCalled()
    })
  })

  // ############### GET ##################
  describe("get", () => {
    test("log error on missing name", () => {
      get()
      expect(globalThis.console.error).toHaveBeenCalledWith(
        "Communicator Error:",
        "(get) the message name must be given."
      )
    })
    test("log error on missing callback", () => {
      get("TEST")
      expect(globalThis.console.error).toHaveBeenCalledWith(
        "Communicator Error:",
        "(get) the callback parameter must be a function."
      )
    })

    test("log error if callback is not a function", () => {
      get("TEST", "callback")
      expect(globalThis.console.error).toHaveBeenCalledWith(
        "Communicator Error:",
        "(get) the callback parameter must be a function."
      )
    })

    test("unknown options", () => {
      get("TEST", () => null, { unknownOption: true })
      expect(globalThis.console.warn).toHaveBeenCalledWith(
        "Communicator Warning:",
        "(get) unknown options: unknownOption"
      )
    })

    test("execute callback", () => {
      let callback = jest.fn()
      onGet("TEST_12345", callback)
      get("TEST_12345", callback)
      expect(callback).toHaveBeenCalled()
    })
  })

  // ############### ON GET ##################
  describe("onGet", () => {
    test("log error on missing name", () => {
      onGet()
      expect(globalThis.console.error).toHaveBeenCalledWith(
        "Communicator Error:",
        "(onGet) the message name must be given."
      )
    })

    test("log error on missing callback", () => {
      onGet("TEST")
      expect(globalThis.console.error).toHaveBeenCalledWith(
        "Communicator Error:",
        "(onGet) the callback parameter must be a function."
      )
    })
    test("log error if callback is not a function", () => {
      onGet("TEST", "callback")
      expect(globalThis.console.error).toHaveBeenCalledWith(
        "Communicator Error:",
        "(onGet) the callback parameter must be a function."
      )
    })
    test("unknown options", () => {
      onGet("TEST", () => null, { unknownOption: true })
      expect(globalThis.console.warn).toHaveBeenCalledWith(
        "Communicator Warning:",
        "(onGet) unknown options: unknownOption"
      )
    })

    test("returns a function", () => {
      const cancel = onGet("TEST", () => null)
      expect(typeof cancel).toEqual("function")
    })
  })
})
