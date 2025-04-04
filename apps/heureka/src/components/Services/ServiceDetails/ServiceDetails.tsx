/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"
import { ContentHeading, Stack, Badge, Pill, Label } from "@cloudoperators/juno-ui-components"
import { ServiceImageVersions } from "../common/ServiceImageVersions"
import { ImageVersionDetailsPanel } from "../common/ImageVersionDetailsPanel/ImageVersionDetailsPanel"
import { MessagesProvider, Messages } from "@cloudoperators/juno-messages-provider"
import { useStore } from "../../../store/StoreProvider"
import { SelectServiceDetailsPayload, UserView } from "../../../store/StoreProvider/types"
import { Breadcrumb } from "../../common/Breadcrumb"
import { ServiceImageVersion } from "../utils"

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
      <Messages className="mb-4"/>

      {/* Service Information Section */}
      <Stack gap="6" direction="vertical" className="mb-6">
        <ContentHeading>Service {selectedService.name} Information</ContentHeading>
        <Stack gap="4" direction="vertical">
          {/* Service Details Row */}
          <Stack gap="2" direction="horizontal">
            <Label text="Service Details: " />
            <Stack direction="horizontal" gap="2" wrap>
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
          </Stack>

          {/* Issues Count Row */}
          <Stack gap="2" direction="horizontal">
            <Label text="Number of Issues: " />
            <Stack direction="horizontal" gap="4" alignment="center">
              <Stack direction="horizontal" gap="2" alignment="center">
                <span>Critical:</span>
                <Badge
                  icon="danger"
                  text={`${selectedService.issuesCount.critical}`}
                  variant={selectedService.issuesCount.critical > 0 ? "danger" : "default"}
                />
              </Stack>
              <Stack direction="horizontal" gap="2" alignment="center">
                <span>High:</span>
                <Badge
                  icon="warning"
                  text={`${selectedService.issuesCount.high}`}
                  variant={selectedService.issuesCount.high > 0 ? "warning" : "default"}
                />
              </Stack>
              <Stack direction="horizontal" gap="2" alignment="center">
                <span>Medium:</span>
                <span>{selectedService.issuesCount?.medium || 0}</span>
              </Stack>
              <Stack direction="horizontal" gap="2" alignment="center">
                <span>Low:</span>
                <span>{selectedService.issuesCount?.low || 0}</span>
              </Stack>
              <Stack direction="horizontal" gap="2" alignment="center">
                <span>None:</span>
                <span>{selectedService.issuesCount?.none || 0}</span>
              </Stack>
            </Stack>
          </Stack>

          {/* Owner Row */}
          <Stack gap="2" direction="horizontal">
            <Label text="Owner: " />
            <Stack direction="horizontal" gap="2">
              {selectedService.serviceOwners?.map((owner) => (
                <Pill key={owner} pillValue={owner}>
                  {owner}
                </Pill>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Stack>

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
        <ImageVersionDetailsPanel
          imageVersion={selectedImageVersion}
          serviceCcrn={selectedService.name}
          onClose={() => setSelectedImageVersion(null)}
        />
      )}
    </MessagesProvider>
  )
}
