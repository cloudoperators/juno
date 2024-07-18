/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"
import { Select } from "../Select/index.js"
import { FormRow } from "../FormRow/index.js"
import { withDeprecationWarning } from "../withDeprecationWarning/index.js"

/** DEPRECATED: A select group containing a select, an associated label, and necessary structural markup. This component is DEPRECATED, use Select instead. */
const SelectRow = ({
  name,
  variant,
  label,
  id,
  helptext,
  required,
  className,
  disabled,
  invalid,
  errortext,
  valid,
  placeholder,
  successtext,
  children,
  value,
  onValueChange,
  onChange,
  onOpenChange,
  defaultValue,
  open,
  error,
  loading,
  ...props
}) => {
  return (
    <FormRow>
      <Select
        name={name}
        id={id}
        label={label}
        required={required}
        placeholder={placeholder}
        onChange={onValueChange || onChange}
        onOpenChange={onOpenChange}
        disabled={disabled}
        invalid={invalid}
        valid={valid}
        value={value}
        variant={variant}
        defaultValue={defaultValue}
        open={open}
        error={error}
        loading={loading}
        errortext={errortext}
        helptext={helptext}
        successtext={successtext}
        className={className}
        {...props}
      >
        {children}
      </Select>
    </FormRow>
  )
}

SelectRow.propTypes = {
  /** Name attribute of the input */
  name: PropTypes.string,
  /** Label text */
  label: PropTypes.string,
  /** The placeholder to show in the Select if no value is selected. defaults to "Select…". */
  placeholder: PropTypes.string,
  /** Id */
  id: PropTypes.string,
  /** Help text */
  helptext: PropTypes.node,
  /** Specify whether the select is required */
  required: PropTypes.bool,
  /** Pass a classname */
  className: PropTypes.string,
  /** Disable the select */
  disabled: PropTypes.bool,
  /** Whether the SelectRow is invalid */
  invalid: PropTypes.bool,
  /** The error text to display in the SelectGroup. WHen passed, the SelectGroup will be invalidated automatically.*/
  errortext: PropTypes.string,
  /** Children to render */
  children: PropTypes.node,
  /** Passing a value turns the select into a controlled component. If you pass a value you must also specify an onChange handler to deal with value changes */
  value: PropTypes.string,
  /** The semantic variant of the Select toggle button.*/
  variant: PropTypes.oneOf(["default", "primary", "primary-danger", "subdued"]),
  /** Pass a handler to the Select element to execute once the value changes */
  onValueChange: PropTypes.func,
  /** Deprecated: Use `onValueChange` instead. */
  onChange: PropTypes.func,
  /** Pass handler to execute once the Selects open state changes */
  onOpenChange: PropTypes.func,
  /** Pass a default Value that should be selected initially. Use this if you want to use the select as an uncontrolled component. */
  defaultValue: PropTypes.string,
  /** Whether the Select is open */
  open: PropTypes.bool,
  /** Whether the Select has an error, e.g. when loading necessary option data failed. When the Select has been negatively validated, use `invalid` instead. */
  error: PropTypes.bool,
  /** Whether the Select is currently busy loading options. Will display a Spinner Icon. */
  loading: PropTypes.bool,
}

SelectRow.defaultProps = {
  name: null,
  label: null,
  placeholder: "Select…",
  id: null,
  required: null,
  className: "",
  helptext: null,
  disabled: null,
  invalid: false,
  errortext: "",
  value: undefined,
  onValueChange: undefined,
  onChange: undefined,
  onOpenChange: undefined,
  defaultValue: undefined,
  open: undefined,
  error: undefined,
  loading: undefined,
}

export default withDeprecationWarning(
  SelectRow,
  "SelectRow is deprecated and will be removed in future versions. To be future-proof, use Select instead."
)
