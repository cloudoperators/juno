/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { act, render, screen } from "@testing-library/react"
import { RadioRow } from "./index"

describe("RadioRow", () => {
  test("renders a radio row", () => {
    render(<RadioRow data-testid="radio-row" />)
    expect(screen.getByTestId("radio-row")).toBeInTheDocument()
  })

  test("renders a radio row with a value as passed", () => {
    render(<RadioRow value="radio-12" />)
    expect(screen.getByRole("radio")).toBeInTheDocument()
    expect(screen.getByRole("radio")).toHaveAttribute("value", "radio-12")
  })

  test("renders a checked radio as passed", () => {
    render(<RadioRow checked />)
    expect(screen.getByRole("radio")).toBeInTheDocument()
    expect(screen.getByRole("radio")).toBeChecked()
  })

  test("renders a radio group with a radio and an associated label with an id as passed", () => {
    render(<RadioRow data-testid="my-radio-row" label="My Radio Row" id="radio-row" />)
    expect(screen.getByRole("radio")).toBeInTheDocument()
    expect(screen.getByLabelText("My Radio Row")).toBeInTheDocument()
    expect(screen.getByRole("radio")).toHaveAttribute("id", "radio-row")
  })

  test("renders a help text as passed", () => {
    render(<RadioRow helptext="Helptext goes here" />)
    expect(screen.getByText("Helptext goes here")).toBeInTheDocument()
  })

  test("renders a helpt text with a link as passed", () => {
    render(<RadioRow helptext={<a href="#">Link</a>} />)
    expect(screen.getByRole("link")).toBeInTheDocument()
    expect(screen.getByRole("link")).toHaveAttribute("href", "#")
    expect(screen.getByRole("link")).toHaveTextContent("Link")
  })

  test("renders a disabled radio as passed", () => {
    render(<RadioRow disabled />)
    expect(screen.getByRole("radio")).toBeDisabled()
  })

  test("renders a required RadioRow as passed if a label is supplied", () => {
    render(<RadioRow required label="Required Radio" />)
    expect(screen.getByRole("radio")).toBeInTheDocument()
    expect(document.querySelector(".juno-required")).toBeInTheDocument()
  })

  test("renders an invalid RadioRow as passed", () => {
    render(<RadioRow label="Invalid radio" invalid />)
    expect(screen.getByRole("radio")).toBeInTheDocument()
    expect(screen.getByRole("radio")).toHaveClass("juno-radio-invalid")
    expect(screen.getByTitle("Dangerous")).toBeInTheDocument()
  })

  test("renders an invalid RadioRow with an error text as passed", () => {
    render(<RadioRow errortext="This is an error text" label="Radio" />)
    expect(screen.getByRole("radio")).toBeInTheDocument()
    expect(screen.getByRole("radio")).toHaveClass("juno-radio-invalid")
    expect(screen.getByTitle("Dangerous")).toBeInTheDocument()
    expect(screen.getByText("This is an error text")).toBeInTheDocument()
  })

  test("renders a valid RadioRow as passed", () => {
    render(<RadioRow label="Radio label" valid />)
    expect(screen.getByRole("radio")).toBeInTheDocument()
    expect(screen.getByRole("radio")).toHaveClass("juno-radio-valid")
    expect(screen.getByTitle("CheckCircle")).toBeInTheDocument()
  })

  test("renders a valid RadioRow with a successtext as passed", () => {
    render(<RadioRow successtext="GREAT SUCCESS!!!" label="Radio" />)
    expect(screen.getByRole("radio")).toBeInTheDocument()
    expect(screen.getByRole("radio")).toHaveClass("juno-radio-valid")
    expect(screen.getByTitle("CheckCircle")).toBeInTheDocument()
    expect(screen.getByText("GREAT SUCCESS!!!")).toBeInTheDocument()
  })

  test("renders a custom className to the parent", () => {
    render(<RadioRow data-testid="radio-row" className="my-class" />)
    expect(screen.getByTestId("radio-row")).toBeInTheDocument()
    expect(screen.getByTestId("radio-row")).toHaveClass("my-class")
  })

  test("renders all props as passed", () => {
    render(<RadioRow data-testid="radio-row" data-lolol="random-prop" />)
    expect(screen.getByTestId("radio-row")).toBeInTheDocument()
    expect(screen.getByTestId("radio-row")).toHaveAttribute("data-lolol", "random-prop")
  })

  test("fire handler on change as passed", () => {
    const onChangeSpy = vi.fn()
    render(<RadioRow onChange={onChangeSpy} />)
    act(() => {
      screen.getByRole("radio").click()
    })
    expect(onChangeSpy).toHaveBeenCalled()
  })
})
