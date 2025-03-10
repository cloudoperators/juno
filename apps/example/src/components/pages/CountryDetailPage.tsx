/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"
import { Box, CodeBlock, JsonViewer } from "@cloudoperators/juno-ui-components"
import DetailLayout from "../common/DetailLayout"
import ExpandableSection from "../common/ExpandableSection"

const CountryDetailPage = ({ countryName, peaks, onBack }) => {
  const [isJsonView, setIsJsonView] = useState(false)

  const countryPeaks = peaks.filter((peak) => peak.countries === countryName)

  const metrics = [
    { label: "Total Peaks", value: `${countryPeaks.length}` },
    { label: "Highest Peak", value: `${Math.max(...countryPeaks.map((peak) => parseInt(peak.height, 10)))} m` },
    { label: "Lowest Peak", value: `${Math.min(...countryPeaks.map((peak) => parseInt(peak.height, 10)))} m` },
  ]

  const categorizedPeaks = countryPeaks.reduce(
    (acc, peak) => {
      const status = peak.safety.status.toLowerCase()
      if (!acc[status]) acc[status] = []
      acc[status].push(peak)
      return acc
    },
    {} as Record<string, any[]>
  )

  const statusHeaders = {
    safe: { text: "Safe Peaks", variant: "success" },
    caution: { text: "Caution Peaks", variant: "warning" },
    unsafe: { text: "Unsafe Peaks", variant: "error" },
  }

  return (
    <DetailLayout
      title={`Details for ${countryName}`}
      breadcrumbLabel="Countries"
      onBack={onBack}
      metrics={metrics}
      isJsonView={isJsonView}
      toggleView={() => setIsJsonView(!isJsonView)}
    >
      {isJsonView ? (
        <Box className="border border-gray-300 rounded-lg shadow-lg p-6">
          <CodeBlock size="large">
            <JsonViewer
              data={countryPeaks}
              expanded={true}
              toolbar={true}
              title={`Raw JSON Data for Peaks in ${countryName}`}
            />
          </CodeBlock>
        </Box>
      ) : (
        Object.entries(categorizedPeaks).map(([status, peaks]) => (
          <ExpandableSection
            key={status}
            title={statusHeaders[status as keyof typeof statusHeaders].text}
            peaks={peaks}
            variant={statusHeaders[status as keyof typeof statusHeaders].variant}
          />
        ))
      )}
    </DetailLayout>
  )
}

export default CountryDetailPage
