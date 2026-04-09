/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, useState, useCallback, useEffect } from "react"
import { useNavigate, useRouteContext } from "@tanstack/react-router"
import {
  DataGrid,
  DataGridRow,
  DataGridHeadCell,
  Icon,
  Stack,
  SearchInput,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  Message,
} from "@cloudoperators/juno-ui-components"
import { getNormalizedImageVulnerabilitiesResponse, ServiceImage } from "../../../Services/utils"
import { useTimedState } from "../../../../utils"
import type { VulnerabilityFilter } from "../../../../generated/graphql"
import { fetchImages } from "../../../../api/fetchImages"
import { fetchRemediations } from "../../../../api/fetchRemediations"
import { IssuesDataRows } from "./IssuesDataRows"
import { RemediatedIssuesDataRows } from "./RemediatedIssuesDataRows"
import { RemediationHistoryPanel } from "./RemediationHistoryPanel"
import { CursorPagination } from "../../../common/CursorPagination"
import { ErrorBoundary } from "../../../common/ErrorBoundary"
import { getErrorDataRowComponent } from "../../../common/getErrorDataRow"
import { LoadingDataRow } from "../../../common/LoadingDataRow"
import type { VulnerabilitiesTabValue } from "../index"

type ImageIssuesListProps = {
  service: string
  image: ServiceImage
  vulnerabilitiesTab?: VulnerabilitiesTabValue
  /** CVE number when remediation history panel is open (from vulRemediations search param). */
  vulRemediations?: string
}

const VulnerabilitiesTabContent = ({
  service,
  image,
  setSearchTerm,
  setPageCursor,
  issuesPromise,
  remediationsPromise,
  successMessage,
  onFalsePositiveSuccess,
}: {
  service: string
  image: ServiceImage
  setSearchTerm: (term: string | undefined) => void
  setPageCursor: (cursor: string | null | undefined) => void
  issuesPromise: ReturnType<typeof fetchImages>
  remediationsPromise: ReturnType<typeof fetchRemediations>
  successMessage: string | null
  onFalsePositiveSuccess: (cveNumber: string) => void | Promise<void>
}) => {
  return (
    <>
      {successMessage && (
        <div className="mb-4 mt-4">
          <Message text={successMessage} variant="success" />
        </div>
      )}
      <Stack gap="2" className="mb-4 mt-4">
        <SearchInput
          placeholder="Search for CVE number"
          className="w-96 ml-auto"
          onSearch={(search) => setSearchTerm(search || "")}
          onClear={() => {
            setSearchTerm("")
          }}
        />
      </Stack>
      <DataGrid columns={5} minContentColumns={[0, 1, 2, 4]} cellVerticalAlignment="top">
        <DataGridRow>
          <DataGridHeadCell>
            <Icon icon="monitorHeart" />
          </DataGridHeadCell>
          <DataGridHeadCell>Vulnerability</DataGridHeadCell>
          <DataGridHeadCell>Target Date</DataGridHeadCell>
          <DataGridHeadCell>Description</DataGridHeadCell>
          <DataGridHeadCell />
        </DataGridRow>

        {issuesPromise && (
          <ErrorBoundary
            displayErrorMessage
            fallbackRender={getErrorDataRowComponent({ colspan: 5 })}
            resetKeys={[issuesPromise, remediationsPromise]}
          >
            <Suspense fallback={<LoadingDataRow colSpan={5} />}>
              <IssuesDataRows
                issuesPromise={issuesPromise}
                remediationsPromise={remediationsPromise}
                service={service}
                image={image.repository}
                onFalsePositiveSuccess={onFalsePositiveSuccess}
              />
            </Suspense>
          </ErrorBoundary>
        )}
      </DataGrid>
      {issuesPromise && (
        <ErrorBoundary resetKeys={[issuesPromise]}>
          <Suspense>
            <CursorPagination
              dataPromise={issuesPromise}
              dataNormalizationMethod={getNormalizedImageVulnerabilitiesResponse}
              goToPage={setPageCursor}
            />
          </Suspense>
        </ErrorBoundary>
      )}
    </>
  )
}

