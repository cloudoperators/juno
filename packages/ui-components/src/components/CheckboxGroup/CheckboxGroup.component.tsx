/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo, createContext, useId } from "react"
import { Label } from "../LabelTs/index"
import { Icon } from "../IconTs/index"
import { FormHint } from "../FormHintTs/index"

const checkboxgroupstyles = `
  jn-mb-4
  jn-last:mb-0
`

const groupstyles = `
  jn-relative
  jn-rounded
  jn-border
  jn-py-1
`

const defaultgroupstyles = `
  jn-border-transparent
`

const validgroupstyles = `
  jn-border-theme-success
  jn-px-2
`

const invalidgroupstyles = `
  jn-border-theme-error
  jn-px-2
`

const iconstyles = `
  jn-absolute
  jn-right-2
  jn-top-1.5
`

type EventUpdateHandler = (_value: string | undefined) => void

export interface CheckboxGroupContextProps {
  selectedOptions?: CheckboxValue[]
  handleCheckboxChange?: EventUpdateHandler
  name?: string
  updateSelectedValue?: EventUpdateHandler
  disabled?: boolean
}

export const CheckboxGroupContext = createContext<CheckboxGroupContextProps | undefined>(undefined)

export type CheckboxValue = string | undefined

export const CheckboxGroup = ({
  children = null,
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
}: CheckboxGroupProps) => {
  // Utility
  const isNotEmptyString = (str: React.ReactNode | string) => {
    return !(typeof str === "string" && str.trim().length === 0)
  }

  const uniqueId = () => "juno-checkboxgroup-" + useId()

  // Create unique identifiers for use with name and id of the group:
  const groupName = name || uniqueId()
  const groupId = id || uniqueId()

  // Init state variables:
  const [selectedOptions, setSelectedOptions] = useState<CheckboxValue[] | undefined>(selected)
  const [isValid, setIsValid] = useState(false)
  const [isInvalid, setIsInvalid] = useState(false)

  const validated = useMemo(() => valid || (successtext && successtext.length ? true : false), [valid, successtext])
  const invalidated = useMemo(() => invalid || (errortext && errortext.length ? true : false), [invalid, errortext])

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
  const handleCheckboxChange = (value: CheckboxValue) => {
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
  const updateSelectedValue = (value: CheckboxValue) => {
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
          {isInvalid ? <Icon icon="dangerous" color="jn-text-theme-error" className={`${iconstyles}`} /> : ""}
          {isValid ? <Icon icon="checkCircle" color="jn-text-theme-success" className={`${iconstyles}`} /> : ""}

          {children}
        </div>
        {errortext && isNotEmptyString(errortext) ? <FormHint text={errortext} variant="error" /> : ""}
        {successtext && isNotEmptyString(successtext) ? <FormHint text={successtext} variant="success" /> : ""}
        {helptext && isNotEmptyString(helptext) ? <FormHint text={helptext} /> : ""}
      </div>
    </CheckboxGroupContext.Provider>
  )
}

export interface CheckboxGroupProps {
  /** The Checkbox children of the CheckboxGroup */
  children?: React.ReactNode
  /** Pass a custom className */
  className?: string
  /** Whether all Checkboxes in the group are disabled */
  disabled?: boolean
  /** Text to display in case validation failed or there is an error. Will set the whole group to invalid when passed. */
  errortext?: string
  /** A text to render to further explain meaning and significance of the group */
  helptext?: string
  /** The id of the group. If not passed, a unique id will be created and used for the group as a whole. */
  id?: string
  invalid?: boolean
  /** The label of the whole group. */
  label?: string
  /** The name of all checkboxes in the group. If not passed, a unique name identifier will be created and used for the group as a whole. */
  name?: string
  /** An onChange handler to execute when the selection of options changes */
  onChange?: EventUpdateHandler
  /** Whether a selection in the group is required */
  required?: boolean
  /** Array of values of individual selected options in the group */
  selected?: string[]
  /** Text to display in case validation is successful. When passed, will set the whole group to valid. */
  successtext?: string
  /** Whether the CheckboxGroup was successfully validated */
  valid?: boolean
}
