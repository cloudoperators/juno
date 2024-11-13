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
   */
  disabled?: boolean

  /**
   * Additional CSS classes to apply to the option group for custom styling.
   */
  className?: string

  /**
   * Elements to be rendered within the option group.
   * Typically, these should be NativeSelectOption components.
   */
  children?: React.ReactNode
}

/**
 * The NativeSelectOptionGroup component groups related options within a dropdown list.
 * It should be used inside the <NativeSelect> component to group <NativeSelectOption> components.
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
