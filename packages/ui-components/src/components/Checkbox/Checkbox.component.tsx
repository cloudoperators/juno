/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, {
  useState,
  useEffect,
  useMemo,
  useContext,
  useId,
  ReactNode,
  ChangeEvent,
  MouseEvent,
  InputHTMLAttributes,
  ChangeEventHandler,
  MouseEventHandler,
} from "react"
import { CheckboxGroupContext } from "../CheckboxGroup/CheckboxGroup.component"
import { Label } from "../Label/index"
import { Icon } from "../Icon/index"
import { FormHint } from "../FormHint/index"

// inline-flex to sit the mock checkbox and label side by side; items-center vertically centers them.
const wrapperStyles = `
  jn:inline-flex
  jn:items-center
`

const inputstyles = (disabled: boolean): string => {
  // absolute + -inset-px: overlays the native input exactly over the mock checkbox (full 16x16 area).
  // inset-0 would only fill the padding box (14x14 when a 1px border is present); -inset-px
  // extends by 1px on each side to reach the border edge, matching the full visual size.
  // opacity-0 hides it visually; z-50 keeps it on top so clicks always hit the real input.
  return `
    jn:absolute
    jn:-inset-px
    jn:opacity-0
    jn:z-50
    ${disabled ? "jn:cursor-not-allowed" : "jn:cursor-pointer"}
  `
}

// relative establishes the positioning context for the absolutely placed native input,
// checkmark SVG, and indeterminate bar. Explicit w-4 h-4 locks the mock to exactly 16x16.
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

// absolute positions the SVG over the mock; top-0 left-0 anchors it to the mock's top-left corner.
const mockcheckmarkstyles = `
  jn:absolute
  jn:top-0
  jn:left-0
  jn:text-theme-checkbox-checked
  jn:fill-current
`

// absolute positions the bar within the mock. top-1.5 / left-[.2rem] centres it visually.
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

// No leading override here: the label must retain its natural line-height so that the
// required marker (a small absolutely-offset dot rendered inside Label) positions correctly.
const labelStyles = `
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
 * @see https://cloudoperators.github.io/juno/?path=/docs/forms-checkbox-checkbox--docs
 * @see {@link CheckboxProps}
 */
export const Checkbox = ({
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
  wrapperClassName = "",
  ...props
}: CheckboxProps): ReactNode => {
  const isNotEmptyString = (str: ReactNode) => {
    return !(typeof str === "string" && str.trim().length === 0)
  }

  const generatedId = "juno-checkbox-" + useId()

  // Consume and deconstruct the context so we won't get errors but 'undefined' when trying to access a group context property in case there is none:
  const checkboxGroupContext = useContext(CheckboxGroupContext)
  const {
    selectedOptions: groupSelectedOptions,
    name: groupName,
    disabled: groupDisabled,
    handleCheckboxChange: groupHandleCheckboxChange,
    updateSelectedValue: updateGroupSelectedValue,
  } = checkboxGroupContext || {}

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

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(!isChecked)
    // If we are in a context, update :
    if (groupHandleCheckboxChange && typeof groupHandleCheckboxChange === "function") {
      groupHandleCheckboxChange(value)
    }

    onChange && onChange(event)
  }

  const handleClick = (event: MouseEvent<HTMLInputElement>) => {
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

  const theId = id || generatedId

  // leading-0 on the outer div collapses its line box to zero, preventing inherited
  // line-height from the parent context from adding implicit height around the inline-flex
  // wrapper inside. Without this, the checkbox can appear shifted upward in flex containers
  // (e.g. items-center rows in a DataGrid).
  return (
    <div className="jn-checkbox-outer jn:leading-0">
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
            ${wrapperClassName}
          `}
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
              ${className}
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
            {...props}
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

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "value"> {
  /**
   * Specifies if the Checkbox is checked.
   * @default false
   */
  checked?: boolean

  /**
   * Custom CSS class forwarded to the native checkbox input.
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
  onChange?: ChangeEventHandler<HTMLInputElement>

  /**
   * Event handler for click events on the Checkbox.
   */
  onClick?: MouseEventHandler<HTMLInputElement>

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

  /**
   * Custom CSS class for styling the outer wrapper element.
   * @default ""
   */
  wrapperClassName?: string
}
