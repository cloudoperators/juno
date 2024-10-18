/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { SearchInput } from "./index"

describe("SearchInput", () => {
  test("renders a valid html input type search", async () => {
    render(<SearchInput />)
    expect(screen.getByRole("searchbox")).toBeInTheDocument()
    expect(screen.getByRole("searchbox")).toHaveAttribute("type", "search")
  })

  test("renders a default name 'search'", async () => {
    render(<SearchInput />)
    expect(screen.getByRole("searchbox")).toBeInTheDocument()
    expect(screen.getByRole("searchbox")).toHaveAttribute("name", "search")
  })

  test("renders a name as passed", async () => {
    render(<SearchInput name="searchbox" />)
    expect(screen.getByRole("searchbox")).toBeInTheDocument()
    expect(screen.getByRole("searchbox")).toHaveAttribute("name", "searchbox")
  })

  test("renders a value as passed", async () => {
    render(<SearchInput value="blah" />)
    expect(screen.getByRole("searchbox")).toBeInTheDocument()
    expect(screen.getByRole("searchbox")).toHaveValue("blah")
  })

  test("renders a default placeholder 'Search…'", async () => {
    render(<SearchInput />)
    expect(screen.getByRole("searchbox")).toBeInTheDocument()
    expect(screen.getByRole("searchbox")).toHaveAttribute("placeholder", "Search…")
  })

  test("renders a placeholder as passed", async () => {
    render(<SearchInput placeholder="My custom placeholder" />)
    expect(screen.getByRole("searchbox")).toBeInTheDocument()
    expect(screen.getByRole("searchbox")).toHaveAttribute("placeholder", "My custom placeholder")
  })

  // EVENTS

  test("on click on search button fires onSearch handler as passed", async () => {
    const handleSearch = jest.fn()
    render(<SearchInput onSearch={handleSearch} />)
    await userEvent.click(screen.getByRole("button", { name: /search/i }))
    expect(handleSearch).toHaveBeenCalledTimes(1)
  })

  test("on click on search button fires onClick handler as passed", async () => {
    const handleClick = jest.fn()
    render(<SearchInput onClick={handleClick} />)
    await userEvent.click(screen.getByRole("button", { name: /search/i }))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test("on click on search button fires both onClick and onSearch handler if both are passed", async () => {
    const handleClick = jest.fn()
    const handleSearch = jest.fn()
    render(<SearchInput onClick={handleClick} onSearch={handleSearch} />)
    await userEvent.click(screen.getByRole("button", { name: /search/i }))
    expect(handleClick).toHaveBeenCalledTimes(1)
    expect(handleSearch).toHaveBeenCalledTimes(1)
  })

  test("on Enter keypress fires onSearch handler as passed", async () => {
    const handleSearch = jest.fn()
    render(<SearchInput onSearch={handleSearch} />)
    await userEvent.type(screen.getByRole("searchbox"), "{enter}")
    expect(handleSearch).toHaveBeenCalledTimes(1)
  })

  test("on keypresses other than 'Enter' does not fire onSearch handler as passed", async () => {
    const handleSearch = jest.fn()
    render(<SearchInput onSearch={handleSearch} />)
    await userEvent.type(screen.getByRole("searchbox"), "{shift}")
    expect(handleSearch).toHaveBeenCalledTimes(0)
  })

  // TODO check why this only works for {enter} All other keypresses seem to be ignored.
  // Not sure if this is a problem with the component or with testing-library
  // the onChange handler does get called three times if three characters are typed.
  // The same isn't true for the onKeyPress handler for some reason
  test("fires onKeyPress handler as passed on any keyPress", async () => {
    const handleKeyPress = jest.fn()
    render(<SearchInput onKeyPress={handleKeyPress} />)
    await userEvent.type(screen.getByRole("searchbox"), "{enter}")
    expect(handleKeyPress).toHaveBeenCalledTimes(1)
  })

  test("typing into the input leads to the input's value being changed", async () => {
    render(<SearchInput />)
    const input = screen.getByRole("searchbox")
    await userEvent.type(input, "abc")
    expect(input).toHaveValue("abc")
  })

  test("fires onChange handler as passed when something is typed into the input", async () => {
    const handleChange = jest.fn()
    render(<SearchInput onChange={handleChange} />)
    await userEvent.type(screen.getByRole("searchbox"), "abc")
    expect(handleChange).toHaveBeenCalledTimes(3)
  })

  test("renders a Clear icon if passed and field has a value", async () => {
    render(<SearchInput value="123" />)
    expect(screen.getByTitle("Clear")).toBeInTheDocument()
  })

  test("Clears the field when the Clear icon is clicked", async () => {
    render(<SearchInput value="abc" />)
    await userEvent.click(screen.getByTitle("Clear"))
    expect(screen.getByRole("searchbox")).toHaveValue("")
  })

  test("renders custom classNames as passed", async () => {
    render(<SearchInput className="my-custom-class" />)
    expect(screen.getByRole("search")).toHaveClass("my-custom-class")
  })

  test("renders all props as passed", async () => {
    render(<SearchInput name="My shiny little Message" />)
    expect(screen.getByRole("searchbox")).toHaveAttribute("name", "My shiny little Message")
  })

  // various props, disabled
})
