/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { use, useEffect, useState } from "react"
import { ApolloQueryResult } from "@apollo/client"
import {
  Panel,
  PanelBody,
  Stack,
  Pill,
  DataGrid,
  DataGridRow,
  DataGridHeadCell,
  DataGridCell,
  Container,
} from "@cloudoperators/juno-ui-components"
import { MessagesProvider, Messages } from "@cloudoperators/juno-messages-provider"
import { getNormalizedImageVersionsData, ServiceImageVersion } from "../../Services/utils"
import ImageVersionOccurrences from "./ImageVersionOccurrences"
import { IssueCountsPerSeverityLevel } from "../../common/IssueCountsPerSeverityLevel"
import { ImageVersionIssuesList } from "./ImageVersionIssuesList"
import { GetServiceImageVersionsQuery } from "../../../generated/graphql"

type ImageVersionDetailsPanelProps = {
  selectedService: string
  selectedImageVersion?: string
  imageVersionsPromise: Promise<ApolloQueryResult<GetServiceImageVersionsQuery>>
  onClose: () => void
}

export const ImageVersionDetailsPanel = ({
  selectedService,
  selectedImageVersion,
  imageVersionsPromise,
  onClose,
}: ImageVersionDetailsPanelProps) => {
  const [opened, setOpened] = useState(false)
  const { data } = use(imageVersionsPromise)
  const { imageVersions } = getNormalizedImageVersionsData(data)
  const imageVersion = imageVersions.find((version: ServiceImageVersion) => version.version === selectedImageVersion)

  // open or close the panel based on selectedService and service
  useEffect(() => {
    if (selectedImageVersion && imageVersions.length > 0) {
      setOpened(true)
    } else {
      setOpened(false)
    }
  }, [selectedImageVersion, imageVersions])

  if (!imageVersion) {
    return <div>Image version not found</div>
  }

  return (
    <MessagesProvider>
      <Panel heading={`Image ${imageVersion.repository} Information`} opened={opened} onClose={onClose} size="large">
        <PanelBody>
          <Container py px={false}>
            <Messages />
          </Container>
          <DataGrid columns={2} gridColumnTemplate="15% auto">
            <DataGridRow>
              <DataGridHeadCell>Details</DataGridHeadCell>
              <DataGridCell>
                <Stack gap="1" direction="horizontal" wrap>
                  <Pill
                    pillKey="tag"
                    pillKeyLabel="tag"
                    pillValue={imageVersion.tag}
                    pillValueLabel={imageVersion.tag}
                  />
                  <Pill
                    pillKey="repository"
                    pillKeyLabel="repository"
                    pillValue={imageVersion.repository}
                    pillValueLabel={imageVersion.repository}
                  />
                  <Pill
                    pillKey="version"
                    pillKeyLabel="version"
                    pillValue={imageVersion.version}
                    pillValueLabel={imageVersion.version}
                  />
                </Stack>
              </DataGridCell>
            </DataGridRow>
            <DataGridRow>
              <DataGridHeadCell>Issues Counts</DataGridHeadCell>
              <DataGridCell>
                <IssueCountsPerSeverityLevel counts={imageVersion.issueCounts} />
              </DataGridCell>
            </DataGridRow>
            <DataGridRow>
              <DataGridHeadCell className="whitespace-nowrap">{`Occurrences (${imageVersion.componetInstancesCount || 0})`}</DataGridHeadCell>
              <DataGridCell>
                <ImageVersionOccurrences imageVersion={imageVersion} />
              </DataGridCell>
            </DataGridRow>
          </DataGrid>

          {/* Second Section: Issues List */}
          {selectedService && selectedImageVersion && imageVersion && (
            <ImageVersionIssuesList service={selectedService} imageVersion={imageVersion} />
          )}
        </PanelBody>
      </Panel>
    </MessagesProvider>
  )
}
