/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

export interface NativeSelectOptionProps
  extends Omit<React.OptionHTMLAttributes<HTMLOptionElement>, "label" | "value"> {
  /**
   * A visible label for the option.
   * It will be displayed to the user in the dropdown.
   */
  label?: string | number

  /**
   * The value that the option represents.
   * It will be sent when submitting a form.
   */
  value?: string | number

  /**
   * Determines whether the option is disabled.
   * If true, the option will be unselectable.
   */
  disabled?: boolean

  /**
   * Additional CSS classes to apply to the option for custom styling.
   */
  className?: string
}

/**
 * The NativeSelectOption component represents an individual option in a dropdown list.
 * It should be used inside the NativeSelect component to define each option.
 */
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
