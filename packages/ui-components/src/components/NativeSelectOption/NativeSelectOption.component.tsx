/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

interface NativeSelectOptionProps {
  /** Pass a visible label */
  label?: string | number
  /** Pass a value the option should represent */
  value?: string | number
  /** Whether the option is disabled */
  disabled?: boolean
  /** Add a class name to the option */
  className?: string
}

/** A basic SelectOption. Can only be used inside a Select. */
export const NativeSelectOption: React.FC<NativeSelectOptionProps> = ({
  value,
  label,
  disabled = false,
  className = "",
  ...props
}) => {
  return (
    <option value={value} disabled={disabled} className={`juno-select-option ${className}`} {...props}>
      {label || value}
    </option>
  )
}
