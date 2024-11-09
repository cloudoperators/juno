/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { NativeSelectOptionGroup } from "./index"

describe("NativeSelectOptionGroup", () => {
  test("renders an optgroup element", async () => {
    render(<NativeSelectOptionGroup />)
    expect(screen.getByRole("group")).toBeInTheDocument()
  })

  test("renders an optgroup with a label as passed", async () => {
    render(<NativeSelectOptionGroup label="My Select Option Group" />)
    expect(screen.getByRole("group")).toBeInTheDocument()
    expect(screen.getByRole("group")).toHaveAttribute("label", "My Select Option Group")
  })

  test("renders a disabled optgroup as passed", async () => {
    render(<NativeSelectOptionGroup disabled />)
    expect(screen.getByRole("group")).toBeInTheDocument()
    expect(screen.getByRole("group")).toHaveAttribute("disabled")
  })

  test("renders all children as passed", async () => {
    render(
      <NativeSelectOptionGroup>
        <option></option>
      </NativeSelectOptionGroup>
    )
    expect(screen.getByRole("group")).toBeInTheDocument()
    expect(screen.getByRole("option")).toBeInTheDocument()
  })

  test("renders a custom className", async () => {
    render(<NativeSelectOptionGroup className="my-custom-class" />)
    expect(screen.getByRole("group")).toBeInTheDocument()
    expect(screen.getByRole("group")).toHaveClass("my-custom-class")
  })

  test("renders all props", async () => {
    render(<NativeSelectOptionGroup data-lolol="some-prop" />)
    expect(screen.getByRole("group")).toBeInTheDocument()
    expect(screen.getByRole("group")).toHaveAttribute("data-lolol", "some-prop")
  })
})
