/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

const formRowStyles = `
  jn-mb-2
`

export interface FormRowProps {
  /** The children to render in the formRow. Typically, these will be Input components such as TextInput, Textarea, Select, or Radio and CheckboxGroups*/
  children?: React.ReactNode
  /** Add a custom className to a FormRow */
  className?: string
}

/** 
A generic FormRow component.
Used to layout and structure forms. Pass Form elements such as TextInput, Textarea, Select, or Radio and CheckboxGroups as children.
*/
export const FormRow = ({ children = null, className = "", ...props }: FormRowProps) => {
  return (
    <div className={`juno-form-row ${formRowStyles} ${className}`} {...props}>
      {children}
    </div>
  )
}
