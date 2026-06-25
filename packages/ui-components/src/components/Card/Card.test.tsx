/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import { describe, expect, test, vi } from "vitest"

import { Card } from "./Card.component"

describe("Card Component", () => {
  describe("Basic Rendering", () => {
    test("renders a card with children", () => {
      render(<Card data-testid="card">Children</Card>)
      expect(screen.getByTestId("card")).toBeInTheDocument()
      expect(screen.getByTestId("card")).toHaveTextContent("Children")
    })
  })

  describe("Padding", () => {
    test("renders a card without padding or children by default", () => {
      render(<Card data-testid="card" />)
      expect(screen.getByTestId("card")).toBeInTheDocument()
      expect(screen.getByTestId("card")).not.toHaveClass("jn:p-4")
    })

    test("renders a card with padding when true", () => {
      render(<Card data-testid="card" padding />)
      expect(screen.getByTestId("card")).toBeInTheDocument()
      expect(screen.getByTestId("card")).toHaveClass("jn:p-4")
    })
  })

  describe("Additional Classnames and Props", () => {
    test("renders additional classNames when passed", () => {
      render(<Card data-testid="card" className="my-custom-class" />)
      expect(screen.getByTestId("card")).toBeInTheDocument()
      expect(screen.getByTestId("card")).toHaveClass("my-custom-class")
    })

    test("renders additional props when passed", () => {
      render(<Card data-testid="card" data-custom={true} />)
      expect(screen.getByTestId("card")).toBeInTheDocument()
      expect(screen.getByTestId("card")).toHaveAttribute("data-custom")
    })
  })

  describe("Dynamic Element Rendering", () => {
    test("renders as a <div> when neither href nor onClick are provided", () => {
      render(<Card data-testid="card">Default Div</Card>)
      const element = screen.getByTestId("card")
      expect(element).toBeInTheDocument()
      expect(element.tagName).toBe("DIV")
      expect(element).toHaveTextContent("Default Div")
    })

    test("renders as a <button> when onClick is provided", () => {
      const handleClick = vi.fn()
      render(
        <Card data-testid="card" onClick={handleClick}>
          Button Test
        </Card>
      )
      const element = screen.getByTestId("card")
      expect(element).toBeInTheDocument()
      expect(element.tagName).toBe("BUTTON")
      expect(element).toHaveAttribute("type", "button")
      expect(element).toHaveTextContent("Button Test")

      fireEvent.click(element)
      expect(handleClick).toHaveBeenCalled()
    })

    test("renders as an <a> when href is provided", () => {
      render(
        <Card data-testid="card" href="https://example.com">
          Link Test
        </Card>
      )
      const element = screen.getByTestId("card")
      expect(element).toBeInTheDocument()
      expect(element.tagName).toBe("A")
      expect(element).toHaveTextContent("Link Test")
      expect(element).toHaveAttribute("href", "https://example.com")
    })

    test("renders as an <a> and fires onClick when both href and onClick are provided", () => {
      const handleClick = vi.fn()
      render(
        <Card data-testid="card" href="https://example.com" onClick={handleClick}>
          Link Button Test
        </Card>
      )
      const element = screen.getByTestId("card")
      expect(element).toBeInTheDocument()
      expect(element.tagName).toBe("A")
      expect(element).toHaveTextContent("Link Button Test")

      fireEvent.click(element)
      expect(element).toHaveAttribute("href", "https://example.com")
      expect(handleClick).toHaveBeenCalled()
    })

    test("renders as disabled", () => {
      const handleClick = vi.fn()
      render(
        <Card data-testid="card" href="https://example.com" onClick={handleClick} disabled>
          Disabled Test
        </Card>
      )
      const element = screen.getByTestId("card")
      expect(element).toBeInTheDocument()
      expect(element).toHaveAttribute("aria-disabled", "true")
      expect(element).not.toHaveAttribute("href")

      fireEvent.click(element)
      expect(handleClick).not.toHaveBeenCalled()
    })
  })

  describe("Interactive Styles", () => {
    test("applies interactive styles when onClick is provided", () => {
      render(
        <Card data-testid="card" onClick={() => {}}>
          Button
        </Card>
      )
      const element = screen.getByTestId("card")
      expect(element).toHaveClass("jn:cursor-pointer")
      expect(element).toHaveClass("jn:hover:border-theme-card-hover")
      expect(element).toHaveClass("jn:active:border-theme-accent")
    })

    test("applies interactive styles when href is provided", () => {
      render(
        <Card data-testid="card" href="https://example.com">
          Link
        </Card>
      )
      const element = screen.getByTestId("card")
      expect(element).toHaveClass("jn:cursor-pointer")
      expect(element).toHaveClass("jn:hover:border-theme-card-hover")
      expect(element).toHaveClass("jn:active:border-theme-accent")
    })

    test("does not apply interactive styles when neither href nor onClick are provided", () => {
      render(<Card data-testid="card">Div</Card>)
      const element = screen.getByTestId("card")
      expect(element).not.toHaveClass("jn:cursor-pointer")
      expect(element).not.toHaveClass("jn:hover:border-theme-card-hover")
      expect(element).not.toHaveClass("jn:active:border-theme-accent")
    })

    test("does not apply interactive styles when disabled", () => {
      render(
        <Card data-testid="card" onClick={() => {}} disabled>
          Disabled
        </Card>
      )
      const element = screen.getByTestId("card")
      expect(element).not.toHaveClass("jn:cursor-pointer")
      expect(element).not.toHaveClass("jn:hover:border-theme-card-hover")
      expect(element).toHaveClass("jn:cursor-not-allowed")
    })
  })
})
