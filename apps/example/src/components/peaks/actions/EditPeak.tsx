/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PeakForm from "./PeakForm"

const EditPeak = ({ peakId, closeCallback }) => {
  const peakData = {
    id: peakId,
    name: "Mount Sample",
    height: "8848",
    range: "Himalayas",
    region: "Asia",
    country: "Nepal/China",
    url: "https://example.com/sample",
  }

  const handleSubmit = (formState) => {
    console.log("Editing peak:", formState)
    closeCallback()
  }

  return <PeakForm initialValues={peakData} closeCallback={closeCallback} onSubmit={handleSubmit} errorMessage={null} />
}

export default EditPeak
