/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen, fireEvent, act, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Pagination } from "./index"

describe("Pagination", () => {
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
    expect(screen.getByTestId("my-pagination")).toHaveTextContent("")
  })
  test("renders Pagination (number) with undefined currentPage and undefined totalPages", () => {
    render(<Pagination variant="number" currentPage={undefined} totalPages={undefined} data-testid="my-pagination" />)
    expect(screen.getByTestId("my-pagination")).toHaveTextContent("")
  })

  test("renders a select variant Pagination as passed", () => {
    render(<Pagination variant="select" data-testid="my-pagination" />)
    expect(screen.getByTestId("my-pagination")).toBeInTheDocument()
    expect(screen.getByTestId("my-pagination")).toHaveClass("juno-pagination-select")
    expect(screen.queryAllByRole("button")).toHaveLength(3)
    expect(screen.queryAllByRole("textbox")).toHaveLength(0)
    expect(document.querySelector("button.juno-select-toggle")).toBeInTheDocument()
  })

  test("renders Pagination (select) with currentPage higher than totalPages", () => {
    render(<Pagination variant="select" currentPage={12} totalPages={6} data-testid="my-pagination" />)
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
    const handlePressPrev = jest.fn()
    render(<Pagination currentPage={2} pages={6} onPressPrevious={handlePressPrev} />)
    act(() => {
      screen.getByRole("button", { name: "Previous Page" }).click()
    })
    expect(handlePressPrev).toHaveBeenCalledTimes(1)
  })

  test("fires onPressNext handler as passed when Next button is clicked", () => {
    const handlePressNext = jest.fn()
    render(<Pagination currentPage={2} pages={6} onPressNext={handlePressNext} />)
    act(() => {
      screen.getByRole("button", { name: "Next Page" }).click()
    })
    expect(handlePressNext).toHaveBeenCalledTimes(1)
  })

  test("fires onPressNext handler with undefined currentPage and undefinded totalPages - passed when Next button is clicked", () => {
    const handlePressNext = jest.fn()
    render(
      <Pagination
        variant="number"
        currentPage={undefined}
        totalPages={undefined}
        data-testid="my-pagination"
        onPressNext={handlePressNext}
      />
    )
    act(() => {
      screen.getByRole("button", { name: "Next Page" }).click()
    })
    expect(handlePressNext).toHaveBeenCalledTimes(0)
    expect(screen.getByTestId("my-pagination")).toHaveTextContent("")
  })

  test("fires onPressNext handler with undefined currentPages", () => {
    const handlePressNext = jest.fn()
    render(
      <Pagination
        variant="number"
        currentPage={undefined}
        totalPages={8}
        data-testid="my-pagination"
        onPressNext={handlePressNext}
      />
    )
    act(() => {
      screen.getByRole("button", { name: "Next Page" }).click()
    })
    expect(handlePressNext).toHaveBeenCalledTimes(0)
    expect(screen.getByTestId("my-pagination")).toHaveTextContent("")
  })

  test("fires onPressNext handler with undefinded totalPages", () => {
    const handlePressNext = jest.fn()
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
    const handlePressNext = jest.fn()
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
    const handlePressNext = jest.fn()
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
    const mockHandleChange = jest.fn()
    render(<Pagination variant="select" currentPage={1} pages={6} onSelectChange={mockHandleChange} />)
    const select = document.querySelector("button.juno-select-toggle")
    expect(select).toBeInTheDocument()
    expect(select).toHaveTextContent("1")
    await waitFor(() => userEvent.click(select))
    expect(screen.getByRole("listbox")).toBeInTheDocument()
    act(() => {
      screen.getByRole("option", { name: "4" }).click()
    })
    expect(select).toHaveTextContent("4")
    expect(mockHandleChange).toHaveBeenCalledTimes(1)
  })

  test("fires onKeyPress handler on Enter as passed for input variant", async () => {
    const handleKeyPress = jest.fn()
    await waitFor(() => {
      render(<Pagination variant="input" onKeyPress={handleKeyPress} />)
    })
    await waitFor(() => {
      userEvent.type(screen.getByRole("textbox"), "{enter}")
      expect(handleKeyPress).toHaveBeenCalledTimes(1)
    })
  })

  test("does not fire onKeyPress handler on Enter for input variant with undefined controlPage", async () => {
    const handleKeyPress = jest.fn()
    await waitFor(() => {
      render(<Pagination variant="input" currentPage={undefined} onKeyPress={handleKeyPress} />)
    })
    await waitFor(() => {
      userEvent.type(screen.getByRole("textbox"), "{enter}")
      expect(handleKeyPress).toHaveBeenCalledTimes(0)
    })
  })

  test("renders disabled Pagination (default) as passed", () => {
    render(<Pagination disabled />)
    expect(screen.getAllByRole("button", { disabled: true })).toHaveLength(2)
  })

  test("renders disabled Pagination (select) as passed", () => {
    render(<Pagination disabled variant="select" />)
    expect(screen.getAllByRole("button", { disabled: true })).toHaveLength(3)
    expect(document.querySelector(".juno-select-toggle")).toBeDisabled()
  })

  test("renders disabled Pagination (input) as passed", () => {
    render(<Pagination disabled variant="input" />)
    expect(screen.getAllByRole("button", { disabled: true })).toHaveLength(2)
    expect(screen.getByRole("textbox")).toBeDisabled()
  })

  test("renders Pagination (default) in progress as passed", () => {
    render(<Pagination progress />)
    expect(screen.getAllByRole("button", { disabled: true })).toHaveLength(2)
    expect(document.querySelector(".juno-spinner")).toBeInTheDocument()
  })

  test("renders Pagination (select) in progress as passed", () => {
    render(<Pagination progress variant="select" />)
    expect(screen.getAllByRole("button", { disabled: true })).toHaveLength(2)
    expect(document.querySelector(".juno-select-toggle")).not.toBeInTheDocument()
    expect(document.querySelector(".juno-spinner")).toBeInTheDocument()
  })

  test("renders Pagination (input) in progress as passed", () => {
    render(<Pagination progress variant="input" />)
    expect(screen.getAllByRole("button", { disabled: true })).toHaveLength(2)
    expect(screen.queryByRole("textbox")).not.toBeInTheDocument()
    expect(document.querySelector(".juno-spinner")).toBeInTheDocument()
  })

  test("renders Pagination (input) - fires onChange handler as passed", async () => {
    const onChangeMock = jest.fn()
    render(<Pagination variant="input" pages={12} onChange={onChangeMock} />)
    const textinput = screen.getByRole("textbox")
    await waitFor(() => {
      fireEvent.change(textinput, { target: { value: "102" } })
      expect(onChangeMock).toHaveBeenCalledTimes(1)
    })
  })

  test("renders Pagination (input) - value corrected to the highest possible - as passed", async () => {
    render(<Pagination variant="input" pages={12} />)
    const textinput = screen.getByRole("textbox")
    await waitFor(() => {
      fireEvent.change(textinput, { target: { value: "102" } })
      fireEvent.keyPress(textinput, { key: "Enter", code: 13, charCode: 13 })
      expect(textinput).toHaveValue("12")
    })
  })

  test("renders Pagination (input) - value that is too low is corrected to '1' - as passed", async () => {
    render(<Pagination variant="input" pages={12} />)
    const textinput = screen.getByRole("textbox")

    await waitFor(() => {
      fireEvent.change(textinput, { target: { value: "0" } })
      fireEvent.blur(textinput)
      expect(textinput).toHaveValue("1")
    })
  })

  test("renders Pagination (input) - checks width of textfield based on the entry (2 digits) as passed", async () => {
    render(<Pagination variant="input" />)
    const textinput = screen.getByRole("textbox")

    await waitFor(() => {
      fireEvent.change(textinput, { target: { value: "22" } })
      const computedStyle = window.getComputedStyle(document.querySelector(".juno-pagination-wrapper"))
      expect(computedStyle.width).toBe("3.3rem")
    })
  })

  test("renders Pagination (input) - checks width of textfield based on the entry (3 digits) as passed", async () => {
    render(<Pagination variant="input" />)
    const textinput = screen.getByRole("textbox")

    await waitFor(() => {
      fireEvent.change(textinput, { target: { value: "22" } })
      const computedStyle = window.getComputedStyle(document.querySelector(".juno-pagination-wrapper"))
      expect(computedStyle.width).toBe("3.3rem")
    })
  })

  test("renders Pagination (input) - checks width of textfield based on the entry (4 digits) as passed", async () => {
    render(<Pagination variant="input" />)
    const textinput = screen.getByRole("textbox")
    await waitFor(() => {
      fireEvent.change(textinput, { target: { value: "4444" } })
      const computedStyle = window.getComputedStyle(document.querySelector(".juno-pagination-wrapper"))
      expect(computedStyle.width).toBe("4.5rem")
    })
  })

  test("renders Pagination (input) - checks width of textfield based on the entry (5 digits) as passed", async () => {
    render(<Pagination variant="input" />)
    const textinput = screen.getByRole("textbox")
    await waitFor(() => {
      fireEvent.change(textinput, { target: { value: "55555" } })
      const computedStyle = window.getComputedStyle(document.querySelector(".juno-pagination-wrapper"))
      expect(computedStyle.width).toBe("5.1rem")
    })
  })

  test("renders Pagination (input) - checks width of textfield based on the entry (7 digits) as passed", async () => {
    render(<Pagination variant="input" />)
    const textinput = screen.getByRole("textbox")
    await waitFor(() => {
      fireEvent.change(textinput, { target: { value: "777777" } })
      const computedStyle = window.getComputedStyle(document.querySelector(".juno-pagination-wrapper"))
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
    render(<Pagination variant="select" currentPage={undefined} />)
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
    render(<Pagination variant="select" totalPages={undefined} />)
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
