/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { Tooltip } from "../Tooltip/index"
import { TooltipContent } from "../TooltipContent/index"
import { TooltipTrigger } from "./index"

describe("TooltipTrigger", () => {
  it("render a TooltipTrigger", () => {
    render(
      <Tooltip>
        <TooltipTrigger>Click me to show tooltip</TooltipTrigger>
        <TooltipContent>TEST</TooltipContent>
      </Tooltip>
    )
    expect(screen.getByRole("button")).toHaveClass("juno-tooltip-trigger")
  })

  it("renders a TooltipTrigger with a custom className as passed", () => {
    render(
      <Tooltip>
        <TooltipTrigger data-testid="tooltip-trigger" className="custom-test-tooltip">
          Click me to show tooltip
        </TooltipTrigger>
        <TooltipContent>TEST</TooltipContent>
      </Tooltip>
    )
    expect(screen.getByRole("button")).toHaveClass("custom-test-tooltip")
  })

  it("passes arbitrary data attributes to the trigger element", () => {
    render(
      <Tooltip>
        <TooltipTrigger data-testid="my-trigger" data-lolol="123">Click me</TooltipTrigger>
        <TooltipContent>TEST</TooltipContent>
      </Tooltip>
    )
    expect(screen.getByTestId("my-trigger")).toHaveAttribute("data-lolol", "123")
  })

  it("forwards ref to the underlying button element", () => {
    const ref = React.createRef<HTMLElement>()
    render(
      <Tooltip>
        <TooltipTrigger ref={ref}>Click me</TooltipTrigger>
        <TooltipContent>TEST</TooltipContent>
      </Tooltip>
    )
    expect(ref.current).toBeInstanceOf(HTMLButtonElement)
  })

  it("throws error if TooltipTrigger is not wrapped in a Tooltip", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {}) // Mock console.error

    expect(() => {
      render(<TooltipTrigger>This is the content</TooltipTrigger>)
    }).toThrow("Tooltip components must be wrapped in <Tooltip />")

    spy.mockRestore() // Restore the original console.error
  })
})
