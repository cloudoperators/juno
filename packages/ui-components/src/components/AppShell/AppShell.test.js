/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { cleanup, render, screen } from "@testing-library/react"
import { AppShell } from "./index"
import { PageHeader } from "../PageHeader/PageHeader.component"
import { PageFooter } from "../PageFooter/PageFooter.component"
import { TopNavigation } from "../TopNavigation/TopNavigation.component"
import { SideNavigation } from "../SideNavigation/SideNavigation.component"

describe("AppShell", () => {
  afterEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  test("renders an app shell", () => {
    render(<AppShell data-testid="app-shell" />)
    expect(screen.getByTestId("app-shell")).toBeInTheDocument()
    expect(screen.getByTestId("app-shell")).toHaveClass("juno-body")
  })

  test("logs a deprecation warning to the console when user passed obsolete contentHeading prop", () => {
    const consoleWarnSpy = jest.spyOn(console, "warn")
    render(<AppShell contentHeading="My Content Heading" />)
    expect(consoleWarnSpy).toHaveBeenCalled()
    expect(consoleWarnSpy).toHaveBeenCalledWith(
      "AppShell: The contentHeading prop is obsolete and will be removed in a future version. In order to render a content heading, use a ContentHeading element as a child in your main content."
    )
  })

  test("renders an app shell with page header passed as String", () => {
    render(<AppShell data-testid="app-shell" pageHeader="My Page Header" />)
    expect(screen.getByTestId("app-shell")).toBeInTheDocument()
    expect(screen.getByText("My Page Header")).toBeInTheDocument()
  })

  test("renders an app shell with page header passed as component", () => {
    render(
      <AppShell
        data-testid="app-shell"
        pageHeader={<PageHeader data-testid="page-header" heading="My Page Header" />}
      />
    )
    expect(screen.getByTestId("app-shell")).toBeInTheDocument()
    expect(screen.getByTestId("page-header")).toBeInTheDocument()
    expect(screen.getByText("My Page Header")).toBeInTheDocument()
  })

  test("renders an app shell with custom page footer passed as component", () => {
    render(
      <AppShell
        data-testid="app-shell"
        pageFooter={<PageFooter data-testid="page-footer">My Page Footer</PageFooter>}
      />
    )
    expect(screen.getByTestId("app-shell")).toBeInTheDocument()
    expect(screen.getByTestId("page-footer")).toBeInTheDocument()
    expect(screen.getByText("My Page Footer")).toBeInTheDocument()
  })

  test("renders an app shell with top navigation passed as component", () => {
    render(
      <AppShell data-testid="app-shell" topNavigation={<TopNavigation data-testid="top-navigation"></TopNavigation>} />
    )
    expect(screen.getByTestId("app-shell")).toBeInTheDocument()
    expect(screen.getByTestId("top-navigation")).toBeInTheDocument()
  })

  test("renders an app shell with a side navigation passed as a component", () => {
    render(<AppShell data-testid="app-shell" sideNavigation={<SideNavigation />} />)
    expect(screen.getByTestId("app-shell")).toBeInTheDocument()
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.getByRole("navigation")).toHaveClass("juno-sidenavigation")
  })

  test("renders an app shell with both a side and a top navigation as passed", () => {
    render(
      <AppShell
        data-testid="app-shell"
        sideNavigation={<SideNavigation data-testid="side-nav" />}
        topNavigation={<TopNavigation data-testid="top-nav" />}
      />
    )
    expect(screen.getByTestId("app-shell")).toBeInTheDocument()
    expect(screen.getAllByRole("navigation")).toHaveLength(2)
    expect(screen.getByTestId("side-nav")).toBeInTheDocument()
    expect(screen.getByTestId("top-nav")).toBeInTheDocument()
  })

  test("renders an embeddable app shell without page heading or footer", () => {
    render(
      <AppShell
        data-testid="app-shell"
        embedded={true}
        pageHeader={<PageHeader data-testid="page-header" heading="My Page Heading" />}
        pageFooter={<PageFooter data-testid="page-footer">My Page Footer</PageFooter>}
      />
    )
    expect(screen.getByTestId("app-shell")).toBeInTheDocument()
    expect(screen.queryByTestId("page-header")).not.toBeInTheDocument()
    expect(screen.queryByText("My Page Heading")).not.toBeInTheDocument()
    expect(screen.queryByTestId("page-footer")).not.toBeInTheDocument()
    expect(screen.queryByText("My Page Footer")).not.toBeInTheDocument()
  })

  test("renders children as passed", () => {
    render(
      <AppShell data-testid="app-shell">
        <button></button>
      </AppShell>
    )
    expect(screen.getByTestId("app-shell")).toBeInTheDocument()
    expect(screen.getByRole("button")).toBeInTheDocument()
  })

  // The following test whether the MainContainerInner element rendered by AppShell does the right thing depending of props passed to AppShell:
  test("does not render a fullwidth main container in non-embedded mode by default", () => {
    render(
      <AppShell>
        <button></button>
      </AppShell>
    )
    expect(document.querySelector(".juno-main-inner")).not.toHaveClass("juno-main-inner-fullwidth")
  })

  test("renders a fullwidth main container in non-embedded mode if passed explicitly", () => {
    render(
      <AppShell fullWidthContent={true}>
        <button></button>
      </AppShell>
    )
    expect(document.querySelector(".juno-main-inner")).toHaveClass("juno-main-inner-fullwidth")
  })

  test("renders a fullwidth main inner container in embedded mode by default", () => {
    render(
      <AppShell embedded>
        <button></button>
      </AppShell>
    )
    expect(document.querySelector(".juno-main-inner")).toHaveClass("juno-main-inner-fullwidth")
  })

  test("renders a non-fullwidth, size-restricted main inner container in embedded mode if passed explicitly", () => {
    render(
      <AppShell embedded fullWidthContent={false}>
        <button></button>
      </AppShell>
    )
    expect(document.querySelector(".juno-main-inner")).not.toHaveClass("juno-main-inner-fullwidth")
  })

  test("renders a custom className", () => {
    render(<AppShell data-testid="app-shell" className="my-custom-classname" />)
    expect(screen.getByTestId("app-shell")).toBeInTheDocument()
    expect(screen.getByTestId("app-shell")).toHaveClass("my-custom-classname")
  })

  test("renders all props", () => {
    render(<AppShell data-testid="app-shell" data-lolol="some-prop" />)
    expect(screen.getByTestId("app-shell")).toBeInTheDocument()
    expect(screen.getByTestId("app-shell")).toHaveAttribute("data-lolol", "some-prop")
  })
})
