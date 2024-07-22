/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { cleanup, render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { ComboBox } from "./index"
import { AppShellProvider } from "../AppShellProvider/index"
import { ComboBoxOption } from "../ComboBoxOption/index"

const mockOnBlur = jest.fn()
const mockOnChange = jest.fn()
const mockOnFocus = jest.fn()
const mockOnInputChange = jest.fn()

describe("ComboBox", () => {
  afterEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  test("renders a ComboBox", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <ComboBox />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("combobox")).toBeInTheDocument()
    expect(screen.getByRole("combobox")).toHaveAttribute("type", "text")
    expect(screen.getByRole("combobox")).toHaveClass("juno-combobox-input")
  })

  test("renders a ComboBox with a name as passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <ComboBox name="my-wonderful-combobox">
            <ComboBoxOption value="Option 1">Option 1</ComboBoxOption>
          </ComboBox>
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("combobox")).toBeInTheDocument()
    /* Here we need to directly select the input, since headless
      a) does not add the name to the visible input element but to another, hidden input element it keeps in sync, and
      b) react-testing fails when trying to access hidden elements by role: */
    expect(
      document.querySelector("input[name='my-wonderful-combobox']")
    ).toBeInTheDocument()
  })

  test("renders a ComboBox with a label as passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <ComboBox label="My Label" />
        </AppShellProvider>
      )
    )
    expect(document.querySelector(".juno-label")).toBeInTheDocument()
    expect(document.querySelector(".juno-label")).toHaveTextContent("My Label")
  })

  test("renders options as passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <ComboBox>
            <ComboBoxOption value="Option 1">Option 1</ComboBoxOption>
          </ComboBox>
        </AppShellProvider>
      )
    )
    const user = userEvent.setup()
    const cbox = screen.getByRole("combobox")
    const cbutton = screen.getByRole("button")
    expect(cbox).toBeInTheDocument()
    expect(cbutton).toBeInTheDocument()
    await waitFor(() => {
      user.click(cbutton)
      expect(screen.getByRole("listbox")).toBeInTheDocument()
      expect(screen.getByRole("option")).toBeInTheDocument()
      expect(screen.getByRole("option")).toHaveTextContent("Option 1")
    })
  })

  test("renders an id as passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <ComboBox id="My Id" />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("combobox")).toBeInTheDocument()
    expect(screen.getByRole("combobox")).toHaveAttribute("id", "My Id")
  })

  test("renders the id of the ComboBox input as the for attribute of the label", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <ComboBox label="the label" />
        </AppShellProvider>
      )
    )
    const cbox = screen.getByRole("combobox")
    const label = document.querySelector(".juno-label")
    expect(cbox).toBeInTheDocument()
    expect(label).toBeInTheDocument()
    expect(label.getAttribute("for")).toMatch(cbox.getAttribute("id"))
    expect(screen.getByLabelText("the label")).toBeInTheDocument()
  })

  test("renders an aria-label as passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <ComboBox ariaLabel="my aria-label" />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("combobox")).toBeInTheDocument()
    expect(screen.getByRole("combobox")).toHaveAttribute(
      "aria-label",
      "my aria-label"
    )
  })

  test("renders the label as an aria-label if no aria-label was passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <ComboBox label="My Label" />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("combobox")).toBeInTheDocument()
    expect(screen.getByRole("combobox")).toHaveAttribute(
      "aria-label",
      "My Label"
    )
  })

  test("renders a ComboBox with a placeholder as passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <ComboBox placeholder="My Placeholder" />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("combobox")).toBeInTheDocument()
    expect(screen.getByRole("combobox")).toHaveAttribute(
      "placeholder",
      "My Placeholder"
    )
  })

  test("renders a disabled ComboBox as passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <ComboBox disabled />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("combobox")).toBeInTheDocument()
    expect(screen.getByRole("combobox")).toBeDisabled()
  })

  test("renders a required ComboBox as passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <ComboBox label="My Required ComboBox" required />
        </AppShellProvider>
      )
    )
    expect(document.querySelector(".juno-label")).toBeInTheDocument()
    expect(document.querySelector(".juno-required")).toBeInTheDocument()
  })

  test("renders a validated ComboBox as passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <ComboBox valid />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("combobox")).toBeInTheDocument()
    expect(screen.getByRole("combobox")).toHaveClass("juno-combobox-valid")
    expect(screen.getByTitle("CheckCircle")).toBeInTheDocument()
  })

  test("renders a validated ComboBox when a successtext was passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <ComboBox successtext="Great Success!" />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("combobox")).toBeInTheDocument()
    expect(screen.getByRole("combobox")).toHaveClass("juno-combobox-valid")
    expect(screen.getByTitle("CheckCircle")).toBeInTheDocument()
  })

  test("renders an invalidated ComboBox as passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <ComboBox invalid />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("combobox")).toBeInTheDocument()
    expect(screen.getByRole("combobox")).toHaveClass("juno-combobox-invalid")
    expect(screen.getByTitle("Dangerous")).toBeInTheDocument()
  })

  test("renders an invalidated ComboBox when an errortext was passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <ComboBox errortext="Oh Snap!" />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("combobox")).toBeInTheDocument()
    expect(screen.getByRole("combobox")).toHaveClass("juno-combobox-invalid")
    expect(screen.getByTitle("Dangerous")).toBeInTheDocument()
  })

  test("renders a helptext as passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <ComboBox helptext="A helptext goes here" />
        </AppShellProvider>
      )
    )
    expect(document.querySelector(".juno-form-hint")).toBeInTheDocument()
    expect(document.querySelector(".juno-form-hint")).toHaveClass(
      "juno-form-hint-help"
    )
    expect(document.querySelector(".juno-form-hint")).toHaveTextContent(
      "A helptext goes here"
    )
  })

  test("renders an errortext as passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <ComboBox errortext="An errortext goes here" />
        </AppShellProvider>
      )
    )
    expect(document.querySelector(".juno-form-hint")).toBeInTheDocument()
    expect(document.querySelector(".juno-form-hint")).toHaveClass(
      "juno-form-hint-error"
    )
    expect(document.querySelector(".juno-form-hint")).toHaveTextContent(
      "An errortext goes here"
    )
  })

  test("renders a successtext as passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <ComboBox successtext="A successtext goes here" />
        </AppShellProvider>
      )
    )
    expect(document.querySelector(".juno-form-hint")).toBeInTheDocument()
    expect(document.querySelector(".juno-form-hint")).toHaveClass(
      "juno-form-hint-success"
    )
    expect(document.querySelector(".juno-form-hint")).toHaveTextContent(
      "A successtext goes here"
    )
  })

  test("renders a loading ComboBox with a Spinner as passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <ComboBox loading />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("combobox")).toHaveClass("juno-combobox-loading")
    expect(document.querySelector(".juno-spinner")).toBeInTheDocument()
  })

  test("renders a ComboBox in error state with an Error icon as passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <ComboBox error />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("combobox")).toHaveClass("juno-combobox-error")
    expect(screen.getByTitle("Error")).toBeInTheDocument()
  })

  test("fires an onBlur handler as passed when the ComboBox looses focus", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <ComboBox onBlur={mockOnBlur} />
        </AppShellProvider>
      )
    )
    const user = userEvent.setup()
    const cbox = screen.getByRole("combobox")
    await waitFor(() => {
      user.click(cbox) // focus the element
      user.tab() // blur the element
      expect(mockOnBlur).toHaveBeenCalled()
    })
  })

  test("fires an onChange handler as passed when the user selects an option", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <ComboBox onChange={mockOnChange}>
            <ComboBoxOption value="option 1">Option 1</ComboBoxOption>
            <ComboBoxOption value="option 2">Option 2</ComboBoxOption>
          </ComboBox>
        </AppShellProvider>
      )
    )
    const user = userEvent.setup()
    const cbox = screen.getByRole("combobox")
    const cbutton = screen.getByRole("button")
    expect(cbox).toBeInTheDocument()
    expect(cbutton).toBeInTheDocument()
    await waitFor(() => user.click(cbutton))
    expect(screen.getByRole("listbox")).toBeInTheDocument()
    await waitFor(() => {
      user.click(screen.getByRole("option", { name: "Option 2" }))
      expect(mockOnChange).toHaveBeenCalled()
    })
  })

  test("fires an onFocus handler as passed when the ComboBox receives focus", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <ComboBox onFocus={mockOnFocus} />
        </AppShellProvider>
      )
    )
    const user = userEvent.setup()
    const cbox = screen.getByRole("combobox")
    await waitFor(() => {
      user.click(cbox)
      expect(mockOnFocus).toHaveBeenCalled()
    })
  })

  test("fires an onInputChange handler when the user types into the ComboBox", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <ComboBox onInputChange={mockOnInputChange}>
            <ComboBoxOption value="something">Something</ComboBoxOption>
            <ComboBoxOption value="something else">
              Something else
            </ComboBoxOption>
          </ComboBox>
        </AppShellProvider>
      )
    )
    const user = userEvent.setup()
    const cbox = screen.getByRole("combobox")
    await waitFor(() => {
      user.type(cbox, "a")
      expect(mockOnInputChange).toHaveBeenCalled()
    })
  })

  test("filters options as the user types", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <ComboBox>
            <ComboBoxOption value="aaa" name="aaa">
              aaa
            </ComboBoxOption>
            <ComboBoxOption value="aab" name="aab">
              aab
            </ComboBoxOption>
            <ComboBoxOption value="abc" name="abc">
              abc
            </ComboBoxOption>
            <ComboBoxOption value="123" name="123">
              123
            </ComboBoxOption>
          </ComboBox>
        </AppShellProvider>
      )
    )
    const user = await waitFor(() => userEvent.setup())
    const cbox = screen.getByRole("combobox")
    expect(cbox).toBeInTheDocument()
    await waitFor(() => user.type(cbox, "a"))
    expect(screen.getByRole("listbox")).toBeInTheDocument()
    expect(screen.getByRole("option", { name: "aaa" })).toBeInTheDocument()
    expect(screen.getByRole("option", { name: "aab" })).toBeInTheDocument()
    expect(screen.getByRole("option", { name: "abc" })).toBeInTheDocument()
    expect(
      screen.queryByRole("option", { name: "123" })
    ).not.toBeInTheDocument()

    await waitFor(() => user.type(cbox, "b"))
    expect(
      screen.queryByRole("option", { name: "aaa" })
    ).not.toBeInTheDocument()
    expect(screen.getByRole("option", { name: "aab" })).toBeInTheDocument()
    expect(screen.getByRole("option", { name: "abc" })).toBeInTheDocument()
    expect(
      screen.queryByRole("option", { name: "123" })
    ).not.toBeInTheDocument()
    await waitFor(() => user.clear(cbox))
    expect(screen.getByRole("option", { name: "aaa" })).toBeInTheDocument()
    expect(screen.getByRole("option", { name: "aab" })).toBeInTheDocument()
    expect(screen.getByRole("option", { name: "abc" })).toBeInTheDocument()
    expect(screen.getByRole("option", { name: "123" })).toBeInTheDocument()
    await waitFor(() => user.type(cbox, "1"))
    expect(
      screen.queryByRole("option", { name: "aaa" })
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole("option", { name: "aab" })
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole("option", { name: "abc" })
    ).not.toBeInTheDocument()
    expect(screen.getByRole("option", { name: "123" })).toBeInTheDocument()
  })

  test("selects an option when the user clicks it and closes the menu", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <ComboBox>
            <ComboBoxOption value="aaa" name="aaa">
              aaa
            </ComboBoxOption>
            <ComboBoxOption value="aab" name="aab">
              aab
            </ComboBoxOption>
            <ComboBoxOption value="abc" name="abc">
              abc
            </ComboBoxOption>
            <ComboBoxOption value="123" name="123">
              123
            </ComboBoxOption>
          </ComboBox>
        </AppShellProvider>
      )
    )
    const user = userEvent.setup()
    const cbox = screen.getByRole("combobox")
    const cbutton = screen.getByRole("button")
    expect(cbox).toBeInTheDocument()
    expect(cbutton).toBeInTheDocument()
    await waitFor(() => user.click(cbutton))
    expect(screen.getByRole("listbox")).toBeInTheDocument()

    let option = screen.getByRole("option", { name: "abc" })
    await waitFor(() => user.click(option))
    await waitFor(() => {
      expect(screen.queryByRole("listbox")).not.toBeInTheDocument()
      expect(cbox).toHaveValue("abc")
    })
  })

  test("works as a controlled component with a value as passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <ComboBox value="aab">
            <ComboBoxOption value="aaa" name="aaa">
              aaa
            </ComboBoxOption>
            <ComboBoxOption value="aab" name="aab">
              aab
            </ComboBoxOption>
            <ComboBoxOption value="abc" name="abc">
              abc
            </ComboBoxOption>
            <ComboBoxOption value="123" name="123">
              123
            </ComboBoxOption>
          </ComboBox>
        </AppShellProvider>
      )
    )
    const user = userEvent.setup()
    const cbox = screen.getByRole("combobox")
    const toggle = screen.getByRole("button")
    expect(cbox).toBeInTheDocument()
    expect(toggle).toBeInTheDocument()
    expect(cbox).toHaveValue("aab")
    await waitFor(() => user.click(toggle))

    expect(screen.getByRole("listbox")).toBeInTheDocument()
    const option123 = screen.getAllByRole("option")[3]
    expect(option123).toHaveTextContent("123")
    await waitFor(() => user.click(option123))
    expect(cbox).toHaveValue("123")
  })

  test("works as an uncontrolled component with a defaultValue as passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <ComboBox defaultValue="abc">
            <ComboBoxOption>aaa</ComboBoxOption>
            <ComboBoxOption>aab</ComboBoxOption>
            <ComboBoxOption>abc</ComboBoxOption>
            <ComboBoxOption>123</ComboBoxOption>
          </ComboBox>
        </AppShellProvider>
      )
    )
    const user = userEvent.setup()
    const cbox = screen.getByRole("combobox")
    const toggle = screen.getByRole("button")
    expect(cbox).toBeInTheDocument()
    expect(toggle).toBeInTheDocument()
    expect(cbox).toHaveValue("abc")
    let option123
    await waitFor(() => user.click(toggle))
    expect(screen.getByRole("listbox")).toBeInTheDocument()

    option123 = screen.getAllByRole("option")[3]
    expect(option123).toHaveTextContent("123")

    await waitFor(() => user.click(option123))
    expect(cbox).toHaveValue("123")
  })

  // Caution: The below test basically tests headless-ui behaviour, not our logic. This is here only for testing consistency and so that we know should headless ever change their behaviour:
  test("works as a controlled component using value when both value and defaultValue have been passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <ComboBox defaultValue="option 1" value="option 2">
            <ComboBoxOption value="option 1" />
            <ComboBoxOption value="option 2" />
          </ComboBox>
        </AppShellProvider>
      )
    )
    const cbox = screen.getByRole("combobox")
    expect(cbox).toBeInTheDocument()
    expect(cbox).toHaveValue("option 2")
  })

  test("renders a ComboBox with a custom className as passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <ComboBox className="my-combobox" />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("combobox")).toBeInTheDocument()
    expect(screen.getByRole("combobox")).toHaveClass("my-combobox")
  })

  // Skipping because if we pass generic props to the ComboBox component it will be passed to the abstract headless Combobox component, but will not end up in the DOM:
  // do not eslint

  test.skip("renders all props as passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <ComboBox data-lolo="1234" />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("combobox")).toBeInTheDocument()
    expect(screen.getByRole("combobox")).toHaveAttribute("data-lolo", "1234")
  })
})
