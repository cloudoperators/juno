import React, { useState } from "react"

import { Modal } from "juno-ui-components"
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
