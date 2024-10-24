/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"

import { LoadingIndicator } from "./"

describe("LoadingIndicator", () => {
  test("renders a LoadingIndicator", () => {
    render(<LoadingIndicator />)
    expect(screen.getByRole("progressbar")).toBeInTheDocument()
  })

  test("renders a LoadingIndicator with a size as passed", () => {
    render(<LoadingIndicator size="1000" />)
    expect(screen.getByRole("progressbar")).toBeInTheDocument()
    expect(screen.getByRole("progressbar")).toHaveAttribute("width", "1000")
    expect(screen.getByRole("progressbar")).toHaveAttribute("height", "1000")
  })

  test("renders a LoadingIndicator with a color as passed", () => {
    render(<LoadingIndicator color="jn-text-danger" />)
    expect(screen.getByRole("progressbar")).toBeInTheDocument()
    expect(screen.getByRole("progressbar")).toHaveClass("jn-text-danger")
  })

  test("renders a custom className as passed", () => {
    render(<LoadingIndicator className="some-custom-class" />)
    expect(screen.getByRole("progressbar")).toBeInTheDocument()
    expect(screen.getByRole("progressbar")).toHaveClass("some-custom-class")
  })

  test("renders all props as passed", () => {
    render(<LoadingIndicator data-lolol="1-2-3-lol" />)
    expect(screen.getByRole("progressbar")).toBeInTheDocument()
    expect(screen.getByRole("progressbar")).toHaveAttribute("data-lolol", "1-2-3-lol")
  })
})
