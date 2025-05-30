/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"
import { Box, CodeBlock, JsonViewer } from "@cloudoperators/juno-ui-components"
import usePeaksStore from "../../store/usePeaksStore"

import DetailLayout from "../common/DetailLayout"
import ExpandableSection from "../common/ExpandableSection"
import { Peak } from "../../mocks/db"
import { Pages } from "../constants"

interface CountryDetailPageProps {
  countryName: string
  onBack: () => void
}

const CountryDetailPage: React.FC<CountryDetailPageProps> = ({ countryName, onBack }) => {
  const [isJsonView, setIsJsonView] = useState<boolean>(false)
  const { peaks } = usePeaksStore() // Direct access to peaks

  const filteredCountryPeaksByName = peaks.filter((peak) => peak.countries === countryName)

  const metrics = [
    { label: "Total Peaks", value: `${filteredCountryPeaksByName.length}` },
    {
      label: "Highest Peak",
      value: `${Math.max(...filteredCountryPeaksByName.map((peak) => (typeof peak.height === "number" ? peak.height : parseInt(peak.height, 10))))} m`,
    },
    {
      label: "Lowest Peak",
      value: `${Math.min(...filteredCountryPeaksByName.map((peak) => (typeof peak.height === "number" ? peak.height : parseInt(peak.height, 10))))} m`,
    },
  ]

  const categorizedPeaksBySafety = filteredCountryPeaksByName.reduce<Record<string, Peak[]>>((acc, peak) => {
    const status = peak.safety.status.toLowerCase()
    if (!acc[status]) acc[status] = []
    acc[status].push(peak)
    return acc
  }, {})

  const statusHeaders: Record<
    keyof typeof categorizedPeaksBySafety,
    { text: string; variant: "success" | "warning" | "error" }
  > = {
    safe: { text: "Safe Peaks", variant: "success" },
    caution: { text: "Caution Peaks", variant: "warning" },
    unsafe: { text: "Unsafe Peaks", variant: "error" },
  }

  return (
    <DetailLayout
      title={`Details for ${countryName}`}
      breadcrumbLabel={Pages.COUNTRIES}
      onBack={onBack}
      metrics={metrics}
      isJsonView={isJsonView}
      toggleView={() => setIsJsonView(!isJsonView)}
    >
      {isJsonView ? (
        <Box className="border border-gray-300 rounded-lg shadow-lg p-6">
          <CodeBlock size="large">
            <JsonViewer
              data={filteredCountryPeaksByName}
              expanded={true}
              toolbar={true}
              title={`Raw JSON Data for Peaks in ${countryName}`}
            />
          </CodeBlock>
        </Box>
      ) : (
        Object.entries(categorizedPeaksBySafety).map(([status, peaks]) => (
          <ExpandableSection
            key={status}
            title={statusHeaders[status].text}
            peaks={peaks}
            variant={statusHeaders[status].variant}
          />
        ))
      )}
    </DetailLayout>
  )
}

export default CountryDetailPage
