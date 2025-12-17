/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { PageFooter } from "./index"

describe("PageFooter", () => {
  test("renders a simple Page Footer and has flexbox layout", () => {
    render(<PageFooter />)
    const footer = screen.getByRole("contentinfo")
    expect(footer).toBeInTheDocument()
  })

  test("renders a Page Footer with specific styling", () => {
    render(<PageFooter />)
    const footer = screen.getByRole("contentinfo")
    expect(footer).toBeInTheDocument()
    expect(footer).toHaveClass("juno-pagefooter") // Confirm it has the main class
  })

  test("renders children as passed", () => {
    render(
      <PageFooter>
        <button>Test Button</button>
      </PageFooter>
    )
    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent("Test Button")
  })

  test("renders a custom className", () => {
    render(<PageFooter className="my-custom-classname" />)
    const footer = screen.getByRole("contentinfo")
    expect(footer).toBeInTheDocument()
    expect(footer).toHaveClass("my-custom-classname")
  })

  test("renders all props", () => {
    render(<PageFooter data-lolol="some-prop" />)
    const footer = screen.getByRole("contentinfo")
    expect(footer).toBeInTheDocument()
    expect(footer).toHaveAttribute("data-lolol", "some-prop")
  })

  test("renders copyright section when provided", () => {
    render(<PageFooter copyright="© 2023 Test" />)
    const footer = screen.getByRole("contentinfo")
    const copyrightSection = footer.querySelector(".juno-pagefooter-copyright")
    expect(copyrightSection).toBeInTheDocument()
    expect(copyrightSection).toHaveTextContent("© 2023 Test")
  })

  test("renders children section with flex layout", () => {
    render(
      <PageFooter>
        <span>Child Item</span>
      </PageFooter>
    )
    const childrenSection = screen.getByRole("contentinfo").querySelector(".juno-pagefooter-children")
    expect(childrenSection).toBeInTheDocument()
    expect(childrenSection).toHaveClass("juno-pagefooter-children")
    expect(childrenSection).toHaveTextContent("Child Item")
  })
})
