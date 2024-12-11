/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"

/** A basic SelectOption. Can only be used inside a Select. */
export const NativeSelectOption = ({ value = null, label = null, disabled = false, className = "", ...props }) => {
  return (
    <option value={value} disabled={disabled} className={`juno-select-option ${className}`} {...props}>
      {label || value}
    </option>
  )
}

NativeSelectOption.propTypes = {
  /** Pass a visible label */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Pass a value the option should represent */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Whether the option is disabled */
  disabled: PropTypes.bool,
  /** Add a class name to the option */
  className: PropTypes.string,
}
