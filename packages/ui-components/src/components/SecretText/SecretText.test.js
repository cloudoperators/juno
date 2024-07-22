/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { SecretText } from "./index"

const mockOnChange = jest.fn()
const mockOnClear = jest.fn()
const mockOnCopy = jest.fn()
const mockOnHide = jest.fn()
const mockOnPaste = jest.fn()
const mockOnReveal = jest.fn()
const mockOnToggle = jest.fn()

describe("SecretText", () => {
  afterEach(() => {
    // Clear all mocks after each test
    jest.clearAllMocks()
  })

  test("renders a SecretText component", async () => {
    render(<SecretText />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveClass("juno-secret-textarea")
  })

  test("renders an autocomplete attribute to the SecretText textarea", async () => {
    render(<SecretText autoComplete="on" />)
    expect(screen.getByRole("textbox")).toHaveAttribute("autoComplete", "on")
  })

  test("renders Clear, Reveal, Copy, and Paste buttons by default", async () => {
    render(<SecretText />)
    expect(screen.getByRole("button", { name: "Clear" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Reveal" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Copy" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Paste" })).toBeInTheDocument()
  })

  test("does not render a Clear button as passed", async () => {
    render(<SecretText clear={false} />)
    expect(
      screen.queryByRole("button", { name: "Clear" })
    ).not.toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Reveal" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Copy" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Paste" })).toBeInTheDocument()
  })

  test("does not render a Reveal button as passed", async () => {
    render(<SecretText toggle={false} />)
    expect(screen.getByRole("button", { name: "Clear" })).toBeInTheDocument()
    expect(
      screen.queryByRole("button", { name: "Reveal" })
    ).not.toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Copy" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Paste" })).toBeInTheDocument()
  })

  test("does not render a Copy button as passed", async () => {
    render(<SecretText copy={false} />)
    expect(screen.getByRole("button", { name: "Clear" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Reveal" })).toBeInTheDocument()
    expect(
      screen.queryByRole("button", { name: "Copy" })
    ).not.toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Paste" })).toBeInTheDocument()
  })

  test("does not render a Paste button as passed", async () => {
    render(<SecretText paste={false} />)
    expect(screen.getByRole("button", { name: "Clear" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Reveal" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Copy" })).toBeInTheDocument()
    expect(
      screen.queryByRole("button", { name: "Paste" })
    ).not.toBeInTheDocument()
  })

  test("renders a Hide button when set to reveal", async () => {
    render(<SecretText reveal />)
    expect(screen.getByRole("button", { name: "Hide" })).toBeInTheDocument()
  })

  test("renders concealed text by default", async () => {
    render(<SecretText />)
    expect(document.querySelector(".juno-secret-cover")).toBeInTheDocument()
  })

  test("renders unconcealed text when set to reveal", async () => {
    render(<SecretText reveal />)
    expect(document.querySelector(".juno-secret-cover")).not.toBeInTheDocument()
  })

  test("renders a disabled SecretText textarea as passed", async () => {
    render(<SecretText disabled />)
    expect(screen.getByRole("textbox")).toBeDisabled()
  })

  test("renders disabled buttons when the whole SecretText is set to disabled", async () => {
    render(<SecretText disabled />)
    expect(screen.getByRole("button", { name: "Clear" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Clear" })).toBeDisabled()
    expect(screen.getByRole("button", { name: "Reveal" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Reveal" })).toBeDisabled()
    expect(screen.getByRole("button", { name: "Paste" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Paste" })).toBeDisabled()
    expect(screen.getByRole("button", { name: "Copy" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Copy" })).toBeDisabled()
  })

  test("renders a disabled Clear button as passed", async () => {
    render(<SecretText disableClear />)
    expect(screen.getByRole("button", { name: "Clear" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Clear" })).toBeDisabled()
  })

  test("renders a disabled Toggle button as passed", async () => {
    render(<SecretText disableToggle />)
    expect(screen.getByRole("button", { name: "Reveal" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Reveal" })).toBeDisabled()
  })

  test("renders a disabled Paste button as passed", async () => {
    render(<SecretText disablePaste />)
    expect(screen.getByRole("button", { name: "Paste" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Paste" })).toBeDisabled()
  })

  test("renders a disabled Copy button as passed", async () => {
    render(<SecretText disableCopy />)
    expect(screen.getByRole("button", { name: "Copy" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Copy" })).toBeDisabled()
  })

  test("renders a label as passed", async () => {
    render(<SecretText label="My Secret Text" required />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(document.querySelector(".juno-label")).toBeInTheDocument()
    expect(document.querySelector(".juno-label")).toHaveTextContent(
      "My Secret Text"
    )
  })

  test("renders an id as passed", async () => {
    render(<SecretText id="my-secrettext-id" />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveAttribute(
      "id",
      "my-secrettext-id"
    )
  })

  test("renders a generated id when no id was passed", async () => {
    render(<SecretText />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveAttribute("id")
  })

  test("associates label with textarea using an id as passed", async () => {
    render(<SecretText label="secret label" id="secret-id" />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveAttribute("id", "secret-id")
    expect(document.querySelector(".juno-label")).toHaveAttribute(
      "for",
      "secret-id"
    )
  })

  test("renders a name attribute as passed", async () => {
    render(<SecretText name="my-secret-name" />)
    expect(screen.getByRole("textbox")).toHaveAttribute(
      "name",
      "my-secret-name"
    )
  })

  test("renders a placeholder as passed", async () => {
    render(<SecretText placeholder="secret text goes here" />)
    expect(screen.getByRole("textbox")).toHaveAttribute(
      "placeholder",
      "secret text goes here"
    )
  })

  test("renders a readOnly textarea as passed", async () => {
    render(<SecretText readOnly />)
    expect(screen.getByRole("textbox")).toHaveAttribute("readOnly")
  })

  test("renders a required SecretText component as passed", async () => {
    render(<SecretText label="My Secret Text" required />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(document.querySelector(".juno-label")).toBeInTheDocument()
    expect(document.querySelector(".juno-required")).toBeInTheDocument()
  })

  test("does not render a Toggle button if passed", async () => {
    render(<SecretText toggle={false} />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveClass("juno-secret-textarea")
    expect(
      screen.queryByRole("button", { name: "Hide" })
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole("button", { name: "Reveal" })
    ).not.toBeInTheDocument()
  })

  test("renders an invalid SecretText", async () => {
    render(<SecretText invalid />)
    expect(screen.getByRole("textbox")).toHaveClass("juno-secret-textarea")
    expect(screen.getByRole("textbox")).toHaveClass("juno-textarea-invalid")
    expect(screen.getByTitle("Dangerous")).toBeInTheDocument()
  })

  test("renders a valid SecretText", async () => {
    render(<SecretText valid />)
    expect(screen.getByRole("textbox")).toHaveClass("juno-secret-textarea")
    expect(screen.getByRole("textbox")).toHaveClass("juno-textarea-valid")
    expect(screen.getByTitle("CheckCircle")).toBeInTheDocument()
  })

  test("renders an errortext as passed", async () => {
    render(<SecretText errortext="This is an errortext" />)
    expect(document.querySelector(".juno-form-hint")).toBeInTheDocument()
    expect(document.querySelector(".juno-form-hint")).toHaveClass(
      "juno-form-hint-error"
    )
    expect(document.querySelector(".juno-form-hint")).toHaveTextContent(
      "This is an errortext"
    )
  })

  test("renders an helptext as passed", async () => {
    render(<SecretText helptext="This is a helptext" />)
    expect(document.querySelector(".juno-form-hint")).toBeInTheDocument()
    expect(document.querySelector(".juno-form-hint")).toHaveClass(
      "juno-form-hint-help"
    )
    expect(document.querySelector(".juno-form-hint")).toHaveTextContent(
      "This is a helptext"
    )
  })

  test("renders an successtext as passed", async () => {
    render(<SecretText successtext="This is a successtext" />)
    expect(document.querySelector(".juno-form-hint")).toBeInTheDocument()
    expect(document.querySelector(".juno-form-hint")).toHaveClass(
      "juno-form-hint-success"
    )
    expect(document.querySelector(".juno-form-hint")).toHaveTextContent(
      "This is a successtext"
    )
  })

  test("renders a value as passed", async () => {
    render(<SecretText value="my secret text" />)
    expect(screen.getByRole("textbox")).toHaveValue("my secret text")
  })

  test("clears the SecretText when the user clicks the Clear button", async () => {
    render(<SecretText value="some secret text" />)
    const user = userEvent.setup()
    const secretTextarea = screen.getByRole("textbox")
    const clearButton = screen.getByRole("button", { name: "Clear" })
    expect(secretTextarea.value).toBe("some secret text")
    await user.click(clearButton)
    expect(secretTextarea.value).toBe("")
  })

  test("toggles the secret's visibility when the user clicks the toggle button", async () => {
    render(<SecretText />)
    const user = userEvent.setup()
    const toggle = screen.getByRole("button", { name: "Reveal" })
    expect(document.querySelector(".juno-secret-cover")).toBeInTheDocument()
    await user.click(toggle)
    expect(document.querySelector(".juno-secret-cover")).not.toBeInTheDocument()
  })

  test("copies the SecretText content to the clipboard", async () => {
    const user = userEvent.setup()
    render(<SecretText value="some secret text" />)
    const copyButton = screen.getByRole("button", { name: "Copy" })
    await user.click(copyButton)
    const textInClipboard = await navigator.clipboard.readText()
    expect(textInClipboard).toBe("some secret text")
  })

  test("pastes a text from the clipboard", async () => {
    const user = userEvent.setup()
    navigator.clipboard.writeText("text in clipboard")
    render(<SecretText />)
    const pasteButton = screen.getByRole("button", { name: "Paste" })
    const secretTextarea = screen.getByRole("textbox")
    await user.click(pasteButton)
    await waitFor(() => {
      expect(secretTextarea.value).toBe("text in clipboard")
    })
  })

  test("updates the SecretText value when the user types into the textarea", async () => {
    render(<SecretText reveal />)
    const user = userEvent.setup()
    const textarea = screen.getByRole("textbox")
    await user.type(textarea, "some nice text here")
    expect(textarea.value).toBe("some nice text here")
  })

  test("does not render a Clear nor a Paste button when set to readOnly", async () => {
    render(<SecretText readOnly />)
    expect(
      screen.queryByRole("button", { name: "Clear" })
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole("button", { name: "Paste" })
    ).not.toBeInTheDocument()
  })

  test("renders a Secrettext that can not be edited when readOnly is passed", async () => {
    render(<SecretText value="abc" readOnly />)
    const user = userEvent.setup()
    const textarea = screen.getByRole("textbox")
    await user.type(textarea, "some nice text here")
    expect(textarea.value).toBe("abc")
  })

  test("runs an onChange callback when the user types into the SecretText", async () => {
    render(<SecretText reveal onChange={mockOnChange} />)
    const user = userEvent.setup()
    const textarea = screen.getByRole("textbox")
    await user.type(textarea, "a")
    expect(mockOnChange).toHaveBeenCalled()
  })

  test("runs an onClear callback when the user clears the SecretText using the Clear button", async () => {
    render(<SecretText value="some secret text" onClear={mockOnClear} />)
    const user = userEvent.setup()
    const clearButton = screen.getByRole("button", { name: "Clear" })
    await user.click(clearButton)
    expect(mockOnClear).toHaveBeenCalled()
  })

  test("runs an onCopy callback when the user copies the SecretText using the Copy button", async () => {
    render(<SecretText value="some secret text" onCopy={mockOnCopy} />)
    const user = userEvent.setup()
    const copyButton = screen.getByRole("button", { name: "Copy" })
    await user.click(copyButton)
    expect(mockOnCopy).toHaveBeenCalled()
  })

  test("runs an onPaste callback when the user pastes from the clipboard using the Paste button", async () => {
    const user = userEvent.setup()
    navigator.clipboard.writeText("text in clipboard")
    render(<SecretText onPaste={mockOnPaste} />)
    const pasteButton = screen.getByRole("button", { name: "Paste" })
    await user.click(pasteButton)
    await waitFor(() => {
      expect(mockOnPaste).toHaveBeenCalled()
    })
  })

  test("runs an onReveal callback when the user reveals the SecretText using the toggle button", async () => {
    render(<SecretText value="some secret text" onReveal={mockOnReveal} />)
    const user = userEvent.setup()
    const toggleButton = screen.getByRole("button", { name: "Reveal" })
    await user.click(toggleButton)
    expect(mockOnReveal).toHaveBeenCalled()
  })

  test("runs an onHide callback when the user hides the SecretText using the toggle button", async () => {
    render(<SecretText value="some secret text" onHide={mockOnHide} reveal />)
    const user = userEvent.setup()
    const toggleButton = screen.getByRole("button", { name: "Hide" })
    await user.click(toggleButton)
    expect(mockOnHide).toHaveBeenCalled()
  })

  test("runs an onToggle callback when the user reveals or hides the SecretText using the toggle button", async () => {
    render(<SecretText value="some secret text" onToggle={mockOnToggle} />)
    const user = userEvent.setup()
    const toggleButton = screen.getByRole("button", { name: "Reveal" })
    // reveal the secret
    await user.click(toggleButton)
    expect(mockOnToggle).toHaveBeenCalled()
    // hide the secret again
    await user.click(toggleButton)
    expect(mockOnToggle).toHaveBeenCalled()
  })

  test("renders a className as passed", async () => {
    render(<SecretText className="my-custom-class" />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveClass("my-custom-class")
  })

  test("renders other props as passed", async () => {
    render(<SecretText data-lolol="527" />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveAttribute("data-lolol", "527")
  })

  test("renders a wrapperClassName to the outermost wrapping element", async () => {
    render(<SecretText wrapperClassName="my-wrapper-class" />)
    expect(document.querySelector(".my-wrapper-class")).toBeInTheDocument()
  })
})
