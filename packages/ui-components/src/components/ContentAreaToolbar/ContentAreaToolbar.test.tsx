/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { ContentAreaToolbar } from "./ContentAreaToolbar.component"

describe("ContentAreaToolbar", () => {
  test("renders a content area toolbar", () => {
    render(<ContentAreaToolbar data-testid="content-area-toolbar" />)
    expect(screen.getByTestId("content-area-toolbar")).toBeInTheDocument()
    expect(screen.getByTestId("content-area-toolbar")).toHaveClass("juno-content-area-toolbar")
  })

  test("renders without any props", () => {
    render(<ContentAreaToolbar data-testid="content-area-toolbar" />)
    expect(screen.getByTestId("content-area-toolbar")).toBeInTheDocument()
    expect(screen.getByTestId("content-area-toolbar")).toHaveClass("juno-content-area-toolbar")
  })

  test("renders children as passed", () => {
    render(
      <ContentAreaToolbar data-testid="content-area-toolbar">
        <button></button>
      </ContentAreaToolbar>
    )
    expect(screen.getByTestId("content-area-toolbar")).toBeInTheDocument()
    expect(screen.getByRole("button")).toBeInTheDocument()
  })

  test("renders multiple children elements", () => {
    render(
      <ContentAreaToolbar data-testid="content-area-toolbar">
        <button>Button 1</button>
        <button>Button 2</button>
      </ContentAreaToolbar>
    )
    expect(screen.getByTestId("content-area-toolbar")).toBeInTheDocument()
    expect(screen.getAllByRole("button")).toHaveLength(2)
  })

  test("renders with no children", () => {
    render(<ContentAreaToolbar data-testid="content-area-toolbar" />)
    expect(screen.getByTestId("content-area-toolbar")).toBeInTheDocument()
    expect(screen.getByTestId("content-area-toolbar").children).toHaveLength(0)
  })

  test("renders a custom className", () => {
    render(<ContentAreaToolbar data-testid="content-area-toolbar" className="my-custom-classname" />)
    expect(screen.getByTestId("content-area-toolbar")).toBeInTheDocument()
    expect(screen.getByTestId("content-area-toolbar")).toHaveClass("my-custom-classname")
  })

  test("renders all props", () => {
    render(<ContentAreaToolbar data-testid="content-area-toolbar" data-lolol="some-prop" />)
    expect(screen.getByTestId("content-area-toolbar")).toBeInTheDocument()
    expect(screen.getByTestId("content-area-toolbar")).toHaveAttribute("data-lolol", "some-prop")
  })
})
