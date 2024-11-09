/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { NativeSelectOptionGroup } from "./NativeSelectOptionGroup.component"

describe("NativeSelectOptionGroup", () => {
  describe("Basic Rendering", () => {
    test("renders an optgroup element", () => {
      render(<NativeSelectOptionGroup />)
      expect(screen.getByRole("group")).toBeInTheDocument()
    })
  })

  describe("Prop Handling", () => {
    test("renders an optgroup with a label as passed", () => {
      render(<NativeSelectOptionGroup label="My Select Option Group" />)
      expect(screen.getByRole("group")).toBeInTheDocument()
      expect(screen.getByRole("group")).toHaveAttribute("label", "My Select Option Group")
    })

    test("renders a disabled optgroup as passed", () => {
      render(<NativeSelectOptionGroup disabled />)
      expect(screen.getByRole("group")).toBeInTheDocument()
      expect(screen.getByRole("group")).toHaveAttribute("disabled")
    })

    test("renders a custom className", () => {
      render(<NativeSelectOptionGroup className="my-custom-class" />)
      expect(screen.getByRole("group")).toBeInTheDocument()
      expect(screen.getByRole("group")).toHaveClass("my-custom-class")
    })

    test("renders all props", () => {
      render(<NativeSelectOptionGroup data-lolol="some-prop" />)
      expect(screen.getByRole("group")).toBeInTheDocument()
      expect(screen.getByRole("group")).toHaveAttribute("data-lolol", "some-prop")
    })
  })

  describe("Children Rendering", () => {
    test("renders all children as passed", () => {
      render(
        <NativeSelectOptionGroup>
          <option></option>
        </NativeSelectOptionGroup>
      )
      expect(screen.getByRole("group")).toBeInTheDocument()
      expect(screen.getByRole("option")).toBeInTheDocument()
    })
  })
})
