/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactNode } from "react"

const baseStyles = `
  jn-text-xs
  jn-mt-1
`

type FormHintVariant = "help" | "error" | "success"

const variantStyles = (variant: FormHintVariant) => {
  switch (variant) {
    case "success":
      return "jn-text-theme-success"
    case "error":
      return "jn-text-theme-error"
    default:
      return "jn-text-theme-light"
  }
}

export const FormHint = ({ children = null, text = "", variant = "help", className, ...props }: FormHintProps) => {
  return (
    <div
      className={`
        juno-form-hint
        juno-form-hint-${variant}
        ${baseStyles}
        ${variantStyles(variant)}
        ${className}
      `}
      {...props}
    >
      {children || text}
    </div>
  )
}

FormHint.displayName = "FormHint"

export interface FormHintProps {
  /** The children to render as a hint associated with a form element */
  children?: ReactNode
  /** The text to render. If both children and text are passed, children will rendered */
  text?: ReactNode | string
  /** The variant of the the hint. Defaults to 'help'. */
  variant?: FormHintVariant
  /** Pass a custom className */
  className?: string
}
