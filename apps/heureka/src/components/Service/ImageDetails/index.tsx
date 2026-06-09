/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { use, useState } from "react"
import { Stack, Badge, DL, DT, DD, Icon } from "@cloudoperators/juno-ui-components"
import { useNavigate } from "@tanstack/react-router"
import { getNormalizedImagesResponse, ServiceImage } from "../../Services/utils"
import { getShortSha256 } from "../../../utils"
import { IssueCountsPerSeverityLevel } from "../../common/IssueCountsPerSeverityLevel"
import SectionContentHeading from "../../common/SectionContentHeading"
import { ImageIssuesList } from "./ImageIssuesList"
import { ObservableQuery } from "@apollo/client"
import { GetImagesQuery } from "../../../generated/graphql"

// DL's children type is too strict for conditional rows — cast to allow ReactNode
const FlexDL = DL as React.FC<Omit<React.ComponentProps<typeof DL>, "children"> & { children: React.ReactNode }>

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
        service,
        image: imageRepository,
        version,
      },
      search: {},
    })
  }

  const versions = image.versions || []
  const VERSIONS_INITIAL = 30
  const displayedVersions = showAllVersions ? versions : versions.slice(0, VERSIONS_INITIAL)
  const hasMoreVersions = versions.length > VERSIONS_INITIAL

  const versionsRow =
    versions.length > 0
      ? [
          <DT key="versions-dt" className="jn:col-span-1">{`Versions (${versions.length})`}</DT>,
          <DD key="versions-dd" className="jn:col-span-1">
            <Stack gap="1" direction="horizontal" wrap>
              {displayedVersions.map((version) =>
                version.version ? (
                  <Badge
                    key={version.id}
                    text={getShortSha256(version.version)}
                    title={version.version}
                    onClick={() => handleVersionClick(version.version)}
                    className="cursor-pointer"
                  />
                ) : (
                  <React.Fragment key={version.id}>—</React.Fragment>
                )
              )}
            </Stack>
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
          </DD>,
        ]
      : []

  return (
    <>
      <SectionContentHeading>Image {image.repository}</SectionContentHeading>

      {/* Image Information Section */}
      <FlexDL className="mb-6" alignTerms="left">
        <DT className="jn:col-span-1">Image</DT>
        <DD className="jn:col-span-1">
          <Stack gap="1" direction="horizontal" wrap>
            <Badge text={image.repository} />
            {image.versionsCount !== undefined && image.versionsCount > 0 && (
              <Badge text={image.versionsCount.toString()} />
            )}
          </Stack>
        </DD>
        <DT className="jn:col-span-1">Vulnerabilities Counts</DT>
        <DD className="jn:col-span-1">
          <IssueCountsPerSeverityLevel counts={image.vulnerabilityCounts} />
        </DD>
        {versionsRow}
      </FlexDL>

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
