/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"
import { Textarea } from "../../deprecated_js/Textarea/index.js"
import { FormRow } from "../FormRow/index.js"
import { withDeprecationWarning } from "../../deprecated_js/withDeprecationWarning/index.js"

/** DEPRECATED: A textarea row containing a textarea, associated label, optional helptext, and structural markup. This component is DEPRECATED, use Textarea instead. */

const TextareaRow = ({
  value = "",
  name = null,
  label = null,
  id = null,
  placeholder = null,
  required = null,
  invalid = false,
  errortext = "",
  valid = false,
  successtext = "",
  helptext = null,
  className = "",
  disabled = null,
  onChange = undefined,
  ...props
}) => {
  return (
    <FormRow>
      <Textarea
        value={value}
        name={name}
        id={id}
        label={label}
        required={required}
        placeholder={placeholder}
        disabled={disabled}
        invalid={invalid}
        valid={valid}
        onChange={onChange}
        errortext={errortext}
        helptext={helptext}
        successtext={successtext}
        className={className}
        {...props}
      />
    </FormRow>
  )
}

TextareaRow.propTypes = {
  /** Optional initial value */
  value: PropTypes.string,
  /** Name attribute of the textarea element */
  name: PropTypes.string,
  /** Label text */
  label: PropTypes.string,
  /** Id */
  id: PropTypes.string,
  /** Help text */
  helptext: PropTypes.node,
  /** Placeholder for the text input. Will not be visible on floating label inputs. */
  placeholder: PropTypes.string,
  /** Specify whether the input is required */
  required: PropTypes.bool,
  /** Whether the field is invalid */
  invalid: PropTypes.bool,
  /** Error text to display when validation fails. Will automatically invalidate the field if passed. */
  errortext: PropTypes.string,
  /** Whether the field is valid */
  valid: PropTypes.bool,
  /** Text to display when validation is successful. Will automatically set the field to valid if passed. */
  successtext: PropTypes.string,
  /** Pass a className to the Textarea */
  className: PropTypes.string,
  /** Disable the textarea */
  disabled: PropTypes.bool,
  /** Pass a handler to the checkbox element */
  onChange: PropTypes.func,
}

export default withDeprecationWarning(
  TextareaRow,
  "TextareaRow is deprecated and will be removed in future versions. To be future-proof, use Textarea instead."
)
