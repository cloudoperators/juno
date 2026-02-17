/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { forwardRef, HTMLAttributes } from "react"

const dividerStyles = `
  jn:h-px 
  jn:w-full
  jn:bg-theme-background-lvl-3
`

export interface SelectDividerProps extends HTMLAttributes<HTMLDivElement> {
  /** add a custom className */
  className?: string
}

/**
 * A visual border/divider between SelectOptions or SelectGroups
 * @see https://cloudoperators.github.io/juno/?path=/docs/forms-select-selectdivider--docs
 * @see {@link SelectDividerProps}
 */
export const SelectDivider = forwardRef<HTMLDivElement, SelectDividerProps>(
  ({ className = "", ...props }, forwardedRef) => {
    return <div className={`juno-select-divider ${dividerStyles} ${className}`} ref={forwardedRef} {...props} />
  }
)

SelectDivider.displayName = "SelectDivider"
