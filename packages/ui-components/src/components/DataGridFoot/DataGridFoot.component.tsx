/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { HTMLAttributes, ReactNode } from "react"

/**
 * `DataGridFoot` is used to display a footer section for a `DataGrid`, supporting summary data or controls
 * related to the grid content. It is styled consistently with other grid sections.
 */
export const DataGridFoot = ({ className = "", children, ...props }: DataGridFootProps): ReactNode => {
  return (
    <tfoot className={`juno-datagrid-foot ${className}`} {...props}>
      {children}
    </tfoot>
  )
}

export interface DataGridFootProps extends HTMLAttributes<HTMLTableSectionElement> {
  /**
   * Elements or components to render within the DataGridFoot.
   */
  children?: ReactNode

  /**
   * Custom CSS class names for styling.
   * @default ""
   */
  className?: string
}
