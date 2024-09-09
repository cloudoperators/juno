/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"

import { Tooltip } from "../Tooltip/Tooltip.component"
import { TooltipTrigger } from "../TooltipTrigger/TooltipTrigger.component"
import { TooltipContent } from "./index"

describe("TooltipContent", () => {
  it("render a TooltipContent", () => {
    const { container } = render(
      <Tooltip initialOpen={true}>
        <TooltipContent className="test-tooltip-content">TEST</TooltipContent>
      </Tooltip>
    )
    // screen.debug()
    expect(container.querySelector('[class~="test-tooltip-content"]')).toBeInTheDocument()
  })

  it("renders a TooltipContent with a custom className as passed", () => {
    render(
      <Tooltip initialOpen={true}>
        <TooltipTrigger>Click me to show tooltip</TooltipTrigger>
        <TooltipContent data-testid="tooltip-content" className="custom-test-tooltip">
          TEST
        </TooltipContent>
      </Tooltip>
    )
    // screen.debug()
    expect(screen.getByTestId("tooltip-content")).toHaveClass("custom-test-tooltip")
  })

  it("throws error if TooltipContent is not wrapped in a Tooltip", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {}) // Mock console.error

    expect(() => {
      render(<TooltipContent>This is the content</TooltipContent>)
    }).toThrow("Tooltip components must be wrapped in <Tooltip />")

    spy.mockRestore() // Restore the original console.error
  })
})
