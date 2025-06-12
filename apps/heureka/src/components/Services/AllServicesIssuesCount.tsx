/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, use } from "react"
import { ApolloQueryResult } from "@apollo/client"
import { useLoaderData } from "@tanstack/react-router"
import { Spinner, Stack } from "@cloudoperators/juno-ui-components"
import { IssueCountsPerSeverityLevel } from "../common/IssueCountsPerSeverityLevel"
import { GetServicesQuery } from "../../generated/graphql"
import { getNormalizedData } from "./utils"

type AllServicesIssuesCountProps = {
  servicesPromise: Promise<ApolloQueryResult<GetServicesQuery>>
}

const IssuesCount = ({ servicesPromise }: AllServicesIssuesCountProps) => {
  const { error, data } = use(servicesPromise)
  const { servicesIssuesCount } = getNormalizedData(data)

  return (
    <Stack gap="1">
      {!error ? (
        <IssueCountsPerSeverityLevel counts={servicesIssuesCount} />
      ) : (
        <div className="font-bold">All issues: --</div>
      )}
    </Stack>
  )
}

export const AllServicesIssuesCount = () => {
  const { servicesPromise } = useLoaderData({ from: "/services/" })
  return (
    <Stack className="bg-theme-background-lvl-1 py-1.5 px-4 my-px text-theme-light" alignment="center">
      <Suspense fallback={<Spinner size="small" />}>
        <IssuesCount servicesPromise={servicesPromise} />
      </Suspense>
    </Stack>
  )
}
