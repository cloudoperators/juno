/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, test, beforeEach, afterEach, vi } from "vitest"

import { ThemeToggle } from "./ThemeToggle.component"

const mockOnToggleTheme = vi.fn()

describe("ThemeToggle", () => {
  let consoleWarnSpy: ReturnType<typeof vi.spyOn>
  // Set up console.warn spy
  beforeEach(() => {
    consoleWarnSpy = vi.spyOn(console, "warn").mockImplementation(() => {})
  })

  // Restore console.warn after each test
  afterEach(() => {
    consoleWarnSpy.mockRestore()
    mockOnToggleTheme.mockClear()
  })

  test("render a ThemeToggle", () => {
    render(<ThemeToggle />)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveClass("juno-theme-toggle")
  })

  test("renders a disabled ThemeToggle as passed", () => {
    render(<ThemeToggle disabled />)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toBeDisabled()
  })

  test("renders an id as passed", () => {
    render(<ThemeToggle id="my-theme-toggle" />)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveAttribute("id", "my-theme-toggle")
  })

  test("renders a name as passed", () => {
    render(<ThemeToggle name="my-theme-toggle" />)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveAttribute("name", "my-theme-toggle")
  })

  test("logs a console warning when no theme context is provided", () => {
    render(<ThemeToggle name="my-theme-toggle" />)
    expect(consoleWarnSpy).toHaveBeenCalledWith(
      "Juno ThemeToggle requires a StyleProvider context in order to work. Use ThemeToggle in a Juno AppShell or include StyleProvider manually."
    )
  })

  test("executes an onToggle handler when the user toggles the theme", async () => {
    render(<ThemeToggle onToggleTheme={mockOnToggleTheme} />)
    const user = userEvent.setup()
    const toggleButton = screen.getByRole("button")

    await user.click(toggleButton)

    await waitFor(() => {
      expect(mockOnToggleTheme).toHaveBeenCalled()
    })
  })

  test("renders a custom classNames as passed", () => {
    render(<ThemeToggle className="my-custom-class" />)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveClass("my-custom-class")
  })

  test("renders arbitrary props as passed", () => {
    render(<ThemeToggle data-lolol="My theme toggle" />)
    expect(screen.getByRole("button")).toHaveAttribute("data-lolol", "My theme toggle")
  })
})
