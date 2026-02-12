/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, test, vi } from "vitest"

import { SignInForm } from "./SignInForm.component"

describe("SignInForm Component Tests", () => {
  describe("Basic Rendering", () => {
    test("renders a SignInForm", () => {
      render(<SignInForm data-testid="my-signin-form" />)
      expect(screen.getByTestId("my-signin-form")).toBeInTheDocument()
    })

    test("renders without any props", () => {
      const { container } = render(<SignInForm />)
      expect(container.firstChild).toBeInTheDocument()
      expect(container.firstChild).toHaveClass("juno-sign-in-form")
    })

    test("renders as a form element", () => {
      render(<SignInForm data-testid="my-signin-form" />)
      expect(screen.getByTestId("my-signin-form").tagName).toBe("FORM")
    })

    test("renders a custom className", () => {
      render(<SignInForm data-testid="my-signin-form" className="my-custom-class" />)
      expect(screen.getByTestId("my-signin-form")).toBeInTheDocument()
      expect(screen.getByTestId("my-signin-form")).toHaveClass("my-custom-class")
    })

    test("renders all props as passed", () => {
      render(<SignInForm data-testid="signin-23" data-custom-attr="test-value" />)
      expect(screen.getByTestId("signin-23")).toBeInTheDocument()
      expect(screen.getByTestId("signin-23")).toHaveAttribute("data-custom-attr", "test-value")
    })
  })

  describe("Title Prop", () => {
    test("renders default title 'Sign In' when no title prop is passed", () => {
      render(<SignInForm data-testid="my-signin-form" />)
      expect(screen.getByRole("heading")).toBeInTheDocument()
      expect(screen.getByRole("heading")).toHaveClass("juno-sign-in-form-heading")
      expect(screen.getByRole("heading")).toHaveTextContent("Sign In")
    })

    test("renders custom title when string is passed", () => {
      render(<SignInForm data-testid="my-signin-form" title="Welcome Back" />)
      expect(screen.getByRole("heading")).toBeInTheDocument()
      expect(screen.getByRole("heading")).toHaveTextContent("Welcome Back")
    })

    test("does not render title when title={false}", () => {
      render(<SignInForm data-testid="my-signin-form" title={false} />)
      expect(screen.queryByRole("heading")).not.toBeInTheDocument()
    })

    test("renders empty string title as empty heading", () => {
      render(<SignInForm data-testid="my-signin-form" title="" />)
      const heading = screen.queryByRole("heading")
      expect(heading).toBeInTheDocument()
      expect(heading).toHaveTextContent("")
    })

    test("applies correct styling to title", () => {
      render(<SignInForm data-testid="my-signin-form" title="Test Title" />)
      const heading = screen.getByRole("heading")
      expect(heading).toHaveClass("jn:text-xl")
      expect(heading).toHaveClass("jn:font-bold")
      expect(heading).toHaveClass("jn:text-theme-highest")
    })
  })

  describe("Error Prop", () => {
    test("does not display error message by default", () => {
      render(<SignInForm data-testid="my-signin-form" />)
      expect(screen.queryByText("Authentication failed")).not.toBeInTheDocument()
    })

    test("does not display error when error={false}", () => {
      render(<SignInForm data-testid="my-signin-form" error={false} />)
      expect(screen.queryByText("Authentication failed")).not.toBeInTheDocument()
    })

    test("displays default error message when error={true}", () => {
      render(<SignInForm data-testid="my-signin-form" error={true} />)
      expect(screen.getByText("Authentication failed")).toBeInTheDocument()
    })

    test("displays custom error message when error is a string", () => {
      render(<SignInForm data-testid="my-signin-form" error="Invalid credentials. Please try again." />)
      expect(screen.getByText("Invalid credentials. Please try again.")).toBeInTheDocument()
      expect(screen.queryByText("Authentication failed")).not.toBeInTheDocument()
    })

    test("error message renders as Message component with error variant", () => {
      render(<SignInForm data-testid="my-signin-form" error="Test error" />)
      const message = screen.getByText("Test error").closest(".juno-message")
      expect(message).toBeInTheDocument()
      expect(message).toHaveClass("juno-message-error")
    })

    test("does not render error when error is empty string", () => {
      render(<SignInForm data-testid="my-signin-form" error="" />)
      expect(screen.queryByText("Authentication failed")).not.toBeInTheDocument()
    })
  })

  describe("ResetPwUrl Prop", () => {
    test("does not display reset password link by default", () => {
      render(<SignInForm data-testid="my-signin-form" />)
      expect(screen.queryByText("Reset password")).not.toBeInTheDocument()
    })

    test("does not display reset password link when resetPwUrl is empty string", () => {
      render(<SignInForm data-testid="my-signin-form" resetPwUrl="" />)
      expect(screen.queryByText("Reset password")).not.toBeInTheDocument()
    })

    test("displays reset password link when resetPwUrl is provided", () => {
      render(<SignInForm data-testid="my-signin-form" resetPwUrl="/reset-password" />)
      expect(screen.getByText("Reset password")).toBeInTheDocument()
    })

    test("reset password link has correct href attribute", () => {
      render(<SignInForm data-testid="my-signin-form" resetPwUrl="/reset-password" />)
      const link = screen.getByText("Reset password")
      expect(link).toHaveAttribute("href", "/reset-password")
    })

    test("reset password link has correct styling", () => {
      render(<SignInForm data-testid="my-signin-form" resetPwUrl="#" />)
      const link = screen.getByText("Reset password")
      expect(link).toHaveClass("juno-sign-in-form-reset-link")
      expect(link).toHaveClass("jn:font-medium")
      expect(link).toHaveClass("jn:text-sm")
    })
  })

  describe("Children Rendering", () => {
    test("renders children as passed", () => {
      render(
        <SignInForm data-testid="my-signin-form">
          <input data-testid="test-input" type="text" />
        </SignInForm>
      )
      expect(screen.getByTestId("test-input")).toBeInTheDocument()
    })

    test("renders multiple children", () => {
      render(
        <SignInForm data-testid="my-signin-form">
          <input data-testid="input-1" type="text" />
          <input data-testid="input-2" type="password" />
          <button>Submit</button>
        </SignInForm>
      )
      expect(screen.getByTestId("input-1")).toBeInTheDocument()
      expect(screen.getByTestId("input-2")).toBeInTheDocument()
      expect(screen.getByRole("button")).toBeInTheDocument()
    })

    test("renders without children", () => {
      render(<SignInForm data-testid="my-signin-form" />)
      expect(screen.getByTestId("my-signin-form")).toBeInTheDocument()
    })
  })

  describe("Form Attributes", () => {
    test("handles onSubmit event", () => {
      const handleSubmit = vi.fn((e: React.FormEvent<HTMLFormElement>) => e.preventDefault())
      render(
        <SignInForm data-testid="my-signin-form" onSubmit={handleSubmit}>
          <button type="submit">Sign In</button>
        </SignInForm>
      )
      const form = screen.getByTestId("my-signin-form")
      form.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }))
      expect(handleSubmit).toHaveBeenCalled()
    })

    test("accepts method attribute", () => {
      render(<SignInForm data-testid="my-signin-form" method="post" />)
      expect(screen.getByTestId("my-signin-form")).toHaveAttribute("method", "post")
    })

    test("accepts action attribute", () => {
      render(<SignInForm data-testid="my-signin-form" action="/api/login" />)
      expect(screen.getByTestId("my-signin-form")).toHaveAttribute("action", "/api/login")
    })

    test("accepts noValidate attribute", () => {
      render(<SignInForm data-testid="my-signin-form" noValidate />)
      expect(screen.getByTestId("my-signin-form")).toHaveAttribute("noValidate")
    })
  })

  describe("Edge Cases", () => {
    test("renders correctly with all props combined", () => {
      render(
        <SignInForm
          data-testid="my-signin-form"
          title="Custom Sign In"
          error="Custom error message"
          resetPwUrl="/reset"
          className="custom-class"
        >
          <input data-testid="username" type="text" />
          <input data-testid="password" type="password" />
        </SignInForm>
      )
      expect(screen.getByTestId("my-signin-form")).toBeInTheDocument()
      expect(screen.getByRole("heading")).toHaveTextContent("Custom Sign In")
      expect(screen.getByText("Custom error message")).toBeInTheDocument()
      expect(screen.getByText("Reset password")).toBeInTheDocument()
      expect(screen.getByTestId("username")).toBeInTheDocument()
      expect(screen.getByTestId("password")).toBeInTheDocument()
    })

    test("renders correctly with title=false and no resetPwUrl", () => {
      render(
        <SignInForm data-testid="my-signin-form" title={false} resetPwUrl="">
          <button>Proceed</button>
        </SignInForm>
      )
      expect(screen.queryByRole("heading")).not.toBeInTheDocument()
      expect(screen.queryByText("Reset password")).not.toBeInTheDocument()
      expect(screen.getByRole("button")).toBeInTheDocument()
    })

    test("handles undefined children gracefully", () => {
      render(<SignInForm data-testid="my-signin-form">{undefined}</SignInForm>)
      expect(screen.getByTestId("my-signin-form")).toBeInTheDocument()
    })

    test("handles null children gracefully", () => {
      render(<SignInForm data-testid="my-signin-form">{null}</SignInForm>)
      expect(screen.getByTestId("my-signin-form")).toBeInTheDocument()
    })

    test("displays both error and reset link when both are provided", () => {
      render(<SignInForm data-testid="my-signin-form" error="Login failed" resetPwUrl="/reset" />)
      expect(screen.getByText("Login failed")).toBeInTheDocument()
      expect(screen.getByText("Reset password")).toBeInTheDocument()
    })
  })
})
