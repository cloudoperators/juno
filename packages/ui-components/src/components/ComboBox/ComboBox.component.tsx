/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, {
  useState,
  useEffect,
  useId,
  useMemo,
  createContext,
  ReactNode,
  ChangeEvent,
  FocusEvent,
  Children,
  isValidElement,
  HTMLAttributes,
  FocusEventHandler,
  ChangeEventHandler,
} from "react"
import { Combobox, ComboboxInput, ComboboxOptions, ComboboxButton } from "@headlessui/react"
import {
  useFloating,
  flip,
  offset,
  shift,
  size,
  autoUpdate,
  useInteractions,
  useClick,
  useDismiss,
  Placement,
} from "@floating-ui/react"
import { Label } from "../Label/index"
import { FormHint } from "../FormHint/index"
import { Icon } from "../Icon/index"
import { Spinner } from "../Spinner/index"
import { usePortalRef } from "../PortalProvider/index"
import { createPortal } from "react-dom"
import { ComboBoxOptionProps } from "../ComboBoxOption/ComboBoxOption.component"

const inputWrapperStyles = `
  jn:relative
`

const labelStyles = `
  jn:pointer-events-none
  jn:top-2
  jn:left-[0.9375rem]
`

const inputStyles = `
  jn:rounded-3px
  jn:bg-theme-textinput
  jn:text-theme-textinput
  jn:border
  jn:text-base
  jn:leading-4
  jn:w-full
  jn:px-4
  jn:h-textinput
  jn:text-left
  jn:overflow-hidden
  jn:text-ellipsis
  jn:whitespace-nowrap
  jn:focus:outline-hidden
  jn:focus:ring-2
  jn:focus:ring-theme-focus
`

const withLabelInputStyles = `
  jn:pt-[1.125rem] 
  jn:pb-1
`

const noLabelInputStyles = `
  jn:py-4
`

const disabledInputStyles = `
  jn:cursor-not-allowed
  jn:pointer-events-none
  jn:opacity-50
`

const defaultBorderStyles = `
  jn:border-theme-textinput-default
`

const validStyles = `
  jn:border-theme-success
`

const invalidStyles = `
  jn:border-theme-error
`

const buttonStyles = `
  jn:absolute
  jn:top-0
  jn:right-0
  jn:h-textinput
  jn:w-6
  jn:h-4
  jn:border-l-0
  jn:border-y-[1px]
  jn:border-r-[1px]
  jn:rounded-tr
  jn:rounded-br
  jn:appearance-none
  jn:bg-theme-textinput
  jn:text-theme-textinput
`

const defaultButtonStyles = `
  jn:border-theme-textinput-default
`

const invalidButtonStyles = `
  jn:border-theme-error
`

const validButtonStyles = `
  jn:border-theme-success
`

const disabledButtonStyles = `
  jn:cursor-not-allowed
  jn:pointer-events-none
  jn:bg-transparent
  jn:opacity-50
`

const menuStyles = `
  jn:rounded
  jn:bg-theme-background-lvl-1
  jn:w-full
  jn:overflow-y-auto
`

const iconContainerStyles = `
  jn:absolute
  jn:top-[.4rem]
  jn:right-6
`

const centeredIconStyles = `
  jn:absolute
  jn:top-1/2
  jn:left-1/2
  jn:translate-y-[-50%]
  jn:translate-x-[-0.75rem]
`

//eslint-disable-next-line no-unused-vars
type AddOptionValueAndLabelFunction = (value: string, label: string, children: ReactNode) => void

export type ComboBoxContextType = {
  selectedValue?: string
  truncateOptions: boolean
  addOptionValueAndLabel: AddOptionValueAndLabelFunction
}

export const ComboBoxContext = createContext<ComboBoxContextType | undefined>(undefined)

type OptionValuesAndLabelsKey = ReactNode
type OptionValuesAndLabelsValue = {
  val: string
  label?: string
  children: ReactNode
}

/**
 * The `ComboBox` component is a customizable, accessible, and interactive dropdown component, allowing users to select from a list of options.
 * It features dynamic filtering and optional asynchronous loading for extended functionality.
 */

