/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo, useContext, useId, ReactNode } from "react"
import { CheckboxGroupContext } from "../CheckboxGroup/CheckboxGroup.component"
import { Label } from "../Label/index"
import { Icon } from "../Icon/index"
import { FormHint } from "../FormHint/index"

const wrapperStyles = `
  jn:inline-flex
  jn:items-center
`

const inputstyles = (disabled: boolean): string => {
  return `
    jn:w-4
    jn:h-4
    jn:opacity-0
    jn:z-50
    ${disabled ? "jn:cursor-not-allowed" : "jn:cursor-pointer"}
  `
}

const mockcheckboxstyles = `
  jn:relative
  jn:w-4
  jn:h-4
  jn:rounded-sm
  jn:bg-theme-checkbox
  jn:cursor-pointer
  jn:focus:outline-hidden
  jn:focus:ring-2
  jn:focus:ring-theme-focus
`

const mockfocusstyles = `
  jn:ring-2
  jn:ring-theme-focus
`

const mockcheckmarkstyles = `
  jn:absolute
  jn:top-0
  jn:left-0
  jn:text-theme-checkbox-checked
  jn:fill-current
`

const mockindeterminatestyles = `
  jn:absolute
  jn:w-2
  jn:h-0.5
  jn:top-1.5
  jn:left-[.2rem]
  jn:inline-block
  jn:bg-theme-focus
`

const mockdisabledstyles = `
  jn:pointer-events-none
  jn:opacity-50
  jn:cursor-not-allowed
`

const noBorderStyles = `
  jn:border
  jn:border-transparent
`

const errorstyles = `
  jn:border
  jn:border-theme-error
`

const successstyles = `
  jn:border
  jn:border-theme-success
`

const labelStyles = `
  jn:leading-0
  jn:ml-2
`

const iconStyles = `
  jn:ml-1
`

const hintStyles = `
  jn:mt-0
  jn:ml-6
`

/**
 * The `Checkbox` component is a versatile form element that allows users to
 * select one or multiple options. It can display states such as checked,
 * indeterminate, invalid, and valid, and integrates with a checkbox group context
 * for collective state management. This component supports labels, icons,
 * error/success indicators, and custom event handlers.
 *
 * @component
 * @param {boolean} [checked=false] Specifies if the Checkbox is checked.
 * @param {string} [className] Custom CSS classes for styling the Checkbox.
 * @param {boolean} [disabled=false] Specifies if the Checkbox is disabled.
 * @param {ReactNode} [errortext] Text displayed when there is an error or validation issue.
 * @param {ReactNode} [helptext] Additional text to explain the purpose and importance of the Checkbox.
 * @param {string} [id] The Checkbox's ID. Automatically generated if not provided.
 * @param {boolean} [indeterminate=false] Specifies if the Checkbox is in an indeterminate state.
 * @param {boolean} [invalid=false] Indicates if the Checkbox has failed validation.
 * @param {string} [label] The label text for the Checkbox.
 * @param {string} [name] The name attribute of the Checkbox.
 * @param {function} [onChange] Event handler for when the Checkbox value changes.
 * @param {function} [onClick] Event handler for when the Checkbox is clicked.
 * @param {boolean} [required=false] Sets if the Checkbox is a required field.
 * @param {ReactNode} [successtext] Text displayed when the Checkbox passes validation.
 * @param {boolean} [valid=false] Indicates if the Checkbox has successfully passed validation.
 * @param {string} [value] The value attribute of the Checkbox.
 * @returns {React.ReactElement} A standard Checkbox component with custom behavior and styling.
 */
