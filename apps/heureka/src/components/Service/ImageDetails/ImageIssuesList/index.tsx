/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, useState, useCallback, useEffect, useRef } from "react"
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
  successMessage,
  onFalsePositiveSuccess,
}: {
  service: string
  image: ServiceImage
  setSearchTerm: (term: string | undefined) => void
  setPageCursor: (cursor: string | null | undefined) => void
  issuesPromise: ReturnType<typeof fetchImages>
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
            resetKeys={[issuesPromise]}
          >
            <Suspense fallback={<LoadingDataRow colSpan={5} />}>
              <IssuesDataRows
                issuesPromise={issuesPromise}
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
  onDataRefresh?: (vulnerability: string) => void | Promise<void>
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
  const [pollErrorMessage, setPollErrorMessage] = useTimedState<string>(10000)
  const [refreshKey, setRefreshKey] = useState(0)
  const pollTimeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([])
  const isMountedRef = useRef(true)

  useEffect(() => {
    isMountedRef.current = true
    return () => {
      isMountedRef.current = false
      pollTimeoutsRef.current.forEach(clearTimeout)
    }
  }, [])

  const refreshIssuesData = useCallback(
    async (vulnerability: string) => {
      // Helper: match only queries for the currently viewed service + image.
      const matchesCurrentServiceAndImage = (
        filter: { service?: string[]; image?: string[]; repository?: string[]; vulnerability?: string[] } | undefined
      ) =>
        Array.isArray(filter?.service) &&
        filter.service.includes(service) &&
        ((Array.isArray(filter?.image) && filter.image.includes(image.repository)) ||
          (Array.isArray(filter?.repository) && filter.repository.includes(image.repository)))

      // 1. Immediately refetch remediations for the affected CVE so the panel shows fresh data.
      await queryClient.refetchQueries({
        type: "all",
        predicate: (query) => {
          const [key, filter] = query.queryKey as [
            string,
            { service?: string[]; image?: string[]; repository?: string[]; vulnerability?: string[] } | undefined,
          ]
          return (
            key === "remediations" &&
            matchesCurrentServiceAndImage(filter) &&
            Array.isArray(filter?.vulnerability) &&
            filter.vulnerability.includes(vulnerability)
          )
        },
      })

      // 2. Immediately refetch images so the active/remediated tabs reflect the change.
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

      // 3. Bump refreshKey so memoized promises (e.g. RemediationHistoryPanel) re-read from cache.
      setRefreshKey((k) => k + 1)

      // 4. Schedule background re-polls at 2.5 min and 5 min.
      //    The backend takes ~5–6 min to propagate, so a second pass catches late updates.
      //    Note: we use setTimeout + invalidateQueries (not refetchInterval) because the data
      //    layer relies on ensureQueryData + React use() for Suspense, not useQuery hooks.
      pollTimeoutsRef.current.forEach(clearTimeout)
      pollTimeoutsRef.current = []
      ;[2.5 * 60 * 1000, 5 * 60 * 1000].forEach((delay) => {
        const id = setTimeout(() => {
          queryClient
            .invalidateQueries({
              predicate: (query) => {
                const [key, filter] = query.queryKey as [
                  string,
                  { service?: string[]; image?: string[]; repository?: string[]; vulnerability?: string[] } | undefined,
                ]
                if (key === "images" || key === "remediations") {
                  return matchesCurrentServiceAndImage(filter)
                }
                return false
              },
            })
            .then(() => {
              if (!isMountedRef.current) return
              setRefreshKey((k) => k + 1)
            })
            .catch(() => {
              if (!isMountedRef.current) return
              setPollErrorMessage(
                "Background data refresh failed. The table may not reflect the latest status, you can refresh the page to see the latest data."
              )
            })
        }, delay)
        pollTimeoutsRef.current.push(id)
      })
    },
    [queryClient, service, image.repository, isMountedRef, setPollErrorMessage]
  )

  const openVulFilter = {
    status: "open",
    ...(searchTerm ? { search: [searchTerm] } : {}),
  }
  const remediatedVulFilter = {
    status: "remediated",
    ...(remediatedSearchTerm ? { search: [remediatedSearchTerm] } : {}),
  }

  const activeIssuesPromise = fetchImages({
    apiClient,
    queryClient,
    filter: {
      service: [service],
      repository: [image.repository],
    },
    firstVulnerabilities: 20,
    afterVulnerabilities: pageCursor,
    vulFilter: openVulFilter as VulnerabilityFilter,
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
    vulFilter: remediatedVulFilter as VulnerabilityFilter,
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
      const text = `Vulnerability ${cveNumber} has been marked as a false positive. The status may take up to 5–6 minutes to update in the tables.`
      setVulnerabilitiesSuccessMessage(text)
      await refreshIssuesData(cveNumber)
    },
    [refreshIssuesData]
  )

  return (
    <>
      {pollErrorMessage && (
        <div className="mb-4">
          <Message text={pollErrorMessage} variant="error" />
        </div>
      )}
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
