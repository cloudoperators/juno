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
  })
})
