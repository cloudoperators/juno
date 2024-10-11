/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { Badge } from "./index"
import { VariantType } from "./Badge.type"
import { KnownIcons } from "../Icon/Icon.component"

describe("Badge component", () => {
  // BASIC RENDERING
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

  // VARIANTS
  const variants: VariantType[] = ["info", "success", "warning", "danger", "error", "critical"]
  variants.forEach((variant) => {
    test(`renders a badge with the ${variant} variant`, () => {
      render(<Badge variant={variant} data-testid="badge" />)
      expect(screen.getByTestId("badge")).toBeInTheDocument()
      expect(screen.getByTestId("badge")).toHaveClass(`juno-badge-${variant}`)
    })
  })

  // ICONS
  test("renders with default icon based on variant", () => {
    render(<Badge icon={true} />)
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveClass("juno-icon-default")
  })

  const icons: KnownIcons[] = ["comment", "deleteForever"]
  icons.forEach((icon) => {
    test(`renders with ${icon} icon`, () => {
      render(<Badge icon={icon} />)
      expect(screen.getByRole("img")).toBeInTheDocument()
      expect(screen.getByRole("img")).toHaveClass(`juno-icon-${icon}`)
    })
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

  // ADDITIONAL PROPS
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