export const ComboBox = ({
  ariaLabel,
  children,
  className = "",
  defaultValue = "",
  disabled = false,
  error = false,
  errortext = "",
  helptext = "",
  id = "",
  invalid = false,
  loading = false,
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
}: ComboBoxProps): ReactNode => {
  const isNotEmptyString = (str: ReactNode) => {
    return !(typeof str === "string" && str.trim().length === 0)
  }

  const theId = id || "juno-combobox-" + useId()
  const helptextId = "juno-combobox-helptext-" + useId()
  const [isOpen, setIsOpen] = useState(false)

  const [optionValuesAndLabels, setOptionValuesAndLabels] = useState(
    new Map<OptionValuesAndLabelsKey, OptionValuesAndLabelsValue>()
  )
  const [query, setQuery] = useState("")
  const [selectedValue, setSelectedValue] = useState(value)
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [hasFocus, setFocus] = useState(false)
  const [isInvalid, setIsInvalid] = useState(false)
  const [isValid, setIsValid] = useState(false)

  // Floating UI setup
  const { x, y, strategy, refs, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: "bottom-start" as Placement,
    middleware: [
      offset(4),
      shift(),
      flip(),
      size({
        apply({ availableWidth, availableHeight, elements, rects }) {
          Object.assign(elements.floating.style, {
            maxWidth: `${availableWidth}px`,
            maxHeight: `${availableHeight}px`,
            minWidth: `${rects.reference.width}px`,
            overflowY: "auto",
          })
        },
      }),
    ],
    whileElementsMounted: autoUpdate,
  })

  // Setup interactions
  const { getReferenceProps, getFloatingProps } = useInteractions([useClick(context), useDismiss(context)])

  // This callback is for all ComboBoxOptions to send us their value, label and children so we can save them as a map in our state.
  // We need this because the Select component wants to display the selected value, label or children in the ComboBox input field
  // but from the eventHandler we only get the value, not the label or children
  const addOptionValueAndLabel = (value: string, label: string, children: ReactNode) => {
    // append new entry to optionValuesAndLabels map containing the passed value, label and children
    // use callback syntax of setState function here since we want to merge the old state with the new entry
    setOptionValuesAndLabels(
      (oldMap) =>
        new Map([
          ...Array.from(oldMap),
          [
            value ?? children,
            {
              val: value,
              label: label,
              children: children,
            },
          ],
        ])
    )
  }

  const invalidated = useMemo(
    () => invalid || (errortext && isNotEmptyString(errortext) ? true : false),
    [invalid, errortext]
  )
  const validated = useMemo(
    () => valid || (successtext && isNotEmptyString(successtext) ? true : false),
    [valid, successtext]
  )

  useEffect(() => {
    setSelectedValue(value)
  }, [value])

  useEffect(() => {
    setHasError(error)
  }, [error])

  useEffect(() => {
    setIsLoading(loading)
  }, [loading])

  useEffect(() => {
    setIsInvalid(invalidated)
  }, [invalidated])

  useEffect(() => {
    setIsValid(validated)
  }, [validated])

  const handleChange = (value: string | null) => {
    const stringValue = value || ""
    setSelectedValue(stringValue)

    if (stringValue) {
      setIsOpen(false)
    }

    onChange && onChange(stringValue)
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event?.target?.value)
    onInputChange && onInputChange(event)
  }

  const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    setFocus(true)

    if (!isOpen) {
      setIsOpen(true)
    }
    // TODO: TypeError: Converting circular structure to JSON
    onFocus && onFocus(event)
  }

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    setFocus(false)
    setIsOpen(false)
    // TODO: TypeError: Converting circular structure to JSON
    onBlur && onBlur(event)
  }

  const portalContainerRef = usePortalRef()

  const filteredChildren =
    query === ""
      ? Children.toArray(children)
      : Children.toArray(children).filter((child) => {
          if (isValidElement<ComboBoxOptionProps>(child)) {
            // ensure that we filter on the value that is displayed to the user. Apply the same logic as when rendering
            // the options, i.e. match children if present, if not match label, lastly if neither label nor children exist, then check value
            const optionDisplayValue = child.props.children?.toString() || child.props.label || child.props.value
            return optionDisplayValue?.toLowerCase().includes(query.toLowerCase())
          } else {
            return false
          }
        })

  const displayValue = (val: ReactNode) => {
    // Helper function to safely convert values to string
    const safeToString = (value: any): string => {
      if (value === null || value === undefined) {
        return ""
      }

      if (typeof value === "object") {
        // For React elements or complex objects, use a more descriptive string
        return String(value) !== "[object Object]" ? String(value) : ""
      }

      return String(value)
    }

    const option = optionValuesAndLabels.get(val)

    return (option?.children && safeToString(option.children)) || option?.label || valueLabel || safeToString(val) || ""
  }

  return (
    <ComboBoxContext.Provider
      value={{
        selectedValue: selectedValue,
        truncateOptions: truncateOptions,
        addOptionValueAndLabel: addOptionValueAndLabel,
      }}
    >
      <div
        className={`
          juno-combobox-wrapper
          jn:relative
          ${width == "auto" ? "jn:inline-block" : "jn:block"}
          ${width == "auto" ? "jn:w-auto" : "jn:w-full"}
          ${wrapperClassName}
        `}
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
                  className={`
                juno-combobox-input-wrapper
                ${inputWrapperStyles}
                ${disabled ? "jn:cursor-not-allowed" : ""}
              `}
                >
                  {label && isNotEmptyString(label) && !isLoading && !hasError ? (
                    <Label
                      text={label}
                      disabled={disabled}
                      required={required}
                      htmlFor={theId}
                      className={`${labelStyles}`}
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
                    displayValue={(val) => displayValue(val)} // Headless-UI expects a callback here
                    className={`
                  juno-combobox-input 
                  ${inputStyles} 
                  ${label && isNotEmptyString(label) ? withLabelInputStyles : noLabelInputStyles}
                  ${disabled ? disabledInputStyles : ""}
                  ${isInvalid ? "juno-combobox-invalid " + invalidStyles : ""} 
                  ${isValid ? "juno-combobox-valid " + validStyles : ""}  
                  ${isValid || isInvalid ? "" : defaultBorderStyles} 
                  ${isLoading ? "juno-combobox-loading jn:cursor-not-allowed" : ""}
                  ${hasError ? "juno-combobox-error jn:cursor-not-allowed" : ""}
                  ${className}
                `}
                  />

                  {isLoading || hasError ? (
                    <span className={`${centeredIconStyles}`}>
                      {isLoading ? (
                        <Spinner className={"jn:cursor-not-allowed"} />
                      ) : (
                        <Icon icon="errorOutline" color="jn:text-theme-error" className={"jn:cursor-not-allowed"} />
                      )}
                    </span>
                  ) : isValid || isInvalid ? (
                    <span
                      className={`
                        juno-combobox-icon-container 
                        ${iconContainerStyles} 
                        ${disabled ? "jn:opacity-50" : ""}
                      `}
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
                      className={`
                        juno-combobox-toggle 
                        ${buttonStyles}
                        ${disabled ? disabledButtonStyles : ""}
                        ${isInvalid ? "juno-combobox-toggle-invalid " + invalidButtonStyles : ""} 
                        ${isValid ? "juno-combobox-toggle-valid " + validButtonStyles : ""}  
                        ${isValid || isInvalid ? "" : defaultButtonStyles} 
                      `}
                    >
                      <Icon icon={isOpen ? "expandLess" : "expandMore"} />
                    </ComboboxButton>
                  ) : null}
                </div>
                {isOpen &&
                  createPortal(
                    <div
                      ref={refs.setFloating}
                      className={`juno-combobox-options ${menuStyles}`}
                      style={{
                        position: strategy,
                        top: y ?? 0,
                        left: x ?? 0,
                      }}
                      {...getFloatingProps()}
                    >
                      <ComboboxOptions static className="jn:w-full">
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
    </ComboBoxContext.Provider>
  )
}

export type ComboBoxWidth = "full" | "auto"
export interface ComboBoxProps extends Omit<HTMLAttributes<HTMLElement>, "onChange" | "onInput" | "children"> {
  /** ARIA label for accessibility. Defaults to label if provided. */
  ariaLabel?: string

  /** Children to render, typically using `ComboBox.Option`. */
  children?: ReactNode

  /**
   * Additional class names for styling.
   * @default ""
   */
  className?: string

  /** Default value for ComboBox, applicable in uncontrolled mode. */
  defaultValue?: string

  /**
   * Indicates if ComboBox is disabled.
   * @default false
   */
  disabled?: boolean

  /**
   * Indicates internal ComboBox error. Use `invalid` for validation failures.
   * @default false
   */
  error?: boolean

  /** Text displayed for validation errors or internal issues. */
  errortext?: ReactNode

  /** Additional context or instructions displayed below the ComboBox. */
  helptext?: ReactNode

  /** ID for ComboBox. If unspecified, auto-generated. */
  id?: string

  /**
   * Identifies invalid ComboBox state.
   * @default false
   */
  invalid?: boolean

  /** ComboBox label text. */
  label?: string

  /**
   * Loading state for asynchronous actions.
   * @default false
   */
  loading?: boolean

  /** Name attribute when used within a form. */
  name?: string

  /** Handler for when the ComboBox loses focus. */
  onBlur?: FocusEventHandler<HTMLInputElement>

  /** Handler for changes in the ComboBox selection. */
  onChange?: (_value: string) => void

  /** Handler for when the ComboBox input gains focus. */
  onFocus?: FocusEventHandler<HTMLInputElement>

  /** Handler for changes in the ComboBox's text input value. */
  onInputChange?: ChangeEventHandler<HTMLInputElement>

  /** Placeholder text for ComboBox input.
   * @default "Select…"
   */
  placeholder?: string

  /**
   * Flags the ComboBox as a required field.
   * @default false
   */
  required?: boolean

  /** Text shown upon successful validation of the ComboBox. */
  successtext?: ReactNode

  /**
   * Controls option text truncation in the dropdown.
   * @default false
   */
  truncateOptions?: boolean

  /**
   * Specifies successful validation state.
   * @default false
   */
  valid?: boolean

  /** Controlled value for ComboBox in managed state. */
  value?: string

  /** Label corresponding to the selected or default value for display. */
  valueLabel?: string

  /**
   * Width determination for input: "full" or "auto".
   * @default "full"
   */
  width?: ComboBoxWidth

  /** Custom styling classes for the ComboBox's wrapper.
   * @default ""
   */
  wrapperClassName?: string
}
