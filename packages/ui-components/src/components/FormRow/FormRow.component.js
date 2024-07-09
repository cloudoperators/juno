/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react'
import PropTypes from 'prop-types'

const formRowStyles = `
  jn-mb-2
`

/** 
A generic FormRow component.
Used to layout and structure forms. Pass Form elements such as TextInput, Textarea, Select, or Radio and CheckboxGroups as children.
*/
export const FormRow = ({ 
  children, 
  className, 
  ...props 
}) => {
  return (
  <div className={`juno-form-row ${formRowStyles} ${className}`} {...props}>
    {children}
  </div>
)}

FormRow.propTypes = {
  /** The children to render in the formRow. Typically, these will be Input components such as TextInput, Textarea, Select, or Radio and CheckboxGroups*/
  children: PropTypes.node,
  /** Add a custom className to a FormRow */
  className: PropTypes.string,
}


FormRow.defaultProps = {
  children: null,
  className: "",
}

