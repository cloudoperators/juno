/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

import { useAlertsRegionsFiltered, useAlertsSeverityCountsPerRegion } from "../StoreProvider"
import Region from "./Region"
import { useBoundQuery } from "../../hooks/useBoundQuery"

const regionsClasses = `
  grid
  auto-rows-fr
  grid-cols-[repeat(auto-fit,_minmax(21rem,_1fr))]
  gap-3
  mb-8
`

const RegionsList: React.FC = () => {
  const { isLoading } = useBoundQuery("alerts")
  const severityCountsPerRegion = useAlertsSeverityCountsPerRegion()
  const regions = useAlertsRegionsFiltered()

  const renderRegions = () => {
    if (!isLoading && regions) {
      return (
        <div className={`regions ${regionsClasses}`}>
          {regions.map((region) => (
            <Region key={`${region}`} region={region} severityCounts={severityCountsPerRegion[region]} />
          ))}
        </div>
      )
    }
    return null
  }

  return <>{renderRegions()}</>
}

export default RegionsList
