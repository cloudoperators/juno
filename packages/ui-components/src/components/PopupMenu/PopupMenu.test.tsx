import * as React from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import { PopupMenu } from "./index"

describe("PopupMenu", () => {
  test("renders a PopupMenu default toggle", () => {
    render(<PopupMenu />)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveClass("juno-popupmenu-toggle")
  })
  test("renders an overflow menu per default", () => {
    render(<PopupMenu />)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("alt", "more")
  })
  test("renders an icon in the toggle as passed", () => {
    render(<PopupMenu icon="warning" />)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("alt", "warning")
  })
  test("renders a PopupMenu.Toggle as toggle as passed as a prop", () => {
    render(<PopupMenu toggle={<PopupMenu.Toggle>My Toggle</PopupMenu.Toggle>} />)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveTextContent("My Toggle")
  })
  test("renders a plain button custom toggle as passed as a prop", () => {
    render(<PopupMenu toggle={<button data-testid="my-button">My custom button</button>} />)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByTestId("my-button")).toBeInTheDocument()
    expect(screen.getByTestId("my-button")).toHaveTextContent("My custom button")
  })
})
