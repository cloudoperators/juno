/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Filters } from "./index"
import { SearchInput } from "../SearchInput/index"

describe("Filters", () => {
  test("renders Filters", async () => {
    render(<Filters data-testid="my-filters" />)
    expect(screen.getByTestId("my-filters")).toBeInTheDocument()
    expect(screen.getByTestId("my-filters")).toHaveClass("juno-filters")
  })

  test("renders a FilterInput when filter prop is passed", async () => {
    const filters = { options: [{ label: "option 1", value: "option-1" }] }
    render(<Filters filters={filters} />)
    expect(screen.getByRole("combobox")).toBeInTheDocument()
    expect(screen.getByRole("combobox")).toHaveClass("juno-filter-input-select")
  })

  test("renders Select with options as passed", async () => {
    const filters = {
      keyLabel: "Filter",
      options: [
        { label: "option 1", value: "option-1" },
        { label: "option 2", value: "option-2" },
      ],
    }
    render(<Filters filters={filters} />)
    expect(screen.getByRole("option", { name: "Filter" })).toBeInTheDocument()
    expect(screen.getByRole("option", { name: "option 1" })).toHaveValue("option-1")
    expect(screen.getByRole("option", { name: "option 2" })).toHaveValue("option-2")
  })

  test("renders a Select with selected filter key as passed", async () => {
    const filters = {
      options: [
        { label: "option 1", value: "option-1" },
        { label: "option 2", value: "option-2" },
      ],
    }
    render(<Filters filters={filters} selectedFilterKey="option-2" />)
    expect(screen.getByRole("option", { name: "option 2" }).selected).toBe(true)
  })

  test("renders a Filter value text input with an aria-label as passed", async () => {
    const filters = { valueLabel: "Enter a filter value", options: [] }
    render(<Filters filters={filters} />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-label", "Enter a filter value")
  })

  test("renders a Filter vlaue text input witn a placeholder as passed", async () => {
    const filters = {
      valueLabel: "Enter a filter value",
      options: [
        { label: "option 1", value: "option-1" },
        { label: "option 2", value: "option-2" },
      ],
    }
    render(<Filters valuePlaceholder="my placeholder" filters={filters} />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveAttribute("placeholder", "my placeholder")
  })

  test("renders a Filter value as passed", async () => {
    const filters = { options: [{ label: "option 1", value: "option-1" }] }
    render(<Filters filters={filters} filterValue="abc" />)
    expect(screen.getByRole("textbox")).toHaveValue("abc")
  })

  test("executes a handler as passed when the filter input value changes", async () => {
    const handleFilterValueChange = jest.fn()
    const filters = { options: [{ label: "option 1", value: "option-1" }] }
    render(<Filters filters={filters} onFilterValueChange={handleFilterValueChange} />)
    await userEvent.type(screen.getByRole("textbox"), "123")
    expect(handleFilterValueChange).toHaveBeenCalledTimes(3)
  })

  test("executes a handler as passed when the filter icon is clicked", async () => {
    const handleFilter = jest.fn()
    const filters = {
      label: "Filter",
      options: [{ label: "option 1", value: "option-1" }],
    }
    render(<Filters filters={filters} onFilter={handleFilter} />)
    await userEvent.click(screen.getByTitle("Filter"))
    expect(handleFilter).toHaveBeenCalledTimes(1)
  })

  test("executes a handler as passed when the input has focus and the user presses enter", async () => {
    const handleFilter = jest.fn()
    const filters = {
      label: "Filter",
      options: [{ label: "option 1", value: "option-1" }],
    }
    render(<Filters filters={filters} onFilter={handleFilter} />)
    await userEvent.type(screen.getByRole("textbox"), "{enter}")
    expect(handleFilter).toHaveBeenCalledTimes(1)
    expect(handleFilter).toHaveBeenCalledTimes(1)
  })

  test("clears the filter input and executes a handler as passed when the filter input clear icon is clicked", async () => {
    const handleClear = jest.fn()
    const filters = {
      label: "Filter",
      options: [{ label: "option 1", value: "option-1" }],
    }
    render(<Filters filters={filters} filterValue="some option" onFilterClear={handleClear} />)
    expect(screen.getByRole("textbox")).toHaveValue("some option")
    await userEvent.click(screen.getByTitle("Clear"))
    expect(screen.getByRole("textbox")).toHaveValue("")
    expect(handleClear).toHaveBeenCalledTimes(1)
  })

  test("renders a SearchInput as passed", async () => {
    render(<Filters search={<SearchInput />}></Filters>)
    expect(screen.getByRole("searchbox")).toBeInTheDocument()
  })

  test("renders loading Filters as passed", async () => {
    const filters = {
      label: "Filter",
      options: [{ label: "option 1", value: "option-1" }],
    }
    render(<Filters filters={filters} loading />)
    expect(screen.getByRole("combobox")).toBeDisabled()
    expect(screen.getByRole("progressbar")).toBeInTheDocument()
  })

  test("renders Filters with an error as passed", async () => {
    const filters = {
      label: "Filter",
      options: [{ label: "option 1", value: "option-1" }],
    }
    render(<Filters data-testid="my-filters" filters={filters} error />)
    expect(screen.getByRole("combobox")).toBeDisabled()
    expect(screen.getByTestId("my-filters")).toBeInTheDocument()
    expect(screen.getByTestId("my-filters")).toHaveClass("juno-filters-error")
    expect(screen.getByRole("button")).toBeDisabled()
  })

  test("renders Filters with error and an errortext as passed", async () => {
    const filters = {
      label: "Filter",
      options: [{ label: "option 1", value: "option-1" }],
    }
    render(<Filters data-testid="my-filters" filters={filters} errortext="These Filters have an error" />)
    expect(screen.getByRole("combobox")).toBeDisabled()
    expect(screen.getByTestId("my-filters")).toBeInTheDocument()
    expect(screen.getByTestId("my-filters")).toHaveClass("juno-filters-error")
    expect(document.querySelector(".juno-filters-errortext")).toBeInTheDocument()
    expect(document.querySelector(".juno-filters-errortext")).toHaveTextContent("These Filters have an error")
    expect(screen.getByRole("button")).toBeDisabled()
  })

  test("renders a custom className", async () => {
    render(<Filters data-testid="my-filters" className="my-custom-class" />)
    expect(screen.getByTestId("my-filters")).toBeInTheDocument()
    expect(screen.getByTestId("my-filters")).toHaveClass("my-custom-class")
  })

  test("renders all props as passed", async () => {
    render(<Filters data-testid="23" data-lolol={true} />)
    expect(screen.getByTestId("23")).toBeInTheDocument()
    expect(screen.getByTestId("23")).toHaveAttribute("data-lolol")
  })
})
