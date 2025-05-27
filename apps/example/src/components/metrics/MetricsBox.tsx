/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

// NOTE: This is a custom component that doesn't exist in Juno UI. It showcases how custom theme colours can be applied.

import React, { useState } from "react"
import { Spinner, Modal, Icon, Badge, Button, Stack, ModalFooter, ButtonRow } from "@cloudoperators/juno-ui-components"
import { getNumberColorStyle } from "../peaks/utils/getNumberColor"
import ArrowUp from "../../assets/arrow_up.svg?react"
import ArrowDown from "../../assets/arrow_down.svg?react"
import Mountain from "../../assets/mountain.svg?react"
import useNavigationStore from "../../store/useNavigationStore"
import { Pages } from "../constants"
import usePeaksStore from "../../store/usePeaksStore"

export interface PeakDetails {
  id: number
  name: string
  region: string
  country: string
  height: string
  status: string
  recommendation: string
  variant: string
}

export interface MetricsProps {
  label: string
  number?: string
  value?: string
  isLoading: boolean
  iconName?: string
  peakDetails?: PeakDetails
  peakType?: (typeof Metrics)[keyof typeof Metrics]
  hoverable: boolean
}

export const Metrics = {
  HIGHEST_PEAK: "highest",
  LOWEST_PEAK: "lowest",
  TOTAL_PEAKS: "total",
  TOTAL_COUNTRIES: "place",
}

const renderIcon = (peakType?: string) => {
  switch (peakType) {
    case Metrics.HIGHEST_PEAK:
      return <ArrowUp />
    case Metrics.LOWEST_PEAK:
      return <ArrowDown />
    case Metrics.TOTAL_PEAKS:
      return <Mountain />
    case Metrics.TOTAL_COUNTRIES:
      return <Icon className="text-theme-high text-5xl mr-6" icon="place" />
    default:
      return null
  }
}

const MetricsBox: React.FC<MetricsProps> = ({
  label,
  number,
  isLoading = false,
  peakDetails,
  peakType,
  hoverable = false,
}) => {
  const [modalVisible, setModalVisible] = useState(false)

  const isClickable = peakType !== Metrics.TOTAL_PEAKS && peakType !== Metrics.TOTAL_COUNTRIES

  const handleBoxClick = () => {
    if (!isLoading && peakDetails && isClickable) {
      setModalVisible(true)
    }
  }

  const colorClass = peakDetails ? getNumberColorStyle(peakDetails.status) : "text-theme-high"

  const baseStyles =
    "flex-1 bg-gradient-to-r from-blue-500 to-green-500 p-6 shadow-md flex items-center justify-start border"
  const hoverStyles =
    "transition-transform duration-500 transform hover:scale-105 cursor-pointer hover:bg-theme-background-lvl-1 text-theme-high"

  const boxStyles = [baseStyles, hoverable && !isLoading && isClickable ? hoverStyles : ""].join(" ")

  return (
    <>
      <div className={boxStyles} onClick={handleBoxClick} style={{ borderWidth: "1px", borderRadius: "0px" }}>
        {renderIcon(peakType)}
        <PeakInfo
          label={label}
          number={number}
          colorClass={colorClass}
          isLoading={isLoading}
          peakDetails={peakDetails}
        />
      </div>

      <PeakModal
        peakDetails={peakDetails} // Ensure peakDetails includes ID
        colorClass={colorClass}
        modalVisible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </>
  )
}

export default MetricsBox

const PeakInfo: React.FC<{
  label: string
  number?: string
  colorClass: string
  isLoading: boolean
  peakDetails?: PeakDetails
}> = ({ label, number, colorClass, isLoading, peakDetails }) => (
  <div className="text-theme-high">
    <span className="text-sm block">{label}</span>
    {isLoading ? (
      <Spinner />
    ) : (
      <Stack gap="2" className="flex items-center">
        {number && <span className={`text-3xl font-extrabold ${colorClass}`}>{number}</span>}
        {peakDetails?.status && <span className={`text-sm font-bold ${colorClass}`}>{peakDetails.status}</span>}
      </Stack>
    )}
  </div>
)

export const PeakModal: React.FC<{
  peakDetails?: PeakDetails
  colorClass: string
  modalVisible: boolean
  onClose: () => void
}> = ({ peakDetails, colorClass, modalVisible, onClose }) => {
  const { setCurrentPage } = useNavigationStore()
  const { setSelectedPeakId } = usePeaksStore()

  const navigateToDetailPage = () => {
    if (peakDetails) {
      setSelectedPeakId(String(peakDetails.id))
      setCurrentPage(Pages.PEAKS)
      onClose()
    }
  }

  return modalVisible && peakDetails ? (
    <Modal
      open={modalVisible}
      onCancel={onClose}
      closeable
      title={`Details for ${peakDetails.name}, ${peakDetails.country}`}
      size="large"
      modalFooter={
        <ModalFooter style={{ justifyContent: "flex-end" }}>
          <ButtonRow>
            <Button onClick={onClose} label={"Cancel"} />
            <Button variant="primary" onClick={navigateToDetailPage}>
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
            text={peakDetails.status}
            variant={peakDetails.variant || "warning"}
            style={{ width: "70px", textAlign: "center" }}
          />
        </div>
        <div>
          <strong>Height:</strong> {peakDetails.height}
        </div>
        <div>
          <strong>Recommendation:</strong> {peakDetails.recommendation}
        </div>
      </div>
    </Modal>
  ) : null
}
