/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback, useEffect, useState } from "react"
import { getRouteApi } from "@tanstack/react-router"
import { Panel, PanelBody } from "@cloudoperators/juno-ui-components"
import { MessagesProvider } from "@cloudoperators/juno-messages-provider"
import { capitalizeFirstLetter } from "../../../utils"
import { ServiceImageVersions } from "../../common/ServiceImageVersions"
import { ServiceImageVersion } from "../utils"
import { fetchImageVersions } from "../../../api/fetchImageVersions"

type ServicePanelProps = {
  selectedService?: string
}

export const ServicePanel = ({ selectedService }: ServicePanelProps) => {
  const routeApi = getRouteApi("/services/")
  const navigate = routeApi.useNavigate()
  const { queryClient, apiClient } = routeApi.useRouteContext()
  const [opened, setOpened] = useState(false)

  // create a promise to fetch image versions
  const imageVersionsPromise = selectedService
    ? fetchImageVersions({
        queryClient,
        apiClient,
        service: selectedService,
      })
    : undefined

  const closeServiceOverviewPanel = useCallback(() => {
    navigate({
      to: "/services",
      search: (prev) => {
        const { service, ...rest } = prev
        return { ...rest }
      },
    })
  }, [navigate])

  const goToServiceDetailsPage = useCallback(
    (imageVersion?: ServiceImageVersion) => {
      if (selectedService) {
        navigate({
          to: "/services/$service",
          params: { service: selectedService },
          search: { imageVersion: imageVersion?.version },
        })
      }
    },
    [navigate, selectedService]
  )

  // open or close the panel based on selectedService and service
  useEffect(() => {
    if (selectedService) {
      setOpened(true)
    } else {
      setOpened(false)
    }
  }, [selectedService])

  return (
    <MessagesProvider>
      <Panel
        heading={!!selectedService ? `${capitalizeFirstLetter(selectedService)} Overview` : undefined}
        opened={opened}
        onClose={closeServiceOverviewPanel}
        size="large"
      >
        <PanelBody>
          {selectedService && imageVersionsPromise && (
            <ServiceImageVersions
              imageVersionsPromise={imageVersionsPromise}
              onDetailsButtonClick={goToServiceDetailsPage}
              displayActions
            />
          )}
        </PanelBody>
      </Panel>
    </MessagesProvider>
  )
}
