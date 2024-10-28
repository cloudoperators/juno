/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import { Breadcrumb } from "."
import { BreadcrumbItem } from "../BreadcrumbItem"

describe("Breadcrumb Component", () => {
  describe("Class Names", () => {
    test("renders with the base class name", () => {
      render(<Breadcrumb data-testid="breadcrumb" />)
      const breadcrumbElement = screen.getByTestId("breadcrumb")
      expect(breadcrumbElement).toBeInTheDocument()
      expect(breadcrumbElement).toHaveClass("juno-breadcrumb")
    })

    test("applies a custom class name", () => {
      render(<Breadcrumb data-testid="breadcrumb" className="my-custom-class" />)
      const breadcrumbElement = screen.getByTestId("breadcrumb")
      expect(breadcrumbElement).toBeInTheDocument()
      expect(breadcrumbElement).toHaveClass("my-custom-class")
    })
  })

  describe("Attributes", () => {
    test("passes custom attributes to the breadcrumb", () => {
      render(<Breadcrumb data-testid="breadcrumb" data-lolol="true" />)
      const breadcrumbElement = screen.getByTestId("breadcrumb")
      expect(breadcrumbElement).toBeInTheDocument()
      expect(breadcrumbElement).toHaveAttribute("data-lolol", "true")
    })
  })

  describe("Children Rendering", () => {
    test("renders children elements", () => {
      render(
        <Breadcrumb data-testid="breadcrumb">
          <BreadcrumbItem label="Item 1" />
          <BreadcrumbItem label="Item 2" />
        </Breadcrumb>
      )
      const breadcrumbElement = screen.getByTestId("breadcrumb")
      expect(breadcrumbElement).toBeInTheDocument()
      expect(screen.getByText("Item 1")).toBeInTheDocument()
      expect(screen.getByText("Item 2")).toBeInTheDocument()
    })

    test("renders separators between breadcrumb items", () => {
      render(
        <Breadcrumb data-testid="breadcrumb">
          <BreadcrumbItem label="Item 1" />
          <BreadcrumbItem label="Item 2" />
        </Breadcrumb>
      )
      const breadcrumbElement = screen.getByTestId("breadcrumb")
      expect(breadcrumbElement).toBeInTheDocument()
      const icons = breadcrumbElement.querySelectorAll("svg")
      expect(icons.length).toBe(1) // Render one separator icon between two items
    })
  })
})
