/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { describe, expect, test } from "vitest"
import { render, screen } from "@testing-library/react"

import { Badge } from "./"

describe("Badge component", () => {
  describe("Basic rendering", () => {
    test("renders with default props", () => {
      render(<Badge data-testid="badge" />)
      expect(screen.getByTestId("badge")).toBeInTheDocument()
      expect(screen.getByTestId("badge")).toHaveClass("juno-badge-default")
      expect(screen.queryByRole("img")).not.toBeInTheDocument()
    })

    test("renders a badge with text", () => {
      render(<Badge text="default badge" data-testid="badge" />)
      expect(screen.getByTestId("badge")).toBeInTheDocument()
      expect(screen.getByTestId("badge")).toHaveTextContent("default badge")
    })

    test("renders a badge with children", () => {
      render(<Badge data-testid="badge">Children inside</Badge>)
      expect(screen.getByTestId("badge")).toBeInTheDocument()
      expect(screen.getByTestId("badge")).toHaveTextContent("Children inside")
    })
  })

  describe("Variants", () => {
    test(`renders a badge with the info variant`, () => {
      render(<Badge variant={"info"} data-testid="badge" />)
      expect(screen.getByTestId("badge")).toBeInTheDocument()
      expect(screen.getByTestId("badge")).toHaveClass("juno-badge-info")
    })

    test(`renders a badge with the success variant`, () => {
      render(<Badge variant={"success"} data-testid="badge" />)
      expect(screen.getByTestId("badge")).toBeInTheDocument()
      expect(screen.getByTestId("badge")).toHaveClass("juno-badge-success")
    })
  })

  describe("Icons", () => {
    test("renders with default icon based on variant", () => {
      render(<Badge icon={true} />)
      expect(screen.getByRole("img")).toBeInTheDocument()
      expect(screen.getByRole("img")).toHaveClass("juno-icon-default")
    })

    test(`renders with passed comment icon`, () => {
      render(<Badge icon={"comment"} />)
      expect(screen.getByRole("img")).toBeInTheDocument()
      expect(screen.getByRole("img")).toHaveClass("juno-icon-comment")
    })

    test(`renders with passed deleteForever icon`, () => {
      render(<Badge icon={"deleteForever"} />)
      expect(screen.getByRole("img")).toBeInTheDocument()
      expect(screen.getByRole("img")).toHaveClass(`juno-icon-deleteForever`)
    })

    test("renders with icon and variant", () => {
      render(<Badge variant="danger" icon="comment" data-testid="badge" />)
      expect(screen.getByTestId("badge")).toBeInTheDocument()
      expect(screen.getByRole("img")).toBeInTheDocument()
      expect(screen.getByRole("img")).toHaveClass("juno-icon-comment")
      expect(screen.getByTestId("badge")).toHaveClass("juno-badge-danger")
    })

    test("does not render icon when icon prop is undefined", () => {
      render(<Badge data-testid="badge" />)
      expect(screen.getByTestId("badge")).toBeInTheDocument()
      expect(screen.queryByRole("img")).not.toBeInTheDocument()
    })
  })

  describe("Additional Props", () => {
    test("renders with additional props", () => {
      render(<Badge data-testid="badge" data-extra="extra" />)
      expect(screen.getByTestId("badge")).toBeInTheDocument()
      expect(screen.getByTestId("badge")).toHaveAttribute("data-extra")
    })

    test("applies additional CSS classes", () => {
      render(<Badge data-testid="badge" className="extra-class" />)
      expect(screen.getByTestId("badge")).toBeInTheDocument()
      expect(screen.getByTestId("badge")).toHaveClass("extra-class")
    })
  })
})
