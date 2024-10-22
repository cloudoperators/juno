/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
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
      const svgElement = screen.getByRole("img")
      expect(svgElement).toBeInTheDocument()
      const titleElement = screen.getByText("Help", { selector: "title" })
      expect(titleElement).toBeInTheDocument()
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

    test("does not render a link if 'href' is null", () => {
      render(<BreadcrumbItem active data-testid="breadcrumbitem" />)
      expect(screen.queryByRole("link")).not.toBeInTheDocument()
      expect(screen.getByTestId("breadcrumbitem")).toBeInTheDocument()
    })

    test("adds all passed props to the root element", () => {
      render(<BreadcrumbItem data-testid="breadcrumbitem" role="navigation" />)
      expect(screen.getByTestId("breadcrumbitem")).toBeInTheDocument()
      expect(screen.getByTestId("breadcrumbitem")).toHaveAttribute("role", "navigation")
    })
  })

  describe("State Handling", () => {
    test("renders an active item that is not a link as passed", () => {
      render(<BreadcrumbItem href="#" active data-testid="breadcrumbitem" />)
      expect(screen.queryByRole("link")).not.toBeInTheDocument()
      expect(screen.getByTestId("breadcrumbitem")).toBeInTheDocument()
      expect(screen.getByTestId("breadcrumbitem")).toHaveClass("juno-breadcrumb-item-active")
    })

    test("renders a disabled item as passed", () => {
      const onClickSpy = vi.fn()
      render(<BreadcrumbItem href="#" disabled data-testid="breadcrumbitem" onClick={onClickSpy} />)
      expect(screen.getByTestId("breadcrumbitem")).toBeInTheDocument()
      expect(screen.getByTestId("breadcrumbitem")).toHaveClass("juno-breadcrumb-item-disabled")
      screen.getByTestId("breadcrumbitem").click()
      expect(onClickSpy).not.toHaveBeenCalled()
    })

    test("renders correctly with both active and disabled states", () => {
      render(<BreadcrumbItem active disabled data-testid="breadcrumbitem" />)
      const breadcrumbItem = screen.getByTestId("breadcrumbitem")
      expect(breadcrumbItem).toBeInTheDocument()
      expect(breadcrumbItem).toHaveClass("juno-breadcrumb-item-active")
      expect(breadcrumbItem).toHaveClass("juno-breadcrumb-item-disabled")
    })
  })

  describe("Event Handling", () => {
    test("executes an onClick handler as passed", () => {
      const onClickSpy = vi.fn()
      render(<BreadcrumbItem onClick={onClickSpy} />)
      screen.getByRole("link").click()
      expect(onClickSpy).toHaveBeenCalled()
    })

    test("renders as a link and executes onClick handler", () => {
      const onClickSpy = vi.fn()
      render(<BreadcrumbItem href="#" onClick={onClickSpy} label="My Item" />)
      const linkElement = screen.getByRole("link")
      expect(linkElement).toBeInTheDocument()
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
