/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"
import { Stack } from "../Stack/Stack.component"

/** A container to hold one or multiple buttons and space and align them. */
export const ButtonRow = ({ children = null, className = "", ...props }) => {
  return (
    <Stack
      gap="2"
      distribution="end"
      className={`juno-button-row ${className}`}
      {...props}
    >
      {children}
    </Stack>
  )
}

ButtonRow.propTypes = {
  /** Add a class to the ButtonRow */
  className: PropTypes.string,
  /** Children to render in the ButtonRow */
  children: PropTypes.node,
}
