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

    test("renders an optgroup with an empty label", () => {
      render(<NativeSelectOptionGroup label="" />)
      expect(screen.getByRole("group")).toBeInTheDocument()
      expect(screen.getByRole("group")).toHaveAttribute("label", "")
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

    test("renders with undefined children", () => {
      render(<NativeSelectOptionGroup>{undefined}</NativeSelectOptionGroup>)
      expect(screen.getByRole("group")).toBeInTheDocument()
    })

    test("renders with mixed children types", () => {
      const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {})

      render(
        <NativeSelectOptionGroup>
          <option value="1">Option 1</option>
          <span>Not an option</span>
        </NativeSelectOptionGroup>
      )
      expect(screen.getByRole("group")).toBeInTheDocument()
      expect(screen.getByRole("option")).toBeInTheDocument()
      expect(screen.getByText("Not an option")).toBeInTheDocument()

      expect(errorSpy).toHaveBeenCalled()

      errorSpy.mockRestore()
    })

    test("renders without any children", () => {
      render(<NativeSelectOptionGroup />)
      expect(screen.getByRole("group")).toBeInTheDocument()
    })
  })
})
