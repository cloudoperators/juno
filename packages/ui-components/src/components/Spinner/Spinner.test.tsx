/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { Spinner } from "./index"

describe("Spinner", () => {
  test("renders a Spinner", () => {
    render(<Spinner />)
    expect(screen.getByRole("progressbar")).toBeInTheDocument()
  })

  test("renders a default color spinner", () => {
    render(<Spinner />)
    expect(screen.getByRole("progressbar")).toBeInTheDocument()
    expect(screen.getByRole("progressbar")).toHaveClass("jn-text-theme-on-default")
  })

  test("renders a primary color spinner", () => {
    render(<Spinner variant="primary" />)
    expect(screen.getByRole("progressbar")).toBeInTheDocument()
    expect(screen.getByRole("progressbar")).toHaveClass("jn-text-theme-accent")
  })

  test("renders a warning color spinner", () => {
    render(<Spinner variant="warning" />)
    expect(screen.getByRole("progressbar")).toBeInTheDocument()
    expect(screen.getByRole("progressbar")).toHaveClass("jn-text-theme-warning")
  })

  test("renders a danger color spinner", () => {
    render(<Spinner variant="danger" />)
    expect(screen.getByRole("progressbar")).toBeInTheDocument()
    expect(screen.getByRole("progressbar")).toHaveClass("jn-text-theme-danger")
  })

  test("renders a success color spinner", () => {
    render(<Spinner variant="success" />)
    expect(screen.getByRole("progressbar")).toBeInTheDocument()
    expect(screen.getByRole("progressbar")).toHaveClass("jn-text-theme-success")
  })

  test("renders a custom colored spinner", () => {
    render(<Spinner variant="success" color="jn-text-theme-button-primary" />)
    expect(screen.getByRole("progressbar")).toBeInTheDocument()
    expect(screen.getByRole("progressbar")).not.toHaveClass("jn-text-theme-success")
    expect(screen.getByRole("progressbar")).toHaveClass("jn-text-theme-button-primary")
  })

  test("renders a default sized Spinner", () => {
    render(<Spinner id="spinner" />)
    const spinner = screen.getByRole("progressbar")
    expect(spinner).toHaveClass("jn-h-5")
    expect(spinner).toHaveClass("jn-w-5")
    // this test is semi-brittle: in case we begin to use the style attribute on spinner this will break:
    expect(spinner).not.toHaveAttribute("style")
  })

  test("renders a small Spinner", () => {
    render(<Spinner id="spinner" size="small" />)
    const spinner = document.getElementById("spinner")
    const spinnerstyles = window.getComputedStyle(spinner!)
    expect(spinnerstyles.height).toBe("1rem")
    expect(spinnerstyles.width).toBe("1rem")
  })

  test("renders a large Spinner", () => {
    render(<Spinner id="spinner" size="large" />)
    const spinner = document.getElementById("spinner")
    const spinnerstyles = window.getComputedStyle(spinner!)
    expect(spinnerstyles.height).toBe("3rem")
    expect(spinnerstyles.width).toBe("3rem")
  })

  test("renders a custom sized Spinner", () => {
    render(<Spinner id="spinner" size="8rem" />)
    const spinner = document.getElementById("spinner")
    const spinnerstyles = window.getComputedStyle(spinner!)
    expect(spinnerstyles.height).toBe("8rem")
    expect(spinnerstyles.width).toBe("8rem")
  })

  test("renders a custom className", () => {
    render(<Spinner className="my-custom-class" />)
    expect(screen.getByRole("progressbar")).toBeInTheDocument()
    expect(screen.getByRole("progressbar")).toHaveClass("my-custom-class")
  })

  test("renders all props", () => {
    render(<Spinner id="a-spinner" name="the-spinner-to-test" data-lolol="some-random-prop" />)
    const spinner = screen.getByRole("progressbar")
    expect(spinner).toHaveAttribute("id", "a-spinner")
    expect(spinner).toHaveAttribute("name", "the-spinner-to-test")
    expect(spinner).toHaveAttribute("data-lolol", "some-random-prop")
  })
})
