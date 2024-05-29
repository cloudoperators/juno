/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * Since we are accessing the window object, we use jsdom,
 * which emulates the browser
 * @jest-environment jsdom
 */
import * as provider from "./index"

Object.defineProperty(window, "location", {
  value: {
    ...window.location,
  },
})

window.history.replaceState = jest
  .fn()
  .mockImplementation((state, title, url) => {
    window.location.href = url
  })

window.history.pushState = jest.fn().mockImplementation((state, title, url) => {
  window.location.href = url
})

describe("currentState", () => {
  describe("url does not contain state inforamtion", () => {
    beforeAll(() => {
      jest.resetModules()
      window.location.href = "http://localhost?prop1=test"
    })

    it("should return empty object", () => {
      expect(provider.currentState("consumer1")).toBe(undefined)
    })
  })

  describe("url does contain state inforamtion", () => {
    const state = provider.encode({
      consumer1: { p: "/items" },
      consumer2: { p: "/items/10", o: { tab: 2 } },
    })

    beforeAll(() => {
      jest.resetModules()
      window.location.href =
        "http://localhost?test1=test1&__s=" + state + "&test2=test2"
    })

    it("should return state object for consumer1", () => {
      expect(provider.currentState("consumer1")).toEqual({ p: "/items" })
    })

    it("should return state object for consumer2", () => {
      expect(provider.currentState("consumer2")).toEqual({
        p: "/items/10",
        o: { tab: 2 },
      })
    })
  })
})

describe("push", () => {
  const state = provider.encode({
    consumer1: { p: "/items" },
    consumer2: { p: "/items/10", o: { tab: 2 } },
  })

  beforeAll(() => {
    jest.resetModules()
    delete window["__url_state_provider"]
    window.location.href =
      "http://localhost?test1=test1&__s=" + state + "&test2=test2"
    provider.push("consumer1", { p: "/about", o: { tab: 1 } })
  })

  it("should modify current state for cosumer1", () => {
    expect(provider.currentState("consumer1")).toEqual({
      p: "/about",
      o: { tab: 1 },
    })
  })

  it("should not modify current state for consumer2", () => {
    expect(provider.currentState("consumer2")).toEqual({
      p: "/items/10",
      o: { tab: 2 },
    })
  })

  it("should modify state search param in URL", () => {
    var newState = provider.encode({
      consumer1: { p: "/about", o: { tab: 1 } },
      consumer2: { p: "/items/10", o: { tab: 2 } },
    })

    expect(window.location.href.indexOf(newState) >= 0).toEqual(true)
  })

  it("should not modify other search params in URL", () => {
    var newState = provider.encode({
      consumer1: { p: "/about", o: { tab: 1 } },
      consumer2: { p: "/items/10", o: { tab: 2 } },
    })

    expect(window.location.href).toEqual(
      "http://localhost/?test1=test1&__s=" + newState + "&test2=test2"
    )
  })

  describe("search params are empty", () => {
    beforeAll(() => {
      jest.resetModules()
      delete window["__url_state_provider"]
      window.location.href = "http://localhost"
      provider.push("consumer1", { p: "/about" })
    })

    it("should add ?", () => {
      var newState = provider.encode({
        consumer1: { p: "/about" },
      })

      expect(window.location.href).toEqual("http://localhost/?__s=" + newState)
    })
  })

  it("support 50 states with a path length of 1000 characters", () => {
    let stateCount = 50
    let pathLength = 1000
    let states = {}
    for (let i = 0; i < stateCount; i++) {
      var key = "consumer" + i
      var state = {
        p: new Array(pathLength + 1).join("x"),
        o: { tab: 2, option1: "test", option2: "test " },
      }
      provider.push(key, state)
      states[key] = state
    }

    var urlState = new URL(window.location.href).searchParams.get("__s")
    // The browsers allow 2040 characters long URLs.
    // If we stay below 1500 characters, we can still support 50 different states with
    // a length of up to 1000 characters per path.
    expect(urlState.length < 1500).toEqual(true)
  })
})

