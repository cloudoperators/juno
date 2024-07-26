/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { NativeSelectOption } from "./index"

describe("NativeSelectOption", () => {
  test("renders a native html option element", async () => {
    render(<NativeSelectOption />)
    expect(screen.getByRole("option")).toBeInTheDocument()
  })

  test("renders a native html option with a value as passed", async () => {
    render(<NativeSelectOption value="49" />)
    expect(screen.getByRole("option")).toBeInTheDocument()
    expect(screen.getByRole("option")).toHaveAttribute("value", "49")
  })

  test("renders a native html option with a label as passed", async () => {
    render(<NativeSelectOption label="My first option" />)
    expect(screen.getByRole("option")).toBeInTheDocument()
    expect(screen.getByRole("option")).toHaveTextContent("My first option")
  })

  test("renders a disabled native html option", async () => {
    render(<NativeSelectOption disabled />)
    expect(screen.getByRole("option")).toBeInTheDocument()
    expect(screen.getByRole("option")).toBeDisabled()
  })

  test("renders a custom className", async () => {
    render(<NativeSelectOption className="my-custom-classname" />)
    expect(screen.getByRole("option")).toBeInTheDocument()
    expect(screen.getByRole("option")).toHaveClass("my-custom-classname")
  })

  test("renders all props", async () => {
    render(<NativeSelectOption data-lolol="some-prop" />)
    expect(screen.getByRole("option")).toBeInTheDocument()
    expect(screen.getByRole("option")).toHaveAttribute("data-lolol", "some-prop")
  })
})
