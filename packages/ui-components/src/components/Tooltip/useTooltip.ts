/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"
import {
  autoUpdate,
  useFloating,
  useInteractions,
  useClick,
  useDismiss,
  useFocus,
  useHover,
  useRole,
  shift,
  offset,
  flip,
} from "@floating-ui/react"
import { ToolTipVariant, TooltipPlacement } from "./ToolTip.types"
type TriggerEvent = "click" | "hover"

export interface UseTooltipProps {
  initialOpen?: boolean
  variant?: ToolTipVariant
  placement?: TooltipPlacement
  triggerEvent?: TriggerEvent
  open?: boolean
  onOpenChange?: (_open: boolean) => void
  disabled?: boolean
}
/**
 * Hook that controls the state of the tooltip.
 *
 * @param {*} param0
 * @returns
 */
export const useTooltip = ({
  initialOpen = false,
  variant,
  placement = "top",
  triggerEvent = "click",
  open: controlledOpen,
  onOpenChange: setControlledOpen,
  disabled = false,
}: UseTooltipProps = {}) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(initialOpen)

  // open state and setter depending on whether we are controlled or uncontrolled
  const open = controlledOpen ?? uncontrolledOpen
  const setOpen = setControlledOpen ?? setUncontrolledOpen

  // configure floating-ui hooks
  const data = useFloating({
    placement,
    open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: [offset(5), flip(), shift()],
  })

  const context = data.context

  const click = useClick(context, {
    enabled: controlledOpen == null && disabled === false && triggerEvent === "click",
  })
  const hover = useHover(context, {
    move: false,
    enabled: controlledOpen == null && disabled === false && triggerEvent === "hover",
  })
  const focus = useFocus(context, {
    enabled: controlledOpen == null,
  })
  const dismiss = useDismiss(context)
  const role = useRole(context, { role: "tooltip" })

  // merge all interactions into props
  const interactions = useInteractions([click, hover, focus, dismiss, role])

  return React.useMemo(
    () => ({
      open,
      setOpen,
      variant,
      disabled,
      ...interactions,
      ...data,
    }),
    [open, setOpen, variant, disabled, interactions, data]
  )
}
