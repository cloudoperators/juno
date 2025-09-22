import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"
import { ToggleButton } from "./ToggleButton.component"

describe("ToggleButton Component", () => {
  it("renders plain values as labels", async () => {
    const options = ["option1", "option2"]
    const handleChange = vi.fn()

    render(<ToggleButton options={options} onChange={handleChange} />)
    const button = screen.getByRole("button")

    expect(button).toHaveTextContent("option1")

    await userEvent.click(button)
    expect(button).toHaveTextContent("option2")
    expect(handleChange).toHaveBeenCalledWith("option2")

    await userEvent.click(button)
    expect(button).toHaveTextContent("option1")
    expect(handleChange).toHaveBeenCalledWith("option1")
  })

  it("renders labels from array of objects with value and label", async () => {
    const options = [
      { value: "option1", label: "Label 1" },
      { value: "option2", label: "Label 2" },
    ]
    const handleChange = vi.fn()

    render(<ToggleButton options={options} onChange={handleChange} />)
    const button = screen.getByRole("button")

    expect(button).toHaveTextContent("Label 1")

    await userEvent.click(button)
    expect(button).toHaveTextContent("Label 2")
    expect(handleChange).toHaveBeenCalledWith("option2")

    await userEvent.click(button)
    expect(button).toHaveTextContent("Label 1")
    expect(handleChange).toHaveBeenCalledWith("option1")
  })

  it("uses renderLabel function for custom label rendering", async () => {
    const options = ["option1", "option2"]
    const customRenderLabel = vi.fn((value) => `Custom ${value}`)

    render(<ToggleButton options={options} renderLabel={customRenderLabel} />)
    const button = screen.getByRole("button")

    expect(button).toHaveTextContent("Custom option1")

    await userEvent.click(button)
    expect(button).toHaveTextContent("Custom option2")
  })

  it("handles initial value correctly", async () => {
    const options = ["option1", "option2"]
    render(<ToggleButton options={options} value="option2" />)
    const button = screen.getByRole("button")

    expect(button).toHaveTextContent("option2")

    await userEvent.click(button)
    expect(button).toHaveTextContent("option1")
  })

  it("handles no label scenarios correctly", async () => {
    const options = [{ value: "option1" }, { value: "option2" }]
    render(<ToggleButton options={options} />)
    const button = screen.getByRole("button")

    expect(button).toHaveTextContent("")

    await userEvent.click(button)
    expect(button).toHaveTextContent("")
  })

  it("event handler not called when onChange not provided", async () => {
    const options = ["option1", "option2"]

    render(<ToggleButton options={options} />)
    const button = screen.getByRole("button")

    await userEvent.click(button)
    expect(button).toHaveTextContent("option2")
  })

  it("handles empty options array gracefully", async () => {
    render(<ToggleButton options={[]} />)
    const button = screen.getByRole("button")

    await userEvent.click(button)
    expect(button).toHaveTextContent("")
  })

  it("cycles through options correctly", async () => {
    const options = ["option1", { value: "option2", label: "Label 2" }, "option3"]
    const handleChange = vi.fn()

    render(<ToggleButton options={options} onChange={handleChange} />)
    const button = screen.getByRole("button")

    expect(button).toHaveTextContent("option1")

    await userEvent.click(button)
    expect(button).toHaveTextContent("Label 2")
    expect(handleChange).toHaveBeenCalledWith("option2")

    await userEvent.click(button)
    expect(button).toHaveTextContent("option3")
    expect(handleChange).toHaveBeenCalledWith("option3")

    await userEvent.click(button)
    expect(button).toHaveTextContent("option1")
    expect(handleChange).toHaveBeenCalledWith("option1")
  })
})
