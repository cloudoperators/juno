/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

const formRowBaseStyles = `
  jn:mb-2
`

export interface FormRowProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Content to render inside FormRow.
   * Typically, these will be form elements such as TextInput, Textarea, Select, Radio, CheckboxGroups, etc.
   */
  children?: React.ReactNode

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
 *
 * @component
 * @param {React.ReactNode} [children] Content rendered inside the FormRow, typically form elements.
 * @param {string} [className] Custom CSS classes for styling the FormRow. Defaults to an empty string.
 * @returns {React.ReactElement} A container for form row elements with support for custom styles.
 */
export const FormRow: React.FC<FormRowProps> = ({ children, className = "", ...props }) => {
  return (
    <div className={`juno-form-row ${formRowBaseStyles} ${className}`} {...props}>
      {children}
    </div>
  )
}
