/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, ReactNode, ChangeEvent, MouseEvent, FC } from "react"

import { Icon } from "../Icon/Icon.component"
import { Spinner } from "../Spinner/Spinner.component"

const selectClasses = `
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

const wrapperClasses = `
    jn-relative
`

const iconClasses = `
    jn-absolute
    jn-flex
    jn-right-2
    jn-top-1.5
    jn-pointer-events-none
`

const disabledIconClasses = `
    jn-opacity-50
`

const errorBorderClasses = `
    jn-border
    jn-border-theme-error
`

const successBorderClasses = `
    jn-border
    jn-border-theme-success
`

const loadingClasses = `
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

const errorClasses = `
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

const loadingSpinnerClasses = `
    jn-ml-auto
    jn-mr-auto
`

const errorIconClasses = `
    jn-ml-auto
    jn-mr-auto
`

const iconPaddingRight = `
    jn-pr-[3.75rem]
`

const defaultPaddingRight = `
    jn-pr-9
`

export interface NativeSelectProps {
  /** The name attribute for the select element */
  name?: string
  /** The id of the select element */
  id?: string
  /** The classname to be applied to the internal select element */
  className?: string
  /** The children elements, typically SelectOption or SelectOptionGroup components  */
  children?: ReactNode
  /** Whether the select is disabled */
  disabled?: boolean
  /** Whether the select is invalid */
  invalid?: boolean
  /** Whether the select is valid */
  valid?: boolean
  /** Whether the select is currently loading */
  loading?: boolean
  /** Whether there is an error fetching data or another non-validation error */
  error?: boolean
  /** Handler for the change event */
  // eslint-disable-next-line no-unused-vars
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void
  /** Handler for the click event */
  // eslint-disable-next-line no-unused-vars
  onClick?: (event: MouseEvent<HTMLSelectElement>) => void
  /** A custom classname for the wrapping element, useful for positioning or additional styling */
  wrapperClassName?: string
}

/** A basic, uncontrolled native HTML select. Takes SelectOption and SelectOptionGroup as children. */
export const NativeSelect: FC<NativeSelectProps> = ({
  name = "Unnamed Select",
  id,
  children,
  className = "",
  disabled = false,
  invalid = false,
  valid = false,
  loading = false,
  error = false,
  onChange,
  onClick,
  wrapperClassName = "",
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(loading)
  const [isInvalid, setIsInvalid] = useState(invalid)
  const [isValid, setIsValid] = useState(valid)
  const [hasError, setHasError] = useState(error)

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

  /** Handles the change event of the select element */
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => onChange && onChange(event)

  /** Handles the click event of the select element */
  const handleClick = (event: MouseEvent<HTMLSelectElement>) => onClick && onClick(event)

  /** Renders the appropriate icon based on the current state of the select element */
  const SelectIcons: FC<{ disabled?: boolean }> = ({ disabled }) => {
    if (isLoading) {
      return (
        <div className={`juno-select-loading ${loadingClasses}`}>
          <Spinner className={`${loadingSpinnerClasses}`} />
        </div>
      )
    }
    if (hasError) {
      return (
        <div className={`juno-select-errortext ${errorClasses}`}>
          <Icon icon="errorOutline" color="jn-text-theme-error" className={`${errorIconClasses}`} />
        </div>
      )
    }
    return (
      <div className={`${iconClasses} ${disabled ? disabledIconClasses : ""}`}>
        {isInvalid && <Icon icon="dangerous" color="jn-text-theme-error" />}
        {isValid && <Icon icon="checkCircle" color="jn-text-theme-success" />}
        <Icon icon="expandMore" />
      </div>
    )
  }

  /** Determines the right padding for the select element based on its state */
  const selectPadding = () => {
    if (isValid || isInvalid) return iconPaddingRight
    return defaultPaddingRight
  }

  return (
    <div
      className={`
      juno-select-wrapper 
      ${wrapperClasses}
      ${wrapperClassName}`}
    >
      <select
        name={name}
        id={id}
        className={`juno-select ${selectClasses} ${isInvalid ? "juno-select-invalid " + errorBorderClasses : ""} ${isValid ? "juno-select-valid " + successBorderClasses : ""} ${hasError ? "juno-select-error " : ""} ${selectPadding()} ${className}`}
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
