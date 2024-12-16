/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { broadcast, watch, get, onGet } from "@cloudoperators/juno-communicator"
// @ts-expect-error TS(7016): Could not find a declaration file for module '@clo... Remove this comment to see the full error message
import { MessagesProvider } from "@cloudoperators/juno-messages-provider"
import { mockedSession } from "@cloudoperators/juno-oauth"
// @ts-expect-error TS(7016): Could not find a declaration file for module '@clo... Remove this comment to see the full error message
import { registerConsumer } from "@cloudoperators/juno-url-state-provider"

console.debug("==import communicator", {
  broadcast,
  watch,
  get,
  onGet,
})

console.debug("==import oauth", mockedSession)
console.debug("==import juno url state provider", registerConsumer("MONOREPO"))
console.debug("==import message provider", {
  MessagesProvider,
})

const MonorepoChecker = () => {
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <></>
}

export default MonorepoChecker
