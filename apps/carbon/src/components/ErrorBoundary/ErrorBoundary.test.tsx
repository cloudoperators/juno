/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react"
import { render, screen } from "@testing-library/react"
import ErrorBoundary from "./ErrorBoundary"

const App = () => <div>Awesome App</div>
const AppThatThrows = () => {
  useEffect(() => {
    throw new Error()
  }, [])
  return <div>App</div>
}

const renderErrorBoundary = (Component: () => JSX.Element) =>
  render(
    <ErrorBoundary>
      <Component />
    </ErrorBoundary>
  )

describe("ErrorBoundary", () => {
  it("should render App", () => {
    renderErrorBoundary(App)
    expect(screen.getByText("Awesome App")).toBeInTheDocument()
  })

  it("should render error page", () => {
    // mock console.error to suppress the error message being printed to the console
    const suppressedConsoleError = vi.spyOn(console, "error").mockImplementation(() => {})

    renderErrorBoundary(AppThatThrows)
    expect(screen.getByText("An error occurred")).toBeInTheDocument()
    expect(screen.queryByText("Awesome App")).not.toBeInTheDocument()

    // restore console.error to its original implementation
    suppressedConsoleError.mockRestore()
  })
})
