/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo, useId, useRef } from "react";
import PropTypes from "prop-types";
import { Label } from "../Label/index";
import { Icon } from "../Icon/index";
import { FormHint } from "../FormHint/FormHint.component";
import "./textinput.scss";

const textinputstyles = `
	jn-bg-theme-textinput
	jn-text-theme-textinput
  jn-border
	jn-text-base
	jn-leading-4
	jn-px-4
	jn-h-textinput
	jn-rounded-3px
	focus:jn-outline-none
	focus:jn-ring-2
	focus:jn-ring-theme-focus
	disabled:jn-opacity-50
  autofill:jn-bg-theme-textinput-autofill
  autofill:jn-text-theme-textinput-autofill
  peer
`;

const defaultborderstyles = `
	jn-border-theme-textinput-default
`;

const invalidstyles = `
	jn-border-theme-error
`;

const validstyles = `
	jn-border-theme-success
`;

const withLabelStyles = `
  jn-pt-[1.125rem] 
  jn-pb-1
`;

const noLabelStyles = `
  jn-py-4
`;

const wrapperStyles = `
  jn-inline-block
  jn-relative
`;

const labelStyles = `
  peer-autofill:jn-text-theme-textinput-autofill-label
  jn-pointer-events-none
  jn-top-2
  jn-left-[0.9375rem]
`;

const iconcontainerstyles = `
  jn-inline-flex
  jn-absolute
  jn-top-[.4rem]
  jn-right-3
`;

const disablediconstyles = `
  jn-opacity-50
`;

const iconstyles = `
  jn-inline-block 
  jn-ml-1 
  jn-leading-1
  jn-mt-[-.2rem]
`;

const hintStyles = `
  jn-mt-0
`;

/** 
A controlled Text Input.
Also covers email, telephone, password, url derivates. 
*/
export const TextInput = ({
  autoComplete,
  autoFocus,
  className,
  disabled,
  errortext,
  id,
  invalid,
  helptext,
  label,
  name,
  onChange,
  onFocus,
  onBlur,
  placeholder,
  readOnly,
  required,
  successtext,
  type,
  valid,
  value,
  width,
  wrapperClassName,
  ...props
}) => {
  const isNotEmptyString = (str) => {
    return !(typeof str === "string" && str.trim().length === 0);
  };

  const uniqueId = () => "juno-textinput-" + useId();

  const ref = useRef();
  const [val, setValue] = useState("");
  const [hasFocus, setFocus] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [isValid, setIsValid] = useState(false);

  /* Set the focus state variable in case the input was focussed by passing autoFocus, or when the input was rendered and focussed by the user before React started listening to client side events, e.g. when rendering server-side: */
  useEffect(() => {
    if (document.hasFocus() && ref.current.contains(document.activeElement)) {
      setFocus(true);
    }
  }, []);

  useEffect(() => {
    setValue(value);
  }, [value]);

  const invalidated = useMemo(
    () => invalid || (errortext && isNotEmptyString(errortext) ? true : false),
    [invalid, errortext]
  );
  const validated = useMemo(
    () =>
      valid || (successtext && isNotEmptyString(successtext) ? true : false),
    [valid, successtext]
  );

  useEffect(() => {
    setIsInvalid(invalidated);
  }, [invalidated]);

  useEffect(() => {
    setIsValid(validated);
  }, [validated]);

  const handleValueChange = (event) => {
    setValue(event.target.value);
    onChange && onChange(event);
  };

  const handleFocus = (event) => {
    setFocus(true);
    onFocus && onFocus(event);
  };

  const handleBlur = (event) => {
    setFocus(false);
    onBlur && onBlur(event);
  };

  const Icons = ({ disabled }) => {
    if (isValid || isInvalid) {
      return (
        <div
          className={`juno-textinput-row-icon-container ${iconcontainerstyles} ${
            disabled ? disablediconstyles : ""
          }`}
        >
          {isInvalid ? (
            <Icon icon="dangerous" color="jn-text-theme-error" />
          ) : null}
          {isValid ? (
            <Icon icon="checkCircle" color="jn-text-theme-success" />
          ) : null}
        </div>
      );
    } else {
      return "";
    }
  };

  const theId = id || uniqueId();

  return (
    <div
      className={`
      juno-textinput-wrapper-outer
      ${wrapperClassName}
    `}
    >
      <span
        className={`
          juno-textinput-wrapper 
          ${wrapperStyles}
          ${width == "auto" ? "jn-inline-block" : "jn-block"}
          ${width == "auto" ? "jn-w-auto" : "jn-w-full"}
          `}
      >
        <input
          type={type}
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
          className={`juno-textinput 
            ${textinputstyles}
            ${label ? withLabelStyles : noLabelStyles}
            ${isInvalid ? "juno-textinput-invalid " + invalidstyles : ""} 
            ${isValid ? "juno-textinput-valid " + validstyles : ""}  
            ${isValid || isInvalid ? "" : defaultborderstyles} 
            ${width == "auto" ? "jn-w-auto" : "jn-w-full"}
            ${className}
          `}
          {...props}
        />
        {label && label.length ? (
          <Label
            text={label}
            htmlFor={theId}
            className={`${labelStyles}`}
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
        <Icons disabled={disabled} />
      </span>
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
  );
};

TextInput.propTypes = {
  /** Pass a valid autocomplete value. We do not police validity. */
  autoComplete: PropTypes.string,
  /** Whether the field receives autofocus */
  autoFocus: PropTypes.bool,
  /** Pass a classname to the input element */
  className: PropTypes.string,
  /** Render a disabled input */
  disabled: PropTypes.bool,
  /** A text to render when the TextInput has an error or could not be validated */
  errortext: PropTypes.node,
  /** A helptext to render to explain meaning and significance of the TextInput */
  helptext: PropTypes.node,
  /** Pass an id to the input element */
  id: PropTypes.string,
  /** Whether the field is invalid */
  invalid: PropTypes.bool,
  /** The label of the input */
  label: PropTypes.string,
  /** Pass a name attribute for the input element */
  name: PropTypes.string,
  /** Pass a blur handler */
  onBlur: PropTypes.func,
  /** Pass a change handler */
  onChange: PropTypes.func,
  /** Pass a focus handler */
  onFocus: PropTypes.func,
  /** Pass a placeholder */
  placeholder: PropTypes.string,
  /** Render a readonly input */
  readOnly: PropTypes.bool,
  /** Whether the field is required */
  required: PropTypes.bool,
  /** A text to render when the TextInput was successfully validated */
  successtext: PropTypes.node,
  /** Specify the type attribute. Defaults to an input with no type attribute, which in turn will be treateas as type="text" by browsers. */
  type: PropTypes.oneOf(["text", "email", "password", "tel", "url", "number"]),
  /** Whether the field is valid */
  valid: PropTypes.bool,
  /** Pass a value */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** The width of the text input. Either 'full' (default) or 'auto'. */
  width: PropTypes.oneOf(["full", "auto"]),
  /** Pass a className to the outer wrapper <div> element. */
  wrapperClassName: PropTypes.string,
};

TextInput.defaultProps = {
  autoComplete: "off",
  autoFocus: false,
  className: "",
  disabled: false,
  errortext: "",
  helptext: "",
  id: "",
  invalid: false,
  label: undefined,
  name: undefined,
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  placeholder: "",
  readOnly: false,
  required: false,
  successtext: "",
  type: null,
  valid: false,
  value: "",
  width: "full",
  wrapperClassName: "",
};
