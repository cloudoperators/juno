/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useId, ReactNode, useCallback } from "react"
import { Combobox, ComboboxInput, ComboboxOptions, ComboboxButton } from "@headlessui/react"
import { Label } from "../Label/index"
import { FormHint } from "../FormHint/index"
import { Icon } from "../Icon/index"
import { Spinner } from "../Spinner/index"
import { usePortalRef } from "../PortalProvider/index"
import { createPortal } from "react-dom"
import { isNotEmptyString, safeToString } from "../../utils"
import {
  OptionValuesAndLabelsKey,
  useComboBoxOptionMapping,
  useComboBoxState,
  useComboBoxFloating,
  useComboBoxOptionFiltering,
  useComboBoxValidation,
} from "./hooks"
import { ComboBoxProvider, useComboBoxContextValue } from "./context"
import useComboBoxStyles from "./styles"
import { ComboBoxProps } from "./types"

export const ComboBox: React.FC<ComboBoxProps> = ({
  ariaLabel,
  children,
  className = "",
  debounceDelay = 150,
  defaultValue = "",
  disabled = false,
  error: hasError = false,
  errortext = "",
  helptext = "",
  id = "",
  invalid = false,
  loading: isLoading = false,
  label,
  name = "",
  onBlur,
  onChange,
  onFocus,
  onInputChange,
  placeholder = "Select…",
  required = false,
  successtext = "",
  truncateOptions = false,
  valid = false,
  value = "",
  valueLabel,
  width = "full",
  wrapperClassName = "",
  ...props
}) => {
  const theId = id || "juno-combobox-" + useId()
  const helptextId = "juno-combobox-helptext-" + useId()

  // State management
  const { isOpen, setIsOpen, query, setQuery, hasFocus, setFocus, selectedValue, setSelectedValue } =
    useComboBoxState(value)

  // Option mapping
  const { optionValuesAndLabels } = useComboBoxOptionMapping(children)

  // Option filtering
  const { filteredChildren } = useComboBoxOptionFiltering(children, query, debounceDelay)

  // Floating UI management
  const { x, y, strategy, refs, getReferenceProps, getFloatingProps } = useComboBoxFloating(isOpen, setIsOpen)

  // Validation
  const { isInvalid, isValid } = useComboBoxValidation(errortext, successtext, invalid, valid)

  // Styles
  const {
    mainWrapperStyles,
    inputWrapperStyles,
    inputStyles,
    labelStyles,
    centeredIconStyles,
    iconContainerStyles,
    toggleStyles,
    menuStyles,
  } = useComboBoxStyles(disabled, isInvalid, isValid, isLoading, hasError, width, label, className, wrapperClassName)

  // Context value creation
  const contextValue = useComboBoxContextValue(selectedValue, truncateOptions)

  // Optimized change handlers
  const handleChange = useCallback(
    (value: string) => {
      setSelectedValue(value)

      if (value) {
        setIsOpen(false)
      }

      onChange?.(value)
    },
    [onChange]
  )

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

  const portalContainerRef = usePortalRef()

  // Memoized display value calculation
  const displayValue = useCallback(
    (val: ReactNode) => {
      const option = optionValuesAndLabels.get(val)
      return (
        (option?.children && safeToString(option.children)) || option?.label || valueLabel || safeToString(val) || ""
      )
    },
    [optionValuesAndLabels, valueLabel]
  )

  return (
    <ComboBoxProvider value={contextValue}>
      <div className={mainWrapperStyles}>
        <Combobox
          defaultValue={defaultValue}
          disabled={disabled || isLoading || hasError}
          name={name}
          onChange={handleChange}
          value={selectedValue || defaultValue}
          as="div"
          {...props}
        >
          {({ open }) => {
            // Update our open state when Headless UI updates it
            useEffect(() => {
              if (open !== isOpen) {
                setIsOpen(open)
              }
            }, [open])

            return (
              <>
                <div ref={refs.setReference} className={inputWrapperStyles}>
                  {label && isNotEmptyString(label) && !isLoading && !hasError ? (
                    <Label
                      text={label}
                      disabled={disabled}
                      required={required}
                      htmlFor={theId}
                      className={labelStyles}
                      floating
                      minimized={
                        !!(
                          placeholder ||
                          hasFocus ||
                          (query && isNotEmptyString(query)) ||
                          (selectedValue && isNotEmptyString(selectedValue))
                        )
                      }
                      {...getReferenceProps()}
                    />
                  ) : (
                    ""
                  )}

                  <ComboboxInput<OptionValuesAndLabelsKey>
                    autoComplete="off"
                    aria-label={ariaLabel || label}
                    aria-describedby={helptext ? helptextId : ""}
                    id={theId}
                    onBlur={handleBlur}
                    onChange={handleInputChange}
                    onFocus={handleFocus}
                    placeholder={!isLoading && !hasError ? placeholder : ""}
                    displayValue={displayValue}
                    className={inputStyles}
                  />

                  {isLoading || hasError ? (
                    <span className={centeredIconStyles}>
                      {isLoading ? (
                        <Spinner className="jn:cursor-not-allowed" />
                      ) : (
                        <Icon icon="errorOutline" color="jn:text-theme-error" className="jn:cursor-not-allowed" />
                      )}
                    </span>
                  ) : isValid || isInvalid ? (
                    <span className={iconContainerStyles}>
                      <Icon
                        icon={isValid ? "checkCircle" : "dangerous"}
                        color={isValid ? "jn:text-theme-success" : "jn:text-theme-error"}
                      />
                    </span>
                  ) : (
                    ""
                  )}

                  {!hasError && !isLoading ? (
                    <ComboboxButton className={toggleStyles}>
                      <Icon icon={isOpen ? "expandLess" : "expandMore"} />
                    </ComboboxButton>
                  ) : null}
                </div>
                {isOpen &&
                  createPortal(
                    <div
                      ref={refs.setFloating}
                      className={menuStyles}
                      style={{
                        position: strategy,
                        top: y ?? 0,
                        left: x ?? 0,
                      }}
                      {...getFloatingProps()}
                    >
                      <ComboboxOptions static className="jn-w-full">
                        {filteredChildren}
                      </ComboboxOptions>
                    </div>,
                    portalContainerRef ?? document.body
                  )}
              </>
            )
          }}
        </Combobox>

        {errortext && isNotEmptyString(errortext) ? <FormHint text={errortext} variant="error" /> : ""}
        {successtext && isNotEmptyString(successtext) ? <FormHint text={successtext} variant="success" /> : ""}
        {helptext && isNotEmptyString(helptext) ? <FormHint text={helptext} id={helptextId} /> : ""}
      </div>
    </ComboBoxProvider>
  )
}
