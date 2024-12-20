/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen, waitFor } from "@testing-library/react"
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

  test("render an warning toast", () => {
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

  test("render an danger toas", () => {
    render(<Toast data-testid="my-toast" variant={"danger"} />)
    expect(screen.getByTestId("my-toast")).toBeInTheDocument()
    expect(screen.getByTitle("Danger")).toBeInTheDocument()
  })

  test("renders a toast that can be dismissed", async () => {
    await waitFor(() => {
      render(<Toast data-testid="my-toast" />)
    })
    // not checking specifically for the close button here. So if there is more than one button in the message this test will fail
    // The reason is that it's hard to find specifically the close button because any classes added to a clickable Icon go to the image element, not the surrounding button
    expect(screen.getByTitle("Close")).toBeInTheDocument()
    await waitFor(async () => {
      await userEvent.click(screen.getByTitle("Close"))
    })
    await waitFor(() => {
      expect(screen.queryByTestId("my-toast")).not.toBeInTheDocument()
    })
  })

  test("fires onDismiss handler when toast is manually dismissed", async () => {
    const handleDismiss = vi.fn()
    render(<Toast data-testid="my-toast" onDismiss={handleDismiss} />)
    // not checking specifically for the close button here. So if there is more than one button in the message this test will fail
    // The reason is that it's hard to find specifically the close button because any classes added to a clickable Icon go to the image element, not the surrounding button
    expect(screen.getByTitle("Close")).toBeInTheDocument()

    await waitFor(async () => {
      await userEvent.click(screen.getByTitle("Close"))
    })
    await waitFor(() => {
      expect(screen.queryByTestId("my-toast")).not.toBeInTheDocument()
      expect(handleDismiss).toHaveBeenCalledTimes(1)
    })
  })

  test("renders a toast e that will be automatically dismissed", async () => {
    render(<Toast data-testid="my-toast" autoDismiss={true} autoDismissTimeout={500} />)
    await waitFor(
      () => {
        expect(screen.queryByTestId("my-toast")).not.toBeInTheDocument()
      },
      { timeout: 1000 }
    )
  })

  test("renders custom classNames as passed", () => {
    render(<Toast data-testid="my-toast" className="my-custom-class" />)
    expect(screen.getByTestId("my-toast")).toHaveClass("my-custom-class")
  })

  test("renders all props as passed", () => {
    render(<Toast data-testid="my-toast" id="My shiny little Message" />)
    expect(screen.getByTestId("my-toast")).toHaveAttribute("id", "My shiny little Message")
  })
})
