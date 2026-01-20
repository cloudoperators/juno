/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { use } from "react"
import { Stack, Pill, DataGrid, DataGridRow, DataGridHeadCell, DataGridCell } from "@cloudoperators/juno-ui-components"
import { getNormalizedImageVersionsResponse } from "../../Services/utils"
import ImageVersionOccurrences from "./ImageVersionOccurrences"
import { IssueCountsPerSeverityLevel } from "../../common/IssueCountsPerSeverityLevel"
import SectionContentHeading from "../../common/SectionContentHeading"
import { ImageVersionIssuesList } from "./ImageVersionIssuesList"
import { ObservableQuery } from "@apollo/client"
import { GetImageVersionsQuery } from "../../../generated/graphql"

type ImageVersionDetailsProps = {
  imageVersionsPromise: Promise<ObservableQuery.Result<GetImageVersionsQuery>>
  imageVersion: string
  service: string
  imageRepository: string
}

export const ImageVersionDetails = ({
  imageVersionsPromise,
  imageVersion: selectedImageVersion,
  service,
  imageRepository,
}: ImageVersionDetailsProps) => {
  const { data, error } = use(imageVersionsPromise)

  if (error) {
    return <div>Error loading image version: {error.message}</div>
  }

  const { imageVersions } = getNormalizedImageVersionsResponse(data as GetImageVersionsQuery | undefined)
  // Since we're querying for a specific version, we should get exactly one result
  const imageVersion = imageVersions[0]

  if (!imageVersion) {
    return (
      <div>
        <p>Image version not found: {selectedImageVersion}</p>
        <p>Available versions: {imageVersions.map((v) => v.version).join(", ") || "none"}</p>
        <p>Data: {JSON.stringify(data, null, 2)}</p>
      </div>
    )
  }

  // Format version string: show first 9 chars after "sha", then "...", then last 5 chars
  const formatVersion = (version: string): string => {
    if (!version) return version

    // Check if it starts with "sha" (e.g., "sha256:...")
    const shaMatch = version.match(/^(sha[^:]*:)(.+)$/)
    if (shaMatch) {
      const prefix = shaMatch[1] // e.g., "sha256:"
      const hash = shaMatch[2] // The actual hash part

      if (hash.length <= 14) {
        // If hash is short enough, return as is
        return version
      }

      // Show first 9 chars of hash, then "...", then last 5 chars
      return `${prefix}${hash.substring(0, 9)}...${hash.substring(hash.length - 5)}`
    }

    // If it doesn't match the pattern, return as is
    return version
  }

  return (
    <>
      <SectionContentHeading>
        Image {imageVersion.repository || imageRepository} - Version {formatVersion(imageVersion.version)}
      </SectionContentHeading>

      <DataGrid columns={2} gridColumnTemplate="20% auto" className="mb-6">
        <DataGridRow>
          <DataGridHeadCell>Details</DataGridHeadCell>
          <DataGridCell>
            <Stack gap="1" direction="horizontal" wrap>
              {imageVersion.tag && (
                <Pill pillKey="tag" pillKeyLabel="tag" pillValue={imageVersion.tag} pillValueLabel={imageVersion.tag} />
              )}
              <Pill
                pillKey="repository"
                pillKeyLabel="repository"
                pillValue={imageVersion.repository || imageRepository}
                pillValueLabel={imageVersion.repository || imageRepository}
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
          <DataGridHeadCell>Vulnerabilities Counts</DataGridHeadCell>
          <DataGridCell>
            <IssueCountsPerSeverityLevel counts={imageVersion.issueCounts} />
          </DataGridCell>
        </DataGridRow>
        <DataGridRow>
          <DataGridHeadCell className="whitespace-nowrap">{`Occurrences (${imageVersion.componentInstancesCount || 0})`}</DataGridHeadCell>
          <DataGridCell>
            <ImageVersionOccurrences imageVersion={imageVersion} />
          </DataGridCell>
        </DataGridRow>
      </DataGrid>

      {/* Second Section: Issues List */}
      {service && selectedImageVersion && imageVersion && (
        <ImageVersionIssuesList
          issuesPromise={imageVersionsPromise}
          service={service}
          image={imageVersion.repository || imageRepository}
        />
      )}
    </>
  )
}
