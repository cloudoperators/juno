/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { useGetServicesQuery } from "../../generated/graphql"
import { Breadcrumb } from "../common/Breadcrumb"
import { Filters } from "../common/Filters"
import { List } from "../common/List"
import { Panel } from "../common/Panel"

export const Services = () => {
  const { data, loading, error } = useGetServicesQuery()
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  return (
    <>
      <Breadcrumb />
      <Filters />
      <List />
      <Panel />
      <div>{data?.Services?.edges?.map((service) => <div key={service?.node.id}>{service?.node.ccrn}</div>)}</div>
    </>
  )
}
