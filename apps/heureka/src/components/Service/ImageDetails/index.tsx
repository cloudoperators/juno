/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { use, useState } from "react"
import {
  Stack,
  Pill,
  DataGrid,
  DataGridRow,
  DataGridHeadCell,
  DataGridCell,
  Icon,
} from "@cloudoperators/juno-ui-components"
import { useNavigate } from "@tanstack/react-router"
import { getNormalizedImagesResponse, ServiceImage } from "../../Services/utils"
import { getShortSha256 } from "../../../utils"
import { IssueCountsPerSeverityLevel } from "../../common/IssueCountsPerSeverityLevel"
import SectionContentHeading from "../../common/SectionContentHeading"
import { ImageIssuesList } from "./ImageIssuesList"
import { ObservableQuery } from "@apollo/client"
import { GetImagesQuery } from "../../../generated/graphql"

type ImageDetailsProps = {
  imagesPromise: Promise<ObservableQuery.Result<GetImagesQuery>>
  imageRepository: string
  service: string
}

export const ImageDetails = ({ imagesPromise, imageRepository, service }: ImageDetailsProps) => {
  const { data } = use(imagesPromise)
  const { images } = getNormalizedImagesResponse(data as GetImagesQuery | undefined)
  const image = images.find((img: ServiceImage) => img.repository === imageRepository)
  const [showAllVersions, setShowAllVersions] = useState(false)
  const navigate = useNavigate()

  if (!image) {
    return null
  }

  const handleVersionClick = (version: string) => {
    navigate({
      to: "/services/$service/images/$image/versions/$version",
      params: { service, image: imageRepository, version },
    })
  }

  const versions = image.versions || []
  const displayedVersions = showAllVersions ? versions : versions.slice(0, 3)
  const hasMoreVersions = versions.length > 3

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
        {versions.length > 0 && (
          <DataGridRow>
            <DataGridHeadCell>Versions ({versions.length})</DataGridHeadCell>
            <DataGridCell>
              <Stack gap="2" direction="vertical">
                {displayedVersions.map((version) => (
                  <a
                    key={version.id}
                    href="#"
                    title={version.version}
                    onClick={(e) => {
                      e.preventDefault()
                      handleVersionClick(version.version)
                    }}
                    className="link-hover"
                  >
                    <span>{getShortSha256(version.version)}</span>
                  </a>
                ))}
                {hasMoreVersions && !showAllVersions && (
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      setShowAllVersions(true)
                    }}
                    className="link-hover"
                  >
                    <Stack alignment="center" direction="horizontal" gap="1">
                      <span>Show all</span>
                      <Icon color="global-text" icon="expandMore" />
                    </Stack>
                  </a>
                )}
                {hasMoreVersions && showAllVersions && (
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      setShowAllVersions(false)
                    }}
                    className="link-hover"
                  >
                    <Stack alignment="center" direction="horizontal" gap="1">
                      <span>Show less</span>
                      <Icon color="global-text" icon="expandLess" />
                    </Stack>
                  </a>
                )}
              </Stack>
            </DataGridCell>
          </DataGridRow>
        )}
      </DataGrid>

      {/* Issues List Section */}
      {service && imageRepository && image && <ImageIssuesList service={service} image={image} />}
    </>
  )
}
