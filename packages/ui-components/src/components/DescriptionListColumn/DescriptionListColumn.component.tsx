/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactElement } from "react"
import { DescriptionTermProps } from "../DescriptionTerm"
import { DescriptionDefinitionProps } from "../DescriptionDefinition"
import { useDescriptionListContext } from "../DescriptionList/DescriptionList.component"

export interface DescriptionListColumnProps {
  /**
   * Child components must be DescriptionTerm or DescriptionDefinition elements.
   */
  children:
    | ReactElement<DescriptionTermProps | DescriptionDefinitionProps>
    | Array<ReactElement<DescriptionTermProps | DescriptionDefinitionProps>>
  /**
   * Controls the width of the term column within this column. Accepts "auto" (default — terms size to their content),
   * a percentage string (e.g. "25%", "33%"), or any valid CSS column width value (e.g. "200px", "12rem").
   * Inherits the parent DescriptionList's termWidth when not set. Overrides the parent value when set.
   */
  termWidth?: string
  /** Custom CSS grid-template-columns. Overwrites other sizing props. Useful for non-standard layouts such as multiple definitions per term. */
  gridColumnTemplate?: string
  /**
   * Additional custom class names.
   */
  className?: string
}

/**
 * A column wrapper for use inside a multiColumn DescriptionList.
 * Re-establishes the grid context so that DT and DD elements render correctly within each column.
 */
export const DescriptionListColumn: React.FC<DescriptionListColumnProps> = ({
  children,
  termWidth,
  gridColumnTemplate,
  className = "",
  ...props
}) => {
  const { termWidth: contextTermWidth } = useDescriptionListContext()
  const resolvedTermWidth = termWidth ?? contextTermWidth ?? "auto"

  return (
    <div
      className={`dlc jn:grid jn:flex-1 ${className}`}
      style={{ gridTemplateColumns: gridColumnTemplate ?? `${resolvedTermWidth} 1fr` }}
      {...props}
    >
      {children}
    </div>
  )
}

export const DLC = DescriptionListColumn
