/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo, createContext, useId, ReactNode, HTMLAttributes } from "react"
import { Label } from "../Label/index"
import { Icon } from "../Icon/index"
import { FormHint } from "../FormHint/index"

const checkboxgroupstyles = `
  jn:mb-4
  jn:last:mb-0
`

const groupstyles = `
  jn:relative
  jn:rounded
  jn:border
  jn:py-1
`

const defaultgroupstyles = `
  jn:border-transparent
`

const validgroupstyles = `
  jn:border-theme-success
  jn:px-2
`

const invalidgroupstyles = `
  jn:border-theme-error
  jn:px-2
`

const iconstyles = `
  jn:absolute
  jn:right-2
  jn:top-1.5
`

// eslint-disable-next-line no-unused-vars
type EventUpdateHandler = (value: string) => void

export interface CheckboxGroupContextProps {
  selectedOptions?: string[]
  handleCheckboxChange?: EventUpdateHandler
  name?: string
  updateSelectedValue?: EventUpdateHandler
  disabled?: boolean
}

export const CheckboxGroupContext = createContext<CheckboxGroupContextProps | undefined>(undefined)

/**
 * The `CheckboxGroup` component provides a context-managed grouping of checkbox elements.
 * It manages the collective state for checkboxes, allowing for individual or batch validation
 * and selection. It supports states such as disabled, valid, and invalid, and offers customization
 * for error and success messages. It also furnishes a grouped label and help text for a unified UI.
 */
export const CheckboxGroup = ({
  children,
  className = "",
  disabled = false,
  errortext = "",
  helptext = "",
  id = "",
  invalid = false,
  label,
  name = "",
  onChange,
  required = false,
  selected,
  successtext = "",
  valid = false,
  ...props
}: CheckboxGroupProps): ReactNode => {
  // Utility
  const isNotEmptyString = (str: ReactNode) => {
    return !(typeof str === "string" && str.trim().length === 0)
  }

  const uniqueId = () => "juno-checkboxgroup-" + useId()

  // Create unique identifiers for use with name and id of the group:
  const groupName = name || uniqueId()
  const groupId = id || uniqueId()

  // Init state variables:
  const [selectedOptions, setSelectedOptions] = useState<string[] | undefined>(selected)
  const [isValid, setIsValid] = useState(false)
  const [isInvalid, setIsInvalid] = useState(false)

  const validated = useMemo(
    () => valid || (successtext && isNotEmptyString(successtext) ? true : false),
    [valid, successtext]
  )
  const invalidated = useMemo(
    () => invalid || (errortext && isNotEmptyString(errortext) ? true : false),
    [invalid, errortext]
  )

  useEffect(() => {
    if (selected) {
      setSelectedOptions(selected)
    }
  }, [selected])

  useEffect(() => {
    setIsValid(validated)
  }, [validated])

  useEffect(() => {
    setIsInvalid(invalidated)
  }, [invalidated])

  // Callback function to be passed via context to individual checkboxes:
  const handleCheckboxChange = (value: string) => {
    const changedValue = value
    if (selectedOptions && selectedOptions.includes(value)) {
      setSelectedOptions(
        selectedOptions.filter((value) => {
          return value !== changedValue
        })
      )
    } else if (selectedOptions && !selectedOptions.includes(value)) {
      setSelectedOptions((selectedOptions) => [...(selectedOptions || []), changedValue])
    } else {
      setSelectedOptions([changedValue])
    }
    onChange && onChange(value)
  }

  // Callback function to be passed via the context to child Checkboxes so they can add their value to the groups' selectedOptions array in case selected has not been set on the parent (otherwise the parent select will trump whatever is set on the child in a group context). Called ONLY ONCE during initialization of the child Checkbox when we DON't want to execute any additional onChange handlers just yet:
  const updateSelectedValue = (value: string) => {
    if (!selected) {
      setSelectedOptions((selectedOptions) => [...(selectedOptions || []), value])
    }
  }

  return (
    <CheckboxGroupContext.Provider
      value={{
        selectedOptions: selectedOptions,
        name: groupName,
        disabled: disabled,
        handleCheckboxChange: handleCheckboxChange,
        updateSelectedValue: updateSelectedValue,
      }}
    >
      <div
        className={`
          juno-checkboxgroup 
          ${isValid ? "juno-checkboxgroup-valid" : ""} 
          ${isInvalid ? "juno-checkboxgroup-invalid" : ""} 
          ${checkboxgroupstyles} 
          ${className}
        `}
        id={groupId}
        role="group"
        {...props}
      >
        {label && isNotEmptyString(label) ? (
          <Label text={label} htmlFor={groupId} disabled={disabled} required={required} />
        ) : (
          ""
        )}
        <div
          className={`
            juno-checkbox-group-options 
            ${groupstyles} 
            ${isValid ? validgroupstyles : ""} 
            ${isInvalid ? invalidgroupstyles : ""} 
            ${isValid || isInvalid ? "" : defaultgroupstyles}
          `}
        >
          {isInvalid ? <Icon icon="dangerous" color="jn:text-theme-error" className={`${iconstyles}`} /> : ""}
          {isValid ? <Icon icon="checkCircle" color="jn:text-theme-success" className={`${iconstyles}`} /> : ""}

          {children}
        </div>
        {errortext && isNotEmptyString(errortext) ? <FormHint text={errortext} variant="error" /> : ""}
        {successtext && isNotEmptyString(successtext) ? <FormHint text={successtext} variant="success" /> : ""}
        {helptext && isNotEmptyString(helptext) ? <FormHint text={helptext} /> : ""}
      </div>
    </CheckboxGroupContext.Provider>
  )
}

export interface CheckboxGroupProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  /** The Checkbox children of the CheckboxGroup. */
  children?: ReactNode

  /**
   * Custom class names for styling the CheckboxGroup.
   * @default ""
   */
  className?: string

  /**
   * Disables all checkboxes in the group.
   * @default false
   */
  disabled?: boolean

  /** Text displayed if validation fails or there is an error. Indicates group invalidity when set. */
  errortext?: ReactNode

  /** Additional text explaining the significance of this group. */
  helptext?: ReactNode

  /** The group's ID. Automatically generated if not provided. */
  id?: string

  /**
   * Indicates if the CheckboxGroup is marked as invalid.
   * @default false
   */
  invalid?: boolean

  /** The label text for the CheckboxGroup. */
  label?: string

  /**
   * Name for all checkboxes in the group. Generated if not supplied.
   * @default A unique identifier
   */
  name?: string

  /** Event handler triggered when any checkbox selection changes. */
  onChange?: EventUpdateHandler

  /**
   * Specifies if a selection is required in this group.
   * @default false
   */
  required?: boolean

  /** Array of values representing the initially selected checkboxes in the group. */
  selected?: string[]

  /** Text displayed upon successful validation, which marks the group as valid. */
  successtext?: ReactNode

  /**
   * Specifies if the CheckboxGroup has been successfully validated.
   * @default false
   */
  valid?: boolean
}
