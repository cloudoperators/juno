/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback, useEffect, useState } from "react"
import { useNavigate, useRouteContext, useSearch } from "@tanstack/react-router"
import { Panel, PanelBody } from "@cloudoperators/juno-ui-components"
import { MessagesProvider } from "@cloudoperators/juno-messages-provider"
import { capitalizeFirstLetter } from "../../../utils"
import { ServiceImageVersions } from "../../common/ServiceImageVersions"
import { ServiceImageVersion } from "../utils"
import { fetchImageVersions } from "../../../api/fetchImageVersions"

export const ServicePanel = () => {
  const navigate = useNavigate()
  const { queryClient, apiClient } = useRouteContext({ from: "/services/" })
  const { service } = useSearch({ from: "/services/" })
  const [opened, setOpened] = useState(false)

  // create a promise to fetch image versions
  const imageVersionsPromise = service
    ? fetchImageVersions({
        queryClient,
        apiClient,
        service: service,
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
      if (service) {
        navigate({
          to: "/services/$service",
          params: { service: service },
          search: { imageVersion: imageVersion?.version },
        })
      }
    },
    [navigate, service]
  )

  // open or close the panel based on service and service
  useEffect(() => {
    if (service) {
      setOpened(true)
    } else {
      setOpened(false)
    }
  }, [service])

  return (
    <MessagesProvider>
      <Panel
        heading={!!service ? `${capitalizeFirstLetter(service)} Overview` : undefined}
        opened={opened}
        onClose={closeServiceOverviewPanel}
        size="large"
      >
        <PanelBody>
          {service && imageVersionsPromise && (
            <ServiceImageVersions
              displayActions
              imageVersionsPromise={imageVersionsPromise}
              onDetailsButtonClick={goToServiceDetailsPage}
            />
          )}
        </PanelBody>
      </Panel>
    </MessagesProvider>
  )
}
