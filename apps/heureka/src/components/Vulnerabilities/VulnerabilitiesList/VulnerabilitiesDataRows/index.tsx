/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { use } from "react"
import { EmptyDataGridRow } from "../../../common/EmptyDataGridRow"
import { getNormalizedVulnerabilitiesResponse, Vulnerability } from "../../utils"
import { ApolloQueryResult } from "@apollo/client"
import { GetVulnerabilitiesQuery } from "../../../../generated/graphql"
import { VulnerabilityDataRow } from "./VulnerabilityDataRow"

type VulnerabilitiesDataRowsProps = {
  vulnerabilitiesPromise: Promise<ApolloQueryResult<GetVulnerabilitiesQuery>>
}

export const VulnerabilitiesDataRows = ({ vulnerabilitiesPromise }: VulnerabilitiesDataRowsProps) => {
  const { error, data } = use(vulnerabilitiesPromise)
  const { vulnerabilities } = getNormalizedVulnerabilitiesResponse(data)

  if (error) {
    return <EmptyDataGridRow colSpan={5}>Error loading vulnerabilities: {error.message}</EmptyDataGridRow>
  }

  if (vulnerabilities.length === 0) {
    return <EmptyDataGridRow colSpan={5}>No vulnerabilities found! 🚀</EmptyDataGridRow>
  }

  return vulnerabilities.map((vuln: Vulnerability) => <VulnerabilityDataRow key={vuln.name} vulnerability={vuln} />)
}
