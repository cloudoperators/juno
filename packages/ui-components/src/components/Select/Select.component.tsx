/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useEffect, useId, useMemo, useState } from "react"
import { Listbox } from "@headlessui/react"
import { Label } from "../Label"
import { Icon } from "../Icon"
import { Spinner } from "../Spinner"
import { FormHint } from "../FormHint"
import { Float } from "@headlessui-float/react"
import { autoPlacement, offset, shift, size } from "@floating-ui/react-dom"
import { usePortalRef } from "../PortalProvider"
import { createPortal } from "react-dom"
import "./select.scss"
import { Boundary } from "@floating-ui/react"

const labelStyles = `
  jn-no-wrap
  jn-pointer-events-none
  jn-top-2
  jn-left-4
`

const toggleStyles = `
  jn-appearance-none
  jn-h-[2.375rem]
  jn-inline-flex
  jn-items-center
  jn-px-4
  jn-rounded-3px
  jn-select-none
  jn-text-base
  focus:jn-outline-none
  focus:jn-ring-2
  focus:jn-ring-theme-focus
`
const validToggleStyles = `
  jn-border
  jn-border-theme-success
`

const invalidToggleStyles = `
  jn-border
  jn-border-theme-error
`

const centeredIconStyles = `
  jn-absolute
  jn-top-1/2
  jn-left-1/2
  jn-translate-y-[-50%]
  jn-translate-x-[-0.75rem]
`

const menuStyles = `
  jn-rounded
  jn-bg-theme-background-lvl-1
  jn-w-full
  jn-overflow-y-auto
`

const truncateStyles = `
  jn-block
  jn-h-6
  jn-overflow-hidden
  jn-text-ellipsis
  jn-whitespace-nowrap
`

export type SelectContextProps = {
  truncateOptions: boolean
  // eslint-disable-next-line no-unused-vars
  addOptionValueAndLabel: (value: unknown, label: unknown, children: unknown) => void
}
export const SelectContext = createContext<SelectContextProps | undefined>(undefined)

export interface SelectProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "value" | "defaultValue" | "onChange"> {
  /** Pass an aria-label to the Select toggle button */
  ariaLabel?: string
  /** The children to render as options. Use the SelectOption component, and SelectDivider if needed. */
  children?: React.ReactNode
  /** Pass a custom className to the internal Select toggle button */
  className?: string
  /** Pass a defaultValue to use as an uncontrolled component that handles its state internally. When setting `multiple` on the Select pass an Array instead of a string.  */
  defaultValue?: string | string[]
  /** Whether the Select is disabled */
  disabled?: boolean
  /** Whether the Select has an error, e.g. when loading options. When validated negatively, use `invalid` instead. */
  error?: boolean
  /** A small message rendered in red text below the Select toggle. */
  errortext?: React.ReactNode
  /** A small, neutral text rendered below the Select toggle to explain meaning and significance of the Select element */
  helptext?: React.ReactNode
  /** Pass an id to the Select toggle */
  id?: string
  /** Whether the Select has been validated unsuccessfully / negatively */
  invalid?: boolean
  /** Pass a label to render in the Select toggle button */
  label?: string
  /** Whether the Select is busy loading options. Will show a Spinner in the Select toggle. */
  loading?: boolean
  /** Whether multiple options of the Select can be selected. When passing true, pass an array containing one or multiple options as `value` / `defaultValue` respectively. */
  multiple?: boolean
  /** Pass a name attribute to the Select to be transmitted when used in a form. */
  name?: string
  /** Handler to be executed when the selected value changes */
  // eslint-disable-next-line no-unused-vars
  onChange?: (value?: string | number | string[]) => void
  /** Handle for openning of select */
  open?: boolean
  /** LEGACY: Handler to be executed when the Select value changes. Here for backwards compatibility with apps based on older versions of Select. Use onChange instead. */
  // eslint-disable-next-line no-unused-vars
  onValueChange?: (value?: string | number | string[]) => void
  /** A placeholder to render when no value has been selected. Default is "Select…". */
  placeholder?: string
  /** Whether a selection is required. Will show a small required marker next to the label. If no label is used, no marker will be visible. */
  required?: boolean
  /** A note to render below the Select toggle in case the selected value has been positively validated. Will set the visible state of the Select toggle to `valid`. */
  successtext?: React.ReactNode
  /** Whether long texts in options will be truncated with "…" or not. Default is false. The Select toggle label will always be truncated. */
  truncateOptions?: boolean
  /** Whether the Select was positively validated. Will show a green checkmark icon inside the Select toggle. */
  valid?: boolean
  /** The currently (pre-)selected value of the Select. Will trigger controlled mode. When setting `multiple` on the Select pass an Array instead of a string. */
  value?: string | number | string[]
  /** The label of the passed value or defaultValue. If you want to use controlled mode or pass as defaultValue in uncontrolled mode and additionally use labels for
   *  human-readable SelectOptions you need to also pass the matching label for the passed value/defaultValue so that the Select component can render itself properly. */
  valueLabel?: string
  /** The semantic variant of the Select toggle button.*/
  variant?: "default" | "primary" | "primary-danger" | "subdued"
  /** Whether the Select toggle should consume the available width of its parent container (default), or render its "natural" width depending on the content and the currently selected value or state. */
  width?: "full" | "auto"
  /** Pass a custom classname to the wrapping element. This can be useful if you must add styling to the outermost wrapping element of this component, e.g. for positioning. */
  wrapperClassName?: string
}

