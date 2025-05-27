/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"
import { Box, CodeBlock, JsonViewer, Badge, PortalProvider, Toast } from "@cloudoperators/juno-ui-components"

import Section from "../common/Section"
import DataRow from "../common/DataRow"
import useModal from "../hooks/useModal"
import DetailLayout from "../common/DetailLayout"
import ActionButtons from "../common/ActionButtons"
import usePeakActions from "../hooks/usePeakActions"
import { Pages, TooltipExplanation } from "../constants"
import DeleteConfirmationModal from "../common/DeleteConfirmationModal"

import { Peak } from "../../mocks/db"

interface PeakDetailPageProps {
  peak: Peak
  onBack: () => void
}

const PeakDetailPage: React.FC<PeakDetailPageProps> = ({ peak, onBack }) => {
  const [isJsonView, setIsJsonView] = useState<boolean>(false)
  const { handleEdit, handleDelete } = usePeakActions()
  const { isModalOpen, openModal, closeModal } = useModal()
  const [showToast, setShowToast] = useState(false)

  const formatHeight = (height: string | number): string => {
    const numericHeight = typeof height === "number" ? height : parseInt(height, 10)
    return numericHeight.toLocaleString()
  }

  const metrics = [
    { label: "Height", value: `${formatHeight(peak.height)} m` },
    { label: "Safety", value: peak.safety.status },
    { label: "Location", value: `${peak.region}, ${peak.countries}` },
  ]

  const handleDeletePeak = () => {
    closeModal()
    setShowToast(true)
    handleDelete()
  }

  const handleToastDismiss = () => setShowToast(false)

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
          onEdit={() => handleEdit(+peak.id)}
          onDelete={openModal}
          linkUrl={peak.url}
          appearance="button"
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
                    className="w-[70px] text-center"
                  />
                }
                tooltipText={TooltipExplanation.SAFETY_STATUS}
              />,
              <DataRow key="recommendation" label="Recommendation" content={peak.safety.recommendation || "N/A"} />,
              <DataRow key="common-hazards" label="Common Hazards" content={peak.safety.common_hazards || "N/A"} />,
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
        onConfirm={handleDeletePeak}
        title="Confirm Delete"
      />

      <PortalProvider.Portal>
        {showToast && (
          <Toast
            onDismiss={handleToastDismiss}
            text={`Failed to delete ${peak.name}. This is a simulation.s`}
            variant="error"
            className="fixed top-5 right-5 z-50"
          />
        )}
      </PortalProvider.Portal>
    </DetailLayout>
  )
}

export default PeakDetailPage
