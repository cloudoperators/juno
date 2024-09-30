/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { Tab } from "./index"

describe("Tab", () => {
  test("renders a Tab", () => {
    render(<Tab />)
    expect(screen.getByRole("tab")).toBeInTheDocument()
    expect(screen.getByRole("tab")).toHaveClass("juno-tab")
  })

  test("renders a Tab with a label as passed", () => {
    render(<Tab label="My Tab" />)
    expect(screen.getByRole("tab")).toBeInTheDocument()
    expect(screen.getByRole("tab")).toHaveTextContent("My Tab")
  })

  test("renders an Icon as passed", () => {
    render(<Tab label="My Tab" icon="warning" />)
    expect(screen.getByRole("tab")).toBeInTheDocument()
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("alt", "warning")
  })

  test("renders a disabled Tab as passed", () => {
    render(<Tab disabled />)
    expect(screen.getByRole("tab")).toBeInTheDocument()
    expect(screen.getByRole("tab")).toHaveAttribute("aria-disabled")
  })

  test("renders a custom classNames", () => {
    render(<Tab className="my-custom-class" />)
    expect(screen.getByRole("tab")).toBeInTheDocument()
    expect(screen.getByRole("tab")).toHaveClass("my-custom-class")
  })

  test("renders all other props", () => {
    render(<Tab data-lolol="13" />)
    expect(screen.getByRole("tab")).toBeInTheDocument()
    expect(screen.getByRole("tab")).toHaveAttribute("data-lolol", "13")
  })
})
