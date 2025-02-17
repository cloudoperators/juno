import { isEmpty, isNil } from "lodash"
import { Edge, GetServicesQuery, Service, ServiceEdge } from "../../generated/graphql"
import { ServiceType } from "./Services"

const getSupportGroups = (serviceEdge?: ServiceEdge) => {
  return (
    serviceEdge?.node?.supportGroups?.edges
      ?.map((edge) => edge?.node?.ccrn)
      .filter((node): node is string => !isNil(node)) || []
  )
}

const getServiceOwners = (serviceEdge?: ServiceEdge) => {
  return (
    serviceEdge?.node?.owners?.edges?.map((edge) => edge?.node?.name).filter((node): node is string => !isNil(node)) ||
    []
  )
}

type NormalizedServices = {
  totalCount: number | null
  services: ServiceType[]
}

export const getNormalizedData = (data: GetServicesQuery | undefined): NormalizedServices => {
  return {
    totalCount: data?.Services?.totalCount || 0,
    services: isEmpty(data?.Services?.edges)
      ? []
      : (data?.Services?.edges
          ?.filter((edge) => edge !== null)
          .map((edge?: Edge): ServiceType => {
            const node: Service | undefined = edge?.node
            const service: ServiceType = {
              id: node?.id?.toString() || "",
              name: node?.ccrn || "",
              serviceDetails: {
                supportGroups: getSupportGroups(edge),
              },
              components: node?.objectMetadata?.componentInstanceCount || 0,
              serviceOwners: getServiceOwners(edge),
              issuesCount: {
                critical: Math.floor(Math.random() * 10),
                high: Math.floor(Math.random() * 10),
              },
              remediationDate: "2023-01-01",
            }
            return service
          }) as ServiceType[]),
  }
}
