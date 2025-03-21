/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo } from "react"
import { Pill, Stack, DataGrid, DataGridCell, DataGridHeadCell, DataGridRow } from "@cloudoperators/juno-ui-components"
import { useGlobalsQueryClientFnReady, useGlobalsShowIssueDetail } from "../StoreProvider"
import { useQuery } from "@tanstack/react-query"
import { listOfCommaSeparatedObjs, severityString, formatDate } from "../shared/Helper"
import LoadElement from "../shared/LoadElement"

const IssueMatchesDetails = () => {
  const showIssueDetail = useGlobalsShowIssueDetail()

  const queryClientFnReady = useGlobalsQueryClientFnReady()

  const issueElem = useQuery({
    queryKey: ["IssueMatchesDetails", { filter: { id: [showIssueDetail] } }],
    enabled: !!queryClientFnReady && !!showIssueDetail,
  })
  const issue = useMemo(() => {
    if (!issueElem) return null
    // @ts-expect-error - data is not defined
    return issueElem?.data?.IssueMatches?.edges[0]?.node
  }, [issueElem])

  // Take description from the first issueVariant, because if there are multiple, they have the same priority (edge case).
  const issueDescription = issue?.effectiveIssueVariants?.edges?.[0]?.node?.description

  return (
    <>
      <Stack direction="vertical" gap="4">
        <DataGrid columns={2}>
          <DataGridRow>
            <DataGridHeadCell>Primary Name</DataGridHeadCell>

            <DataGridCell>
              <LoadElement elem={issue?.issue?.primaryName} />
            </DataGridCell>
          </DataGridRow>
          <DataGridRow>
            <DataGridHeadCell>Description</DataGridHeadCell>
            <DataGridCell>
              <LoadElement elem={issueDescription} />
            </DataGridCell>
          </DataGridRow>
          <DataGridRow>
            <DataGridHeadCell>CCRN</DataGridHeadCell>
            <DataGridCell>
              <LoadElement elem={issue?.componentInstance?.ccrn} />
            </DataGridCell>
          </DataGridRow>
          <DataGridRow>
            <DataGridHeadCell>Target Remediation Date</DataGridHeadCell>

            <DataGridCell>
              <LoadElement elem={formatDate(issue?.targetRemediationDate)} />
            </DataGridCell>
          </DataGridRow>
          <DataGridRow>
            <DataGridHeadCell>Status</DataGridHeadCell>

            <DataGridCell>
              <LoadElement elem={issue?.status} />
            </DataGridCell>
          </DataGridRow>

          <DataGridRow>
            <DataGridHeadCell>Severity</DataGridHeadCell>

            <DataGridCell>
              <LoadElement elem={severityString(issue?.severity)} />
            </DataGridCell>
          </DataGridRow>

          <DataGridRow>
            <DataGridHeadCell>Service Name</DataGridHeadCell>

            <DataGridCell>
              <LoadElement elem={issue?.componentInstance?.service?.ccrn} />
            </DataGridCell>
          </DataGridRow>

          <DataGridRow>
            <DataGridHeadCell>Support Group</DataGridHeadCell>

            <DataGridCell>
              <LoadElement elem={listOfCommaSeparatedObjs(issue?.componentInstance?.service?.supportGroups, "ccrn")} />
            </DataGridCell>
          </DataGridRow>

          <DataGridRow>
            <DataGridHeadCell>Pod</DataGridHeadCell>

            <DataGridCell>
              <LoadElement elem={issue?.componentInstance?.componentVersion?.component?.ccrn} />
            </DataGridCell>
          </DataGridRow>

          <DataGridRow>
            <DataGridHeadCell>Pod Version</DataGridHeadCell>

            <DataGridCell>
              <LoadElement elem={issue?.componentInstance?.componentVersion?.version} />
            </DataGridCell>
          </DataGridRow>

          <DataGridRow>
            <DataGridHeadCell>Owner</DataGridHeadCell>

            <DataGridCell>
              {issue?.componentInstance?.service?.owners?.edges ? (
                <Stack gap="2" wrap={true}>
                  {issue?.componentInstance?.service?.owners?.edges?.map((owner: any, i: any) => (
                    <Pill
                      key={i}
                      pillKey={owner?.node?.uniqueUserId}
                      pillKeyLabel={owner?.node?.uniqueUserId}
                      pillValue={owner?.node?.name}
                      pillValueLabel={owner?.node?.name}
                    />
                  ))}
                </Stack>
              ) : (
                <LoadElement />
              )}
            </DataGridCell>
          </DataGridRow>
        </DataGrid>
      </Stack>
    </>
  )
}

export default IssueMatchesDetails
