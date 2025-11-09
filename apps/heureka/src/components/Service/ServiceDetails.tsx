/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { use } from "react"
import { ApolloQueryResult } from "@apollo/client"
import { Stack, Pill, DataGrid, DataGridRow, DataGridHeadCell, DataGridCell } from "@cloudoperators/juno-ui-components"
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

  return (
    <>
      <SectionContentHeading>Service {service.name}</SectionContentHeading>

      {/* Service Information Section */}
      <DataGrid columns={2} gridColumnTemplate="20% auto" className="mb-6">
        <DataGridRow>
          <DataGridHeadCell>Details</DataGridHeadCell>
          <DataGridCell>
            <Stack gap="1" direction="horizontal" wrap>
              <Pill pillKey="service" pillKeyLabel="service" pillValue={service.name} pillValueLabel={service.name} />
              {service.serviceDetails?.supportGroups?.map((group) => (
                <Pill
                  key={group}
                  pillKey="support_group"
                  pillKeyLabel="support_group"
                  pillValue={group}
                  pillValueLabel={group}
                />
              ))}
            </Stack>
          </DataGridCell>
        </DataGridRow>
        <DataGridRow>
          <DataGridHeadCell>Vulnerabilities Counts</DataGridHeadCell>
          <DataGridCell>
            <IssueCountsPerSeverityLevel counts={service.issuesCount} />
          </DataGridCell>
        </DataGridRow>
      </DataGrid>
    </>
  )
}
