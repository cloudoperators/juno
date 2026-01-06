/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { use } from "react"
import { Stack, Pill, DataGrid, DataGridRow, DataGridHeadCell, DataGridCell } from "@cloudoperators/juno-ui-components"
import { getNormalizedImagesResponse, ServiceImage } from "../Services/utils"
import { IssueCountsPerSeverityLevel } from "../common/IssueCountsPerSeverityLevel"
import SectionContentHeading from "../common/SectionContentHeading"
import { ImageIssuesList } from "./ImageDetailsPanel/ImageIssuesList"
import { GetImagesQuery, GetImagesQueryResult } from "../../generated/graphql"

type ImageDetailsProps = {
  imagesPromise: Promise<GetImagesQueryResult>
  imageRepository: string
  service: string
}

export const ImageDetails = ({ imagesPromise, imageRepository, service }: ImageDetailsProps) => {
  const { data } = use(imagesPromise)
  const { images } = getNormalizedImagesResponse(data as GetImagesQuery | undefined)
  const image = images.find((img: ServiceImage) => img.repository === imageRepository)

  if (!image) {
    return null
  }

  return (
    <>
      <SectionContentHeading>Image {image.repository}</SectionContentHeading>

      {/* Image Information Section */}
      <DataGrid columns={2} gridColumnTemplate="20% auto" className="mb-6">
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
            <IssueCountsPerSeverityLevel counts={image.vulnerabilityCounts} />
          </DataGridCell>
        </DataGridRow>
      </DataGrid>

      {/* Issues List Section */}
      {service && imageRepository && image && <ImageIssuesList service={service} image={image} />}
    </>
  )
}