/** 
  A Select component that can be configured to allow selecting a single item or multiple items.
  Pass a `defaultValue` to render as an uncontrolled component that tracks its open state etc internally.
*/
export const Select: React.FC<SelectProps> = ({
  ariaLabel = "",
  children,
  className = "",
  defaultValue,
  disabled = false,
  error = false,
  errortext = "",
  helptext = "",
  id = "",
  invalid = false,
  label,
  loading = false,
  multiple = false,
  name,
  onChange,
  onValueChange,
  placeholder = "Select…",
  required = false,
  successtext = "",
  truncateOptions = false,
  valid = false,
  value,
  valueLabel,
  variant = "default",
  width = "full",
  wrapperClassName = "",
  ...props
}) => {
  const isValueNotEmpty = (
    value:
      | string
      | number
      | boolean
      | React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>>
      | Iterable<React.ReactNode>
  ): boolean => {
    return !(typeof value === "string" && value.trim().length === 0)
  }

  const uniqueId = () => "juno-select-" + useId()

  const theId = id || uniqueId()
  const helptextId = "juno-select-helptext-" + useId()

  const [optionValuesAndLabels, setOptionValuesAndLabels] = useState(new Map<unknown, unknown>())
  const [hasError, setHasError] = useState(false)
  const [isInvalid, setIsInvalid] = useState(false)
  const [isValid, setIsValid] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // This callback is for all SelectOptions to send us their value, label and children so we can save them in a map
  // We need this because the Select component wants to display the selected value, label or children in the toggle button
  // but from the eventHandler we only get the value, not the label or children
  const addOptionValueAndLabel = (value: unknown, label: unknown, children: unknown) => {
    // append new entry to optionValuesAndLabels map containing the passed value, label and children
    // use callback syntax of setState function here since we want to merge the old state with the new entry
    setOptionValuesAndLabels((oldMap) =>
      new Map(oldMap).set(value || children, {
        val: value,
        label: label,
        children: children,
        displayName: children || label || value,
      })
    )
  }

  const invalidated = useMemo(
    () => invalid || (errortext && isValueNotEmpty(errortext) ? true : false),
    [invalid, errortext]
  )
  const validated = useMemo(
    () => valid || (successtext && isValueNotEmpty(successtext) ? true : false),
    [valid, successtext]
  )

  useEffect(() => {
    setHasError(error)
  }, [error])

  useEffect(() => {
    setIsInvalid(invalidated)
  }, [invalidated])

  useEffect(() => {
    setIsValid(validated)
  }, [validated])

  useEffect(() => {
    setIsLoading(loading)
  }, [loading])

  const handleChange = (value: string | number | string[]) => {
    onChange && onChange(value)
    onValueChange && onValueChange(value)
  }

  const portalContainerRef = usePortalRef()

  // Headless-UI-Float Middleware
  // In order to quickly debug middleware state, each parameter function can be passed the state to work with, e.g.
  // autoPlacement((state) => console.log(state), ({crossAxis: true, [params…]}))
  const middleware = [
    offset(4),
    autoPlacement({
      crossAxis: true,
      allowedPlacements: ["bottom", "top"],
    }),
    size({
      boundary: "viewport" as Boundary,
      apply({ availableWidth, availableHeight, elements }) {
        Object.assign(elements.floating.style, {
          maxWidth: `${availableWidth}px`,
          maxHeight: `${availableHeight}px`,
          overflowY: "auto",
        })
      },
    }),
    shift(),
  ]

  // This function is used to determine what to render for the selected options in the Select Toggle in multi-select case.
  // For each of the values, we get the respective element from the optionValuesAndLabels map, get the corresponding label or children, and filter these for empty elements to make sure we do not include any empty strings in the returned array.
  const getMultipleDisplayValues = (values: unknown[]) => {
    const getChildrenOrLabel = (key: unknown) => {
      const element = optionValuesAndLabels.get(key) as { displayName: string }
      if (element) {
        return element.displayName?.length ? element.displayName : null
      }
    }
    const valuesToDisplay = values
      .map((key) => getChildrenOrLabel(key))
      .filter((value) => value && value.toString().trim().length > 0)
    return valuesToDisplay.join(", ")
  }

  return (
    <SelectContext.Provider
      value={{
        truncateOptions: truncateOptions,
        addOptionValueAndLabel: addOptionValueAndLabel,
      }}
    >
      <div
        className={`
          juno-select-wrapper 
          jn-relative
          ${width == "auto" ? "jn-inline-block" : "jn-block"}
          ${width == "auto" ? "jn-w-auto" : "jn-w-full"}
          ${wrapperClassName}
        `}
      >
        <Listbox
          disabled={disabled || isLoading || hasError}
          multiple={multiple}
          name={name}
          onChange={handleChange}
          value={value}
          defaultValue={defaultValue}
        >
          {label && isValueNotEmpty(label) ? (
            <Listbox.Label
              as={Label}
              htmlFor={theId}
              text={label}
              className={`${labelStyles}`}
              disabled={disabled || isLoading || hasError}
              required={required}
              floating
              minimized
            />
          ) : (
            ""
          )}

          <Float composable adaptiveWidth middleware={middleware}>
            <Float.Reference>
              <Listbox.Button
                aria-describedby={helptext ? helptextId : ""}
                aria-label={ariaLabel || label}
                as="button"
                id={theId}
                className={`
                    juno-select-toggle
                    ${variant && variant.length ? "juno-select-toggle-" + variant : "juno-select-toggle-default"}
                    ${width == "auto" ? "jn-w-auto" : "jn-w-full"}
                    ${toggleStyles}
                    ${label && isValueNotEmpty(label) ? "jn-pt-[0.4rem]" : ""}
                    ${disabled ? "juno-select-disabled jn-opacity-50 jn-cursor-not-allowed" : ""}
                    ${isLoading || hasError ? "jn-justify-center" : "jn-justify-between"}
                    ${isInvalid ? "juno-select-invalid " + invalidToggleStyles : ""} 
                    ${isValid ? "juno-select-valid " + validToggleStyles : ""}  
                    
                    ${isLoading ? "juno-select-loading jn-cursor-not-allowed" : ""}
                    ${hasError ? "juno-select-error jn-cursor-not-allowed" : ""}
                    ${className}
                  `}
                {...props}
              >
                {({ open, value }: { open: boolean; value: string[] }): React.JSX.Element =>
                  !hasError && !isLoading ? (
                    <>
                      <span className={`${truncateStyles}`}>{getDisplayValue(value)}</span>
                      <span className="jn-flex">
                        {isValid ? <Icon icon="checkCircle" color="jn-text-theme-success" /> : ""}
                        {isInvalid ? <Icon icon="dangerous" color="jn-text-theme-error" /> : ""}
                        <span>
                          <Icon icon={open ? "expandLess" : "expandMore"} />
                        </span>
                      </span>
                    </>
                  ) : (
                    <span className={`${centeredIconStyles}`}>
                      {hasError ? (
                        <Icon icon="errorOutline" color="jn-text-theme-error" className={"jn-cursor-not-allowed"} />
                      ) : isLoading ? (
                        <Spinner className={"jn-cursor-not-allowed"} />
                      ) : (
                        ""
                      )}
                    </span>
                  )
                }
              </Listbox.Button>
            </Float.Reference>

            {createPortal(
              <Float.Content>
                <Listbox.Options
                  unmount={false}
                  className={`
                        juno-select-menu
                        ${menuStyles}
                      `}
                >
                  {children}
                </Listbox.Options>
              </Float.Content>,

              portalContainerRef ? portalContainerRef : document.body
            )}
          </Float>
        </Listbox>

        {errortext && isValueNotEmpty(errortext) ? <FormHint text={errortext} variant="error" /> : ""}
        {successtext && isValueNotEmpty(successtext) ? <FormHint text={successtext} variant="success" /> : ""}
        {helptext && isValueNotEmpty(helptext) ? <FormHint text={helptext} id={helptextId} /> : ""}
      </div>
    </SelectContext.Provider>
  )

  function getDisplayValue(value: string[]): React.ReactNode {
    if (multiple) {
      return getMultipleDisplayValues(value) || valueLabel || value.join(", ") || placeholder
    } else {
      const selectedOption = optionValuesAndLabels.get(value) as { displayName?: string }
      if (selectedOption) {
        return selectedOption.displayName || valueLabel || value || placeholder
      } else {
        return valueLabel || value || placeholder
      }
    }
  }
}
