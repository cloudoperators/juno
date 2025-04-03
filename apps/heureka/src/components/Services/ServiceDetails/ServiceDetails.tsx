/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"
import {
  ContentHeading,
  Stack,
  Badge,
  Pill,
  Label,
  DataGrid,
  DataGridRow,
  DataGridHeadCell,
  DataGridCell,
  Container,
} from "@cloudoperators/juno-ui-components"
import { ServiceImageVersions } from "../common/ServiceImageVersions"
import { ImageVersionDetailsPanel } from "../common/ImageVersionDetailsPanel/ImageVersionDetailsPanel"
import { MessagesProvider, Messages } from "@cloudoperators/juno-messages-provider"
import { useStore } from "../../../store/StoreProvider"
import { SelectServiceDetailsPayload, UserView } from "../../../store/StoreProvider/types"
import { Breadcrumb } from "../../common/Breadcrumb"
import { ServiceImageVersion } from "../utils"
import { IssuesCountBadges } from "../../common/IssuesCountBadges"

export const ServiceDetails = () => {
  const { selectedView } = useStore()
  const selectedService =
    selectedView.viewId === UserView.ServiceDetails
      ? (selectedView as SelectServiceDetailsPayload).params.service
      : undefined

  const [selectedImageVersion, setSelectedImageVersion] = useState<ServiceImageVersion | null>(
    selectedView.viewId === UserView.ServiceDetails
      ? (selectedView as SelectServiceDetailsPayload).params.imageVersion || null
      : null
  )

  if (typeof selectedService === "undefined") {
    return null
  }

  return (
    <MessagesProvider>
      <Breadcrumb />
      <Messages />

      {/* Service Information Section */}
      <DataGrid columns={2} gridColumnTemplate="10% auto" className="mb-6">
        <DataGridRow>
          <DataGridHeadCell>Details</DataGridHeadCell>
          <DataGridCell>
            <Stack gap="1" direction="horizontal" wrap>
              <Pill
                pillKey="service"
                pillKeyLabel="service"
                pillValue={selectedService.name}
                pillValueLabel={selectedService.name}
              />
              {selectedService.serviceDetails?.supportGroups?.map((group) => (
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
          <DataGridHeadCell>Issues</DataGridHeadCell>
          <DataGridCell>
            <IssuesCountBadges counts={selectedService.issuesCount} />
          </DataGridCell>
        </DataGridRow>
      </DataGrid>

      {/* Image Versions Section */}
      <ServiceImageVersions
        service={selectedService}
        showFullTable={false}
        selectedImageVersion={selectedImageVersion}
        onVersionSelect={(version) => {
          setSelectedImageVersion(version)
        }}
      />

      {/* Image Version Details Panel */}
      {selectedImageVersion && (
        <ImageVersionDetailsPanel imageVersion={selectedImageVersion} onClose={() => setSelectedImageVersion(null)} />
      )}
    </MessagesProvider>
  )
}
