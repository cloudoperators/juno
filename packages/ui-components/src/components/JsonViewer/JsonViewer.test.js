/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { JsonViewer } from "./index"

describe("JsonViewer", () => {
  test("renders json data", async () => {
    await render(<JsonViewer data={{ name: "test" }} data-testid="my-json-viewer" />)
    expect(screen.getByTestId("my-json-viewer")).toBeInTheDocument()
  })

  test("renders a custom class as passed", async () => {
    await render(<JsonViewer data={{ name: "test" }} data-testid="my-json-viewer" className="my-custom-class" />)
    expect(screen.getByTestId("my-json-viewer")).toHaveClass("my-custom-class")
  })

  test("renders other props as passed", async () => {
    await render(<JsonViewer data={{ name: "test" }} data-testid="my-json-viewer" name="My shiny JsonViewer" />)
    expect(screen.getByTestId("my-json-viewer")).toHaveAttribute("name", "My shiny JsonViewer")
  })
})
