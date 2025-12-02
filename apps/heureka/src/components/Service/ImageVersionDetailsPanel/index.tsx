/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { use } from "react"
import {
  Panel,
  PanelBody,
  Stack,
  Pill,
  DataGrid,
  DataGridRow,
  DataGridHeadCell,
  DataGridCell,
} from "@cloudoperators/juno-ui-components"
import { useNavigate, useParams, useSearch } from "@tanstack/react-router"
import { ApolloQueryResult } from "@apollo/client"
import { getNormalizedImagesResponse, ServiceImage } from "../../Services/utils"
import ImageVersionOccurrences from "./ImageVersionOccurrences"
import { IssueCountsPerSeverityLevel } from "../../common/IssueCountsPerSeverityLevel"
import { ImageVersionIssuesList } from "./ImageVersionIssuesList"
import { GetImagesQuery } from "../../../generated/graphql"

type ImageVersionDetailsPanelProps = {
  imagesPromise: Promise<ApolloQueryResult<GetImagesQuery>>
}

export const ImageVersionDetailsPanel = ({ imagesPromise }: ImageVersionDetailsPanelProps) => {
  const navigate = useNavigate()
  const { service } = useParams({ from: "/services/$service" })
  const { imageVersion: selectedImageRepository } = useSearch({ from: "/services/$service" })
  const { data } = use(imagesPromise)
  const { images } = getNormalizedImagesResponse(data)
  const image = images.find((img: ServiceImage) => img.repository === selectedImageRepository)

  if (!image) {
    return null
  }

  return (
    <Panel
      heading={`Image ${image.repository} Information`}
      opened={!!service}
      onClose={() =>
        navigate({
          to: "/services/$service",
          params: { service },
        })
      }
      size="large"
    >
      <PanelBody>
        <DataGrid columns={2} gridColumnTemplate="20% auto">
          <DataGridRow>
            <DataGridHeadCell>Details</DataGridHeadCell>
            <DataGridCell>
              <Stack gap="1" direction="horizontal" wrap>
                <Pill
                  pillKey="repository"
                  pillKeyLabel="repository"
                  pillValue={image.repository}
                  pillValueLabel={image.repository}
                />
                {image.versionsCount !== undefined && image.versionsCount > 0 && (
                  <Pill
                    pillKey="versions"
                    pillKeyLabel="versions"
                    pillValue={image.versionsCount.toString()}
                    pillValueLabel={image.versionsCount.toString()}
                  />
                )}
              </Stack>
            </DataGridCell>
          </DataGridRow>
          <DataGridRow>
            <DataGridHeadCell>Vulnerabilities Counts</DataGridHeadCell>
            <DataGridCell>
              <IssueCountsPerSeverityLevel counts={image.issueCounts} />
            </DataGridCell>
          </DataGridRow>
          <DataGridRow>
            <DataGridHeadCell className="whitespace-nowrap">{`Occurrences (${image.componentInstancesCount || 0})`}</DataGridHeadCell>
            <DataGridCell>
              <ImageVersionOccurrences imageVersion={image} />
            </DataGridCell>
          </DataGridRow>
        </DataGrid>

        {/* Second Section: Issues List */}
        {service && selectedImageRepository && image && (
          <ImageVersionIssuesList service={service} image={image} />
        )}
      </PanelBody>
    </Panel>
  )
}
