/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"
import { Box, CodeBlock, JsonViewer, Badge, Stack } from "@cloudoperators/juno-ui-components"
import DetailLayout from "../common/DetailLayout"
import Section from "../common/Section"
import DataRow from "../common/DataRow"
import usePeakActions from "../hooks/usePeakActions"
import useModal from "../hooks/useModal"
import DeleteConfirmationModal from "../common/DeleteConfirmationModal"
import ActionButtons from "../common/ActionButtons"
import { Pages } from "../constants"

const PeakDetailPage = ({ peak, onBack }) => {
  const [isJsonView, setIsJsonView] = useState(false)
  const { handleEdit, handleDelete } = usePeakActions(onBack)
  const { isModalOpen, openModal, closeModal } = useModal()

  const metrics = [
    { label: "Height", value: `${parseInt(peak.height, 10).toLocaleString()} m` },
    { label: "Safety", value: peak.safety.status },
    { label: "Location", value: `${peak.region}, ${peak.countries}` },
  ]

  const tooltips = {
    safetyStatus:
      "The safety indicator reflects climbing suitability based on height. Safe: < 6000m, Caution: 6000-7000m, Unsafe: > 8000m",
    height: "Measured from sea level to peak.",
    prominence: "The vertical distance between the peak and the lowest contour line encircling it but no higher peak.",
    coordinates: "Geographical coordinates of the peak.",
    climate: "Climate type of the region where the peak is located.",
    localFauna: "Animals native to the area surrounding the peak.",
    geologicOrigin: "How the geological structure of the peak was formed.",
  }

  return (
    <DetailLayout
      title={`Details for ${peak.name}`}
      breadcrumbLabel={Pages.PEAKS}
      onBack={onBack}
      metrics={metrics}
      isJsonView={isJsonView}
      toggleView={() => setIsJsonView(!isJsonView)}
      actionButtons={
        <ActionButtons
          onEdit={() => handleEdit(peak.id)}
          onDelete={openModal}
          linkUrl={peak.url}
          appearance="button" // Distinct appearance for detail page
        />
      }
    >
      {isJsonView ? (
        <Box className="border border-gray-300 rounded-lg shadow-lg p-6">
          <CodeBlock size="large">
            <JsonViewer data={peak} expanded={true} toolbar={true} title={`Raw JSON Data for ${peak.name}`} />
          </CodeBlock>
        </Box>
      ) : (
        <>
          <Section
            title="Safety Information"
            rows={[
              <DataRow
                key="safety-status"
                label="Safety"
                content={
                  <Badge
                    icon
                    text={peak.safety.status || "N/A"}
                    variant={peak.safety.variant || "info"}
                    style={{ width: "70px", textAlign: "center" }}
                  />
                }
                tooltipText={tooltips.safetyStatus}
              />,
              <DataRow key="recommendation" label="Recommendation" content={peak.safety.recommendation || "N/A"} />,
              <DataRow key="common-hazards" label="Common Hazards" content={peak.safety.common_hazards || "N/A"} />,
            ]}
          />
          <Section
            title="Height Information"
            rows={[
              <DataRow key="height" label="Height" content={metrics[0].value} tooltipText={tooltips.height} />,
              <DataRow key="prominence" label="Prominence" content={peak.additional_info?.prominence || "N/A"} />,
            ]}
          />
          <Section
            title="Geographical Location"
            rows={[
              <DataRow key="region" label="Region" content={peak.region || "N/A"} />,
              <DataRow key="main-range" label="Main Range" content={peak.mainrange || "N/A"} />,
              <DataRow key="country" label="Country" content={peak.countries || "N/A"} />,
              <DataRow key="coordinates" label="Coordinates" content={peak.additional_info?.coordinates || "N/A"} />,
            ]}
          />
          <Section
            title="Environmental Details"
            rows={[
              <DataRow key="climate" label="Climate" content={peak.climate || "N/A"} />,
              <DataRow key="nearest-city" label="Nearest City" content={peak.nearest_city || "N/A"} />,
              <DataRow key="local-fauna" label="Local Fauna" content={peak.local_fauna || "N/A"} />,
              <DataRow
                key="geologic-origin"
                label="Geologic Origin"
                content={peak.additional_info?.geologic_origin || "N/A"}
              />,
            ]}
          />
          <Section
            title="Climbing Information"
            rows={[
              <DataRow key="easiest-route" label="Easiest Route" content={peak.easiest_route || "N/A"} />,
              <DataRow
                key="best-climbing-months"
                label="Best Climbing Months"
                content={peak.best_climbing_months || "N/A"}
              />,
              <DataRow
                key="snow-presence"
                label="Snow Presence"
                content={peak.has_snow !== undefined ? (peak.has_snow ? "Yes" : "No") : "N/A"}
              />,
              <DataRow
                key="permit-required"
                label="Permit Required"
                content={peak.permit_required !== undefined ? (peak.permit_required ? "Yes" : "No") : "N/A"}
              />,
              <DataRow
                key="climbing-routes"
                label="Climbing Routes"
                content={peak.additional_info?.climbing_routes?.join(", ") || "N/A"}
              />,
            ]}
          />
          <Section
            title="Historical Information"
            rows={[
              <DataRow
                key="first-ascent"
                label="First Ascent"
                content={
                  peak.first_ascent?.date && peak.first_ascent?.by
                    ? `${peak.first_ascent.date} by ${peak.first_ascent.by}`
                    : "N/A"
                }
              />,
              <DataRow
                key="notable-ascents"
                label="Notable Ascents"
                content={peak.additional_info?.notable_ascents?.join(", ") || "N/A"}
              />,
            ]}
          />
        </>
      )}

      <DeleteConfirmationModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={() => handleDelete(peak.id)}
        title="Confirm Delete"
      />
    </DetailLayout>
  )
}

export default PeakDetailPage
