/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactNode, FormHTMLAttributes } from "react"
import { Stack } from "../Stack/Stack.component"
import { Message } from "../Message/Message.component"

const signInFormBaseStyles = `
  jn:mb-8
`

const signInFormTitleStyles = `
  jn:text-2xl
  jn:font-bold
  jn:mb-4
`

const resetPasswordLinkStyles = `
  jn:text-theme-link
  jn:underline
  jn:text-sm
  jn:mt-2
  jn:inline-block
`

export interface SignInFormProps extends Omit<FormHTMLAttributes<HTMLFormElement>, "title"> {
  /**
   * Title for the sign-in form.
   * Pass a string to display a custom title, omit or pass nothing to display default "Sign In".
   * Pass `false` to hide the title completely.
   */
  title?: string | false

  /**
   * Error message to display when authentication fails.
   * Pass a string for a custom error message.
   * Pass `true` to display the default error message "Authentication failed".
   * Pass `false` or omit to hide the error message.
   */
  error?: string | boolean

  /**
   * URL for the password reset link.
   * Pass a valid URL string to display the "Reset password" link.
   * Pass an empty string or omit to hide the link.
   */
  resetPwUrl?: string

  /**
   * Additional CSS classes to apply to the form for custom styling.
   */
  className?: string

  /**
   * Form inputs and controls to render.
   * These are typically TextInput components for username and password,
   * optional Checkbox for "Remember me", or any additional inputs.
   */
  children?: ReactNode
}

/**
 * A SignInForm component that renders consistent, configurable sign-in forms.
 * Use this component to create authentication forms with a standard layout and styling.
 */
export const SignInForm: React.FC<SignInFormProps> = ({
  title = "Sign In",
  error = false,
  resetPwUrl = "",
  className = "",
  children,
  ...props
}) => {
  // Determine the error message to display
  const errorMessage = error === true ? "Authentication failed" : typeof error === "string" ? error : null

  return (
    <form className={`juno-sign-in-form ${signInFormBaseStyles} ${className}`} {...props}>
      {title !== false && <h1 className={`juno-sign-in-form-heading ${signInFormTitleStyles}`}>{title}</h1>}

      {errorMessage && <Message variant="error" text={errorMessage} className="jn:mb-4" />}

      <Stack direction="vertical" gap="4">
        {children}
      </Stack>

      {resetPwUrl && (
        <a href={resetPwUrl} className={`juno-sign-in-form-reset-link ${resetPasswordLinkStyles}`}>
          Reset password
        </a>
      )}
    </form>
  )
}
