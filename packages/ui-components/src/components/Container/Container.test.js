/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { Container } from "./index"

describe("Container", () => {

  test("renders children as passed", async () => {
    render(
      <Container data-testid="container">
        <button></button>
      </Container>
    )
    expect(screen.getByTestId("container")).toBeInTheDocument()
    expect(screen.getByRole("button")).toBeInTheDocument()
  })
  
  test("renders a container with horizontal padding by default", async () => {
    render(<Container data-testid="container" />)
    expect(screen.getByTestId("container")).toBeInTheDocument()
    expect(screen.getByTestId("container")).toHaveClass("jn-px-6")
    expect(screen.getByTestId("container")).not.toHaveClass("jn-py-6")
  })
  
  test("renders a container without horizontal padding as passed", async () => {
    render(<Container data-testid="container" px={false} />)
    expect(screen.getByTestId("container")).toBeInTheDocument()
    expect(screen.getByTestId("container")).not.toHaveClass("jn-px-6")
    expect(screen.getByTestId("container")).not.toHaveClass("jn-py-6")
  })
  
  test("renders a container with vertical padding as passed", async () => {
    render(<Container data-testid="container" py={true} />)
    expect(screen.getByTestId("container")).toBeInTheDocument()
    expect(screen.getByTestId("container")).toHaveClass("jn-px-6")
    expect(screen.getByTestId("container")).toHaveClass("jn-py-6")
  })

  test("renders a custom className", async () => {
    render(
      <Container
        data-testid="container"
        className="my-custom-classname"
      />
    )
    expect(screen.getByTestId("container")).toBeInTheDocument()
    expect(screen.getByTestId("container")).toHaveClass(
      "my-custom-classname"
    )
  })

  test("renders all props", async () => {
    render(<Container data-testid="container" data-lolol="some-prop" />)
    expect(screen.getByTestId("container")).toBeInTheDocument()
    expect(screen.getByTestId("container")).toHaveAttribute(
      "data-lolol",
      "some-prop"
    )
  })
})
