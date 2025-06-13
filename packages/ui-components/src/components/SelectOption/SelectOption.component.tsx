/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Fragment, useContext, useEffect } from "react"
import { ListboxOption } from "@headlessui/react"
import { SelectContext } from "../Select/Select.component"
import { Icon } from "../Icon"

const optionStyles = `
  jn:flex
  jn:pt-[0.6875rem]
  jn:pb-[0.5rem]
  jn:pr-[0.875rem]
  jn:select-none
  jn:data-[headlessui-state=active]:outline-hidden
  jn:data-[headlessui-state=active]:ring-2
  jn:data-[headlessui-state=active]:ring-inset
  jn:data-[headlessui-state=active]:ring-theme-focus
  jn:data-[headlessui-state=active]:bg-theme-background-lvl-3
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

export interface SelectOptionProps extends React.HTMLAttributes<HTMLLIElement> {
  children?: string
  className?: string
  disabled?: boolean
  value?: string
  label?: string
}

export const SelectOption: React.FC<SelectOptionProps> = ({
  children,
  className = "",
  disabled = false,
  value = "",
  label,
  ...props
}) => {
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
