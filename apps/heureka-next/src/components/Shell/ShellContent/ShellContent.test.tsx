/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import { ShellContent } from "./ShellContent"
import { SERVICES, ISSUES } from "../../../constants"

/**
 * let's mock Services because that is a dependency of ShellContent
 * and has been tested independently
 **/
vitest.mock("../../Services/Services", () => ({
  Services: () => <div>render services here...</div>,
}))

describe("ShellContent", () => {
  it("should render Services", () => {
    render(<ShellContent selectedView={SERVICES} />)
    expect(screen.getByText("render services here...")).toBeInTheDocument()
  })

  it("should render issues", () => {
    render(<ShellContent selectedView={ISSUES} />)
    expect(screen.getByText("render issues here...")).toBeInTheDocument()
  })
})
