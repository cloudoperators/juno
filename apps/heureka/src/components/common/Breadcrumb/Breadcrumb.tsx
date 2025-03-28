/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Breadcrumb as BreadcrumContainer, BreadcrumbItem, Container } from "@cloudoperators/juno-ui-components"

export const Breadcrumb = () => {
  return (
    <Container py px={false}>
      <BreadcrumContainer>
        <BreadcrumbItem icon="home" label="Services" />
      </BreadcrumContainer>
    </Container>
  )
}
