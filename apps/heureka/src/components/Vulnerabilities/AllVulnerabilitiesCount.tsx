/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { use, Suspense } from "react"
import { Stack, Spinner } from "@cloudoperators/juno-ui-components"
import { useLoaderData } from "@tanstack/react-router"
import { ApolloQueryResult } from "@apollo/client"
import { GetVulnerabilitiesQuery } from "../../generated/graphql"
import { getNormalizedVulnerabilitiesResponse } from "./utils"
import { IssueCountsPerSeverityLevel } from "../common/IssueCountsPerSeverityLevel"

type AllVulnerabilitiesCountProps = {
  vulnerabilitiesPromise: Promise<ApolloQueryResult<GetVulnerabilitiesQuery>>
}

const VulnerabilitiesCount = ({ vulnerabilitiesPromise }: AllVulnerabilitiesCountProps) => {
  const { error, data } = use(vulnerabilitiesPromise)
  const { vulnerabilitiesCounts } = getNormalizedVulnerabilitiesResponse(data)

  return (
    <Stack gap="1">
      {!error ? (
        <IssueCountsPerSeverityLevel counts={vulnerabilitiesCounts} />
      ) : (
        <div className="font-bold">All vulnerabilities: --</div>
      )}
    </Stack>
  )
}

export const AllVulnerabilitiesCount = () => {
  const { vulnerabilitiesPromise } = useLoaderData({ from: "/vulnerabilities/" })

  return (
    <Stack className="bg-theme-background-lvl-1 py-1.5 px-4 my-px text-theme-light" alignment="center">
      <Suspense fallback={<Spinner size="small" />}>
        <VulnerabilitiesCount vulnerabilitiesPromise={vulnerabilitiesPromise} />
      </Suspense>
    </Stack>
  )
}
