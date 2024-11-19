import * as React from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import { PopupMenu } from "./index"
import { Button } from "../Button/"

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
  test("renders a PopupMenu.Toggle as toggle button as passed as a prop", () => {
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
  test("renders a Juno Button component as a toggle as passed as a prop", () => {
    render(<PopupMenu toggle={<Button>My Juno Button</Button>} />)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveClass("juno-button")
  })
  test("renders a non-button element wrapped in a button as passed as a prop", () => {
    render(<PopupMenu toggle={<div data-testid="my-non-button">Not a button</div>} />)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveClass("juno-popupmenu-toggle")
    expect(screen.getByTestId("my-non-button").closest(".juno-popupmenu-toggle")).toBeInTheDocument()
  })
})
