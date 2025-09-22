import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, it, expect, vi } from "vitest"
import { SortButton } from "./SortButton.component"

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
    render(<SortButton order="asc" onOrderChange={handleOrderChange} />)
    const button = screen.getByRole("button")

    await userEvent.click(button)

    expect(handleOrderChange).toHaveBeenCalledWith("desc")
    expect(button).not.toHaveTextContent("sortShortWideArrowUp")
  })

  it("handles multiple clicks correctly", async () => {
    const handleOrderChange = vi.fn()
    render(<SortButton order="desc" onOrderChange={handleOrderChange} />)
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
    render(<SortButton disabled order="desc" onOrderChange={handleOrderChange} />)
    const button = screen.getByRole("button")

    await userEvent.click(button)

    expect(handleOrderChange).not.toHaveBeenCalled()
    expect(button).toHaveTextContent("sortShortWideArrowDown")
  })
})
