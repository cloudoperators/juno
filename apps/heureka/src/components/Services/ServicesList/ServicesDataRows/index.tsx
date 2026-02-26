/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback, use } from "react"
import { useNavigate, useSearch } from "@tanstack/react-router"
import { ServiceDataRow } from "./ServiceDataRow"
import { EmptyDataGridRow } from "../../../common/EmptyDataGridRow"
import { ServiceType } from "../../../types"
import { getNormalizedServicesResponse } from "../../utils"
import { ApolloQueryResult } from "@apollo/client"
import { GetServicesQuery } from "../../../../generated/graphql"

const COLUMN_SPAN = 7

type ServicesDataRowsProps = {
  servicesPromise: Promise<ApolloQueryResult<GetServicesQuery>>
}

export const ServicesDataRows = ({ servicesPromise }: ServicesDataRowsProps) => {
  const navigate = useNavigate()
  const { service } = useSearch({ from: "/services/" })
  const { error, data } = use(servicesPromise)
  const { services } = getNormalizedServicesResponse(data)

  const goToServiceDetailsPage = useCallback(
    (serviceItem: ServiceType) => {
      navigate({
        to: "/services/$service",
        params: { service: serviceItem.name },
      })
    },
    [navigate]
  )

  if (error) {
    return <EmptyDataGridRow colSpan={COLUMN_SPAN}>Error loading services</EmptyDataGridRow>
  }

  if (services.length === 0) {
    return <EmptyDataGridRow colSpan={COLUMN_SPAN}>No service found</EmptyDataGridRow>
  }

  return services.map((item: ServiceType) => (
    <ServiceDataRow
      key={item.id}
      item={item}
      selected={item.name === service}
      onItemClick={() => goToServiceDetailsPage(item)}
    />
  ))
}
