/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { PageHeader } from "./index"

const CustomLogoComponent = () => <svg role="img" data-testid="custom-logo" className="juno-test-logo"></svg>

describe("PageHeader", () => {
  test("renders a simple Page Header and has flexbox layout", () => {
    render(<PageHeader />)
    expect(screen.getByRole("banner")).toBeInTheDocument()
    expect(screen.getByRole("banner")).toHaveClass("juno-pageheader")
  })

  test("renders a Page Header with applicationName taking precedence over heading", () => {
    render(<PageHeader applicationName="My Test App" heading="My Test Heading" />)
    expect(screen.getByRole("banner")).toBeInTheDocument()
    expect(screen.getByRole("banner")).toHaveTextContent("My Test App")
  })

  test("renders without a title if applicationName and heading are undefined", () => {
    render(<PageHeader />)
    const banner = screen.getByRole("banner")
    expect(banner).toBeInTheDocument()
    const titleElement = screen.queryByRole("heading")
    expect(titleElement).not.toBeInTheDocument()
  })

  test("renders children as passed", () => {
    render(
      <PageHeader>
        <button />
      </PageHeader>
    )
    expect(screen.getByRole("banner")).toBeInTheDocument()
    expect(screen.getByRole("button")).toBeInTheDocument()
  })

  test("renders a default logo by default", () => {
    render(<PageHeader />)
    const element = screen.getByTestId("default-logo")
    expect(element).toBeInTheDocument()
  })

  test("does not render any logo when logo is passed as false", () => {
    render(<PageHeader logo={false} />)
    expect(screen.getByRole("banner")).toBeInTheDocument()
    const logoContainer = document.querySelector(".juno-pageheader-logo-container")
    expect(logoContainer).toBeInTheDocument()
    expect(logoContainer).toBeEmptyDOMElement()
  })

  test("renders a custom logo component as passed", () => {
    render(<PageHeader logo={<CustomLogoComponent />} />)
    expect(screen.getByRole("banner")).toBeInTheDocument()
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveClass("juno-test-logo")
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

  test("click on application name fires onClick handler if passed", async () => {
    const handleClick = vi.fn()
    render(<PageHeader onClick={handleClick} applicationName="My App" />)
    await userEvent.click(screen.getByText("My App"))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test("href executes when onClick is not passed", () => {
    render(<PageHeader href="http://example.com" applicationName="My App" />)
    const linkElement = screen.getByRole("link", { name: /My App/i })
    expect(linkElement).toHaveAttribute("href", "http://example.com")
  })

  test("renders without children gracefully", () => {
    render(<PageHeader />)
    expect(screen.getByRole("banner")).toBeInTheDocument()
    expect(screen.queryByRole("button")).not.toBeInTheDocument()
  })
})
