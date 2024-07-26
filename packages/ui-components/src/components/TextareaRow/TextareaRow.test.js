/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import { TextareaRow } from "./index"

globalThis.console.warn = jest.fn()

describe("TextInputRow", () => {
  test("renders a textarea row", async () => {
    render(<TextareaRow data-testid="textarea-row" />)
    expect(console.warn).toHaveBeenCalledTimes(1)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
  })

  test("renders a value as passed", async () => {
    render(<TextareaRow value="Some value in the textarea" />)
    expect(screen.getByText("Some value in the textarea")).toBeInTheDocument()
  })

  test("renders a name attribute as passed", async () => {
    render(<TextareaRow name="my-textarea-row" />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveAttribute("name", "my-textarea-row")
  })

  test("renders a textarea row with a textarea and an associated label with an id as passed", async () => {
    render(<TextareaRow data-testid="textarea-row" label="My Textarea Row" id="text-area-row" />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByLabelText("My Textarea Row")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveAttribute("id", "text-area-row")
  })

  test("redners a placeholder as passed", async () => {
    render(<TextareaRow placeholder="Some placeholder text" />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveAttribute("placeholder", "Some placeholder text")
  })

  test("renders a help text as passed", async () => {
    render(<TextareaRow helptext="Helptext goes here" />)
    expect(screen.getByText("Helptext goes here")).toBeInTheDocument()
  })

  test("renders a helpt text with a link as passed", async () => {
    render(<TextareaRow helptext={<a href="#">Link</a>} />)
    expect(screen.getByRole("link")).toBeInTheDocument()
    expect(screen.getByRole("link")).toHaveAttribute("href", "#")
    expect(screen.getByRole("link")).toHaveTextContent("Link")
  })

  test("renders a required label as passed", async () => {
    render(<TextareaRow label="Required Textarea" required />)
    expect(document.querySelector(".juno-required")).toBeInTheDocument()
  })

  test("renders a disabled textarea row as passed", async () => {
    render(<TextareaRow label="Disabled Textarea" disabled />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toBeDisabled()
  })

  test("renders an invalid TextAreaRow as passed", async () => {
    render(<TextareaRow invalid />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveClass("juno-textarea-invalid")
    expect(screen.getByTitle("Dangerous")).toBeInTheDocument()
  })

  test("renders an invalid TextAreaRow with an error text as passed", async () => {
    render(<TextareaRow errortext="This is an error text" />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveClass("juno-textarea-invalid")
    expect(screen.getByText("This is an error text")).toBeInTheDocument()
    expect(screen.getByTitle("Dangerous")).toBeInTheDocument()
  })

  test("renders a valid TextAreaRow as passed", async () => {
    render(<TextareaRow valid />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveClass("juno-textarea-valid")
    expect(screen.getByTitle("CheckCircle")).toBeInTheDocument()
  })

  test("renders an valid TextAreaRow with a success text as passed", async () => {
    render(<TextareaRow successtext="This is a success text" />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveClass("juno-textarea-valid")
    expect(screen.getByText("This is a success text")).toBeInTheDocument()
    expect(screen.getByTitle("CheckCircle")).toBeInTheDocument()
  })

  test("renders a className to the row as passed", async () => {
    render(<TextareaRow data-testid="textarea-row" className="my-custom-class" />)
    expect(screen.getByTestId("textarea-row")).toHaveClass("my-custom-class")
  })

  test("renders all props to teh row as passed", async () => {
    render(<TextareaRow data-testid="textarea-row" data-lolol="some-props" />)
    expect(screen.getByTestId("textarea-row")).toHaveAttribute("data-lolol", "some-props")
  })

  test("fires onChange handler as passed", async () => {
    const handleChange = jest.fn()
    render(<TextareaRow onChange={handleChange} />)
    const textarea = screen.getByRole("textbox")
    fireEvent.change(textarea, { target: { value: "test value a" } })
    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith(
      expect.objectContaining({
        _reactName: "onChange",
        target: expect.objectContaining({
          value: "test value a",
        }),
        type: "change",
      })
    )
  })
})
