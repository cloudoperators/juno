import * as React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { ThemeToggle } from "./index"
import { StyleProvider} from "../StyleProvider/index"

const mockOnToggleTheme = jest.fn()

describe("ThemeToggle", () => {
  let consoleWarnSpy;
  
  
  // Set up console.warn spy
  beforeEach(() => {
    consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
  })
  
  // Restore console.warn after each test
  afterEach(() => {
    consoleWarnSpy.mockRestore();
  });
  
  test("render a ThemeToggle", async () => {
    render(<ThemeToggle />)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveClass("juno-theme-toggle")
  })
  
  test("renders a disabled ThemeToggle as passed", async () => {
    render(<ThemeToggle disabled/>)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toBeDisabled()
  })
  
  test("renders an id as passed", async () => {
    render(<ThemeToggle id="my-theme-toggle"/>)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveAttribute("id", "my-theme-toggle")
  })
  
  test("renders a name as passed", async () => {
    render(<ThemeToggle name="my-theme-toggle"/>)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveAttribute("name", "my-theme-toggle")
  }) 
  
  test("logs a console warning when no theme context is provided", async () => {
    render(<ThemeToggle name="my-theme-toggle"/>)
    expect(consoleWarnSpy).toHaveBeenCalledWith(
     "Juno ThemeToggle requires a StyleProvider context in order to work. Use ThemeToggle in a Juno AppShell or include StyleProvider manually."
    )
  })
  
  test("executes an onToggle handler when the user toggles the theme", async () => {
    render(<ThemeToggle onToggleTheme={mockOnToggleTheme} />)
    const user = userEvent.setup()
    const toggleButton = screen.getByRole("button")
    user.click(toggleButton)
    await waitFor(() => {
      expect(mockOnToggleTheme).toHaveBeenCalled()
    })
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
