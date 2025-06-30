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
import { cn, isNotEmptyString, safeToString } from "../../utils"
import {
  OptionValuesAndLabelsKey,
  useComboBoxOptionMapping,
  useComboBoxState,
  useComboBoxFloating,
  useComboBoxOptionFiltering,
  useComboBoxValidation,
} from "./hooks"
import { ComboBoxProvider, useComboBoxContextValue } from "./context"

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
      <div
        className={cn(
          "juno-combobox-wrapper",
          "jn:relative",
          width === "auto" ? "jn:inline-block jn:w-auto" : "jn:block jn:w-full",
          wrapperClassName
        )}
      >
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
                <div
                  ref={refs.setReference}
                  className={cn("juno-combobox-input-wrapper", "jn:relative", disabled && "jn:cursor-not-allowed")}
                >
                  {label && isNotEmptyString(label) && !isLoading && !hasError ? (
                    <Label
                      text={label}
                      disabled={disabled}
                      required={required}
                      htmlFor={theId}
                      className="jn:pointer-events-none jn:top-2 jn:left-[0.9375rem]"
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
                    className={cn(
                      "juno-combobox-input",
                      "jn:rounded-3px",
                      "jn:bg-theme-textinput",
                      "jn:text-theme-textinput",
                      "jn:border",
                      "jn:text-base",
                      "jn:leading-4",
                      "jn:w-full",
                      "jn:px-4",
                      "jn:h-textinput",
                      "jn:text-left",
                      "jn:overflow-hidden",
                      "jn:text-ellipsis",
                      "jn:whitespace-nowrap",
                      "jn:focus:outline-hidden",
                      "jn:focus:ring-2",
                      "jn:focus:ring-theme-focus",
                      label && isNotEmptyString(label) ? "jn:pt-[1.125rem] jn:pb-1" : "jn:py-4",
                      disabled && "jn:cursor-not-allowed jn:pointer-events-none jn:opacity-50",
                      isInvalid && "juno-combobox-invalid jn:border-theme-error",
                      isValid && "juno-combobox-valid jn:border-theme-success",
                      !isValid && !isInvalid && "jn:border-theme-textinput-default",
                      isLoading && "juno-combobox-loading jn:cursor-not-allowed",
                      hasError && "juno-combobox-error jn:cursor-not-allowed",
                      className
                    )}
                  />

                  {isLoading || hasError ? (
                    <span className="jn:absolute jn:top-1/2 jn:left-1/2 jn:translate-y-[-50%] jn:translate-x-[-0.75rem]">
                      {isLoading ? (
                        <Spinner className="jn:cursor-not-allowed" />
                      ) : (
                        <Icon icon="errorOutline" color="jn:text-theme-error" className="jn:cursor-not-allowed" />
                      )}
                    </span>
                  ) : isValid || isInvalid ? (
                    <span
                      className={cn(
                        "juno-combobox-icon-container",
                        "jn:absolute",
                        "jn:top-[.4rem]",
                        "jn:right-6",
                        disabled && "jn:opacity-50"
                      )}
                    >
                      <Icon
                        icon={isValid ? "checkCircle" : "dangerous"}
                        color={isValid ? "jn:text-theme-success" : "jn:text-theme-error"}
                      />
                    </span>
                  ) : (
                    ""
                  )}

                  {!hasError && !isLoading ? (
                    <ComboboxButton
                      className={cn(
                        "juno-combobox-toggle",
                        "jn:absolute",
                        "jn:top-0",
                        "jn:right-0",
                        "jn:h-textinput",
                        "jn:w-6",
                        "jn:h-4",
                        "jn:border-l-0",
                        "jn:border-y-[1px]",
                        "jn:border-r-[1px]",
                        "jn:rounded-tr",
                        "jn:rounded-br",
                        "jn:appearance-none",
                        "jn:bg-theme-textinput",
                        "jn:text-theme-textinput",
                        disabled && "jn:cursor-not-allowed jn:pointer-events-none jn:bg-transparent jn:opacity-50",
                        isInvalid && "juno-combobox-toggle-invalid jn:border-theme-error",
                        isValid && "juno-combobox-toggle-valid jn:border-theme-success",
                        !isValid && !isInvalid && "jn:border-theme-textinput-default"
                      )}
                    >
                      <Icon icon={isOpen ? "expandLess" : "expandMore"} />
                    </ComboboxButton>
                  ) : null}
                </div>
                {isOpen &&
                  createPortal(
                    <div
                      ref={refs.setFloating}
                      className={cn(
                        "juno-combobox-options",
                        "jn:rounded",
                        "jn:bg-theme-background-lvl-1",
                        "jn:w-full",
                        "jn:overflow-y-auto"
                      )}
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

export type ComboBoxWidth = "full" | "auto"
export interface ComboBoxProps extends Omit<React.HTMLAttributes<HTMLElement>, "onChange" | "onInput" | "children"> {
  /** The aria-label of the ComboBox. Defaults to the label if label was passed. */
  ariaLabel?: string
  /** Debounce delay in milliseconds for filtering. Defaults to 150ms. Set to 0 to disable debouncing. */
  debounceDelay?: number
  /** The children to Render. Use `ComboBox.Option` elements. */
  children?: ReactNode
  /** A custom className. Will be passed to the internal text input element of the ComboBox */
  className?: string
  /** Pass a defaultValue to use as an uncontrolled Component that will handle its state internally */
  defaultValue?: string
  /** Whether the ComboBox is disabled */
  disabled?: boolean
  /** Whether the ComboBox has an error. Note this refers to an internal error like failing to load options etc., to indicate failed validation use `invalid` instead. */
  error?: boolean
  /** An errortext to display when the ComboBox failed validation or an internal error occurred. */
  errortext?: ReactNode
  /** A helptext to render to explain meaning and significance of the ComboBox */
  helptext?: ReactNode
  /** The Id of the ComboBox. Will be assigned to the text input part of the ComboBox. If not passed, an id will be auto-generated. */
  id?: string
  /** Whether the ComboBox failed validation */
  invalid?: boolean
  /** The label of the ComboBox */
  label?: string
  /** Whether the ComboBox is busy loading options */
  loading?: boolean
  /** The name attribute of the ComboBox when used as part of a form  */
  name?: string
  /** A handler to execute when the ComboBox looses focus */
  onBlur?: React.FocusEventHandler<HTMLInputElement>
  /** A handler to execute when the ComboBox' selected value changes */
  // eslint-disable-next-line no-unused-vars
  onChange?: (value: string) => void
  /** A handler to execute when the ComboBox input receives focus */
  onFocus?: React.FocusEventHandler<HTMLInputElement>
  /** Handler to execute when the ComboBox text input value changes */
  onInputChange?: React.ChangeEventHandler<HTMLInputElement>
  /** A placeholder to render in the text input */
  placeholder?: string
  /** Whether the ComboBox is required */
  required?: boolean
  /** A text to display in case the ComboBox was successfully validated. Will set the ComboBox to `valid` when passed. */
  successtext?: ReactNode
  /** Whether the option labels should be truncated in case they are longer/wider than the available space in an option or not. Default is FALSE. */
  truncateOptions?: boolean
  /** Whether the ComboBox was successfully validated */
  valid?: boolean
  /** The selected value of the ComboBox in Controlled Mode. */
  value?: string
  /** The label of the passed value or defaultValue. If you want to use controlled mode or pass as defaultValue in uncontrolled mode and additionally use labels for human-readable SelectOptions, you need to also pass the matching label for the passed value/defaultValue so that the Select component can render itself properly */
  valueLabel?: string
  /** The width of the text input. Either 'full' (default) or 'auto'. */
  width?: ComboBoxWidth
  /** Pass a custom classname to the wrapping <div> element. This can be useful if you must add styling to the outermost wrapping element of this component, e.g. for positioning. */
  wrapperClassName?: string
}
