/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { cleanup, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { ComboBox } from "../ComboBox/ComboBox.component"
import { ComboBoxOption } from "../ComboBoxOption/ComboBoxOption.component"


describe("ComboBoxOption", () => {
  
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });
  
  test("renders a ComboBoxOption", async () => {
    render(
      <ComboBox>
        <ComboBoxOption value="Option 1" />
      </ComboBox>
    )
    const toggle = screen.getByRole("button")
    expect(toggle).toBeInTheDocument()
    await userEvent.click(toggle)
    expect(screen.getByRole("option")).toBeInTheDocument()
    expect(screen.getByRole("option")).toHaveTextContent("Option 1")
  })

  test("renders a ComboBoxOption with label as passed", async () => {
    render(
      <ComboBox>
        <ComboBoxOption value="option 1 value" label="Option 1 Label" />
      </ComboBox>
    )
    const toggle = screen.getByRole("button")
    expect(toggle).toBeInTheDocument()
    await userEvent.click(toggle)
    expect(screen.getByRole("option")).toBeInTheDocument()
    expect(screen.getByRole("option")).toHaveTextContent("Option 1 Label")
  })

  test("renders a ComboBoxOption with children as passed", async () => {
    render(
      <ComboBox>
        <ComboBoxOption value="option 1 value">Option 1 child</ComboBoxOption>
      </ComboBox>
    )
    const toggle = screen.getByRole("button")
    expect(toggle).toBeInTheDocument()
    await userEvent.click(toggle)
    expect(screen.getByRole("option")).toBeInTheDocument()
    expect(screen.getByRole("option")).toHaveTextContent("Option 1 child")
  })

  test("renders a ComboBoxOption with children if both label and children are passed", async () => {
    render(
      <ComboBox>
        <ComboBoxOption value="option 1 value" label="Option 1 Label">Option 1 child</ComboBoxOption>
      </ComboBox>
    )
    const toggle = screen.getByRole("button")
    expect(toggle).toBeInTheDocument()
    await userEvent.click(toggle)
    expect(screen.getByRole("option")).toBeInTheDocument()
    expect(screen.getByRole("option")).toHaveTextContent("Option 1 child")
  })
  
  test("renders a className as passed", async () => {
    render(
      <ComboBox>
        <ComboBoxOption className="my-fancy-class"/>
      </ComboBox>
    )
    const toggle = screen.getByRole("button")
    expect(toggle).toBeInTheDocument()
    await userEvent.click(toggle)
    expect(screen.getByRole("option")).toBeInTheDocument()
    expect(screen.getByRole("option")).toHaveClass("my-fancy-class")
  })
  
  test("renders all props as passed", async () => {
    render(
      <ComboBox>
        <ComboBoxOption data-lolol="123"/>
      </ComboBox>
    )
    const toggle = screen.getByRole("button")
    expect(toggle).toBeInTheDocument()
    await userEvent.click(toggle)
    expect(screen.getByRole("option")).toBeInTheDocument()
    expect(screen.getByRole("option")).toHaveAttribute("data-lolol", "123")
  })
  
})