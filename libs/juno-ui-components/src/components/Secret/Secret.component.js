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

const innerWrapperStyles = `
  jn-relative
`;

const coverStyles = `
  jn-absolute
  jn-top-0
  jn-left-0
  jn-right-0
  jn-bottom-0
  jn-cursor-not-allowed
  jn-backdrop-blur
  jn-bg-theme-textinput/30
  jn-z-10
  jn-flex
  jn-justify-center
  jn-items-center
`;

const copyConfirmMessageStyles = `
  jn-bg-theme-background-lvl-1
  jn-font-bold
  jn-px-3
  jn-py-1
  jn-rounded
`;

const textareaStyles = ``;

const hintStyles = ``;

const actionStyles = `
  jn-h-[1.875rem]
`;

export const Secret = ({
  autoComplete,
  autoFocus,
  className,
  copyConfirmtext,
  disabled,
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
  onReveal,
  onRevealToggle,
  placeholder,
  readOnly,
  required,
  reveal,
  successtext,
  valid,
  value,
  wrapperClassName,
  ...props
}) => {
  const isNotEmptyString = (str) => {
    return !(typeof str === "string" && str.trim().length === 0);
  };

  const [isRevealed, setIsRevealed] = useState(false);
  const [val, setVal] = useState("");
  const [isCopied, setIsCopied] = useState(false);
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
    setIsRevealed(!isRevealed);
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
        {isCopied || !isRevealed ? (
          <div className={`juno-secret-cover ${coverStyles} `}>
            {isCopied ? (
              <span
                className={`jn-secret-copyconfirmmessage ${copyConfirmMessageStyles}`}
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
          autoFocus={isRevealed ? autoFocus : false}
          className={`jn-secret-textarea jn-font-mono ${className}`}
          disabled={disabled}
          id={id}
          invalid={invalid}
          name={name}
          onBlur={onBlur}
          onChange={handleValueChange}
          onFocus={onFocus}
          placeholder={placeholder}
          readOnly={readOnly}
          valid={valid}
          value={val}
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
          <Button
            size="small"
            className={`${actionStyles}`}
            onClick={handleClearClick}
          >
            Clear
          </Button>
          <Button
            size="small"
            className={`${actionStyles}`}
            onClick={handleToggleClick}
          >
            {isRevealed ? "Hide" : "Reveal"}
          </Button>
          <Button
            size="small"
            className={`${actionStyles}`}
            onClick={handleCopyClick}
          >
            Copy
          </Button>
        </ButtonRow>
      </Stack>
    </div>
  );
};

Secret.propTypes = {
  /** Whether the secret field should autocomplete. */
  autoComplete: PropTypes.string,
  /** Whether the secret field should receive focus automatically. Only available when the Secret is set to `reveal={false}`. */
  autoFocus: PropTypes.bool,
  /** Pass a custom className to the Secret input field. */
  className: PropTypes.string,
  /** A small text to display for a second to confirm the secret's content was copied to the clipboard. */
  copyConfirmtext: PropTypes.string,
  /** Whether the Secret's input is disabled. */
  disabled: PropTypes.bool,
  /**  */
  errortext: PropTypes.string,
  helptext: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onCopy: PropTypes.func,
  /** Whether the secret's content should be revealed or not. */
  reveal: PropTypes.bool,
  successtext: PropTypes.string,
  /** Pass a className to the outer wrapper element */
  wrapperClassName: PropTypes.string,
};

Secret.defaultProps = {
  autoComplete: "off",
  autoFocus: false,
  className: "",
  copyConfirmtext: "Secret copied to clipboard.",
  disabled: false,
  errortext: undefined,
  helptext: undefined,
  onBlur: undefined,
  onChange: undefined,
  onClear: undefined,
  onCopy: undefined,
  onFocus: undefined,
  reveal: false,
  successText: undefined,
  valid: false,
  value: "",
  wrapperClassName: "",
};
