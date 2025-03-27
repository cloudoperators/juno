/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Container, ContentHeading, Stack, Badge, Pill, Label } from "@cloudoperators/juno-ui-components"
import { ServiceImageVersions } from "../common/ServiceImageVersions"
import { MessagesProvider, Messages } from "@cloudoperators/juno-messages-provider"
import { useStore } from "../../../store/StoreProvider"
import { SelectServiceDetailsPayload, UserView } from "../../../store/StoreProvider/types"
import { Breadcrumb } from "../../common/Breadcrumb"

export const ServiceDetails = () => {
  const { selectedView } = useStore()
  const selectedService =
    selectedView.viewId === UserView.ServiceDetails
      ? (selectedView as SelectServiceDetailsPayload).params.service
      : undefined

  if (typeof selectedService === "undefined") {
    return null
  }

  return (
    <MessagesProvider>
      <Breadcrumb />
      <Container py px>
        <Messages />
        <Stack gap="8" direction="vertical" className="overflow-auto w-full">
          {/* Service Information Section */}
          <Stack gap="6" direction="vertical" className="w-full">
            <ContentHeading>Service {selectedService.name} details</ContentHeading>
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
                    {selectedService.issuesCount?.critical > 0 ? (
                      <Badge icon="danger" text={`${selectedService.issuesCount.critical}`} variant="danger" />
                    ) : (
                      <span>0</span>
                    )}
                  </Stack>
                  <Stack direction="horizontal" gap="2" alignment="center">
                    <span>High:</span>
                    {selectedService.issuesCount?.high > 0 ? (
                      <Badge icon="warning" text={`${selectedService.issuesCount.high}`} variant="warning" />
                    ) : (
                      <span>0</span>
                    )}
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
            <ServiceImageVersions service={selectedService} />
          </Stack>
        </Stack>
      </Container>
    </MessagesProvider>
  )
}
