/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactElement } from "react"
import { DescriptionTermProps } from "../DescriptionTerm"
import { DescriptionDefinitionProps } from "../DescriptionDefinition"

export interface DescriptionListColumnProps {
  /**
   * Child components must be DescriptionTerm or DescriptionDefinition elements.
   */
  children:
    | ReactElement<DescriptionTermProps | DescriptionDefinitionProps>
    | Array<ReactElement<DescriptionTermProps | DescriptionDefinitionProps>>
  /**
   * Additional custom class names.
   */
  className?: string
}

/**
 * A column wrapper for use inside a multiColumn DescriptionList.
 * Re-establishes the grid context so that DT and DD elements render correctly within each column.
 */
export const DescriptionListColumn: React.FC<DescriptionListColumnProps> = ({ children, className = "", ...props }) => (
  <div className={`dlc jn:grid jn:grid-cols-4 jn:flex-1 ${className}`} {...props}>
    {children}
  </div>
)

export const DLC = DescriptionListColumn
