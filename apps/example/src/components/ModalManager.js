/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { useGlobalsCurrentModal } from "./StoreProvider"
import TestModal from "./TestModal"
import TestModalDateTimePicker from "./TestModalDateTimePicker"

const ModalManager = () => {
  const currentModal = useGlobalsCurrentModal()

  switch (currentModal) {
    case "TestModal":
      return <TestModal />
    case "TestModalDateTimePicker":
      return <TestModalDateTimePicker />
    default:
      return null
  }
}

export default ModalManager
