import { graphql, HttpResponse } from "msw"
import servicesFixture from "./fixtures/services.json"
import serviceFilters from "./fixtures/serviceFilters.json"

const getServicesHandler = graphql.query("GetServices", () => {
  return HttpResponse.json(servicesFixture)
})
const getServiceFiltersHandler = graphql.query("GetServiceFilters", () => {
  return HttpResponse.json(serviceFilters)
})

export const handlers = [getServicesHandler, getServiceFiltersHandler]
