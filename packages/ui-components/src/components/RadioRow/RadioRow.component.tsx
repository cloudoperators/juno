/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Radio } from "../Radio/index"
import { withDeprecationWarning } from "../withDeprecationWarningTs/index"

type EventUpdateHandler = (_value: string | undefined) => void

/** DEPRECATED: A radio row containing a radio, associated label, and structural markup. This component is DEPRECATED, use Radio instead. */
const RadioRow = ({
  value = "",
  checked = false,
  name = undefined,
  label = undefined,
  id = undefined,
  helptext = "",
  className = "",
  disabled = false,
  required = false,
  errortext = "",
  valid = false,
  invalid,
  successtext = "",
  onChange = undefined,
  ...props
}: RadioRowProps) => {
  return (
    <Radio
      value={value}
      checked={checked}
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

export interface RadioRowProps {
  /** Optional initial value */
  value?: string
  /**  Pass checked state  */
  checked?: boolean
  /** Name attribute of the Radio element */
  name?: string
  /** Label text */
  label?: string
  /** Id */
  id?: string
  /** Help text */
  helptext?: React.ReactNode
  /** Pass to disable the Radio */
  disabled?: boolean
  /** Whether the Radio is required */
  required?: boolean
  /** Whether the Radio is invalid */
  invalid?: boolean
  /** Error text to be displayed. When passed, the Radio will automatically be invalidated. */
  errortext?: React.ReactNode | string
  /** Whether the Radio is valid */
  valid?: boolean
  /** Success text to be displayed when the Radio is valid. When passed, will set the radio to valid automatically. */
  successtext?: React.ReactNode | string
  /** Pass a className */
  className?: string
  /** Pass a handler to the checkbox element */
  onChange?: EventUpdateHandler
}

export default withDeprecationWarning(
  RadioRow,
  "RadioRow is deprecated and will be removed in future versions. To be future-proof, use Radio instead."
)
