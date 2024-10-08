/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { TabList } from "./index"

describe("TabList", () => {
  test("renders a TabList", () => {
    render(<TabList />)
    expect(screen.getByRole("tablist")).toBeInTheDocument()
    expect(screen.getByRole("tablist")).toHaveClass("juno-tablist")
  })

  test("renders a custom classNames", () => {
    render(<TabList className="my-custom-class" />)
    expect(screen.getByRole("tablist")).toBeInTheDocument()
    expect(screen.getByRole("tablist")).toHaveClass("my-custom-class")
  })

  test("renders a Content variant TabList by default", () => {
    render(<TabList />)
    expect(screen.getByRole("tablist")).toBeInTheDocument()
    expect(screen.getByRole("tablist")).toHaveClass("juno-tablist-content")
  })

  test("renders a Main variant TabList as passed", () => {
    render(<TabList variant="main" />)
    expect(screen.getByRole("tablist")).toBeInTheDocument()
    expect(screen.getByRole("tablist")).toHaveClass("juno-tablist-main")
  })

  test("renders all other props", () => {
    render(<TabList data-lolol="13" />)
    expect(screen.getByRole("tablist")).toBeInTheDocument()
    expect(screen.getByRole("tablist")).toHaveAttribute("data-lolol", "13")
  })
})
