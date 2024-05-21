/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { FilterInput } from "./index"

describe("FilterInput", () => {
  test("renders a FilterInput", async () => {
    render(<FilterInput data-testid="filter-input" />)
    expect(screen.getByTestId("filter-input")).toBeInTheDocument()
    expect(screen.getByTestId("filter-input")).toHaveClass("juno-filter-input")
  })

  test("renders a FilterInput with a Select and a TextInput", async () => {
    render(<FilterInput />)
    expect(screen.getByRole("combobox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toBeInTheDocument()
  })

  test("renders a Select with an aria-label as passed", async () => {
    render(<FilterInput keyLabel={"my select"} />)
    expect(screen.getByRole("combobox")).toBeInTheDocument()
    expect(screen.getByRole("combobox")).toHaveAttribute(
      "aria-label",
      "my select"
    )
  })

  test("renders a Select with a default option selected if no selectedFilterKey is passed", async () => {
    render(<FilterInput />)
    expect(
      screen.getByRole("option", { name: "Select Filter" })
    ).toBeInTheDocument()
    expect(screen.getByRole("option", { name: "Select Filter" }).selected).toBe(
      true
    )
  })

  test("renders a Select with a default option as passed", async () => {
    render(<FilterInput keyLabel="My Custom Key Label" />)
    expect(
      screen.getByRole("option", { name: "My Custom Key Label" })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("option", { name: "My Custom Key Label" }).selected
    ).toBe(true)
  })

  test("renders a select with options and values as passed", async () => {
    render(
      <FilterInput
        options={[
          { label: "option 1", value: "option-1" },
          { label: "option 2", value: "option-2" },
        ]}
      />
    )
    expect(screen.getByRole("option", { name: "option 1" })).toHaveValue(
      "option-1"
    )
    expect(screen.getByRole("option", { name: "option 2" })).toHaveValue(
      "option-2"
    )
  })

  test("renders a select with arbitrary props for options", async () => {
    render(
      <FilterInput
        options={[
          { label: "option 1", value: "option-1", disabled: true },
          { label: "option 2", value: "option-2" },
        ]}
      />
    )
    expect(screen.getByRole("option", { name: "option 1" })).toHaveValue(
      "option-1"
    )
    expect(screen.getByRole("option", { name: "option 1" })).toBeDisabled()
  })

  test("renders a text input with an aria-label as passed", async () => {
    render(<FilterInput valueLabel={"my value input"} />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveAttribute(
      "aria-label",
      "my value input"
    )
  })

  test("renders a text input with a placeholder as passed", async () => {
    render(
      <FilterInput
        options={[
          { label: "option 1", value: "option-1", disabled: true },
          { label: "option 2", value: "option-2" },
        ]}
        valuePlaceholder={"my value placeholder"}
      />
    )
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveAttribute(
      "placeholder",
      "my value placeholder"
    )
  })

  test("renders a selected filter as passed", async () => {
    const filterOptions = [
      { label: "OS", value: "byOs" },
      { label: "Region", value: "byRegion" },
    ]
    render(<FilterInput options={filterOptions} selectedFilterKey="byRegion" />)
    expect(screen.getByRole("combobox")).toBeInTheDocument()
    expect(screen.getByRole("option", { name: "Region" }).selected).toBe(true)
  })

  test("allows users to change the filter key", async () => {
    const filters = [
      { label: "OS", value: "byOs" },
      { label: "Region", value: "byRegion" },
      { label: "Time Zone", value: "byTimezone" },
    ]
    render(<FilterInput options={filters} />)
    await userEvent.selectOptions(
      screen.getByRole("combobox"),
      screen.getByRole("option", { name: "Time Zone" })
    )
    expect(screen.getByRole("option", { name: "Time Zone" }).selected).toBe(
      true
    )
  })

  test("should reset the filter value when the selected filter key changes", async () => {
    const filters = [
      { label: "OS", value: "byOs" },
      { label: "Region", value: "byRegion" },
      { label: "Time Zone", value: "byTimezone" },
    ]
    render(<FilterInput options={filters} filterValue="MacOS" />)
    expect(screen.getByRole("textbox")).toHaveValue("MacOS")
    await userEvent.selectOptions(
      screen.getByRole("combobox"),
      screen.getByRole("option", { name: "Region" })
    )
    expect(screen.getByRole("textbox")).toHaveValue("")
  })

  test("executes a handler as passed when selected filter key changes", async () => {
    const handleSelectedFilterChange = jest.fn()
    const filters = [
      { label: "OS", key: "byOs" },
      { label: "Region", key: "byRegion" },
      { label: "Time Zone", key: "byTimezone" },
    ]
    render(
      <FilterInput
        options={filters}
        selectedFilterKey="byRegion"
        onSelectedFilterKeyChange={handleSelectedFilterChange}
      />
    )
    expect(screen.getByRole("option", { name: "Region" }).selected).toBe(true)
    await userEvent.selectOptions(
      screen.getByRole("combobox"),
      screen.getByRole("option", { name: "OS" })
    )
    expect(screen.getByRole("option", { name: "OS" }).selected).toBe(true)
    expect(handleSelectedFilterChange).toHaveBeenCalledTimes(1)
  })

  test("renders a FilterInput with a value as passed", async () => {
    const opts = [{ label: "something", key: "something" }]
    render(<FilterInput options={opts} filterValue="123abc" />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveValue("123abc")
  })

  test("renders a Close button when the Input has a value", async () => {
    const opts = [{ label: "something", key: "something" }]
    render(<FilterInput options={opts} filterValue="123" />)
    expect(screen.getByTitle("Clear")).toBeInTheDocument()
  })

  test("executes a handler as passed when the input value changes", async () => {
    const opts = [{ label: "A Filter", key: "a-filter" }]
    const handleFilterValueChange = jest.fn()
    render(
      <FilterInput
        options={opts}
        onFilterValueChange={handleFilterValueChange}
      />
    )
    await userEvent.type(screen.getByRole("textbox"), "987")
    expect(handleFilterValueChange).toHaveBeenCalledTimes(3)
  })

  test("empties the field when Clear button is clicked", async () => {
    const opts = [{ label: "something", key: "something" }]
    render(<FilterInput options={opts} filterValue="abc" />)
    expect(screen.getByTitle("Clear")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveValue("abc")
    await userEvent.click(screen.getByTitle("Clear"))
    expect(screen.getByRole("textbox")).toHaveValue("")
  })

  test("executes onFilter handler as passed when Filter icon is clicked and return the text input value", async () => {
    const handleFilter = jest.fn()
    const opts = [{ label: "A Filter", key: "a-filter" }]
    render(
      <FilterInput options={opts} filterValue="abc" onFilter={handleFilter} />
    )
    await userEvent.click(screen.getByTitle("Filter"))
    expect(handleFilter).toHaveBeenCalledTimes(1)
    expect(handleFilter).toHaveBeenCalledWith("abc")
  })

  test("executes onFilter handler as passed when the input has focus and the user presses enter and return the text input value", async () => {
    const handleFilter = jest.fn()
    const opts = [{ label: "A Filter", key: "a-filter" }]
    render(
      <FilterInput options={opts} filterValue="abc" onFilter={handleFilter} />
    )
    await userEvent.type(screen.getByRole("textbox"), "{enter}")
    expect(handleFilter).toHaveBeenCalledTimes(1)
    expect(handleFilter).toHaveBeenCalledWith("abc")
  })

  test("renders loading filter input as passed", async () => {
    render(<FilterInput loading />)
    expect(screen.getByRole("combobox")).toBeDisabled()
    expect(screen.getByRole("textbox")).toBeDisabled()
    expect(screen.getByRole("progressbar")).toBeInTheDocument()
  })

  test("renders a loading filter if passed options are present but empty", async () => {
    const filters = []
    render(<FilterInput options={filters} />)
    expect(screen.getByRole("combobox")).toBeDisabled()
    expect(screen.getByRole("textbox")).toBeDisabled()
    expect(screen.getByRole("progressbar")).toBeInTheDocument()
    expect(screen.getByRole("button")).toBeDisabled()
  })

  test("renders loading filter as passed even if options are present and not empty", async () => {
    const opts = [{ label: "A Filter", key: "a-filter" }]
    render(<FilterInput options={opts} loading />)
    expect(screen.getByRole("combobox")).toBeDisabled()
    expect(screen.getByRole("textbox")).toBeDisabled()
    expect(screen.getByRole("progressbar")).toBeInTheDocument()
  })

  test("renders a filter input with an error as passed", async () => {
    const opts = [{ label: "A Filter", key: "a-filter" }]
    render(<FilterInput options={opts} error />)
    expect(screen.getByRole("combobox")).toBeDisabled()
    expect(screen.getByRole("textbox")).toBeDisabled()
    expect(screen.getByTitle("Error")).toBeInTheDocument()
    expect(screen.getByRole("button")).toBeDisabled()
  })

  test("renders a custom class to the row as passed", async () => {
    render(
      <FilterInput data-testid="filter-input" className="my-custom-class" />
    )
    expect(screen.getByTestId("filter-input")).toBeInTheDocument()
    expect(screen.getByTestId("filter-input")).toHaveClass("my-custom-class")
  })

  test("renders all props as passed", async () => {
    render(<FilterInput data-testid="filter-input" data-lolol="some-prop" />)
    expect(screen.getByTestId("filter-input")).toBeInTheDocument()
    expect(screen.getByTestId("filter-input")).toHaveAttribute(
      "data-lolol",
      "some-prop"
    )
  })
})
