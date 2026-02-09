/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, useState, useCallback, useEffect } from "react"
import { useRouteContext } from "@tanstack/react-router"
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
import { useActions, Messages, MessagesProvider } from "@cloudoperators/juno-messages-provider"
import { getNormalizedImageVulnerabilitiesResponse, ServiceImage } from "../../../Services/utils"
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

type ImageIssuesListProps = {
  service: string
  image: ServiceImage
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
  onFalsePositiveSuccess: (cveNumber: string) => void
}) => {
  return (
    <>
      {successMessage && (
        <div className="mb-4 mt-4">
          <Message text={successMessage} variant="success" />
        </div>
      )}
      <Messages className="mb-4 mt-4" />
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
          <DataGridHeadCell>Actions</DataGridHeadCell>
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
  issuesPromise,
  remediationsPromise,
  setPageCursor,
  successMessage,
}: {
  service: string
  image: string
  issuesPromise: ReturnType<typeof fetchImages>
  remediationsPromise: ReturnType<typeof fetchRemediations>
  setPageCursor: (cursor: string | null | undefined) => void
  successMessage: string | null
}) => {
  const [selectedVulnerability, setSelectedVulnerability] = useState<string | null>(null)

  return (
    <>
      {successMessage && (
        <div className="mb-4 mt-4">
          <Message text={successMessage} variant="success" />
        </div>
      )}
      <Messages className="mb-4 mt-4" />
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
                  onSelectVulnerability={setSelectedVulnerability}
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
        onClose={() => setSelectedVulnerability(null)}
      />
    </>
  )
}

const SUCCESS_MESSAGE_DURATION_MS = 5000

export const ImageIssuesList = ({ service, image }: ImageIssuesListProps) => {
  const { apiClient, queryClient } = useRouteContext({ from: "/services/$service" })
  const [searchTerm, setSearchTerm] = useState<string | undefined>(undefined)
  const [pageCursor, setPageCursor] = useState<string | null | undefined>(undefined)
  const [remediatedPageCursor, setRemediatedPageCursor] = useState<string | null | undefined>(undefined)
  const [selectedTabIndex, setSelectedTabIndex] = useState(0)
  const [vulnerabilitiesSuccessMessage, setVulnerabilitiesSuccessMessage] = useState<string | null>(null)
  const [remediatedSuccessMessage, setRemediatedSuccessMessage] = useState<string | null>(null)

  const openVulFilter = {
    status: "open",
    ...(searchTerm ? { search: [searchTerm] } : {}),
  }
  const remediatedVulFilter = { status: "remediated" }

  const issuesPromise = fetchImages({
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

  const remediationsPromise = fetchRemediations({
    apiClient,
    queryClient,
    filter: {
      service: [service],
      image: [image.repository],
    },
  })

  useEffect(() => {
    if (!vulnerabilitiesSuccessMessage) return
    const timer = setTimeout(() => setVulnerabilitiesSuccessMessage(null), SUCCESS_MESSAGE_DURATION_MS)
    return () => clearTimeout(timer)
  }, [vulnerabilitiesSuccessMessage])

  useEffect(() => {
    if (!remediatedSuccessMessage) return
    const timer = setTimeout(() => setRemediatedSuccessMessage(null), SUCCESS_MESSAGE_DURATION_MS)
    return () => clearTimeout(timer)
  }, [remediatedSuccessMessage])

  const VulnerabilitiesTab = () => {
    const { addMessage } = useActions()

    const handleFalsePositiveSuccess = useCallback(
      (cveNumber: string) => {
        const text = `Vulnerability ${cveNumber} marked as false positive successfully.`
        addMessage({ variant: "success", text })
        setVulnerabilitiesSuccessMessage(text)
      },
      [addMessage]
    )

    return (
      <VulnerabilitiesTabContent
        service={service}
        image={image}
        setSearchTerm={setSearchTerm}
        setPageCursor={setPageCursor}
        issuesPromise={issuesPromise}
        successMessage={vulnerabilitiesSuccessMessage}
        onFalsePositiveSuccess={handleFalsePositiveSuccess}
      />
    )
  }

  const RemediatedVulnerabilitiesTab = () => {
    return (
      <RemediatedVulnerabilitiesTabContent
        service={service}
        image={image.repository}
        issuesPromise={remediatedIssuesPromise}
        remediationsPromise={remediationsPromise}
        setPageCursor={setRemediatedPageCursor}
        successMessage={remediatedSuccessMessage}
      />
    )
  }

  return (
    <>
      <Tabs selectedIndex={selectedTabIndex} onSelect={setSelectedTabIndex} variant="content">
        <TabList>
          <Tab label="Active Vulnerabilities" />
          <Tab label="Remediated Vulnerabilities" />
        </TabList>
        <TabPanel>
          <MessagesProvider>
            <VulnerabilitiesTab />
          </MessagesProvider>
        </TabPanel>
        <TabPanel>
          <MessagesProvider>
            <RemediatedVulnerabilitiesTab />
          </MessagesProvider>
        </TabPanel>
      </Tabs>
    </>
  )
}
