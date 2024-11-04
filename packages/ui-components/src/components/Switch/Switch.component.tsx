/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo, useId } from "react"

import { Label } from "../Label/Label.component"
import { Icon } from "../Icon/Icon.component"
import { FormHint } from "../FormHint/FormHint.component"

// Styles for the switch wrapper
const switchWrapperStyles = `
    jn-flex
    jn-flex-row
    jn-items-center
`

// Base styles for the switch
const switchbasestyles = `
    jn-rounded-full
    jn-relative
    jn-p-0
    jn-leading-0
    jn-border
    jn-g-theme-default
    focus:jn-outline-none
    focus:jn-ring-2
    focus:jn-ring-theme-focus
    disabled:jn-opacity-50
    disabled:jn-cursor-not-allowed
`

// Function to get switch size styles
const switchsizestyles = (size: "small" | "default" | "large") => {
  switch (size) {
    case "small":
      return "jn-w-[1.75rem] jn-h-4"
    case "large":
      return "jn-w-[3.125rem] jn-h-[1.6875rem]"
    default:
      return "jn-w-switch-default jn-h-switch-default"
  }
}

// Base styles for the switch handle
const handlebasestyles = `
    jn-inline-block
    jn-absolute
    jn-top-[1px]
    jn-rounded-full
    jn-bg-theme-switch-handle
    jn-border-theme-default
`

// Function to get switch handle size styles
const handlesizestyles = (size: "small" | "default" | "large") => {
  switch (size) {
    case "small":
      return "jn-w-[0.75rem] jn-h-[0.75rem]"
    case "large":
      return "jn-w-[1.4375rem] jn-h-[1.4375rem]"
    default:
      return "jn-w-switch-handle-default jn-h-switch-handle-default"
  }
}

// Default border styles
const defaultborderstyles = `
    jn-border-theme-switch-default
`

// Styles for invalid switch state
const invalidbasestyles = `
    jn-border-theme-error
`

// Styles for valid switch state
const validbasestyles = `
    jn-border-theme-success
`

// Styles for when switch is on
const handleonstyles = `
    jn-right-[1px] 
    jn-bg-theme-switch-handle-checked
`

// Styles for when switch is off
const handleoffstyles = `
    jn-left-[1px]
`

// Styles for the icon
const iconstyles = `
    jn-inline-block 
    jn-ml-1 
    jn-leading-1
    jn-mt-[-.2rem]
`

// Styles for form hints
const hintStyles = `
    jn-mt-0
`

export interface SwitchProps extends Omit<React.ComponentPropsWithoutRef<"button">, "ref"> {
  /** Name attribute */
  name?: string
  /** Id */
  id?: string
  /** Add a label to the Switch */
  label?: string
  /** Whether the Switch is required */
  required?: boolean
  /** Leave empty for default size */
  size?: "small" | "default" | "large"
  /** Pass checked state for initial rendering. */
  on?: boolean
  /** Disabled switch */
  disabled?: boolean
  /** Whether the Switch is invalid */
  invalid?: boolean
  /** Whether the Switch is valid */
  valid?: boolean
  /** A helptext to render to explain meaning and significance of the Switch */
  helptext?: React.ReactNode
  /** A text to render when the Switch was successfully validated */
  errortext?: React.ReactNode
  /** A text to render when the Switch has an error or could not be validated */
  successtext?: React.ReactNode
  /** Pass a className. The class name is applied to the internal button element. */
  className?: string
  /** Pass a change handler */
  onChange?: (event: React.ChangeEvent<HTMLButtonElement>) => void
  /** Pass a click handler */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  /** Pass a custom className to the wrapping element. This can be useful if you must add styling to the outermost wrapping element of this component, e.g. for positioning. */
  wrapperClassName?: string
}

/** A Switch/Toggle component */
export const Switch: React.FC<SwitchProps> = ({
  name = "",
  id = "",
  label = undefined,
  required = false,
  size = "default",
  on = false,
  disabled = false,
  invalid = false,
  valid = false,
  helptext = "",
  errortext = "",
  successtext = "",
  className = "",
  onChange = undefined,
  onClick = undefined,
  wrapperClassName = "",
  ...props
}: SwitchProps) => {
  const isNotEmptyString = (str: unknown): boolean => {
    return !(typeof str === "string" && str.trim().length === 0)
  }

  const uniqueId = (): string => "juno-switch-" + useId()

  const [isOn, setIsOn] = useState(on)
  const [isInvalid, setIsInvalid] = useState(false)
  const [isValid, setIsValid] = useState(false)

  useEffect(() => {
    setIsOn(on)
  }, [on])

  const invalidated = useMemo(
    () => invalid || (errortext && isNotEmptyString(errortext) ? true : false),
    [invalid, errortext]
  )
  const validated = useMemo(
    () => valid || (successtext && isNotEmptyString(successtext) ? true : false),
    [valid, successtext]
  )

  useEffect(() => {
    setIsInvalid(invalidated)
  }, [invalidated])

  useEffect(() => {
    setIsValid(validated)
  }, [validated])

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsOn(!isOn)
    onClick && onClick(event)
    onChange && onChange(event as unknown as React.ChangeEvent<HTMLButtonElement>)
  }

  const theId = id || uniqueId()

  return (
    <div>
      <span
        className={`
                juno-switch-wrapper 
                ${switchWrapperStyles}
        ${wrapperClassName}
                `}
      >
        <button
          type="button"
          role="switch"
          name={name}
          id={theId}
          aria-checked={isOn}
          disabled={disabled}
          onClick={handleClick}
          className={`
                        juno-switch 
                        juno-switch-${size} 
                        ${switchbasestyles} 
                        ${switchsizestyles(size)} 
                        ${isInvalid ? "juno-switch-invalid " + invalidbasestyles : ""} 
                        ${isValid ? "juno-switch-valid " + validbasestyles : ""} 
                        ${isValid || isInvalid ? "" : defaultborderstyles} 
                        ${className}`}
          {...props}
        >
          <span
            className={`juno-switch-handle ${handlebasestyles} ${handlesizestyles(size)} ${
              isOn ? handleonstyles : handleoffstyles
            }`}
          ></span>
        </button>

        <Label text={label} htmlFor={theId} className="jn-ml-2" disabled={disabled} required={required} />

        {isInvalid ? (
          <Icon
            icon="dangerous"
            color="jn-text-theme-error"
            size="1.125rem"
            className={`${iconstyles} ${disabled ? "jn-opacity-50" : ""}`}
          />
        ) : (
          ""
        )}

        {isValid ? (
          <Icon
            icon="checkCircle"
            color="jn-text-theme-success"
            size="1.125rem"
            className={`${iconstyles} ${disabled ? "jn-opacity-50" : ""}`}
          />
        ) : (
          ""
        )}
      </span>
      {errortext && isNotEmptyString(errortext) ? (
        <FormHint text={errortext} variant="error" className={`${hintStyles}`} />
      ) : (
        ""
      )}
      {successtext && isNotEmptyString(successtext) ? (
        <FormHint text={successtext} variant="success" className={`${hintStyles}`} />
      ) : (
        ""
      )}
      {helptext && isNotEmptyString(helptext) ? <FormHint text={helptext} className={`${hintStyles}`} /> : ""}
    </div>
  )
}
