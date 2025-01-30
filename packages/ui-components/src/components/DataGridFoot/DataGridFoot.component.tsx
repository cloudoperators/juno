/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

export const DataGridFoot: React.FC<DataGridFootProps> = ({ className = "", children, ...props }) => {
  return (
    <tfoot className={`juno-datagrid-foot ${className}`} {...props}>
      {children}
    </tfoot>
  )
}

export interface DataGridFootProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  /** Children to render in the DataGridFoot */
  children?: React.ReactNode
  /** Add a classname */
  className?: string
}
