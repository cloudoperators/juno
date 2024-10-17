/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, test, vi } from "vitest"
import { SearchInput } from "./"

describe("SearchInput", () => {
  describe("Rendering", () => {
    test("renders a valid HTML input type 'search'", () => {
      render(<SearchInput />)
      expect(screen.getByRole("searchbox")).toBeInTheDocument()
      expect(screen.getByRole("searchbox")).toHaveAttribute("type", "search")
    })

    test("renders custom classNames when passed", () => {
      render(<SearchInput className="my-custom-class" />)
      expect(screen.getByRole("search")).toHaveClass("my-custom-class")
    })

    test("renders a default placeholder 'Search…'", () => {
      render(<SearchInput />)
      expect(screen.getByRole("searchbox")).toHaveAttribute("placeholder", "Search…")
    })

    test("renders a specific placeholder when passed", () => {
      render(<SearchInput placeholder="My custom placeholder" />)
      expect(screen.getByRole("searchbox")).toHaveAttribute("placeholder", "My custom placeholder")
    })

    test("renders a specific value when passed", () => {
      render(<SearchInput value="blah" />)
      expect(screen.getByRole("searchbox")).toHaveValue("blah")
    })

    test("renders a Clear icon if field has a value", () => {
      render(<SearchInput value="123" />)
      expect(screen.getByTitle("Clear")).toBeInTheDocument()
    })
  })

  describe("Attributes", () => {
    test("renders a default name 'search'", () => {
      render(<SearchInput />)
      expect(screen.getByRole("searchbox")).toHaveAttribute("name", "search")
    })

    test("renders a specific name when passed", () => {
      render(<SearchInput name="searchbox" />)
      expect(screen.getByRole("searchbox")).toHaveAttribute("name", "searchbox")
    })

    test("renders all props as passed", () => {
      render(<SearchInput name="My shiny little Message" />)
      expect(screen.getByRole("searchbox")).toHaveAttribute("name", "My shiny little Message")
    })
  })

  describe("Disabled State", () => {
    test("disables the search input when disabled prop is passed", () => {
      render(<SearchInput disabled />)
      expect(screen.getByRole("searchbox")).toBeDisabled()
    })
  })

  describe("Event Handlers", () => {
    test("clicking search button triggers onSearch handler", async () => {
      const handleSearch = vi.fn()
      render(<SearchInput onSearch={handleSearch} />)
      await userEvent.click(screen.getByRole("button", { name: /search/i }))
      expect(handleSearch).toHaveBeenCalledTimes(1)
    })

    test("clicking search button triggers onClick handler", async () => {
      const handleClick = vi.fn()
      render(<SearchInput onClick={handleClick} />)
      await userEvent.click(screen.getByRole("button", { name: /search/i }))
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    test("clicking search button triggers both onClick and onSearch handlers if both are passed", async () => {
      const handleClick = vi.fn()
      const handleSearch = vi.fn()
      render(<SearchInput onClick={handleClick} onSearch={handleSearch} />)
      await userEvent.click(screen.getByRole("button", { name: /search/i }))
      expect(handleClick).toHaveBeenCalledTimes(1)
      expect(handleSearch).toHaveBeenCalledTimes(1)
    })

    test("pressing Enter key triggers onSearch handler", async () => {
      const handleSearch = vi.fn()
      render(<SearchInput onSearch={handleSearch} />)
      await userEvent.type(screen.getByRole("searchbox"), "{enter}")
      expect(handleSearch).toHaveBeenCalledTimes(1)
    })

    test("pressing keys other than Enter does not trigger onSearch handler", async () => {
      const handleSearch = vi.fn()
      render(<SearchInput onSearch={handleSearch} />)
      await userEvent.type(screen.getByRole("searchbox"), "{shift}")
      expect(handleSearch).toHaveBeenCalledTimes(0)
    })

    test("fires onKeyPress handler when any key is pressed, including Enter", async () => {
      const handleKeyDown = vi.fn()
      render(<SearchInput onKeyPress={handleKeyDown} />)
      await userEvent.type(screen.getByRole("searchbox"), "{enter}abc")
      expect(handleKeyDown).toHaveBeenCalledTimes(4)
    })

    test("typing updates the input value", async () => {
      render(<SearchInput />)
      const input = screen.getByRole("searchbox")
      await userEvent.type(input, "abc")
      expect(input).toHaveValue("abc")
    })

    test("fires onChange handler as text is typed", async () => {
      const handleChange = vi.fn()
      render(<SearchInput onChange={handleChange} />)
      await userEvent.type(screen.getByRole("searchbox"), "abc")
      expect(handleChange).toHaveBeenCalledTimes(3)
    })

    test("fires onClear handler when Clear icon is clicked", async () => {
      const handleClear = vi.fn()
      render(<SearchInput value="abc" onClear={handleClear} />)
      await userEvent.click(screen.getByTitle("Clear"))
      expect(handleClear).toHaveBeenCalledTimes(1)
    })
  })

  describe("Clear Button Logic", () => {
    test("renders a Clear icon if field has a value", () => {
      render(<SearchInput value="123" />)
      expect(screen.getByTitle("Clear")).toBeInTheDocument()
    })

    test("clears the input when Clear icon is clicked", async () => {
      render(<SearchInput value="abc" />)
      await userEvent.click(screen.getByTitle("Clear"))
      expect(screen.getByRole("searchbox")).toHaveValue("")
    })

    test("fires onClear handler when Clear icon is clicked", async () => {
      const handleClear = vi.fn()
      render(<SearchInput value="abc" onClear={handleClear} />)
      await userEvent.click(screen.getByTitle("Clear"))
      expect(handleClear).toHaveBeenCalledTimes(1)
    })
  })
})
