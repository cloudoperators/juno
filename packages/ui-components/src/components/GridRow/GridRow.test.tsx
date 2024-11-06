/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { GridRow } from "./GridRow.component"

describe("GridRow", () => {
  describe("Basic Rendering", () => {
    test("renders a Grid row", () => {
      render(<GridRow data-testid="my-grid-row" />)
      expect(screen.getByTestId("my-grid-row")).toBeInTheDocument()
    })
  })

  describe("Class Names", () => {
    test("renders a custom className", () => {
      render(<GridRow data-testid="my-grid-row" className="my-grid-row-class" />)
      expect(screen.getByTestId("my-grid-row")).toHaveClass("my-grid-row-class")
    })
  })
})
