/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { Code } from "./index"

describe("Code", () => {
  test("renders inline code with content as passed", async () => {
    render(<Code data-testid="code" content="some example code" />)
    expect(screen.getByTestId("code")).toBeInTheDocument()
    expect(screen.getByTestId("code")).toHaveTextContent("some example code")
  })

  test("renders inline code with children as passed", async () => {
    render(<Code data-testid="code">Some example code as children</Code>)
    expect(screen.getByTestId("code")).toBeInTheDocument()
    expect(screen.getByTestId("code")).toHaveTextContent("Some example code as children")
  })

  test("renders inline code with content as passed when both content and children were passed", async () => {
    render(
      <Code data-testid="code" content="Content is go">
        Children are meh
      </Code>
    )
    expect(screen.getByTestId("code")).toBeInTheDocument()
    expect(screen.getByTestId("code")).toHaveTextContent("Content is go")
    expect(screen.getByTestId("code")).not.toHaveTextContent("Children are meh")
  })

  test("renders inline code with a className as passed", async () => {
    render(<Code data-testid="code" className="my-code-class"></Code>)
    expect(screen.getByTestId("code")).toBeInTheDocument()
    expect(screen.getByTestId("code")).toHaveClass("my-code-class")
  })

  test("renders inline code with all props as passed", async () => {
    render(<Code data-testid="code" data-lolol="code-lang-js"></Code>)
    expect(screen.getByTestId("code")).toBeInTheDocument()
    expect(screen.getByTestId("code")).toHaveAttribute("data-lolol", "code-lang-js")
  })
})
