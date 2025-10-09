/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useLayoutEffect } from "react"
import { Panel, PanelBody } from "@cloudoperators/juno-ui-components"
import { useDataDetailsViolationGroupKind, useDataActions } from "../StoreProvider"
import HintLoading from "../shared/HintLoading"
import ViolationDetailsList from "./ViolationDetailsList"
import Filters from "../filters/Filters"
import { useNavigate } from "@tanstack/react-router"

const ViolationDetails = () => {
  const navigate = useNavigate()
  const detailsViolationGroupKind = useDataDetailsViolationGroupKind()
  // @ts-expect-error - setDetailsViolationGroupKind is not defined
  const { setDetailsViolationGroupKind } = useDataActions()
  const [showContent, setShowContent] = useState(false)

  // reset the scroll position when the detailsViolationGroup changes and display the loading indicator
  useLayoutEffect(() => {
    setShowContent(false)
  }, [detailsViolationGroupKind])

  useEffect(() => {
    if (!detailsViolationGroupKind) return
    setShowContent(true)
  }, [detailsViolationGroupKind])

  return (
    <Panel
      heading={`Check: ${detailsViolationGroupKind}`}
      onClose={() => {
        setDetailsViolationGroupKind(null)
        navigate({
          to: "/violations",
          search: (prev) => ({ ...prev, violationGroup: undefined }),
        })
      }}
      opened={!!detailsViolationGroupKind}
      size="large"
    >
      <PanelBody>
        {showContent ? (
          <>
            <Filters />
            <ViolationDetailsList />
          </>
        ) : (
          // @ts-ignore
          <>{detailsViolationGroupKind && <HintLoading />}</>
        )}
      </PanelBody>
    </Panel>
  )
}

export default ViolationDetails
