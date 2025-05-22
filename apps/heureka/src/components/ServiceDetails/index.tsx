/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"
import {
  Stack,
  Pill,
  DataGrid,
  DataGridRow,
  DataGridHeadCell,
  DataGridCell,
  Spinner,
} from "@cloudoperators/juno-ui-components"
import { MessagesProvider, Messages } from "@cloudoperators/juno-messages-provider"
import { useNavigate } from "@tanstack/react-router"
import { ServiceImageVersions } from "../common/ServiceImageVersions"
import { ImageVersionDetailsPanel } from "./ImageVersionDetailsPanel"
import { getNormalizedData, ServiceImageVersion } from "../Services/utils"
import { IssueCountsPerSeverityLevel } from "../common/IssueCountsPerSeverityLevel"
import SectionContentHeading from "../common/SectionContentHeading"
import { useGetServicesQuery } from "../../generated/graphql"

type ServiceDetailsProps = {
  serviceName: string
  imageVersion?: string
}

export const ServiceDetails = ({ serviceName, imageVersion }: ServiceDetailsProps) => {
  const navigate = useNavigate()
  const [selectedImageVersion, setSelectedImageVersion] = useState<ServiceImageVersion | undefined>()
  const { data, loading } = useGetServicesQuery({
    variables: {
      filter: {
        serviceCcrn: [serviceName],
      },
    },
  })

  const service = getNormalizedData(data).services[0]

  if (loading) {
    return (
      <Stack gap="2" alignment="center">
        <div>Loading</div>
        <Spinner variant="primary"></Spinner>
      </Stack>
    )
  }

  if (typeof service === "undefined") {
    return null
  }

  return (
    <MessagesProvider>
      <Messages className="mb-4" />

      <SectionContentHeading>Service {service.name}</SectionContentHeading>

      {/* Service Information Section */}
      <DataGrid columns={2} gridColumnTemplate="10% auto" className="mb-6">
        <DataGridRow>
          <DataGridHeadCell>Details</DataGridHeadCell>
          <DataGridCell>
            <Stack gap="1" direction="horizontal" wrap>
              <Pill pillKey="service" pillKeyLabel="service" pillValue={service.name} pillValueLabel={service.name} />
              {service.serviceDetails?.supportGroups?.map((group) => (
                <Pill
                  key={group}
                  pillKey="support_group"
                  pillKeyLabel="support_group"
                  pillValue={group}
                  pillValueLabel={group}
                />
              ))}
            </Stack>
          </DataGridCell>
        </DataGridRow>
        <DataGridRow>
          <DataGridHeadCell>Issues Counts</DataGridHeadCell>
          <DataGridCell>
            <IssueCountsPerSeverityLevel counts={service.issuesCount} />
          </DataGridCell>
        </DataGridRow>
      </DataGrid>

      {/* Image Versions Section */}
      <ServiceImageVersions
        service={service}
        displayActions={false}
        defaultSelectedImageVersion={imageVersion}
        onImageVersionItemClick={(iv) => {
          navigate({
            to: "/services/$service",
            params: { service: service.name },
            search: { imageVersion: iv.version },
          })
          setSelectedImageVersion(iv)
        }}
      />
      {/* Image Version Details Panel */}
      {selectedImageVersion && (
        <ImageVersionDetailsPanel
          imageVersion={selectedImageVersion}
          serviceCcrn={service.name}
          onClose={() => {
            navigate({
              to: "/services/$service",
              params: { service: service.name },
            })
            setSelectedImageVersion(undefined)
          }}
        />
      )}
    </MessagesProvider>
  )
}
