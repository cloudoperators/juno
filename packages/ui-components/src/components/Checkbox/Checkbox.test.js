/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { act } from "react"
import { render, screen } from "@testing-library/react"
import { Checkbox } from "./index"

describe("Checkbox", () => {
  test("renders a valid html input type checkbox", async () => {
    render(<Checkbox />)
    expect(screen.getByRole("checkbox")).toBeInTheDocument()
    expect(screen.getByRole("checkbox")).toHaveAttribute("type", "checkbox")
  })

  test("renders a checkbox with a name as passed", async () => {
    render(<Checkbox name="My Checkbox" />)
    expect(screen.getByRole("checkbox")).toBeInTheDocument()
    expect(screen.getByRole("checkbox")).toHaveAttribute("name", "My Checkbox")
  })

  test("renders a checkbox with a label", async () => {
    render(<Checkbox label="My Checkbox" id="my-checkbox" />)
    expect(screen.getByLabelText("My Checkbox")).toBeInTheDocument()
    expect(document.querySelector(".juno-label")).toBeInTheDocument()
    expect(document.querySelector(".juno-label")).toHaveTextContent(
      "My Checkbox"
    )
  })

  test("renders a checkbox with an id as passed", async () => {
    render(<Checkbox id="my-checkbox" />)
    expect(screen.getByRole("checkbox")).toBeInTheDocument()
    expect(screen.getByRole("checkbox")).toHaveAttribute("id", "my-checkbox")
  })

  test("renders a Checkbox with an auto-generated id if no id was passed", async () => {
    render(<Checkbox />)
    expect(screen.getByRole("checkbox")).toBeInTheDocument()
    expect(screen.getByRole("checkbox")).toHaveAttribute("id")
    expect(screen.getByRole("checkbox").getAttribute("id")).toMatch(
      "juno-checkbox"
    )
  })

  test("renders a Checkbox with an associated label with an id as passed", async () => {
    render(<Checkbox id="my-checkbox" label="My Checkbox" />)
    expect(screen.getByRole("checkbox")).toBeInTheDocument()
    expect(screen.getByLabelText("My Checkbox")).toBeInTheDocument()
    expect(document.querySelector(".juno-label")).toBeInTheDocument()
    expect(document.querySelector(".juno-label")).toHaveTextContent(
      "My Checkbox"
    )
  })

  test("renders a Checkbox with a label associated by an auto-generated id if no id was passed", async () => {
    render(<Checkbox label="This is a Checkbox" />)
    expect(screen.getByRole("checkbox")).toBeInTheDocument()
    expect(screen.getByLabelText("This is a Checkbox")).toBeInTheDocument()
  })

  test("renders a checkbox with a value as passed", async () => {
    render(<Checkbox value="ValueAsPassed" />)
    expect(screen.getByRole("checkbox")).toBeInTheDocument()
    expect(screen.getByRole("checkbox")).toHaveAttribute(
      "value",
      "ValueAsPassed"
    )
  })

  test("renders a checked checkbox as passed", async () => {
    act(() => {
      render(<Checkbox checked={true} />)
    })
    const checkbox = screen.getByRole("checkbox")
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).toBeChecked()
  })

  test("renders no checked attribute if false", async () => {
    act(() => {
      render(<Checkbox checked={false} />)
    })
    const checkbox = screen.getByRole("checkbox")
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).not.toBeChecked()
  })

  test("renders a disabled checkbox as passed", async () => {
    render(<Checkbox disabled />)
    const checkbox = screen.getByRole("checkbox")
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).toBeDisabled()
  })

  test("renders an invalid Checkbox as passed", async () => {
    render(<Checkbox invalid />)
    expect(screen.getByRole("checkbox")).toBeInTheDocument()
    expect(screen.getByRole("checkbox")).toHaveClass("juno-checkbox-invalid")
  })

  test("renders a valid Checkbox as passed", async () => {
    render(<Checkbox valid />)
    expect(screen.getByRole("checkbox")).toBeInTheDocument()
    expect(screen.getByRole("checkbox")).toHaveClass("juno-checkbox-valid")
  })

  test("renders a helptext as passed", async () => {
    render(<Checkbox helptext="this is a helptext" />)
    expect(document.querySelector(".juno-form-hint")).toBeInTheDocument()
    expect(document.querySelector(".juno-form-hint")).toHaveClass(
      "juno-form-hint-help"
    )
    expect(document.querySelector(".juno-form-hint")).toHaveTextContent(
      "this is a helptext"
    )
  })

  test("renders a successtext as passed and validates the Checkbox", async () => {
    render(<Checkbox successtext="great success!" />)
    expect(document.querySelector(".juno-form-hint")).toBeInTheDocument()
    expect(document.querySelector(".juno-form-hint")).toHaveClass(
      "juno-form-hint-success"
    )
    expect(document.querySelector(".juno-form-hint")).toHaveTextContent(
      "great success!"
    )
    expect(screen.getByRole("checkbox")).toHaveClass("juno-checkbox-valid")
  })

  test("renders an errortext as passed and invalidates the Checkbox", async () => {
    render(<Checkbox errortext="this is an error!" />)
    expect(document.querySelector(".juno-form-hint")).toBeInTheDocument()
    expect(document.querySelector(".juno-form-hint")).toHaveClass(
      "juno-form-hint-error"
    )
    expect(document.querySelector(".juno-form-hint")).toHaveTextContent(
      "this is an error!"
    )
    expect(screen.getByRole("checkbox")).toHaveClass("juno-checkbox-invalid")
  })

  test("fires handler on change as passed", async () => {
    const onChangeSpy = jest.fn()
    render(<Checkbox onChange={onChangeSpy} />)
    act(() => {
      screen.getByRole("checkbox").click()
    })
    expect(onChangeSpy).toHaveBeenCalled()
  })

  test("fires handler on click as passed", async () => {
    const onClickSpy = jest.fn()
    render(<Checkbox onClick={onClickSpy} />)
    act(() => {
      screen.getByRole("checkbox").click()
    })
    expect(onClickSpy).toHaveBeenCalled()
  })

  test("does not fire a handler on change when disabled", async () => {
    const onChangeSpy = jest.fn()
    render(<Checkbox onChange={onChangeSpy} disabled />)
    act(() => {
      screen.getByRole("checkbox").click()
    })
    expect(onChangeSpy).not.toHaveBeenCalled()
  })

  test("does not fire a handler on click when disabled", async () => {
    const onClickSpy = jest.fn()
    render(<Checkbox onClick={onClickSpy} disabled />)
    act(() => {
      screen.getByRole("checkbox").click()
    })
    expect(onClickSpy).not.toHaveBeenCalled()
  })

  test("renders a custom className as passed", async () => {
    render(<Checkbox data-testid="23" className="my-custom-classname" />)
    expect(screen.getByTestId("23")).toBeInTheDocument()
    expect(screen.getByTestId("23")).toHaveClass("my-custom-classname")
  })

  test("renders all props as passed", async () => {
    render(<Checkbox id="check-1" data-testid="23" data-lolol={true} />)
    expect(screen.getByTestId("23")).toBeInTheDocument()
    expect(screen.getByTestId("23")).toHaveAttribute("data-lolol")
  })
})
