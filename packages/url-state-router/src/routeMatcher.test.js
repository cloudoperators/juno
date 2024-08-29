/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import routeMatcher from "./routeMatcher"

describe("routeMatcher", () => {
  describe("exact is false", () => {
    let currentPath = "/items/10/2"
    const options = { exact: false }

    describe("currentPath starts with routePath", () => {
      const routePath = "/items"

      it("match", () => {
        const [match, _] = routeMatcher(currentPath, routePath, options)

        expect(match).toEqual(true)
      })

      it("returns empty route params", () => {
        const [_, routeParams] = routeMatcher(currentPath, routePath, options)
        expect(routeParams).toEqual({})
      })

      it("returns only mapped route params", () => {
        const [_, routeParams] = routeMatcher(currentPath, "/items/:id", options)
        expect(routeParams).toEqual({ id: "10" })
      })
    })

    describe("routePath is equal to currentPath", () => {
      const routePath = currentPath

      it("match", () => {
        const [match, _] = routeMatcher(currentPath, routePath, options)
        expect(match).toEqual(true)
      })

      it("returns empty route params", () => {
        const [_, routeParams] = routeMatcher(currentPath, routePath, options)
        expect(routeParams).toEqual({})
      })
    })

    describe("currentPath match routePath", () => {
      const routePath = "/items/:id/:tab"

      it("match", () => {
        const [match, _] = routeMatcher(currentPath, routePath, options)
        expect(match).toEqual(true)
      })

      it("returns route params", () => {
        const [_, routeParams] = routeMatcher(currentPath, routePath, options)
        expect(routeParams).toEqual({ id: "10", tab: "2" })
      })
    })
  })

  describe("exact is true", () => {
    const options = { exact: true }
    const currentPath = "/items/10/2"

    describe("currentPath starts with routePath but does not match", () => {
      const routePath = "/items/10"

      it("match", () => {
        const [match, _] = routeMatcher(currentPath, routePath, options)

        expect(match).toEqual(false)
      })

      it("returns undefined route params", () => {
        const [_, routeParams] = routeMatcher(currentPath, routePath, options)
        expect(routeParams).toBeUndefined()
      })
    })

    describe("routePath is equal to currentPath", () => {
      const routePath = currentPath

      it("match", () => {
        const [match, _] = routeMatcher(currentPath, routePath, options)
        expect(match).toEqual(true)
      })

      it("returns empty route params", () => {
        const [_, routeParams] = routeMatcher(currentPath, routePath, options)
        expect(routeParams).toEqual({})
      })
    })

    describe("currentPath match routePath", () => {
      const routePath = "/items/:id/:tab"

      it("match", () => {
        const [match, _] = routeMatcher(currentPath, routePath, options)
        expect(match).toEqual(true)
      })

      it("returns route params", () => {
        const [_, routeParams] = routeMatcher(currentPath, routePath, options)
        expect(routeParams).toEqual({ id: "10", tab: "2" })
      })
    })
  })
})
