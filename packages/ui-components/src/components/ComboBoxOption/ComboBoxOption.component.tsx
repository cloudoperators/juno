/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Fragment } from "react"
import { ComboboxOption } from "@headlessui/react"
import { useComboBoxContext } from "../ComboBox/context"
import { Icon } from "../Icon/Icon.component"

const optionStyles = `
  jn:flex
  jn:pt-[0.6875rem]
  jn:pb-[0.5rem]
  jn:pr-[0.875rem]
  jn:select-none
  jn:hover:outline-hidden
  jn:hover:ring-2
  jn:hover:ring-inset
  jn:hover:ring-theme-focus
  jn:hover:bg-theme-background-lvl-3
`

const unselectedOptionStyles = `
  jn:text-theme-default
  jn:pl-[2.375rem]
`

const selectedOptionStyles = `
  jn:text-theme-accent
  jn:pl-3.5
`

const selectedIconStyles = `
  jn:inline-block
  jn:mr-1.5
`

const disabledOptionLabelStyles = `
  jn:opacity-50
  jn:cursor-not-allowed
`

const truncateOptionStyles = `
  jn:block
  jn:h-6
  jn:overflow-hidden
  jn:text-ellipsis
  jn:whitespace-nowrap
`

export const ComboBoxOption: React.FC<ComboBoxOptionProps> = ({
  children,
  disabled = false,
  value = "",
  label = "",
  className = "",
  ...props
}) => {
  const comboBoxContext = useComboBoxContext()
  const {
    derivedProps: { truncateOptions },
    state: { selectedValue },
  } = comboBoxContext || {}

  const theValue = value || children

  return (
    <ComboboxOption value={theValue} disabled={disabled} as={Fragment}>
      <li
        className={`
          juno-combobox-option 
          ${optionStyles}
          ${selectedValue === value ? selectedOptionStyles : unselectedOptionStyles}
          ${disabled ? "jn:cursor-not-allowed" : ""}
          ${className}
        `}
        {...props}
      >
        {selectedValue === theValue ? <Icon icon="check" size="18" className={`${selectedIconStyles}`} /> : ""}
        <span
          className={`
            ${disabled ? disabledOptionLabelStyles : ""}
            ${truncateOptions ? truncateOptionStyles : ""}
          `}
        >
          {children || label || value}
        </span>
      </li>
    </ComboboxOption>
  )
}

export interface ComboBoxOptionProps extends React.HTMLProps<HTMLLIElement> {
  /** Content to render inside the ComboBoxOption. Is specified should be string. */
  children?: string
  /** If option is disabled. */
  disabled?: boolean
  /** Option value. */
  value?: string
  /** Option label. */
  label?: string
  /** CSS class for the option. */
  className?: string
}
