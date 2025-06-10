import { ApolloQueryResult } from "@apollo/client"
import { GetServicesDocument, GetServicesQuery, OrderDirection, ServiceOrderByField } from "../generated/graphql"
import { RouteContext } from "../routes/-types"

type FetchServiceParams = Pick<RouteContext, "queryClient" | "apiClient"> & {
  service: string
}

export const fetchService = ({
  queryClient,
  apiClient,
  service,
}: FetchServiceParams): Promise<ApolloQueryResult<GetServicesQuery>> => {
  return queryClient.ensureQueryData({
    queryKey: ["services", service],
    queryFn: () =>
      apiClient.query({
        query: GetServicesDocument,
        variables: {
          first: 1,
          orderBy: [
            {
              by: ServiceOrderByField.Severity,
              direction: OrderDirection.Desc,
            },
          ],
          filter: {
            serviceCcrn: [service],
          },
        },
      }),
  })
}
