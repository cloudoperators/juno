/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, ReactNode, ChangeEvent, MouseEvent, FC } from "react"

import { Icon } from "../Icon/Icon.component"
import { Spinner } from "../Spinner/Spinner.component"

const selectBaseClasses = `
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

const wrapperBaseClasses = `jn-relative`

const iconBaseClasses = `
  jn-absolute
  jn-flex
  jn-right-2
  jn-top-1.5
  jn-pointer-events-none
`

const iconDisabledClasses = `jn-opacity-50`

const borderErrorClasses = `jn-border jn-border-theme-error`
const borderSuccessClasses = `jn-border jn-border-theme-success`

const stateClasses = {
  loading: `
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
  `,
  error: `
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
  `,
  loadingSpinner: `jn-ml-auto jn-mr-auto`,
  errorIcon: `jn-ml-auto jn-mr-auto`,
  paddingIconRight: `jn-pr-[3.75rem]`,
  paddingDefaultRight: `jn-pr-9`,
}

export interface NativeSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /**
   * Name of the select element.
   * Used as a key for the selected value if a form is submitted.
   */
  name?: string

  /**
   * ID of the select element.
   */
  id?: string

  /**
   * Additional CSS classes to apply to the select element for custom styling.
   */
  className?: string

  /**
   * Elements to be rendered inside the select element.
   * This can be any React node or a collection of React nodes.
   * Typically, these are SelectOption or SelectOptionGroup components.
   */
  children?: ReactNode

  /**
   * Disables the select element, making it unclickable.
   */
  disabled?: boolean

  /**
   * Highlights the select element as invalid, indicating incorrect user input or validation errors.
   */
  invalid?: boolean

  /**
   * Highlights the select element as valid, indicating correct user input or successful validation.
   */
  valid?: boolean

  /**
   * Displays a loading indicator over the select element.
   * Used for async operations like fetching data.
   */
  loading?: boolean

  /**
   * Displays an error state over the select element, such as during data fetching errors.
   * Should not be used for validation errors.
   */
  error?: boolean

  /**
   * Event handler for the change event of the select element.
   * Triggered when the user changes the selected option.
   */
  // eslint-disable-next-line no-unused-vars
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void

  /**
   * Event handler for the click event on the select element.
   * Triggered when the user clicks on the select element.
   */
  // eslint-disable-next-line no-unused-vars
  onClick?: (event: MouseEvent<HTMLSelectElement>) => void

  /**
   * Additional CSS classes to apply to the outer wrapper of the select component for custom styling.
   */
  wrapperClassName?: string
}

/**
 * Renders the appropriate 'state' icon based on the state of the select element
 */
const SelectIcons: FC<{
  isLoading: boolean
  hasError: boolean
  isInvalid: boolean
  isValid: boolean
  disabled?: boolean
}> = ({ isLoading, hasError, isInvalid, isValid, disabled }) => {
  if (isLoading) {
    return (
      <div className={`juno-select-loading ${stateClasses.loading}`}>
        <Spinner className={stateClasses.loadingSpinner} />
      </div>
    )
  }
  if (hasError) {
    return (
      <div className={`juno-select-error-text ${stateClasses.error}`}>
        <Icon icon="errorOutline" color="jn-text-theme-error" className={stateClasses.errorIcon} />
      </div>
    )
  }
  return (
    <div className={`${iconBaseClasses} ${disabled ? iconDisabledClasses : ""}`}>
      {isInvalid && <Icon icon="dangerous" color="jn-text-theme-error" />}
      {isValid && <Icon icon="checkCircle" color="jn-text-theme-success" />}
      <Icon icon="expandMore" />
    </div>
  )
}

/**
 * A basic, uncontrolled native HTML select component.
 * Takes NativeSelectOption and NativeSelectOptionGroup children as options.
 * Handles states such as loading, valid, invalid, and error.
 */
export const NativeSelect: FC<NativeSelectProps> = ({
  name = "Unnamed Select",
  id = "",
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
  const [isValid, setIsValid] = useState(valid)
  const [isInvalid, setIsInvalid] = useState(invalid)
  const [hasError, setHasError] = useState(error)

  useEffect(() => setIsLoading(loading), [loading])
  useEffect(() => setIsValid(valid), [valid])
  useEffect(() => setIsInvalid(invalid), [invalid])
  useEffect(() => setHasError(error), [error])

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => onChange && onChange(event)
  const handleClick = (event: MouseEvent<HTMLSelectElement>) => onClick && onClick(event)

  const paddingClass = isValid || isInvalid ? stateClasses.paddingIconRight : stateClasses.paddingDefaultRight

  return (
    <div className={`juno-select-wrapper ${wrapperBaseClasses} ${wrapperClassName}`}>
      <select
        name={name}
        id={id}
        className={`
          juno-select
          ${selectBaseClasses}
          ${isInvalid ? "juno-select-invalid " + borderErrorClasses : ""}
          ${isValid ? "juno-select-valid " + borderSuccessClasses : ""}
          ${hasError ? "juno-select-error" : ""}
          ${paddingClass}
          ${className}
        `}
        onChange={handleChange}
        onClick={handleClick}
        disabled={disabled || isLoading || hasError}
        {...props}
      >
        {children}
      </select>
      <SelectIcons
        isLoading={isLoading}
        hasError={hasError}
        isInvalid={isInvalid}
        isValid={isValid}
        disabled={disabled}
      />
    </div>
  )
}
