/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Children } from "react"
import PropTypes from "prop-types"
import { BreadcrumbItem } from "../BreadcrumbItem/index"
import { Stack } from "../Stack/Stack.component"
import { Icon } from "../Icon/Icon.component"

const breadcrumbstyles = `

`
/** Generic breadcrumb component. Use this to Wrap `Breadcrumb` items or custom children in a breadcrumb. */
export const Breadcrumb = ({ children = null, className = "", ...props }) => {
  const breadcrumbArray = Children.toArray(children)
  const breadcrumbArrayWithSeparators = []

  breadcrumbArray.forEach((child, i) => {
    breadcrumbArrayWithSeparators.push(
      <React.Fragment key={i}>
        <BreadcrumbItem {...child.props} />
        {i < breadcrumbArray.length - 1 ? <Icon icon="chevronRight" /> : null}
      </React.Fragment>
    )
  })

  return (
    <Stack className={`juno-breadcrumb ${breadcrumbstyles} ${className}`} gap="1" key="stck" {...props}>
      {breadcrumbArrayWithSeparators}
    </Stack>
  )
}

Breadcrumb.propTypes = {
  /** Pass a custom className */
  className: PropTypes.string,
  /** The children to render. Typically use the BreadcrumbItem component. */
  children: PropTypes.node,
}
