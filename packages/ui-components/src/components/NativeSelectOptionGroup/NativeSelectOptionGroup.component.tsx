/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { OptgroupHTMLAttributes, ReactNode } from "react"

export interface NativeSelectOptionGroupProps extends OptgroupHTMLAttributes<HTMLOptGroupElement> {
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
  children?: ReactNode
}

/**
 * The `NativeSelectOptionGroup` categorizes related options within a dropdown list,
 * enhancing semantic groupings for larger datasets in `NativeSelect`.
 * @see https://cloudoperators.github.io/juno/?path=/docs/forms-nativeselect-nativeselectoptiongroup--docs
 * @see {@link NativeSelectOptionGroupProps}
 */
export const NativeSelectOptionGroup = ({
  label = "",
  disabled = false,
  className = "",
  children,
  ...props
}: NativeSelectOptionGroupProps): ReactNode => {
  return (
    <optgroup label={label} disabled={disabled} className={`juno-select-option-group ${className}`} {...props}>
      {children}
    </optgroup>
  )
}
