/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen, fireEvent, act, waitFor, cleanup } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, test, vi } from "vitest"

import { Pagination } from "./Pagination.component"

class ResizeObserver {
  observe() {
    // do nothing
    vi.fn()
  }
  unobserve() {
    // do nothing
    vi.fn()
  }
  disconnect() {
    // do nothing
    vi.fn()
  }
}

window.ResizeObserver = ResizeObserver

describe("Pagination", () => {
  afterEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  test("renders a Pagination", () => {
    render(<Pagination data-testid="my-pagination" />)
    expect(screen.getByTestId("my-pagination")).toBeInTheDocument()
    expect(screen.getByTestId("my-pagination")).toHaveClass("juno-pagination")
  })

  test("renders a default Pagination with only two buttons by default", () => {
    render(<Pagination data-testid="my-pagination" />)
    expect(screen.getByTestId("my-pagination")).toBeInTheDocument()
    expect(screen.getByTestId("my-pagination")).toHaveClass("juno-pagination-default")
    expect(screen.queryAllByRole("button")).toHaveLength(2)
    expect(screen.queryAllByRole("combobox")).toHaveLength(0)
    expect(screen.queryAllByRole("textbox")).toHaveLength(0)
  })

  test("renders a number variant Pagination as passed", () => {
    render(<Pagination variant="number" currentPage={12} data-testid="my-pagination" />)
    expect(screen.getByTestId("my-pagination")).toBeInTheDocument()
    expect(screen.getByTestId("my-pagination")).toHaveClass("juno-pagination-number")
    expect(screen.getByTestId("my-pagination")).toHaveTextContent("12")
    expect(screen.queryAllByRole("button")).toHaveLength(2)
    expect(screen.queryAllByRole("combobox")).toHaveLength(0)
  })

  test("renders Pagination (number) with currentPage higher than totalPages", () => {
    render(<Pagination variant="number" currentPage={12} totalPages={6} data-testid="my-pagination" />)
    expect(screen.getByTestId("my-pagination")).toHaveTextContent("6")
  })

  test("renders Pagination (number) with currentPage lower than totalPages", () => {
    render(<Pagination variant="number" currentPage={6} totalPages={12} data-testid="my-pagination" />)
    expect(screen.getByTestId("my-pagination")).toHaveTextContent("6")
  })

  test("renders Pagination (number) with currentPage and undefined totalPages", () => {
    render(<Pagination variant="number" currentPage={6} totalPages={undefined} data-testid="my-pagination" />)
    expect(screen.getByTestId("my-pagination")).toHaveTextContent("6")
  })

  test("renders Pagination (number) with undefined currentPage and defined totalPages", () => {
    render(<Pagination variant="number" currentPage={undefined} totalPages={6} data-testid="my-pagination" />)

    const paginationElement = screen.getByTestId("my-pagination")
    expect(paginationElement.querySelector(".page-value")).not.toBeInTheDocument()
  })

  test("renders Pagination (number) with undefined currentPage and undefined totalPages", () => {
    render(<Pagination variant="number" currentPage={undefined} totalPages={undefined} data-testid="my-pagination" />)

    const paginationElement = screen.getByTestId("my-pagination")
    expect(paginationElement.querySelector(".page-value")).not.toBeInTheDocument()
  })

  test("renders a select variant Pagination as passed", () => {
    act(() => {
      render(<Pagination variant="select" data-testid="my-pagination" />)
    })
    expect(screen.getByTestId("my-pagination")).toBeInTheDocument()
    expect(screen.getByTestId("my-pagination")).toHaveClass("juno-pagination-select")
    expect(screen.queryAllByRole("button")).toHaveLength(3)
    expect(screen.queryAllByRole("textbox")).toHaveLength(0)
    expect(document.querySelector("button.juno-select-toggle")).toBeInTheDocument()
  })

  test("renders Pagination (select) with currentPage higher than totalPages", () => {
    act(() => {
      render(<Pagination variant="select" currentPage={12} totalPages={6} data-testid="my-pagination" />)
    })
    expect(screen.getByTestId("my-pagination")).toHaveTextContent("6")
  })

  test("renders an input variant Pagination as passed", () => {
    render(<Pagination variant="input" currentPage={43} data-testid="my-pagination" />)
    expect(screen.getByTestId("my-pagination")).toBeInTheDocument()
    expect(screen.getByTestId("my-pagination")).toHaveClass("juno-pagination-input")
    expect(screen.queryAllByRole("button")).toHaveLength(2)
    expect(screen.queryAllByRole("combobox")).toHaveLength(0)
    expect(screen.queryByRole("textbox")).toBeInTheDocument()
  })

  test("renders Pagination (input) with currentPage higher than totalPages", () => {
    render(<Pagination variant="input" currentPage={12} totalPages={6} data-testid="my-pagination" />)
    expect(screen.getByTestId("my-pagination")).toHaveTextContent("6")
  })

  test("fires onPressPrevious handler as passed when Prev button is clicked", () => {
    const handlePressPrev = vi.fn()
    render(<Pagination currentPage={2} pages={6} onPressPrevious={handlePressPrev} />)
    act(() => {
      screen.getByRole("button", { name: "Previous Page" }).click()
    })
    expect(handlePressPrev).toHaveBeenCalledTimes(1)
  })

  test("fires onPressNext handler as passed when Next button is clicked", () => {
    const handlePressNext = vi.fn()
    render(<Pagination currentPage={2} pages={6} onPressNext={handlePressNext} />)
    act(() => {
      screen.getByRole("button", { name: "Next Page" }).click()
    })
    expect(handlePressNext).toHaveBeenCalledTimes(1)
  })

  test("fires onPressNext handler with undefined currentPage and undefined totalPages when Next button is clicked", async () => {
    const handlePressNext = vi.fn()

    render(
      <Pagination
        variant="number"
        currentPage={undefined}
        totalPages={undefined}
        data-testid="my-pagination"
        onPressNext={handlePressNext}
      />
    )

    // Click on the Next button
    const nextButton = screen.getByRole("button", { name: "Next Page" })
    await act(async () => {
      await userEvent.click(nextButton)
    })

    // Assertions
    expect(handlePressNext).toHaveBeenCalledTimes(1)

    // Check that there is no pagination content if currentPage and totalPages are undefined
    const paginationElement = screen.getByTestId("my-pagination")
    expect(paginationElement.querySelector(".page-value")).not.toBeInTheDocument()
  })

  test("fires onPressNext handler with undefined currentPages", async () => {
    const handlePressNext = vi.fn()

    render(
      <Pagination
        variant="number"
        currentPage={undefined}
        totalPages={8}
        data-testid="my-pagination"
        onPressNext={handlePressNext}
      />
    )

    // Click on the Next button
    const nextButton = screen.getByRole("button", { name: "Next Page" })
    await act(async () => {
      await userEvent.click(nextButton)
    })

    // Assertions
    expect(handlePressNext).toHaveBeenCalledTimes(1)

    // Check that there is no pagination content if currentPage is undefined
    const paginationElement = screen.getByTestId("my-pagination")
    expect(paginationElement.querySelector(".page-value")).not.toBeInTheDocument()
  })

  test("fires onPressNext handler with undefinded totalPages", () => {
    const handlePressNext = vi.fn()
    render(
      <Pagination
        variant="number"
        currentPage={6}
        totalPages={undefined}
        data-testid="my-pagination"
        onPressNext={handlePressNext}
      />
    )
    act(() => {
      screen.getByRole("button", { name: "Next Page" }).click()
    })
    expect(handlePressNext).toHaveBeenCalledTimes(1)
    expect(screen.getByTestId("my-pagination")).toHaveTextContent("7")
  })

  test("does not fire onPressNext handler with higher currentPage than totalPages", () => {
    const handlePressNext = vi.fn()
    render(
      <Pagination
        variant="number"
        currentPage={6}
        totalPages={4}
        data-testid="my-pagination"
        onPressNext={handlePressNext}
      />
    )
    act(() => {
      screen.getByRole("button", { name: "Next Page" }).click()
    })
    expect(handlePressNext).toHaveBeenCalledTimes(0)
    expect(screen.getByTestId("my-pagination")).toHaveTextContent("4")
  })

  test("fires onPressNext handler with lower currentPage than totalPages", () => {
    const handlePressNext = vi.fn()
    render(
      <Pagination
        variant="number"
        currentPage={4}
        totalPages={6}
        data-testid="my-pagination"
        onPressNext={handlePressNext}
      />
    )
    act(() => {
      screen.getByRole("button", { name: "Next Page" }).click()
    })
    expect(handlePressNext).toHaveBeenCalledTimes(1)
    expect(screen.getByTestId("my-pagination")).toHaveTextContent("5")
  })

  test("fires onChange handler as passed when Select changes for select variant", async () => {
    const mockHandleChange = vi.fn()
    render(<Pagination variant="select" currentPage={1} pages={6} onSelectChange={mockHandleChange} />)
    const select = document.querySelector("button.juno-select-toggle")
    expect(select).toBeInTheDocument()
    expect(select).toHaveTextContent("1")
    if (select) {
      await waitFor(() => userEvent.click(select))
    }
    expect(screen.getByRole("listbox")).toBeInTheDocument()
    fireEvent.click(screen.getByRole("option", { name: "4" }))
    expect(select).toHaveTextContent("4")
    expect(mockHandleChange).toHaveBeenCalledTimes(1)
  })

  test("fires onKeyPress handler on Enter as passed for input variant", async () => {
    const handleKeyPress = vi.fn()
    render(<Pagination variant="input" currentPage={1} onKeyPress={handleKeyPress} />)

    const input = screen.getByRole("textbox")

    // Type Enter key
    await act(async () => {
      await userEvent.type(input, "{enter}")
    })

    // Check if the onKeyPress handler was called
    await waitFor(() => {
      expect(handleKeyPress).toHaveBeenCalledTimes(1)
    })
  })

  test("does not fire onKeyPress handler on Enter for input variant with undefined controlPage", async () => {
    const handleKeyPress = vi.fn()
    render(<Pagination variant="input" currentPage={undefined} onKeyPress={handleKeyPress} />)

    const input = screen.getByRole("textbox")

    // Type Enter key
    await act(async () => {
      await userEvent.type(input, "{enter}")
    })

    // Check if the onKeyPress handler was not called
    await waitFor(() => {
      expect(handleKeyPress).not.toHaveBeenCalled()
    })
  })

  test("renders disabled Pagination (default) as passed", () => {
    render(<Pagination disabled />)
    expect(screen.getAllByRole("button")).toHaveLength(2)
    expect(screen.getAllByRole("button", { name: /previous page/i })[0]).toBeDisabled()
    expect(screen.getAllByRole("button", { name: /next page/i })[0]).toBeDisabled()
  })

  test("renders disabled Pagination (select) as passed", () => {
    render(<Pagination disabled variant="select" />)

    // Check that only two buttons (Previous and Next) are rendered
    expect(screen.getAllByRole("button")).toHaveLength(3)

    // Check that the Select toggle is disabled
    const selectToggle = document.querySelector(".juno-select-toggle")
    expect(selectToggle).toBeDisabled()
  })

  test("renders disabled Pagination (input) as passed", () => {
    render(<Pagination disabled variant="input" />)
    expect(screen.getAllByRole("button")).toHaveLength(2)
    expect(screen.getByRole("textbox")).toBeDisabled()
  })

  test("renders Pagination (default) in progress as passed", () => {
    render(<Pagination progress />)
    expect(screen.getAllByRole("button")).toHaveLength(2)
    expect(document.querySelector(".juno-spinner")).toBeInTheDocument()
  })

  test("renders Pagination (select) in progress as passed", () => {
    render(<Pagination progress variant="select" />)
    expect(screen.getAllByRole("button")).toHaveLength(2)
    expect(document.querySelector(".juno-spinner")).toBeInTheDocument()
  })

  test("renders Pagination (input) in progress as passed", () => {
    render(<Pagination progress variant="input" />)
    expect(screen.getAllByRole("button")).toHaveLength(2)
    expect(document.querySelector(".juno-spinner")).toBeInTheDocument()
  })

  test("renders Pagination (input) - fires onChange handler as passed", async () => {
    const onInputChangeMock = vi.fn()
    render(<Pagination variant="input" pages={12} onInputChange={onInputChangeMock} />)
    const textinput = screen.getByRole("textbox")
    fireEvent.change(textinput, { target: { value: "102" } })
    await waitFor(() => {
      expect(onInputChangeMock).toHaveBeenCalledTimes(1)
    })
  })

  test("renders Pagination (input) - checks width of textfield based on the entry (2 digits) as passed", async () => {
    render(<Pagination variant="input" />)
    const textinput = screen.getByRole("textbox")
    fireEvent.change(textinput, { target: { value: "22" } })
    await waitFor(() => {
      const computedStyle = window.getComputedStyle(document.querySelector(".juno-pagination-wrapper") as Element)
      expect(computedStyle.width).toBe("3.3rem")
    })
  })

  test("renders Pagination (input) - checks width of textfield based on the entry (3 digits) as passed", async () => {
    render(<Pagination variant="input" />)
    const textinput = screen.getByRole("textbox")
    fireEvent.change(textinput, { target: { value: "333" } })
    await waitFor(() => {
      const computedStyle = window.getComputedStyle(document.querySelector(".juno-pagination-wrapper") as Element)
      expect(computedStyle.width).toBe("3.9rem")
    })
  })

  test("renders Pagination (input) - checks width of textfield based on the entry (4 digits) as passed", async () => {
    render(<Pagination variant="input" />)
    const textinput = screen.getByRole("textbox")
    fireEvent.change(textinput, { target: { value: "4444" } })
    await waitFor(() => {
      const computedStyle = window.getComputedStyle(document.querySelector(".juno-pagination-wrapper") as Element)
      expect(computedStyle.width).toBe("4.5rem")
    })
  })

  test("renders Pagination (input) - checks width of textfield based on the entry (5 digits) as passed", async () => {
    render(<Pagination variant="input" />)
    const textinput = screen.getByRole("textbox")
    fireEvent.change(textinput, { target: { value: "55555" } })
    await waitFor(() => {
      const computedStyle = window.getComputedStyle(document.querySelector(".juno-pagination-wrapper") as Element)
      expect(computedStyle.width).toBe("5.1rem")
    })
  })

  test("renders Pagination (input) - checks width of textfield based on the entry (7 digits) as passed", async () => {
    render(<Pagination variant="input" />)
    const textinput = screen.getByRole("textbox")
    fireEvent.change(textinput, { target: { value: "777777" } })
    await waitFor(() => {
      const computedStyle = window.getComputedStyle(document.querySelector(".juno-pagination-wrapper") as Element)
      expect(computedStyle.width).toBe("5.1rem")
    })
  })

  test("rerenders the active item as passed to the parent if conflicting with new state of active prop passed to child item", () => {
    const { rerender } = render(<Pagination variant="input" pages={12} />)
    expect(document.querySelector(".juno-stack")).toHaveTextContent("12")
    rerender(<Pagination variant="input" totalPages={33} />)
    expect(document.querySelector(".juno-stack")).toHaveTextContent("33")
  })

  test("renders Pagination (input) with undefined currentPage prop as passed", () => {
    render(<Pagination variant="input" currentPage={undefined} />)
    expect(screen.getByRole("textbox")).toHaveValue("")
  })

  test("renders Pagination (select) with undefined currentPage prop as passed", () => {
    act(() => {
      render(<Pagination variant="select" currentPage={undefined} />)
    })
    expect(document.querySelector("button.juno-select-toggle")).toHaveValue("")
  })

  test("renders Pagination (input) with undefined totalPages prop as passed", () => {
    render(<Pagination variant="input" totalPages={undefined} />)
    expect(screen.getByRole("textbox")).toHaveValue("")
  })

  test("renders Pagination (input) with undefined currentPage but with totalPages as passed", () => {
    render(<Pagination variant="input" totalPages={12} />)
    expect(screen.getByRole("textbox")).toHaveValue("")
  })

  test("renders Pagination (input) with undefined currentPage but with  totalPages after clicking previous page button", () => {
    render(<Pagination variant="input" totalPages={12} />)
    act(() => {
      screen.getByRole("button", { name: "Previous Page" }).click()
    })
    expect(screen.getByRole("textbox")).toHaveValue("")
  })

  test("renders Pagination (select) with undefined totalPages prop as passed", () => {
    act(() => {
      render(<Pagination variant="select" totalPages={undefined} />)
    })
    expect(document.querySelector("button.juno-select-toggle")).toHaveValue("")
  })

  test("renders a custom className as passed", () => {
    render(<Pagination className="my-class" data-testid="my-pagination" />)
    expect(screen.getByTestId("my-pagination")).toBeInTheDocument()
    expect(screen.getByTestId("my-pagination")).toHaveClass("my-class")
  })

  test("renders all props as passed", () => {
    render(<Pagination data-testid="my-pagination" data-lolol="123-456" />)
    expect(screen.getByTestId("my-pagination")).toBeInTheDocument()
    expect(screen.getByTestId("my-pagination")).toHaveAttribute("data-lolol", "123-456")
  })
})
