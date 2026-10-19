/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactElement, createContext, useContext } from "react"
import { DescriptionTermProps } from "../DescriptionTerm"
import { DescriptionDefinitionProps } from "../DescriptionDefinition"

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
  children:
    | ReactElement<DescriptionTermProps | DescriptionDefinitionProps>
    | Array<ReactElement<DescriptionTermProps | DescriptionDefinitionProps>>
    | ReactElement<"div">
  /**
   * Determines the alignment of terms within the list. Align terms to the left or right based on preference for display style.
   */
  alignTerms?: "left" | "right"
  /**
   * When true, switches the layout to flex so that DescriptionListColumn children render side by side.
   */
  multiColumn?: boolean
  /**
   * Controls the width of the term column. Accepts "auto" (default — terms size to their content),
   * a percentage string (e.g. "25%", "33%"), or any valid CSS column width value (e.g. "200px", "12rem").
   * The definition column takes the remaining space. Has no effect when multiColumn is true.
   * When used with multiColumn, this value is inherited by DescriptionListColumn children unless they set their own termWidth.
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
  termWidth = "auto",
  gridColumnTemplate,
  className = "",
  ...props
}) => (
  <DescriptionListContext.Provider value={{ termWidth, gridColumnTemplate }}>
    <dl
      className={`dl ${multiColumn ? "jn:flex" : "jn:grid"} jn:group ${alignTerms === "right" ? "align-right" : "align-left"} ${className}`}
      style={!multiColumn ? { gridTemplateColumns: gridColumnTemplate ?? `${termWidth} 1fr` } : undefined}
      {...props}
    >
      {children}
    </dl>
  </DescriptionListContext.Provider>
)

export const DL = DescriptionList
