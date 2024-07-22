/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import { ContentArea } from "./index"

globalThis.console.warn = jest.fn()
describe("ContentArea", () => {
  test("renders a content area", async () => {
    render(<ContentArea data-testid="content-area" />)
    expect(console.warn).toHaveBeenCalled()
    expect(screen.getByTestId("content-area")).toBeInTheDocument()
    expect(screen.getByTestId("content-area")).toHaveClass("juno-content-area")
  })

  test("renders a deprecation warning to the console", async () => {
    const consoleWarnSpy = jest.spyOn(console, "warn")
    render(<ContentArea />)
    expect(consoleWarnSpy).toHaveBeenCalled()
    expect(consoleWarnSpy).toHaveBeenCalledWith(
      "ContentArea is deprecated and will be removed in future versions. To be future-proof, use AppShell to scaffold an app layout."
    )
    consoleWarnSpy.mockRestore()
  })

  test("renders a content area with content area background color", async () => {
    render(<ContentArea data-testid="content-area" />)
    expect(screen.getByTestId("content-area")).toBeInTheDocument()
    expect(screen.getByTestId("content-area")).toHaveClass(
      "jn-bg-theme-content-area-bg"
    )
  })

  test("renders a content area with flex grow", async () => {
    render(<ContentArea data-testid="content-area" />)
    expect(screen.getByTestId("content-area")).toBeInTheDocument()
    expect(screen.getByTestId("content-area")).toHaveClass("jn-grow")
  })

  test("renders children as passed", async () => {
    render(
      <ContentArea data-testid="content-area">
        <button></button>
      </ContentArea>
    )
    expect(screen.getByTestId("content-area")).toBeInTheDocument()
    expect(screen.getByRole("button")).toBeInTheDocument()
  })

  test("renders a custom className", async () => {
    render(
      <ContentArea data-testid="content-area" className="my-custom-classname" />
    )
    expect(screen.getByTestId("content-area")).toBeInTheDocument()
    expect(screen.getByTestId("content-area")).toHaveClass(
      "my-custom-classname"
    )
  })

  test("renders all props", async () => {
    render(<ContentArea data-testid="content-area" data-lolol="some-prop" />)
    expect(screen.getByTestId("content-area")).toBeInTheDocument()
    expect(screen.getByTestId("content-area")).toHaveAttribute(
      "data-lolol",
      "some-prop"
    )
  })
})
