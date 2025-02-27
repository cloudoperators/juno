import React, { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { Spinner, Message } from "@cloudoperators/juno-ui-components"

import { useGlobalsQueryClientFnReady } from "../StoreProvider"
import PeaksList from "./PeaksList"
import PeaksDetailPage from "./PeaksDetailPage"

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

  const [selectedPeak, setSelectedPeak] = useState<Peak | null>(null)

  const handleSelectPeak = (peak: Peak) => setSelectedPeak(peak)

  return (
    <>
      {isError && (
        <Message variant="danger">{`${error?.statusCode ? `${error.statusCode}, ` : ""}${error?.message}`}</Message>
      )}
      {isLoading && <Spinner variant="primary" />}
      {selectedPeak ? (
        <PeaksDetailPage />
      ) : (
        <PeaksList
          onSelect={() => ""} //handleSelectPeak
          isLoading={isLoading}
          isError={isError}
          peaks={data}
          error={error ?? undefined}
        />
      )}
    </>
  )
}

export default Peaks
