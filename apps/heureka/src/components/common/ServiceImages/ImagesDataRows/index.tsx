/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { use } from "react"
import { ApolloQueryResult } from "@apollo/client"
import { EmptyDataGridRow } from "../../EmptyDataGridRow"
import { ImagesDataRow } from "./ImagesDataRow"
import { getNormalizedImagesResponse, ServiceImage } from "../../../Services/utils"
import { GetImagesQuery } from "../../../../generated/graphql"

type ImagesDataRows = {
  columnSpan: number
  selectedImage?: string
  displayDetailsButton?: boolean
  imagesPromise: Promise<ApolloQueryResult<GetImagesQuery>>
  onDetailsButtonClick?: (image: ServiceImage | undefined) => void
  onImageItemClick?: (image: ServiceImage) => void
}

export const ImagesDataRows = ({
  columnSpan,
  selectedImage,
  displayDetailsButton,
  imagesPromise,
  onDetailsButtonClick,
  onImageItemClick,
}: ImagesDataRows) => {
  const { error, data } = use(imagesPromise)
  const { images } = getNormalizedImagesResponse(data as GetImagesQuery | undefined)

  if (error) {
    return <EmptyDataGridRow colSpan={columnSpan}>Error loading images.</EmptyDataGridRow>
  }

  if (images.length === 0) {
    return <EmptyDataGridRow colSpan={columnSpan}>No image found</EmptyDataGridRow>
  }

  return images.map((image: ServiceImage) => (
    <ImagesDataRow
      key={image.repository}
      version={image}
      selected={image.repository === selectedImage}
      displayDetailsButton={displayDetailsButton}
      onItemClick={() => {
        onImageItemClick?.(image)
      }}
      onDetailClick={(event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        event.stopPropagation()
        onDetailsButtonClick?.(image)
      }}
    />
  ))
}
