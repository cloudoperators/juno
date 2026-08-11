/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { use } from "react"
import { ApolloQueryResult } from "@apollo/client"
import { Badge, Stack, DL, DT, DD } from "@cloudoperators/juno-ui-components"
import { getNormalizedServicesResponse } from "../Services/utils"
import { IssueCountsPerSeverityLevel } from "../common/IssueCountsPerSeverityLevel"
import SectionContentHeading from "../common/SectionContentHeading"
import { GetServicesQuery } from "../../generated/graphql"

type ServiceDetailsProps = {
  servicePromise: Promise<ApolloQueryResult<GetServicesQuery>>
}

export const ServiceDetails = ({ servicePromise }: ServiceDetailsProps) => {
  const { data } = use(servicePromise)
  const service = getNormalizedServicesResponse(data).services[0]
  const supportGroups = service.serviceDetails?.supportGroups?.filter(Boolean) ?? []

  return (
    <>
      <SectionContentHeading>Service {service.name}</SectionContentHeading>

      {/* Service Information Section */}
      <DL className="mb-6" alignTerms="left">
        <DT className="jn:col-span-1">Support Groups</DT>
        <DD className="jn:col-span-1">
          <Stack gap="1" direction="horizontal" wrap>
            {supportGroups.length ? supportGroups.map((group) => <Badge key={group} text={group} />) : "—"}
          </Stack>
        </DD>
        <DT className="jn:col-span-1">Vulnerabilities Counts</DT>
        <DD className="jn:col-span-1">
          <IssueCountsPerSeverityLevel counts={service.issuesCount} />
        </DD>
      </DL>
    </>
  )
}
