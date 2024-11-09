/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import { describe, expect, test, vi } from "vitest"
import { NativeSelect } from "./NativeSelect.component"

describe("NativeSelect", () => {
  describe("Basic Rendering", () => {
    test("renders a native html select element", () => {
      render(<NativeSelect />)
      expect(screen.getByRole("combobox")).toBeInTheDocument()
    })

    test("renders children as passed", () => {
      render(
        <NativeSelect>
          <option data-testid="option">Option</option>
        </NativeSelect>
      )
      expect(screen.getByRole("combobox")).toBeInTheDocument()
      expect(screen.getByTestId("option")).toBeInTheDocument()
    })

    test("renders without children", () => {
      render(<NativeSelect />)
      expect(screen.getByRole("combobox")).toBeInTheDocument()
    })
  })

  describe("Prop Rendering", () => {
    test("renders a select element with a name as passed", () => {
      render(<NativeSelect name="my-select" />)
      expect(screen.getByRole("combobox")).toBeInTheDocument()
      expect(screen.getByRole("combobox")).toHaveAttribute("name", "my-select")
    })

    test("renders a select element with an id as passed", () => {
      render(<NativeSelect id="my-select" />)
      expect(screen.getByRole("combobox")).toBeInTheDocument()
      expect(screen.getByRole("combobox")).toHaveAttribute("id", "my-select")
    })

    test("renders a custom className", () => {
      render(<NativeSelect className="my-custom-class" />)
      expect(screen.getByRole("combobox")).toBeInTheDocument()
      expect(screen.getByRole("combobox")).toHaveClass("my-custom-class")
    })

    test("renders a disabled select as passed", () => {
      render(<NativeSelect disabled />)
      expect(screen.getByRole("combobox")).toBeInTheDocument()
      expect(screen.getByRole("combobox")).toBeDisabled()
    })

    test("renders an invalid Select as passed", () => {
      render(<NativeSelect invalid />)
      expect(screen.getByRole("combobox")).toBeInTheDocument()
      expect(screen.getByRole("combobox")).toHaveClass("juno-select-invalid")
      expect(screen.getByTitle("Dangerous")).toBeInTheDocument()
    })

    test("renders a valid Select as passed", () => {
      render(<NativeSelect valid />)
      expect(screen.getByRole("combobox")).toBeInTheDocument()
      expect(screen.getByRole("combobox")).toHaveClass("juno-select-valid")
      expect(screen.getByTitle("CheckCircle")).toBeInTheDocument()
    })

    test("renders a Select with an error as passed", () => {
      render(<NativeSelect error />)
      expect(screen.getByRole("combobox")).toBeInTheDocument()
      expect(screen.getByRole("combobox")).toBeDisabled()
      expect(screen.getByRole("combobox")).toHaveClass("juno-select-error")
      expect(screen.getByTitle("Error")).toBeInTheDocument()
    })

    test("renders a loading Select as passed", () => {
      render(<NativeSelect loading />)
      expect(screen.getByRole("combobox")).toBeDisabled()
      expect(screen.getByRole("progressbar")).toBeInTheDocument()
    })

    test("renders a wrapperClassName to the outer wrapping element", () => {
      render(<NativeSelect wrapperClassName="my-wrapper-class" />)
      expect(document.querySelector(".juno-select-wrapper")).toBeInTheDocument()
      expect(document.querySelector(".juno-select-wrapper")).toHaveClass("my-wrapper-class")
    })

    test("renders all props as passed", () => {
      render(<NativeSelect data-lolol="some-random-prop" />)
      expect(screen.getByRole("combobox")).toBeInTheDocument()
      expect(screen.getByRole("combobox")).toHaveAttribute("data-lolol", "some-random-prop")
    })

    test("renders without value or label", () => {
      render(
        <NativeSelect>
          <option data-testid="option"></option>
        </NativeSelect>
      )
      expect(screen.getByRole("combobox")).toBeInTheDocument()
      expect(screen.getByTestId("option")).toBeInTheDocument()
    })

    test("renders multiple SelectOptionGroup components", () => {
      render(
        <NativeSelect>
          <optgroup label="Group 1">
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </optgroup>
          <optgroup label="Group 2">
            <option value="3">Option 3</option>
            <option value="4">Option 4</option>
          </optgroup>
        </NativeSelect>
      )
      expect(screen.getAllByRole("group")).toHaveLength(2)
      expect(screen.getAllByRole("option")).toHaveLength(4)
    })
  })

  describe("Event Handling", () => {
    test("executes onClick handler as passed", () => {
      const onClickSpy = vi.fn()
      render(<NativeSelect onClick={onClickSpy} />)
      const select = screen.getByRole("combobox")
      select.click()
      expect(onClickSpy).toHaveBeenCalled()
    })

    test("executes onChange handler as passed", () => {
      const handleChange = vi.fn()
      render(<NativeSelect onChange={handleChange} />)
      const select = screen.getByRole("combobox")
      fireEvent.change(select, { target: { value: "a" } })
      expect(handleChange).toHaveBeenCalledTimes(1)
    })

    test("does not execute onClick handler when disabled", () => {
      const onClickSpy = vi.fn()
      render(<NativeSelect onClick={onClickSpy} disabled />)
      screen.getByRole("combobox").click()
      expect(onClickSpy).not.toHaveBeenCalled()
    })

    test("does not execute onChange handler when disabled", () => {
      const onChangeSpy = vi.fn()
      render(<NativeSelect onChange={onChangeSpy} disabled />)
      screen.getByRole("combobox").click()
      expect(onChangeSpy).not.toHaveBeenCalled()
    })

    test("can not be clicked when loading", () => {
      const onClickSpy = vi.fn()
      render(<NativeSelect loading onClick={onClickSpy} />)
      screen.getByRole("combobox").click()
      expect(onClickSpy).not.toHaveBeenCalled()
    })
  })
})
