/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

// @ts-expect-error TS(2307): Cannot find module '@cloudoperators/juno-ui-compon... Remove this comment to see the full error message
import { Modal } from "@cloudoperators/juno-ui-components"
// @ts-expect-error TS(6142): Module './StoreProvider' was resolved to '/Users/I... Remove this comment to see the full error message
import { useGlobalsActions } from "./StoreProvider"

const TestModal = () => {
  // @ts-expect-error TS(2339): Property 'setCurrentModal' does not exist on type ... Remove this comment to see the full error message
  const { setCurrentModal } = useGlobalsActions()

  const onConfirm = () => {
    setCurrentModal(null)
  }

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Modal
      title="Hello from Modal"
      open
      onCancel={() => setCurrentModal(null)}
      onConfirm={onConfirm}
      confirmButtonLabel="Confirm"
    >
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see
      the full error message // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove
      this comment to see the full error message
      <span>A default modal</span>
    </Modal>
  )
}

export default TestModal
