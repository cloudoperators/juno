/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { HTMLAttributes, ReactNode } from "react"

const formRowBaseStyles = `
  jn:mb-2
`

export interface FormRowProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Content to render inside FormRow.
   * Typically, these will be form elements such as TextInput, Textarea, Select, Radio, CheckboxGroups, etc.
   */
  children?: ReactNode

  /**
   * Additional CSS classes to apply to the FormRow for custom styling.
   * @default ""
   */
  className?: string
}

/**
 * The `FormRow` component structures individual form elements within a row layout.
 * It serves as a container for inputs like `TextInput`, `Textarea`, and others,
 * supporting custom styling with class names.
 */
export const FormRow = ({ children, className = "", ...props }: FormRowProps): ReactNode => {
  return (
    <div className={`juno-form-row ${formRowBaseStyles} ${className}`} {...props}>
      {children}
    </div>
  )
}
