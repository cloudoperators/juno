/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useId, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Textarea } from "../Textarea/";
import { ButtonRow } from "../ButtonRow/";
import { Button } from "../Button/";
import { FormHint } from "../FormHint/";
import { Stack } from "../Stack/";
import { Label } from "../Label/";

const innerWrapperStyles = `
  jn-relative
`;

const labelStyles = `
  jn-pointer-events-none
  jn-top-2
  jn-left-[0.9375rem]
  jn-pr-4
  jn-bg-theme-textinput
  jn-z-20
`;

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
`;

const blurStyles = `
  jn-backdrop-blur-[4px]
`;

const copyConfirmMessageStyles = `
  jn-bg-theme-background-lvl-1
  jn-font-bold
  jn-px-3
  jn-py-1
  jn-rounded
`;

const textareaStyles = `
  jn-break-all
  jn-min-h-[7.5rem]
`;

const hintStyles = ``;

const actionStyles = `
  jn-h-[1.875rem]
`;

/** A component to hold a secret text, e.g. an SSH key, and conceal or reveal as needed. */
export const SecretText = ({
  autoComplete,
  className,
  clear,
  copy,
  copyConfirmtext,
  disableClear,
  disableCopy,
  disableToggle,
  disabled,
  disablePaste,
  errortext,
  helptext,
  id,
  invalid,
  label,
  name,
  onBlur,
  onChange,
  onClear,
  onCopy,
  onFocus,
  onHide,
  onPaste,
  onReveal,
  onToggle,
  paste,
  placeholder,
  readOnly,
  required,
  reveal,
  successtext,
  toggle,
  valid,
  value,
  wrapperClassName,
  ...props
}) => {
  const isNotEmptyString = (str) => {
    return !(typeof str === "string" && str.trim().length === 0);
  };

  const uniqueId = () => "juno-secrettext-" + useId();
  const theId = id || uniqueId();

  const [isRevealed, setIsRevealed] = useState(false);
  const [val, setVal] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);
  const timeoutRef = React.useRef(null);

  useEffect(() => {
    setIsRevealed(reveal);
  }, [reveal]);

  useEffect(() => {
    setVal(value);
  }, [value]);

  const handleValueChange = (event) => {
    setVal(event.target.value);
    onChange && onChange(event);
  };

  const handleToggleClick = () => {
    isRevealed ? onHide && onHide() : onReveal && onReveal();
    setIsRevealed(!isRevealed);
    onToggle && onToggle();
  };

  const handleClearClick = () => {
    setVal("");
    onClear && onClear();
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(val || "");
    setIsCopied(true);
    clearTimeout(timeoutRef.current); // clear any possibly existing Refs
    timeoutRef.current = setTimeout(() => setIsCopied(false), 1000);
    onCopy && onCopy(val);
  };

  const handlePasteClick = () => {
    try {
      navigator.clipboard.readText().then((clipboardText) => {
        setVal(clipboardText);
        onPaste && onPaste(clipboardText);
      });
    } catch (error) {
      console.warn("Failed to read clipboard.");
    }
  };

  const handleFocus = (event) => {
    setHasFocus(true);
    onFocus && onFocus(event);
  };

  const handleBlur = (event) => {
    setHasFocus(false);
    onBlur && onBlur(event);
  };

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
            minimized={
              placeholder || hasFocus || (val && val.length) ? true : false
            }
          />
        ) : (
          ""
        )}

        {isCopied || !isRevealed ? (
          <div className={`juno-secret-cover ${coverStyles} `}>
            {isCopied ? (
              <span
                className={`juno-secret-copyconfirmmessage ${copyConfirmMessageStyles}`}
              >
                {copyConfirmtext}
              </span>
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
            <FormHint
              text={errortext}
              variant="error"
              className={`${hintStyles}`}
            />
          ) : (
            ""
          )}
          {successtext && isNotEmptyString(successtext) ? (
            <FormHint
              text={successtext}
              variant="success"
              className={`${hintStyles}`}
            />
          ) : (
            ""
          )}
          {helptext && isNotEmptyString(helptext) ? (
            <FormHint text={helptext} className={`${hintStyles}`} />
          ) : (
            ""
          )}
        </div>

        <ButtonRow className="jn-secret-actions jn-justify-self-end jn-mt-2">
          {clear && !readOnly ? (
            <Button
              size="small"
              className={`${actionStyles}`}
              onClick={handleClearClick}
              disabled={disabled || disableClear || !val.length ? true : null}
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
              disabled={disabled || disableToggle ? true : null}
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
              disabled={disabled || disableCopy || !val.length ? true : null}
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
              disabled={disabled || disablePaste ? true : null}
            >
              Paste
            </Button>
          ) : (
            ""
          )}
        </ButtonRow>
      </Stack>
    </div>
  );
};

SecretText.propTypes = {
  /** Whether the secret field should autocomplete. */
  autoComplete: PropTypes.string,
  /** Pass a custom className to the Secret input field. */
  className: PropTypes.string,
  /** A small text to display for a second to confirm the secret's content was copied to the clipboard. */
  copyConfirmtext: PropTypes.string,
  /** Disable the Clear button */
  disableClear: PropTypes.bool,
  /** Disable the Copy button */
  disableCopy: PropTypes.bool,
  /** Whether the Secret's input is disabled. */
  disabled: PropTypes.bool,
  /** Disable the Paste button */
  disablePaste: PropTypes.bool,
  /** Disable the Hide/Reveal button */
  disableToggle: PropTypes.bool,
  /** A small text to display information regarding any errors in the context of the Secret. */
  errortext: PropTypes.string,
  /** A small text to display giving more information and context about the Secret. */
  helptext: PropTypes.string,
  /** Pass an id  */
  id: PropTypes.string,
  /** A handler to execute when the Secret's input area looses focus. */
  onBlur: PropTypes.func,
  /** A handler to execute when the Secret's content changes. */
  onChange: PropTypes.func,
  /** A handler to execute when the user clears the Secret's content using the Clear button. */
  onClear: PropTypes.func,
  /** A handler to execute when the user copies the Secret's content to the clipboard. */
  onCopy: PropTypes.func,
  /** A handler to execute when the SecretText textarea receives focus */
  onFocus: PropTypes.func,
  /** A handler to execute when the user hides the Secret's content. */
  onHide: PropTypes.func,
  /** A handler to execute when the user pastes text from the clipboard into the SecretText. */
  onPaste: PropTypes.func,
  /** A handler to execute when the user reveals the Secret's content. */
  onReveal: PropTypes.func,
  /** A handler to execute when the visibility of the SecretText's content is toggled, i.e. this will be run when the content is revealed and when it is hidden. */
  onToggle: PropTypes.func,
  /** Whether a button to paste text content even in hidden mode is rendered. */
  paste: PropTypes.bool,
  /** Pass a placeholder to the SecretText's textarea */
  placeholder: PropTypes.string,
  /** Whether the SecretText content is read only, i.e. can not be edited..*/
  readOnly: PropTypes.bool,
  /** Whether the SecretText is required. Passing `true` will render a small required marker to the label. This will only have an effect when a label is passed, too.  */
  required: PropTypes.bool,
  /** Whether the secret's content is revealed / legible. */
  reveal: PropTypes.bool,
  /** A small text to display giving information in the context of the secret, e.g. when it was successfully validated or matches specific requirements, etc.  */
  successtext: PropTypes.string,
  /** Whether a button to toggle visibility of the SecretText's content should be rendered. */
  toggle: PropTypes.bool,
  /** Whether the Secret's content was successfully validated. */
  valid: PropTypes.bool,
  /** The value of the SecretText, i.e. the Secret's content.  */
  value: PropTypes.string,
  /** Pass a className to the outer wrapper element */
  wrapperClassName: PropTypes.string,
};

SecretText.defaultProps = {
  autoComplete: "off",
  className: "",
  clear: true,
  copy: true,
  copyConfirmtext: "Secret copied to clipboard.",
  disableClear: false,
  disableCopy: false,
  disabled: false,
  disablePaste: false,
  disableToggle: false,
  errortext: undefined,
  helptext: undefined,
  id: "",
  onBlur: undefined,
  onChange: undefined,
  onClear: undefined,
  onCopy: undefined,
  onFocus: undefined,
  onHide: undefined,
  onPaste: undefined,
  onReveal: undefined,
  onToggle: undefined,
  paste: true,
  placeholder: "",
  readOnly: false,
  required: false,
  reveal: false,
  successtext: undefined,
  toggle: true,
  valid: false,
  value: "",
  wrapperClassName: "",
};
