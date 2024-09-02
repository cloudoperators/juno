/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

const labelstyles = `
	jn-text-theme-high
	jn-text-base
	jn-transform 
	jn-origin-top-left 
	jn-transition-all 
	jn-duration-100 
	jn-ease-in-out
	jn-z-10
`

const floatingStyles = `
	jn-absolute
`

const minimizedStyles = `
	jn-scale-75
	-jn-translate-y-[0.4375rem]
`

const requiredstyles = `
	jn-inline-block
	jn-w-1
	jn-h-1
	jn-rounded-full
	jn-align-top
	jn-ml-1
	jn-mt-2
	jn-bg-theme-required
`

const disabledstyles = `
	jn-opacity-50
	jn-cursor-not-allowed
`

/**
 * A re-usable Label component
 */

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  (
    {
      text = "",
      htmlFor = undefined,
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

export interface LabelProps {
  /** Pass a string of text to be rendered as contents. Required.  */
  text?: string
  /** An Id of an input element to associate the label with */
  htmlFor?: string
  /** Required */
  required?: boolean
  /** Pass a className */
  className?: string
  /** Label for a disabled input */
  disabled?: boolean
  /** Whether the label is floating */
  floating?: boolean
  /** Whether the label is minimized. Requires `floating` set to TRUE, otherwise it will have no effect. */
  minimized?: boolean
}
