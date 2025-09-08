/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo, useId, ReactNode } from "react"

import { Label } from "../Label/Label.component"
import { Icon } from "../Icon/Icon.component"
import { FormHint } from "../FormHint/FormHint.component"

const switchBaseStyles = `
    jn:rounded-full
    jn:relative
    jn:p-0
    jn:leading-0
    jn:border
    jn:g-theme-default
    jn:focus:outline-hidden
    jn:focus:ring-2
    jn:focus:ring-theme-focus
    jn:disabled:opacity-50
    jn:disabled:cursor-not-allowed
`

const borderBaseStyles = `
    jn:border-theme-switch-default
`

const switchWrapperStyles = `
    jn:flex
    jn:flex-row
    jn:items-center
`

const handleBaseStyles = `
    jn:inline-block
    jn:absolute
    jn:top-[1px]
    jn:rounded-full
    jn:bg-theme-switch-handle
    jn:border-theme-default
`

const handleOnStyles = `
    jn:right-[1px] 
    jn:bg-theme-switch-handle-checked
`

const handleOffStyles = `
    jn:left-[1px]
`

const validBaseStyles = `
    jn:border-theme-success
`

const invalidBaseStyles = `
    jn:border-theme-error
`

const iconBaseStyles = `
    jn:inline-block 
    jn:ml-1 
    jn:leading-1
    jn:mt-[-.2rem]
`

const hintBaseStyles = `
    jn:mt-0
`

type SwitchSize = "small" | "default" | "large"

export interface SwitchProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "ref"> {
  /**
   * HTML name attribute for the switch button
   */
  name?: string
  /**
   * HTML id attribute for the switch button
   */
  id?: string
  /**
   * Label to display next to the Switch component
   */
  label?: string
  /**
   * Indicates if the Switch is required
   */
  required?: boolean
  /**
   * Specifies the size of the Switch component
   */
  size?: SwitchSize
  /**
   * Sets the initial checked state of the Switch component for use in uncontrolled mode
   */
  on?: boolean
  /**
   * Disabled state of the Switch component
   */
  disabled?: boolean
  /**
   * Indicates if the Switch has an error state
   */
  invalid?: boolean
  /**
   * Indicates if the Switch has been validated successfully
   */
  valid?: boolean
  /**
   * Help text to provide additional information about the Switch
   */
  helptext?: ReactNode
  /**
   * Text to display when the Switch has validation errors
   */
  errortext?: ReactNode
  /**
   * Text to display when the Switch has been validated successfully
   */
  successtext?: ReactNode
  /**
   * Custom class name to apply to the internal button element
   */
  className?: string
  /**
   * Callback function to handle changes to the switch state
   */
  // eslint-disable-next-line no-unused-vars
  onChange?: (event: React.ChangeEvent<HTMLButtonElement>) => void
  /**
   * Callback function to handle click events on the switch
   */
  // eslint-disable-next-line no-unused-vars
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  /**
   * Custom class name to apply to the wrapper element
   * Useful for styling and positioning the outermost element of the component
   */
  wrapperClassName?: string
}

const isNotEmptyString = (str: unknown): str is string => {
  return typeof str === "string" && str.trim().length > 0
}

const getSwitchSizeStyles = (size: SwitchSize): string => {
  switch (size) {
    case "small":
      return "jn:w-[1.75rem] jn:h-4"
    case "large":
      return "jn:w-[3.125rem] jn:h-[1.6875rem]"
    default:
      return "jn:w-switch-default jn:h-switch-default"
  }
}

const getHandleSizeStyles = (size: SwitchSize): string => {
  switch (size) {
    case "small":
      return "jn:w-[0.75rem] jn:h-[0.75rem]"
    case "large":
      return "jn:w-[1.4375rem] jn:h-[1.4375rem]"
    default:
      return "jn:w-switch-handle-default jn:h-switch-handle-default"
  }
}

const renderValidationIcon = (isInvalid: boolean, isValid: boolean, disabled: boolean): ReactNode => {
  const size = "1.125rem"
  const className = `${iconBaseStyles} ${disabled ? "jn:opacity-50" : ""}`

  // NOTE: isValid and isInvalid are purposely seperate states
  if (isInvalid) {
    return <Icon icon="dangerous" color="jn:text-theme-error" size={size} className={className} />
  }

  if (isValid) {
    return <Icon icon="checkCircle" color="jn:text-theme-success" size={size} className={className} />
  }

  return null
}

const renderFormHint = (errortext: ReactNode, successtext: ReactNode, helptext: ReactNode): ReactNode => {
  if (isNotEmptyString(errortext)) return <FormHint text={errortext} variant="error" className={hintBaseStyles} />

  if (isNotEmptyString(successtext)) return <FormHint text={successtext} variant="success" className={hintBaseStyles} />

  if (isNotEmptyString(helptext)) return <FormHint text={helptext} className={hintBaseStyles} />

  return null
}

/**
 * A basic switch component for toggling between two options.
 * Use this component for interactions that produce immediate results.
 * For form scenarios requiring submission, use checkboxes instead.
 */
export const Switch: React.FC<SwitchProps> = ({
  name = "",
  id = "",
  label,
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
  onChange,
  onClick,
  wrapperClassName = "",
  ...props
}) => {
  const generateUniqueId = (): string => "juno-switch-" + useId()

  const [isOn, setIsOn] = useState<boolean>(on)
  const [isInvalid, setIsInvalid] = useState<boolean>(false)
  const [isValid, setIsValid] = useState<boolean>(false)

  useEffect(() => {
    setIsOn(on)
  }, [on])

  const isComponentInvalid: boolean = useMemo(
    () => invalid || (isNotEmptyString(errortext) ? true : false),
    [invalid, errortext]
  )

  const isComponentValid: boolean = useMemo(
    () => valid || (isNotEmptyString(successtext) ? true : false),
    [valid, successtext]
  )

  useEffect(() => {
    setIsInvalid(isComponentInvalid)
  }, [isComponentInvalid])

  useEffect(() => {
    setIsValid(isComponentValid)
  }, [isComponentValid])

  const handleSwitchClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setIsOn(!isOn)
    if (onClick) onClick(event)
    if (onChange) onChange(event as unknown as React.ChangeEvent<HTMLButtonElement>)
  }

  const generatedId: string = id || generateUniqueId()

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
          id={generatedId}
          aria-checked={isOn}
          disabled={disabled}
          onClick={handleSwitchClick}
          className={`
            juno-switch 
            juno-switch-${size} 
            ${switchBaseStyles} 
            ${getSwitchSizeStyles(size)} 
            ${isInvalid ? "juno-switch-invalid " + invalidBaseStyles : ""} 
            ${isValid ? "juno-switch-valid " + validBaseStyles : ""} 
            ${isValid || isInvalid ? "" : borderBaseStyles} 
            ${className}`}
          data-row-stop-propagation
          {...props}
        >
          <span
            className={`juno-switch-handle ${handleBaseStyles} ${getHandleSizeStyles(size)} ${
              isOn ? handleOnStyles : handleOffStyles
            }`}
          ></span>
        </button>

        <Label
          text={label}
          htmlFor={generatedId}
          className="jn:ml-2"
          disabled={disabled}
          required={required}
          data-row-stop-propagation
        />

        {renderValidationIcon(isInvalid, isValid, disabled)}
      </span>
      {renderFormHint(errortext, successtext, helptext)}
    </div>
  )
}
