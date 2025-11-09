/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { Box } from "./index"

describe("Box Component", () => {
  describe("Basic Rendering", () => {
    test("renders a box with children", () => {
      render(<Box data-testid="box">Children inside</Box>)
      expect(screen.getByTestId("box")).toBeInTheDocument()
      expect(screen.getByTestId("box")).toHaveTextContent("Children inside")
    })
  })

  describe("Padding", () => {
    test("renders a padded Box by default", () => {
      render(<Box data-testid="box" />)
      expect(screen.getByTestId("box")).toBeInTheDocument()
      expect(screen.getByTestId("box")).toHaveClass("jn:py-1")
      expect(screen.getByTestId("box")).toHaveClass("jn:px-2")
    })

    test("renders a Box without padding when 'unpad' is true", () => {
      render(<Box data-testid="box" unpad />)
      expect(screen.getByTestId("box")).toBeInTheDocument()
      expect(screen.getByTestId("box")).not.toHaveClass("jn:py-1")
      expect(screen.getByTestId("box")).not.toHaveClass("jn:px-2")
    })
  })

  describe("Additional Class Names and Props", () => {
    test("renders additional classNames when passed", () => {
      render(<Box data-testid="box" className="my-custom-class" />)
      expect(screen.getByTestId("box")).toBeInTheDocument()
      expect(screen.getByTestId("box")).toHaveClass("my-custom-class")
    })

    test("renders additional props when passed", () => {
      render(<Box data-testid="box" data-lolol={true} />)
      expect(screen.getByTestId("box")).toBeInTheDocument()
      expect(screen.getByTestId("box")).toHaveAttribute("data-lolol")
    })
  })

  describe("Edge Cases", () => {
    test("renders without children", () => {
      render(<Box data-testid="box" />)
      expect(screen.getByTestId("box")).toBeInTheDocument()
      expect(screen.getByTestId("box")).toBeEmptyDOMElement()
    })

    test("handles additional attributes without errors", () => {
      render(<Box data-testid="box" data-extra="extra" />)
      expect(screen.getByTestId("box")).toHaveAttribute("data-extra", "extra")
    })
  })
})
