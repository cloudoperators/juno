/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

// Needs refactoring

import React, { useState } from "react"
import { Modal, Badge, Button, ModalFooter, ButtonRow, Icon, Spinner, Box } from "@cloudoperators/juno-ui-components"

import { Peak } from "../../mocks/db"
import useUIStore from "../../store/useUIStore"
import usePeaksStore from "../../store/usePeaksStore"
import useConfigStore from "../../store/useConfigStore"
import useNavigationStore from "../../store/useNavigationStore"

import ArrowUp from "../../assets/arrow_up.svg?react"
import ArrowDown from "../../assets/arrow_down.svg?react"
import Mountain from "../../assets/mountain.svg?react"
import Height from "../../assets/height.svg?react"
import Safety from "../../assets/safety.svg?react"

import { Pages } from "../constants"
import { getNumberColorStyle } from "../peaks/utils/getNumberColor"

export interface MetricsProps {
  label: string
  number?: string
  value?: string
  iconName?: string
  peakDetails?: Peak
  peakType?: (typeof Metrics)[keyof typeof Metrics]
  hoverable: boolean
}

export const Metrics = {
  HIGHEST_PEAK: "highest",
  LOWEST_PEAK: "lowest",
  TOTAL_PEAKS: "total",
  TOTAL_COUNTRIES: "place",
  HEIGHT: "height",
  SAFETY: "safety",
}

const renderIcon = (peakType?: string) => {
  switch (peakType) {
    case Metrics.HIGHEST_PEAK:
      return <ArrowUp />
    case Metrics.LOWEST_PEAK:
      return <ArrowDown />
    case Metrics.TOTAL_PEAKS:
      return <Mountain />
    case Metrics.HEIGHT:
      return <Height />
    case Metrics.SAFETY:
      return <Safety />
    case Metrics.TOTAL_COUNTRIES:
      return <Icon className="text-theme-high text-5xl" icon="place" />
    default:
      return null
  }
}

const MetricsBox: React.FC<MetricsProps> = ({ label, number, peakDetails, peakType, hoverable = false }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const { setCurrentPage } = useNavigationStore()
  const { setSelectedPeakId } = usePeaksStore()
  const { setShowPeakDetails } = useUIStore()
  const { isQueryClientReady } = useConfigStore()

  const isClickable =
    isQueryClientReady && peakType !== Metrics.TOTAL_PEAKS && peakType !== Metrics.TOTAL_COUNTRIES && peakDetails

  const handleBoxClick = () => {
    if (isClickable) {
      setModalVisible(true)
    }
  }

  const navigateToDetailPage = () => {
    if (peakDetails) {
      setSelectedPeakId(String(peakDetails.id))
      setShowPeakDetails(true)
      setCurrentPage(Pages.PEAKS)
      setModalVisible(false)
    }
  }

  const colorClass = peakDetails ? getNumberColorStyle(peakDetails.safety.status) : "text-theme-high"

  return (
    <>
      <Box
        className={`flex border p-6 shadow-md ${hoverable && isClickable ? "transition-transform duration-500 transform hover:scale-105 cursor-pointer hover:bg-theme-background-lvl-1 text-theme-high" : ""}`}
        onClick={handleBoxClick}
        style={{ display: "flex", alignItems: "center", width: "100%" }}
      >
        <div className="flex justify-center items-center w-2/4">{renderIcon(peakType)}</div>
        <div className="flex flex-col justify-center items-center w-4/4">
          <PeakInfo label={label} number={number} colorClass={colorClass} peakDetails={peakDetails} />
        </div>
      </Box>

      {modalVisible && peakDetails && (
        <PeakModal
          peakDetails={peakDetails}
          colorClass={colorClass}
          modalVisible={modalVisible}
          onClose={() => setModalVisible(false)}
          onOpenDetail={navigateToDetailPage}
        />
      )}
    </>
  )
}

export default MetricsBox

const PeakInfo: React.FC<{
  label: string
  number?: string
  colorClass: string
  peakDetails?: Peak
}> = ({ label, number, colorClass, peakDetails }) => {
  const { isQueryClientReady } = useConfigStore()
  const isLoading = !peakDetails && !number && isQueryClientReady

  return (
    <div className="text-theme-high text-center flex flex-col items-center">
      <span className="text-sm">{label}</span>
      {isLoading ? <Spinner size="small" /> : <span className={`text-3xl font-extrabold ${colorClass}`}>{number}</span>}
    </div>
  )
}

const PeakModal: React.FC<{
  peakDetails?: Peak
  colorClass: string
  modalVisible: boolean
  onClose: () => void
  onOpenDetail: () => void
}> = ({ peakDetails, modalVisible, onClose, onOpenDetail }) =>
  modalVisible && peakDetails ? (
    <Modal
      open={modalVisible}
      onCancel={onClose}
      closeable
      title={`Details for ${peakDetails.name}, ${peakDetails.countries}`}
      size="large"
      modalFooter={
        <ModalFooter className="flex justify-end">
          <ButtonRow>
            <Button onClick={onClose} label={"Cancel"} />
            <Button variant="primary" onClick={onOpenDetail}>
              Open Detail Page
            </Button>
          </ButtonRow>
        </ModalFooter>
      }
    >
      <div className="flex flex-col space-y-3">
        <div className="flex items-center space-x-2">
          <strong>Safety:</strong>
          <Badge
            icon
            text={peakDetails.safety.status}
            variant={peakDetails.safety.variant || "warning"}
            className="w-[70px] text-center"
          />
        </div>
        <div>
          <strong>Height:</strong> {peakDetails.height}
        </div>
        <div>
          <strong>Recommendation:</strong> {peakDetails.safety.recommendation}
        </div>
      </div>
    </Modal>
  ) : null
