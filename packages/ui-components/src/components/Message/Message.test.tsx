/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, test, vi } from "vitest"

import { Message } from "./"

const mockOnDismiss = vi.fn()

describe("Message component", () => {
  describe("Basic rendering", () => {
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
      render(<Message data-testid="my-message" id="My shiny little Message" />)
      expect(screen.getByTestId("my-message")).toHaveAttribute("id", "My shiny little Message")
    })
  })

  describe("Variants", () => {
    test("renders an info Message by default if no variant is provided", () => {
      render(<Message data-testid="my-message" />)
      expect(screen.getByTestId("my-message")).toHaveClass("juno-message-info")
      expect(screen.getByRole("img")).toHaveClass("jn:text-theme-info")
    })

    test("renders a success Message with the correct classes", () => {
      render(<Message data-testid="my-message" variant={"success"} />)
      expect(screen.getByTestId("my-message")).toHaveClass("juno-message-success")
      expect(screen.getByRole("img")).toHaveClass("jn:text-theme-success")
    })

    test("renders an error Message with the correct classes", () => {
      render(<Message data-testid="my-message" variant={"error"} />)
      expect(screen.getByTestId("my-message")).toHaveClass("juno-message-error")
      expect(screen.getByRole("img")).toHaveClass("jn:text-theme-error")
    })
  })

  describe("Icon behaviour", () => {
    test("ensures the icon cannot shrink", () => {
      render(<Message data-testid="my-message" />)
      expect(screen.getByTestId("my-message")).toHaveClass("juno-message-info")
      expect(screen.getByRole("img")).toHaveClass("jn:shrink-0")
    })
  })

  describe("Dismissible behaviour", () => {
    test("renders a Message without a dismiss button by default", () => {
      render(<Message data-testid="my-message" />)
      expect(screen.queryByRole("button", { name: /close/i })).not.toBeInTheDocument()
    })

    test("renders a dismissible Message when 'dismissible' is true", async () => {
      render(<Message data-testid="my-message" dismissible={true} />)

      expect(screen.getByRole("button", { name: /close/i })).toBeInTheDocument()

      // Ensure message is dismissed after clicking the button
      await waitFor(async () => {
        await userEvent.click(screen.getByRole("button", { name: /close/i }))
        expect(screen.queryByTestId("my-message")).not.toBeInTheDocument()
      })
    })

    test("renders a Message without a dismiss button when 'dismissible' is false", () => {
      render(<Message data-testid="my-message" dismissible={false} />)
      expect(screen.queryByRole("button", { name: /close/i })).not.toBeInTheDocument()
    })

    test("calls 'onDismiss' handler when the Message is manually dismissed", async () => {
      render(<Message data-testid="my-message" dismissible={true} onDismiss={mockOnDismiss} />)
      expect(screen.getByRole("button", { name: /close/i })).toBeInTheDocument()
      const dismissButton = screen.getByRole("button", { name: /close/i })

      await waitFor(async () => {
        await userEvent.click(dismissButton)
        expect(mockOnDismiss).toHaveBeenCalledTimes(1)
      })
    })
  })

  describe("Auto-dismiss behaviour", () => {
    test("automatically dismisses the Message after the provided timeout", async () => {
      render(<Message data-testid="my-message" autoDismiss={true} autoDismissTimeout={500} />)
      expect(screen.getByTestId("my-message")).toBeInTheDocument()

      // Wait to check that the message auto-dismissed
      await waitFor(
        () => {
          expect(screen.queryByTestId("my-message")).not.toBeInTheDocument()
        },
        { timeout: 550 }
      )
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
      await waitFor(
        () => {
          expect(screen.getByTestId("my-message")).toBeInTheDocument()
        },
        { timeout: 1000 }
      )
    })

    test("does not auto-dismiss when 'autoDismissTimeout' is set to a negative value", async () => {
      render(<Message data-testid="my-message" autoDismiss={true} autoDismissTimeout={-1} />)
      expect(screen.getByTestId("my-message")).toBeInTheDocument()

      // Wait to check that the message did not auto-dismiss
      await waitFor(
        () => {
          expect(screen.getByTestId("my-message")).toBeInTheDocument()
        },
        { timeout: 1000 }
      )
    })
  })
})
