/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { act } from "react"
import { render, screen } from "@testing-library/react"
import { CheckboxRow } from "./index"

describe("CheckboxRow", () => {
  test("renders a checkbox row", async () => {
    render(<CheckboxRow data-testid="checkbox-row" />)
    expect(screen.getByTestId("checkbox-row")).toBeInTheDocument()
  })

  test("renders a checked checkbox as passed", async () => {
    act(() => {
      render(<CheckboxRow checked />)
    })
    expect(screen.getByRole("checkbox")).toBeChecked()
  })

  test("renders a checkbox row with a value as passed", async () => {
    render(<CheckboxRow value="my-value" />)
    expect(screen.getByRole("checkbox")).toHaveAttribute("value", "my-value")
  })

  test("renders a checkbox row with a name as passed", async () => {
    render(<CheckboxRow name="my-checkbox" />)
    expect(screen.getByRole("checkbox")).toHaveAttribute("name", "my-checkbox")
  })

  test("renders a checkbox row with an id as passed", async () => {
    render(<CheckboxRow id="my-checkbox" />)
    expect(screen.getByRole("checkbox")).toHaveAttribute("id", "my-checkbox")
  })

  test("renders a checkbox row with a checkbox and an associated label with an id as passed", async () => {
    render(<CheckboxRow data-testid="my-checkbox-row" label="My Checkbox Row" id="checkbox-row" />)
    expect(screen.getByRole("checkbox")).toBeInTheDocument()
    expect(screen.getByLabelText("My Checkbox Row")).toBeInTheDocument()
    expect(screen.getByRole("checkbox")).toHaveAttribute("id", "checkbox-row")
  })

  test("renders a help text as passed", async () => {
    render(<CheckboxRow helptext="Helptext goes here" />)
    expect(screen.getByText("Helptext goes here")).toBeInTheDocument()
  })

  test("renders a helpt text with a link as passed", async () => {
    render(<CheckboxRow helptext={<a href="#">Link</a>} />)
    expect(screen.getByRole("link")).toBeInTheDocument()
    expect(screen.getByRole("link")).toHaveAttribute("href", "#")
    expect(screen.getByRole("link")).toHaveTextContent("Link")
  })

  test("renders a required label as passed", async () => {
    render(<CheckboxRow label="Required Input" required />)
    expect(document.querySelector(".juno-required")).toBeInTheDocument()
  })

  test("renders a disabled Checkbox as passed", async () => {
    act(() => {
      render(<CheckboxRow disabled />)
    })
    expect(screen.getByRole("checkbox")).toBeDisabled()
  })

  test("renders an invalid CheckboxRow as passed", async () => {
    act(() => {
      render(<CheckboxRow invalid label="invalid checkbox" />)
    })
    expect(screen.getByRole("checkbox")).toBeInTheDocument()
    expect(screen.getByRole("checkbox")).toHaveClass("juno-checkbox-invalid")
    expect(screen.getByTitle("Dangerous")).toBeInTheDocument()
  })

  test("renders an invalid CheckRow with an error text as passed", async () => {
    render(<CheckboxRow errortext="This is an error text" label="Checkbox" />)
    expect(screen.getByRole("checkbox")).toBeInTheDocument()
    expect(screen.getByRole("checkbox")).toHaveClass("juno-checkbox-invalid")
    expect(screen.getByTitle("Dangerous")).toBeInTheDocument()
    expect(screen.getByText("This is an error text")).toBeInTheDocument()
  })

  test("renders a valid CheckboxRow as passed", async () => {
    act(() => {
      render(<CheckboxRow valid label="valid checkbox" />)
    })
    expect(screen.getByRole("checkbox")).toBeInTheDocument()
    expect(screen.getByRole("checkbox")).toHaveClass("juno-checkbox-valid")
    expect(screen.getByTitle("CheckCircle")).toBeInTheDocument()
  })

  test("renders a custom className", async () => {
    render(<CheckboxRow data-testid="my-checkbox-row" className="my-classname" />)
    expect(screen.getByTestId("my-checkbox-row")).toHaveClass("my-classname")
  })

  test("renders all props as passed", async () => {
    render(<CheckboxRow data-testid="my-checkbox-row" data-lolol="some-prop" />)
    expect(screen.getByTestId("my-checkbox-row")).toHaveAttribute("data-lolol", "some-prop")
  })

  test("fire handler on change as passed", async () => {
    const onChangeSpy = jest.fn()
    render(<CheckboxRow onChange={onChangeSpy} />)
    act(() => {
      screen.getByRole("checkbox").click()
    })
    expect(onChangeSpy).toHaveBeenCalled()
  })
})
