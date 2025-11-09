/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { use } from "react"
import { ApolloQueryResult } from "@apollo/client"
import { EmptyDataGridRow } from "../../EmptyDataGridRow"
import { ImageVersionsDataRow } from "./ImageVersionsDataRow"
import { getNormalizedImageVersionsResponse, ServiceImageVersion } from "../../../Services/utils"
import { GetServiceImageVersionsQuery } from "../../../../generated/graphql"

type ImageVersionsDataRows = {
  columnSpan: number
  selectedImageVersion?: string
  displayDetailsButton?: boolean
  imageVersionsPromise: Promise<ApolloQueryResult<GetServiceImageVersionsQuery>>
  onDetailsButtonClick?: (imageVersion: ServiceImageVersion | undefined) => void
  onImageVersionItemClick?: (imageVersion: ServiceImageVersion) => void
}

export const ImageVersionsDataRows = ({
  columnSpan,
  selectedImageVersion,
  displayDetailsButton,
  imageVersionsPromise,
  onDetailsButtonClick,
  onImageVersionItemClick,
}: ImageVersionsDataRows) => {
  const { error, data } = use(imageVersionsPromise)
  const { imageVersions } = getNormalizedImageVersionsResponse(data)

  if (error) {
    return <EmptyDataGridRow colSpan={columnSpan}>Error loading image versions.</EmptyDataGridRow>
  }

  if (imageVersions.length === 0) {
    return <EmptyDataGridRow colSpan={columnSpan}>No image version found</EmptyDataGridRow>
  }

  return imageVersions.map((imageVersion: ServiceImageVersion) => (
    <ImageVersionsDataRow
      key={imageVersion.version}
      version={imageVersion}
      selected={imageVersion.version === selectedImageVersion}
      displayDetailsButton={displayDetailsButton}
      onItemClick={() => {
        onImageVersionItemClick?.(imageVersion)
      }}
      onDetailClick={(event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        event.stopPropagation()
        onDetailsButtonClick?.(imageVersion)
      }}
    />
  ))
}
