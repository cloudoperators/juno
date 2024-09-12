/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { Icon } from "./index"
import { describe, expect, test, vi } from "vitest"

describe("Icon (typescript)", () => {
  test("renders an Icon as passed", () => {
    render(<Icon icon="warning" />)
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("alt", "warning")
  })

  test("renders a custom className as passed", () => {
    render(<Icon className="my-custom-class" />)
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveClass("my-custom-class")
  })

  test("renders a default icon when none was passed", () => {
    render(<Icon />)
    expect(screen.getByRole("img")).toBeInTheDocument()
    // note: currently the default icon is the help icon
    expect(screen.getByRole("img")).toHaveAttribute("alt", "help")
  })

  test("renders an Icon with no text class by default so that text color is inherited from context", () => {
    render(<Icon />)
    expect(screen.getByRole("img")).toBeInTheDocument()
    // check that there is no class that contains 'text-'
    expect(screen.getByRole("img")).not.toHaveAttribute("class", expect.stringContaining("text-"))
  })

  test("renders an Icon with color as passed", () => {
    render(<Icon color="text-juno-blue" />)
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveClass("text-juno-blue")
  })

  test("renders an Icon with default size", () => {
    render(<Icon />)
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("width", "24")
    expect(screen.getByRole("img")).toHaveAttribute("height", "24")
  })

  test("renders an Icon with size as passed", () => {
    render(<Icon size={48} />)
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("width", "48")
    expect(screen.getByRole("img")).toHaveAttribute("height", "48")
  })

  test("renders a custom alt text instead of default when passed", () => {
    render(<Icon alt="my super custom icon alt text" />)
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("alt", "my super custom icon alt text")
  })

  // Test individual icons:

  test("renders an accessTime icon", () => {
    render(<Icon icon="accessTime" />)
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("alt", "time")
  })

  test("renders an accountCircle icon", () => {
    render(<Icon icon="accountCircle" />)
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("alt", "account")
  })

  test("renders an addCircle icon", () => {
    render(<Icon icon="addCircle" />)
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("alt", "add")
  })

  test("renders a autoAwesomeMosaic icon", () => {
    render(<Icon icon="autoAwesomeMosaic" />)
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("alt", "mosaic")
  })

  test("renders a autoAwesomeMotion icon", () => {
    render(<Icon icon="autoAwesomeMotion" />)
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("alt", "items stacked behind each other")
  })

  test("renders a bolt icon", () => {
    render(<Icon icon="bolt" />)
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("alt", "bolt")
  })

  test("renders a cancel icon", () => {
    render(<Icon icon="cancel" />)
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("alt", "cancel")
  })

  test("renders a check icon", () => {
    render(<Icon icon="check" />)
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("alt", "check")
  })

  test("renders a checkCircle icon", () => {
    render(<Icon icon="checkCircle" />)
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("alt", "checkCircle")
  })

  test("renders a chevronLeft icon", () => {
    render(<Icon icon="chevronLeft" />)
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("alt", "chevronLeft")
  })

  test("renders a chevronRight icon", () => {
    render(<Icon icon="chevronRight" />)
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("alt", "chevronRight")
  })

  test("renders a close icon", () => {
    render(<Icon icon="close" />)
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("alt", "close")
  })

  test("renders a copy icon", () => {
    render(<Icon icon="contentCopy" />)
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("alt", "copy")
  })

  test("renders a danger icon", () => {
    render(<Icon icon="danger" />)
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("alt", "danger")
  })

  test("renders a dangerous icon", () => {
    render(<Icon icon="dangerous" />)
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("alt", "dangerous")
  })

  test("renders a deleteForever icon", () => {
    render(<Icon icon="deleteForever" />)
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("alt", "delete forever")
  })

  test("renders a description icon", () => {
    render(<Icon icon="description" />)
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("alt", "description")
  })

  test("renders a dns icon", () => {
    render(<Icon icon="dns" />)
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("alt", "service")
  })

  test("renders an edit icon", () => {
    render(<Icon icon="edit" />)
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("alt", "edit")
  })

  test("renders an error icon", () => {
    render(<Icon icon="error" />)
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("alt", "error")
  })

  test("renders an outlined error icon", () => {
    render(<Icon icon="errorOutline" />)
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("alt", "error outline")
  })

  test("renders an exitToApp icon", () => {
    render(<Icon icon="exitToApp" />)
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("alt", "exit to other app")
  })

  test("renders an expandLess icon", () => {
    render(<Icon icon="expandLess" />)
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("alt", "expand less")
  })

  test("renders an expandMore icon", () => {
    render(<Icon icon="expandMore" />)
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("alt", "expand more")
  })

  test("renders an filterAlt icon", () => {
    render(<Icon icon="filterAlt" />)
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("alt", "filter")
  })

  test("renders an forum icon", () => {
    render(<Icon icon="forum" />)
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("alt", "forum")
  })

  test("renders a forum help icon", () => {
    render(<Icon icon="help" />)
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("alt", "help")
  })

  test("renders a Home icon", () => {
    render(<Icon icon="home" />)
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("alt", "home")
  })

  test("renders an info icon", () => {
    render(<Icon icon="info" />)
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("alt", "info")
  })

  test("renders a comment icon", () => {
    render(<Icon icon="comment" />)
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("alt", "comment")
  })

  test("renders a manageAccounts icon", () => {
    render(<Icon icon="manageAccounts" />)
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("alt", "user account configuration")
  })

  test("renders an openInBrowser icon", () => {
    render(<Icon icon="openInBrowser" />)
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("alt", "open in browser")
  })

  test("renders a place icon", () => {
    render(<Icon icon="place" />)
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("alt", "location")
  })

  test("renders a search icon", () => {
    render(<Icon icon="search" />)
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("alt", "search")
  })

  test("renders a success icon", () => {
    render(<Icon icon="success" />)
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("alt", "success")
  })

  test("renders a warning icon", () => {
    render(<Icon icon="warning" />)
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("alt", "warning")
  })

  test("renders a custom title", () => {
    render(<Icon title="My custom title" />)
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("img")).toContainHTML("<title>My custom title</title>")
  })

  test("renders an <a> element if href is passed as prop", () => {
    render(<Icon href="#" />)
    expect(screen.getByRole("link")).toBeInTheDocument()
    expect(screen.getByRole("link")).toHaveAttribute("href", "#")
  })

  test("renders an <a> element with correct aria-label-attribute as passed", () => {
    render(<Icon href="#" title="my link title" />)
    expect(screen.getByRole("link")).toBeInTheDocument()
    expect(screen.getByRole("link")).toHaveAttribute("aria-label", "my link title")
  })

  test("renders an <a> element with correct aria-label-attribute fallback if not passed", () => {
    render(<Icon href="#" icon="warning" />)
    expect(screen.getByRole("link")).toBeInTheDocument()
    expect(screen.getByRole("link")).toHaveAttribute("aria-label", "warning")
  })

  test("renders a <button> element if a click handler is passed", () => {
    const handleClick = vi.fn()
    render(<Icon onClick={handleClick} />)
    expect(screen.getByRole("button")).toBeInTheDocument()
  })

  test("renders a <button> element with correct aria-label-attribute as passed", () => {
    const handleClick = vi.fn()
    render(<Icon onClick={handleClick} title="my-button-title" />)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveAttribute("aria-label", "my-button-title")
  })

  test("renders a <button> element with correct aria-label-attribute fallback if not passed", () => {
    const handleClick = vi.fn()
    render(<Icon onClick={handleClick} icon="warning" />)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveAttribute("aria-label", "warning")
  })

  test("renders a disabled button element as passed", () => {
    const handleClick = vi.fn()
    render(<Icon onClick={handleClick} disabled />)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toBeDisabled()
  })

  test("an onClick handler is called as passed", () => {
    const handleClick = vi.fn()
    render(<Icon onClick={handleClick} />)
    screen.getByRole("button").click()
    expect(handleClick).toHaveBeenCalled()
  })

  test("does not execute onClick handler when disabled", () => {
    const handleClick = vi.fn()
    render(<Icon onClick={handleClick} disabled />)
    screen.getByRole("button").click()
    expect(handleClick).not.toHaveBeenCalled()
  })

  test("renders an <a> element and ignore onClick handler if both href and onClick handler are passed", () => {
    const handleClick = vi.fn()
    render(<Icon href="#" onClick={handleClick} />)
    expect(screen.getByRole("link")).toBeInTheDocument()
    expect(screen.getByRole("link")).toHaveAttribute("href", "#")
    screen.getByRole("link").click()
    expect(handleClick).not.toHaveBeenCalled()
  })

  // Test all props:

  test("renders all props as passed", () => {
    render(<Icon id="icon-1" data-lolol={true} />)
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("id", "icon-1")
    expect(screen.getByRole("img")).toHaveAttribute("data-lolol")
  })
})
