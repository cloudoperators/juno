/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"

import Loading from "./loading-indicator.svg"

/** An animated loading indicator. Use this to indicate loading larger portions, panels, or full views of an application. For micro-interactions or to indicate indivudally buys UI components, use Spinner. */
export const LoadingIndicator = ({
  size = "96",
  color = "",
  className = "",
  ...props
}) => {
  return (
    <Loading
      width={size}
      height={size}
      className={`${className} ${color}`}
      role="progressbar"
      {...props}
    />
  )
}

LoadingIndicator.propTypes = {
  /** The size of the LoadingIndicator as a number of pixels (without "px": "100" will render an LoadingIndicator of 100px x 100px). default is 96. */
  size: PropTypes.string,
  /** By default, the LoadingIndicator will use the `color` of the current context. In order to use a different color just for the LoadingIndicator, a text color class can be passed. These begin with "jn-text-". You can pass any other class that contains a "color:" declaration as well.*/
  color: PropTypes.string,
  /** Pass a custom className */
  className: PropTypes.string,
}
