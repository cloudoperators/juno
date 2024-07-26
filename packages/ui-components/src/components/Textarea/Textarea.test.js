/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import { Textarea } from "./index"

describe("Textarea", () => {
  test("renders a native html textarea", async () => {
    render(<Textarea />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
  })

  test("renders a name as passed", async () => {
    render(<Textarea name="my-textarea" />)
    expect(screen.getByRole("textbox")).toHaveAttribute("name", "my-textarea")
  })

  test("renders text content as passed", async () => {
    render(<Textarea value="Test some text" />)
    expect(screen.getByRole("textbox")).toHaveTextContent("Test some text")
  })

  test("renders a label as passed", async () => {
    render(<Textarea label="The Label" id="my-textarea" />)
    // implicitly test whether the textarea element can be selected via the labels text:
    expect(screen.getByLabelText("The Label")).toBeInTheDocument()
    expect(document.querySelector(".juno-label")).toBeInTheDocument()
    expect(document.querySelector(".juno-label")).toHaveTextContent("The Label")
  })

  test("renders a Textarea with an id as passed", async () => {
    render(<Textarea id="my-textarea" />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveAttribute("id", "my-textarea")
  })

  test("renders a Textarea with an auto-generated id if no id is passed", async () => {
    render(<Textarea />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveAttribute("id")
    expect(screen.getByRole("textbox").getAttribute("id")).toMatch("juno-textarea")
  })

  test("renders a Textarea with a label associated by an id as passed", async () => {
    render(<Textarea label="My Textarea" id="ta-1" />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveAttribute("id")
    expect(screen.getByRole("textbox").getAttribute("id")).toMatch("ta-1")
    expect(screen.getByLabelText("My Textarea")).toBeInTheDocument()
  })

  test("renders a Textarea with a label associated by an auto-generated id if no id was passed", async () => {
    render(<Textarea label="This is a Textarea" />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByLabelText("This is a Textarea")).toBeInTheDocument()
  })

  test("renders an invalid textarea as passed", async () => {
    render(<Textarea invalid />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveClass("juno-textarea-invalid")
    expect(screen.getByTitle("Dangerous")).toBeInTheDocument()
  })

  test("renders a valid textarea as passed", async () => {
    render(<Textarea valid />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveClass("juno-textarea-valid")
    expect(screen.getByTitle("CheckCircle")).toBeInTheDocument()
  })

  test("renders a placeholder as passed", async () => {
    render(<Textarea placeholder="My placeholder" />)
    expect(screen.getByRole("textbox")).toHaveAttribute("placeholder", "My placeholder")
  })

  test("renders a disabled textarea as passed", async () => {
    render(<Textarea disabled />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toBeDisabled()
  })

  test("renders autocomplete on as passed", async () => {
    render(<Textarea autoComplete="on" />)
    expect(screen.getByRole("textbox")).toHaveAttribute("autocomplete", "on")
  })

  test("renders autofocus as passed", async () => {
    render(<Textarea autoFocus />)
    expect(screen.getByRole("textbox")).toHaveFocus()
  })

  test("renders a helptext as passed", async () => {
    render(<Textarea helptext="this is a helptext" />)
    expect(document.querySelector(".juno-form-hint")).toBeInTheDocument()
    expect(document.querySelector(".juno-form-hint")).toHaveClass("juno-form-hint-help")
    expect(document.querySelector(".juno-form-hint")).toHaveTextContent("this is a helptext")
  })

  test("renders a successtext as passed and validates the Element", async () => {
    render(<Textarea successtext="great success!" />)
    expect(document.querySelector(".juno-form-hint")).toBeInTheDocument()
    expect(document.querySelector(".juno-form-hint")).toHaveClass("juno-form-hint-success")
    expect(document.querySelector(".juno-form-hint")).toHaveTextContent("great success!")
    expect(screen.getByRole("textbox")).toHaveClass("juno-textarea-valid")
  })

  test("renders an errortext as passed and invalidates the Element", async () => {
    render(<Textarea errortext="this is an error!" />)
    expect(document.querySelector(".juno-form-hint")).toBeInTheDocument()
    expect(document.querySelector(".juno-form-hint")).toHaveClass("juno-form-hint-error")
    expect(document.querySelector(".juno-form-hint")).toHaveTextContent("this is an error!")
    expect(screen.getByRole("textbox")).toHaveClass("juno-textarea-invalid")
  })

  test("fires onChange handler as passed", async () => {
    const handleChange = jest.fn()
    render(<Textarea onChange={handleChange} />)
    const textarea = screen.getByRole("textbox")
    fireEvent.change(textarea, { target: { value: "a" } })
    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  test("does not fire onChange handler when disabled", async () => {
    const onChangeSpy = jest.fn()
    render(<Textarea onChange={onChangeSpy} disabled />)
    screen.getByRole("textbox").click()
    expect(onChangeSpy).not.toHaveBeenCalled()
  })

  test("renders a className as passed", async () => {
    render(<Textarea className="my-custom-class" />)
    expect(screen.getByRole("textbox")).toHaveClass("my-custom-class")
  })

  test("renders other props as passed", async () => {
    render(<Textarea cols="100" rows="25" minLength="0" maxLength="100" />)
    expect(screen.getByRole("textbox")).toHaveAttribute("cols", "100")
    expect(screen.getByRole("textbox")).toHaveAttribute("rows", "25")
    expect(screen.getByRole("textbox")).toHaveAttribute("minlength", "0")
    expect(screen.getByRole("textbox")).toHaveAttribute("maxlength", "100")
  })
})
