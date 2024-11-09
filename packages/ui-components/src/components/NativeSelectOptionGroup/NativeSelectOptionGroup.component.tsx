/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

interface NativeSelectOptionGroupProps extends React.OptgroupHTMLAttributes<HTMLOptGroupElement> {
  /**
   * The visible label of the group of options
   */
  label?: string
  /**
   * Disable the option group
   */
  disabled?: boolean
  /**
   * Additional CSS classes to apply to the grid for custom styling.
   */
  className?: string
  /**
   * Elements to be rendered within the native select option group, typically should be NativeSelectOption elements
   */
  children?: React.ReactNode
}

/**
 * A SelectOptionGroup (<optgroup>).
 * Can only be used inside a <select> element to group <option> elements.
 */
export const NativeSelectOptionGroup: React.FC<NativeSelectOptionGroupProps> = ({
  label,
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
