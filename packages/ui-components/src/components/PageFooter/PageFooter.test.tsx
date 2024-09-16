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
    expect(screen.getByRole("contentinfo")).toBeInTheDocument()
    expect(screen.getByRole("contentinfo")).toHaveClass("jn-flex")
  })

  test("renders a Page Footer to have the global bg color", () => {
    render(<PageFooter />)
    expect(screen.getByRole("contentinfo")).toBeInTheDocument()
    expect(screen.getByRole("contentinfo")).toHaveClass("jn-bg-theme-global-bg")
  })

  test("renders children as passed", () => {
    render(
      <PageFooter>
        <button></button>
      </PageFooter>
    )
    expect(screen.getByRole("contentinfo")).toBeInTheDocument()
    expect(screen.getByRole("button")).toBeInTheDocument()
  })

  test("renders a custom className", () => {
    render(<PageFooter className="my-custom-classname" />)
    expect(screen.getByRole("contentinfo")).toBeInTheDocument()
    expect(screen.getByRole("contentinfo")).toHaveClass("my-custom-classname")
  })

  test("renders all props", () => {
    render(<PageFooter data-lolol="some-prop" />)
    expect(screen.getByRole("contentinfo")).toBeInTheDocument()
    expect(screen.getByRole("contentinfo")).toHaveAttribute("data-lolol", "some-prop")
  })
})
