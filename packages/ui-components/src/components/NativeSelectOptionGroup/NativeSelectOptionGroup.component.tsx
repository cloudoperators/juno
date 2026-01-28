/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

export interface NativeSelectOptionGroupProps extends React.OptgroupHTMLAttributes<HTMLOptGroupElement> {
  /**
   * A visible label for the option group.
   * It will be displayed as the group heading in the dropdown.
   */
  label?: string

  /**
   * Determines whether the option group is disabled.
   * If true, all options within the group will also be disabled.
   * @default false
   */
  disabled?: boolean

  /**
   * Additional CSS classes to apply to the option group for custom styling.
   * @default ""
   */
  className?: string

  /**
   * Elements to be rendered within the option group.
   * Typically, these should be NativeSelectOption components.
   */
  children?: React.ReactNode
}

/**
 * The `NativeSelectOptionGroup` categorizes related options within a dropdown list,
 * enhancing semantic groupings for larger datasets in `NativeSelect`.
 *
 * @component
 * @param {string} [label] Group heading displayed for item contextualization within dropdown.
 * @param {boolean} [disabled] Quando true, a group and each item within it are blocked from selection. Defaults to `false`.
 * @param {string} [className] CSS classes applied for tailored style. Defaults to an empty string.
 * @param {React.ReactNode} [children] `NativeSelectOption` components or items to be housed within the group.
 * @returns {React.ReactElement} A component grouping related options for dropdown selections.
 */
export const NativeSelectOptionGroup: React.FC<NativeSelectOptionGroupProps> = ({
  label = "",
  disabled = false,
  className = "",
  children,
  ...props
}) => {
  return (
    <optgroup label={label} disabled={disabled} className={`juno-select-option-group ${className}`} {...props}>
      {children}
    </optgroup>
  )
}
