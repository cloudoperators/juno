/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { ContentAreaWrapper } from "./index"

describe("ContentAreaWrapper", () => {
  test("renders a content area wrapper", async () => {
    render(<ContentAreaWrapper data-testid="content-area-wrapper" />)
    expect(screen.getByTestId("content-area-wrapper")).toBeInTheDocument()
    expect(screen.getByTestId("content-area-wrapper")).toHaveClass("juno-content-area-wrapper")
  })

  test("renders a content area with flex grow", async () => {
    render(<ContentAreaWrapper data-testid="content-area-wrapper" />)
    expect(screen.getByTestId("content-area-wrapper")).toBeInTheDocument()
    expect(screen.getByTestId("content-area-wrapper")).toHaveClass("jn-grow")
  })

  test("renders a content area with flex col layout", async () => {
    render(<ContentAreaWrapper data-testid="content-area-wrapper" />)
    expect(screen.getByTestId("content-area-wrapper")).toBeInTheDocument()
    expect(screen.getByTestId("content-area-wrapper")).toHaveClass("jn-flex-col")
  })

  test("renders children as passed", async () => {
    render(
      <ContentAreaWrapper data-testid="content-area-wrapper">
        <button></button>
      </ContentAreaWrapper>
    )
    expect(screen.getByTestId("content-area-wrapper")).toBeInTheDocument()
    expect(screen.getByRole("button")).toBeInTheDocument()
  })

  test("renders a custom className", async () => {
    render(<ContentAreaWrapper data-testid="content-area-wrapper" className="my-custom-classname" />)
    expect(screen.getByTestId("content-area-wrapper")).toBeInTheDocument()
    expect(screen.getByTestId("content-area-wrapper")).toHaveClass("my-custom-classname")
  })

  test("renders all props", async () => {
    render(<ContentAreaWrapper data-testid="content-area-wrapper" data-lolol="some-prop" />)
    expect(screen.getByTestId("content-area-wrapper")).toBeInTheDocument()
    expect(screen.getByTestId("content-area-wrapper")).toHaveAttribute("data-lolol", "some-prop")
  })
})
