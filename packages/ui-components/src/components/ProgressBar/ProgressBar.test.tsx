/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { describe, expect, test } from "vitest"
import { render, screen } from "@testing-library/react"
import { ProgressBar } from "./"

describe("ProgressBar component", () => {
  test("renders with role progressbar and base class", () => {
    render(<ProgressBar />)
    const el = screen.getByRole("progressbar")
    expect(el).toBeInTheDocument()
    expect(el).toHaveClass("juno-progressbar")
  })

  test("sets aria-valuenow to the provided value", () => {
    render(<ProgressBar value={42} />)
    expect(screen.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "42")
  })

  test("sets aria-valuemin and aria-valuemax", () => {
    render(<ProgressBar />)
    const el = screen.getByRole("progressbar")
    expect(el).toHaveAttribute("aria-valuemin", "0")
    expect(el).toHaveAttribute("aria-valuemax", "100")
  })

  test("sets default aria-label to 'Progress'", () => {
    render(<ProgressBar />)
    expect(screen.getByRole("progressbar")).toHaveAttribute("aria-label", "Progress")
  })

  test("accepts a custom aria-label", () => {
    render(<ProgressBar aria-label="File upload progress" />)
    expect(screen.getByRole("progressbar")).toHaveAttribute("aria-label", "File upload progress")
  })

  test("renders the fill div with width 0% when value is 0", () => {
    render(<ProgressBar value={0} />)
    const el = screen.getByRole("progressbar")
    expect(el.children).toHaveLength(1)
    const fill = el.firstElementChild as HTMLElement
    expect(fill.style.width).toBe("0%")
  })

  test("renders fill div when value is greater than 0", () => {
    render(<ProgressBar value={50} />)
    expect(screen.getByRole("progressbar").children).toHaveLength(1)
  })

  test("clamps value above 100 to 100", () => {
    render(<ProgressBar value={150} />)
    expect(screen.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "100")
  })

  test("clamps value below 0 to 0", () => {
    render(<ProgressBar value={-10} />)
    expect(screen.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "0")
  })

  test("applies additional className", () => {
    render(<ProgressBar className="custom-class" />)
    expect(screen.getByRole("progressbar")).toHaveClass("custom-class")
  })

  test("applies juno-progressbar-determinate class by default", () => {
    render(<ProgressBar />)
    expect(screen.getByRole("progressbar")).toHaveClass("juno-progressbar-determinate")
  })

  test("applies juno-progressbar-busy class in busy mode", () => {
    render(<ProgressBar mode="busy" />)
    expect(screen.getByRole("progressbar")).toHaveClass("juno-progressbar-busy")
  })

  test("spreads additional HTML attributes", () => {
    render(<ProgressBar data-testid="pb" data-extra="yes" />)
    expect(screen.getByTestId("pb")).toHaveAttribute("data-extra", "yes")
  })

  test("renders busy indicator in busy mode", () => {
    const { container } = render(<ProgressBar mode="busy" />)
    expect(screen.getByRole("progressbar").children).toHaveLength(1)
    expect(container.querySelector(".juno-progressbar-busy-fill")).toBeInTheDocument()
  })

  test("does not set aria-valuenow in busy mode", () => {
    render(<ProgressBar mode="busy" value={50} />)
    expect(screen.getByRole("progressbar")).not.toHaveAttribute("aria-valuenow")
  })

  test("renders the determinate fill scaled to value", () => {
    render(<ProgressBar value={50} />)
    const fill = screen.getByRole("progressbar").firstElementChild
    expect(fill).toBeInTheDocument()
    expect((fill as HTMLElement).style.width).toBe("50%")
  })

  test("renders the determinate fill with juno-progressbar-determinate-fill class", () => {
    const { container } = render(<ProgressBar value={50} />)
    expect(container.querySelector(".juno-progressbar-determinate-fill")).toBeInTheDocument()
  })

  test("clamps a non-finite value to 0", () => {
    render(<ProgressBar value={NaN} />)
    const el = screen.getByRole("progressbar")
    expect(el).toHaveAttribute("aria-valuenow", "0")
    const fill = el.firstElementChild as HTMLElement
    expect(fill.style.width).toBe("0%")
  })

  test("omits aria-valuemin and aria-valuemax in busy mode", () => {
    render(<ProgressBar mode="busy" />)
    const el = screen.getByRole("progressbar")
    expect(el).not.toHaveAttribute("aria-valuemin")
    expect(el).not.toHaveAttribute("aria-valuemax")
  })
})
