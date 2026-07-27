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
    test("renders a box", () => {
      render(<Box data-testid="box" />)
      expect(screen.getByTestId("box")).toBeInTheDocument()
      expect(screen.getByTestId("box")).toHaveClass("juno-box")
    })

    test("renders a box with children", () => {
      render(<Box data-testid="box">Children inside</Box>)
      expect(screen.getByTestId("box")).toBeInTheDocument()
      expect(screen.getByTestId("box")).toHaveTextContent("Children inside")
    })
  })

  describe("Padding", () => {
    test("renders a padded Box by default", () => {
      render(<Box data-testid="box" />)
      expect(screen.getByTestId("box")).toHaveClass("jn:py-1")
      expect(screen.getByTestId("box")).toHaveClass("jn:px-2")
    })

    test("renders a Box without padding when 'unpad' is true", () => {
      render(<Box data-testid="box" unpad />)
      expect(screen.getByTestId("box")).not.toHaveClass("jn:py-1")
      expect(screen.getByTestId("box")).not.toHaveClass("jn:px-2")
    })
  })

  describe("Title", () => {
    test("renders a title when the 'title' prop is passed", () => {
      render(<Box data-testid="box" title="My Box Title" />)
      expect(screen.getByTestId("box")).toHaveTextContent("My Box Title")
      expect(screen.getByTestId("box").querySelector(".juno-box-title")).toBeInTheDocument()
    })

    test("does not render a title element when 'title' is not passed", () => {
      render(<Box data-testid="box" />)
      expect(screen.getByTestId("box").querySelector(".juno-box-title")).not.toBeInTheDocument()
    })
  })

  describe("Variants", () => {
    test("renders with 'juno-box-default' class when no variant is passed", () => {
      render(<Box data-testid="box" />)
      expect(screen.getByTestId("box")).toHaveClass("juno-box-default")
    })

    test("renders with 'juno-box-info' class when variant is 'info'", () => {
      render(<Box data-testid="box" variant="info" />)
      expect(screen.getByTestId("box")).toHaveClass("juno-box-info")
    })

    test("renders with 'juno-box-success' class when variant is 'success'", () => {
      render(<Box data-testid="box" variant="success" />)
      expect(screen.getByTestId("box")).toHaveClass("juno-box-success")
    })

    test("renders with 'juno-box-warning' class when variant is 'warning'", () => {
      render(<Box data-testid="box" variant="warning" />)
      expect(screen.getByTestId("box")).toHaveClass("juno-box-warning")
    })

    test("renders with 'juno-box-error' class when variant is 'error'", () => {
      render(<Box data-testid="box" variant="error" />)
      expect(screen.getByTestId("box")).toHaveClass("juno-box-error")
    })

    test("renders with 'juno-box-danger' class when variant is 'danger'", () => {
      render(<Box data-testid="box" variant="danger" />)
      expect(screen.getByTestId("box")).toHaveClass("juno-box-danger")
    })
  })

  describe("Additional Class Names and Props", () => {
    test("renders additional classNames when passed", () => {
      render(<Box data-testid="box" className="my-custom-class" />)
      expect(screen.getByTestId("box")).toHaveClass("my-custom-class")
    })

    test("renders custom className after internal class names", () => {
      render(<Box data-testid="box" className="my-custom-class" />)
      const classes = screen.getByTestId("box").className
      expect(classes.indexOf("my-custom-class")).toBeGreaterThan(classes.indexOf("juno-box"))
    })

    test("renders additional props when passed", () => {
      render(<Box data-testid="box" data-lolol={true} />)
      expect(screen.getByTestId("box")).toHaveAttribute("data-lolol")
    })
  })
})
