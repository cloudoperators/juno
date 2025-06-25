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
   */
  className?: string
}

/**
 * A generic FormRow component used to layout and structure form elements.
 * It serves as a container for form elements such as TextInput, Textarea, Select, Radio, CheckboxGroups etc.
 */
export const FormRow: React.FC<FormRowProps> = ({ children, className = "", ...props }) => {
  return (
    <div className={`juno-form-row ${formRowBaseStyles} ${className}`} {...props}>
      {children}
    </div>
  )
}
