/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen, act } from "@testing-library/react"
import { Radio } from "./index"

describe("Radio", () => {
  test("renders an html input type radio", () => {
    render(<Radio />)
    expect(screen.getByRole("radio")).toBeInTheDocument()
    expect(screen.getByRole("radio")).toHaveAttribute("type", "radio")
  })

  test("renders a radio with a name as passed", () => {
    render(<Radio name="My Radio" />)
    expect(screen.getByRole("radio")).toBeInTheDocument()
    expect(screen.getByRole("radio")).toHaveAttribute("name", "My Radio")
  })

  test("renders a radio with a label", () => {
    render(<Radio label="My Radio" id="my-radio" />)
    expect(screen.getByLabelText("My Radio")).toBeInTheDocument()
    expect(document.querySelector(".juno-label")).toBeInTheDocument()
    expect(document.querySelector(".juno-label")).toHaveTextContent("My Radio")
  })

  test("renders a radio with an id as passed", () => {
    render(<Radio id="my-radio" />)
    expect(screen.getByRole("radio")).toBeInTheDocument()
    expect(screen.getByRole("radio")).toHaveAttribute("id", "my-radio")
  })

  test("renders a Checkbox with an auto-generated id if no id was passed", () => {
    render(<Radio />)
    expect(screen.getByRole("radio")).toBeInTheDocument()
    expect(screen.getByRole("radio")).toHaveAttribute("id")
    expect(screen.getByRole("radio").getAttribute("id")).toMatch("juno-radio")
  })

  test("renders a Radio with an associated label with an id as passed", () => {
    render(<Radio id="my-radio" label="My Radio" />)
    expect(screen.getByRole("radio")).toBeInTheDocument()
    expect(screen.getByLabelText("My Radio")).toBeInTheDocument()
    expect(document.querySelector(".juno-label")).toBeInTheDocument()
    expect(document.querySelector(".juno-label")).toHaveTextContent("My Radio")
  })

  test("renders a Radio with a label associated by an auto-generated id if no id was passed", () => {
    render(<Radio label="This is a Radio" />)
    expect(screen.getByRole("radio")).toBeInTheDocument()
    expect(screen.getByLabelText("This is a Radio")).toBeInTheDocument()
  })

  test("renders a radio with a value as passed", () => {
    render(<Radio value="ValueAsPassed" />)
    expect(screen.getByRole("radio")).toBeInTheDocument()
    expect(screen.getByRole("radio")).toHaveAttribute("value", "ValueAsPassed")
  })

  test("renders a checked radio as passed", () => {
    act(() => {
      render(<Radio checked={true} />)
    })
    const radio = screen.getByRole("radio")
    expect(radio).toBeInTheDocument()
    expect(radio).toBeChecked()
  })

  test("renders a required Radio as passed if a label is supplied", () => {
    render(<Radio required label="Required Radio" />)
    expect(screen.getByRole("radio")).toBeInTheDocument()
    expect(document.querySelector(".juno-required")).toBeInTheDocument()
  })

  test("renders no checked attribute if false", () => {
    act(() => {
      render(<Radio checked={false} />)
    })
    const radio = screen.getByRole("radio")
    expect(radio).toBeInTheDocument()
    expect(radio).not.toBeChecked()
  })

  test("renders a disabled radio as passed", () => {
    render(<Radio disabled />)
    const radio = screen.getByRole("radio")
    expect(radio).toBeInTheDocument()
    expect(radio).toBeDisabled()
  })

  test("renders an invalid radio as passed", () => {
    render(<Radio invalid />)
    const radio = screen.getByRole("radio")
    expect(radio).toBeInTheDocument()
    expect(radio).toHaveClass("juno-radio-invalid")
  })

  test("renders a valid Radio as passed", () => {
    render(<Radio valid />)
    const radio = screen.getByRole("radio")
    expect(radio).toBeInTheDocument()
    expect(radio).toHaveClass("juno-radio-valid")
  })

  test("renders a helptext as passed", () => {
    render(<Radio helptext="this is a helptext" />)
    expect(document.querySelector(".juno-form-hint")).toBeInTheDocument()
    expect(document.querySelector(".juno-form-hint")).toHaveClass("juno-form-hint-help")
    expect(document.querySelector(".juno-form-hint")).toHaveTextContent("this is a helptext")
  })

  test("renders a successtext as passed and validates the Radio", () => {
    render(<Radio successtext="great success!" />)
    expect(document.querySelector(".juno-form-hint")).toBeInTheDocument()
    expect(document.querySelector(".juno-form-hint")).toHaveClass("juno-form-hint-success")
    expect(document.querySelector(".juno-form-hint")).toHaveTextContent("great success!")
    expect(screen.getByRole("radio")).toHaveClass("juno-radio-valid")
  })

  test("renders an errortext as passed and invalidates the Radio", () => {
    render(<Radio errortext="this is an error!" />)
    expect(document.querySelector(".juno-form-hint")).toBeInTheDocument()
    expect(document.querySelector(".juno-form-hint")).toHaveClass("juno-form-hint-error")
    expect(document.querySelector(".juno-form-hint")).toHaveTextContent("this is an error!")
    expect(screen.getByRole("radio")).toHaveClass("juno-radio-invalid")
  })

  test("fires handler on change as passed", () => {
    const onChangeSpy = vi.fn()
    render(<Radio onChange={onChangeSpy} />)
    act(() => {
      screen.getByRole("radio").click()
    })
    expect(onChangeSpy).toHaveBeenCalled()
  })

  test("fires handler on click as passed", () => {
    const onClickSpy = vi.fn()
    render(<Radio onClick={onClickSpy} />)
    act(() => {
      screen.getByRole("radio").click()
    })
    expect(onClickSpy).toHaveBeenCalled()
  })

  test("does not fire onChange handler when disabled", () => {
    const onChangeSpy = vi.fn()
    render(<Radio onChange={onChangeSpy} disabled />)
    act(() => {
      screen.getByRole("radio").click()
    })
    expect(onChangeSpy).not.toHaveBeenCalled()
  })

  test("does not fire onClick handler when disabled", () => {
    const onClickSpy = vi.fn()
    render(<Radio onClick={onClickSpy} disabled />)
    act(() => {
      screen.getByRole("radio").click()
    })
    expect(onClickSpy).not.toHaveBeenCalled()
  })

  test("renders a custom className as passed", () => {
    render(<Radio data-testid="23" className="my-custom-class" />)
    expect(screen.getByTestId("23")).toBeInTheDocument()
    expect(screen.getByTestId("23")).toHaveClass("my-custom-class")
  })

  test("renders all props as passed", () => {
    render(<Radio id="check-1" data-testid="23" data-lolol={true} />)
    expect(screen.getByTestId("23")).toBeInTheDocument()
    expect(screen.getByTestId("23")).toHaveAttribute("data-lolol")
  })
})
