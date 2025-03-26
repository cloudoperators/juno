/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import {
  Container,
  ContentHeading,
  Stack,
  Button,
  Icon,
  Breadcrumb,
  BreadcrumbItem,
} from "@cloudoperators/juno-ui-components"
import { ServiceType } from "../Services"
import { ServiceImageVersion, ServiceImageVersions } from "../common/ServiceImageVersions"
import { capitalizeFirstLetter } from "../../common/Helpers/helpers"
import { MessagesProvider, Messages } from "@cloudoperators/juno-messages-provider"

type ServiceDetailsProps = {
  selectedService: ServiceType
  selectedImageVersion?: ServiceImageVersion
  onBack: () => void
  onShowDetails: (service: ServiceType, version?: ServiceImageVersion) => void
}

export const ServiceDetails = ({ selectedService, selectedImageVersion, onBack, onShowDetails }: ServiceDetailsProps) => {
  return (
    <MessagesProvider>
      <Container py px>
        <Messages />
        <Stack gap="6">
          {/* Breadcrumb navigation */}
          <Breadcrumb>
            <BreadcrumbItem>
              <Button variant="subdued" onClick={onBack}>
                Services
              </Button>
            </BreadcrumbItem>
            <BreadcrumbItem active>
              {capitalizeFirstLetter(selectedService.name)}
            </BreadcrumbItem>
          </Breadcrumb>

          {/* Service Overview Section */}
          <Stack gap="4">
            <ContentHeading>Service Overview</ContentHeading>
            <Stack gap="2">
              <Stack gap="1" direction="horizontal" alignment="center">
                <Icon icon="info" />
                <span>Service Name: {selectedService.name}</span>
              </Stack>
              <Stack gap="1" direction="horizontal" alignment="center">
                <Icon icon="warning" />
                <span>Critical Issues: {selectedService.issuesCount?.critical || 0}</span>
                <span>High Issues: {selectedService.issuesCount?.high || 0}</span>
              </Stack>
              <Stack gap="1" direction="horizontal" alignment="center">
                <Icon icon="accountCircle" />
                <span>Support Groups: {selectedService.serviceDetails?.supportGroups?.join(", ")}</span>
              </Stack>
              <Stack gap="1" direction="horizontal" alignment="center">
                <Icon icon="accountCircle" />
                <span>Service Owners: {selectedService.serviceOwners?.join(", ")}</span>
              </Stack>
            </Stack>
          </Stack>

          {/* Image Versions Section */}
          <Stack gap="4">
            <ContentHeading>Image Versions</ContentHeading>
            <ServiceImageVersions
              serviceName={selectedService.name}
              onDetailsClick={(version) => onShowDetails(selectedService, version)}
              className="service-details-grid"
            />
          </Stack>
        </Stack>
      </Container>
    </MessagesProvider>
  )
} 