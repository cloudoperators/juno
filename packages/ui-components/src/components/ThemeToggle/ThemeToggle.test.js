import * as React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { ThemeToggle } from "./index"


describe("Toast", () => {
  test("render a ThemeToggle", async () => {
    render(<ThemeToggle />)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveClass("juno-theme-toggle")
  })

  test("renders a custom classNames as passed", async () => {
    render(<ThemeToggle className="my-custom-class" />)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveClass("my-custom-class")
  })

  test("renders arbitrary props as passed", async () => {
    render(<ThemeToggle data-lolol="My theme toggle" />)
    expect(screen.getByRole("button")).toHaveAttribute(
      "data-lolol",
      "My theme toggle"
    )
  })
})
