/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { BreadcrumbItem } from "./index"
import { Button } from "../Button/index"

describe("BreadcrumbItem", () => {
  test("renders a breadcrumb item with text as passed", async () => {
    render(<BreadcrumbItem data-testid="breadcrumbitem" />)
    expect(screen.getByTestId("breadcrumbitem")).toBeInTheDocument()
    expect(screen.getByTestId("breadcrumbitem")).toHaveClass("juno-breadcrumb-item")
  })

  test("returns children as passed", async () => {
    render(
      <BreadcrumbItem>
        <Button label="Test Button" />
      </BreadcrumbItem>
    )
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveTextContent("Test Button")
  })

  test("renders an icon as passed", async () => {
    render(<BreadcrumbItem icon="help" />)
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("title", "Help")
  })

  test("renders a label as passed", async () => {
    render(<BreadcrumbItem data-testid="breadcrumbitem" label="My Item" />)
    expect(screen.getByTestId("breadcrumbitem")).toBeInTheDocument()
    expect(screen.getByTestId("breadcrumbitem")).toHaveTextContent("My Item")
  })

  test("renders an aria-label as passed", async () => {
    render(<BreadcrumbItem href="#" ariaLabel="My Item" />)
    expect(screen.getByRole("link")).toBeInTheDocument()
    expect(screen.getByRole("link")).toHaveAttribute("aria-label", "My Item")
  })

  test("renders the label as aria-label by default", async () => {
    render(<BreadcrumbItem href="#" label="My Item" />)
    expect(screen.getByRole("link")).toBeInTheDocument()
    expect(screen.getByRole("link")).toHaveAttribute("aria-label", "My Item")
  })

  test("renders an active item that is not a link as passed", async () => {
    render(<BreadcrumbItem href="#" active data-testid="breadcrumbitem" />)
    expect(screen.queryByRole("link")).not.toBeInTheDocument()
    expect(screen.getByTestId("breadcrumbitem")).toBeInTheDocument()
    expect(screen.getByTestId("breadcrumbitem")).toHaveClass("juno-breadcrumb-item-active")
  })

  test("renders a disabled item as passed", async () => {
    const onClickSpy = jest.fn()
    render(<BreadcrumbItem href="#" disabled data-testid="breadcrumbitem" onClick={onClickSpy} />)
    expect(screen.getByTestId("breadcrumbitem")).toBeInTheDocument()
    expect(screen.getByTestId("breadcrumbitem")).toHaveClass("juno-breadcrumb-item-disabled")
    screen.getByTestId("breadcrumbitem").click()
    expect(onClickSpy).not.toHaveBeenCalled()
  })

  test("executes an onClick handler as passed", async () => {
    const onClickSpy = jest.fn()
    render(<BreadcrumbItem onClick={onClickSpy} />)
    screen.getByRole("link").click()
    expect(onClickSpy).toHaveBeenCalled()
  })

  test("renders a custom className as passed", async () => {
    render(<BreadcrumbItem data-testid="breadcrumbitem" className="my-custom-class" />)
    expect(screen.getByTestId("breadcrumbitem")).toBeInTheDocument()
    expect(screen.getByTestId("breadcrumbitem")).toHaveClass("my-custom-class")
  })

  test("renders all props as passed", async () => {
    render(<BreadcrumbItem data-testid="breadcrumbitem" data-lolol={true} />)
    expect(screen.getByTestId("breadcrumbitem")).toBeInTheDocument()
    expect(screen.getByTestId("breadcrumbitem")).toHaveAttribute("data-lolol")
  })
})
