/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"
import { Icon } from "../Icon/Icon.component.js"

const pillStyles = (onClick) => {
  return `
    jn-inline-flex
    jn-basis-auto
    jn-shrink
    jn-items-center
    jn-flex-nowrap
    jn-text-xs
    jn-p-px
    jn-border
    jn-rounded
    jn-border-theme-background-lvl-4
    jn-group
    ${onClick ? "jn-cursor-pointer" : ""}
  `
}

const pillKeyStyles = (onClick) => {
  return `
    jn-bg-theme-background-lvl-4
    jn-text-theme-high
    ${onClick ? "group-hover:jn-text-theme-highest" : ""}
    jn-px-1
    jn-py-0.5
    jn-rounded-sm
    jn-inline-block
  `
}

const pillValueStyles = (onClick) => {
  return `
    jn-px-1
    jn-py-0.5
    jn-text-theme-high
    ${onClick ? "group-hover:jn-text-theme-highest" : ""}
    jn-inline-block
  `
}

/**
A Pill to represent a value, or key and value. Can e.g. be used to represent selected filter values in a filter component. Can optionally be closed. On close the uid, if provided, or the pillKey is returned in the callback.
 */
export const Pill = ({
  uid = "",
  pillKey = "",
  pillKeyLabel = "",
  pillValue = "",
  pillValueLabel = "",
  closeable = false,
  onClick = undefined,
  onClose = undefined,
  className = "",
  ...props
}) => {
  const handleCloseClick = (event) => {
    onClose && onClose(event, uid || pillKey || pillValue)
  }

  const handleClick = (event) => {
    onClick && onClick(event, uid || pillKey || pillValue)
  }

  return (
    <div className={`juno-pill ${pillStyles(onClick)} ${className}`} {...props}>
      {!pillValue && !pillValueLabel ? (
        <span className={`${pillValueStyles}`}>
          set pillValue or pillValueLabel
        </span>
      ) : (
        <>
          {(pillKeyLabel || pillKey) && (
            <span
              className={`pill-key ${pillKeyStyles(onClick)}`}
              onClick={(e) => handleClick(e)}
            >
              {pillKeyLabel || pillKey}
            </span>
          )}
          <span
            className={`pill-value ${pillValueStyles(onClick)}`}
            onClick={(e) => handleClick(e)}
          >
            {pillValueLabel || pillValue}
          </span>
        </>
      )}
      {closeable && (
        <Icon icon="close" size="18" onClick={(e) => handleCloseClick(e)} />
      )}
    </div>
  )
}

Pill.propTypes = {
  /** The unique identifier of the pill. Returned by the onClose callback */
  uid: PropTypes.string,
  /** The key of the filter the pill represents. Returned by the onClose callback if uid undefined. Optional. */
  pillKey: PropTypes.string,
  /** The visible label to describe the pill key. If not set pillKey is used. Optional. */
  pillKeyLabel: PropTypes.string,
  /** The value of filter the pill represents. Returned by the onClose callback if uid and pillKey undefined */
  pillValue: PropTypes.string.isRequired,
  /** The visible label to describe the pill value. If not set pillValue is used. Optional. */
  pillValueLabel: PropTypes.string,
  /** add custom classNames */
  className: PropTypes.string,
  /** Whether the pill should be closeable */
  closeable: PropTypes.bool,
  /** Pass a handler to be executed when closing the Pill. Also returns the event and the uid (fallback: pillKey -> fallback: pillValue) */
  onClose: PropTypes.func,
  /** Pass a handler to be executed when clicking on the Pill (but not on the close button). Also returns the event and the uid (fallback: pillKey -> fallback: pillValue) */
  onClick: PropTypes.func,
}
