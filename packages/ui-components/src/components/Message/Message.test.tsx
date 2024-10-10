/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { MessageType } from "./Message.types"
import { Message } from "./index"

const mockOnDismiss = vi.fn()

describe("Message Component", () => {
  // TEST BASIC RENDERING

  test("renders the Message component", () => {
    render(<Message data-testid="my-message" />)
    expect(screen.getByTestId("my-message")).toBeInTheDocument()
  })

  test("displays the provided title", () => {
    render(<Message data-testid="my-message" title="My Message Heading" />)
    expect(screen.getByTestId("my-message")).toHaveTextContent("My Message Heading")
  })

  test("displays the provided text", () => {
    render(<Message data-testid="my-message" text="My Message text goes here." />)
    expect(screen.getByTestId("my-message")).toHaveTextContent("My Message text goes here.")
  })

  test("renders text from children, if provided", () => {
    render(<Message data-testid="my-message">{"My Message children text goes here!"}</Message>)
    expect(screen.getByTestId("my-message")).toHaveTextContent("My Message children text goes here!")
  })

  test("prioritizes children over 'text' prop when both are provided", () => {
    render(
      <Message data-testid="my-message" text="I should not be here.">
        {"My Message children text goes here!"}
      </Message>
    )
    expect(screen.getByTestId("my-message")).toHaveTextContent("My Message children text goes here!")
  })

  test("applies custom classNames, if provided", () => {
    render(<Message data-testid="my-message" className="my-custom-class" />)
    expect(screen.getByTestId("my-message")).toHaveClass("my-custom-class")
  })

  test("renders the component with all provided props", () => {
    render(<Message data-testid="my-message" name="My shiny little Message" />)
    expect(screen.getByTestId("my-message")).toHaveAttribute("name", "My shiny little Message")
  })

  // TEST VARIANTS

  test("renders an info Message by default if no variant is provided", () => {
    render(<Message data-testid="my-message" />)
    expect(screen.getByTestId("my-message")).toHaveClass("juno-message-info")
    expect(screen.getByRole("img")).toHaveClass("jn-text-theme-info")
  })

  test.each`
    variant      | cssClass                  | iconClass
    ${"info"}    | ${"juno-message-info"}    | ${"jn-text-theme-info"}
    ${"warning"} | ${"juno-message-warning"} | ${"jn-text-theme-warning"}
    ${"danger"}  | ${"juno-message-danger"}  | ${"jn-text-theme-danger"}
    ${"error"}   | ${"juno-message-error"}   | ${"jn-text-theme-error"}
    ${"success"} | ${"juno-message-success"} | ${"jn-text-theme-success"}
  `(
    "renders a $variant Message with the correct classes",
    ({ variant, cssClass, iconClass }: { variant: MessageType; cssClass: string; iconClass: string }) => {
      render(<Message data-testid="my-message" variant={variant} />)
      expect(screen.getByTestId("my-message")).toHaveClass(cssClass)
      expect(screen.getByRole("img")).toHaveClass(iconClass)
    }
  )

  test("ensures the icon cannot shrink", () => {
    render(<Message data-testid="my-message" />)
    expect(screen.getByTestId("my-message")).toHaveClass("juno-message-info")
    expect(screen.getByRole("img")).toHaveClass("jn-shrink-0")
  })

  // TEST DISMISSABLE BEHAVIOUR

  test("renders a Message without a dismiss button by default", () => {
    render(<Message data-testid="my-message" />)
    expect(screen.queryByRole("button")).not.toBeInTheDocument()
  })

  test("renders a dismissible Message when 'dismissible' is true", async () => {
    render(<Message data-testid="my-message" dismissible={true} />)

    // No specific check for the close button to avoid test failures if there are multiple buttons.
    const user = userEvent.setup()
    expect(screen.getByRole("button")).toBeInTheDocument()

    // Ensure the message is dismissed after clicking the button
    await waitFor(async () => {
      await user.click(screen.getByRole("button"))
      expect(screen.queryByTestId("my-message")).not.toBeInTheDocument()
    })
  })

  test("renders a Message without a dismiss button when 'dismissible' is false", () => {
    render(<Message data-testid="my-message" dismissible={false} />)
    expect(screen.queryByRole("button")).not.toBeInTheDocument()
  })

  test("calls 'onDismiss' handler when the Message is manually dismissed", async () => {
    render(<Message data-testid="my-message" dismissible={true} onDismiss={mockOnDismiss} />)

    // No specific check for the close button to avoid test failures if there are multiple buttons.
    const user = userEvent.setup()
    expect(screen.getByRole("button")).toBeInTheDocument()
    const dismissButton = screen.getByRole("button")

    // Ensure onDismiss is called when the message is dismissed
    await waitFor(async () => {
      await user.click(dismissButton)
      expect(mockOnDismiss).toHaveBeenCalledTimes(1)
    })
  })

  // TEST AUTO-DISMISS BEHAVIOUR

  test("automatically dismisses the Message after the provided timeout", async () => {
    render(<Message data-testid="my-message" autoDismiss={true} autoDismissTimeout={500} />)
    expect(screen.getByTestId("my-message")).toBeInTheDocument()

    // Wait to check that the message auto-dismissed
    await new Promise((resolve) => setTimeout(resolve, 501))
    expect(screen.queryByTestId("my-message")).not.toBeInTheDocument()
  })

  test("calls 'onDismiss' handler when the Message is automatically dismissed", async () => {
    render(<Message data-testid="my-message" autoDismiss={true} autoDismissTimeout={500} onDismiss={mockOnDismiss} />)

    await waitFor(() => {
      expect(mockOnDismiss).toHaveBeenCalledTimes(1)
    })
  })

  test("does not auto-dismiss when 'autoDismissTimeout' is set to zero", async () => {
    render(<Message data-testid="my-message" autoDismiss={true} autoDismissTimeout={0} />)
    expect(screen.getByTestId("my-message")).toBeInTheDocument()

    // Wait to check that the message did not auto-dismiss
    await new Promise((resolve) => setTimeout(resolve, 1000))
    expect(screen.getByTestId("my-message")).toBeInTheDocument()
  })

  test("does not auto-dismiss when 'autoDismissTimeout' is set to a negative value", async () => {
    render(<Message data-testid="my-message" autoDismiss={true} autoDismissTimeout={-1} />)
    expect(screen.getByTestId("my-message")).toBeInTheDocument()

    // Wait to check that the message did not auto-dismiss
    await new Promise((resolve) => setTimeout(resolve, 1000))
    expect(screen.getByTestId("my-message")).toBeInTheDocument()
  })
})
