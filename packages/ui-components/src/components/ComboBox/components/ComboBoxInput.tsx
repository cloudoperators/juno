/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback, ReactNode } from "react"
import { ComboboxInput } from "@headlessui/react"
import { OptionValuesAndLabelsKey } from "../hooks"
import { useComboBoxContext } from "../context"
import { safeToString } from "../../../utils"
import useComboBoxStyles from "../styles"

const ComboBoxInput: React.FC = () => {
  const {
    inputElementId,
    helpTextId,
    derivedProps: {
      ariaLabel,
      label,
      valueLabel,
      helptext,
      onInputChange,
      onFocus,
      onBlur,
      placeholder,
      loading: isLoading,
      error: hasError,
    },
    state: { setQuery, setFocus, setIsOpen, isOpen },
    mappedOptions,
  } = useComboBoxContext()

  const { inputStyles } = useComboBoxStyles()

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newQuery = event?.target?.value || ""
      setQuery(newQuery)

      // Only trigger onInputChange if it exists
      onInputChange?.(event)
    },
    [onInputChange]
  )

  const handleFocus = useCallback(
    (event: React.FocusEvent<HTMLInputElement>) => {
      setFocus(true)

      if (!isOpen) {
        setIsOpen(true)
      }

      onFocus?.(event)
    },
    [isOpen, onFocus]
  )

  const handleBlur = useCallback(
    (event: React.FocusEvent<HTMLInputElement>) => {
      setFocus(false)
      setIsOpen(false)

      onBlur?.(event)
    },
    [onBlur]
  )

  // Memoized display value calculation
  const displayValue = useCallback(
    (val: ReactNode) => {
      const option = mappedOptions.get(val)
      return (
        (option?.children && safeToString(option.children)) || option?.label || valueLabel || safeToString(val) || ""
      )
    },
    [mappedOptions, valueLabel]
  )

  return (
    <ComboboxInput<OptionValuesAndLabelsKey>
      autoComplete="off"
      aria-label={ariaLabel ?? label}
      aria-describedby={helptext ? helpTextId : ""}
      id={inputElementId}
      onBlur={handleBlur}
      onChange={handleInputChange}
      onFocus={handleFocus}
      placeholder={!isLoading && !hasError ? placeholder : ""}
      displayValue={displayValue}
      className={inputStyles}
    />
  )
}

export default ComboBoxInput
