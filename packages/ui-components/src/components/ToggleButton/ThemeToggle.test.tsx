/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import { ToggleButton } from "./ToggleButton.component"

describe("ToggleButton Component", () => {
  it("renders plain values as labels", async () => {
    const options = ["state1", "state2"]
    const handleChange = vi.fn()

    render(<ToggleButton options={options} onChange={handleChange} />)
    const button = screen.getByRole("button")

    expect(button).toHaveTextContent("state1")

    await userEvent.click(button)
    expect(button).toHaveTextContent("state2")
    expect(handleChange).toHaveBeenCalledWith("state2")

    await userEvent.click(button)
    expect(button).toHaveTextContent("state1")
    expect(handleChange).toHaveBeenCalledWith("state1")
  })

  it("renders labels from array of objects with value and label", async () => {
    const options = [
      { value: "state1", label: "Label 1" },
      { value: "state2", label: "Label 2" },
    ]
    const handleChange = vi.fn()

    render(<ToggleButton options={options} onChange={handleChange} />)
    const button = screen.getByRole("button")

    expect(button).toHaveTextContent("Label 1")

    await userEvent.click(button)
    expect(button).toHaveTextContent("Label 2")
    expect(handleChange).toHaveBeenCalledWith("state2")

    await userEvent.click(button)
    expect(button).toHaveTextContent("Label 1")
    expect(handleChange).toHaveBeenCalledWith("state1")
  })

  it("uses renderLabel function for custom label rendering", async () => {
    const options = ["state1", "state2"]
    const customRenderLabel = vi.fn((value) => `Custom ${value}`)

    render(<ToggleButton options={options} renderLabel={customRenderLabel} />)
    const button = screen.getByRole("button")

    expect(button).toHaveTextContent("Custom state1")

    await userEvent.click(button)
    expect(button).toHaveTextContent("Custom state2")
  })
})
