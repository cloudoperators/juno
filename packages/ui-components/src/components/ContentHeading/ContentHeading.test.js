/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { ContentHeading } from "./index"

describe("ContentHeading", () => {
  test("renders a content heading", async () => {
    render(<ContentHeading heading="My Heading" />)
    expect(screen.getByRole("heading")).toBeInTheDocument()
    expect(screen.getByRole("heading")).toHaveClass(
      "juno-content-heading"
    )
  })
  
  test("renders a content heading with the given text", async () => {
    render(<ContentHeading heading="My Heading" />)
    expect(screen.getByRole("heading")).toHaveTextContent("My Heading")
  })

  test("renders children as passed", async () => {
    render(
      <ContentHeading >
        <button></button>
      </ContentHeading>
    )
    expect(screen.getByRole("heading")).toBeInTheDocument()
    expect(screen.getByRole("button")).toBeInTheDocument()
  })

  test("renders a custom className", async () => {
    render(
      <ContentHeading
        className="my-custom-classname"
      />
    )
    expect(screen.getByRole("heading")).toBeInTheDocument()
    expect(screen.getByRole("heading")).toHaveClass(
      "my-custom-classname"
    )
  })

  test("renders all props", async () => {
    render(
      <ContentHeading
        data-lolol="some-prop"
      />
    )
    expect(screen.getByRole("heading")).toBeInTheDocument()
    expect(screen.getByRole("heading")).toHaveAttribute(
      "data-lolol",
      "some-prop"
    )
  })
})
