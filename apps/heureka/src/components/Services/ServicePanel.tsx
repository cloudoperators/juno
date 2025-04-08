/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Panel, PanelBody } from "@cloudoperators/juno-ui-components"
import { capitalizeFirstLetter } from "../../utils"
import { ServiceType } from "./Services"
import { ServiceImageVersions } from "../common/ServiceImageVersions"

type ServicePanelProps = {
  service: ServiceType
  onClose: () => void
}

export const ServicePanel = ({ service, onClose }: ServicePanelProps) => (
  <Panel heading={`${capitalizeFirstLetter(service.name)} Overview`} opened={true} onClose={onClose} size="large">
    <PanelBody>
      <ServiceImageVersions service={service} displayActions />
    </PanelBody>
  </Panel>
)
