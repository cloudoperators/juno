/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useId, useState } from "react"
import { Textarea } from "../Textarea/index"
import { ButtonRow } from "../ButtonRow/index"
import { Button } from "../Button/index"
import { FormHint } from "../FormHint/index"
import { Stack } from "../Stack/index"
import { Label } from "../Label/index"

const innerWrapperStyles = `
  jn-relative
`

const labelStyles = `
  jn-pointer-events-none
  jn-top-2
  jn-left-[0.9375rem]
  jn-pr-4
  jn-bg-theme-textinput
  jn-z-20
`

const coverStyles = `
  jn-absolute
  jn-top-0
  jn-left-0
  jn-right-0
  jn-bottom-0
  jn-cursor-not-allowed
  jn-backdrop-blur-[4px]
  jn-bg-theme-background-lvl-2/30
  jn-z-10
  jn-flex
  jn-justify-center
  jn-items-center
`

const copyConfirmMessageStyles = `
  jn-bg-theme-background-lvl-1
  jn-font-bold
  jn-px-3
  jn-py-1
  jn-rounded
`

const textareaStyles = `
  jn-break-all
  jn-min-h-[7.5rem]
`

const hintStyles = ``

const actionStyles = `
  jn-h-[1.875rem]
`

/** A component to hold a secret text, e.g. an SSH key, and conceal or reveal as needed. */
export const SecretText: React.FC<SecretTextProps> = ({
  autoComplete = "off",
  className = "",
  clear = true,
  copy = true,
  copyConfirmtext = "Secret copied to clipboard.",
  disableClear = false,
  disableCopy = false,
  disabled = false,
  disablePaste = false,
  disableToggle = false,
  errortext,
  helptext,
  id = "",
  onBlur,
  onChange,
  onClear,
  onCopy,
  onFocus,
  onHide,
  onPaste,
  onReveal,
  onToggle,
  label,
  name,
  paste = true,
  placeholder = "",
  readOnly = false,
  required = false,
  reveal = false,
  successtext,
  toggle = true,
  valid = false,
  invalid,
  value = "",
  wrapperClassName = "",
  ...props
}) => {
  const isNotEmptyString = (str: React.ReactNode) => {
    return !(typeof str === "string" && str.trim().length === 0)
  }

  const uniqueId = () => "juno-secrettext-" + useId()
  const theId = id || uniqueId()

  const [isRevealed, setIsRevealed] = useState(false)
  const [val, setVal] = useState("")
  const [isCopied, setIsCopied] = useState(false)
  const [hasFocus, setHasFocus] = useState(false)
  const timeoutRef = React.useRef<number | null>(null)

  useEffect(() => {
    setIsRevealed(reveal)
  }, [reveal])

  useEffect(() => {
    setVal(value)
  }, [value])

  const handleValueChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setVal(event.target.value)
    onChange && onChange(event)
  }

  const handleToggleClick = () => {
    isRevealed ? onHide && onHide() : onReveal && onReveal()
    setIsRevealed(!isRevealed)
    onToggle && onToggle()
  }

  const handleClearClick = () => {
    setVal("")
    onClear && onClear()
  }

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(val || "")
      .then(() => {
        setIsCopied(true)
        clearTimeout(timeoutRef.current || undefined) // clear any possibly existing Refs
        timeoutRef.current = window.setTimeout(() => setIsCopied(false), 1000)
        onCopy && onCopy(val)
      })
      .catch(() => {
        console.warn("Failed to read clipboard.")
      })
  }

  const handlePasteClick = () => {
    navigator.clipboard
      .readText()
      .then((clipboardText) => {
        setVal(clipboardText)
        onPaste && onPaste(clipboardText)
      })
      .catch(() => {
        console.warn("Failed to read clipboard.")
      })
  }

  const handleFocus = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    setHasFocus(true)
    onFocus && onFocus(event)
  }

  const handleBlur = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    setHasFocus(false)
    onBlur && onBlur(event)
  }

  return (
    <div
      className={`
        juno-secret-wrapper  
        ${wrapperClassName}  
      `}
    >
      <div
        className={`
          juno-secret-wrapper-inner
          ${innerWrapperStyles} 
        `}
      >
        {label && isNotEmptyString(label) ? (
          <Label
            className={`${labelStyles}`}
            htmlFor={theId}
            text={label}
            disabled={disabled}
            required={required}
            floating
            minimized={placeholder || hasFocus || (val && val.length) ? true : false}
          />
        ) : (
          ""
        )}

        {isCopied || !isRevealed ? (
          <div className={`juno-secret-cover ${coverStyles} `}>
            {isCopied ? (
              <span className={`juno-secret-copyconfirmmessage ${copyConfirmMessageStyles}`}>{copyConfirmtext}</span>
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}

        <Textarea
          autoComplete={autoComplete}
          className={`juno-secret-textarea jn-font-mono ${textareaStyles} ${className}`}
          disabled={disabled}
          id={theId}
          invalid={invalid}
          name={name}
          onBlur={handleBlur}
          onChange={handleValueChange}
          onFocus={handleFocus}
          placeholder={placeholder}
          readOnly={readOnly}
          valid={valid}
          value={val}
          {...props}
        />
      </div>

      <Stack>
        <div className="jn-grow">
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

        <ButtonRow className="jn-secret-actions jn-justify-self-end jn-mt-2">
          {clear && !readOnly ? (
            <Button
              size="small"
              className={`${actionStyles}`}
              onClick={handleClearClick}
              disabled={disabled || disableClear || !val.length ? true : undefined}
              title="Clear"
            >
              Clear
            </Button>
          ) : (
            ""
          )}
          {toggle ? (
            <Button
              size="small"
              className={`${actionStyles}`}
              onClick={handleToggleClick}
              title={isRevealed ? "Hide" : "Reveal"}
              disabled={disabled || disableToggle ? true : undefined}
            >
              {isRevealed ? "Hide" : "Reveal"}
            </Button>
          ) : (
            ""
          )}
          {copy ? (
            <Button
              size="small"
              className={`${actionStyles}`}
              onClick={handleCopyClick}
              disabled={disabled || disableCopy || !val.length ? true : undefined}
              title="Copy"
            >
              Copy
            </Button>
          ) : (
            ""
          )}
          {paste && !readOnly ? (
            <Button
              size="small"
              className={`${actionStyles}`}
              onClick={handlePasteClick}
              title="Paste"
              disabled={disabled || disablePaste ? true : undefined}
            >
              Paste
            </Button>
          ) : (
            ""
          )}
        </ButtonRow>
      </Stack>
    </div>
  )
}

//eslint-disable-next-line no-unused-vars
type ValueChangeHandler = (value: string) => void

export interface SecretTextProps extends Omit<React.HTMLAttributes<HTMLTextAreaElement>, "onCopy" | "onPaste"> {
  /** Whether the secret field should autocomplete. */
  autoComplete?: string
  /** Pass a custom className to the Secret input field. */
  className?: string
  /** Whether the Clear button is rendered. */
  clear?: boolean
  /** Whether the Copy button is rendered. */
  copy?: boolean
  /** A small text to display for a second to confirm the secret's content was copied to the clipboard. */
  copyConfirmtext?: string
  /** Disable the Clear button */
  disableClear?: boolean
  /** Disable the Copy button */
  disableCopy?: boolean
  /** Whether the Secret's input is disabled. */
  disabled?: boolean
  /** Disable the Paste button */
  disablePaste?: boolean
  /** Disable the Hide/Reveal button */
  disableToggle?: boolean
  /** A small text to display information regarding any errors in the context of the Secret. */
  errortext?: React.ReactNode
  /** A small text to display giving more information and context about the Secret. */
  helptext?: React.ReactNode
  /** Pass an id  */
  id?: string
  /** Whether the Secret's content is invalid. */
  invalid?: boolean
  /** A label to display above the SecretText's textarea. */
  label?: string
  /** The name of the SecretText's textarea. */
  name?: string
  /** A handler to execute when the Secret's input area looses focus. */
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>
  /** A handler to execute when the Secret's content changes. */
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>
  /** A handler to execute when the user clears the Secret's content using the Clear button. */
  onClear?: () => void
  /** A handler to execute when the user copies the Secret's content to the clipboard. */
  onCopy?: ValueChangeHandler
  /** A handler to execute when the SecretText textarea receives focus */
  onFocus?: React.FocusEventHandler<HTMLTextAreaElement>
  /** A handler to execute when the user hides the Secret's content. */
  onHide?: () => void
  /** A handler to execute when the user pastes text from the clipboard into the SecretText. */
  onPaste?: ValueChangeHandler
  /** A handler to execute when the user reveals the Secret's content. */
  onReveal?: () => void
  /** A handler to execute when the visibility of the SecretText's content is toggled, i.e. this will be run when the content is revealed and when it is hidden. */
  onToggle?: () => void
  /** Whether a button to paste text content even in hidden mode is rendered. */
  paste?: boolean
  /** Pass a placeholder to the SecretText's textarea */
  placeholder?: string
  /** Whether the SecretText content is read only, i.e. can not be edited..*/
  readOnly?: boolean
  /** Whether the SecretText is required. Passing `true` will render a small required marker to the label. This will only have an effect when a label is passed, too.  */
  required?: boolean
  /** Whether the secret's content is revealed / legible. */
  reveal?: boolean
  /** A small text to display giving information in the context of the secret, e.g. when it was successfully validated or matches specific requirements, etc.  */
  successtext?: React.ReactNode
  /** Whether a button to toggle visibility of the SecretText's content should be rendered. */
  toggle?: boolean
  /** Whether the Secret's content was successfully validated. */
  valid?: boolean
  /** The value of the SecretText, i.e. the Secret's content.  */
  value?: string
  /** Pass a className to the outer wrapper element */
  wrapperClassName?: string
}
