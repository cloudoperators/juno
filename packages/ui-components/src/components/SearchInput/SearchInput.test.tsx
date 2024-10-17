/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, test, vi } from "vitest"
import { SearchInput } from "./"

describe("SearchInput Component", () => {
  describe("Basic Rendering", () => {
    test("should render a valid HTML input type 'search'", () => {
      render(<SearchInput />)
      expect(screen.getByRole("searchbox")).toBeInTheDocument()
      expect(screen.getByRole("searchbox")).toHaveAttribute("type", "search")
    })
  })

  describe("Placeholder Handling", () => {
    test("should render a default placeholder 'Search…'", () => {
      render(<SearchInput />)
      expect(screen.getByRole("searchbox")).toHaveAttribute("placeholder", "Search…")
    })

    test("should render a specific placeholder when provided", () => {
      render(<SearchInput placeholder="My custom placeholder" />)
      expect(screen.getByRole("searchbox")).toHaveAttribute("placeholder", "My custom placeholder")
    })
  })

  describe("Value Handling", () => {
    test("should render a specific value when provided", () => {
      render(<SearchInput value="blah" />)
      expect(screen.getByRole("searchbox")).toHaveValue("blah")
    })

    test("should render a Clear icon if the field has a value", () => {
      render(<SearchInput value="123" />)
      expect(screen.getByTitle("Clear")).toBeInTheDocument()
    })

    test("should update the input's value when typing", async () => {
      render(<SearchInput />)
      const input = screen.getByRole("searchbox")
      await userEvent.type(input, "abc")
      expect(input).toHaveValue("abc")
    })
  })

  describe("Attributes and ClassNames", () => {
    test("should render with the default name 'search'", () => {
      render(<SearchInput />)
      expect(screen.getByRole("searchbox")).toHaveAttribute("name", "search")
    })

    test("should render with a specific name when provided", () => {
      render(<SearchInput name="searchbox" />)
      expect(screen.getByRole("searchbox")).toHaveAttribute("name", "searchbox")
    })

    test("should apply all provided props", () => {
      render(<SearchInput name="My shiny little Message" />)
      expect(screen.getByRole("searchbox")).toHaveAttribute("name", "My shiny little Message")
    })

    test("should apply custom classNames when provided", () => {
      render(<SearchInput className="my-custom-class" />)
      expect(screen.getByRole("search")).toHaveClass("my-custom-class")
    })
  })

  describe("Disabled State", () => {
    test("should disable the search input when 'disabled' prop is passed", () => {
      render(<SearchInput disabled />)
      expect(screen.getByRole("searchbox")).toBeDisabled()
    })
  })

  describe("Event Handlers", () => {
    test("should trigger 'onSearch' handler when search button is clicked", async () => {
      const handleSearch = vi.fn()
      render(<SearchInput onSearch={handleSearch} />)
      await userEvent.click(screen.getByRole("button", { name: /search/i }))
      expect(handleSearch).toHaveBeenCalledTimes(1)
    })

    test("should trigger 'onClick' handler when search button is clicked", async () => {
      const handleClick = vi.fn()
      render(<SearchInput onClick={handleClick} />)
      await userEvent.click(screen.getByRole("button", { name: /search/i }))
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    test("should trigger both 'onClick' and 'onSearch' handlers when search button is clicked if both are provided", async () => {
      const handleClick = vi.fn()
      const handleSearch = vi.fn()
      render(<SearchInput onClick={handleClick} onSearch={handleSearch} />)
      await userEvent.click(screen.getByRole("button", { name: /search/i }))
      expect(handleClick).toHaveBeenCalledTimes(1)
      expect(handleSearch).toHaveBeenCalledTimes(1)
    })

    test("should trigger 'onSearch' handler when Enter key is pressed", async () => {
      const handleSearch = vi.fn()
      render(<SearchInput onSearch={handleSearch} />)
      await userEvent.type(screen.getByRole("searchbox"), "{enter}")
      expect(handleSearch).toHaveBeenCalledTimes(1)
    })

    test("should not trigger 'onSearch' handler when keys other than Enter are pressed", async () => {
      const handleSearch = vi.fn()
      render(<SearchInput onSearch={handleSearch} />)
      await userEvent.type(screen.getByRole("searchbox"), "{shift}")
      expect(handleSearch).toHaveBeenCalledTimes(0)
    })

    test("should trigger 'onKeyPress' handler when any key is pressed, including Enter", async () => {
      const handleKeyPress = vi.fn()
      render(<SearchInput onKeyPress={handleKeyPress} />)
      await userEvent.type(screen.getByRole("searchbox"), "{enter}abc")
      expect(handleKeyPress).toHaveBeenCalledTimes(4)
    })

    test("should trigger 'onChange' handler as text is typed", async () => {
      const handleChange = vi.fn()
      render(<SearchInput onChange={handleChange} />)
      await userEvent.type(screen.getByRole("searchbox"), "abc")
      expect(handleChange).toHaveBeenCalledTimes(3)
    })

    test("should trigger 'onClear' handler when Clear icon is clicked", async () => {
      const handleClear = vi.fn()
      render(<SearchInput value="abc" onClear={handleClear} />)
      await userEvent.click(screen.getByTitle("Clear"))
      expect(handleClear).toHaveBeenCalledTimes(1)
    })
  })

  describe("Clear Button Logic", () => {
    test("should render a Clear icon if the field has a value", () => {
      render(<SearchInput value="123" />)
      expect(screen.getByTitle("Clear")).toBeInTheDocument()
    })

    test("should clear the input when the Clear icon is clicked", async () => {
      render(<SearchInput value="abc" />)
      await userEvent.click(screen.getByTitle("Clear"))
      expect(screen.getByRole("searchbox")).toHaveValue("")
    })

    test("should trigger 'onClear' handler when the Clear icon is clicked", async () => {
      const handleClear = vi.fn()
      render(<SearchInput value="abc" onClear={handleClear} />)
      await userEvent.click(screen.getByTitle("Clear"))
      expect(handleClear).toHaveBeenCalledTimes(1)
    })
  })
})
