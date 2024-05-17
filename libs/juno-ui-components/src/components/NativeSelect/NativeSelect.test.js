/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import { NativeSelect } from "./index"

describe("NativeSelect", () => {
  test("renders a native html select element", async () => {
    render(<NativeSelect />)
    expect(screen.getByRole("combobox")).toBeInTheDocument()
  })

  test("renders a select element with a name as passed", async () => {
    render(<NativeSelect name="my-select" />)
    expect(screen.getByRole("combobox")).toBeInTheDocument()
    expect(screen.getByRole("combobox")).toHaveAttribute("name", "my-select")
  })

  test("renders a select element with an id as passed", async () => {
    render(<NativeSelect id="my-select" />)
    expect(screen.getByRole("combobox")).toBeInTheDocument()
    expect(screen.getByRole("combobox")).toHaveAttribute("id", "my-select")
  })

  test("renders a custom className", async () => {
    render(<NativeSelect className="my-custom-class" />)
    expect(screen.getByRole("combobox")).toBeInTheDocument()
    expect(screen.getByRole("combobox")).toHaveClass("my-custom-class")
  })

  test("renders a disabled select as passed", async () => {
    render(<NativeSelect disabled />)
    expect(screen.getByRole("combobox")).toBeInTheDocument()
    expect(screen.getByRole("combobox")).toBeDisabled()
  })

  test("renders an invalid Select as passed", async () => {
    render(<NativeSelect invalid />)
    expect(screen.getByRole("combobox")).toBeInTheDocument()
    expect(screen.getByRole("combobox")).toHaveClass("juno-select-invalid")
    expect(screen.getByTitle("Dangerous")).toBeInTheDocument()
  })

  test("renders a valid Select as passed", async () => {
    render(<NativeSelect valid />)
    expect(screen.getByRole("combobox")).toBeInTheDocument()
    expect(screen.getByRole("combobox")).toHaveClass("juno-select-valid")
    expect(screen.getByTitle("CheckCircle")).toBeInTheDocument()
  })

  test("renders a Select with an error as passed", async () => {
    render(<NativeSelect error />)
    expect(screen.getByRole("combobox")).toBeInTheDocument()
    expect(screen.getByRole("combobox")).toBeDisabled()
    expect(screen.getByRole("combobox")).toHaveClass("juno-select-error")
    expect(screen.getByTitle("Error")).toBeInTheDocument()
  })

  test("renders children as passed", async () => {
    render(
      <NativeSelect>
        <option data-testid="option">Option</option>
      </NativeSelect>
    )
    expect(screen.getByRole("combobox")).toBeInTheDocument()
    expect(screen.getByTestId("option")).toBeInTheDocument()
  })

  test("executes onClick handler as passed", async () => {
    const onClickSpy = jest.fn()
    render(<NativeSelect onClick={onClickSpy} />)
    const select = screen.getByRole("combobox")
    select.click()
    expect(onClickSpy).toHaveBeenCalled()
  })

  test("executes onChange handler as passed", async () => {
    const handleChange = jest.fn()
    const { container } = render(<NativeSelect onChange={handleChange} />)
    const select = screen.getByRole("combobox")
    fireEvent.change(select, { target: { value: "a" } })
    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  test("does not execute onClick handler when disabled", async () => {
    const onClickSpy = jest.fn()
    render(<NativeSelect onClick={onClickSpy} disabled />)
    screen.getByRole("combobox").click()
    expect(onClickSpy).not.toHaveBeenCalled()
  })

  test("does not execute onChange handler when disabled", async () => {
    const onChangeSpy = jest.fn()
    render(<NativeSelect onChange={onChangeSpy} disabled />)
    screen.getByRole("combobox").click()
    expect(onChangeSpy).not.toHaveBeenCalled()
  })

  test("renders a loading Select as passed", async () => {
    render(<NativeSelect loading />)
    expect(screen.getByRole("combobox")).toBeDisabled()
    expect(screen.getByRole("progressbar")).toBeInTheDocument()
  })

  test("can not be clicked when loading", async () => {
    const onClickSpy = jest.fn()
    render(<NativeSelect loading onClick={onClickSpy} />)
    screen.getByRole("combobox").click()
    expect(onClickSpy).not.toHaveBeenCalled()
  })

  test("renders all props as passed", async () => {
    render(<NativeSelect data-lolol="some-random-prop" />)
    expect(screen.getByRole("combobox")).toBeInTheDocument()
    expect(screen.getByRole("combobox")).toHaveAttribute(
      "data-lolol",
      "some-random-prop"
    )
  })
})
