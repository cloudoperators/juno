/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactNode } from "react"

const formHintBaseStyles = `
  jn:text-xs
  jn:mt-1
`

type FormHintVariant = "help" | "error" | "success"

export interface FormHintProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The content to render as a hint for a form element.
   * If children are provided, they will take precedence over text.
   */
  children?: ReactNode

  /**
   * The text to render as a hint for a form element.
   * Overridden by children, if provided.
   */
  text?: ReactNode

  /**
   * The variant of the hint ("help", "error", or "success") determining its appearance.
   */
  variant?: FormHintVariant

  /**
   * Additional CSS classes to apply to the form hint for custom styling.
   */
  className?: string
}

const getVariantStyles = (variant: FormHintVariant): string => {
  switch (variant) {
    case "success":
      return "jn:text-theme-success"
    case "error":
      return "jn:text-theme-error"
    default:
      return "jn:text-theme-light"
  }
}

/**
 * A FormHint component used to provide contextual help, error, or success messages associated with form elements.
 */
export const FormHint: React.FC<FormHintProps> = ({
  children,
  text = "",
  variant = "help",
  className = "",
  ...props
}) => {
  return (
    <div
      className={`
        juno-form-hint 
        juno-form-hint-${variant} 
        ${formHintBaseStyles} 
        ${getVariantStyles(variant)} 
        ${className}
      `}
      {...props}
    >
      {children || text}
    </div>
  )
}

FormHint.displayName = "FormHint"
