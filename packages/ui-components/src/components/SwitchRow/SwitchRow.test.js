/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { act } from "react"
import { render, screen } from "@testing-library/react"
import { SwitchRow } from "./index"

describe("SwitchRow", () => {
  test("renders a switch row", async () => {
    render(<SwitchRow data-testid="switch-row" />)
    expect(screen.getByTestId("switch-row")).toBeInTheDocument()
  })

  test("renders a switch row with a name as passed", async () => {
    render(<SwitchRow data-testid="switch-row" name="my-switch" />)
    expect(screen.getByTestId("switch-row")).toBeInTheDocument()
    expect(screen.getByRole("switch")).toBeInTheDocument()
    expect(screen.getByRole("switch")).toHaveAttribute("name", "my-switch")
  })

  test("renders a switch row with a switch button and an associated label with an id as passed", async () => {
    render(<SwitchRow data-testid="my-switch-row" label="My Switch Row" id="switch-row" />)
    expect(screen.getByRole("switch")).toBeInTheDocument()
    expect(screen.getByLabelText("My Switch Row")).toBeInTheDocument()
    expect(screen.getByRole("switch")).toHaveAttribute("id", "switch-row")
  })

  test("renders a help text as passed", async () => {
    render(<SwitchRow helptext="Helptext goes here" />)
    expect(screen.getByText("Helptext goes here")).toBeInTheDocument()
  })

  test("renders a helpt text with a link as passed", async () => {
    render(<SwitchRow helptext={<a href="#">Link</a>} />)
    expect(screen.getByRole("link")).toBeInTheDocument()
    expect(screen.getByRole("link")).toHaveAttribute("href", "#")
    expect(screen.getByRole("link")).toHaveTextContent("Link")
  })

  test("renders a disabled switch as passed", async () => {
    render(<SwitchRow disabled />)
    expect(screen.getByRole("switch")).toBeDisabled()
  })

  test("renders a custom className to the parent as passed", async () => {
    render(<SwitchRow data-testid="switch-row" className="my-custom-class" />)
    expect(screen.getByTestId("switch-row")).toBeInTheDocument()
    expect(screen.getByTestId("switch-row")).toHaveClass("my-custom-class")
  })

  test("renders an invalid SwitchRow as passed", async () => {
    render(<SwitchRow invalid />)
    expect(screen.getByRole("switch")).toBeInTheDocument()
    expect(screen.getByRole("switch")).toHaveClass("juno-switch-invalid")
    expect(screen.getByTitle("Dangerous")).toBeInTheDocument()
  })

  test("renders an invalid SwitchRow with an error text as passed", async () => {
    render(<SwitchRow errortext="This is an error text" />)
    expect(screen.getByRole("switch")).toBeInTheDocument()
    expect(screen.getByRole("switch")).toHaveClass("juno-switch-invalid")
    expect(screen.getByText("This is an error text")).toBeInTheDocument()
    expect(screen.getByTitle("Dangerous")).toBeInTheDocument()
  })

  test("renders a valid SwitchRow with a successtext as passed", async () => {
    render(<SwitchRow successtext="This is a success text" />)
    expect(screen.getByRole("switch")).toBeInTheDocument()
    expect(screen.getByRole("switch")).toHaveClass("juno-switch-valid")
    expect(screen.getByText("This is a success text")).toBeInTheDocument()
    expect(screen.getByTitle("CheckCircle")).toBeInTheDocument()
  })

  test("renders all props as passed", async () => {
    render(<SwitchRow id="switchrow-1" data-test="47" data-testid="switch-row" />)
    expect(screen.getByTestId("switch-row")).toBeInTheDocument()
    expect(screen.getByTestId("switch-row")).toHaveAttribute("data-test", "47")
  })

  test("renders a Switch with aria-checked set to false by default", async () => {
    render(<SwitchRow />)
    expect(screen.getByRole("switch")).toBeInTheDocument()
    expect(screen.getByRole("switch")).toHaveAttribute("aria-checked", "false")
  })

  test("renders a Switch that is aria-checked if ON is passed", async () => {
    render(<SwitchRow on />)
    expect(screen.getByRole("switch")).toBeInTheDocument()
    expect(screen.getByRole("switch")).toHaveAttribute("aria-checked", "true")
  })

  test("executes handler on change as passed", async () => {
    const onChangeSpy = jest.fn()
    render(<SwitchRow onChange={onChangeSpy} />)
    act(() => {
      screen.getByRole("switch").click()
    })
    expect(onChangeSpy).toHaveBeenCalled()
  })

  test("executes handler on click as passed", async () => {
    const onClickSpy = jest.fn()
    render(<SwitchRow onClick={onClickSpy} />)
    act(() => {
      screen.getByRole("switch").click()
    })
    expect(onClickSpy).toHaveBeenCalled()
  })

  test("does not execute handler on change as passed when disabled", async () => {
    const onChangeSpy = jest.fn()
    render(<SwitchRow onChange={onChangeSpy} disabled />)
    act(() => {
      screen.getByRole("switch").click()
    })
    expect(onChangeSpy).not.toHaveBeenCalled()
  })

  test("does not execute handler on click as passed when disabled", async () => {
    const onClickSpy = jest.fn()
    render(<SwitchRow onClick={onClickSpy} disabled />)
    act(() => {
      screen.getByRole("switch").click()
    })
    expect(onClickSpy).not.toHaveBeenCalled()
  })
})
