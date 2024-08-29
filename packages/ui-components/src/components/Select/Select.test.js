/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import PropTypes from "prop-types"
import { cleanup, render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Select } from "./index"
import { SelectOption } from "../SelectOption/index"
import { AppShellProvider } from "../AppShellProvider/index"

const mockOnChange = jest.fn()
const mockOnValueChange = jest.fn()

const ControlledSelectParent = ({ value, children, onChange, ...props }) => {
  const [val, setVal] = React.useState(value)

  const handleChange = (v) => {
    setVal(v)
    onChange()
  }

  return (
    <Select {...props} value={val} onChange={handleChange}>
      {children}
    </Select>
  )
}

ControlledSelectParent.propTypes = {
  value: PropTypes.string,
  children: PropTypes.node,
  onChange: PropTypes.func,
}

describe("Select", () => {
  afterEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  test("renders a Select toggle", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <Select />
        </AppShellProvider>
      )
    )

    expect(screen.getByRole("button")).toHaveAttribute("type", "button")
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveClass("juno-select-toggle")
  })

  test("renders a default variant select toggle by defgault", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <Select />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("button")).toHaveAttribute("type", "button")
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveClass("juno-select-toggle")
    expect(screen.getByRole("button")).not.toHaveClass("juno-select-toggle-primary")
    expect(screen.getByRole("button")).not.toHaveClass("juno-select-toggle-primary-danger")
    expect(screen.getByRole("button")).not.toHaveClass("juno-select-toggle-primary-subdued")
  })

  test("renders a primary variant select toggle as passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <Select variant="primary" />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("button")).toHaveAttribute("type", "button")
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveClass("juno-select-toggle-primary")
  })

  test("renders a primary-danger variant select toggle as passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <Select variant="primary-danger" />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("button")).toHaveAttribute("type", "button")
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveClass("juno-select-toggle-primary-danger")
  })

  test("renders a subdued variant select toggle as passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <Select variant="subdued" />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("button")).toHaveAttribute("type", "button")
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveClass("juno-select-toggle-subdued")
  })

  test("renders a Select with a label as passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <Select label="My Label" />
        </AppShellProvider>
      )
    )
    expect(document.querySelector(".juno-label")).toBeInTheDocument()
    expect(document.querySelector(".juno-label")).toHaveTextContent("My Label")
  })

  test("renders a placeholder as passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <Select placeholder="my-placeholder" />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveTextContent("my-placeholder")
  })

  test("renders default placeholder if empty string or undefined were passed as value", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <Select value="" />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveTextContent("Select…")
  })

  test("renders a Select toggle with an id as passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <Select id="select-1" />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveAttribute("id", "select-1")
  })

  test("renders a Select toggle with a generated unique id if no id was passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <Select />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveAttribute("id")
    expect(screen.getByRole("button").getAttribute("id")).toMatch("juno-select-")
  })

  test("renders a Select toggle with an associated label with an id as passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <Select id="my-select" label="My Select" />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByLabelText("My Select")).toBeInTheDocument()
    expect(screen.getByLabelText("My Select")).toHaveClass("juno-select-toggle")
  })

  test("renders a Select toggle with a label associated by an auto-generated id if no id was passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <Select label="This is a Select" />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByLabelText("This is a Select")).toBeInTheDocument()
    expect(screen.getByLabelText("This is a Select")).toHaveClass("juno-select-toggle")
  })

  test("renders a required marker as passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <Select label="My Select" required={true} />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(document.querySelector(".juno-label")).toHaveTextContent("My Select")
    expect(document.querySelector(".juno-required")).toBeInTheDocument()
  })

  test("renders an aria-label as passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <Select ariaLabel="my-select" />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveAttribute("aria-label", "my-select")
  })

  test("renders a custom className to the Select toggle as passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <Select className="my-class" />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveClass("my-class")
  })

  test("renders a disabled Select as passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <Select disabled />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toBeDisabled()
  })

  test("renders a valid Select as passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <Select valid />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveClass("juno-select-valid")
    expect(screen.getByTitle("CheckCircle")).toBeInTheDocument()
  })

  test("renders an invalid Select as passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <Select invalid />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveClass("juno-select-invalid")
    expect(screen.getByTitle("Dangerous")).toBeInTheDocument()
  })

  test("renders a successtext as passed and validates the Element", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <Select successtext="great success!" />
        </AppShellProvider>
      )
    )
    expect(document.querySelector(".juno-form-hint")).toBeInTheDocument()
    expect(document.querySelector(".juno-form-hint")).toHaveClass("juno-form-hint-success")
    expect(document.querySelector(".juno-form-hint")).toHaveTextContent("great success!")
    expect(screen.getByRole("button")).toHaveClass("juno-select-valid")
    expect(screen.getByTitle("CheckCircle")).toBeInTheDocument()
  })

  test("renders an errortext as passed and invalidates the Element", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <Select errortext="this is an error!" />
        </AppShellProvider>
      )
    )
    expect(document.querySelector(".juno-form-hint")).toBeInTheDocument()
    expect(document.querySelector(".juno-form-hint")).toHaveClass("juno-form-hint-error")
    expect(document.querySelector(".juno-form-hint")).toHaveTextContent("this is an error!")
    expect(screen.getByRole("button")).toHaveClass("juno-select-invalid")
    expect(screen.getByTitle("Dangerous")).toBeInTheDocument()
  })

  test("renders loading Select with a Spinner as passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <Select loading />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveClass("juno-select-loading")
    expect(document.querySelector(".juno-spinner")).toBeInTheDocument()
  })

  test("renders a Select in error state as passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <Select error />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveClass("juno-select-error")
  })

  test("renders non-truncated Select Options by default", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <Select>
            <SelectOption value="1">Option 1</SelectOption>
          </Select>
        </AppShellProvider>
      )
    )
    const toggle = screen.getByRole("button")
    expect(toggle).toBeInTheDocument()
    await waitFor(() => userEvent.click(toggle))
    expect(screen.getByRole("option")).toBeInTheDocument()
    expect(screen.getByRole("option")).not.toHaveClass("juno-select-option-truncate")
  })

  test("renders truncated Select Options as passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <Select truncateOptions>
            <SelectOption value="1">Option 1</SelectOption>
          </Select>
        </AppShellProvider>
      )
    )
    const toggle = screen.getByRole("button")
    expect(toggle).toBeInTheDocument()
    await waitFor(() => userEvent.click(toggle))
    expect(screen.getByRole("option")).toBeInTheDocument()
    expect(screen.getByRole("option")).toHaveClass("juno-select-option-truncate")
  })

  test("renders a Select with a selected value as passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <Select value="Option 2">
            <SelectOption value="Option 1" />
            <SelectOption value="Option 2" />
            <SelectOption value="Option 3" />
          </Select>
        </AppShellProvider>
      )
    )
    const toggle = screen.getByRole("button")
    expect(toggle).toBeInTheDocument()
    expect(toggle).toHaveTextContent("Option 2")
    await waitFor(() => userEvent.click(toggle))
    expect(screen.getByRole("listbox")).toBeInTheDocument()
    expect(screen.getAllByRole("option")[1]).toHaveTextContent("Option 2")
    expect(screen.getAllByRole("option")[1]).toHaveAttribute("aria-selected", "true")
  })

  test("renders the valueLabel in the toggle for selected items if passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <Select value="option-1" valueLabel="Option 1">
            <SelectOption value="option-1" label="Option 1" />
            <SelectOption value="option-2" label="Option 1" />
            <SelectOption value="option-3" label="Option 1" />
          </Select>
        </AppShellProvider>
      )
    )
    const toggle = screen.getByRole("button")
    expect(toggle).toBeInTheDocument()
    expect(toggle).toHaveTextContent("Option 1")
  })

  test("opens the Select menu with options as passed when the user clicks the Select toggle", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <Select>
            <SelectOption value="Option 1" />
            <SelectOption value="Option 2" />
            <SelectOption value="Option 3" />
          </Select>
        </AppShellProvider>
      )
    )
    const toggle = screen.getByRole("button")
    expect(toggle).toBeInTheDocument()
    await waitFor(() => userEvent.click(toggle))
    expect(screen.getByRole("listbox")).toBeInTheDocument()
    expect(screen.queryAllByRole("option")).toHaveLength(3)
    expect(screen.getAllByRole("option")[0]).toHaveTextContent("Option 1")
    expect(screen.getAllByRole("option")[1]).toHaveTextContent("Option 2")
    expect(screen.getAllByRole("option")[2]).toHaveTextContent("Option 3")
  })

  test("changes the selected value as clicked by a user", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <Select>
            <SelectOption value="Option 1" />
            <SelectOption value="Option 2" />
            <SelectOption value="Option 3" />
          </Select>
        </AppShellProvider>
      )
    )
    const toggle = screen.getByRole("button")
    expect(toggle).toBeInTheDocument()
    expect(toggle).toHaveTextContent("Select…")
    await waitFor(() => userEvent.click(toggle))
    expect(screen.getByRole("listbox")).toBeInTheDocument()
    const option2 = screen.getAllByRole("option")[1]
    await waitFor(() => userEvent.click(option2))
    expect(toggle).toHaveTextContent("Option 2")
  })

  test("executes an onChange handler when the selected value changes", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <Select onChange={mockOnChange}>
            <SelectOption value="Option-1">Option 1</SelectOption>
          </Select>
        </AppShellProvider>
      )
    )
    const toggle = screen.getByRole("button")
    expect(toggle).toBeInTheDocument()
    await waitFor(() => userEvent.click(toggle))
    expect(screen.getByRole("listbox")).toBeInTheDocument()
    await waitFor(() => userEvent.click(screen.getByRole("option")))
    expect(mockOnChange).toHaveBeenCalled()
  })

  test("executes a legacy onValueChange handler when the Select value changes", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <Select onValueChange={mockOnValueChange}>
            <SelectOption value="Option-1">Option 1</SelectOption>
          </Select>
        </AppShellProvider>
      )
    )
    const toggle = screen.getByRole("button")
    expect(toggle).toBeInTheDocument()
    await waitFor(() => userEvent.click(toggle))
    expect(screen.getByRole("listbox")).toBeInTheDocument()
    await waitFor(() => userEvent.click(screen.getByRole("option")))
    expect(mockOnValueChange).toHaveBeenCalled()
  })

  test("works as a controlled component", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <ControlledSelectParent value="Option 1" onChange={mockOnChange}>
            <SelectOption value="Option 1">Option 1</SelectOption>
            <SelectOption value="Option 2">Option 2</SelectOption>
            <SelectOption value="Option 3">Option 3</SelectOption>
          </ControlledSelectParent>
        </AppShellProvider>
      )
    )
    const toggle = screen.getByRole("button")
    expect(toggle).toBeInTheDocument()
    expect(toggle).toHaveTextContent("Option 1")
    await waitFor(() => userEvent.click(toggle))
    expect(screen.getByRole("listbox")).toBeInTheDocument()
    const option2 = screen.getAllByRole("option")[1]
    await waitFor(() => userEvent.click(option2))
    expect(toggle).toHaveTextContent("Option 2")
  })

  test("updates value as passed", async () => {
    const { rerender } = await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <Select value="option-2">
            <SelectOption value="option-1" />
            <SelectOption value="option-2" />
            <SelectOption value="option-3" />
          </Select>
        </AppShellProvider>
      )
    )
    const toggle = screen.getByRole("button")
    expect(toggle).toBeInTheDocument()
    expect(toggle).toHaveTextContent("option-2")
    await waitFor(() =>
      rerender(
        <AppShellProvider shadowRoot={false}>
          <Select value="option-3">
            <SelectOption value="option-1" />
            <SelectOption value="option-2" />
            <SelectOption value="option-3" />
          </Select>
        </AppShellProvider>
      )
    )
    expect(toggle).toBeInTheDocument()
    expect(toggle).toHaveTextContent("option-3")
  })

  test("works as an uncontrolled component", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <Select defaultValue="Option 2">
            <SelectOption value="Option 1">Option 1</SelectOption>
            <SelectOption value="Option 2">Option 2</SelectOption>
            <SelectOption value="Option 3">Option 3</SelectOption>
          </Select>
        </AppShellProvider>
      )
    )
    const toggle = screen.getByRole("button")
    expect(toggle).toBeInTheDocument()
    expect(toggle).toHaveTextContent("Option 2")
    await waitFor(() => userEvent.click(toggle))
    expect(screen.getByRole("listbox")).toBeInTheDocument()
    const option3 = screen.getAllByRole("option")[2]
    await waitFor(() => userEvent.click(option3))
    expect(toggle).toHaveTextContent("Option 3")
  })

  test("works when options are not passed a value prop but only children", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <Select>
            <SelectOption>Option 1</SelectOption>
            <SelectOption>Option 2</SelectOption>
            <SelectOption>Option 3</SelectOption>
            <SelectOption>Option 4</SelectOption>
            <SelectOption>Option 5</SelectOption>
          </Select>
        </AppShellProvider>
      )
    )
    const toggle = screen.getByRole("button")
    expect(toggle).toBeInTheDocument()
    expect(toggle).toHaveTextContent("Select…")
    await waitFor(() => userEvent.click(toggle))
    expect(screen.getByRole("listbox")).toBeInTheDocument()
    const option3 = screen.getAllByRole("option")[2]
    await waitFor(() => userEvent.click(option3))
    expect(toggle).toHaveTextContent("Option 3")
    await waitFor(() => userEvent.click(toggle))
    const option1 = screen.getAllByRole("option")[0]
    await waitFor(() => userEvent.click(option1))
    expect(toggle).toHaveTextContent("Option 1")
  })
})

test("renders a wrapperClassName to the outer wrapping element", () => {
  render(
    <Select wrapperClassName="my-wrapper-class">
      <SelectOption>Option 1</SelectOption>
    </Select>
  )
  expect(document.querySelector(".juno-select-wrapper ")).toBeInTheDocument()
  expect(document.querySelector(".juno-select-wrapper ")).toHaveClass("my-wrapper-class")
})
