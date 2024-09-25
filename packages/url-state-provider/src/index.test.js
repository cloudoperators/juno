/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as provider from "./index"

// Mocking window.location and history methods
Object.defineProperty(window, "location", {
  value: { ...window.location },
})

window.history.replaceState = vi.fn().mockImplementation((state, title, url) => {
  window.location.href = url
})

window.history.pushState = vi.fn().mockImplementation((state, title, url) => {
  window.location.href = url
})

describe("currentState", () => {
  describe("url does not contain state information", () => {
    beforeAll(() => {
      vi.resetModules()
      window.location.href = "http://localhost?prop1=test"
    })

    it("should return empty object", () => {
      expect(provider.currentState("consumer1")).toBe(undefined)
    })
  })

  describe("url does contain state information", () => {
    const state = provider.encode({
      consumer1: {
        p: "/some-items",
        r: /ab+c/,
      },
      consumer2: { p: "/items\\/10", o: { tab: 2, array: [] } },
    })

    beforeAll(() => {
      vi.resetModules()
      window.location.href = "http://localhost?test1=test1&__s=" + state + "&test2=test2"
    })

    it("should return state object for consumer1", () => {
      expect(provider.currentState("consumer1")).toEqual({
        p: "/some-items",
        r: /ab+c/,
      })
    })

    it("should return state object for consumer2", () => {
      expect(provider.currentState("consumer2")).toEqual({
        p: "/items\\/10",
        o: { tab: 2, array: [] },
      })
    })
  })

  describe("regex", () => {
    const state = provider.encode({
      r: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    })

    beforeAll(() => {
      vi.resetModules()
      window.location.href = "http://localhost?test1=test1&__s=" + state + "&test2=test2"
    })

    it("test regex mail", () => {
      expect(provider.currentState("r")).toEqual(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    })
  })

  describe("push", () => {
    const state = provider.encode({
      consumer1: { p: "/items" },
      consumer2: { p: "/items/10", o: { tab: 2 } },
    })

    beforeAll(() => {
      vi.resetModules()
      delete window["__url_state_provider"]
      window.location.href = "http://localhost?test1=test1&__s=" + state + "&test2=test2"
      provider.push("consumer1", { p: "/about", o: { tab: 1 } })
    })

    it("should modify current state for consumer1", () => {
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
      const newState = provider.encode({
        consumer1: { p: "/about", o: { tab: 1 } },
        consumer2: { p: "/items/10", o: { tab: 2 } },
      })

      expect(window.location.href.includes(newState)).toBe(true)
    })

    it("should not modify other search params in URL", () => {
      const newState = provider.encode({
        consumer1: { p: "/about", o: { tab: 1 } },
        consumer2: { p: "/items/10", o: { tab: 2 } },
      })

      expect(window.location.href).toBe("http://localhost/?test1=test1&__s=" + newState + "&test2=test2")
    })

    describe("search params are empty", () => {
      beforeAll(() => {
        vi.resetModules()
        delete window["__url_state_provider"]
        window.location.href = "http://localhost"
        provider.push("consumer1", { p: "/about" })
      })

      it("should add ?", () => {
        const newState = provider.encode({
          consumer1: { p: "/about" },
        })

        expect(window.location.href).toBe("http://localhost/?__s=" + newState)
      })
    })

    it("support 50 states with a path length of 1000 characters", () => {
      const stateCount = 50
      const pathLength = 1000
      const states = {}
      for (let i = 0; i < stateCount; i++) {
        const key = "consumer" + i
        const state = {
          p: new Array(pathLength + 1).join("x"),
          o: { tab: 2, option1: "test", option2: "test " },
        }
        provider.push(key, state)
        states[key] = state
      }

      const urlState = new URL(window.location.href).searchParams.get("__s")
      // Ensure URL length stays within acceptable range
      expect(urlState?.length).toBeLessThan(1500)
    })
  })

  // Remaining tests can be similarly updated
})
