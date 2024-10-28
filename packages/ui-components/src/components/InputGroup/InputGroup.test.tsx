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
  describe("Basic Rendering", () => {
    test("renders an InputGroup", () => {
      render(<InputGroup />)
      expect(document.querySelector(".juno-input-group")).toBeInTheDocument()
    })

    test("renders without children", () => {
      render(<InputGroup />)
      expect(document.querySelector(".juno-input-group")).toBeInTheDocument()
      expect(screen.queryByRole("button")).not.toBeInTheDocument()
      expect(screen.queryByRole("textbox")).not.toBeInTheDocument()
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
  })

  describe("Variant Handling", () => {
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
  })

  describe("Disabled State", () => {
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

    test("renders with a mix of enabled and disabled children", () => {
      render(
        <InputGroup>
          <Button label="Enabled" />
          <Button label="Disabled" disabled />
        </InputGroup>
      )
      expect(screen.getByRole("button", { name: "Enabled" })).toBeInTheDocument()
      expect(screen.getByRole("button", { name: "Enabled" })).not.toBeDisabled()
      expect(screen.getByRole("button", { name: "Disabled" })).toBeInTheDocument()
      expect(screen.getByRole("button", { name: "Disabled" })).toBeDisabled()
    })
  })

  describe("Class and Props Handling", () => {
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

    test("allows custom attributes to be passed to children", () => {
      render(
        <InputGroup>
          <Button label="Custom" data-custom="custom-attribute" />
        </InputGroup>
      )
      expect(screen.getByRole("button", { name: "Custom" })).toBeInTheDocument()
      expect(screen.getByRole("button", { name: "Custom" })).toHaveAttribute("data-custom", "custom-attribute")
    })
  })
})
