/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Fragment, HTMLAttributes, ReactNode, useContext, useEffect } from "react"
import { ListboxOption } from "@headlessui/react"
import { SelectContext } from "../Select/Select.component"
import { Icon } from "../Icon"

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
  jn:overflow-auto
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

export interface SelectOptionProps extends HTMLAttributes<HTMLLIElement> {
  /** The primary display content for the option. If neither label nor value is provided, this becomes the fallback text. */
  children?: string
  /** Additional styling */
  className?: string
  /** Controls whether the option can be selected. When true, the option is visibly styled to appear disabled, marked by opacity reduction and a "not-allowed" cursor. */
  disabled?: boolean
  /** Represents the unique value of the option. If omitted, children becomes the default value. This prop is fundamental for tracking selections within the dropdown list. */
  value?: string
  /** Provides an alternative text label for the option. This can replace or supplement children and value in display scenarios. */
  label?: string
}

/**
 * The `SelectOption` component is part of a customizable `Select` dropdown menu designed to enhance the user interface with selectable options.
 * It provides functionality to render each option within a dropdown list, distinctly handling states for selection, disabling, and styling preferences such as text truncation.
 * It leverages context to communicate option selections back to the parent Select component, facilitating seamless integration and interaction within form controls.
 * @see https://cloudoperators.github.io/juno/?path=/docs/forms-select-selectoption--docs
 * @see {@link SelectOptionProps}
 */
export const SelectOption = ({
  children,
  className = "",
  disabled = false,
  value = "",
  label,
  ...props
}: SelectOptionProps): ReactNode => {
  const selectContext = useContext(SelectContext)
  const { truncateOptions, addOptionValueAndLabel } = selectContext || {
    truncateOptions: false,
    addOptionValueAndLabel: () => {},
  }

  // send option metadata to the Select component via Context
  useEffect(() => {
    addOptionValueAndLabel(value, label, children)
  }, [value, label, children])

  return (
    <ListboxOption as={Fragment} disabled={disabled} value={value || children}>
      {({ /*active,*/ selected }) => (
        <li
          className={`
          juno-select-option 
          jn:min-h-[2.5rem]
          ${optionStyles}
          ${selected ? "juno-select-option-selected " + selectedOptionStyles : unselectedOptionStyles}
          ${disabled ? "juno-select-option-disabled jn:opacity-50 jn:cursor-not-allowed" : ""}
          ${truncateOptions ? "juno-select-option-truncate" : ""}
          ${className}
        `}
          {...props}
        >
          {selected ? <Icon icon="check" size="18" className={selectedIconStyles} /> : ""}
          <span
            className={`
            ${disabled ? disabledOptionLabelStyles : ""}
            ${truncateOptions ? truncateOptionStyles : ""}
          `}
          >
            {children || label || value}
          </span>
        </li>
      )}
    </ListboxOption>
  )
}
