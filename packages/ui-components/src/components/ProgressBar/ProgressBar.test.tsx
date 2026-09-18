/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { describe, expect, test } from "vitest"
import { render, screen } from "@testing-library/react"
import { ProgressBar } from "./"

describe("ProgressBar component", () => {
  test("renders with role progressbar", () => {
    render(<ProgressBar />)
    expect(screen.getByRole("progressbar")).toBeInTheDocument()
  })

  test("applies juno-progressbar class", () => {
    render(<ProgressBar />)
    expect(screen.getByRole("progressbar")).toHaveClass("juno-progressbar")
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

  test("does not render fill div when value is 0", () => {
    render(<ProgressBar value={0} />)
    expect(screen.getByRole("progressbar").children).toHaveLength(0)
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

  test("spreads additional HTML attributes", () => {
    render(<ProgressBar data-testid="pb" data-extra="yes" />)
    expect(screen.getByTestId("pb")).toHaveAttribute("data-extra", "yes")
  })

  test("renders busy indicator when busy is true", () => {
    render(<ProgressBar busy />)
    expect(screen.getByRole("progressbar").children).toHaveLength(1)
  })

  test("does not set aria-valuenow when busy", () => {
    render(<ProgressBar busy value={50} />)
    expect(screen.getByRole("progressbar")).not.toHaveAttribute("aria-valuenow")
  })

  test("ignores value fill when busy is true", () => {
    const { container } = render(<ProgressBar busy={false} value={50} />)
    const fill = container.querySelector("[role='progressbar'] > div")
    expect(fill).toBeInTheDocument()
    const style = (fill as HTMLElement).getAttribute("style")
    expect(style).toContain("width: 50%")
  })
})
