/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * @jest-environment jsdom
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import Router from "./Router"

describe("Router", () => {
  it("render component", () => {
    render(<Router stateID="app1">TEST</Router>)
    expect(screen.getByText("TEST")).toBeDefined()
  })
})
