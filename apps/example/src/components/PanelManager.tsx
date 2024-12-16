/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo } from "react"
// @ts-expect-error TS(2307): Cannot find module '@cloudoperators/juno-ui-compon... Remove this comment to see the full error message
import { Panel } from "@cloudoperators/juno-ui-components"
// @ts-expect-error TS(6142): Module './peaks/PeaksEdit' was resolved to '/Users... Remove this comment to see the full error message
import PeaksEdit from "./peaks/PeaksEdit"
// @ts-expect-error TS(6142): Module './peaks/PeaksNew' was resolved to '/Users/... Remove this comment to see the full error message
import PeaksNew from "./peaks/PeaksNew"
// @ts-expect-error TS(6142): Module './StoreProvider' was resolved to '/Users/I... Remove this comment to see the full error message
import { useGlobalsActions, useGlobalsCurrentPanel } from "./StoreProvider"

const PanelManager = () => {
  // @ts-expect-error TS(2339): Property 'setCurrentPanel' does not exist on type ... Remove this comment to see the full error message
  const { setCurrentPanel } = useGlobalsActions()
  const currentPanel = useGlobalsCurrentPanel()

  const heading = useMemo(() => {
    // @ts-expect-error TS(2571): Object is of type 'unknown'.
    switch (currentPanel?.type) {
      case "PeaksEdit":
        return "Edit Peak"
      case "PeaksNew":
        return "Add a New Peak"
      default:
        return null
    }
  }, [currentPanel])

  const panelBody = () => {
    // @ts-expect-error TS(2571): Object is of type 'unknown'.
    switch (currentPanel?.type) {
      case "PeaksEdit":
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        return <PeaksEdit peakId={currentPanel?.itemId} closeCallback={onClose} />
      case "PeaksNew":
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        return <PeaksNew closeCallback={onClose} />
      default:
        return null
    }
  }

  const onClose = () => {
    setCurrentPanel(null)
  }

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Panel heading={heading} opened={panelBody() ? true : false} onClose={onClose}>
      {panelBody()}
    </Panel>
  )
}

export default PanelManager
