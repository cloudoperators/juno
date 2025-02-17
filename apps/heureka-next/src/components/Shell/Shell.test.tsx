/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Shell } from "./Shell"

/**
 * let's mock Services because that is a dependency of Shell
 * and has been tested independently
 **/
vitest.mock("../Services/Services", () => ({
  Services: () => <div>render services here...</div>,
}))

const renderShell = () => ({
  user: userEvent.setup(),
  ...render(<Shell />),
})

describe("Shell", () => {
  it("should render correctly", () => {
    renderShell()
    // assert that page header is rendered
    expect(screen.getByText("Heureka")).toBeInTheDocument()
    // assert that the top navigation is rendered
    expect(screen.getByText("Services")).toBeInTheDocument()
    expect(screen.getByText("Issues")).toBeInTheDocument()
    expect(screen.getByText("Images")).toBeInTheDocument()
  })

  it("should render services view by default", () => {
    renderShell()
    expect(screen.getByText("render services here...")).toBeInTheDocument()
  })

  it("should allow switching to other view", async () => {
    const { user } = renderShell()
    await user.click(screen.getByText("Issues"))
    expect(screen.getByText("render issues here...")).toBeInTheDocument()
    expect(screen.queryByText("render services here...")).not.toBeInTheDocument()
  })
})
