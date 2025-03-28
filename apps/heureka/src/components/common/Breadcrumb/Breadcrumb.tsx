/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback } from "react"
import { Breadcrumb as BreadcrumContainer, BreadcrumbItem, Container } from "@cloudoperators/juno-ui-components"
import { capitalizeFirstLetter } from "../Helpers/helpers"
import { useDispatch, useStore } from "../../../store/StoreProvider"
import { ActionType, ServiceDetailViewParams, UserView } from "../../../store/StoreProvider/types"
import { isNil } from "lodash"

export const Breadcrumb = () => {
  const dispatch = useDispatch()
  const { selectedView } = useStore()

  const handleClick = useCallback((viewId: UserView) => {
    dispatch({
      type: ActionType.SelectView,
      payload: {
        viewId,
      },
    })
  }, [])

  return (
    <Container py px={false}>
      <BreadcrumContainer>
        <BreadcrumbItem icon="home" label="Services" onClick={() => handleClick(UserView.Services)} />
        {selectedView.viewId === UserView.ServiceDetails && (
          <>
            <BreadcrumbItem
              label={capitalizeFirstLetter((selectedView.params as ServiceDetailViewParams).service.name)}
            />
          </>
        )}
      </BreadcrumContainer>
    </Container>
  )
}
