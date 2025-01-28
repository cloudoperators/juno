/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Shell from "./Shell"

const renderShell = () => ({
  user: userEvent.setup(),
  ...render(<Shell />),
})

describe("Shell", () => {
  it("should render correctly", () => {
    renderShell()
    // assert that the top navigation is rendered
    expect(screen.getByText("Services")).toBeInTheDocument()
    expect(screen.getByText("Vulnerabilities")).toBeInTheDocument()
    expect(screen.getByText("Images")).toBeInTheDocument()
  })

  it("should render services view by default", () => {
    renderShell()
    expect(screen.getByText("render services here...")).toBeInTheDocument()
  })

  it("should allow switching to other view", async () => {
    const { user } = renderShell()
    await user.click(screen.getByText("Vulnerabilities"))
    expect(screen.getByText("render vulnerabilities here...")).toBeInTheDocument()
    expect(screen.queryByText("render services here...")).not.toBeInTheDocument()
  })
})
