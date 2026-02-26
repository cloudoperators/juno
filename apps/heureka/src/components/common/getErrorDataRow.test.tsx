/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import { getErrorDataRowComponent } from "./getErrorDataRow"

describe("getErrorDataRowComponent", () => {
  it("should render error message when ErrorDataRow component is used", () => {
    const ErrorDataRow = getErrorDataRowComponent({ colspan: 5 })
    const testError = new Error("Test error message")
    const mockResetErrorBoundary = vi.fn()
    render(<ErrorDataRow error={testError} resetErrorBoundary={mockResetErrorBoundary} />)
    const errorText = screen.getByText(/Test error message/)
    expect(errorText).toBeInTheDocument()
  })

  it("should render with correct colSpan prop", () => {
    const ErrorDataRow = getErrorDataRowComponent({ colspan: 7 })
    const testError = new Error("Test error")
    const mockResetErrorBoundary = vi.fn()
    const { container } = render(<ErrorDataRow error={testError} resetErrorBoundary={mockResetErrorBoundary} />)
    const cell = container.querySelector('[style*="grid-column: span 7"]')
    expect(cell).toBeInTheDocument()
  })
})
