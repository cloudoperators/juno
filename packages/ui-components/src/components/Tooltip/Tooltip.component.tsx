/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { useTooltip, UseTooltipProps } from "./useTooltip"
import { ToolTipVariant, TooltipPlacement } from "./ToolTip.types"

// Define a type for TooltipContext, which holds the return value of useTooltip
type TooltipContextType = ReturnType<typeof useTooltip> | null

const TooltipContext = React.createContext<TooltipContextType>(null)

/**
 * This hook holds the TooltipContext.
 *
 * @returns TooltipContext
 */
export const useTooltipState = () => {
  const context = React.useContext(TooltipContext)

  if (context == null) {
    throw new Error("Tooltip components must be wrapped in <Tooltip />")
  }

  return context
}

interface TooltipProps {
  // /** The semantic variant of the tooltip, or `plain` */
  variant?: ToolTipVariant
  /** Uncontrolled Tooltip: Choose which event should trigger the opening of the tooltip (click or hover) */
  triggerEvent?: "click" | "hover"
  /** Tooltip placement in relation to trigger, default is top */
  placement?: TooltipPlacement
  /** Disable the tooltip. If this is true, the uncontrolled tooltip can't be opened anymore and the cursor hovered over the trigger will be the default cursor instead of the pointer cursor */
  disabled?: boolean
  /** Set whether tooltip should be initially rendered opened or closed. This is only evaluated if Tooltip is in uncontrolled mode */
  initialOpen?: boolean
  /** Whether the Tooltip is open. By passing this prop you turn the Tooltip into a controlled component, which means
   * you also have to take care of opening and closing it. In this case the triggerEvent prop is ignored since you're handling the trigger yourself */
  open?: boolean
  /** Pass the TooltipTrigger and TooltipContent elements as children */
  children?: React.ReactNode
}

/**
 * A tooltip component that optionally comes in the various semantic flavors (e.g. info, warning, ...). It can be used as an uncontrolled component where
 * you configure the event type that should open the tooltip (click or hover) or alternatively you can use it as a controlled component where you set the
 * open state and handle the events that open/close the tooltip yourself.
 */

export function Tooltip({
  initialOpen = false,
  placement = "top",
  variant,
  open,
  triggerEvent = "click",
  disabled = false,
  children = null,
  ...props
}: TooltipProps) {
  // This can accept any floating ui props as options, e.g. `placement`,
  // or other positioning options.
  const tooltip = useTooltip({
    initialOpen,
    placement,
    variant,
    open,
    triggerEvent,
    disabled,
    props,
  } as UseTooltipProps)
  return <TooltipContext.Provider value={tooltip}>{children}</TooltipContext.Provider>
}
