/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

import { useMergeRefs } from "@floating-ui/react"

import { useTooltipState } from "../Tooltip/Tooltip.component"

export interface TooltipTriggerProps {
  /** If true, the child you passed to the TooltipTrigger is rendered as the trigger element, instead of the default trigger component. This is useful if you e.g. want to use a Button or Icon as the trigger. */
  asChild?: boolean
  /** Pass child nodes to display in the tooltip */
  children?: React.ReactNode
  /** Pass a className to render to the trigger element */
  className?: string
}
type CustomProps = React.HTMLProps<HTMLElement> & {
  "data-state"?: string
}
/**
 * This is the trigger element for a tooltip. See Tooltip for more in-depth explanation and examples.
 */
export const TooltipTrigger = React.forwardRef<HTMLElement, TooltipTriggerProps>(function TooltipTrigger(
  { children = null, asChild = false, className = "", ...props },
  propRef
) {
  // get state
  const state = useTooltipState()

  // merge all the refs
  const ref = useMergeRefs([state.refs.setReference, propRef])
  // `asChild` allows the user to pass any element as the anchor
  if (asChild && React.isValidElement(children)) {
    const childrenProps = children.props as CustomProps
    const childrenRef = childrenProps.ref as React.RefObject<HTMLElement>
    const ref = useMergeRefs([state.refs.setReference, propRef, childrenRef])

    const referencedProps = {
      ref,
      ...props,
      ...childrenProps,
      "data-state": state.open ? "open" : "closed",
      className: childrenProps.className + `${state.disabled && " jn-cursor-default"}`,
    }
    const combinedProps = state.getReferenceProps(referencedProps)

    return React.cloneElement(children, combinedProps)
  }

  return (
    <button
      ref={ref}
      // The user can style the trigger based on the state
      data-state={state.open ? "open" : "closed"}
      {...state.getReferenceProps(props)}
      className={`${className} ${state.disabled && " jn-cursor-default"}`}
    >
      {children}
    </button>
  )
})
