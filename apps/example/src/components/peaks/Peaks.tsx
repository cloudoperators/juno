/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { useQuery } from "@tanstack/react-query"
import { Spinner, Message } from "@cloudoperators/juno-ui-components"

import { useGlobalsQueryClientFnReady } from "../StoreProvider"
import PeaksList from "./PeaksList"

interface CustomError {
  name: string
  message: string
  statusCode?: number
}

export interface Peak {
  id: number
  name: string
  height: number
  mainrange: string
  region: string
  countries: string
  url: string
}

const Peaks: React.FC = () => {
  const queryClientFnReady = useGlobalsQueryClientFnReady()

  const {
    isLoading,
    isError,
    data = [],
    error,
  } = useQuery<Peak[], CustomError>({
    queryKey: ["peaks"],
    enabled: !!queryClientFnReady,
  })

  return (
    <>
      {isError && (
        <Message variant="danger">{`${error?.statusCode ? `${error.statusCode}, ` : ""}${error?.message}`}</Message>
      )}
      {/* Loading indicator for page content */}
      {/* hello */}
      {isLoading && <Spinner variant="primary" />}
      <PeaksList isLoading={isLoading} isError={isError} peaks={data} error={error ?? undefined} />
    </>
  )
}

export default Peaks
