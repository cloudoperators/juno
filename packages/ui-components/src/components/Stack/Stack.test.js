/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { Stack } from "./index"

describe("Stack", () => {
  test("renders a Stack and has flexbox layout", async () => {
    render(<Stack data-testid="my-stack"></Stack>)
    expect(screen.getByTestId("my-stack")).toBeInTheDocument()
    expect(screen.getByTestId("my-stack")).toHaveClass("jn-flex")
  })

  test("renders a default Stack, stacked horizontally, no gap", async () => {
    render(<Stack data-testid="my-stack"></Stack>)
    expect(screen.getByTestId("my-stack")).toBeInTheDocument()
    expect(screen.getByTestId("my-stack")).toHaveClass("jn-flex-row", "jn-gap-0")
  })

  test("renders a vertical Stack, no gap", async () => {
    render(<Stack data-testid="my-stack" direction="vertical"></Stack>)
    expect(screen.getByTestId("my-stack")).toBeInTheDocument()
    expect(screen.getByTestId("my-stack")).toHaveClass("jn-flex-col", "jn-gap-0")
  })

  test("renders a Stack with gap 4", async () => {
    render(<Stack data-testid="my-stack" gap="4"></Stack>)
    expect(screen.getByTestId("my-stack")).toBeInTheDocument()
    expect(screen.getByTestId("my-stack")).toHaveClass("jn-gap-4")
  })

  test("renders a Stack to have alignment stretch by default", async () => {
    render(<Stack data-testid="my-stack"></Stack>)
    expect(screen.getByTestId("my-stack")).toBeInTheDocument()
    expect(screen.getByTestId("my-stack")).toHaveClass("jn-items-stretch")
  })

  test("renders a Stack with items aligned to center", async () => {
    render(<Stack data-testid="my-stack" alignment="center"></Stack>)
    expect(screen.getByTestId("my-stack")).toBeInTheDocument()
    expect(screen.getByTestId("my-stack")).toHaveClass("jn-items-center")
  })

  test("renders a Stack to have justification to start by default", async () => {
    render(<Stack data-testid="my-stack"></Stack>)
    expect(screen.getByTestId("my-stack")).toBeInTheDocument()
    expect(screen.getByTestId("my-stack")).toHaveClass("jn-justify-start")
  })

  test("renders a Stack with items justified center", async () => {
    render(<Stack data-testid="my-stack" distribution="center"></Stack>)
    expect(screen.getByTestId("my-stack")).toBeInTheDocument()
    expect(screen.getByTestId("my-stack")).toHaveClass("jn-justify-center")
  })

  test("renders a Stack with nowrap by default", async () => {
    render(<Stack data-testid="my-stack"></Stack>)
    expect(screen.getByTestId("my-stack")).toBeInTheDocument()
    expect(screen.getByTestId("my-stack")).not.toHaveClass("jn-flex-wrap")
  })

  test("renders a Stack with flex wrap", async () => {
    render(<Stack data-testid="my-stack" wrap={true}></Stack>)
    expect(screen.getByTestId("my-stack")).toBeInTheDocument()
    expect(screen.getByTestId("my-stack")).toHaveClass("jn-flex-wrap")
  })

  test("renders custom classNames as passed", async () => {
    render(<Stack data-testid="my-stack" className="my-custom-class" />)
    expect(screen.getByTestId("my-stack")).toHaveClass("my-custom-class")
  })

  test("renders all props as passed", async () => {
    render(<Stack data-testid="my-stack" name="My shiny little Message" />)
    expect(screen.getByTestId("my-stack")).toHaveAttribute("name", "My shiny little Message")
  })
})
