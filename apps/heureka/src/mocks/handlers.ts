/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { graphql, HttpResponse } from "msw"
import { mockServices } from "./fixtures/services"
import serviceFilters from "./fixtures/serviceFilters.json"
import serviceImageVersions from "./fixtures/serviceImageVersions.json"

const getServicesHandler = graphql.query("GetServices", () => {
  return HttpResponse.json(mockServices)
})

const getServiceFiltersHandler = graphql.query("GetServiceFilters", () => {
  return HttpResponse.json(serviceFilters)
})

const getServiceImageVersionsHandler = graphql.query("GetServiceImageVersions", () => {
  return HttpResponse.json(serviceImageVersions)
})

export const handlers = [getServicesHandler, getServiceFiltersHandler, getServiceImageVersionsHandler]
