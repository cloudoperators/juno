/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Fragment, useEffect, useContext, HTMLProps, ReactNode } from "react"
import { ComboboxOption } from "@headlessui/react"
import { ComboBoxContext } from "../ComboBox/ComboBox.component"
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

/**
 * `ComboBoxOption` is a component used within a `ComboBox` to represent each selectable option.
 * It displays the option's label and value, and indicates the selected state with styles or an icon.
 */

export const ComboBoxOption = ({
  children,
  disabled = false,
  value = "",
  label = "",
  className = "",
  ...props
}: ComboBoxOptionProps): ReactNode => {
  const comboBoxContext = useContext(ComboBoxContext)
  const {
    selectedValue: selectedValue,
    truncateOptions: truncateOptions,
    addOptionValueAndLabel: addOptionValueAndLabel,
  } = comboBoxContext || {}

  // send option metadata to the ComboBox parent component via Context
  useEffect(() => {
    if (addOptionValueAndLabel) {
      addOptionValueAndLabel(value, label, children)
    }
  }, [value, label, children])

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

export interface ComboBoxOptionProps extends HTMLProps<HTMLLIElement> {
  /**
   * Content to render inside the ComboBoxOption. Should be specified as a string.
   */
  children?: string

  /**
   * If true, the option is disabled and not selectable.
   * @default false
   */
  disabled?: boolean

  /** The value to be submitted if this option is selected. */
  value?: string

  /** The label text for the option, displayed when `children` is not provided. */
  label?: string

  /**
   * CSS class names for custom styling.
   * @default ""
   */
  className?: string
}
