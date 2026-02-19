/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { forwardRef, HTMLAttributes } from "react"

const labelstyles = `
  jn:text-theme-high
  jn:text-base
  jn:transform 
  jn:origin-top-left 
  jn:transition-all 
  jn:duration-100 
  jn:ease-in-out
  jn:z-10
`

const floatingStyles = `
  jn:absolute
`

const minimizedStyles = `
  jn:scale-75
  jn:-translate-y-[0.4375rem]
`

const requiredstyles = `
  jn:inline-block
  jn:w-1
  jn:h-1
  jn:rounded-full
  jn:align-top
  jn:ml-1
  jn:mt-2
  jn:bg-theme-required
`

const disabledstyles = `
  jn:opacity-50
  jn:cursor-not-allowed
`

/**
 * The `Label` component is a reusable, accessible label for form elements.
 * It supports optional features like disabling, required indicators, and floating label styles.
 * @see https://cloudoperators.github.io/juno/?path=/docs/forms-label--docs
 * @see {@link LabelProps}
 */
export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  (
    {
      text = "",
      htmlFor,
      required = false,
      className = "",
      disabled = false,
      floating = false,
      minimized = false,
      ...props
    },
    forwardedRef
  ) => {
    return (
      <label
        className={`
        juno-label 
        ${labelstyles} 
        ${floating ? "juno-label-floating " + floatingStyles : ""}
        ${minimized ? "juno-label-minimized " + minimizedStyles : ""}
        ${disabled ? "juno-label-disabled " + disabledstyles : ""} 
        ${className}
      `}
        htmlFor={htmlFor}
        ref={forwardedRef}
        {...props}
      >
        {text}
        {required ? (
          <span
            className={`
          juno-required 
          ${requiredstyles}
          `}
          ></span>
        ) : (
          ""
        )}
      </label>
    )
  }
)

Label.displayName = "Label"

export interface LabelProps extends HTMLAttributes<HTMLLabelElement> {
  /**
   * Text content for the label, required for display.
   */
  text?: string

  /**
   * ID of an input element to associate the label with for accessibility.
   */
  htmlFor?: string

  /**
   * Displays the required indicator when set.
   * @default false
   */
  required?: boolean

  /**
   * Custom CSS class names for label styling.
   * @default ""
   */
  className?: string

  /**
   * Enables disabled styling to indicate non-interactive fields.
   * @default false
   */
  disabled?: boolean

  /**
   * Applies floating label styles for improved UX.
   * @default false
   */
  floating?: boolean

  /**
   * Applies minimized label styles; requires `floating` to be `true`.
   * @default false
   */
  minimized?: boolean
}
