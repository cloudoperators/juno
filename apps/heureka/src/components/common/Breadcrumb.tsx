/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Breadcrumb as BreadcrumbContainer, BreadcrumbItem } from "@cloudoperators/juno-ui-components"
import { useNavigate } from "@tanstack/react-router"

export const Breadcrumb = () => {
  const navigate = useNavigate()

  return (
    <BreadcrumbContainer className="mb-6">
      <BreadcrumbItem icon="home" label="Services" onClick={() => navigate({ to: "/services" })} />
    </BreadcrumbContainer>
  )
}
