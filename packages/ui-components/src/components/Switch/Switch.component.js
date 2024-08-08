/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo, useId } from "react"
import PropTypes from "prop-types"
import { Label } from "../Label/index"
import { Icon } from "../Icon/index"
import { FormHint } from "../FormHint/FormHint.component"

const switchWrapperStyles = `
	jn-flex
	jn-flex-row
	jn-items-center
`

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
const switchsizestyles = (size) => {
  switch (size) {
    case "small":
      return "jn-w-[1.75rem] jn-h-4"
    case "large":
      return "jn-w-[3.125rem] jn-h-[1.6875rem]"
    default:
      return "jn-w-switch-default jn-h-switch-default"
  }
}

const handlebasestyles = `
	jn-inline-block
	jn-absolute
	jn-top-[1px]
	jn-rounded-full
	jn-bg-theme-switch-handle
	jn-border-theme-default
`
const handlesizestyles = (size) => {
  switch (size) {
    case "small":
      return "jn-w-[0.75rem] jn-h-[0.75rem]"
    case "large":
      return "jn-w-[1.4375rem] jn-h-[1.4375rem]"
    default:
      return "jn-w-switch-handle-default jn-h-switch-handle-default"
  }
}

const defaultborderstyles = `
	jn-border-theme-switch-default
`

const invalidbasestyles = `
	jn-border-theme-error
`

const validbasestyles = `
	jn-border-theme-success
`

const handleonstyles = `
	jn-right-[1px] 
	jn-bg-theme-switch-handle-checked
`
const handleoffstyles = `
	jn-left-[1px]
`

// const switchLabelStyles = `
// 	jn-text-theme-high
// 	jn-ml-2
// 	disabled:jn-opacity-50
// 	disabled:jn-cursor-not-allowed
// `

// const requiredStyles = `
// 		jn-inline-block
// 		jn-w-1
// 		jn-h-1
// 		jn-rounded-full
// 		jn-align-top
// 		jn-ml-1
// 		jn-mt-1
// 		jn-bg-theme-required
// `

const iconstyles = `
	jn-inline-block 
	jn-ml-1 
	jn-leading-1
	jn-mt-[-.2rem]
`

const hintStyles = `
	jn-mt-0
`

/** A Switch/Toggle component */
export const Switch = ({
  name = "",
  id = null,
  label = undefined,
  required = false,
  size = "default",
  on = false,
  disabled = null,
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
}) => {
  const isNotEmptyString = (str) => {
    return !(typeof str === "string" && str.trim().length === 0)
  }

  const uniqueId = () => "juno-switch-" + useId()

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

  const handleClick = (event) => {
    setIsOn(!isOn)
    onClick && onClick(event)
    onChange && onChange(event)
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
            className={`juno-switch-handle ${handlebasestyles} ${handlesizestyles(size)} ${isOn ? handleonstyles : handleoffstyles}`}
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

Switch.propTypes = {
  /** Name attribute */
  name: PropTypes.string,
  /** Id */
  id: PropTypes.string,
  /** Add a label to the Switch */
  label: PropTypes.string,
  /** Whether the Switch is required */
  required: PropTypes.bool,
  /** Leave empty for default size */
  size: PropTypes.oneOf(["small", "default", "large"]),
  /**  Pass checked state for initial rendering. */
  on: PropTypes.bool,
  /** Disabled switch */
  disabled: PropTypes.bool,
  /** Whether the Switch is invalid */
  invalid: PropTypes.bool,
  /** Whether the Switch is valid */
  valid: PropTypes.bool,
  /** A helptext to render to explain meaning and significance of the Switch */
  helptext: PropTypes.node,
  /** A text to render when the Switch was successfully validated */
  errortext: PropTypes.node,
  /** A text to render when the Switch has an error or could not be validated */
  successtext: PropTypes.node,
  /** Pass a className */
  className: PropTypes.string,
  /** Pass a change handler */
  onChange: PropTypes.func,
  /** Pass a click handler */
  onClick: PropTypes.func,
  /** Pass a custom className to the wrapping element */
  wrapperClassName: PropTypes.string,
}
