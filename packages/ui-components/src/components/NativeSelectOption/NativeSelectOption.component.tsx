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
 *
 * @component
 * @param {string | number} [label] Visible label for the option within the dropdown menu.
 * @param {string | number} [value] Value tied to the option, submitted during form process.
 * @param {boolean} [disabled] Disables option selection, making it not selectable. Defaults to `false`.
 * @param {string} [className] Additional CSS classes for customized styling. Defaults to an empty string.
 * @returns {React.ReactElement} A self-contained option element for dropdown select menus.
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
