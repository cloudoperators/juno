/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * @jest-environment jsdom
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import Router from "./Router"
import Switch from "./Switch"
import Route from "./Route"
import Redirect from "./Redirect"

describe("Switch", () => {
  describe("switch route 1, route 2", () => {
    beforeEach(() => {
      render(
        <Router stateID="app">
          <Route path="/">
            <Redirect to="/items/new" />
          </Route>
          <Switch>
            <Route path="/items/new">Route 1</Route>
            <Route path="/items/:id">Route 2</Route>
          </Switch>
        </Router>
      )
    })

    it("render route 1", () => {
      expect(() => {
        screen.getByText("Route 1")
      }).not.toThrow()
    })

    it("does not render route 2", () => {
      expect(() => {
        screen.getByText("Route 2")
      }).toThrow()
    })
  })

  describe("switch route 2, route 1", () => {
    beforeEach(() => {
      render(
        <Router stateID="app">
          <Route path="/">
            <Redirect to="/items/new" />
          </Route>
          <Switch>
            <Route path="/items/:id">Route 2</Route>
            <Route path="/items/new">Route 1</Route>
          </Switch>
        </Router>
      )
    })

    it("render route 2", () => {
      expect(() => {
        screen.getByText("Route 2")
      }).not.toThrow()
    })

    it("does not render route 1", () => {
      expect(() => {
        screen.getByText("Route 1")
      }).toThrow()
    })
  })
})
