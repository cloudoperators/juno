/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, it, expect, vi } from "vitest"
import { SortButton, SortButtonProps } from "./SortButton.component"

vi.mock("../Icon/Icon.component", () => ({
  Icon: ({ icon }: { icon: string }) => <span>{icon}</span>,
}))

describe("SortButton Component", () => {
  it("renders correctly with default descending order", () => {
    render(<SortButton />)
    const button = screen.getByRole("button")

    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent("sortShortWideArrowDown")
  })

  it("renders correctly with ascending order when specified", () => {
    render(<SortButton order="asc" />)
    const button = screen.getByRole("button")

    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent("sortShortWideArrowUp")
  })

  it("handles order change when clicked", async () => {
    const handleOrderChange = vi.fn()
    render(<SortButton order="asc" onChange={handleOrderChange} />)
    const button = screen.getByRole("button")

    await userEvent.click(button)

    expect(handleOrderChange).toHaveBeenCalledWith("desc")
    expect(button).not.toHaveTextContent("sortShortWideArrowUp")
  })

  it("handles multiple clicks correctly", async () => {
    const handleOrderChange = vi.fn()
    render(<SortButton order="desc" onChange={handleOrderChange} />)
    const button = screen.getByRole("button")

    await userEvent.click(button)
    expect(handleOrderChange).toHaveBeenNthCalledWith(1, "asc")

    await userEvent.click(button)
    expect(handleOrderChange).toHaveBeenNthCalledWith(2, "desc")
  })

  it("renders as disabled when passed a disabled prop", () => {
    render(<SortButton disabled order="asc" />)
    const button = screen.getByRole("button")

    expect(button).toBeDisabled()
    expect(button).toHaveTextContent("sortShortWideArrowUp")
  })

  it("does not toggle when disabled", async () => {
    const handleOrderChange = vi.fn()
    render(<SortButton disabled order="desc" onChange={handleOrderChange} />)
    const button = screen.getByRole("button")

    await userEvent.click(button)

    expect(handleOrderChange).not.toHaveBeenCalled()
    expect(button).toHaveTextContent("sortShortWideArrowDown")
  })

  it("renders and uses custom options correctly", async () => {
    const handleOrderChange = vi.fn()
    const customOptions: SortButtonProps["options"] = [
      { value: "asc", label: <span>Custom Asc Icon</span> },
      { value: "desc", label: <span>Custom Desc Icon</span> },
    ]

    render(<SortButton order="asc" onChange={handleOrderChange} options={customOptions} />)

    const button = screen.getByRole("button")

    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent("Custom Asc Icon")

    await userEvent.click(button)

    expect(handleOrderChange).toHaveBeenCalledWith("desc")
    expect(button).toHaveTextContent("Custom Desc Icon")
  })
})
