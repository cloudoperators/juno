/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useEffect, useId, useMemo, useState } from "react"
import PropTypes from "prop-types"
import { Listbox } from "@headlessui/react"
import { Label } from "../../deprecated_js/Label/Label.component"
import { Icon } from "../../deprecated_js/Icon/Icon.component"
import { Spinner } from "../Spinner/Spinner.component"
import { FormHint } from "../../deprecated_js/FormHint/FormHint.component"
import { Float } from "@headlessui-float/react"
import { autoPlacement, offset, shift, size } from "@floating-ui/react-dom"
import { usePortalRef } from "../PortalProvider/index"
import { createPortal } from "react-dom"
import "./select.scss"

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

export const SelectContext = createContext()

/** 
  A Select component that can be configured to allow selecting a single item or multiple items.
  Pass a `defaultValue` to render as an uncontrolled component that tracks its open state etc internally.
*/
export const Select = ({
  ariaLabel = "",
  children = null,
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
  const isNotEmptyString = (str) => {
    return !(typeof str === "string" && str.trim().length === 0)
  }

  const uniqueId = () => "juno-select-" + useId()

  const theId = id || uniqueId()
  const helptextId = "juno-select-helptext-" + useId()

  const [optionValuesAndLabels, setOptionValuesAndLabels] = useState(new Map())
  const [hasError, setHasError] = useState(false)
  const [isInvalid, setIsInvalid] = useState(false)
  const [isValid, setIsValid] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // This callback is for all SelectOptions to send us their value, label and children so we can save them in a map
  // We need this because the Select component wants to display the selected value, label or children in the toggle button
  // but from the eventHandler we only get the value, not the label or children
  const addOptionValueAndLabel = (value, label, children) => {
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
    () => invalid || (errortext && isNotEmptyString(errortext) ? true : false),
    [invalid, errortext]
  )
  const validated = useMemo(
    () => valid || (successtext && isNotEmptyString(successtext) ? true : false),
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

  const handleChange = (value) => {
    onChange && onChange(value || "")
    onValueChange && onValueChange(value || "")
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
      boundary: "viewport",
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
  const getMultipleDisplayValues = (values) => {
    const getChildrenOrLabel = (key) => {
      const element = optionValuesAndLabels.get(key)
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
          {label && isNotEmptyString(label) ? (
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
                    ${label && isNotEmptyString(label) ? "jn-pt-[0.4rem]" : ""}
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
                {({ open, value }) =>
                  !hasError && !isLoading ? (
                    <>
                      <span className={`${truncateStyles}`}>
                        {multiple
                          ? getMultipleDisplayValues(value) || valueLabel || value.join(", ") || placeholder
                          : optionValuesAndLabels.get(value)?.displayName || valueLabel || value || placeholder}
                      </span>
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

        {errortext && isNotEmptyString(errortext) ? <FormHint text={errortext} variant="error" /> : ""}
        {successtext && isNotEmptyString(successtext) ? <FormHint text={successtext} variant="success" /> : ""}
        {helptext && isNotEmptyString(helptext) ? <FormHint text={helptext} id={helptextId} /> : ""}
      </div>
    </SelectContext.Provider>
  )
}

// Validator function to make sure the proptype of value is set accordingly when we use single or multi select
const valuePropType = (props) => {
  const { multiple, value } = props

  // only validate if value is not undefined to avoid throwing an error when not necessary:
  if (value) {
    if (multiple && !Array.isArray(value)) {
      return new Error("Invalid prop value supplied to Select component: Pass an array when using as a multi-select.")
    }
    if (!multiple && typeof value !== "string") {
      return new Error("Invalid prop value supplied to Select component: Pass a string when using as single select.")
    }
  }
}

Select.propTypes = {
  /** Pass an aria-label to the Select toggle button */
  ariaLabel: PropTypes.string,
  /** The children to render as options. Use the SelectOption component, and SelectDivider if needed. */
  children: PropTypes.node,
  /** Pass a custom className to the internal Select toggle button */
  className: PropTypes.string,
  /** Pass a defaultValue to use as an uncontrolled component that handles its state internally. When setting `multiple` on the Select pass an Array instead of a string.  */
  defaultValue: PropTypes.string,
  /** Whether the Select is disabled */
  disabled: PropTypes.bool,
  /** Whether the Select has an error, e.g. when loading options. When validated negatively, use `invalid` instead. */
  error: PropTypes.bool,
  /** A small message rendered in red text below the Select toggle. */
  errortext: PropTypes.node,
  /** A small, neutral text rendered below the Select toggle to explain meaning and significance of the Select element */
  helptext: PropTypes.node,
  /** Pass an id to the Select toggle */
  id: PropTypes.string,
  /** Whether the Select has been validated unsuccessfully / negatively */
  invalid: PropTypes.bool,
  /** Pass a label to render in the Select toggle button */
  label: PropTypes.string,
  /** Whether the Select is busy loading options. Will show a Spinner in the Select toggle. */
  loading: PropTypes.bool,
  /** Whether multiple options of the Select can be selected. When passing true, pass an array containing one or multiple options as `value` / `defaultValue` respectively. */
  multiple: PropTypes.bool,
  /** Pass a name attribute to the Select to be transmitted when used in a form. */
  name: PropTypes.string,
  /** Handler to be executed when the selected value changes */
  onChange: PropTypes.func,
  /** LEGACY: Handler to be executed when the Select value changes. Here for backwards compatibility with apps based on older versions of Select. Use onChange instead. */
  onValueChange: PropTypes.func,
  /** A placeholder to render when no value has been selected. Default is "Select…". */
  placeholder: PropTypes.string,
  /** Whether a selection is required. Will show a small required marker next to the label. If no label is used, no marker will be visible. */
  required: PropTypes.bool,
  /** A note to render below the Select toggle in case the selected value has been positively validated. Will set the visible state of the Select toggle to `valid`. */
  successtext: PropTypes.node,
  /** Whether long texts in options will be truncated with "…" or not. Default is false. The Select toggle label will always be truncated. */
  truncateOptions: PropTypes.bool,
  /** Whether the Select was positively validated. Will show a green checkmark icon inside the Select toggle. */
  valid: PropTypes.bool,
  /** The currently (pre-)selected value of the Select. Will trigger controlled mode. When setting `multiple` on the Select pass an Array instead of a string. */
  value: valuePropType,
  /** The label of the passed value or defaultValue. If you want to use controlled mode or pass as defaultValue in uncontrolled mode and additionally use labels for
   *  human-readable SelectOptions you need to also pass the matching label for the passed value/defaultValue so that the Select component can render itself properly. */
  valueLabel: PropTypes.string,
  /** The semantic variant of the Select toggle button.*/
  variant: PropTypes.oneOf(["default", "primary", "primary-danger", "subdued"]),
  /** Whether the Select toggle should consume the available width of its parent container (default), or render its "natural" width depending on the content and the currently selected value or state. */
  width: PropTypes.oneOf(["full", "auto"]),
  /** Pass a custom classname to the wrapping element. This can be useful if you must add styling to the outermost wrapping element of this component, e.g. for positioning. */
  wrapperClassName: PropTypes.string,
}
