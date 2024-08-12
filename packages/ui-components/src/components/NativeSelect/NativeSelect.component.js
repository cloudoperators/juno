/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Icon } from "../Icon/index.js"
import { Spinner } from "../Spinner/Spinner.component"

const selectstyles = `
	jn-w-full
	jn-bg-theme-select
	jn-text-theme-high
	jn-appearance-none
	jn-text-base
	jn-pl-4
	jn-h-[2.375rem]
	jn-rounded-3px
	jn-bg-icon-arrow-down
	jn-bg-right
	jn-bg-no-repeat
	focus:jn-outline-none
	focus:jn-ring-2
	focus:jn-ring-theme-focus
	disabled:jn-opacity-50
`

const wrapperstyles = `
	jn-relative
`

const iconstyles = `
	jn-absolute
	jn-flex
	jn-right-2
	jn-top-1.5
	jn-pointer-events-none
`

const disablediconstyles = `
	jn-opacity-50
`

const errorstyles = `
	jn-border
	jn-border-theme-error
`

const successstyles = `
	jn-border
	jn-border-theme-success
`

const loadingStyles = `
	jn-absolute
	jn-top-0
	jn-right-0
	jn-bottom-0
	jn-left-0
	jn-text-center
	jn-bg-theme-select
	jn-text-theme-high
	jn-text-base
	jn-rounded-3px
	jn-flex
	jn-flex-col
	jn-justify-center
	jn-select-none
	jn-cursor-not-allowed
`

const errorStyles = `
	jn-absolute
	jn-top-0
	jn-right-0
	jn-bottom-0
	jn-left-0
	jn-text-center
	jn-bg-theme-select
	jn-text-theme-high
	jn-text-base
	jn-rounded-3px
	jn-flex
	jn-flex-col
	jn-justify-center
	jn-select-none
	jn-cursor-not-allowed
`

const loadingSpinnerStyles = `
	jn-ml-auto
	jn-mr-auto
`

const errorIconStyles = `
	jn-ml-auto
	jn-mr-auto
`

const iconpaddingright = `
	jn-pr-[3.75rem]
`

const defaultpaddingright = `
	jn-pr-9
`

/** A basic, uncontrolled, native html Select. Takes SelectOption and SelectOptionGroup as children. */
export const NativeSelect = ({
  name = null,
  id = "",
  children,
  className = "",
  disabled = null,
  invalid = false,
  valid = false,
  loading = false,
  error = false,
  onChange,
  onClick,
  wrapperClassName = "",
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isInvalid, setIsInvalid] = useState(false)
  const [isValid, setIsValid] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    setIsLoading(loading)
  }, [loading])

  useEffect(() => {
    setIsInvalid(invalid)
  }, [invalid])

  useEffect(() => {
    setIsValid(valid)
  }, [valid])

  useEffect(() => {
    setHasError(error)
  }, [error])

  const handleChange = (event) => {
    onChange && onChange(event)
  }

  const handleClick = (event) => {
    onClick && onClick(event)
  }

  const SelectIcons = ({ disabled }) => {
    if (isLoading) {
      return (
        <div className={`juno-select-loading ${loadingStyles}`}>
          <Spinner className={`${loadingSpinnerStyles}`} />
        </div>
      )
    } else if (hasError) {
      return (
        <div className={`juno-select-errortext ${errorStyles}`}>
          <Icon icon="errorOutline" color="jn-text-theme-error" className={`${errorIconStyles}`} />
        </div>
      )
    } else {
      return (
        <div className={`${iconstyles} ${disabled ? disablediconstyles : ""} `}>
          {isInvalid ? <Icon icon="dangerous" color="jn-text-theme-error" /> : null}
          {isValid ? <Icon icon="checkCircle" color="jn-text-theme-success" /> : null}
          <Icon icon={"expandMore"} />
        </div>
      )
    }
  }

  const selectPadding = () => {
    if (isValid || isInvalid) {
      return iconpaddingright
    } else {
      return defaultpaddingright
    }
  }

  return (
    <div
      className={`
      juno-select-wrapper 
      ${wrapperstyles}
      ${wrapperClassName}`}
    >
      <select
        name={name || "Unnamed Select"}
        id={id}
        className={`juno-select ${selectstyles} ${
          isInvalid ? "juno-select-invalid " + errorstyles : ""
        } ${isValid ? "juno-select-valid " + successstyles : ""} ${
          hasError ? "juno-select-error " : ""
        } ${selectPadding()} ${className}`}
        onChange={handleChange}
        onClick={handleClick}
        disabled={disabled || isLoading || hasError}
        {...props}
      >
        {children}
      </select>
      <SelectIcons disabled={disabled} />
    </div>
  )
}

NativeSelect.propTypes = {
  /** Pass a name. */
  name: PropTypes.string,
  /** The id of the select */
  id: PropTypes.string,
  /** Pass a classname. The class name is applied to the internal select element. */
  className: PropTypes.string,
  /** Pass SelectOption and SelectOptionGroup as children. */
  children: PropTypes.node,
  /** Disable the select */
  disabled: PropTypes.bool,
  /** Whether the Select is invalid */
  invalid: PropTypes.bool,
  /** Whether the Select is valid */
  valid: PropTypes.bool,
  /** Whether the select is currently loading */
  loading: PropTypes.bool,
  /** Whether the select has an error. Don't use this to show the user selection is invalid. Use to show when there was an error fetching data. */
  error: PropTypes.bool,
  /** Pass a change handler */
  onChange: PropTypes.func,
  /** Pass a click handler */
  onClick: PropTypes.func,
  /** Pass a custom className to the wrapping element. This can be useful if you must add styling to the outermost wrapping element of this component, e.g. for positioning. */
  wrapperClassName: PropTypes.string,
}
