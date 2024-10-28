/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { InputGroup } from "./"

import { Button } from "../Button"
import { TextInput } from "../TextInput"

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
      </InputGroup>
    )
    expect(document.querySelector(".juno-input-group")).toBeInTheDocument()
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveTextContent("A Button")
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveValue("some value")
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
      </InputGroup>
    )
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toBeDisabled()
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toBeDisabled()
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
