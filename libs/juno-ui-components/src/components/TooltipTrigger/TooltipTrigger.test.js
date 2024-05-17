/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { Tooltip } from "../Tooltip/index.js"
import { TooltipContent } from "../TooltipContent/index.js"
import { TooltipTrigger } from "./index"

describe("TooltipTrigger", () => {
  test("render a TooltipTrigger", async () => {
    await render(
      <Tooltip>
        <TooltipTrigger>Click me to show tooltip</TooltipTrigger>
        <TooltipContent>TEST</TooltipContent>
      </Tooltip>
    )
    // screen.debug()
    expect(screen.getByText("Click me to show tooltip")).toBeInTheDocument()
  })

  test("renders a TooltipTrigger with a custom className as passed", async () => {
    await render(
      <Tooltip>
        <TooltipTrigger data-testid="tooltip-trigger" className="custom-test-tooltip">Click me to show tooltip</TooltipTrigger>
        <TooltipContent>TEST</TooltipContent>
      </Tooltip>
    )
    // screen.debug()
    expect(screen.getByRole("button")).toHaveClass("custom-test-tooltip")
  })

  test("throws error if TooltipTrigger is not wrapped in a Tooltip", async () => {
    const spy = jest.spyOn(console, "error").mockImplementation(() => {})
    expect(() => {
      render(<TooltipTrigger>Click me to show tooltip</TooltipTrigger>)
    }).toThrowError("Tooltip components must be wrapped in <Tooltip />")
    spy.mockRestore()
  })
  
})
