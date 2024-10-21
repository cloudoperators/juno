/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { useGlobalsCurrentModal } from "./StoreProvider"
import TestModal from "./TestModal"

const ModalManager = () => {
  const currentModal = useGlobalsCurrentModal()

  switch (currentModal) {
    case "TestModal":
      return <TestModal />
    default:
      return null
  }
}

export default ModalManager
