/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Panel, PanelBody } from "@cloudoperators/juno-ui-components"
import { capitalizeFirstLetter } from "../../../utils"
import { ServiceImageVersions } from "../../common/ServiceImageVersions"
import { ServiceType } from "../../types"
import { useNavigate } from "@tanstack/react-router"

type ServicePanelProps = {
  service: ServiceType
  onClose: () => void
}

export const ServicePanel = ({ service, onClose }: ServicePanelProps) => {
  const navigate = useNavigate()
  return (
    <Panel heading={`${capitalizeFirstLetter(service.name)} Overview`} opened={true} onClose={onClose} size="large">
      <PanelBody>
        <ServiceImageVersions
          service={service}
          onDetailsButtonClick={(imageVersion) =>
            navigate({
              to: "/services/$service",
              params: { service: service.name },
              search: { imageVersion: imageVersion?.version },
            })
          }
          displayActions
        />
      </PanelBody>
    </Panel>
  )
}
