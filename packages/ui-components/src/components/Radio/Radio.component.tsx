/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo, useId, useContext, MouseEventHandler } from "react"
import { RadioGroupContext, RadioGroupContextProps } from "../RadioGroup/RadioGroup.component"
import { Label } from "../../components-transition/Label/index"
import { Icon } from "../../components-transition/Icon/Icon.component"
import { FormHint } from "../../components-transition/FormHint/FormHint.component"

const wrapperStyles = `
  jn-inline-flex
  jn-items-center
`

const inputstyles = `
  jn-w-4
  jn-h-4
  jn-opacity-0
  jn-z-50
`

const mockradiostyles = `
  jn-relative
  jn-w-4
  jn-h-4
  jn-rounded-full
  jn-bg-theme-radio
`

const checkedstyles = `
  jn-absolute
  jn-block
  jn-bg-theme-radio-checked
  jn-rounded-full
  jn-w-3
  jn-h-3
  jn-top-[1px]
  jn-left-[1px]
`

const mockfocusradiostyles = `
  jn-outline-none
  jn-ring-2
  jn-ring-theme-focus
`

const mockdisabledradiostyles = `
  jn-opacity-50
  jn-cursor-not-allowed
`

const noBorderStyles = `
  jn-border
  jn-border-transparent
`

const errorstyles = `
  jn-border
  jn-border-theme-error
`

const successstyles = `
  jn-border
  jn-border-theme-success
`

const labelStyles = `
  jn-leading-0
  jn-ml-2
`

const iconStyles = `
  jn-ml-1
`

const hintStyles = `
  jn-mt-0
  jn-ml-6
`

type EventUpdateHandler = (_value: string | undefined) => void

