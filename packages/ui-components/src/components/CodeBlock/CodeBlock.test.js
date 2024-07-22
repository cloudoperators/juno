/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { CodeBlock } from "./index"

describe("CodeBlock", () => {
  test("renders a CodeBlock with content as passed", async () => {
    render(<CodeBlock data-testid="codeblock" content="some example code" />)
    expect(screen.getByTestId("codeblock")).toBeInTheDocument()
    expect(screen.getByTestId("codeblock")).toHaveClass("juno-code-block")
    expect(screen.getByTestId("codeblock")).toHaveTextContent(
      "some example code"
    )
  })

  test("renders a CodeBlock with children as passed", async () => {
    render(
      <CodeBlock data-testid="codeblock">{"some children here"}</CodeBlock>
    )
    expect(screen.getByTestId("codeblock")).toBeInTheDocument()
    expect(screen.getByTestId("codeblock")).toHaveClass("juno-code-block")
    expect(screen.getByTestId("codeblock")).toHaveTextContent(
      "some children here"
    )
  })

  test("renders a CodeBlock with a lang attribute as passed", async () => {
    render(<CodeBlock data-testid="codeblock" lang="javascript" />)
    expect(screen.getByTestId("codeblock")).toBeInTheDocument()
    expect(screen.getByTestId("codeblock")).toHaveClass("juno-code-block")
    expect(screen.getByTestId("codeblock")).toHaveAttribute(
      "data-lang",
      "javascript"
    )
  })

  test("renders a wrapping CodeBlock by default", async () => {
    render(<CodeBlock data-testid="codeblock" />)
    expect(screen.getByTestId("codeblock")).toBeInTheDocument()
    expect(screen.getByTestId("codeblock")).toHaveClass("juno-code-block")
    expect(document.querySelector("pre")).toHaveClass("jn-break-words")
    expect(document.querySelector("pre")).toHaveClass("jn-break-all")
    expect(document.querySelector("pre")).toHaveClass("jn-whitespace-pre-wrap")
    expect(document.querySelector("pre")).not.toHaveClass("jn-overflow-x-auto")
  })

  test("renders a non-wrapping CodeBlock as passed", async () => {
    render(<CodeBlock data-testid="codeblock" wrap={false} />)
    expect(screen.getByTestId("codeblock")).toBeInTheDocument()
    expect(screen.getByTestId("codeblock")).toHaveClass("juno-code-block")
    expect(document.querySelector("pre")).not.toHaveClass("jn-break-words")
    expect(document.querySelector("pre")).not.toHaveClass("jn-break-all")
    expect(document.querySelector("pre")).not.toHaveClass(
      "jn-whitespace-pre-wrap"
    )
    expect(document.querySelector("pre")).toHaveClass("jn-overflow-x-auto")
  })

  test("renders a CodeBlock without height restrictions by default", async () => {
    render(<CodeBlock content="123" />)
    expect(document.querySelector("pre")).toBeInTheDocument()
    expect(document.querySelector("pre")).not.toHaveClass(
      "juno-codeblock-pre-small"
    )
    expect(document.querySelector("pre")).not.toHaveClass(
      "juno-codeblock-pre-medium"
    )
    expect(document.querySelector("pre")).not.toHaveClass(
      "juno-codeblock-pre-large"
    )
  })

  test("renders a small sized CodeBlock as passed", async () => {
    render(<CodeBlock content="123" size="small" />)
    expect(document.querySelector("pre")).toBeInTheDocument()
    expect(document.querySelector("pre")).toHaveClass(
      "juno-codeblock-pre-small"
    )
    expect(document.querySelector("pre")).not.toHaveClass(
      "juno-codeblock-pre-medium"
    )
    expect(document.querySelector("pre")).not.toHaveClass(
      "juno-codeblock-pre-large"
    )
  })

  test("renders a medium sized CodeBlock as passed", async () => {
    render(<CodeBlock content="123" size="medium" />)
    expect(document.querySelector("pre")).toBeInTheDocument()
    expect(document.querySelector("pre")).not.toHaveClass(
      "juno-codeblock-pre-small"
    )
    expect(document.querySelector("pre")).toHaveClass(
      "juno-codeblock-pre-medium"
    )
    expect(document.querySelector("pre")).not.toHaveClass(
      "juno-codeblock-pre-large"
    )
  })

  test("renders a heading as passed", async () => {
    render(
      <CodeBlock
        data-testid="codeblock"
        content="123"
        heading="Look, a CodeBlock!"
      />
    )
    expect(screen.getByTestId("codeblock")).toBeInTheDocument()
    expect(
      document.querySelector(".juno-codeblock-heading")
    ).toBeInTheDocument()
    expect(document.querySelector(".juno-codeblock-heading")).toHaveTextContent(
      "Look, a CodeBlock!"
    )
  })

  test("renders a JSONView as passed", async () => {
    const testJson = {
      someKey: "some value",
      someOtherKey: 12,
    }
    render(<CodeBlock data-testid="codeblock" lang="json" content={testJson} />)
    expect(screen.getByTestId("codeblock")).toBeInTheDocument()
    expect(screen.getByTestId("codeblock")).toHaveClass("juno-code-block")
    expect(screen.getByTestId("codeblock")).toHaveAttribute("data-lang", "json")
    expect(document.querySelector("[data-json-viewer]")).toBeInTheDocument()
  })

  test("renders a JSONView as passed with children", async () => {
    const testObj = {
      someKey: "some value",
      someOtherKey: 12,
    }
    render(
      <CodeBlock data-testid="codeblock" lang="json">
        {testObj}
      </CodeBlock>
    )
    expect(screen.getByTestId("codeblock")).toBeInTheDocument()
    expect(screen.getByTestId("codeblock")).toHaveClass("juno-code-block")
    expect(screen.getByTestId("codeblock")).toHaveAttribute("data-lang", "json")
    expect(document.querySelector("[data-json-viewer]")).toBeInTheDocument()
  })

  test("renders a CodeBlock with a Copy button by default", async () => {
    render(<CodeBlock />)
    expect(
      screen.getByRole("button", { name: "contentCopy" })
    ).toBeInTheDocument()
  })

  test("renders a CodeBlock with className as passed", async () => {
    render(<CodeBlock data-testid="codeblock" className="my-class" />)
    expect(screen.getByTestId("codeblock")).toBeInTheDocument()
    expect(screen.getByTestId("codeblock")).toHaveClass("my-class")
  })

  test("renders a CodeBlock with all props as passed", async () => {
    render(<CodeBlock data-testid="codeblock" data-lolol="code-lang-js" />)
    expect(screen.getByTestId("codeblock")).toBeInTheDocument()
    expect(screen.getByTestId("codeblock")).toHaveAttribute(
      "data-lolol",
      "code-lang-js"
    )
  })
})