describe("replace", () => {
  const state = provider.encode({
    consumer1: { p: "/items" },
    consumer2: { p: "/items/10", o: { tab: 2 } },
  })

  beforeAll(() => {
    jest.resetModules()
    delete window["__url_state_provider"]
    window.location.href =
      "http://localhost?test1=test1&__s=" + state + "&test2=test2"
    provider.replace("consumer1", { p: "/about", o: { tab: 1 } })
  })

  it("should modify current state for cosumer1", () => {
    expect(provider.currentState("consumer1")).toEqual({
      p: "/about",
      o: { tab: 1 },
    })
  })

  it("should not modify current state for consumer2", () => {
    expect(provider.currentState("consumer2")).toEqual({
      p: "/items/10",
      o: { tab: 2 },
    })
  })

  it("should modify state search param in URL", () => {
    var newState = provider.encode({
      consumer1: { p: "/about", o: { tab: 1 } },
      consumer2: { p: "/items/10", o: { tab: 2 } },
    })

    expect(window.location.href.indexOf(newState) >= 0).toEqual(true)
  })

  it("should not modify other search params in URL", () => {
    var newState = provider.encode({
      consumer1: { p: "/about", o: { tab: 1 } },
      consumer2: { p: "/items/10", o: { tab: 2 } },
    })

    expect(window.location.href).toEqual(
      "http://localhost/?test1=test1&__s=" + newState + "&test2=test2"
    )
  })

  describe("search params are empty", () => {
    beforeAll(() => {
      jest.resetModules()
      delete window["__url_state_provider"]
      window.location.href = "http://localhost"
      provider.replace("consumer1", { p: "/about" })
    })

    it("should add ?", () => {
      var newState = provider.encode({
        consumer1: { p: "/about" },
      })

      expect(window.location.href).toEqual("http://localhost/?__s=" + newState)
    })
  })
})

describe("addOnChangeListener", () => {
  var listener, listener2
  beforeAll(() => {
    jest.resetModules()
    listener = jest.fn((newState) => null)
    listener2 = jest.fn((newState) => null)
  })

  it("should register a new listener", () => {
    provider.addOnChangeListener("consumer1", listener)

    provider.push("consumer1", { p: "/items" })
    expect(listener).not.toHaveBeenCalledWith({ p: "/items" })
  })

  it("should call listener when state changes from outside", () => {
    provider.push("consumer1", { p: "/items" })
    provider.push("consumer2", { p: "/items2" })

    provider.addOnChangeListener("consumer1", listener)

    window.dispatchEvent(new Event("popstate"))
    expect(listener).toHaveBeenCalledWith({ p: "/items" })
  })

  it("should call listener when state of other keys changes", () => {
    provider.onGlobalChange(listener)

    provider.push("consumer2", { p: "/items" })
    expect(listener).toHaveBeenCalled()
  })
})

describe("removeOnChangeListener", () => {
  var listener
  beforeAll(() => {
    jest.resetModules()
    listener = jest.fn((newState) => null)
  })

  it("should register a new listener", () => {
    provider.addOnChangeListener("consumer1", listener)
    provider.removeOnChangeListener("consumer1")

    provider.push("consumer1", { p: "/items" })
    expect(listener).not.toHaveBeenCalled()
  })
})

describe("registerConsumer", () => {
  it("should be a function", () => {
    expect(typeof provider.registerConsumer === "function").toEqual(true)
  })

  describe("consumer properties", () => {
    var consumer = provider.registerConsumer("key1")

    it("should return an object", () => {
      expect(typeof consumer === "object").toEqual(true)
    })

    it("responds to currentState", () => {
      expect(typeof consumer.currentState === "function").toEqual(true)
    })

    it("responds to push", () => {
      expect(typeof consumer.push === "function").toEqual(true)
    })

    it("responds to replace", () => {
      expect(typeof consumer.replace === "function").toEqual(true)
    })

    it("responds to onChange", () => {
      expect(typeof consumer.onChange === "function").toEqual(true)
    })
  })
})