/** A controlled Radio component. */
export const Radio = ({
  checked = false,
  className = "",
  disabled = false,
  errortext = "",
  helptext = "",
  id = undefined,
  invalid = false,
  label = undefined,
  name = undefined,
  onChange = undefined,
  onClick = undefined,
  required = false,
  successtext = "",
  valid = false,
  value = undefined,
  ...props
}: RadioProps) => {
  // Utility
  const isNotEmptyString = (str: React.ReactNode | string) => {
    return !(typeof str === "string" && str.trim().length === 0)
  }

  const uniqueId = () => "juno-radio-" + useId()

  // Consume and deconstruct the context so we won't get errors but 'undefined' when trying to access a group context in case there is none:
  const radioGroupContext = useContext<RadioGroupContextProps>(RadioGroupContext)
  const {
    selectedValue: groupSelectedValue,
    onChange: groupOnChange,
    name: groupName,
    updateSelectedValue: updateGroupSelectedValue,
    disabled: groupDisabled,
  }: RadioGroupContextProps = radioGroupContext || {}

  // Lazily init state depending on parent selected value (if parent context exists), or the Radio's own checked prop:
  const initialChecked = () => {
    if (radioGroupContext) {
      if (groupSelectedValue === value) {
        return true
      } else {
        return false
      }
    } else {
      return checked ? true : false
    }
  }
  const [isChecked, setIsChecked] = useState(() => initialChecked())

  // Initialise all other state variables:
  const [hasFocus, setHasFocus] = useState(false)
  const [isInvalid, setIsInvalid] = useState(false)
  const [isValid, setIsValid] = useState(false)

  // Validate / Invalidate the Radio based on the respective props:
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

  // Update the parent selected state ONCE upon initialisation when 1.) we are in a group context, 2.) there is no selected value set on the parent, but 3.) we have a Radio that is set to 'selected'
  useEffect(() => {
    if (checked && radioGroupContext && groupSelectedValue === undefined) {
      updateGroupSelectedValue && updateGroupSelectedValue(value)
    }
  }, [])

  // Update the Radio's own state variable when checked prop changes:
  useEffect(() => {
    if (!groupSelectedValue) {
      setIsChecked(checked)
    }
  }, [checked])

  const handleChange = () => {
    // Update the Radio's state:
    setIsChecked(!isChecked)
    // Update parent state ONLY if parent context exists and ONLY if the Radio is checked but not reflected in the parent’s selectedValue:
    if (groupOnChange && typeof groupOnChange === "function") {
      if (groupSelectedValue !== value) {
        groupOnChange(value)
      }
    }
    // Run any other user-provided change handlers:
    onChange && onChange(value)
  }

  const determineChecked = () => {
    // If we are in a group context, determine whether this Radio's value is identical to the selectedValue  in the context, otherwise use its internal isChecked state:
    if (groupSelectedValue) {
      return groupSelectedValue === value
    } else {
      return isChecked
    }
  }

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    onClick && onClick(event)
  }

  const handleFocus = () => {
    setHasFocus(true)
  }

  const handleBlur = () => {
    setHasFocus(false)
  }

  const theId = id || uniqueId()

  return (
    <div className={`jn-radio-outer`}>
      <div className={`juno-radio-wrapper ${wrapperStyles}`}>
        <div
          className={`
             juno-radio 
             ${mockradiostyles} 
             ${hasFocus ? mockfocusradiostyles : ""} 
             ${disabled ? mockdisabledradiostyles : ""} 
             ${isInvalid ? errorstyles : ""} 
             ${isValid ? successstyles : ""} 
             ${isInvalid || isValid ? "" : noBorderStyles}
             ${className}
           `}
          {...props}
        >
          <input
            checked={determineChecked()}
            className={`
              ${inputstyles} 
              ${isInvalid ? "juno-radio-invalid" : ""} 
              ${isValid ? "juno-radio-valid" : ""}
            `}
            disabled={groupDisabled || disabled}
            id={theId}
            onBlur={handleBlur}
            onChange={handleChange}
            onClick={handleClick}
            onFocus={handleFocus}
            name={groupName || name}
            type="radio"
            value={value}
          />
          {determineChecked() ? <span className={`${checkedstyles}`}></span> : ""}
        </div>
        {label && isNotEmptyString(label) ? (
          <>
            <Label
              className={`${labelStyles}`}
              disabled={groupDisabled || disabled}
              htmlFor={theId}
              required={required}
              text={label}
            />
            {isInvalid ? (
              <Icon
                icon="dangerous"
                color="jn-text-theme-error"
                size="1.125rem"
                className={`
                    ${iconStyles}
                    ${disabled ? "jn-opacity-50" : ""}
                  `}
              />
            ) : (
              ""
            )}
            {isValid ? (
              <Icon
                icon="checkCircle"
                color="jn-text-theme-success"
                size="1.125rem"
                className={`
                    ${iconStyles}
                    ${disabled ? "jn-opacity-50" : ""}
                  `}
              />
            ) : (
              ""
            )}
          </>
        ) : (
          ""
        )}
      </div>
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

export interface RadioProps {
  /** Whether the Radio is checked */
  checked?: boolean
  /** Pass a custom className */
  className?: string
  /** Whether the Radio is disabled */
  disabled?: boolean
  /** A text to render when the Radio has an error or could not be validated */
  errortext?: React.ReactNode | string
  /** A helptext to render to explain meaning and significance of the Radio */
  helptext?: React.ReactNode | string
  /** The id of the Radio. An id will be automatically generated if not passed. */
  id?: string
  /** Whether the Radio was validated unsuccessfully */
  invalid?: boolean
  /** The label of the Radio */
  label?: string
  /** The name attribute of the Radio. Only Radios sharing the same name attribute will work together as expected. */
  name?: string
  /** Handler to execute when the Radio changes */
  onChange?: EventUpdateHandler
  /** Handler to execute when the Radio is clicked */
  onClick?: MouseEventHandler<HTMLElement>
  /** Whether the Radio is required */
  required?: boolean
  /** A text to render when the Radio was successfully validated */
  successtext?: React.ReactNode | string
  /** Whether the Radio was successfully validated */
  valid?: boolean
  /** The value of the Radio */
  value?: string
}
