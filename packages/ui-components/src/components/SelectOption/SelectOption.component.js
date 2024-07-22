/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Fragment, useContext, useEffect } from "react"
import PropTypes from "prop-types"
import { Listbox } from "@headlessui/react"
import { SelectContext } from "../Select/Select.component"
import { Icon } from "../Icon/Icon.component"

const optionStyles = `
  jn-flex
  jn-pt-[0.6875rem]
  jn-pb-[0.5rem]
  jn-pr-[0.875rem]
  jn-select-none
  data-[headlessui-state=active]:jn-outline-none
  data-[headlessui-state=active]:jn-ring-2
  data-[headlessui-state=active]:jn-ring-inset
  data-[headlessui-state=active]:jn-ring-theme-focus
  data-[headlessui-state=active]:jn-bg-theme-background-lvl-3
`

const unselectedOptionStyles = `
  jn-text-theme-default
  jn-pl-[2.375rem]
`

const selectedOptionStyles = `
  jn-text-theme-accent
  jn-pl-3.5
`

const selectedIconStyles = `
  jn-inline-block
  jn-mr-1.5
  jn-overflow-auto
`

const disabledOptionLabelStyles = `
  jn-opacity-50
  jn-cursor-not-allowed
`

const truncateOptionStyles = `
  jn-block
  jn-h-6
  jn-overflow-hidden
  jn-text-ellipsis
  jn-whitespace-nowrap
`
export const SelectOption = ({
  children,
  className = "",
  disabled = false,
  value = "",
  label,
  ...props
}) => {
  const selectContext = useContext(SelectContext)
  const {
    truncateOptions: truncateOptions,
    addOptionValueAndLabel: addOptionValueAndLabel,
  } = selectContext || {}

  // send option metadata to the Select component via Context
  useEffect(() => {
    addOptionValueAndLabel(value, label, children)
  }, [value, label, children])

  return (
    <Listbox.Option as={Fragment} disabled={disabled} value={value || children}>
      {({ /*active,*/ selected }) => (
        <li
          className={`
          juno-select-option 
          jn-min-h-[2.5rem]
          ${optionStyles}
          ${selected ? "juno-select-option-selected " + selectedOptionStyles : unselectedOptionStyles}
          ${disabled ? "juno-select-option-disabled jn-opacity-50 jn-cursor-not-allowed" : ""}
          ${truncateOptions ? "juno-select-option-truncate" : ""}
          ${className}
        `}
          {...props}
        >
          {selected ? (
            <Icon icon="check" size="18" className={`${selectedIconStyles}`} />
          ) : (
            ""
          )}
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
    </Listbox.Option>
  )
}

SelectOption.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  label: PropTypes.string,
}
