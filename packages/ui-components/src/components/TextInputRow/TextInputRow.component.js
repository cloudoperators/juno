/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"
import { TextInput } from "../TextInput/index.js"
import { FormRow } from "../FormRow/index.js"
import { withDeprecationWarning } from "../../deprecated_js/withDeprecationWarning/index.js"

/** DEPRECATED: A text input row containing an input of type text, password, email, tel, or url, an associated label, and necessary structural markup. This component is DEPRECATED, use TextInput instead. */
const TextInputRow = ({
  type = null,
  value = "",
  name = "",
  label = "",
  id = "",
  placeholder = "",
  helptext = "",
  required = false,
  invalid = false,
  errortext = "",
  valid = false,
  successtext = "",
  autoFocus = false,
  className = "",
  disabled = false,
  onChange = undefined,
  onFocus = undefined,
  onBlur = undefined,
  ...props
}) => {
  return (
    <FormRow>
      <TextInput
        type={type}
        value={value}
        name={name}
        id={id}
        label={label}
        required={required}
        placeholder={placeholder}
        disabled={disabled}
        invalid={invalid}
        valid={valid}
        autoFocus={autoFocus}
        onChange={onChange}
        errortext={errortext}
        helptext={helptext}
        successtext={successtext}
        className={className}
        onFocus={onFocus}
        onBlur={onBlur}
        {...props}
      />
    </FormRow>
  )
}

TextInputRow.propTypes = {
  /** The type of the input element to render */
  type: PropTypes.oneOf(["text", "password", "email", "tel", "url", "number"]),
  /** Optional initial value */
  value: PropTypes.string,
  /** Name attribute of the input */
  name: PropTypes.string,
  /** Label text */
  label: PropTypes.string,
  /** Id */
  id: PropTypes.string,
  /** Placeholder for the text input. Will not be visible on floating label inputs. */
  placeholder: PropTypes.string,
  /** Help text */
  helptext: PropTypes.node,
  /** Specify whether the input is required */
  required: PropTypes.bool,
  /** Whether the input is invalid */
  invalid: PropTypes.bool,
  /** Error text to display below the input element. When passed, the component will be set to invalid automatically. */
  errortext: PropTypes.string,
  /** Whether the input is valid */
  valid: PropTypes.bool,
  /** Text to display when validation is successful. Will automatically set the field to valid if passed. */
  successtext: PropTypes.string,
  /** Whether the input element should automatically receive focus */
  autoFocus: PropTypes.bool,
  /** Pass a className */
  className: PropTypes.string,
  /** Disable the input */
  disabled: PropTypes.bool,
  /** Pass a handler to the input element */
  onChange: PropTypes.func,
  /** Pass a handler to the input element */
  onFocus: PropTypes.func,
  /** Pass a handler to the input element */
  onBlur: PropTypes.func,
}

export default withDeprecationWarning(
  TextInputRow,
  "TextInputRow is deprecated and will be removed in future versions. To be future-proof, use TextInput instead."
)
