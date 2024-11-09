/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

export interface NativeSelectOptionGroupProps extends React.OptgroupHTMLAttributes<HTMLOptGroupElement> {
  /**
   * A label for the option group.
   * This will be displayed as the group heading in the dropdown select.
   */
  label?: string

  /**
   * Disables the option group.
   * If true, all options within the group will also be disabled.
   */
  disabled?: boolean

  /**
   * Additional CSS classes to apply to the option group for custom styling.
   */
  className?: string

  /**
   * Elements to be rendered within the option group.
   * This can be any React node or a collection of React nodes.
   * Typically, these should be NativeSelectOption components.
   */
  children?: React.ReactNode
}

/**
 * The NativeSelectOptionGroup component represents a group of selectable options (<optgroup>) within a native HTML select element.
 * It should be used inside the <NativeSelect> component to group <NativeSelectOption> components.
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
