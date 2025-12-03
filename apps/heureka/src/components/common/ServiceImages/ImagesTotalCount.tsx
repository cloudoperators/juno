/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { use } from "react"
import { ApolloQueryResult } from "@apollo/client"
import { getNormalizedImagesResponse } from "../../Services/utils"
import { GetImagesQuery } from "../../../generated/graphql"

type ImagesTotalCountProps = {
  imagesPromise: Promise<ApolloQueryResult<GetImagesQuery>>
}

export const ImagesTotalCount = ({ imagesPromise }: ImagesTotalCountProps) => {
  const { data } = use(imagesPromise)
  const { totalImages } = getNormalizedImagesResponse(data)
  return totalImages
}
