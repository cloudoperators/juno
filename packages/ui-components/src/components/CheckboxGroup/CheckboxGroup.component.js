/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo, createContext, useId } from "react"
import PropTypes from "prop-types"
import { Label } from "../Label/index.js"
import { Icon } from "../Icon/index"
import { FormHint } from "../FormHint/index"

const checkboxgroupstyles = `
	jn-mb-4
	jn-last:mb-0
`

const checkboxgrouplabelstyles = `
	jn-inline-block
	jn-mb-1
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

const errortextstyles = `
	jn-text-xs
	jn-text-theme-error
	jn-mb-2
`

const successtextstyles = `
	jn-text-xs
	jn-text-theme-success
	jn-mb-2
`

const iconstyles = `
	jn-absolute
	jn-right-2
	jn-top-1.5
`


export const CheckboxGroupContext = createContext()

export const CheckboxGroup = ({
  children,
  className,
  disabled,
  errortext,
  helptext,
  id,
  invalid,
  label,
  name,
  onChange,
  required,
  selected,
  successtext,
  valid,
  ...props
}) => {
  
  // Utility
  const isNotEmptyString = (str) => {
    return !(typeof str === 'string' && str.trim().length === 0)
  }
  
  const uniqueId = () => (
    "juno-checkboxgroup-" + useId()
  )
  
  // Create unique identifiers for use with name and id of the group:
  const groupName = name || uniqueId()
  const groupId = id || uniqueId()
  
  // Init state variables:
  const [selectedOptions, setSelectedOptions] = useState(selected) // undefined, empty array or array of values
  const [isValid, setIsValid] = useState(false)
  const [isInvalid, setIsInvalid] = useState(false)

  const validated = useMemo(
    () => valid || (successtext && successtext.length ? true : false),
    [valid, successtext]
  )
  const invalidated = useMemo(
    () => invalid || (errortext && errortext.length ? true : false),
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
  const handleCheckboxChange = (value) => {
    const changedValue = value
    if (selectedOptions && selectedOptions.includes(value)) {
      setSelectedOptions( selectedOptions.filter((value) => {return value !== changedValue}) )
    } else if (selectedOptions && !selectedOptions.includes(value)) {
      setSelectedOptions( (selectedOptions) => [...selectedOptions, changedValue] )
    } else {
      setSelectedOptions([changedValue])
    }
    onChange && onChange(value)
  }
  
  // Callback function to be passed via the context to child Checkboxes so they can add their value to the groups' selectedOptions array in case selected has not been set on the parent (otherwise the parent select will trump whatever is set on the child in a group context). Called ONLY ONCE during initialization of the child Checkbox when we DON't want to execute any additional onChange handlers just yet:
  const updateSelectedValue = (value) => {
    if (!selected) {
      setSelectedOptions( (selectedOptions) => [...selectedOptions || [], value] )
    }
  }
  
  return (
    <CheckboxGroupContext.Provider
      value={
        {
          selectedOptions: selectedOptions,
          name: groupName,
          disabled: disabled,
          handleCheckboxChange: handleCheckboxChange,
          updateSelectedValue: updateSelectedValue,
        }
      }
    >
      <div
        className={`
          juno-checkboxgroup 
          ${ isValid ? "juno-checkboxgroup-valid" : "" } 
          ${ isInvalid ? "juno-checkboxgroup-invalid" : "" } 
          ${checkboxgroupstyles} 
          ${className}
        `}
        id={groupId}
        role="group"
        {...props}
      >
        {
          label && isNotEmptyString(label) ?
            <Label 
              text={label}
              htmlFor={groupId}
              disabled={disabled}
              required={required}
            />
          :
            ""
        }
        <div
          className={`
            juno-checkbox-group-options 
            ${ groupstyles } 
            ${ isValid ? validgroupstyles : "" } 
            ${ isInvalid ? invalidgroupstyles : ""} 
            ${ isValid || isInvalid ? "" : defaultgroupstyles }
          `}
        >
          {isInvalid ? (
            <Icon
              icon="dangerous"
              color="jn-text-theme-error"
              className={`${iconstyles}`}
            />
          ) : ""}
          {isValid ? (
            <Icon
              icon="checkCircle"
              color="jn-text-theme-success"
              className={`${iconstyles}`}
            />
          ) : ""}
          
          { children }
          
        </div>
        { errortext && isNotEmptyString(errortext) ?
            <FormHint text={errortext} variant="error" />
          :
            ""
        }
        { successtext && isNotEmptyString(successtext) ?
            <FormHint text={successtext} variant="success" />
          :
            ""
        }
        { helptext && isNotEmptyString(helptext) ?
            <FormHint text={helptext} />
          :
            ""
         }
      </div>
    </CheckboxGroupContext.Provider>
  )
  
}

CheckboxGroup.propTypes = {
  /** The Checkbox children of the CheckboxGroup */
  children: PropTypes.node,
  /** Pass a custom className */
  className: PropTypes.string,
  /** Whether all Checkboxes in the group are disabled */
  disabled: PropTypes.bool,
  /** Text to display in case validation failed or there is an error. Will set the whole group to invalid when passed. */
  errortext: PropTypes.node,
  /** A text to render to further explain meaning and significance of the group */
  helptext: PropTypes.node,
  /** The id of the group. If not passed, a unique id will be created and used for the group as a whole. */
  id: PropTypes.string,
  invalid: PropTypes.bool,
  /*+ The label of the whole group. */
  label: PropTypes.string,
  /** The name of all checkboxes in the group. If not passed, a unique name identifier will be created and used for the group as a whole. */ 
  name: PropTypes.string,
  /** An onChange handler to execute when the selection of options changes */
  onChange: PropTypes.func,
  /** Whether a selection in the group is required */
  required: PropTypes.bool,
  /** Array of values of individual selected options in the group */
  selected: PropTypes.array,
  /** Text to display in case validation is successful. When passed, will set the whole group to valid. */
  successtext: PropTypes.node,
  /** Whether the CheckboxGroup was successfully validated */
  valid: PropTypes.bool,
}

CheckboxGroup.defaultProps = {
  children: null,
  className: "",
  disabled: false,
  errortext: "",
  helptext: "",
  id: "",
  invalid: false,
  label: undefined,
  name: "",
  onChange: undefined,
  required: false,
  selected: undefined,
  successtext: "",
  valid: false,
}
