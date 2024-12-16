/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
// @ts-expect-error TS(6142): Module './StoreProvider' was resolved to '/Users/I... Remove this comment to see the full error message
import { useGlobalsCurrentModal } from "./StoreProvider"
// @ts-expect-error TS(6142): Module './TestModal' was resolved to '/Users/I5313... Remove this comment to see the full error message
import TestModal from "./TestModal"

const ModalManager = () => {
  const currentModal = useGlobalsCurrentModal()

  switch (currentModal) {
    case "TestModal":
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      return <TestModal />
    default:
      return null
  }
}

export default ModalManager
