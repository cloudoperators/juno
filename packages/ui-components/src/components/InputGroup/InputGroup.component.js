/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Stack } from "../Stack/index"
import "./input-group.scss"
import PropTypes from "prop-types"



/** A component to visually group Buttons, TextInput, and Select elements. */
export const InputGroup = ({
  children,
  className,
  variant,
  disabled,
  ...props
}) => {
  
  const modifiedChildren = () => {
    return React.Children.map(children, (child) => {
      const ownVariant = child.props.variant || variant
      const ownDisabled = child.props.disabled || disabled
      return React.cloneElement(child, { 
        variant: ownVariant,
        disabled: ownDisabled
      })
    })
  }
  
  return (
    <Stack className={`juno-input-group juno-input-group-${variant} ${ disabled ? "juno-input-group-disabled" : "" } ${className}`} {...props}>
      { modifiedChildren() }
    </Stack>
  )
}

InputGroup.propTypes = {
  /** The children to render */
  children: PropTypes.node,
  /** Pass a className to the group */
  className: PropTypes.string,
  /** Passing a variant prop to the group will set all child Buttons and Select elements to use that variant, unless specified otherwise on the individual child component */
  variant: PropTypes.oneOf(["default", "primary", "primary-danger", "subdued"]),
  /** Disable all elements in the InputGroup */
  disabled: PropTypes.bool,
}

InputGroup.defaultProps = {
  children: null,
  className: undefined,
  variant: "default",
  disabled: false,
}
