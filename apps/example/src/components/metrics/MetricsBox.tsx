/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"
import { Spinner, Modal, Icon } from "@cloudoperators/juno-ui-components"

import { Metrics } from "../constants"
import { getNumberColorStyle } from "../peaks/utils/getNumberColor"

import ArrowUp from "../../assets/arrow_up.svg?react"
import ArrowDown from "../../assets/arrow_down.svg?react"
import Mountain from "../../assets/mountain.svg?react"

// TO DO: Make component more generic (if needed in the future) or move under peaks/ (if only specific to peaks)

// TO DO: Reuse Peak type
interface PeakDetails {
  name: string
  region: string
  country: string
  height: string
  status: string
  recommendation: string
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

const renderIcon = (peakType?: string) => {
  switch (peakType) {
    case Metrics.HIGHEST_PEAK:
      return <ArrowUp className="mr-6 text-white" />
    case Metrics.LOWEST_PEAK:
      return <ArrowDown className="mr-6 text-white" />
    case Metrics.TOTAL_PEAKS:
      return <Mountain className="mr-6 text-white" />
    case Metrics.TOTAL_COUNTRIES:
      return <Icon className="text-white text-5xl mr-6" icon="place" />
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

  const handleBoxClick = () => {
    if (!isLoading && peakDetails) {
      setModalVisible(true)
    }
  }

  const colorStyle = peakDetails ? getNumberColorStyle(peakDetails.status) : { color: "#FFFFFF" }

  const baseStyles =
    "flex-1 bg-gradient-to-r from-blue-500 to-green-500 p-6 shadow-md flex items-center justify-start border"
  const hoverStyles =
    "transition-transform duration-500 transform hover:scale-105 cursor-pointer hover:bg-theme-background-lvl-1 text-white"

  const boxStyles = [baseStyles, hoverable && !isLoading ? hoverStyles : ""].join(" ")

  return (
    <>
      <div className={boxStyles} onClick={handleBoxClick} style={{ borderWidth: "1px", borderRadius: "0px" }}>
        {renderIcon(peakType)}
        <PeakInfo
          label={label}
          number={number}
          colorStyle={colorStyle}
          isLoading={isLoading}
          peakDetails={peakDetails}
        />
      </div>

      <PeakModal
        peakDetails={peakDetails}
        colorStyle={colorStyle}
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
  colorStyle: React.CSSProperties
  isLoading: boolean
  peakDetails?: PeakDetails
}> = ({ label, number, colorStyle, isLoading, peakDetails }) => (
  <div className="text-white">
    <span className="text-sm block">{label}</span>
    {isLoading ? (
      <Spinner />
    ) : (
      <div className="flex items-center">
        {number && (
          <span className="text-3xl font-extrabold" style={colorStyle}>
            {number}
          </span>
        )}
        {peakDetails?.status && (
          <span className="text-sm font-bold ml-2" style={colorStyle}>
            {peakDetails.status}
          </span>
        )}
      </div>
    )}
  </div>
)

const PeakModal: React.FC<{
  peakDetails?: PeakDetails
  colorStyle: React.CSSProperties
  modalVisible: boolean
  onClose: () => void
}> = ({ peakDetails, colorStyle, modalVisible, onClose }) =>
  modalVisible && peakDetails ? (
    <Modal
      open={modalVisible}
      onCancel={onClose}
      closeable
      title={`Details for ${peakDetails.name}, ${peakDetails.country}`}
      size="large"
    >
      <h3 className="text-lg mb-3">
        <span style={colorStyle}>{`This Peak is ${peakDetails.status}!`}</span>
      </h3>
      <>
        <div>
          <strong>Height:</strong> {peakDetails.height}
        </div>
        <div>
          <strong>Recommendation:</strong> {peakDetails.recommendation}
        </div>
      </>
    </Modal>
  ) : null
