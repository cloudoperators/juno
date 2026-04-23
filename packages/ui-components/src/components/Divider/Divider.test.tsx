/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { Divider } from "./Divider.component"

describe("Divider", () => {
  describe("Basic Rendering", () => {
    test("renders a wrapper element", () => {
      render(<Divider data-testid="divider" />)
      expect(screen.getByTestId("divider")).toBeInTheDocument()
    })

    test("renders a separator element", () => {
      render(<Divider />)
      expect(screen.getByRole("separator")).toBeInTheDocument()
    })

    test("wrapper has correct class names", () => {
      render(<Divider data-testid="divider" />)
      expect(screen.getByTestId("divider")).toHaveClass("juno-divider")
      expect(screen.getByTestId("divider")).toHaveClass("juno-divider-wrapper")
    })

    test("separator has correct class names", () => {
      render(<Divider />)
      expect(screen.getByRole("separator")).toHaveClass("juno-divider-separator")
      expect(screen.getByRole("separator")).toHaveClass("jn:h-px")
    })
  })

  describe("Spacing prop", () => {
    test("applies default spacing when no spacing prop is passed", () => {
      render(<Divider data-testid="divider" />)
      expect(screen.getByTestId("divider")).toHaveClass("jn:py-1")
    })

    test("applies custom spacing class when spacing prop is passed", () => {
      render(<Divider data-testid="divider" spacing="jn:py-4" />)
      expect(screen.getByTestId("divider")).toHaveClass("jn:py-4")
    })

    test("does not apply default spacing when custom spacing is passed", () => {
      render(<Divider data-testid="divider" spacing="jn:py-4" />)
      expect(screen.getByTestId("divider")).not.toHaveClass("jn:py-1")
    })
  })

  describe("Color prop", () => {
    test("applies default color when no color prop is passed", () => {
      render(<Divider />)
      expect(screen.getByRole("separator")).toHaveClass("jn:border-theme-divider")
    })

    test("applies custom color class when color prop is passed", () => {
      render(<Divider color="jn:border-red-500" />)
      expect(screen.getByRole("separator")).toHaveClass("jn:border-red-500")
    })

    test("does not apply default color when custom color is passed", () => {
      render(<Divider color="jn:border-red-500" />)
      expect(screen.getByRole("separator")).not.toHaveClass("jn:border-theme-divider")
    })
  })

  describe("Additional Class Names and Props", () => {
    test("applies custom className to the wrapper", () => {
      render(<Divider data-testid="divider" className="my-custom-class" />)
      expect(screen.getByTestId("divider")).toHaveClass("my-custom-class")
    })
    test("forwards additional props to the wrapper element", () => {
      render(<Divider data-testid="divider" data-custom="test-value" />)
      expect(screen.getByTestId("divider")).toHaveAttribute("data-custom", "test-value")
    })
  })
})
