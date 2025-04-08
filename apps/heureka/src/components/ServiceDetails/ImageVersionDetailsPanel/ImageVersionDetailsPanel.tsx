/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
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
import { ServiceImageVersion } from "../../Services/utils"
import ImageVersionOccurrences from "./ImageVersionOccurrences"
import { IssuesCountPerSeverityLevel } from "../../common/IssuesCountPerSeverityLevel"
import { ImageVersionIssuesList } from "./ImageVersionIssuesList/ImageVersionIssuesList"
import SectionContentHeading from "../../common/SectionContentHeading"

type ImageVersionDetailsPanelProps = {
  imageVersion: ServiceImageVersion
  serviceCcrn: string
  onClose: () => void
}

export const ImageVersionDetailsPanel = ({ imageVersion, serviceCcrn, onClose }: ImageVersionDetailsPanelProps) => {
  return (
    <MessagesProvider>
      <Panel heading={`Image ${imageVersion.repository} Information`} opened={true} onClose={onClose} size="large">
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
                <IssuesCountPerSeverityLevel counts={imageVersion.issueCounts} />
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
          <SectionContentHeading>Issues</SectionContentHeading>
          <ImageVersionIssuesList serviceCcrn={serviceCcrn} imageVersion={imageVersion.version} />
        </PanelBody>
      </Panel>
    </MessagesProvider>
  )
}
