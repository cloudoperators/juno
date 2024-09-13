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
  test("renders a Page Header", async () => {
    render(<PageHeader />)
    expect(screen.getByRole("banner")).toBeInTheDocument()
    expect(screen.getByRole("banner")).toHaveClass("juno-pageheader")
  })

  test("renders a Page Header with heading as passed", async () => {
    render(<PageHeader heading="My Test Heading" />)
    expect(screen.getByRole("banner")).toBeInTheDocument()
    expect(screen.getByRole("banner")).toHaveTextContent("My Test Heading")
  })

  test("renders children as passed", async () => {
    render(
      <PageHeader>
        <button></button>
      </PageHeader>
    )
    expect(screen.getByRole("banner")).toBeInTheDocument()
    expect(screen.getByRole("button")).toBeInTheDocument()
  })

  test("renders a default logo by default", async () => {
    render(<PageHeader />)
    expect(screen.getByRole("banner")).toBeInTheDocument()
    expect(document.querySelector("[data-file-name='SvgJunoUI_logo']")).toBeInTheDocument()
  })

  test("does not render any logo as passed", async () => {
    render(<PageHeader logo={false} />)
    expect(screen.getByRole("banner")).toBeInTheDocument()
    expect(screen.queryByAltText("Juno UI")).not.toBeInTheDocument()
    const logoContainer = document.querySelector(".juno-pageheader-logo-container")
    expect(logoContainer).toBeInTheDocument()
    expect(logoContainer).toBeEmptyDOMElement()
  })

  test("renders a custom logo component as passed", async () => {
    render(<PageHeader logo={<CustomLogoComponent />} />)
    expect(screen.getByRole("banner")).toBeInTheDocument()
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveClass("juno-test-logo")
  })

  test("renders a custom className", async () => {
    render(<PageHeader className="my-custom-classname" />)
    expect(screen.getByRole("banner")).toBeInTheDocument()
    expect(screen.getByRole("banner")).toHaveClass("my-custom-classname")
  })

  test("renders all props", async () => {
    render(<PageHeader data-lolol="some-prop" />)
    expect(screen.getByRole("banner")).toBeInTheDocument()
    expect(screen.getByRole("banner")).toHaveAttribute("data-lolol", "some-prop")
  })

  test("click on heading fires onClick handler as passed", async () => {
    const handleClick = jest.fn()
    render(<PageHeader onClick={handleClick} heading="My Heading" />)
    await userEvent.click(screen.getByText("My Heading"))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
