/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import {
  useFloating,
  flip,
  offset,
  shift,
  size,
  autoUpdate,
  useInteractions,
  useClick,
  useDismiss,
  Placement,
} from "@floating-ui/react"
import { ComboBoxFloating } from "../types"

/**
 * Custom hook for ComboBox floating UI functionality.
 * Provides positioning, interaction handling, and responsive sizing for dropdown menus.
 *
 * @param isOpen - Explains it controls dropdown visibility state
 * @param setIsOpen - Describes the state setter function's purpose
 * @returns - Details what the returned object contains (positioning, refs, prop getters)
 */
export function useComboBoxFloating(
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
): ComboBoxFloating {
  // Floating UI setup
  const { x, y, strategy, refs, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: "bottom-start" as Placement,
    middleware: [
      offset(4),
      shift(),
      flip(),
      size({
        apply({ availableWidth, availableHeight, elements, rects }) {
          Object.assign(elements.floating.style, {
            maxWidth: `${availableWidth}px`,
            maxHeight: `${availableHeight}px`,
            minWidth: `${rects.reference.width}px`,
            overflowY: "auto",
          })
        },
      }),
    ],
    whileElementsMounted: autoUpdate,
  })

  // Setup interactions
  const { getReferenceProps, getFloatingProps } = useInteractions([useClick(context), useDismiss(context)])

  return { x, y, strategy, refs, getReferenceProps, getFloatingProps }
}
