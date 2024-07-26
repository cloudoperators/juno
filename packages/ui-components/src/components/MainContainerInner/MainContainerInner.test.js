/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { MainContainerInner } from "./index"

describe("MainContainerInner", () => {
  test("renders a main container inner wrapper", async () => {
    render(<MainContainerInner data-testid="main-inner" />)
    expect(screen.getByTestId("main-inner")).toBeInTheDocument()
    expect(screen.getByTestId("main-inner")).toHaveClass("juno-main-inner")
  })

  test("renders children as passed", async () => {
    render(
      <MainContainerInner data-testid="main-inner">
        <button></button>
      </MainContainerInner>
    )
    expect(screen.getByTestId("main-inner")).toBeInTheDocument()
    expect(screen.getByRole("button")).toBeInTheDocument()
  })

  test("renders the expected width-constraining responsive classes if not fullwidth and there is no sidenav", async () => {
    render(<MainContainerInner data-testid="main-inner" fullWidth={false} hasSideNav={false} />)
    expect(screen.getByTestId("main-inner")).toBeInTheDocument()
    expect(screen.getByTestId("main-inner")).toHaveClass("2xl:jn-container")
    expect(screen.getByTestId("main-inner")).toHaveClass("2xl:jn-mx-auto")
  })

  test("renders the expected width-constraining responsive classes if not fullwidth and there is a sidenav", async () => {
    render(<MainContainerInner data-testid="main-inner" fullWidth={false} hasSideNav={true} />)
    expect(screen.getByTestId("main-inner")).toBeInTheDocument()
    expect(screen.getByTestId("main-inner")).toHaveClass("3xl:jn-container")
    expect(screen.getByTestId("main-inner")).toHaveClass("3xl:jn-mx-auto")
  })

  test("does not render any width-constraining responsive classes if in fullwidth mode", async () => {
    render(<MainContainerInner data-testid="main-inner" fullWidth={true} />)
    expect(screen.getByTestId("main-inner")).toBeInTheDocument()
    expect(screen.getByTestId("main-inner")).toHaveClass("juno-main-inner-fullwidth")
    expect(screen.getByTestId("main-inner")).not.toHaveClass("2xl:jn-container")
    expect(screen.getByTestId("main-inner")).not.toHaveClass("2xl:jn-mx-auto")
    expect(screen.getByTestId("main-inner")).not.toHaveClass("3xl:jn-container")
    expect(screen.getByTestId("main-inner")).not.toHaveClass("3xl:jn-mx-auto")
  })

  test("renders a custom className", async () => {
    render(<MainContainerInner data-testid="main-inner" className="my-custom-classname" />)
    expect(screen.getByTestId("main-inner")).toBeInTheDocument()
    expect(screen.getByTestId("main-inner")).toHaveClass("my-custom-classname")
  })

  test("renders all props", async () => {
    render(<MainContainerInner data-testid="main-inner" data-lolol="some-prop" />)
    expect(screen.getByTestId("main-inner")).toBeInTheDocument()
    expect(screen.getByTestId("main-inner")).toHaveAttribute("data-lolol", "some-prop")
  })
})
