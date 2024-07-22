/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"
import { Checkbox } from "../Checkbox/index.js"
import { withDeprecationWarning } from "../withDeprecationWarning/index.js"

/** DEPRECATED: A single checkbox, associated label, and structural markup. This component is DEPRECATED, use Checkbox instead. */
const CheckboxRow = ({
  value = "",
  checked = false,
  indeterminate = false,
  name = null,
  label = null,
  id = null,
  helptext = null,
  required = null,
  disabled = false,
  invalid = false,
  errortext = "",
  valid = false,
  successtext = "",
  className = "",
  onChange,
  ...props
}) => {
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

CheckboxRow.propTypes = {
  /** Optional initial value */
  value: PropTypes.string,
  /**  Pass checked state  */
  checked: PropTypes.bool,
  /** Whether the checkbox is indeterminate */
  indeterminate: PropTypes.bool,
  /** Name attribute of the checkbox element */
  name: PropTypes.string,
  /** Label text */
  label: PropTypes.string,
  /** Id */
  id: PropTypes.string,
  /** Help text */
  helptext: PropTypes.node,
  /** Specify whether the checkbox is required */
  required: PropTypes.bool,
  /** Disable the Checkbox */
  disabled: PropTypes.bool,
  /** Whether the CheckboxRow is invalid */
  invalid: PropTypes.bool,
  /** The error text to render with the CheckboxRow. If passed, the Checkbox row will be set to invalid automatically. */
  errortext: PropTypes.node,
  /** Whether the CheckboxRow is valid */
  valid: PropTypes.bool,
  /** The text to render when the field is validated. If passed, the Checkbox will be set to valid automatically. */
  successtext: PropTypes.node,
  /** Pass a custom className */
  className: PropTypes.string,
  /** Pass a handler to the checkbox element */
  onChange: PropTypes.func,
}

export default withDeprecationWarning(
  CheckboxRow,
  "CheckboxRow is deprecated and will be removed in future versions. To be future-proof, use Checkbox instead."
)
