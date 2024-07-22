/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { Tooltip } from "../Tooltip/index.js"
import { TooltipTrigger } from "../TooltipTrigger/index.js"
import { TooltipContent } from "./index"

describe("TooltipContent", () => {
  test("render a TooltipContent", async () => {
    const { container } = await render(
      <Tooltip initialOpen={true}>
        <TooltipContent className="test-tooltip-content">TEST</TooltipContent>
      </Tooltip>
    )
    // screen.debug()
    expect(
      container.querySelector('[class~="test-tooltip-content"]')
    ).toBeInTheDocument()
  })

  test("renders a TooltipContent with a custom className as passed", async () => {
    await render(
      <Tooltip initialOpen={true}>
        <TooltipTrigger>Click me to show tooltip</TooltipTrigger>
        <TooltipContent
          data-testid="tooltip-content"
          className="custom-test-tooltip"
        >
          TEST
        </TooltipContent>
      </Tooltip>
    )
    // screen.debug()
    expect(screen.getByTestId("tooltip-content")).toHaveClass(
      "custom-test-tooltip"
    )
  })

  test("throws error if TooltipContent is not wrapped in a Tooltip", async () => {
    const spy = jest.spyOn(console, "error").mockImplementation(() => {})
    expect(() => {
      render(<TooltipContent>This is the content</TooltipContent>)
    }).toThrow("Tooltip components must be wrapped in <Tooltip />")
    spy.mockRestore()
  })
})
