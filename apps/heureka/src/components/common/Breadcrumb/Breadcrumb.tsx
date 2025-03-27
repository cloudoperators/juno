/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Breadcrumb as BreadcrumContainer, BreadcrumbItem, Container } from "@cloudoperators/juno-ui-components"
import { capitalizeFirstLetter } from "../Helpers/helpers"

type BreadcrumbProps = {
  selectedService?: string
  onNavigateHome?: () => void
}

export const Breadcrumb = ({ selectedService, onNavigateHome }: BreadcrumbProps) => {
  return (
    <Container py px={false}>
      <BreadcrumContainer className="flex items-center gap-2">
        <BreadcrumbItem icon="home" label="Services" onClick={onNavigateHome} />
        {selectedService && (
          <>
            <BreadcrumbItem label={capitalizeFirstLetter(selectedService)} />
          </>
        )}
      </BreadcrumContainer>
    </Container>
  )
}
