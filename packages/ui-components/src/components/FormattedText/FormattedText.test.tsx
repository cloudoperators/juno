/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest" // Import expect from vitest
import { FormattedText } from "./index"

describe("FormattedText", () => {
  it("renders a custom className as passed", () => {
    render(<FormattedText className="my-class" data-testid="my-pagination" />)
    const element = screen.getByTestId("my-pagination")
    expect(element).not.toBeNull() // Check if element exists
    expect(element.className).toContain("my-class") // Check class name contains "my-class"
  })

  it("renders all props as passed", () => {
    render(<FormattedText data-testid="my-pagination" data-lolol="123-456" />)
    const element = screen.getByTestId("my-pagination")
    expect(element).not.toBeNull() // Check if element exists
    expect(element.getAttribute("data-lolol")).toBe("123-456") // Check attribute value
  })
})
