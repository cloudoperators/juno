/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { CodeBlockFooter } from "./CodeBlockFooter.component"

describe("CodeBlockFooter", () => {
  test("renders the Copy button by default", () => {
    render(<CodeBlockFooter onCopy={() => {}} isCopied={false} copy={true} />)
    expect(screen.getByRole("button", { name: "contentCopy" })).toBeInTheDocument()
  })

  test("does not render the Copy button when copy={false}", () => {
    render(<CodeBlockFooter onCopy={() => {}} isCopied={false} copy={false} />)
    expect(screen.queryByRole("button", { name: "contentCopy" })).not.toBeInTheDocument()
  })

  test("renders children to the left of the Copy button", () => {
    const { container } = render(
      <CodeBlockFooter onCopy={() => {}} isCopied={false} copy={true}>
        <span data-testid="custom-child">Download</span>
      </CodeBlockFooter>
    )
    const footer = container.querySelector(".juno-codeblock-bottombar")
    const child = screen.getByTestId("custom-child")
    const copyButton = screen.getByRole("button", { name: "contentCopy" })
    expect(footer).toBeInTheDocument()
    // child should come before Copy button in the DOM
    if (!footer) throw new Error("footer not found")
    expect(footer.compareDocumentPosition(child) & Node.DOCUMENT_POSITION_CONTAINED_BY).toBeTruthy()
    expect(child.compareDocumentPosition(copyButton) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
  })

  test("shows Copied! tooltip when isCopied is true", () => {
    render(<CodeBlockFooter onCopy={() => {}} isCopied={true} copy={true} />)
    expect(screen.getByText("Copied!")).toBeInTheDocument()
  })

  test("does not show Copied! tooltip when isCopied is false", () => {
    render(<CodeBlockFooter onCopy={() => {}} isCopied={false} copy={true} />)
    expect(screen.queryByText("Copied!")).not.toBeInTheDocument()
  })

  test("renders children without Copy button when copy={false}", () => {
    render(
      <CodeBlockFooter onCopy={() => {}} isCopied={false} copy={false}>
        <span data-testid="custom-child">Download</span>
      </CodeBlockFooter>
    )
    expect(screen.getByTestId("custom-child")).toBeInTheDocument()
    expect(screen.queryByRole("button", { name: "contentCopy" })).not.toBeInTheDocument()
  })

  test("renders with juno-codeblock-bottombar class", () => {
    const { container } = render(<CodeBlockFooter onCopy={() => {}} isCopied={false} copy={true} />)
    expect(container.querySelector(".juno-codeblock-bottombar")).toBeInTheDocument()
  })

  test("renders with className as passed", () => {
    const { container } = render(
      <CodeBlockFooter onCopy={() => {}} isCopied={false} copy={true} className="my-footer" />
    )
    expect(container.querySelector(".juno-codeblock-bottombar")).toHaveClass("my-footer")
  })
})