const RemediatedVulnerabilitiesTabContent = ({
  service,
  image,
  setSearchTerm,
  issuesPromise,
  remediationsPromise,
  setPageCursor,
  onDataRefresh,
  selectedVulnerability,
  onSelectVulnerability,
  refreshKey,
}: {
  service: string
  image: string
  setSearchTerm: (term: string | undefined) => void
  issuesPromise: ReturnType<typeof fetchImages>
  remediationsPromise: ReturnType<typeof fetchRemediations>
  setPageCursor: (cursor: string | null | undefined) => void
  onDataRefresh?: () => void | Promise<void>
  selectedVulnerability: string | null
  onSelectVulnerability: (cve: string | null) => void
  refreshKey: number
}) => {
  return (
    <>
      <Stack gap="2" className="mb-4 mt-4">
        <SearchInput
          placeholder="Search for CVE number"
          className="w-96 ml-auto"
          onSearch={(search) => setSearchTerm(search || "")}
          onClear={() => setSearchTerm("")}
        />
      </Stack>
      <div className="mt-4">
        <DataGrid columns={4} minContentColumns={[0, 1, 2]} cellVerticalAlignment="top">
          <DataGridRow>
            <DataGridHeadCell>
              <Icon icon="monitorHeart" />
            </DataGridHeadCell>
            <DataGridHeadCell>Vulnerability</DataGridHeadCell>
            <DataGridHeadCell>Target Date</DataGridHeadCell>
            <DataGridHeadCell>Description</DataGridHeadCell>
          </DataGridRow>

          {issuesPromise && (
            <ErrorBoundary
              displayErrorMessage
              fallbackRender={getErrorDataRowComponent({ colspan: 4 })}
              resetKeys={[issuesPromise, remediationsPromise]}
            >
              <Suspense fallback={<LoadingDataRow colSpan={4} />}>
                <RemediatedIssuesDataRows
                  issuesPromise={issuesPromise}
                  remediationsPromise={remediationsPromise}
                  selectedVulnerabilityName={selectedVulnerability}
                  onSelectVulnerability={onSelectVulnerability}
                />
              </Suspense>
            </ErrorBoundary>
          )}
        </DataGrid>
        {issuesPromise && (
          <ErrorBoundary resetKeys={[issuesPromise]}>
            <Suspense>
              <CursorPagination
                dataPromise={issuesPromise}
                dataNormalizationMethod={getNormalizedImageVulnerabilitiesResponse}
                goToPage={setPageCursor}
              />
            </Suspense>
          </ErrorBoundary>
        )}
      </div>
      <RemediationHistoryPanel
        service={service}
        image={image}
        vulnerability={selectedVulnerability}
        onClose={() => onSelectVulnerability(null)}
        onRevertSuccess={onDataRefresh}
        refreshKey={refreshKey}
      />
    </>
  )
}

