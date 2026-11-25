/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { cloneElement, forwardRef, HTMLAttributes, HTMLProps, isValidElement, ReactNode, RefObject } from "react"

import { useMergeRefs } from "@floating-ui/react"

import { useTooltipState } from "../Tooltip/Tooltip.component"

export interface TooltipTriggerProps extends HTMLAttributes<HTMLElement> {
  /** If true, the child you passed to the TooltipTrigger is rendered as the trigger element, instead of the default trigger component. This is useful if you e.g. want to use a Button or Icon as the trigger. */
  asChild?: boolean
  /** Pass child nodes to display in the tooltip */
  children?: ReactNode
  /** Pass a className to render to the trigger element */
  className?: string
}
type CustomProps = HTMLProps<HTMLElement> & {
  "data-state"?: string
}
/**
 * This is the trigger element for a tooltip. See Tooltip for more in-depth explanation and examples.
 * @see https://cloudoperators.github.io/juno/?path=/docs/components-tooltip-tooltiptrigger--docs
 * @see {@link TooltipTriggerProps}
 */
export const TooltipTrigger = forwardRef<HTMLElement, TooltipTriggerProps>(function TooltipTrigger(
  { children, asChild = false, className = "", ...props },
  propRef
) {
  const state = useTooltipState()

  // Extract the child's ref before any hook calls so both useMergeRefs calls below
  // can be made unconditionally at the top level. The Rules of Hooks require that the
  // number of hook calls per render never depends on a condition. useMergeRefs silently skips null entries.
  const childrenRef = isValidElement(children)
    ? ((children.props as CustomProps).ref as RefObject<HTMLElement>)
    : null

  // buttonRef: used by the default <button> branch
  const buttonRef = useMergeRefs([state.refs?.setReference, propRef])
  // asChildRef: used by the asChild branch; includes the child element's own ref
  const asChildRef = useMergeRefs([state.refs?.setReference, propRef, childrenRef])

  // `asChild` allows the user to pass any element as the anchor
  if (asChild && isValidElement(children)) {
    const childrenProps = children.props as CustomProps

    const referencedProps = {
      ref: asChildRef,
      ...props,
      ...childrenProps,
      "data-state": state.open ? "open" : "closed",
      className: `juno-tooltip-trigger ${childrenProps.className ?? ""}${state.disabled ? " jn:cursor-default" : ""}`,
    }
    const combinedProps = state.getReferenceProps(referencedProps)

    return cloneElement(children, combinedProps)
  }

  return (
    <button
      ref={buttonRef}
      // The user can style the trigger based on the state
      data-state={state.open ? "open" : "closed"}
      {...state.getReferenceProps(props)}
      className={`juno-tooltip-trigger ${className}${state.disabled ? " jn:cursor-default" : ""}`}
    >
      {children}
    </button>
  )
})
