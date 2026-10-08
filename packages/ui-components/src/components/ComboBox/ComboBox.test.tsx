/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { cleanup, render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { ComboBox } from "./index"
import { AppShellProvider } from "../AppShellProvider/AppShellProvider.component"
import { ComboBoxOption } from "../ComboBoxOption/index"

const mockOnBlur = vi.fn()
const mockOnChange = vi.fn()
const mockOnFocus = vi.fn()
const mockOnInputChange = vi.fn()

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

describe("ComboBox", () => {
  afterEach(() => {
    cleanup()
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
    expect(document.querySelector("input[name='my-wonderful-combobox']")).toBeInTheDocument()
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
    render(
      <AppShellProvider shadowRoot={false}>
        <ComboBox>
          <ComboBoxOption value="Option 1">Option 1</ComboBoxOption>
        </ComboBox>
      </AppShellProvider>
    )
    const user = userEvent.setup()
    const cbox = screen.getByRole("combobox")
    const cbutton = screen.getByRole("button")
    expect(cbox).toBeInTheDocument()
    expect(cbutton).toBeInTheDocument()
    await user.click(cbutton)
    expect(await screen.findByRole("listbox")).toBeInTheDocument()
    expect(await screen.findByRole("option")).toHaveTextContent("Option 1")
  })

  test("renders an id as passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <ComboBox id="my-id" />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("combobox")).toBeInTheDocument()
    expect(screen.getByRole("combobox")).toHaveAttribute("id", "my-id")
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
    expect(label!.getAttribute("for")).toMatch(cbox.getAttribute("id")!)
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
    expect(screen.getByRole("combobox")).toHaveAttribute("aria-label", "my aria-label")
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
    expect(screen.getByRole("combobox")).toHaveAttribute("aria-label", "My Label")
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
    expect(screen.getByRole("combobox")).toHaveAttribute("placeholder", "My Placeholder")
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
    expect(document.querySelector(".juno-form-hint")).toHaveClass("juno-form-hint-help")
    expect(document.querySelector(".juno-form-hint")).toHaveTextContent("A helptext goes here")
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
    expect(document.querySelector(".juno-form-hint")).toHaveClass("juno-form-hint-error")
    expect(document.querySelector(".juno-form-hint")).toHaveTextContent("An errortext goes here")
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
    expect(document.querySelector(".juno-form-hint")).toHaveClass("juno-form-hint-success")
    expect(document.querySelector(".juno-form-hint")).toHaveTextContent("A successtext goes here")
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
    await waitFor(async () => {
      await user.click(cbox) // focus the element
      await user.tab() // blur the element
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
    await waitFor(async () => {
      await user.click(screen.getByRole("option", { name: "Option 2" }))
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
    await waitFor(async () => {
      await user.click(cbox)
      expect(mockOnFocus).toHaveBeenCalled()
    })
  })

  test("fires an onInputChange handler when the user types into the ComboBox", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <ComboBox onInputChange={mockOnInputChange}>
            <ComboBoxOption value="something">Something</ComboBoxOption>
            <ComboBoxOption value="something else">Something else</ComboBoxOption>
          </ComboBox>
        </AppShellProvider>
      )
    )
    const user = userEvent.setup()
    const cbox = screen.getByRole("combobox")
    await waitFor(async () => {
      await user.type(cbox, "a")
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
    expect(screen.queryByRole("option", { name: "123" })).not.toBeInTheDocument()

    await waitFor(() => user.type(cbox, "b"))
    expect(screen.queryByRole("option", { name: "aaa" })).not.toBeInTheDocument()
    expect(screen.getByRole("option", { name: "aab" })).toBeInTheDocument()
    expect(screen.getByRole("option", { name: "abc" })).toBeInTheDocument()
    expect(screen.queryByRole("option", { name: "123" })).not.toBeInTheDocument()

    await waitFor(() => user.clear(cbox))
    expect(screen.getByRole("option", { name: "aaa" })).toBeInTheDocument()
    expect(screen.getByRole("option", { name: "aab" })).toBeInTheDocument()
    expect(screen.getByRole("option", { name: "abc" })).toBeInTheDocument()
    expect(screen.getByRole("option", { name: "123" })).toBeInTheDocument()

    await waitFor(() => user.type(cbox, "1"))
    expect(screen.queryByRole("option", { name: "aaa" })).not.toBeInTheDocument()
    expect(screen.queryByRole("option", { name: "aab" })).not.toBeInTheDocument()
    expect(screen.queryByRole("option", { name: "abc" })).not.toBeInTheDocument()
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

    const option = screen.getByRole("option", { name: "abc" })
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
    await waitFor(() => user.click(toggle))
    expect(screen.getByRole("listbox")).toBeInTheDocument()

    const option123 = screen.getAllByRole("option")[3]
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

  test("renders a wrapperClassName to the outer wrapping <div> element", () => {
    render(
      <AppShellProvider shadowRoot={false}>
        <ComboBox wrapperClassName="my-wrapper-class" />
      </AppShellProvider>
    )

    expect(document.querySelector(".juno-combobox-wrapper")).toBeInTheDocument()
    expect(document.querySelector(".juno-combobox-wrapper")).toHaveClass("my-wrapper-class")
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

  test("clears internal state when controlled value prop becomes empty", async () => {
    const { rerender } = render(
      <AppShellProvider shadowRoot={false}>
        <ComboBox value="option1">
          <ComboBoxOption value="option1" label="Option 1" />
          <ComboBoxOption value="option2" label="Option 2" />
        </ComboBox>
      </AppShellProvider>
    )

    const input = screen.getByRole("combobox")
    // When controlled with value="option1", it shows the value
    expect(input).toHaveValue("option1")

    // Rerender updates the same component instance with new props (simulating what supernova does)
    // Update value prop to empty (simulating what supernova does after selection)
    rerender(
      <AppShellProvider shadowRoot={false}>
        <ComboBox value="">
          <ComboBoxOption value="option1" label="Option 1" />
          <ComboBoxOption value="option2" label="Option 2" />
        </ComboBox>
      </AppShellProvider>
    )

    // Should clear the value
    await waitFor(() => {
      expect(input).toHaveValue("")
    })
  })

  test("updates displayed value when controlled value prop changes to a new value", async () => {
    const { rerender } = render(
      <AppShellProvider shadowRoot={false}>
        <ComboBox value="option1">
          <ComboBoxOption value="option1" label="Option 1" />
          <ComboBoxOption value="option2" label="Option 2" />
        </ComboBox>
      </AppShellProvider>
    )

    const input = screen.getByRole("combobox")
    expect(input).toHaveValue("option1")

    // Rerender updates the same component instance with new props
    // Update value prop to a different value
    rerender(
      <AppShellProvider shadowRoot={false}>
        <ComboBox value="option2">
          <ComboBoxOption value="option1" label="Option 1" />
          <ComboBoxOption value="option2" label="Option 2" />
        </ComboBox>
      </AppShellProvider>
    )

    // Should update to the new value
    await waitFor(() => {
      expect(input).toHaveValue("option2")
    })
  })

  test("uncontrolled combobox: select option and it remains visible in the display", async () => {
    const user = userEvent.setup()
    const mockOnChange = vi.fn()

    render(
      <AppShellProvider shadowRoot={false}>
        <ComboBox onChange={mockOnChange}>
          <ComboBoxOption value="option1" label="Option 1" />
          <ComboBoxOption value="option2" label="Option 2" />
          <ComboBoxOption value="option3" label="Option 3" />
        </ComboBox>
      </AppShellProvider>
    )

    const input = screen.getByRole("combobox")
    expect(input).toHaveValue("")

    // Click to open dropdown
    await user.click(input)
    await waitFor(() => expect(screen.getByRole("listbox")).toBeInTheDocument())

    // Select an option
    await user.click(screen.getByRole("option", { name: "Option 2" }))

    // onChange should be called
    expect(mockOnChange).toHaveBeenCalledWith("option2")

    // Dropdown should close
    await waitFor(() => expect(screen.queryByRole("listbox")).not.toBeInTheDocument())

    // The selected value should remain visible in uncontrolled mode (displays the label)
    expect(input).toHaveValue("Option 2")
  })

  test("uncontrolled combobox: query resets after selecting a filtered option", async () => {
    const user = userEvent.setup()

    render(
      <AppShellProvider shadowRoot={false}>
        <ComboBox>
          <ComboBoxOption value="apple">Apple</ComboBoxOption>
          <ComboBoxOption value="banana">Banana</ComboBoxOption>
          <ComboBoxOption value="cherry">Cherry</ComboBoxOption>
        </ComboBox>
      </AppShellProvider>
    )

    const input = screen.getByRole("combobox")

    // Type a search that excludes Apple and Cherry (only Banana contains "ban")
    await user.type(input, "ban")
    await waitFor(() => {
      expect(screen.getByRole("listbox")).toBeInTheDocument()
      expect(screen.queryByRole("option", { name: "Apple" })).not.toBeInTheDocument()
      expect(screen.getByRole("option", { name: "Banana" })).toBeInTheDocument()
      expect(screen.queryByRole("option", { name: "Cherry" })).not.toBeInTheDocument()
    })

    // Select Banana - this triggers setQuery("") in handleChange
    await user.click(screen.getByRole("option", { name: "Banana" }))

    // Dropdown should close and show selected value
    await waitFor(() => {
      expect(screen.queryByRole("listbox")).not.toBeInTheDocument()
      expect(input).toHaveValue("Banana")
    })

    // Clear input value and click to reopen dropdown
    // If setQuery("") wasn't called in handleChange, the old filter "ban" would still be active
    await user.clear(input)
    await user.click(input)

    // All options should be visible because query was reset to "" when Banana was selected
    await waitFor(() => {
      expect(screen.getByRole("listbox")).toBeInTheDocument()
      expect(screen.getByRole("option", { name: "Apple" })).toBeInTheDocument()
      expect(screen.getByRole("option", { name: "Banana" })).toBeInTheDocument()
      expect(screen.getByRole("option", { name: "Cherry" })).toBeInTheDocument()
    })
  })

  test("honors explicitly cleared controlled value over defaultValue", async () => {
    const { rerender } = render(
      <AppShellProvider shadowRoot={false}>
        <ComboBox value="option1" defaultValue="option1">
          <ComboBoxOption value="option1" label="Option 1" />
          <ComboBoxOption value="option2" label="Option 2" />
        </ComboBox>
      </AppShellProvider>
    )

    const input = screen.getByRole("combobox")
    expect(input).toHaveValue("option1")

    // Explicitly clear the controlled value while defaultValue is still nonempty
    rerender(
      <AppShellProvider shadowRoot={false}>
        <ComboBox value="" defaultValue="option1">
          <ComboBoxOption value="option1" label="Option 1" />
          <ComboBoxOption value="option2" label="Option 2" />
        </ComboBox>
      </AppShellProvider>
    )

    // Should show empty value, not fall back to defaultValue
    await waitFor(() => {
      expect(input).toHaveValue("")
    })
  })

  test("honors initially empty controlled value over defaultValue", () => {
    render(
      <AppShellProvider shadowRoot={false}>
        <ComboBox value="" defaultValue="option1">
          <ComboBoxOption value="option1" label="Option 1" />
          <ComboBoxOption value="option2" label="Option 2" />
        </ComboBox>
      </AppShellProvider>
    )

    const input = screen.getByRole("combobox")
    // Should show empty value because value="" was explicitly supplied, not defaultValue
    expect(input).toHaveValue("")
  })

  test("closes dropdown when controlled value is cleared while menu is open", async () => {
    const user = userEvent.setup()
    const { rerender } = render(
      <AppShellProvider shadowRoot={false}>
        <ComboBox value="option1">
          <ComboBoxOption value="option1" label="Option 1" />
          <ComboBoxOption value="option2" label="Option 2" />
        </ComboBox>
      </AppShellProvider>
    )

    const input = screen.getByRole("combobox")

    // Open the dropdown while value is set
    await user.click(input)
    await waitFor(() => {
      expect(screen.getByRole("listbox")).toBeInTheDocument()
    })

    // Clear the controlled value while menu is open
    rerender(
      <AppShellProvider shadowRoot={false}>
        <ComboBox value="">
          <ComboBoxOption value="option1" label="Option 1" />
          <ComboBoxOption value="option2" label="Option 2" />
        </ComboBox>
      </AppShellProvider>
    )

    // Dropdown should close and aria-expanded should be false
    await waitFor(() => {
      expect(screen.queryByRole("listbox")).not.toBeInTheDocument()
      expect(input).toHaveAttribute("aria-expanded", "false")
      expect(input).toHaveValue("")
    })
  })

  test("resets query and restores all options when controlled value is cleared after filtering", async () => {
    const user = userEvent.setup()
    const { rerender } = render(
      <AppShellProvider shadowRoot={false}>
        <ComboBox value="">
          <ComboBoxOption value="apple">Apple</ComboBoxOption>
          <ComboBoxOption value="banana">Banana</ComboBoxOption>
          <ComboBoxOption value="cherry">Cherry</ComboBoxOption>
        </ComboBox>
      </AppShellProvider>
    )

    const input = screen.getByRole("combobox")
    const toggle = screen.getByRole("button")

    // Type a query that filters to only one option
    await user.type(input, "ban")
    await waitFor(() => {
      expect(screen.getByRole("listbox")).toBeInTheDocument()
      expect(screen.queryByRole("option", { name: "Apple" })).not.toBeInTheDocument()
      expect(screen.getByRole("option", { name: "Banana" })).toBeInTheDocument()
      expect(screen.queryByRole("option", { name: "Cherry" })).not.toBeInTheDocument()
    })

    // Select the filtered option
    await user.click(screen.getByRole("option", { name: "Banana" }))

    // Simulate controlled component setting the value
    rerender(
      <AppShellProvider shadowRoot={false}>
        <ComboBox value="banana">
          <ComboBoxOption value="apple">Apple</ComboBoxOption>
          <ComboBoxOption value="banana">Banana</ComboBoxOption>
          <ComboBoxOption value="cherry">Cherry</ComboBoxOption>
        </ComboBox>
      </AppShellProvider>
    )

    await waitFor(() => {
      expect(input).toHaveValue("Banana")
    })

    // Now clear the controlled value (simulating what supernova does)
    rerender(
      <AppShellProvider shadowRoot={false}>
        <ComboBox value="">
          <ComboBoxOption value="apple">Apple</ComboBoxOption>
          <ComboBoxOption value="banana">Banana</ComboBoxOption>
          <ComboBoxOption value="cherry">Cherry</ComboBoxOption>
        </ComboBox>
      </AppShellProvider>
    )

    // Value should be cleared and query should be reset
    await waitFor(() => {
      expect(input).toHaveValue("")
    })

    // Reopen the dropdown using the toggle button and verify all options are present (query was reset)
    await user.click(toggle)
    await waitFor(() => {
      expect(screen.getByRole("listbox")).toBeInTheDocument()
      expect(screen.getByRole("option", { name: "Apple" })).toBeInTheDocument()
      expect(screen.getByRole("option", { name: "Banana" })).toBeInTheDocument()
      expect(screen.getByRole("option", { name: "Cherry" })).toBeInTheDocument()
    })
  })
})
