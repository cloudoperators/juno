/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo, useId, createContext } from "react"
import { Label } from "../LabelTs/index"
import { Icon } from "../IconTs/index"
import { FormHint } from "../FormHintTs/index"

const radiogroupstyles = `
	jn-mb-4
	last:jn-mb-0
`

// const radiogrouplabelstyles = `
// 	jn-inline-block
// 	jn-mb-1
// `

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

// commented out to get rid of lint errors

// const errortextstyles = `
// 	jn-text-xs
// 	jn-text-theme-error
// 	jn-mb-2
// `

// const successtextstyles = `
// 	jn-text-xs
// 	jn-text-theme-success
// 	jn-mb-2
// `

const iconstyles = `
	jn-absolute
	jn-right-2
	jn-top-1.5
`

type EventUpdateHandler = (_value: string | undefined) => void

export interface RadioGroupContextProps {
  selectedValue?: string
  onChange?: EventUpdateHandler
  name?: string
  updateSelectedValue?: EventUpdateHandler
  disabled?: boolean
}

export const RadioGroupContext = createContext<RadioGroupContextProps>({})

/**
A component to wrap and group individual Radio components: All contained child Radio elements will share the same `name`-attribute passed as a prop to the group, and thus make the Radios work with each other as expected.
*/
export const RadioGroup = ({
  children = null,
  className = "",
  disabled = false,
  errortext = "",
  helptext = "",
  id = "",
  invalid = false,
  label = "",
  name,
  onChange,
  required = false,
  selected,
  successtext = "",
  valid = false,
  ...props
}: RadioGroupProps) => {
  // Utility
  const isNotEmptyString = (str: React.ReactNode | string) => {
    return !(typeof str === "string" && str.trim().length === 0)
  }

  const uniqueId = () => "juno-radiogroup-" + useId()

  // Create unique identifiers for use with name and id of the group:
  const groupName = name || uniqueId()
  const groupId = id || uniqueId()

  const [selectedValue, setSelectedValue] = useState<string | undefined>(selected)
  const [isValid, setIsValid] = useState<boolean>(false)
  const [isInvalid, setIsInvalid] = useState<boolean>(false)

  // Validate / Invalidate the RadioGroup based on the respective props:
  const validated = useMemo(() => valid || (successtext && successtext.length ? true : false), [valid, successtext])
  const invalidated = useMemo(() => invalid || (errortext && errortext.length ? true : false), [invalid, errortext])

  useEffect(() => {
    setIsValid(validated)
  }, [validated])

  useEffect(() => {
    setIsInvalid(invalidated)
  }, [invalidated])

  // Update selectedValue when selected prop changes:
  useEffect(() => {
    if (selected) {
      setSelectedValue(selected)
    }
  }, [selected])

  // Callback function to be passed via the group context to child Radios so they can set the value on the parent if necessary (only used ONCE during initialisation when we don't want to trigger onChange handlers yet):
  const updateSelectedValue = (value: string | undefined) => {
    setSelectedValue(value)
  }

  // Handler to be passed to child Radios to execute when they change
  const handleRadioChange = (value: string | undefined) => {
    setSelectedValue(value)
    onChange && onChange(value)
  }

  return (
    // span a context to provide the selected value from the group state, the name, and the parent group methods to update the parent state, etc.:
    <RadioGroupContext.Provider
      value={{
        selectedValue: selectedValue,
        name: groupName,
        onChange: handleRadioChange,
        updateSelectedValue: updateSelectedValue,
        disabled: disabled,
      }}
    >
      <div
        className={`
          juno-radiogroup 
          ${radiogroupstyles} 
          ${isValid ? "juno-radiogroup-valid" : ""} 
          ${isInvalid ? "juno-radiogroup-invalid" : ""} 
          ${className}
        `}
        id={groupId}
        role="radiogroup"
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
    </RadioGroupContext.Provider>
  )
}

export interface RadioGroupProps {
  /** The children of the RadioGroup. Typically, these will be `Radio` components. */
  children?: React.ReactNode
  /** Pass a custom className */
  className?: string
  /** Whether all Radios in the group are disabled */
  disabled?: boolean
  /** Text to display in case validation failed or there is an error. Will set the whole group to invalid when passed. */
  errortext?: string
  /** A text to render to further explain meaning and significance of the group */
  helptext?: string
  /** The id of the group. If not passed, RadioGroup will create and use a unique id for the group */
  id?: string
  /** Whether the group not be validated. */
  invalid?: boolean
  /** Label for the group of radios as a whole. Passing a label is mandatory in order to denote a selection in the set is required by passing the `required` prop. */
  label?: string
  /** The name of all radios in a group. If not passed, RadioGroup will create and use a unique name identifier for its child Radios */
  name?: string
  /** An onChange handler to execute when the selected option changes */
  onChange?: EventUpdateHandler
  /** Whether a selection on the RadioGroup is required */
  required?: boolean
  /** The value of the initially selected radio. This will override 'checked' set on any of the child radio elements. */
  selected?: string
  /** Text to display in case validation is successful. When passed, will set the whole group to valid. */
  successtext?: string
  /** Whether the RadioGroup was successfully validated */
  valid?: boolean
}
