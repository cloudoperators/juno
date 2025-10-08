/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react"
import { render, screen } from "@testing-library/react"
import { FallbackProps } from "react-error-boundary"
import { ErrorBoundary } from "./index"

const Component = () => <div>Some Component</div>
const ComponentThatThrows = () => {
  useEffect(() => {
    throw new Error("Test error message")
  }, [])
  return <div>Will not render</div>
}

const CustomFallback = ({ error }: FallbackProps) => <div>Custom fallback: {error?.message}</div>

describe("ErrorBoundary", () => {
  let consoleSpy: any

  beforeEach(() => {
    // mock console.error to suppress the error message being printed to the console
    consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {})
  })

  afterEach(() => {
    // restore console.error to its original implementation
    consoleSpy.mockRestore()
  })

  it("should render children when no error occurs", () => {
    render(
      <ErrorBoundary>
        <Component />
      </ErrorBoundary>
    )
    expect(screen.getByText("Some Component")).toBeInTheDocument()
  })

  describe("when error occurs", () => {
    it("should render null when displayErrorMessage is false", () => {
      const { container } = render(
        <ErrorBoundary displayErrorMessage={false}>
          <ComponentThatThrows />
        </ErrorBoundary>
      )
      expect(container.firstChild).toBeNull()
      expect(screen.queryByText("Some Component")).not.toBeInTheDocument()
    })

    it("should render null when displayErrorMessage is undefined", () => {
      const { container } = render(
        <ErrorBoundary>
          <ComponentThatThrows />
        </ErrorBoundary>
      )
      expect(container.firstChild).toBeNull()
      expect(screen.queryByText("Some Component")).not.toBeInTheDocument()
    })

    it("should render default ErrorMessage when displayErrorMessage is true and no fallback provided", () => {
      render(
        <ErrorBoundary displayErrorMessage={true}>
          <ComponentThatThrows />
        </ErrorBoundary>
      )
      expect(screen.getByText("Error: Test error message")).toBeInTheDocument()
      expect(screen.queryByText("Some Component")).not.toBeInTheDocument()
    })

    it("should render custom fallback when displayErrorMessage is true and fallback is provided", () => {
      render(
        <ErrorBoundary displayErrorMessage={true} fallbackRender={CustomFallback}>
          <ComponentThatThrows />
        </ErrorBoundary>
      )
      expect(screen.getByText("Custom fallback: Test error message")).toBeInTheDocument()
      expect(screen.queryByText("Error: Test error message")).not.toBeInTheDocument()
      expect(screen.queryByText("Some Component")).not.toBeInTheDocument()
    })

    it("should render null when displayErrorMessage is false even if fallback is provided", () => {
      const { container } = render(
        <ErrorBoundary displayErrorMessage={false} fallbackRender={CustomFallback}>
          <ComponentThatThrows />
        </ErrorBoundary>
      )
      expect(container.firstChild).toBeNull()
      expect(screen.queryByText("Custom fallback: Test error message")).not.toBeInTheDocument()
      expect(screen.queryByText("Some Component")).not.toBeInTheDocument()
    })
  })
})
