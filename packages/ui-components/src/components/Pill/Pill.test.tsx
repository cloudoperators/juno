/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { describe, expect, test, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import { Pill } from "./index"

describe("Pill", () => {
  test("renders a Pill", () => {
    render(<Pill data-testid="my-Pill" pillKey="TheRequiredKey" pillValue="TheRequiredValue" />)
    expect(screen.getByTestId("my-Pill")).toBeInTheDocument()
    expect(screen.getByTestId("my-Pill")).toHaveClass("juno-pill")
  })

  test("renders a pill key label as passed", () => {
    render(<Pill pillKeyLabel="My Pill Key" pillKey="TheRequiredKey" pillValue="TheRequiredValue" />)
    expect(screen.getByText("My Pill Key")).toBeInTheDocument()
  })

  test("renders a pill key if pill key label missing", () => {
    render(<Pill pillKey="my_Pill_key" pillValue="TheRequiredValue" />)
    expect(screen.getByText("my_Pill_key")).toBeInTheDocument()
  })

  test("renders only value if pill key label not set", () => {
    // the attribute pillKey and pillValue are required keep them empty to test render nothing
    render(<Pill data-testid="23" pillKey="" pillValue="TheRequiredValue" />)
    expect(screen.getByTestId("23")).toBeInTheDocument()
    expect(screen.getByTestId("23")).toHaveTextContent("TheRequiredValue")
  })

  test("renders a pill value label as passed", () => {
    render(<Pill pillValue="TheRequiredValue" pillValueLabel="My Pill Value" pillKey="TheRequiredKey" />)
    expect(screen.getByText("My Pill Value")).toBeInTheDocument()
  })

  test("renders a pill value if value label missing", () => {
    render(<Pill pillKey="TheRequiredKey" pillValue="my_Pill_value" />)
    expect(screen.getByText("my_Pill_value")).toBeInTheDocument()
  })

  test("renders information about missing value if pill value or value label not given", () => {
    // the attribute pillKey and pillValue are required keep them empty to test render nothing
    render(<Pill data-testid="23" pillKey="" pillValue="" />)
    expect(screen.getByTestId("23")).toBeInTheDocument()
    expect(screen.getByTestId("23")).toHaveTextContent("set pillValue or pillValueLabel")
  })

  test("an onClose handler is called as passed and returns the uid", () => {
    const handleClose = vi.fn()
    render(
      <Pill uid="uidAbc" pillKey="TheRequiredKey" pillValue="TheRequiredValue" closeable={true} onClose={handleClose} />
    )
    screen.getByRole("button").click()
    expect(handleClose).toHaveBeenCalledTimes(1)
    expect(handleClose).toHaveBeenCalledWith(expect.anything(), "uidAbc")
  })

  test("an onClose handler is called as passed and returns the pillKey if uid missing", () => {
    const handleClose = vi.fn()
    render(<Pill pillKey="abc" pillValue="TheRequiredValue" closeable={true} onClose={handleClose} />)
    screen.getByRole("button").click()
    expect(handleClose).toHaveBeenCalledTimes(1)
    expect(handleClose).toHaveBeenCalledWith(expect.anything(), "abc")
  })

  test("an onClick handler is called as passed and returns the uid", () => {
    const handleClick = vi.fn()
    render(<Pill uid="uidAbc" pillKey="TheRequiredKey" pillValue="TheRequiredValue" onClick={handleClick} />)
    screen.getByText("TheRequiredKey").click()
    expect(handleClick).toHaveBeenCalledTimes(1)
    expect(handleClick).toHaveBeenCalledWith(expect.anything(), "uidAbc")
  })

  test("an onClick handler is called as passed and returns the pillKey if uid missing", () => {
    const handleClick = vi.fn()
    render(<Pill pillKey="abc" pillValue="TheRequiredValue" onClick={handleClick} />)
    screen.getByText("abc").click()
    expect(handleClick).toHaveBeenCalledTimes(1)
    expect(handleClick).toHaveBeenCalledWith(expect.anything(), "abc")
  })

  test("renders a custom className", () => {
    render(
      <Pill data-testid="my-Pill" pillKey="TheRequiredKey" pillValue="TheRequiredValue" className="my-custom-class" />
    )
    expect(screen.getByTestId("my-Pill")).toBeInTheDocument()
    expect(screen.getByTestId("my-Pill")).toHaveClass("my-custom-class")
  })

  test("renders all props as passed", () => {
    render(<Pill data-testid="23" pillKey="TheRequiredKey" pillValue="TheRequiredValue" data-lolol={true} />)
    expect(screen.getByTestId("23")).toBeInTheDocument()
    expect(screen.getByTestId("23")).toHaveAttribute("data-lolol")
  })
})
