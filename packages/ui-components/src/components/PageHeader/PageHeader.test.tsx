/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { PageHeader } from "."

describe("PageHeader", () => {
  test("renders a simple Page Header and has flexbox layout", () => {
    render(<PageHeader />)
    expect(screen.getByRole("banner")).toBeInTheDocument()
    expect(screen.getByRole("banner")).toHaveClass("jn-flex")
  })

  test("renders a Page Header with heading as passed", () => {
    render(<PageHeader heading="My Test Heading" />)
    expect(screen.getByRole("banner")).toBeInTheDocument()
    expect(screen.getByRole("banner")).toHaveTextContent("My Test Heading")
  })

  test("renders children as passed", () => {
    render(
      <PageHeader>
        <button></button>
      </PageHeader>
    )
    expect(screen.getByRole("banner")).toBeInTheDocument()
    expect(screen.getByRole("button")).toBeInTheDocument()
  })

  test("renders a custom className", () => {
    render(<PageHeader className="my-custom-classname" />)
    expect(screen.getByRole("banner")).toBeInTheDocument()
    expect(screen.getByRole("banner")).toHaveClass("my-custom-classname")
  })

  test("renders all props", () => {
    render(<PageHeader data-lolol="some-prop" />)
    expect(screen.getByRole("banner")).toBeInTheDocument()
    expect(screen.getByRole("banner")).toHaveAttribute("data-lolol", "some-prop")
  })

  test("click on heading fires onClick handler as passed", async () => {
    const handleClick = vi.fn()
    render(<PageHeader onClick={handleClick} heading="My Heading" />)
    await userEvent.click(screen.getByText("My Heading"))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
