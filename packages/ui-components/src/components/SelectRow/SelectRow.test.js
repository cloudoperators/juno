/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import PropTypes from "prop-types"
import { cleanup, render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { SelectRow } from "./index"
import { SelectOption } from "../SelectOption/index"

const mockOnChange = jest.fn()
// disable warnings for deprecated components
globalThis.console.warn = jest.fn()

/** Create a Parent component to test functionality and interactions of controlled components. */
const SelectRowParent = ({ value, onChange, children, ...props }) => {
  const [val, setVal] = React.useState(value)

  const handleChange = (v) => {
    onChange()
    setVal(v)
  }

  return (
    <SelectRow defaultValue={val} onChange={handleChange} {...props}>
      {children}
    </SelectRow>
  )
}

SelectRowParent.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.node,
}

describe("SelectRow", () => {
  afterEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  test("renders a select row", async () => {
    await waitFor(() => render(<SelectRow data-testid="select-row" />))
    expect(screen.getByTestId("select-row")).toBeInTheDocument()
  })

  test("renders a select row with a Select toggle and an associated label with an id as passed", async () => {
    await waitFor(() =>
      render(
        <SelectRow data-testid="select-row" label="my-select" id="select-row" />
      )
    )
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByLabelText("my-select")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveAttribute("id", "select-row")
  })

  test("renders a help text as passed", async () => {
    await waitFor(() => render(<SelectRow helptext="Helptext goes here" />))
    expect(screen.getByText("Helptext goes here")).toBeInTheDocument()
  })

  test("renders a helpt text with a link as passed", async () => {
    await waitFor(() => render(<SelectRow helptext={<a href="#">Link</a>} />))
    expect(screen.getByRole("link")).toBeInTheDocument()
    expect(screen.getByRole("link")).toHaveAttribute("href", "#")
    expect(screen.getByRole("link")).toHaveTextContent("Link")
  })

  test("renders a required label as passed", async () => {
    await waitFor(() => render(<SelectRow label="Required Input" required />))
    expect(document.querySelector(".juno-required")).toBeInTheDocument()
  })

  test("renders a custom class to the row as passed", async () => {
    await waitFor(() =>
      render(<SelectRow data-testid="select-row" className="my-custom-class" />)
    )
    expect(screen.getByTestId("select-row")).toBeInTheDocument()
    expect(screen.getByTestId("select-row")).toHaveClass("my-custom-class")
  })

  test("renders a placeholder in the Select toggle as passed", async () => {
    await waitFor(() => render(<SelectRow placeholder="my placeholder" />))
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveTextContent("my placeholder")
  })

  test("renders a disabled select as passed", async () => {
    await waitFor(() => render(<SelectRow disabled />))
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toBeDisabled()
  })

  test("renders an invalid SelectRow as passed", async () => {
    await waitFor(() => render(<SelectRow invalid />))
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveClass("juno-select-invalid")
    expect(screen.getByTitle("Dangerous")).toBeInTheDocument()
  })

  test("renders an invalid SelectRow when errortext prop was passed", async () => {
    await waitFor(() => render(<SelectRow errortext="This is an error text" />))
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveClass("juno-select-invalid")
    expect(screen.getByText("This is an error text")).toBeInTheDocument()
  })

  test("renders a valid SelectRow as passed", async () => {
    await waitFor(() => render(<SelectRow valid />))
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveClass("juno-select-valid")
    expect(screen.getByTitle("CheckCircle")).toBeInTheDocument()
  })

  test("renders a valid SelectRow when successtext prop was passed", async () => {
    await waitFor(() =>
      render(<SelectRow successtext="This is a success text" />)
    )
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveClass("juno-select-valid")
    expect(screen.getByText("This is a success text")).toBeInTheDocument()
  })

  test("renders a loading SelectRow as passed", async () => {
    await waitFor(() => render(<SelectRow loading />))
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveClass("juno-select-loading")
  })

  test("renders a SelectRow with an error Select as passed", async () => {
    await waitFor(() => render(<SelectRow error />))
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveClass("juno-select-error")
  })

  test("renders all props as passed", async () => {
    await waitFor(() =>
      render(<SelectRow data-testid="select-row" data-lolol="some-prop" />)
    )
    expect(screen.getByTestId("select-row")).toBeInTheDocument()
    expect(screen.getByTestId("select-row")).toHaveAttribute(
      "data-lolol",
      "some-prop"
    )
  })

  test("sets selected option for an uncontrolled Select as passed", async () => {
    await waitFor(() =>
      render(
        <SelectRow defaultValue="Value 2">
          <SelectOption value="Value 1" />
          <SelectOption value="Value 2" />
        </SelectRow>
      )
    )
    expect(screen.getByRole("button")).toHaveTextContent("Value 2")
    expect(screen.getByRole("button")).not.toHaveTextContent("Value 1")
  })

  test("sets selected option for a controlled Select as passed", async () => {
    await waitFor(() =>
      render(
        <SelectRow value="Value 2">
          <SelectOption value="Value 1" />
          <SelectOption value="Value 2" />
        </SelectRow>
      )
    )
    expect(screen.getByRole("button")).toHaveTextContent("Value 2")
    expect(screen.getByRole("button")).not.toHaveTextContent("Value 1")
  })

  test("allows user to open a Select in a SelectRow by clicking on it, showing all children rendered as passed", async () => {
    await waitFor(() =>
      render(
        <SelectRow>
          <SelectOption value="Option 1">Option 1</SelectOption>
          <SelectOption value="Option 2">Option 2</SelectOption>
          <SelectOption value="Option 3">Option 3</SelectOption>
        </SelectRow>
      )
    )
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument()
    await waitFor(() => userEvent.click(screen.getByRole("button")))
    expect(screen.getByRole("listbox")).toBeInTheDocument()
    expect(screen.getByRole("option", { name: "Option 1" })).toBeInTheDocument()
    expect(screen.getByRole("option", { name: "Option 2" })).toBeInTheDocument()
    expect(screen.getByRole("option", { name: "Option 3" })).toBeInTheDocument()
  })

  test("allows user to change a value on an uncontrolled SelectRow", async () => {
    await waitFor(() =>
      render(
        <SelectRow defaultValue="val-1" onChange={mockOnChange}>
          <SelectOption value="val-1" />
          <SelectOption value="val-2" />
          <SelectOption value="val-3" />
        </SelectRow>
      )
    )
    const select = screen.getByRole("button")
    expect(select).toBeInTheDocument()
    expect(select).toHaveTextContent("val-1")
    await waitFor(() => userEvent.click(select))
    expect(screen.getByRole("listbox")).toBeInTheDocument()
    await waitFor(() =>
      userEvent.click(screen.getByRole("option", { name: "val-2" }))
    )
    expect(select).toHaveTextContent("val-2")
    expect(mockOnChange).toHaveBeenCalled()
  })

  test("allows user to change a value on a controlled SelectRow", async () => {
    await waitFor(() =>
      render(
        <SelectRowParent value="v-1" onChange={mockOnChange}>
          <SelectOption value="v-1" />
          <SelectOption value="v-2" />
          <SelectOption value="v-3" />
        </SelectRowParent>
      )
    )
    const select = screen.getByRole("button")
    expect(select).toBeInTheDocument()
    expect(select).toHaveTextContent("v-1")
    await waitFor(() => userEvent.click(select))
    expect(screen.getByRole("listbox")).toBeInTheDocument()
    expect(screen.getByRole("option", { name: "v-1" })).toBeInTheDocument()
    expect(screen.getByRole("option", { name: "v-2" })).toBeInTheDocument()
    expect(screen.getByRole("option", { name: "v-3" })).toBeInTheDocument()
    await waitFor(() =>
      userEvent.click(screen.getByRole("option", { name: "v-2" }))
    )
    expect(select).toHaveTextContent("v-2")
    expect(mockOnChange).toHaveBeenCalled()
  })
})
