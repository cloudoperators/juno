/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { use } from "react"
import { ApolloQueryResult } from "@apollo/client"
import { getNormalizedImageVersionsData } from "../../Services/utils"
import { GetServiceImageVersionsQuery } from "../../../generated/graphql"

type ImageVersionsTotalCountProps = {
  imageVersionsPromise: Promise<ApolloQueryResult<GetServiceImageVersionsQuery>>
}

export const ImageVersionsTotalCount = ({ imageVersionsPromise }: ImageVersionsTotalCountProps) => {
  const { data } = use(imageVersionsPromise)
  const { totalImageVersions } = getNormalizedImageVersionsData(data)
  return totalImageVersions
}
