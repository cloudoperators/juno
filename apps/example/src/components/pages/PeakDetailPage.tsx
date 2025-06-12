/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"
import { Box, CodeBlock, JsonViewer, Badge, PortalProvider, Toast } from "@cloudoperators/juno-ui-components"

import usePeaksStore from "../../store/usePeaksStore"

import Section from "../common/Section"
import DataRow from "../common/DataRow"
import useModal from "../hooks/useModal"
import { Metrics } from "../metrics/MetricsBox"
import DetailLayout from "../common/DetailLayout"
import ActionButtons from "../common/ActionButtons"
import usePeakActions from "../hooks/usePeakActions"
import { Pages, TooltipExplanation } from "../constants"
import DeleteConfirmationModal from "../common/DeleteConfirmationModal"

interface PeakDetailPageProps {
  onBack: () => void
}

const PeakDetailPage: React.FC<PeakDetailPageProps> = ({ onBack }) => {
  const [isJsonView, setIsJsonView] = useState<boolean>(false)
  const [showToast, setShowToast] = useState(false)

  const { selectedPeakId, peaks } = usePeaksStore()
  const { handleEdit, handleDelete } = usePeakActions()
  const { isModalOpen, openModal, closeModal } = useModal()

  const peakInfo = peaks.find((peak) => peak.id === selectedPeakId)!

  const metrics = [
    { label: "Height", value: `${peakInfo.height}`, peakType: Metrics.HEIGHT },
    { label: "Safety", value: peakInfo.safety.status, peakType: Metrics.SAFETY },
    { label: "Location", value: `${peakInfo.region}, ${peakInfo.countries}`, peakType: Metrics.TOTAL_COUNTRIES },
  ]

  const handleDeletePeak = () => {
    closeModal()
    setShowToast(true)
    handleDelete()
  }

  const handleToastDismiss = () => setShowToast(false)

  return (
    <DetailLayout
      title={`Details for ${peakInfo.name}`}
      breadcrumbLabel={Pages.PEAKS}
      onBack={onBack}
      metrics={metrics}
      isJsonView={isJsonView}
      toggleView={() => setIsJsonView(!isJsonView)}
      actionButtons={
        <ActionButtons
          onEdit={() => handleEdit(peakInfo.id)}
          onDelete={openModal}
          linkUrl={peakInfo.url}
          appearance="button"
        />
      }
    >
      {isJsonView ? (
        <Box className="border border-gray-300 rounded-lg shadow-lg p-6">
          <CodeBlock size="large">
            <JsonViewer data={peakInfo} expanded={true} toolbar={true} title={`Raw JSON Data for ${peakInfo.name}`} />
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
                    text={peakInfo.safety.status || "N/A"}
                    variant={peakInfo.safety.variant || "info"}
                    className="w-[70px] text-center"
                  />
                }
                tooltipText={TooltipExplanation.SAFETY_STATUS}
              />,
              <DataRow key="recommendation" label="Recommendation" content={peakInfo.safety.recommendation || "N/A"} />,
              <DataRow key="common-hazards" label="Common Hazards" content={peakInfo.safety.common_hazards || "N/A"} />,
            ]}
          />
          <Section
            title="Height Information"
            rows={[
              <DataRow
                key="height"
                label="Height"
                content={metrics[0].value}
                tooltipText={TooltipExplanation.HEIGHT}
              />,
              <DataRow key="prominence" label="Prominence" content={peakInfo.additional_info?.prominence || "N/A"} />,
            ]}
          />
          <Section
            title="Geographical Location"
            rows={[
              <DataRow key="region" label="Region" content={peakInfo.region || "N/A"} />,
              <DataRow key="main-range" label="Main Range" content={peakInfo.mainrange || "N/A"} />,
              <DataRow key="country" label="Country" content={peakInfo.countries || "N/A"} />,
              <DataRow
                key="coordinates"
                label="Coordinates"
                content={peakInfo.additional_info?.coordinates || "N/A"}
              />,
            ]}
          />
          <Section
            title="Environmental Details"
            rows={[
              <DataRow key="climate" label="Climate" content={peakInfo.climate || "N/A"} />,
              <DataRow key="nearest-city" label="Nearest City" content={peakInfo.nearest_city || "N/A"} />,
              <DataRow key="local-fauna" label="Local Fauna" content={peakInfo.local_fauna || "N/A"} />,
              <DataRow
                key="geologic-origin"
                label="Geologic Origin"
                content={peakInfo.additional_info?.geologic_origin || "N/A"}
              />,
            ]}
          />
          <Section
            title="Climbing Information"
            rows={[
              <DataRow key="easiest-route" label="Easiest Route" content={peakInfo.easiest_route || "N/A"} />,
              <DataRow
                key="best-climbing-months"
                label="Best Climbing Months"
                content={peakInfo.best_climbing_months || "N/A"}
              />,
              <DataRow
                key="snow-presence"
                label="Snow Presence"
                content={peakInfo.has_snow !== undefined ? (peakInfo.has_snow ? "Yes" : "No") : "N/A"}
              />,
              <DataRow
                key="permit-required"
                label="Permit Required"
                content={peakInfo.permit_required !== undefined ? (peakInfo.permit_required ? "Yes" : "No") : "N/A"}
              />,
              <DataRow
                key="climbing-routes"
                label="Climbing Routes"
                content={peakInfo.additional_info?.climbing_routes?.join(", ") || "N/A"}
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
                  peakInfo.first_ascent?.date && peakInfo.first_ascent?.by
                    ? `${peakInfo.first_ascent.date} by ${peakInfo.first_ascent.by}`
                    : "N/A"
                }
              />,
              <DataRow
                key="notable-ascents"
                label="Notable Ascents"
                content={peakInfo.additional_info?.notable_ascents?.join(", ") || "N/A"}
              />,
            ]}
          />
        </>
      )}

      <DeleteConfirmationModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={handleDeletePeak}
        title="Confirm Delete"
      />

      <PortalProvider.Portal>
        {showToast && (
          <Toast
            onDismiss={handleToastDismiss}
            text={`Failed to delete ${peakInfo.name}. This is a simulation.s`}
            variant="error"
            className="fixed top-5 right-5 z-50"
          />
        )}
      </PortalProvider.Portal>
    </DetailLayout>
  )
}

export default PeakDetailPage
