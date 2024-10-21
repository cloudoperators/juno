/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Children, ReactNode, ReactElement } from "react"

import { Icon } from "../Icon"
import { Stack } from "../Stack"
import { BreadcrumbItem, BreadcrumbItemProps } from "../BreadcrumbItem/BreadcrumbItem.component"

export interface BreadcrumbProps {
  /**
   * Additional CSS styles to apply to the breadcrumb for custom styling.
   */
  className?: string
  /**
   * Optional React nodes or a collection of React nodes to be rendered as custom content.
   * The BreadcrumbItem component is typically used.
   */
  children?: ReactNode
}

/**
 * A generic Breadcrumb component.
 * Use this to wrap BreadcrumbItem or other custom components in a breadcrumb.
 */
export const Breadcrumb: React.FC<BreadcrumbProps> = ({ children = null, className = "", ...props }) => {
  const childrenArray = Children.toArray(children).filter(React.isValidElement) // Filter out invalid elements

  // Map each child to a BreadcrumbItem and insert separators between them, except the last one
  const breadcrumbElementsWithSeparators = childrenArray.map((child, index) => (
    <React.Fragment key={index}>
      <BreadcrumbItem {...(child as ReactElement<BreadcrumbItemProps>).props} />
      {index < childrenArray.length - 1 && <Icon icon="chevronRight" />}
    </React.Fragment>
  ))

  return (
    <Stack className={`juno-breadcrumb ${className}`} gap="1" {...props}>
      {breadcrumbElementsWithSeparators}
    </Stack>
  )
}
