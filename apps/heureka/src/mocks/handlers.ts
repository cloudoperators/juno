/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { graphql, HttpResponse } from "msw"
import servicesFixture from "./fixtures/services.json"
import serviceFilters from "./fixtures/serviceFilters.json"
import serviceImageVersions from "./fixtures/serviceImageVersions.json"

const getServicesHandler = graphql.query("GetServices", () => {
  return HttpResponse.json(servicesFixture)
})

const getServiceFiltersHandler = graphql.query("GetServiceFilters", () => {
  return HttpResponse.json(serviceFilters)
})

const getServiceImageVersionsHandler = graphql.query("GetServiceImageVersions", ({ variables }) => {
  console.log("ServiceImageVersions Query Variables:", JSON.stringify(variables, null, 2))
  // Always return the mock data for testing
  return HttpResponse.json(serviceImageVersions)
})

export const handlers = [getServicesHandler, getServiceFiltersHandler, getServiceImageVersionsHandler]
