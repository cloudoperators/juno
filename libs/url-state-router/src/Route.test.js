/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @jest-environment jsdom
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import Router from "./Router.js"
import Route from "./Route.js"
import Redirect from "./Redirect.js"
import { useRouter } from "./RouterContext.js"

const TestRoute = () => {
  const { routeParams } = useRouter()
  return (
    <div>
      Route 1, {routeParams.id}, {routeParams.tab}
    </div>
  )
}

describe("Route", () => {
  describe("route does match", () => {
    beforeEach(() => {
      render(
        <Router stateID="app">
          <Route path="/">
            <Redirect to="/items/10/2" />
          </Route>
          <Route path="/items/:id/:tab" component={TestRoute} />
          <Route path="/about">
            <div>Route 2</div>
          </Route>
        </Router>
      )
      // screen.debug()
    })

    it("render route 1", () => {
      expect(() => {
        screen.getByText("Route 1, 10, 2")
      }).not.toThrow()
    })

    it("does not render route 2", () => {
      expect(() => {
        screen.getByText("Route 2")
      }).toThrow()
    })
  })

  describe("route does not match", () => {
    beforeEach(() => {
      render(
        <Router stateID="app">
          <Route path="/">
            <Redirect to="/items/about" />
          </Route>
          <Route path="/items/new">Route 1</Route>
          <Route exact path="/items">
            Route 2
          </Route>
        </Router>
      )
    })

    it("does not render route 1", () => {
      expect(() => {
        screen.getByText("Route 1")
      }).toThrow()
    })

    it("does not render route 2", () => {
      expect(() => {
        screen.getByText("Route 2")
      }).toThrow()
    })
  })
})
