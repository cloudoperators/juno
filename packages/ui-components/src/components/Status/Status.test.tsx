/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import { Status } from "./Status.component"

describe("Status", () => {
  it("renders a Status", () => {
    render(<Status />)
    expect(document.querySelector(".juno-status")).toBeInTheDocument()
  })

  it("renders a spinner when status is progress", () => {
    render(<Status status="progress" />)
    expect(screen.getByRole("progressbar")).toBeInTheDocument()
    expect(screen.getByRole("progressbar")).toHaveClass("juno-spinner")
  })

  it("does not render a spinner by default for non-progress statuses", () => {
    render(<Status status="error" />)
    expect(screen.queryByRole("progressbar")).not.toBeInTheDocument()
  })

  it("renders a spinner when spinner prop is true", () => {
    render(<Status status="error" spinner={true} />)
    expect(screen.getByRole("progressbar")).toBeInTheDocument()
    expect(screen.getByRole("progressbar")).toHaveClass("juno-spinner")
  })

  it("does not render a spinner when spinner prop is false even for progress status", () => {
    render(<Status status="progress" spinner={false} />)
    expect(screen.queryByRole("progressbar")).not.toBeInTheDocument()
  })

  it("renders the spinner with the primary variant", () => {
    render(<Status status="progress" />)
    expect(screen.getByRole("progressbar")).toHaveClass("jn:text-theme-accent")
  })
})
