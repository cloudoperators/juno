import { ApolloQueryResult } from "@apollo/client"
import { GetServicesDocument, GetServicesQuery, OrderDirection, ServiceOrderByField } from "../generated/graphql"
import { RouteContext } from "../routes/-types"
import { FilterSettings } from "../components/common/Filters/types"
import { getActiveServiceFilter } from "../components/Services/utils"

type FetchServicesParams = Pick<RouteContext, "queryClient" | "apiClient"> & {
  filterSettings: FilterSettings
}

export const fetchServices = ({
  queryClient,
  apiClient,
  filterSettings,
}: FetchServicesParams): Promise<ApolloQueryResult<GetServicesQuery>> => {
  const filter = getActiveServiceFilter(filterSettings)

  return queryClient.ensureQueryData({
    queryKey: ["services", filter],
    queryFn: () =>
      apiClient.query({
        query: GetServicesDocument,
        variables: {
          first: 20,
          orderBy: [
            {
              by: ServiceOrderByField.Severity,
              direction: OrderDirection.Desc,
            },
          ],
          filter,
        },
      }),
  })
}
