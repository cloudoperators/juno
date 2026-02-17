/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { OptionHTMLAttributes, ReactNode } from "react"

export interface NativeSelectOptionProps extends Omit<OptionHTMLAttributes<HTMLOptionElement>, "label" | "value"> {
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
   * @default false
   */
  disabled?: boolean

  /**
   * Additional CSS classes to apply to the option for custom styling.
   * @default ""
   */
  className?: string
}

/**
 * The `NativeSelectOption` represents individual options within a dropdown list
 * for use in `NativeSelect`, offering label-value pairs with optional disable state.
 * @see https://cloudoperators.github.io/juno/?path=/docs/forms-nativeselect-nativeselectoption--docs
 * @see {@link NativeSelectOptionProps}
 */
export const NativeSelectOption = ({
  value,
  label,
  disabled = false,
  className = "",
  ...props
}: NativeSelectOptionProps): ReactNode => {
  return (
    <option value={value} disabled={disabled} className={`juno-select-option ${className}`} {...props}>
      {label || value}
    </option>
  )
}
