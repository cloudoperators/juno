/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { Toast } from "./index"
import userEvent from "@testing-library/user-event"

describe("Toast", () => {
  test("render a toast", () => {
    render(<Toast data-testid="my-toast" />)
    expect(screen.getByTestId("my-toast")).toBeInTheDocument()
  })

  test("render an info toast by default", () => {
    render(<Toast data-testid="my-toast" />)
    expect(screen.getByTestId("my-toast")).toBeInTheDocument()
    expect(screen.getByTitle("Info")).toBeInTheDocument()
  })

  test("render a warning toast", () => {
    render(<Toast data-testid="my-toast" variant="warning" />)
    expect(screen.getByTestId("my-toast")).toBeInTheDocument()
    expect(screen.getByTitle("Warning")).toBeInTheDocument()
  })

  test("render an sucess toast", () => {
    render(<Toast data-testid="my-toast" variant="success" />)
    expect(screen.getByTestId("my-toast")).toBeInTheDocument()
    expect(screen.getByTitle("Success")).toBeInTheDocument()
  })

  test("render an error toast", () => {
    render(<Toast data-testid="my-toast" variant={"error"} />)
    expect(screen.getByTestId("my-toast")).toBeInTheDocument()
    expect(screen.getByTitle("Dangerous")).toBeInTheDocument()
  })

  test("renders a danger toast", () => {
    render(<Toast data-testid="my-toast" variant={"danger"} />)
    expect(screen.getByTestId("my-toast")).toBeInTheDocument()
    expect(screen.getByTitle("Danger")).toBeInTheDocument()
  })

  test("renders a toast that can be dismissed", async () => {
    const user = userEvent.setup()
    const handleDismiss = vi.fn()
    render(<Toast data-testid="my-toast" onDismiss={handleDismiss} />)
    expect(screen.getByTitle("Close")).toBeInTheDocument()
    await user.click(screen.getByTitle("Close"))
    expect(handleDismiss).toHaveBeenCalledTimes(1)
  })

  test("fires onDismiss handler when toast is manually dismissed", async () => {
    const user = userEvent.setup()
    const handleDismiss = vi.fn()
    render(<Toast data-testid="my-toast" onDismiss={handleDismiss} />)
    expect(screen.getByTitle("Close")).toBeInTheDocument()
    await user.click(screen.getByTitle("Close"))
    expect(handleDismiss).toHaveBeenCalledTimes(1)
  })

  test("renders custom classNames as passed", () => {
    render(<Toast data-testid="my-toast" className="my-custom-class" />)
    expect(screen.getByTestId("my-toast")).toHaveClass("my-custom-class")
  })

  test("renders children over text when both are provided", () => {
    render(
      <Toast data-testid="my-toast" text="fallback text">
        <span>children content</span>
      </Toast>
    )
    expect(screen.getByText("children content")).toBeInTheDocument()
    expect(screen.queryByText("fallback text")).not.toBeInTheDocument()
  })
})
