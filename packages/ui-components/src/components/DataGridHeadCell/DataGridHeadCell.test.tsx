/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { DataGridHeadCell } from "./index"

describe("DataGridHeadCell", () => {
  test("renders a DataGridHeadCell", () => {
    render(<DataGridHeadCell />)
    expect(screen.getByRole("columnheader")).toBeInTheDocument()
  })

  test("renders a custom className", () => {
    render(<DataGridHeadCell className="my-custom-class" />)
    expect(screen.getByRole("columnheader")).toHaveClass("my-custom-class")
  })

  test("renders arbitrary props", () => {
    render(<DataGridHeadCell data-testid="my-head-cell" data-foo="bar" />)
    expect(screen.getByTestId("my-head-cell")).toHaveAttribute("data-foo", "bar")
  })

  test("renders nowrap class when nowrap is set", () => {
    render(<DataGridHeadCell nowrap />)
    expect(screen.getByRole("columnheader")).toHaveClass("jn:whitespace-nowrap")
  })

  test("renders no-wrap class when textContain='no-wrap'", () => {
    render(<DataGridHeadCell textContain="no-wrap" />)
    expect(screen.getByRole("columnheader")).toHaveClass("jn:whitespace-nowrap")
  })

  test("textContain takes precedence over deprecated nowrap", () => {
    render(<DataGridHeadCell nowrap textContain="break-word" />)
    expect(screen.getByRole("columnheader")).toHaveClass("jn:break-words")
    expect(screen.getByRole("columnheader")).not.toHaveClass("jn:whitespace-nowrap")
  })

  test("wraps truncate-end content in an inner block element carrying the truncate class", () => {
    render(<DataGridHeadCell textContain="truncate-end">content</DataGridHeadCell>)
    const cell = screen.getByRole("columnheader")
    expect(cell).not.toHaveClass("jn:truncate")
    const inner = cell.querySelector(".juno-datagrid-cell-truncate")
    expect(inner).toHaveClass("jn:block")
    expect(inner).toHaveClass("jn:truncate")
    expect(inner).toHaveTextContent("content")
    expect(cell.querySelector("bdi")).toBeNull()
  })

  test("adds min-w-0 to truncating cells so they can shrink within the grid track", () => {
    render(<DataGridHeadCell textContain="truncate-end" />)
    expect(screen.getByRole("columnheader")).toHaveClass("jn:min-w-0")
  })

  test("adds min-w-0 to break-word cells so they wrap within the grid track instead of widening it", () => {
    render(<DataGridHeadCell textContain="break-word" />)
    expect(screen.getByRole("columnheader")).toHaveClass("jn:min-w-0")
  })

  test("does not add min-w-0 to no-wrap cells (they stay on one line by design)", () => {
    render(<DataGridHeadCell textContain="no-wrap" />)
    expect(screen.getByRole("columnheader")).not.toHaveClass("jn:min-w-0")
  })

  test("isolates truncate-start content in a <bdi> so edge punctuation is not reordered by direction:rtl", () => {
    render(<DataGridHeadCell textContain="truncate-start">Ready!</DataGridHeadCell>)
    const cell = screen.getByRole("columnheader")
    const bdi = cell.querySelector("bdi")
    expect(bdi).not.toBeNull()
    expect(bdi).toHaveTextContent("Ready!")
    expect(cell.querySelector(".juno-datagrid-cell-truncate")?.contains(bdi)).toBe(true)
  })

  test("renders break-words class when textContain='break-word'", () => {
    render(<DataGridHeadCell textContain="break-word" />)
    expect(screen.getByRole("columnheader")).toHaveClass("jn:break-words")
  })

  test("renders break-all class when textContain='break-all'", () => {
    render(<DataGridHeadCell textContain="break-all" />)
    expect(screen.getByRole("columnheader")).toHaveClass("jn:break-all")
  })

  test("non-truncating textContain is applied to the cell without an inner wrapper", () => {
    render(<DataGridHeadCell textContain="break-word">content</DataGridHeadCell>)
    const cell = screen.getByRole("columnheader")
    expect(cell).toHaveClass("jn:break-words")
    expect(cell.querySelector(".juno-datagrid-cell-truncate")).toBeNull()
  })
})
