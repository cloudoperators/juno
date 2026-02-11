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

export type VulnerabilitiesTabValue = "active" | "remediated"

type ImageDetailsProps = {
  imagesPromise: Promise<ObservableQuery.Result<GetImagesQuery>>
  imageRepository: string
  service: string
  vulnerabilitiesTab?: VulnerabilitiesTabValue
  /** CVE number when remediation history panel is open (from vulRemediations search param). */
  vulRemediations?: string
}

export const ImageDetails = ({
  imagesPromise,
  imageRepository,
  service,
  vulnerabilitiesTab = "active",
  vulRemediations,
}: ImageDetailsProps) => {
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
      params: {
        service: encodeURIComponent(service),
        image: encodeURIComponent(imageRepository),
        version: encodeURIComponent(version),
      },
      search: {},
    })
  }

  const versions = image.versions || []
  const VERSIONS_INITIAL = 30
  const displayedVersions = showAllVersions ? versions : versions.slice(0, VERSIONS_INITIAL)
  const hasMoreVersions = versions.length > VERSIONS_INITIAL

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
              <div className="grid grid-cols-[repeat(auto-fill,_minmax(5rem,_auto))] gap-x-4 gap-y-1">
                {displayedVersions.map((version) => (
                  <a
                    key={version.id}
                    href="#"
                    title={version.version}
                    onClick={(e) => {
                      e.preventDefault()
                      handleVersionClick(version.version)
                    }}
                    className="link-hover w-fit"
                  >
                    {getShortSha256(version.version)}
                  </a>
                ))}
              </div>
              {hasMoreVersions && (
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    setShowAllVersions((prev) => !prev)
                  }}
                  className="link-hover mt-2 inline-flex items-center gap-1"
                >
                  {showAllVersions ? (
                    <>
                      <span>Show less ...</span>
                      <Icon color="global-text" icon="expandLess" />
                    </>
                  ) : (
                    <>
                      <span>Show ({versions.length - VERSIONS_INITIAL} more ...)</span>
                      <Icon color="global-text" icon="expandMore" />
                    </>
                  )}
                </a>
              )}
            </DataGridCell>
          </DataGridRow>
        )}
      </DataGrid>

      {/* Issues List Section */}
      {service && imageRepository && image && (
        <ImageIssuesList
          service={service}
          image={image}
          vulnerabilitiesTab={vulnerabilitiesTab}
          vulRemediations={vulRemediations}
        />
      )}
    </>
  )
}
