import { ApolloQueryResult } from "@apollo/client"
import {
  GetServiceImageVersionIssuesDocument,
  GetServiceImageVersionIssuesQuery,
  IssueMatchOrderByField,
  IssueOrderByField,
  OrderDirection,
} from "../generated/graphql"
import { RouteContext } from "../routes/-types"

type FetchImageVersionIssuesParams = Pick<RouteContext, "queryClient" | "apiClient"> & {
  service: string
  imageVersion: string
  searchTerm?: string
}

export const fetchImageVersionIssues = ({
  queryClient,
  apiClient,
  service,
  imageVersion,
  searchTerm,
}: FetchImageVersionIssuesParams): Promise<ApolloQueryResult<GetServiceImageVersionIssuesQuery>> => {
  return queryClient.ensureQueryData({
    queryKey: ["imageVersionsIssues", service, imageVersion, searchTerm],
    queryFn: () =>
      apiClient.query({
        query: GetServiceImageVersionIssuesDocument,
        variables: {
          componentVersionFilter: {
            version: [imageVersion],
          },
          issueMatchFilter: {
            serviceCcrn: [service],
          },
          issuesFilter: searchTerm ? { search: [searchTerm] } : undefined,
          first: 20,
          orderByIssueSeverity: [
            {
              by: IssueOrderByField.Severity,
              direction: OrderDirection.Desc,
            },
          ],
          orderBySeverity: [
            {
              by: IssueMatchOrderByField.Severity,
              direction: OrderDirection.Desc,
            },
          ],
          orderByTrd: [
            {
              by: IssueMatchOrderByField.TargetRemediationDate,
              direction: OrderDirection.Asc,
            },
          ],
        },
      }),
  })
}
