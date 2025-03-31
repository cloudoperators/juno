/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"
import { ContentHeading, Stack, Badge, Pill, Label } from "@cloudoperators/juno-ui-components"
import { ServiceImageVersions } from "../common/ServiceImageVersions"
import { MessagesProvider, Messages } from "@cloudoperators/juno-messages-provider"
import { useStore } from "../../../store/StoreProvider"
import { SelectServiceDetailsPayload, UserView } from "../../../store/StoreProvider/types"
import { Breadcrumb } from "../../common/Breadcrumb"

export const ServiceDetails = () => {
  const { selectedView } = useStore()
  const [showOccurrences, setShowOccurrences] = useState(false)

  const selectedService =
    selectedView.viewId === UserView.ServiceDetails
      ? (selectedView as SelectServiceDetailsPayload).params.service
      : undefined

  const selectedImageVersion =
    selectedView.viewId === UserView.ServiceDetails
      ? (selectedView as SelectServiceDetailsPayload).params.imageVersion
      : undefined

  if (typeof selectedService === "undefined") {
    return null
  }

  return (
    <MessagesProvider>
      <Breadcrumb />
      <Messages />
      <Stack gap="8" direction="vertical" className="overflow-auto w-full">
        {/* Service Information Section */}
        <Stack gap="6" direction="vertical" className="w-full">
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
                {/* <span>{totalIssues}</span> */}
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
        <Stack className="w-full">
          <ServiceImageVersions
            service={selectedService}
            onVersionSelect={(version) => {
              // This will be handled by the store through the ServiceImageVersions component
            }}
          />
        </Stack>

        {/* Selected Image Version Details Section */}
        {selectedImageVersion && (
          <Stack gap="6" direction="vertical" className="w-full">
            <ContentHeading>Image {selectedImageVersion.imageRepository} Information</ContentHeading>
            <Stack gap="4" direction="vertical">
              {/* Component Details Row */}
              <Stack gap="2" direction="horizontal">
                <Label text="Image Details: " />
                <Stack direction="horizontal" gap="2" wrap>
                  <Pill
                    pillKey="tag"
                    pillKeyLabel="tag"
                    pillValue={selectedImageVersion.imageTag}
                    pillValueLabel={selectedImageVersion.imageTag}
                  />
                  <Pill
                    pillKey="repository"
                    pillKeyLabel="repository"
                    pillValue={selectedImageVersion.imageRepository}
                    pillValueLabel={selectedImageVersion.imageRepository}
                  />
                  <Pill
                    pillKey="version"
                    pillKeyLabel="version"
                    pillValue={selectedImageVersion.imageVersion}
                    pillValueLabel={selectedImageVersion.imageVersion}
                  />
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
                      text={`${selectedImageVersion.issueCounts?.critical || 0}`}
                      variant={selectedImageVersion.issueCounts?.critical > 0 ? "danger" : "default"}
                    />
                  </Stack>
                  <Stack direction="horizontal" gap="2" alignment="center">
                    <span>High:</span>
                    <Badge
                      icon="warning"
                      text={`${selectedImageVersion.issueCounts?.high || 0}`}
                      variant={selectedImageVersion.issueCounts?.high > 0 ? "warning" : "default"}
                    />
                  </Stack>
                  <Stack direction="horizontal" gap="2" alignment="center">
                    <span>Low:</span>
                    <span>{selectedImageVersion.issueCounts?.low || 0}</span>
                  </Stack>
                </Stack>
              </Stack>

              {/* Occurrences Section */}
              <Stack gap="2" direction="vertical">
                <Stack gap="2" direction="horizontal" alignment="center">
                  <Label text="Image Instances: " />
                  <a
                    href="#"
                    onClick={(e) => {
                      e.stopPropagation()
                      setShowOccurrences(!showOccurrences)
                    }}
                    className="hover:underline text-sm"
                  >
                    {showOccurrences ? "Hide Occurrences" : "Show Occurrences"}
                  </a>
                </Stack>
                {showOccurrences && (
                  <Stack gap="4" direction="vertical" className="pl-4">
                    {/* TODO: Add list of image instances details here after being available from API*/}
                    <span className="text-theme-light">
                      List of image instances with details will be displayed here
                    </span>
                  </Stack>
                )}
              </Stack>
            </Stack>
          </Stack>
        )}
      </Stack>
    </MessagesProvider>
  )
}