export const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  className = "",
  disabled = false,
  errortext = "",
  helptext = "",
  id = "",
  indeterminate = false,
  invalid = false,
  label,
  name = "",
  onChange,
  onClick,
  required = false,
  successtext = "",
  valid = false,
  value = "",
  ...props
}) => {
  // Utility
  const isNotEmptyString = (str: ReactNode) => {
    return !(typeof str === "string" && str.trim().length === 0)
  }

  const uniqueId = () => "juno-checkbox-" + useId()

  // Consume and deconstruct the context so we won't get errors but 'undefined' when trying to access a group context property in case there is none:
  const checkboxGroupContext = useContext(CheckboxGroupContext)
  const {
    selectedOptions: groupSelectedOptions,
    name: groupName,
    disabled: groupDisabled,
    handleCheckboxChange: groupHandleCheckboxChange,
    updateSelectedValue: updateGroupSelectedValue,
  } = checkboxGroupContext || {}

  // Lazily initialise the Checkbox:
  const initialChecked = () => {
    if (checkboxGroupContext) {
      if (groupSelectedOptions && groupSelectedOptions.includes(value)) {
        return true
      } else {
        return false
      }
    } else {
      return checked ? true : false
    }
  }

  const [isChecked, setIsChecked] = useState(initialChecked())
  const [isIndeterminate, setIsIndeterminate] = useState(false)
  const [hasFocus, setHasFocus] = useState(false)
  const [isInvalid, setIsInvalid] = useState(false)
  const [isValid, setIsValid] = useState(false)

  // Run once to update the parent state to respect and reflect the checked prop if we are in a group context, but parent has no selected options set via its prop:
  useEffect(() => {
    if (checked && checkboxGroupContext) {
      updateGroupSelectedValue && updateGroupSelectedValue(value)
    }
  }, [])

  useEffect(() => {
    if (!checkboxGroupContext) {
      setIsChecked(checked)
    }
  }, [checked])

  const invalidated = useMemo(
    () => invalid || (errortext && isNotEmptyString(errortext) ? true : false),
    [invalid, errortext]
  )
  const validated = useMemo(
    () => valid || (successtext && isNotEmptyString(successtext) ? true : false),
    [valid, successtext]
  )

  useEffect(() => {
    setIsIndeterminate(indeterminate)
  }, [indeterminate])

  useEffect(() => {
    setIsInvalid(invalidated)
  }, [invalidated])

  useEffect(() => {
    setIsValid(validated)
  }, [validated])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(!isChecked)
    // If we are in a context, update :
    if (groupHandleCheckboxChange && typeof groupHandleCheckboxChange === "function") {
      groupHandleCheckboxChange(value)
    }

    onChange && onChange(event)
  }

  const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
    onClick && onClick(event)
  }

  const handleFocus = () => {
    setHasFocus(true)
  }

  const handleBlur = () => {
    setHasFocus(false)
  }

  const determineChecked = () => {
    if (checkboxGroupContext) {
      return groupSelectedOptions && groupSelectedOptions.includes(value) ? true : false
    } else {
      return isChecked
    }
  }

  const theId = id || uniqueId()

  return (
    <div className="jn-checkbox-outer">
      <div className={`jn-checkbox-wrapper ${wrapperStyles}`}>
        <div
          className={`
            juno-checkbox 
            ${mockcheckboxstyles} 
            ${hasFocus ? mockfocusstyles : ""} 
            ${groupDisabled || disabled ? mockdisabledstyles : ""} 
            ${isInvalid ? errorstyles : ""} 
            ${isValid ? successstyles : ""} 
            ${isInvalid || isValid ? "" : noBorderStyles}
            ${className}
          `}
          {...props}
        >
          {determineChecked() ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`${mockcheckmarkstyles}`}
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <polygon points="5.75 11.15 2.6 8 1.55 9.05 5.75 13.25 14.75 4.25 13.7 3.2" />
            </svg>
          ) : (
            ""
          )}
          <input
            checked={determineChecked()}
            className={`
              ${inputstyles(groupDisabled || disabled)} 
              ${isInvalid ? "juno-checkbox-invalid" : ""} 
              ${isValid ? "juno-checkbox-valid" : ""} 
            `}
            disabled={groupDisabled || disabled}
            id={theId}
            name={groupName || name}
            onBlur={handleBlur}
            onChange={handleChange}
            onClick={handleClick}
            onFocus={handleFocus}
            type="checkbox"
            value={value}
          />
          {isIndeterminate && !determineChecked() ? <div className={`${mockindeterminatestyles}`}></div> : ""}
        </div>
        {label && isNotEmptyString(label) ? (
          <>
            <Label
              text={label}
              htmlFor={theId}
              disabled={groupDisabled || disabled}
              required={required}
              className={`${labelStyles}`}
            />
            {isInvalid ? (
              <Icon
                icon="dangerous"
                color="jn:text-theme-error"
                size="1.125rem"
                className={`
                  ${iconStyles}
                  ${groupDisabled || disabled ? "jn:opacity-50" : ""}
                `}
              />
            ) : (
              ""
            )}
            {isValid ? (
              <Icon
                icon="checkCircle"
                color="jn:text-theme-success"
                size="1.125rem"
                className={`
                  ${iconStyles}
                  ${disabled ? "jn:opacity-50" : ""}
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

export interface CheckboxProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Specifies if the Checkbox is checked.
   * @default false
   */
  checked?: boolean

  /**
   * Custom CSS class for styling the Checkbox.
   * @default ""
   */
  className?: string

  /**
   * Specifies if the Checkbox is disabled.
   * @default false
   */
  disabled?: boolean

  /**
   * Text to display when the Checkbox has an error.
   */
  errortext?: ReactNode

  /**
   * Help text explaining the significance of the Checkbox.
   */
  helptext?: ReactNode

  /**
   * The ID of the Checkbox. Auto-generated if not provided.
   */
  id?: string

  /**
   * Specifies if the Checkbox is in an indeterminate state; used for mixed states.
   * @default false
   */
  indeterminate?: boolean

  /**
   * Indicates whether the Checkbox validation failed.
   * @default false
   */
  invalid?: boolean

  /**
   * The label text for the Checkbox.
   */
  label?: string

  /**
   * The name attribute of the Checkbox.
   */
  name?: string

  /**
   * Event handler for change events on the Checkbox.
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement>

  /**
   * Event handler for click events on the Checkbox.
   */
  onClick?: React.MouseEventHandler<HTMLInputElement>

  /**
   * Specifies if the Checkbox is required for form validation.
   * @default false
   */
  required?: boolean

  /**
   * Text to display when the Checkbox passes validation.
   */
  successtext?: ReactNode

  /**
   * Indicates whether the Checkbox validation succeeded.
   * @default false
   */
  valid?: boolean

  /**
   * The value attribute of the Checkbox.
   */
  value?: string
}
