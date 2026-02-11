/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactNode, FormHTMLAttributes } from "react"
import { Stack } from "../Stack/Stack.component"
import { Message } from "../Message/Message.component"

const signInFormTitleStyles = `
  jn:text-2xl
  jn:font-bold
  jn:text-theme-highest
`

const resetPasswordLinkStyles = `
  jn:font-medium
  jn:text-sm
  jn:block
  jn:text-right
  jn:my-2 
`

const requestAccessLinkStyles = `
  jn:font-medium
  jn:text-sm
  jn:text-theme-default
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
  const errorMessage = error === true ? "Authentication failed" : typeof error === "string" ? error : null

  return (
    <form className={`juno-sign-in-form ${className}`} {...props}>
      {title !== false && <h4 className={`juno-sign-in-form-heading ${signInFormTitleStyles}`}>{title}</h4>}

      {errorMessage && <Message variant="error" text={errorMessage} className="jn:my-4" />}

      <Stack direction="vertical" className="mx-2">
        {children}
      </Stack>

      {resetPwUrl && (
        <>
        <a href={resetPwUrl} className={`juno-sign-in-form-reset-link ${resetPasswordLinkStyles}`}>
          Reset password
        </a>
          <span className={`juno-sign-in-form-request-access-link ${requestAccessLinkStyles}`}>
            Don’t have an account? <a href="#">Request Access</a>
          </span>
        </>
      )}
    </form>
  )
}
