/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense } from "react"
import {
  DataGrid,
  DataGridRow,
  DataGridHeadCell,
  Icon,
  Stack,
  ContentHeading,
} from "@cloudoperators/juno-ui-components"
import { ObservableQuery } from "@apollo/client"
import { GetImageVersionsQuery } from "../../../../generated/graphql"
import { ImageVersionIssuesDataRows } from "./ImageVersionIssuesDataRows"
import { ErrorBoundary } from "../../../common/ErrorBoundary"
import { getErrorDataRowComponent } from "../../../common/getErrorDataRow"
import { LoadingDataRow } from "../../../common/LoadingDataRow"

type ImageVersionIssuesListProps = {
  issuesPromise: Promise<ObservableQuery.Result<GetImageVersionsQuery>>
  service: string
  image: string
}

export const ImageVersionIssuesList = ({ issuesPromise, service, image }: ImageVersionIssuesListProps) => {
  return (
    <>
      <Stack gap="2" className="mb-4 mt-8">
        <ContentHeading>Vulnerabilities</ContentHeading>
      </Stack>
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
            resetKeys={[issuesPromise]}
          >
            <Suspense fallback={<LoadingDataRow colSpan={4} />}>
              <ImageVersionIssuesDataRows issuesPromise={issuesPromise} service={service} image={image} />
            </Suspense>
          </ErrorBoundary>
        )}
      </DataGrid>
    </>
  )
}
