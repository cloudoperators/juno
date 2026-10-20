/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo, createContext, useContext } from "react"
import { type StackGap } from "../Stack"

// Tailwind JIT requires complete class strings — no dynamic interpolation.
const gapClass = (gap: StackGap): string => {
  switch (gap) {
    case "px": return "jn:gap-px"
    case "0.5": return "jn:gap-0.5"
    case "1": return "jn:gap-1"
    case "1.5": return "jn:gap-1.5"
    case "2": return "jn:gap-2"
    case "2.5": return "jn:gap-2.5"
    case "3": return "jn:gap-3"
    case "3.5": return "jn:gap-3.5"
    case "4": return "jn:gap-4"
    case "5": return "jn:gap-5"
    case "6": return "jn:gap-6"
    case "7": return "jn:gap-7"
    case "8": return "jn:gap-8"
    case "9": return "jn:gap-9"
    case "10": return "jn:gap-10"
    case "11": return "jn:gap-11"
    case "12": return "jn:gap-12"
    case "14": return "jn:gap-14"
    case "16": return "jn:gap-16"
    case "20": return "jn:gap-20"
    case "24": return "jn:gap-24"
    case "28": return "jn:gap-28"
    case "32": return "jn:gap-32"
    case "36": return "jn:gap-36"
    case "40": return "jn:gap-40"
    case "44": return "jn:gap-44"
    case "48": return "jn:gap-48"
    case "52": return "jn:gap-52"
    case "56": return "jn:gap-56"
    case "60": return "jn:gap-60"
    case "64": return "jn:gap-64"
    case "72": return "jn:gap-72"
    case "80": return "jn:gap-80"
    case "96": return "jn:gap-96"
    default: return "jn:gap-0"
  }
}

interface DescriptionListContextValue {
  termWidth?: string
  gridColumnTemplate?: string
}

export const DescriptionListContext = createContext<DescriptionListContextValue>({})

export const useDescriptionListContext = () => useContext(DescriptionListContext)

export interface DescriptionListProps {
  /**
   * Child components must be either DescriptionTerm or DescriptionDefinition to maintain semantic structure.
   * Supports multiple instances to create a detailed list of terms and definitions.
   * When multiColumn is true, children should be DescriptionListColumn elements.
   */
  children?: React.ReactNode
  /**
   * Determines the alignment of terms within the list. Align terms to the left or right based on preference for display style.
   */
  alignTerms?: "left" | "right"
  /**
   * When true, switches the layout to flex so that DescriptionListColumn children render side by side.
   */
  multiColumn?: boolean
  /**
   * Sets the gap between columns. Only applies when multiColumn is true. Accepts any Tailwind spacing
   * token (e.g. "4", "6", "8"). Has no effect when multiColumn is false.
   */
  gap?: StackGap
  /**
   * Controls the width of the term column. Accepts "auto" (default — terms size to their content),
   * a percentage string (e.g. "25%", "33%"), or any valid CSS column width value (e.g. "200px", "12rem").
   * The definition column takes the remaining space.
   * This value is inherited by DescriptionListColumn children unless they set their own termWidth.
   */
  termWidth?: string
  /** Custom CSS grid-template-columns. Overwrites other sizing props. Useful for non-standard layouts such as multiple definitions per term. Inherited by DescriptionListColumn children via context unless they set their own gridColumnTemplate. */
  gridColumnTemplate?: string
  /**
   * Additional custom class names to apply styles to the <dl> element or to extend styling from the design system.
   */
  className?: string
}

/**
 * A component that semantically represents a list of terms and their corresponding descriptions.
 * This component enforces structure by expecting child elements of DescriptionTerm or DescriptionDefinition,
 * aligning them according to the specified terms alignment.
 */
export const DescriptionList: React.FC<DescriptionListProps> = ({
  children,
  alignTerms = "right",
  multiColumn = false,
  gap,
  termWidth = "auto",
  gridColumnTemplate,
  className = "",
  ...props
}) => {
  const contextValue = useMemo(() => ({ termWidth, gridColumnTemplate }), [termWidth, gridColumnTemplate])
  return (
    <DescriptionListContext.Provider value={contextValue}>
      <dl
        className={`dl ${multiColumn ? "jn:flex" : "jn:grid"} jn:group ${alignTerms === "right" ? "align-right" : "align-left"} ${multiColumn && gap ? gapClass(gap) : ""} ${className}`}
        style={!multiColumn ? { gridTemplateColumns: gridColumnTemplate ?? `${termWidth} 1fr` } : undefined}
        {...props}
      >
        {children}
      </dl>
    </DescriptionListContext.Provider>
  )
}

export const DL = DescriptionList