export const ImageIssuesList = ({
  service,
  image,
  vulnerabilitiesTab = "active",
  vulRemediations,
}: ImageIssuesListProps) => {
  const { apiClient, queryClient } = useRouteContext({ from: "/services/$service" })
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState<string | undefined>(undefined)
  const [remediatedSearchTerm, setRemediatedSearchTerm] = useState<string | undefined>(undefined)
  const [pageCursor, setPageCursor] = useState<string | null | undefined>(undefined)
  const [remediatedPageCursor, setRemediatedPageCursor] = useState<string | null | undefined>(undefined)
  const selectedTabIndex = vulnerabilitiesTab === "remediated" ? 1 : 0
  const handleTabSelect = useCallback(
    (index: number) => {
      const list: VulnerabilitiesTabValue = index === 1 ? "remediated" : "active"
      navigate({
        to: "/services/$service/images/$image",
        params: { service, image: image.repository },
        search: { vulnerabilitiesList: list, vulRemediations: list === "remediated" ? vulRemediations : undefined },
        replace: true,
      })
    },
    [navigate, service, image.repository, vulRemediations]
  )
  const handleRemediationPanelVulnerabilityChange = useCallback(
    (cve: string | null) => {
      navigate({
        to: "/services/$service/images/$image",
        params: { service, image: image.repository },
        search: { vulnerabilitiesList: "remediated", vulRemediations: cve ?? undefined },
        replace: true,
      })
    },
    [navigate, service, image.repository]
  )
  const [vulnerabilitiesSuccessMessage, setVulnerabilitiesSuccessMessage] = useTimedState<string>(10000)
  const [refreshKey, setRefreshKey] = useState(0)

  const refreshIssuesData = useCallback(async () => {
    const matchesCurrentServiceAndImage = (
      filter: { service?: string[]; image?: string[]; repository?: string[]; vulnerability?: string[] } | undefined
    ) =>
      Array.isArray(filter?.service) &&
      filter.service.includes(service) &&
      ((Array.isArray(filter?.image) && filter.image.includes(image.repository)) ||
        (Array.isArray(filter?.repository) && filter.repository.includes(image.repository)))

    // Refetch all remediations for the current service+image.
    // This covers both the broad split query (service+image) and the per-CVE panel query.
    // The remediations data is the source of truth for which tab a vulnerability appears in:
    // after mark FP the new record is fetched here and the CVE moves to the Remediated tab immediately,
    // after revert the deleted record is gone and the CVE moves back to Active immediately —
    // without waiting for the backend to update the vulnerability status.
    await queryClient.refetchQueries({
      type: "all",
      predicate: (query) => {
        const [key, filter] = query.queryKey as [
          string,
          { service?: string[]; image?: string[]; repository?: string[]; vulnerability?: string[] } | undefined,
        ]
        return key === "remediations" && matchesCurrentServiceAndImage(filter)
      },
    })

    // Refetch images to keep counts and pagination in sync.
    await queryClient.refetchQueries({
      type: "all",
      predicate: (query) => {
        const [key, filter] = query.queryKey as [
          string,
          { service?: string[]; image?: string[]; repository?: string[]; vulnerability?: string[] } | undefined,
        ]
        return key === "images" && matchesCurrentServiceAndImage(filter)
      },
    })

    setRefreshKey((k) => k + 1)
  }, [queryClient, service, image.repository])

  // No status filter — remediations are the sole source of truth for which tab a CVE belongs to.
  // Active tab shows CVEs without a remediation record; Remediated tab shows CVEs with one.
  // This makes mark-FP and revert reflect immediately without waiting for backend status updates.
  const activeVulFilter: VulnerabilityFilter | undefined = searchTerm ? { search: [searchTerm] } : undefined
  const remediatedVulFilter: VulnerabilityFilter | undefined = remediatedSearchTerm
    ? { search: [remediatedSearchTerm] }
    : undefined

  const activeIssuesPromise = fetchImages({
    apiClient,
    queryClient,
    filter: {
      service: [service],
      repository: [image.repository],
    },
    firstVulnerabilities: 20,
    afterVulnerabilities: pageCursor,
    vulFilter: activeVulFilter,
  })

  const remediatedIssuesPromise = fetchImages({
    apiClient,
    queryClient,
    filter: {
      service: [service],
      repository: [image.repository],
    },
    firstVulnerabilities: 20,
    afterVulnerabilities: remediatedPageCursor,
    vulFilter: remediatedVulFilter,
  })

  useEffect(() => {
    setRemediatedPageCursor(undefined)
  }, [remediatedSearchTerm])

  const remediationsPromise = fetchRemediations({
    apiClient,
    queryClient,
    filter: {
      service: [service],
      image: [image.repository],
    },
  })

  const handleFalsePositiveSuccess = useCallback(
    async (cveNumber: string) => {
      const text = `Vulnerability ${cveNumber} has been marked as a false positive and moved to the Remediated list.`
      setVulnerabilitiesSuccessMessage(text)
      await refreshIssuesData()
    },
    [refreshIssuesData]
  )

  return (
    <>
      <Tabs selectedIndex={selectedTabIndex} onSelect={handleTabSelect} variant="content">
        <TabList>
          <Tab label="Active Vulnerabilities" />
          <Tab label="Remediated Vulnerabilities" />
        </TabList>
        <TabPanel>
          <VulnerabilitiesTabContent
            service={service}
            image={image}
            setSearchTerm={setSearchTerm}
            setPageCursor={setPageCursor}
            issuesPromise={activeIssuesPromise}
            remediationsPromise={remediationsPromise}
            successMessage={vulnerabilitiesSuccessMessage}
            onFalsePositiveSuccess={handleFalsePositiveSuccess}
          />
        </TabPanel>
        <TabPanel>
          <RemediatedVulnerabilitiesTabContent
            service={service}
            image={image.repository}
            setSearchTerm={setRemediatedSearchTerm}
            issuesPromise={remediatedIssuesPromise}
            remediationsPromise={remediationsPromise}
            setPageCursor={setRemediatedPageCursor}
            onDataRefresh={refreshIssuesData}
            selectedVulnerability={vulRemediations ?? null}
            onSelectVulnerability={handleRemediationPanelVulnerabilityChange}
            refreshKey={refreshKey}
          />
        </TabPanel>
      </Tabs>
    </>
  )
}
