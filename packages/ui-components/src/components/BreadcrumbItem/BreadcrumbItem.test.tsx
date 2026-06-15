/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import { describe, expect, test, vi } from "vitest"

import { Button } from "../Button"
import { BreadcrumbItem } from "."

describe("BreadcrumbItem", () => {
  describe("Default Rendering", () => {
    test("renders without any props", () => {
      render(<BreadcrumbItem />)
      expect(screen.getByText("Item")).toBeInTheDocument()
    })
  })

  describe("Handling Props", () => {
    test("renders a breadcrumb item with text as passed", () => {
      render(<BreadcrumbItem data-testid="breadcrumbitem" />)
      expect(screen.getByTestId("breadcrumbitem")).toBeInTheDocument()
      expect(screen.getByTestId("breadcrumbitem")).toHaveClass("juno-breadcrumb-item")
    })

    test("renders an icon as passed", () => {
      render(<BreadcrumbItem icon="help" />)
      const imgElement = screen.getByRole("img")
      expect(imgElement).toBeInTheDocument()
    })

    test("renders a label as passed", () => {
      render(<BreadcrumbItem data-testid="breadcrumbitem" label="My Item" />)
      expect(screen.getByTestId("breadcrumbitem")).toBeInTheDocument()
      expect(screen.getByTestId("breadcrumbitem")).toHaveTextContent("My Item")
    })

    test("renders an aria-label as passed", () => {
      render(<BreadcrumbItem href="#" ariaLabel="My Item" />)
      expect(screen.getByRole("link")).toBeInTheDocument()
      expect(screen.getByRole("link")).toHaveAttribute("aria-label", "My Item")
    })

    test("renders the label as aria-label by default", () => {
      render(<BreadcrumbItem href="#" label="My Item" />)
      expect(screen.getByRole("link")).toBeInTheDocument()
      expect(screen.getByRole("link")).toHaveAttribute("aria-label", "My Item")
    })

    test("renders a custom className as passed", () => {
      render(<BreadcrumbItem data-testid="breadcrumbitem" className="my-custom-class" />)
      expect(screen.getByTestId("breadcrumbitem")).toBeInTheDocument()
      expect(screen.getByTestId("breadcrumbitem")).toHaveClass("my-custom-class")
    })

    test("renders all props as passed", () => {
      render(<BreadcrumbItem data-testid="breadcrumbitem" data-lolol={true} />)
      expect(screen.getByTestId("breadcrumbitem")).toBeInTheDocument()
      expect(screen.getByTestId("breadcrumbitem")).toHaveAttribute("data-lolol", "true")
    })

    test("renders as a link when href is provided", () => {
      render(<BreadcrumbItem href="#" data-testid="breadcrumbitem" />)
      expect(screen.getByRole("link")).toBeInTheDocument()
    })

    test("does not render a link if 'href' is null", () => {
      render(<BreadcrumbItem aria-label="breadcrumbitem" data-testid="breadcrumbitem" />)
      expect(screen.queryByRole("link")).not.toBeInTheDocument()
    })

    test("adds all passed props to the root element", () => {
      render(<BreadcrumbItem data-testid="breadcrumbitem" role="navigation" />)
      expect(screen.getByTestId("breadcrumbitem")).toBeInTheDocument()
      expect(screen.getByTestId("breadcrumbitem")).toHaveAttribute("role", "navigation")
    })
  })

  describe("State Handling", () => {
    test("renders an active item", () => {
      render(<BreadcrumbItem active href="#" data-testid="breadcrumbitem" />)
      expect(screen.queryByRole("link")).not.toBeInTheDocument()
      expect(screen.getByTestId("breadcrumbitem")).toHaveAttribute("aria-current", "page")
    })

    test("renders a disabled item with aria-disabled", async () => {
      const onClickSpy = vi.fn()
      render(<BreadcrumbItem href="#" disabled data-testid="breadcrumbitem" onClick={onClickSpy} />)
      const element = screen.getByTestId("breadcrumbitem")
      expect(element).toBeInTheDocument()
      expect(element).toHaveAttribute("aria-disabled", "true")
      await waitFor(() => {
        element.click()
        expect(onClickSpy).not.toHaveBeenCalled()
      })
    })

    test("handles both active and disabled states mutually exclusive", () => {
      render(<BreadcrumbItem active disabled data-testid="breadcrumbitem" />)
      const breadcrumbItem = screen.getByTestId("breadcrumbitem")
      expect(breadcrumbItem).toBeInTheDocument()
      expect(breadcrumbItem).toHaveAttribute("aria-current", "page")
    })
  })

  describe("Event Handling", () => {
    test("executes an onClick handler when rendered as a button", () => {
      const onClickSpy = vi.fn()
      render(<BreadcrumbItem onClick={onClickSpy} label="Button Test" />)
      const buttonElement = screen.getByRole("button")
      buttonElement.click()
      expect(onClickSpy).toHaveBeenCalled()
    })

    test("executes onClick handler when rendered as a link", () => {
      const onClickSpy = vi.fn()
      render(<BreadcrumbItem href="#" onClick={onClickSpy} label="Link Test" />)
      const linkElement = screen.getByRole("link")
      linkElement.click()
      expect(onClickSpy).toHaveBeenCalled()
    })
  })

  describe("Conditional Rendering", () => {
    test("renders only children if both children and icon are passed", () => {
      render(
        <BreadcrumbItem icon="help">
          <Button label="Test Button" />
        </BreadcrumbItem>
      )
      expect(screen.getByRole("button")).toBeInTheDocument()
      expect(screen.queryByRole("img")).not.toBeInTheDocument()
    })

    test("renders custom className without overriding component-specific classes", () => {
      render(<BreadcrumbItem data-testid="breadcrumbitem" className="my-custom-class" active />)
      const breadcrumbItem = screen.getByTestId("breadcrumbitem")
      expect(breadcrumbItem).toBeInTheDocument()
      expect(breadcrumbItem).toHaveClass("my-custom-class")
      expect(breadcrumbItem).toHaveClass("juno-breadcrumb-item-active")
    })
  })
})
