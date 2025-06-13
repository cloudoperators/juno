/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback, use } from "react"
import { useLoaderData, useNavigate, useSearch } from "@tanstack/react-router"
import { ServiceDataRow } from "./ServiceDataRow"
import { EmptyDataGridRow } from "../../../common/EmptyDataGridRow"
import { ServiceType } from "../../../types"
import { getNormalizedData } from "../../utils"

const COLUMN_SPAN = 8

export const ServicesDataRows = () => {
  const navigate = useNavigate()
  const { servicesPromise } = useLoaderData({ from: "/services/" })
  const { service } = useSearch({ from: "/services/" })
  const { error, data } = use(servicesPromise)
  const { services } = getNormalizedData(data)

  const openServiceOverviewPanel = useCallback((service: ServiceType) => {
    navigate({
      to: "/services",
      search: (prev) => ({ ...prev, service: service.name }), // copy the existing search params and add new `service` param
    })
  }, [])

  const goToServiceDetailsPage = useCallback((service: ServiceType) => {
    navigate({
      to: "/services/$service",
      params: { service: service.name },
    })
  }, [])

  return (
    <>
      {!error &&
        services.length > 0 &&
        services.map((item: ServiceType) => (
          <ServiceDataRow
            key={item.id}
            item={item}
            selected={item.name === service}
            onItemClick={() => openServiceOverviewPanel(item)}
            onServiceDetailClick={() => goToServiceDetailsPage(item)}
          />
        ))}

      {!error && services.length === 0 && <EmptyDataGridRow colSpan={COLUMN_SPAN}>No services found</EmptyDataGridRow>}
    </>
  )
}
