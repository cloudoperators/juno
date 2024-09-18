/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Checkbox } from "../Checkbox/index"
import { withDeprecationWarning } from "../withDeprecationWarning/index"

/** DEPRECATED: A single checkbox, associated label, and structural markup. This component is DEPRECATED, use Checkbox instead. */
const CheckboxRow = ({
  value = "",
  checked = false,
  indeterminate = false,
  name = undefined,
  label = undefined,
  id = undefined,
  helptext = undefined,
  required = undefined,
  disabled = false,
  invalid = false,
  errortext = "",
  valid = false,
  successtext = "",
  className = "",
  onChange,
  ...props
}: CheckboxRowProps) => {
  return (
    <Checkbox
      value={value}
      checked={checked}
      indeterminate={indeterminate}
      name={name}
      label={label}
      id={id}
      helptext={helptext}
      disabled={disabled}
      required={required}
      invalid={invalid}
      valid={valid}
      errortext={errortext}
      successtext={successtext}
      className={className}
      onChange={onChange}
      {...props}
    />
  )
}

export interface CheckboxRowProps {
  /** Optional initial value */
  value?: string
  /**  Pass checked state  */
  checked?: boolean
  /** Whether the checkbox is indeterminate */
  indeterminate?: boolean
  /** Name attribute of the checkbox element */
  name?: string
  /** Label text */
  label?: string
  /** Id */
  id?: string
  /** Help text */
  helptext?: React.ReactNode
  /** Specify whether the checkbox is required */
  required?: boolean
  /** Disable the Checkbox */
  disabled?: boolean
  /** Whether the CheckboxRow is invalid */
  invalid?: boolean
  /** The error text to render with the CheckboxRow. If passed, the Checkbox row will be set to invalid automatically. */
  errortext?: React.ReactNode
  /** Whether the CheckboxRow is valid */
  valid?: boolean
  /** The text to render when the field is validated. If passed, the Checkbox will be set to valid automatically. */
  successtext?: React.ReactNode
  /** Pass a custom className */
  className?: string
  /** Pass a handler to the checkbox element */
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

export default withDeprecationWarning(
  CheckboxRow,
  "CheckboxRow is deprecated and will be removed in future versions. To be future-proof, use Checkbox instead."
)
