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
} = {}) => {
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

// export function useTooltip({
//   initialOpen = false,
//   placement = "top",
//   open: controlledOpen,
//   onOpenChange: setControlledOpen
// } = {}) {
//   const [uncontrolledOpen, setUncontrolledOpen] = React.useState(initialOpen)

//   const open = controlledOpen ?? uncontrolledOpen
//   const setOpen = setControlledOpen ?? setUncontrolledOpen

//   const data = useFloating({
//     placement,
//     open,
//     onOpenChange: setOpen,
//     whileElementsMounted: autoUpdate,
//     middleware: [offset(5), flip(), shift()]
//   })

//   const context = data.context

//   const hover = useHover(context, {
//     move: false,
//     enabled: controlledOpen == null
//   })
//   const focus = useFocus(context, {
//     enabled: controlledOpen == null
//   })
//   const dismiss = useDismiss(context)
//   const role = useRole(context, { role: "tooltip" })

//   const interactions = useInteractions([hover, focus, dismiss, role])

//   return React.useMemo(
//     () => ({
//       open,
//       setOpen,
//       ...interactions,
//       ...data
//     }),
//     [open, setOpen, interactions, data]
//   )
// }
