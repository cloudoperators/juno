/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { cleanup, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Select } from "../Select/Select.component"
import { SelectOption } from "../SelectOption/SelectOption.component"


describe("SelectOption", () => {
  
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });
  
  test("renders a SelectOption", async () => {
    render(
      <Select>
        <SelectOption value="Option 1" />
      </Select>
    )
    const toggle = screen.getByRole("button")
    expect(toggle).toBeInTheDocument()
    await userEvent.click(toggle)
    expect(screen.getByRole("option")).toBeInTheDocument()
    expect(screen.getByRole("option")).toHaveTextContent("Option 1")
  })

  test("renders a SelectOption with label as passed", async () => {
    render(
      <Select>
        <SelectOption value="option 1 value" label="Option 1 Label" />
      </Select>
    )
    const toggle = screen.getByRole("button")
    expect(toggle).toBeInTheDocument()
    await userEvent.click(toggle)
    expect(screen.getByRole("option")).toBeInTheDocument()
    expect(screen.getByRole("option")).toHaveTextContent("Option 1 Label")
  })

  test("renders a SelectOption with children as passed", async () => {
    render(
      <Select>
        <SelectOption value="option 1 value">Option 1 child</SelectOption>
      </Select>
    )
    const toggle = screen.getByRole("button")
    expect(toggle).toBeInTheDocument()
    await userEvent.click(toggle)
    expect(screen.getByRole("option")).toBeInTheDocument()
    expect(screen.getByRole("option")).toHaveTextContent("Option 1 child")
  })

  test("renders a SelectOption with children if both label and children are passed", async () => {
    render(
      <Select>
        <SelectOption value="option 1 value" label="Option 1 Label">Option 1 child</SelectOption>
      </Select>
    )
    const toggle = screen.getByRole("button")
    expect(toggle).toBeInTheDocument()
    await userEvent.click(toggle)
    expect(screen.getByRole("option")).toBeInTheDocument()
    expect(screen.getByRole("option")).toHaveTextContent("Option 1 child")
  })
  
  test("renders a className as passed", async () => {
    render(
      <Select open>
        <SelectOption className="my-fancy-class"/>
      </Select>
    )
    const toggle = screen.getByRole("button")
    expect(toggle).toBeInTheDocument()
    await userEvent.click(toggle)
    expect(screen.getByRole("option")).toBeInTheDocument()
    expect(screen.getByRole("option")).toHaveClass("my-fancy-class")
  })
  
  test("renders all props as passed", async () => {
    render(
      <Select open>
        <SelectOption data-lolol="123"/>
      </Select>
    )
    const toggle = screen.getByRole("button")
    expect(toggle).toBeInTheDocument()
    await userEvent.click(toggle)
    expect(screen.getByRole("option")).toBeInTheDocument()
    expect(screen.getByRole("option")).toHaveAttribute("data-lolol", "123")
  })
  
})