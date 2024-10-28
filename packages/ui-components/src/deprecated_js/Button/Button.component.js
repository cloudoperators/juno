/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { InputGroup } from "./index"
import { Button } from "../../deprecated_js/Button/index"
import { TextInput } from "../../deprecated_js/TextInput/index"
import { NativeSelect } from "../NativeSelect/index"
import { NativeSelectOption } from "../NativeSelectOption/index"

describe("InputGroup", () => {
  test("renders an InputGroup", () => {
    render(<InputGroup />)
    expect(document.querySelector(".juno-input-group")).toBeInTheDocument()
  })

  test("renders children as passed", () => {
    render(
      <InputGroup>
        <Button label="A Button" />
        <TextInput value="some value" />
        <NativeSelect>
          <NativeSelectOption label="A Select Option" value="sel-opt-1" />
          <NativeSelectOption label="Another Select Option" value="sel-opt-2" />
        </NativeSelect>
      </InputGroup>
    )
    expect(document.querySelector(".juno-input-group")).toBeInTheDocument()
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveTextContent("A Button")
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveValue("some value")
    expect(screen.getByRole("combobox")).toBeInTheDocument() // use listbox for radix-based select
  })

  test("renders child button variants as passed to parent", () => {
    render(
      <InputGroup variant="primary-danger">
        <Button label="first" />
        <Button label="second" />
        <Button label="third" />
      </InputGroup>
    )
    expect(screen.getByRole("button", { name: "first" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "first" })).toHaveClass("juno-button-primary-danger")
    expect(screen.getByRole("button", { name: "second" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "second" })).toHaveClass("juno-button-primary-danger")
    expect(screen.getByRole("button", { name: "third" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "third" })).toHaveClass("juno-button-primary-danger")
  })

  test("allows child button variant to override variant passed to parent", () => {
    render(
      <InputGroup variant="primary-danger">
        <Button label="first" />
        <Button label="second" variant="primary" />
        <Button label="third" />
      </InputGroup>
    )
    expect(screen.getByRole("button", { name: "first" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "first" })).toHaveClass("juno-button-primary-danger")
    expect(screen.getByRole("button", { name: "second" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "second" })).not.toHaveClass("juno-button-primary-danger")
    expect(screen.getByRole("button", { name: "second" })).toHaveClass("juno-button-primary")
    expect(screen.getByRole("button", { name: "third" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "third" })).toHaveClass("juno-button-primary-danger")
  })

  test("disables all child elements as passed to parent", () => {
    render(
      <InputGroup disabled>
        <Button />
        <TextInput />
        <NativeSelect>
          <NativeSelectOption label="A Select Option" value="sel-opt-1" />
          <NativeSelectOption label="Another Select Option" value="sel-opt-2" />
        </NativeSelect>
      </InputGroup>
    )
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toBeDisabled()
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toBeDisabled()
    expect(screen.getByRole("combobox")).toBeInTheDocument()
    expect(screen.getByRole("combobox")).toBeDisabled()
  })

  test("renders a className as passed", () => {
    render(<InputGroup className="my-class" />)
    expect(document.querySelector(".juno-input-group")).toBeInTheDocument()
    expect(document.querySelector(".juno-input-group")).toHaveClass("my-class")
  })

  test("renders all props as passed", () => {
    render(<InputGroup data-test="my-prop" />)
    expect(document.querySelector(".juno-input-group")).toBeInTheDocument()
    expect(document.querySelector(".juno-input-group")).toHaveAttribute("data-test", "my-prop")
  })
})
