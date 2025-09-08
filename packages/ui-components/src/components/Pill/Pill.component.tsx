/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { FC } from "react"
import { Icon } from "../Icon"

// eslint-disable-next-line no-unused-vars
type EventHandler = (event: React.MouseEvent<HTMLElement>, id: string) => void

const pillStyles = (onClick: boolean) => {
  return `
    jn:inline-flex
    jn:basis-auto
    jn:shrink
    jn:items-center
    jn:flex-nowrap
    jn:text-xs
    jn:p-px
    jn:border
    jn:rounded
    jn:border-theme-background-lvl-4
    jn:group
    ${onClick ? "jn:cursor-pointer" : ""}
  `
}

const pillKeyStyles = (onClick: boolean) => {
  return `
    jn:bg-theme-background-lvl-4
    jn:text-theme-high
    ${onClick ? "jn:group-hover:text-theme-highest" : ""}
    jn:px-1
    jn:py-0.5
    jn:rounded-sm
    jn:inline-block
  `
}

const pillValueStyles = (onClick: boolean) => {
  return `
    jn:px-1
    jn:py-0.5
    jn:text-theme-high
    ${onClick ? "jn:group-hover:text-theme-highest" : ""}
    jn:inline-block
  `
}

/**
A Pill to represent a value, or key and value. Can e.g. be used to represent selected filter values in a filter component. Can optionally be closed. On close the uid, if provided, or the pillKey is returned in the callback.
 */
export const Pill: FC<PillProps> = ({
  uid = "",
  pillKey = "",
  pillKeyLabel = "",
  pillValue = "",
  pillValueLabel = "",
  closeable = false,
  onClick,
  onClose,
  className = "",
  ...props
}) => {
  const handleCloseClick = (event: React.MouseEvent<HTMLElement>) => {
    onClose && onClose(event, uid || pillKey || pillValue)
  }

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    onClick && onClick(event, uid || pillKey || pillValue)
  }

  return (
    <div className={`juno-pill ${pillStyles(!!onClick)} ${className}`} {...props} data-row-stop-propagation>
      {!pillValue && !pillValueLabel ? (
        <span className={`${pillValueStyles(false)}`}>set pillValue or pillValueLabel</span>
      ) : (
        <>
          {(pillKeyLabel || pillKey) && (
            <span className={`pill-key ${pillKeyStyles(!!onClick)}`} onClick={handleClick}>
              {pillKeyLabel || pillKey}
            </span>
          )}
          <span className={`pill-value ${pillValueStyles(!!onClick)}`} onClick={handleClick}>
            {pillValueLabel || pillValue}
          </span>
        </>
      )}
      {closeable && <Icon icon="close" size={18} onClick={handleCloseClick} />}
    </div>
  )
}

export interface PillProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onClick"> {
  /** The unique identifier of the pill. Returned by the onClose callback */
  uid?: string
  /** The key of the filter the pill represents. Returned by the onClose callback if uid undefined. Optional. */
  pillKey?: string
  /** The visible label to describe the pill key. If not set pillKey is used. Optional. */
  pillKeyLabel?: string
  /** The value of filter the pill represents. Returned by the onClose callback if uid and pillKey undefined */
  pillValue: string
  /** The visible label to describe the pill value. If not set pillValue is used. Optional. */
  pillValueLabel?: string
  /** Add custom classNames */
  className?: string
  /** Whether the pill should be closeable */
  closeable?: boolean
  /** Pass a handler to be executed when closing the Pill. Also returns the event and the uid (fallback: pillKey -> fallback: pillValue) */
  onClose?: EventHandler
  /** Pass a handler to be executed when clicking on the Pill (but not on the close button). Also returns the event and the uid (fallback: pillKey -> fallback: pillValue) */
  onClick?: EventHandler
}
