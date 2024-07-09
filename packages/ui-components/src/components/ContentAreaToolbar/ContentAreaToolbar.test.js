/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { ContentAreaToolbar } from "./index"

describe("ContentAreaToolbar", () => {
  test("renders a content area toolbar", async () => {
    render(<ContentAreaToolbar data-testid="content-area-toolbar" />)
    expect(screen.getByTestId("content-area-toolbar")).toBeInTheDocument()
    expect(screen.getByTestId("content-area-toolbar")).toHaveClass("juno-content-area-toolbar")
  })

  test("renders children as passed", async () => {
    render(
      <ContentAreaToolbar data-testid="content-area-toolbar">
        <button></button>
      </ContentAreaToolbar>
    )
    expect(screen.getByTestId("content-area-toolbar")).toBeInTheDocument()
    expect(screen.getByRole("button")).toBeInTheDocument()
  })

  test("renders a custom className", async () => {
    render(
      <ContentAreaToolbar
        data-testid="content-area-toolbar"
        className="my-custom-classname"
      />
    )
    expect(screen.getByTestId("content-area-toolbar")).toBeInTheDocument()
    expect(screen.getByTestId("content-area-toolbar")).toHaveClass(
      "my-custom-classname"
    )
  })

  test("renders all props", async () => {
    render(
      <ContentAreaToolbar data-testid="content-area-toolbar" data-lolol="some-prop" />
    )
    expect(screen.getByTestId("content-area-toolbar")).toBeInTheDocument()
    expect(screen.getByTestId("content-area-toolbar")).toHaveAttribute(
      "data-lolol",
      "some-prop"
    )
  })
})
