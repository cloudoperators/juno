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
    // screen.debug()
    expect(screen.getByText("Click me to show tooltip")).toBeInTheDocument()
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
    // screen.debug()
    expect(screen.getByRole("button")).toHaveClass("custom-test-tooltip")
  })

  it("throws error if TooltipTrigger is not wrapped in a Tooltip", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {}) // Mock console.error

    expect(() => {
      render(<TooltipTrigger>This is the content</TooltipTrigger>)
    }).toThrow("Tooltip components must be wrapped in <Tooltip />")

    spy.mockRestore() // Restore the original console.error
  })
})
