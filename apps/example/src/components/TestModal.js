/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

import { Modal } from "@cloudoperators/juno-ui-components"
import { useGlobalsActions } from "./StoreProvider"

const TestModal = () => {
  const { setCurrentModal } = useGlobalsActions()

  const onConfirm = () => {
    setCurrentModal(null)
  }

  return (
    <Modal
      title="Hello from Modal"
      open
      onCancel={() => setCurrentModal(null)}
      onConfirm={onConfirm}
      confirmButtonLabel="Confirm"
    >
      <span>A default modal</span>
    </Modal>
  )
}

export default TestModal
