/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { useGetServicesQuery } from "../../generated/graphql"

export const Services = () => {
  const { data, loading, error } = useGetServicesQuery()
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  return <div>{data?.Services?.edges?.map((service) => <div key={service?.node.id}>{service?.node.ccrn}</div>)}</div>
}
