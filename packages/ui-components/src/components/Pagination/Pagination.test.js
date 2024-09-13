/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
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
    render(<Pagination currentPage={2} pages={6} onPressPrevious={handlePressPrev} />)
    await userEvent.click(screen.getByRole("button", { name: "Previous Page" }))
    expect(handlePressPrev).toHaveBeenCalledTimes(1)
  })

  test("fires onPressNext handler as passed when Next button is clicked", async () => {
    const handlePressNext = jest.fn()
    render(<Pagination currentPage={2} pages={6} onPressNext={handlePressNext} />)
    await userEvent.click(screen.getByRole("button", { name: "Next Page" }))
    expect(handlePressNext).toHaveBeenCalledTimes(1)
  })

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

  test("renders disabled Pagination (default) as passed", async () => {
    render(<Pagination disabled />)
    expect(screen.getAllByRole("button", { disabled: true })).toHaveLength(2)
  })

  test("renders disabled Pagination (select) as passed", async () => {
    render(<Pagination disabled variant="select" />)
    expect(screen.getAllByRole("button", { disabled: true })).toHaveLength(3)
    expect(document.querySelector(".juno-select-toggle")).toBeDisabled()
  })

  test("renders disabled Pagination (input) as passed", async () => {
    render(<Pagination disabled variant="input" />)
    expect(screen.getAllByRole("button", { disabled: true })).toHaveLength(2)
    expect(screen.getByRole("textbox")).toBeDisabled()
  })

  test("renders Pagination (default) in progress as passed", async () => {
    render(<Pagination progress />)
    expect(screen.getAllByRole("button", { disabled: true })).toHaveLength(2)
    expect(document.querySelector(".juno-spinner")).toBeInTheDocument()
  })

  test("renders Pagination (select) in progress as passed", async () => {
    render(<Pagination progress variant="select" />)
    expect(screen.getAllByRole("button", { disabled: true })).toHaveLength(2)
    expect(document.querySelector(".juno-select-toggle")).not.toBeInTheDocument()
    expect(document.querySelector(".juno-spinner")).toBeInTheDocument()
  })

  test("renders Pagination (input) in progress as passed", async () => {
    render(<Pagination progress variant="input" />)
    expect(screen.getAllByRole("button", { disabled: true })).toHaveLength(2)
    expect(screen.queryByRole("textbox")).not.toBeInTheDocument()
    expect(document.querySelector(".juno-spinner")).toBeInTheDocument()
  })

  test("renders Pagination (input) - fires onChange handler as passed", async () => {
    const onChangeMock = jest.fn()
    render(<Pagination variant="input" pages={12} onChange={onChangeMock} />)
    const textinput = screen.getByRole("textbox")
    fireEvent.change(textinput, { target: { value: "102" } })
    expect(onChangeMock).toHaveBeenCalledTimes(1)
  })

  test("renders Pagination (input) - check whether a value that is too high is automatically corrected to the highest possible value - as passed", async () => {
    render(<Pagination variant="input" pages={12} />)
    const textinput = screen.getByRole("textbox")
    fireEvent.change(textinput, { target: { value: "102" } })
    fireEvent.keyPress(textinput, { key: "Enter", code: 13, charCode: 13 })
    expect(textinput).toHaveValue("12")
  })

  test("renders Pagination (input) - check whether a value that is too low is automatically corrected to the value : 1 - as passed", async () => {
    render(<Pagination variant="input" pages={12} />)
    const textinput = screen.getByRole("textbox")
    fireEvent.change(textinput, { target: { value: "0" } })
    fireEvent.blur(textinput)
    expect(textinput).toHaveValue("1")
  })

  test("renders Pagination (input) - checks width of textfield based on the entry (2 digits) as passed", async () => {
    render(<Pagination variant="input" />)
    const textinput = screen.getByRole("textbox")
    fireEvent.change(textinput, { target: { value: "22" } })
    const computedStyle = window.getComputedStyle(document.querySelector(".juno-pagination-wrapper"))
    expect(computedStyle.width).toBe("3.3rem")
  })

  test("renders Pagination (input) - checks width of textfield based on the entry (3 digits) as passed", async () => {
    render(<Pagination variant="input" />)
    const textinput = screen.getByRole("textbox")
    fireEvent.change(textinput, { target: { value: "333" } })
    const computedStyle = window.getComputedStyle(document.querySelector(".juno-pagination-wrapper"))
    expect(computedStyle.width).toBe("3.9rem")
  })

  test("renders Pagination (input) - checks width of textfield based on the entry (4 digits) as passed", async () => {
    render(<Pagination variant="input" />)
    const textinput = screen.getByRole("textbox")
    fireEvent.change(textinput, { target: { value: "4444" } })
    const computedStyle = window.getComputedStyle(document.querySelector(".juno-pagination-wrapper"))
    expect(computedStyle.width).toBe("4.5rem")
  })

  test("renders Pagination (input) - checks width of textfield based on the entry (5 digits) as passed", async () => {
    render(<Pagination variant="input" />)
    const textinput = screen.getByRole("textbox")
    fireEvent.change(textinput, { target: { value: "55555" } })
    const computedStyle = window.getComputedStyle(document.querySelector(".juno-pagination-wrapper"))
    expect(computedStyle.width).toBe("5.1rem")
  })

  test("renders Pagination (input) - checks width of textfield based on the entry (7 digits) as passed", async () => {
    render(<Pagination variant="input" />)
    const textinput = screen.getByRole("textbox")
    fireEvent.change(textinput, { target: { value: "777777" } })
    const computedStyle = window.getComputedStyle(document.querySelector(".juno-pagination-wrapper"))
    expect(computedStyle.width).toBe("5.1rem")
  })

  test("rerenders the active item as passed to the parent if conflicting with new state of active prop passed to child item", async () => {
    const { rerender } = render(<Pagination variant="input" pages={12} />)
    expect(document.querySelector(".juno-stack")).toHaveTextContent("12")
    rerender(<Pagination variant="input" totalPages={33} />)
    expect(document.querySelector(".juno-stack")).toHaveTextContent("33")
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
