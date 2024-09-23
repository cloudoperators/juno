/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import { TextInput } from "./index"

describe("TextInput", () => {
  test("renders a html default text input with no type attribute", () => {
    render(<TextInput />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).not.toHaveAttribute("type")
  })

  test("renders a text input with a name as passed", () => {
    render(<TextInput name="My TextInput" />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveAttribute("name", "My TextInput")
  })

  test("renders a text input with a value as passed", () => {
    render(<TextInput value="Some kind of value" />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveAttribute("value", "Some kind of value")
  })

  test("renders a label as passed", () => {
    render(<TextInput label="The Label" id="my-textinput" />)
    expect(document.querySelector(".juno-label")).toBeInTheDocument()
    expect(document.querySelector(".juno-label")).toHaveTextContent("The Label")
  })

  test("renders a text input with an id as passed", () => {
    render(<TextInput id="my-textinput" />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveAttribute("id", "my-textinput")
  })

  test("renders a text input with an auto-generated id if no id is passed", () => {
    render(<TextInput />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveAttribute("id")
    expect(screen.getByRole("textbox").getAttribute("id")).toMatch("juno-textinput")
  })

  test("renders a text input with a label associated by an id as passed", () => {
    render(<TextInput label="TextInput goes here" id="ti-1" />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveAttribute("id")
    expect(screen.getByRole("textbox").getAttribute("id")).toMatch("ti-1")
    expect(screen.getByLabelText("TextInput goes here")).toBeInTheDocument()
  })

  test("renders a text input with a label associated by an auto-generated id if no id was passed", () => {
    render(<TextInput label="This is a TextInput" />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByLabelText("This is a TextInput")).toBeInTheDocument()
  })

  test("renders a placeholder as passed", () => {
    render(<TextInput placeholder="my placeholder" />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveAttribute("placeholder", "my placeholder")
  })

  // resort to using a testId since <input type=""password" has no accessible wai-aria role:
  test("renders a password input as passed", () => {
    render(<TextInput type="password" data-testid="pw" />)
    expect(screen.getByTestId("pw")).toBeInTheDocument()
    expect(screen.getByTestId("pw")).toHaveAttribute("type", "password")
  })

  test("renders an email input as passed", () => {
    render(<TextInput type="email" />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveAttribute("type", "email")
  })

  test("renders a telephone number input as passed", () => {
    render(<TextInput type="tel" />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveAttribute("type", "tel")
  })

  test("renders an url input as passed", () => {
    render(<TextInput type="url" />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveAttribute("type", "url")
  })

  test("renders a number input as passed", () => {
    render(<TextInput type="number" />)
    expect(screen.getByRole("spinbutton")).toBeInTheDocument()
    expect(screen.getByRole("spinbutton")).toHaveAttribute("type", "number")
  })

  test("renders a disabled input as passed", () => {
    render(<TextInput disabled />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toBeDisabled()
  })

  test("renders a readonly input as passed", () => {
    render(<TextInput readOnly />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveAttribute("readonly")
  })

  test("renders a focussed input as passed", () => {
    render(<TextInput autoFocus />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveFocus()
  })

  test("renders an invalid input as passed", () => {
    render(<TextInput invalid />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveClass("juno-textinput-invalid")
    expect(screen.getByTitle("Dangerous")).toBeInTheDocument()
  })

  test("renders a valid input as passed", () => {
    render(<TextInput valid />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveClass("juno-textinput-valid")
    expect(screen.getByTitle("CheckCircle")).toBeInTheDocument()
  })

  test("renders a helptext as passed", () => {
    render(<TextInput helptext="this is a helptext" />)
    expect(document.querySelector(".juno-form-hint")).toBeInTheDocument()
    expect(document.querySelector(".juno-form-hint")).toHaveClass("juno-form-hint-help")
    expect(document.querySelector(".juno-form-hint")).toHaveTextContent("this is a helptext")
  })

  test("renders a successtext as passed and validates the Element", () => {
    render(<TextInput successtext="great success!" />)
    expect(document.querySelector(".juno-form-hint")).toBeInTheDocument()
    expect(document.querySelector(".juno-form-hint")).toHaveClass("juno-form-hint-success")
    expect(document.querySelector(".juno-form-hint")).toHaveTextContent("great success!")
    expect(screen.getByRole("textbox")).toHaveClass("juno-textinput-valid")
  })

  test("renders an errortext as passed and invalidates the Element", () => {
    render(<TextInput errortext="this is an error!" />)
    expect(document.querySelector(".juno-form-hint")).toBeInTheDocument()
    expect(document.querySelector(".juno-form-hint")).toHaveClass("juno-form-hint-error")
    expect(document.querySelector(".juno-form-hint")).toHaveTextContent("this is an error!")
    expect(screen.getByRole("textbox")).toHaveClass("juno-textinput-invalid")
  })

  test("fires onChange handler as passed", () => {
    const handleChange = vi.fn()
    render(<TextInput onChange={handleChange} data-testid="my-input" />)
    const textinput = screen.getByRole("textbox")
    fireEvent.change(textinput, { target: { value: "a" } })
    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  test("does not fire onChange handler when disabled", () => {
    const onChangeSpy = vi.fn()
    render(<TextInput onChange={onChangeSpy} disabled />)
    screen.getByRole("textbox").click()
    expect(onChangeSpy).not.toHaveBeenCalled()
  })

  test("renders a wrapperClassName to the outer wrapper element", () => {
    render(<TextInput wrapperClassName="my-wrapper-class" />)
    expect(document.querySelector(".juno-textinput-wrapper")).toBeInTheDocument()
    expect(document.querySelector(".juno-textinput-wrapper")).toHaveClass("my-wrapper-class")
  })

  test("renders a className as passed", () => {
    render(<TextInput className="my-custom-class" />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveClass("my-custom-class")
  })

  test("renders other props as passed", () => {
    render(<TextInput data-lolol="527" />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveAttribute("data-lolol", "527")
  })
})
