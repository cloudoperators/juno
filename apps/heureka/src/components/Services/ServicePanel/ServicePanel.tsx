/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Panel, Stack, PanelBody, Button } from "@cloudoperators/juno-ui-components"
import { capitalizeFirstLetter } from "../../common/Helpers/helpers"
import { ServiceType } from "../Services"
import { ServiceImageVersion, ServiceImageVersions } from "../common/ServiceImageVersions"

type ServicePanelProps = {
  service: ServiceType
  isLoading?: boolean
  onClose: () => void
  onShowDetails: (service: ServiceType, version?: ServiceImageVersion) => void
}

export const ServicePanel = ({ service, isLoading = false, onClose, onShowDetails }: ServicePanelProps) => {
  const handleDetailsClick = (version?: ServiceImageVersion) => {
    onClose() // Close the panel first
    onShowDetails(service, version) // Then navigate to details
  }

  return (
    <Panel heading={`${capitalizeFirstLetter(service.name)} Overview`} opened={true} onClose={onClose} size="large">
      <PanelBody>
        <Stack className="w-full">
          <ServiceImageVersions service={service} showDetailsButtons />
        </Stack>
      </PanelBody>
    </Panel>
  )
}
