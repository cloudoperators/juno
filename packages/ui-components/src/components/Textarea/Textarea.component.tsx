/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo, useId, useRef, ReactNode } from "react"
import { Label } from "../Label/index"
import { Icon } from "../Icon/index"
import { FormHint } from "../FormHint/FormHint.component"

const wrapperStyles = `
  jn:inline-block
  jn:relative
`

const textareastyles = `
  jn:bg-theme-textinput
  jn:text-theme-textinput
  jn:border
  jn:text-base
  jn:leading-4
  jn:px-4
  jn:rounded-3px
  jn:align-top
  jn:focus:outline-hidden
  jn:focus:ring-2
  jn:focus:ring-theme-focus
  jn:disabled:opacity-50
  jn:disabled:cursor-not-allowed
`

const defaultborderstyles = `
  jn:border-theme-textinput-default
`

const invalidstyles = `
  jn:border-theme-error
`

const validstyles = `
  jn:border-theme-success
`

const withLabelStyles = `
  jn:pt-[1.125rem] 
  jn:pb-1
`

const noLabelStyles = `
  jn:py-4
`

const labelStyles = `
  jn:pointer-events-none
  jn:top-2
  jn:left-[0.9375rem]
  jn:pr-4
  jn:bg-theme-textinput
`

const iconcontainerstyles = `
  jn:inline-flex
  jn:absolute
  jn:top-[.4rem]
  jn:right-3
`

const disablediconstyles = `
  jn:opacity-50
`

const hintStyles = `
  jn:mt-0
`

interface IconsProps {
  disabled: boolean
}

/** 
A controlled Text Input.
Also covers email, telephone, password, url derivates. 
*/
export const Textarea: React.FC<TextareaProps> = ({
  name,
  value = "",
  id = "",
  placeholder = "",
  disabled = false,
  readOnly = false,
  required = false,
  invalid = false,
  valid = false,
  autoFocus = false,
  className = "",
  autoComplete = "off",
  helptext = "",
  successtext = "",
  errortext = "",
  onChange,
  onFocus,
  onBlur,
  label,
  width = "full",
  wrapperClassName = "",
  ...props
}) => {
  const isNotEmptyString = (str: ReactNode) => {
    return !(typeof str === "string" && str.trim().length === 0)
  }

  const uniqueId = () => "juno-textarea-" + useId()

  const ref = useRef<HTMLTextAreaElement>(null)
  const [val, setValue] = useState<string>("")
  const [hasFocus, setFocus] = useState(false)
  const [isInvalid, setIsInvalid] = useState(false)
  const [isValid, setIsValid] = useState(false)

  /* Set the focus state variable in case the input was focussed by passing autoFocus, or when the input was rendered and focussed by the user before React started listening to client side events, e.g. when rendering server-side: */
  useEffect(() => {
    if (document.hasFocus() && ref.current && ref.current.contains(document.activeElement)) {
      setFocus(true)
    }
  }, [])

  useEffect(() => {
    setValue(value.toString())
  }, [value])

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

  const handleValueChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value)
    onChange && onChange(event)
  }

  const handleFocus = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    setFocus(true)
    onFocus && onFocus(event)
  }

  const handleBlur = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    setFocus(false)
    onBlur && onBlur(event)
  }

  const Icons = ({ disabled }: IconsProps) => {
    if (isValid || isInvalid) {
      return (
        <div
          className={`juno-textinput-row-icon-container ${iconcontainerstyles} ${disabled ? disablediconstyles : ""}`}
        >
          {isInvalid ? <Icon icon="dangerous" color="jn:text-theme-error" /> : null}
          {isValid ? <Icon icon="checkCircle" color="jn:text-theme-success" /> : null}
        </div>
      )
    } else {
      return ""
    }
  }

  const theId = id || uniqueId()

  return (
    <div>
      <div
        className={`
          juno-textarea-wrapper 
          ${wrapperStyles}
          ${width == "auto" ? "jn:inline-block" : "jn:block"}
          ${width == "auto" ? "jn:w-auto" : "jn:w-full"}
          ${wrapperClassName}
        `}
      >
        {label && label.length ? (
          <Label
            text={label}
            htmlFor={theId}
            className={`${labelStyles}`}
            disabled={disabled}
            required={required}
            floating
            minimized={placeholder || hasFocus || (val && val.length) ? true : false}
          />
        ) : (
          ""
        )}
        <textarea
          name={name}
          autoComplete={autoComplete}
          value={val}
          id={theId}
          ref={ref}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          autoFocus={autoFocus}
          onChange={handleValueChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`juno-textarea 
            ${textareastyles}
            ${label ? withLabelStyles : noLabelStyles}
            ${isInvalid ? "juno-textarea-invalid " + invalidstyles : ""} 
            ${isValid ? "juno-textarea-valid " + validstyles : ""}  
            ${isValid || isInvalid ? "" : defaultborderstyles} 
            ${width == "auto" ? "jn:w-auto" : "jn:w-full"}
            ${className}
          `}
          {...props}
        />
        <Icons disabled={disabled} />
      </div>
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

type WidthType = "full" | "auto"

export interface TextareaProps extends React.HTMLProps<HTMLTextAreaElement> {
  /** Pass a name attribute */
  name?: string
  /** The label of the textarea */
  label?: string
  /** Pass a value */
  value?: string | number
  /** Pass an id */
  id?: string
  /** Pass a placeholder */
  placeholder?: string
  /** Render a disabled input */
  disabled?: boolean
  /** Render a readonly input */
  readOnly?: boolean
  /** Whether the field is required */
  required?: boolean
  /** Whether the field is invalid */
  invalid?: boolean
  /** Whether the field is valid */
  valid?: boolean
  /** Whether the field receives autofocus */
  autoFocus?: boolean
  /** Pass a classname. The class name is applied to the internal textarea element. */
  className?: string
  /** Pass a valid autocomplete value. We do not police validity. */
  autoComplete?: string
  /** Pass a change handler */
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>
  /** Pass a focus handler */
  onFocus?: React.FocusEventHandler<HTMLTextAreaElement>
  /** Pass a blur handler */
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>
  /** A helptext to render to explain meaning and significance of the Textarea */
  helptext?: ReactNode
  /** A text to render when the Textarea was successfully validated */
  successtext?: ReactNode
  /** A text to render when the Textarea has an error or could not be validated */
  errortext?: ReactNode
  /** The width of the textarea. Either 'full' (default) or 'auto'. */
  width?: WidthType
  /** Pass a custom className to the wrapping element. This can be useful if you must add styling to the outermost wrapping element of this component, e.g. for positioning. */
  wrapperClassName?: string
}
