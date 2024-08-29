/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Pagination } from "./index"

describe("Pagination", () => {
  test("renders a Pagination", async () => {
    render(<Pagination data-testid="my-pagination" />)
    expect(screen.getByTestId("my-pagination")).toBeInTheDocument()
    expect(screen.getByTestId("my-pagination")).toHaveClass("juno-pagination")
  })

  test("renders a default Pagination with only two buttons by default", async () => {
    render(<Pagination data-testid="my-pagination" />)
    expect(screen.getByTestId("my-pagination")).toBeInTheDocument()
    expect(screen.getByTestId("my-pagination")).toHaveClass("juno-pagination-default")
    expect(screen.queryAllByRole("button")).toHaveLength(2)
    expect(screen.queryAllByRole("combobox")).toHaveLength(0)
    expect(screen.queryAllByRole("textbox")).toHaveLength(0)
  })

  test("renders a number variant Pagination as passed", async () => {
    render(<Pagination variant="number" currentPage={12} data-testid="my-pagination" />)
    expect(screen.getByTestId("my-pagination")).toBeInTheDocument()
    expect(screen.getByTestId("my-pagination")).toHaveClass("juno-pagination-number")
    expect(screen.getByTestId("my-pagination")).toHaveTextContent("12")
    expect(screen.queryAllByRole("button")).toHaveLength(2)
    expect(screen.queryAllByRole("combobox")).toHaveLength(0)
    expect(screen.queryAllByRole("textbox")).toHaveLength(0)
  })

  test("renders a select variant Pagination as passed", async () => {
    render(<Pagination variant="select" data-testid="my-pagination" />)
    expect(screen.getByTestId("my-pagination")).toBeInTheDocument()
    expect(screen.getByTestId("my-pagination")).toHaveClass("juno-pagination-select")
    expect(screen.queryAllByRole("button")).toHaveLength(3)
    expect(screen.queryAllByRole("textbox")).toHaveLength(0)
    expect(document.querySelector("button.juno-select-toggle")).toBeInTheDocument()
  })

  test("renders an input variant Pagination as passed", async () => {
    render(<Pagination variant="input" currentPage={43} data-testid="my-pagination" />)
    expect(screen.getByTestId("my-pagination")).toBeInTheDocument()
    expect(screen.getByTestId("my-pagination")).toHaveClass("juno-pagination-input")
    expect(screen.queryAllByRole("button")).toHaveLength(2)
    expect(screen.queryAllByRole("combobox")).toHaveLength(0)
    expect(screen.queryByRole("textbox")).toBeInTheDocument()
  })

  test("fires onPressPrevious handler as passed when Prev button is clicked", async () => {
    const handlePressPrev = jest.fn()
    render(<Pagination onPressPrevious={handlePressPrev} />)
    await userEvent.click(screen.getByRole("button", { name: "Previous Page" }))
    expect(handlePressPrev).toHaveBeenCalledTimes(1)
  })

  test("fires onPressNext handler as passed when Next button is clicked", async () => {
    const handlePressNext = jest.fn()
    render(<Pagination onPressNext={handlePressNext} />)
    await userEvent.click(screen.getByRole("button", { name: "Next Page" }))
    expect(handlePressNext).toHaveBeenCalledTimes(1)
  })

  // TODO: This test needs re-work: Fire event when value changes
  test("fires onChange handler as passed when Select changes for select variant", async () => {
    const mockHandleChange = jest.fn()
    render(<Pagination variant="select" currentPage={1} pages={6} onSelectChange={mockHandleChange} />)
    const select = document.querySelector("button.juno-select-toggle")
    expect(select).toBeInTheDocument()
    expect(select).toHaveTextContent("1")
    await userEvent.click(select)
    expect(screen.getByRole("listbox")).toBeInTheDocument()
    await userEvent.click(screen.getByRole("option", { name: "4" }))
    expect(select).toHaveTextContent("4")
    expect(mockHandleChange).toHaveBeenCalledTimes(1)
  })

  test("fires onKeyPress handler on Enter as passed for input variant", async () => {
    const handleKeyPress = jest.fn()
    render(<Pagination variant="input" onKeyPress={handleKeyPress} />)
    await userEvent.type(screen.getByRole("textbox"), "{enter}")
    expect(handleKeyPress).toHaveBeenCalledTimes(1)
  })

  test("renders a custom className as passed", async () => {
    render(<Pagination className="my-class" data-testid="my-pagination" />)
    expect(screen.getByTestId("my-pagination")).toBeInTheDocument()
    expect(screen.getByTestId("my-pagination")).toHaveClass("my-class")
  })

  test("renders all props as passed", async () => {
    render(<Pagination data-testid="my-pagination" data-lolol="123-456" />)
    expect(screen.getByTestId("my-pagination")).toBeInTheDocument()
    expect(screen.getByTestId("my-pagination")).toHaveAttribute("data-lolol", "123-456")
  })
})
