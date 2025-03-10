/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PeakForm from "./PeakForm"

const AddPeak = ({ closeCallback }) => {
  const handleSubmit = (formState) => {
    console.log("Creating new peak:", formState)
    closeCallback()
  }

  return (
    <PeakForm
      initialValues={{
        name: "",
        height: "",
        range: "",
        region: "",
        country: "",
        url: "",
      }}
      closeCallback={closeCallback}
      onSubmit={handleSubmit}
      errorMessage={null}
    />
  )
}

export default AddPeak
