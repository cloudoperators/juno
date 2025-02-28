/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { Spinner, ContentHeading, Stack, Icon } from "@cloudoperators/juno-ui-components"

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

  // eslint-disable-next-line react/prop-types
  const AlertBox = ({ label, number, iconName }) => (
    <div className="flex-1 bg-gradient-to-r from-blue-500 to-green-500 p-6 shadow-md flex items-center justify-start transform hover:scale-105 transition-transform duration-300 ease-in-out border border-gray-400">
      <Icon className="text-white text-5xl mr-6" icon={iconName} />
      <div className="text-white">
        <span className="text-sm block">{label}</span>
        <span className="text-3xl font-extrabold">{number}</span>
      </div>
    </div>
  )

  return (
    <>
      {isLoading && <Spinner variant="primary" />}
      {selectedPeak ? (
        <PeaksDetailPage />
      ) : (
        <>
          <ContentHeading>Peak Overview</ContentHeading>
          <Stack direction="horizontal" distribution="between" gap="10" className="w-full mb-6">
            <AlertBox label="Total Peaks" number="35" iconName="widgets" />
            <AlertBox label="Total Countries" number="12" iconName="place" />
            <AlertBox label="Highest Peak" number="8516m" iconName="expandLess" />
            <AlertBox label="Lowest Peak" number="550m" iconName="expandMore" />
          </Stack>
          <PeaksList
            onSelect={handleSelectPeak}
            isLoading={isLoading}
            isError={isError}
            peaks={data}
            error={error ?? undefined}
          />
        </>
      )}
    </>
  )
}

export default Peaks
