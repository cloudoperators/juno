/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Children, ReactElement } from "react"

import { Icon } from "../Icon"
import { Stack } from "../Stack/Stack.component"
import { BreadcrumbItem, BreadcrumbItemProps } from "../BreadcrumbItem/BreadcrumbItem.component"

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Additional CSS classes for styling the breadcrumb component.
   * @default ""
   */
  className?: string

  /**
   * Optional React nodes or a collection of React nodes to be rendered as custom content.
   * The `BreadcrumbItem` component is typically used.
   */
  children?: React.ReactNode
}

/**
 * The `Breadcrumb` component structures navigational links in a breadcrumb trail, providing a way to display
 * hierarchical navigation paths. It efficiently manages:
 * - Wrapping `BreadcrumbItem` or other custom components to form breadcrumb navigation.
 * - Automatic insertion of separator icons between items, enhancing visibility.
 * - Filtering out invalid React elements to prevent rendering errors.
 *
 * @component
 * @param {string} [className=""] Additional CSS classes for custom styling of the breadcrumb.
 * @param {React.ReactNode} [children] React nodes or elements that compose the breadcrumb trail. `BreadcrumbItem` is recommended.
 * @returns {React.ReactElement} A structured breadcrumb navigation component with separators.
 */
export const Breadcrumb: React.FC<BreadcrumbProps> = ({ children, className = "", ...props }) => {
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
