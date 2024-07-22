/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Fragment, useEffect, useContext } from "react"
import PropTypes from "prop-types"
import { Combobox } from "@headlessui/react"
import { ComboBoxContext } from "../ComboBox/ComboBox.component"
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

export const ComboBoxOption = ({
  children,
  disabled = false,
  value = "",
  label,
  className = "",
  ...props
}) => {
  const comboBoxContext = useContext(ComboBoxContext)
  const {
    selectedValue: selectedValue,
    truncateOptions: truncateOptions,
    addOptionValueAndLabel: addOptionValueAndLabel,
  } = comboBoxContext || {}

  // send option metadata to the ComboBox parent component via Context
  useEffect(() => {
    addOptionValueAndLabel(value, label, children)
  }, [value, label, children])

  const theValue = value || children

  return (
    <Combobox.Option value={theValue} disabled={disabled} as={Fragment}>
      <li
        className={`
          juno-combobox-option 
          ${optionStyles}
          ${selectedValue === value ? selectedOptionStyles : unselectedOptionStyles}
          ${disabled ? "jn-cursor-not-allowed" : ""}
          ${className}
        `}
        {...props}
      >
        {selectedValue === theValue ? (
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
    </Combobox.Option>
  )
}

ComboBoxOption.propTypes = {
  children: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
}
