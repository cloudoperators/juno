/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useMemo } from "react"
import { getCertificates } from "../queries"
import { useActions } from "messages-provider"
import {
  useCertShowNew,
  useRevokedList,
  useCertActions,
  useAuthData,
  useGlobalsEndpoint,
  useGlobalsDocumentationLinks,
  useGlobalsIsMock,
} from "../hooks/useStore"
import { parseError } from "../helpers"
import {
  DataGrid,
  DataGridRow,
  DataGridCell,
  DataGridHeadCell,
  DataGridToolbar,
  ButtonRow,
  Container,
  Stack,
} from "juno-ui-components"
import CertificateListItem from "./CertificateListItem"
import AddNewSSOButton from "./AddNewSSOButton"
import HintLoading from "./HintLoading"
import { useEndlessScrollList } from "utils"
import CAsListItem from "./CAsListItem"

const Heading = `
jn-font-bold
jn-text-lg
jn-text-theme-high
jn-pb-2
 `

const CertificateList = ({ ca }) => {
  const { addMessage } = useActions()
  const showPanel = useCertShowNew()
  const { setShowNewCert } = useCertActions()
  const revokedList = useRevokedList()
  const authData = useAuthData()
  const endpoint = useGlobalsEndpoint()
  const docuLinks = useGlobalsDocumentationLinks()
  const isMock = useGlobalsIsMock()

  // fetch the certificates
  const { isLoading, isError, data, error } = getCertificates(
    authData?.JWT,
    endpoint,
    ca?.name,
    revokedList,
    isMock
  )
  const LIST_COLUMNS = 6

  const items = useMemo(() => {
    if (!data) return []
    return data
  }, [data])

  const { scrollListItems, iterator } = useEndlessScrollList(items, {
    loadingObject: (
      <DataGridRow>
        <DataGridCell colSpan={LIST_COLUMNS}>
          <span>Loading ...</span>
        </DataGridCell>
      </DataGridRow>
    ),
    refFunction: (ref) => (
      <DataGridRow>
        <DataGridCell colSpan={LIST_COLUMNS} className="border-b-0 py-0">
          <span ref={ref} />
        </DataGridCell>
      </DataGridRow>
    ),
  })

  // dispatch error with useEffect because error variable will first set once all retries did not succeed
  useEffect(() => {
    if (error) {
      addMessage({
        variant: "error",
        text: parseError(error),
      })
    }
  }, [error])

  const onAddClicked = () => {
    setShowNewCert(true)
  }

  return (
    <>
      <h1 className={Heading}>{ca?.display_name || ca?.name}</h1>
      <div>{ca?.description} </div>
      {docuLinks[ca.name] && (
        <a href={docuLinks[ca.name]} target="_blank">
          Read more about {ca.display_name || ca.name} in our documentation
        </a>
      )}

      <Container px={false} py className="overflow-auto">
        {isLoading && !data ? (
          <HintLoading text="Loading certificates..." />
        ) : (
          <>
            {data && data.length > 0 && (
              <>
                <DataGridToolbar>
                  <ButtonRow>
                    <AddNewSSOButton
                      disabled={!data || showPanel}
                      onClick={onAddClicked}
                    />
                  </ButtonRow>
                </DataGridToolbar>
                <DataGrid gridColumnTemplate="2fr 2.25fr 0.75fr min-content 1.5fr min-content">
                  <DataGridRow>
                    <DataGridHeadCell nowrap={true}>Name / ID</DataGridHeadCell>
                    <DataGridHeadCell>Description</DataGridHeadCell>
                    <DataGridHeadCell>User name / ID</DataGridHeadCell>
                    <DataGridHeadCell>State</DataGridHeadCell>
                    <DataGridHeadCell>Expiration date</DataGridHeadCell>
                    <DataGridHeadCell></DataGridHeadCell>
                  </DataGridRow>

                  {scrollListItems?.length > 0 ? (
                    <>
                      {iterator.map((item, index) => (
                        <CertificateListItem key={index} item={item} ca={ca} />
                      ))}
                    </>
                  ) : (
                    <DataGridRow>
                      <DataGridCell colSpan={LIST_COLUMNS}>
                        <HintNotFound text="No certificates found" />
                      </DataGridCell>
                    </DataGridRow>
                  )}
                </DataGrid>
              </>
            )}
            {data && data.length === 0 && (
              <Stack
                alignment="center"
                distribution="center"
                direction="vertical"
                className="mt-[10vh]"
              >
                <p className="text-xl">
                  It seems that no <b>{ca?.display_name || ca?.name}</b>{" "}
                  certificates have been created yet.
                </p>
                <p className="text-xl">Do you want to create a new one?</p>
                <AddNewSSOButton
                  className="mt-4"
                  label={`Add new cert`}
                  onClick={onAddClicked}
                />
              </Stack>
            )}
          </>
        )}
      </Container>
    </>
  )
}

export default CertificateList
