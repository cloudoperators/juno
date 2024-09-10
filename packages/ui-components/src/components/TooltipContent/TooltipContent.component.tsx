/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { useMergeRefs } from "@floating-ui/react"

import { Icon } from "../Icon/Icon.component"
import { useTooltipState } from "../Tooltip/Tooltip.component"
import { ToolTipVariant } from "../Tooltip/ToolTip.types"

/* Styles */
const popoverStyles = `
    jn-bg-theme-background-lvl-1
    jn-text-theme-high 
    jn-inline-flex	
  jn-items-center
    jn-p-2
    jn-rounded
    jn-drop-shadow-[0_0_4px_rgba(0,0,0,0.15)]
`

const popoverTextStyles = `
    jn-mx-4
    jn-max-w-full
`

const popoverIconStyles = `
    jn-shrink-0
`

const getIcon = (variant: ToolTipVariant) => {
  switch (variant) {
    case "error":
      return "dangerous"
    default:
      return variant
  }
}

export interface TooltipContentProps {
  /** Pass child nodes to display in the tooltip */
  children?: React.ReactNode
  /** Pass a className to render to the icon button*/
  className?: string
}

/**
 * Put content for a tooltip here. See Tooltip for more in-depth explanation and examples.
 */
export const TooltipContent = React.forwardRef<HTMLElement, TooltipContentProps>(function TooltipContent(
  { className = "", children = null, ...props },
  propRef
) {
  // get tooltip state
  const state = useTooltipState()

  // merge all refs
  const ref = useMergeRefs([state.refs.setFloating, propRef])

  const variant = state.variant

  return (
    <>
      {state.open && (
        <div
          className={`juno-tooltip juno-tooltip-${variant} ${popoverStyles} ${className}`}
          ref={ref}
          style={{
            ...state.floatingStyles,
          }}
          {...state.getFloatingProps(props)}
        >
          {variant && (
            <Icon
              icon={getIcon(variant)}
              color={`jn-text-theme-${variant}`}
              className={`juno-tooltip-popover-icon ${popoverIconStyles}`}
            />
          )}
          <p className={`${popoverTextStyles}`}>{children}</p>
        </div>
      )}
    </>
  )
})
