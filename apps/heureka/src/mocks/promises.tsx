import { ApolloQueryResult } from "@apollo/client"
import { GetServiceFiltersQuery, GetServiceImageVersionsQuery, GetServicesQuery } from "../generated/graphql"

// This mock simulates the response for services query
export const mockServicesPromise: Promise<ApolloQueryResult<GetServicesQuery>> = Promise.resolve({
  data: {
    Services: {
      edges: [
        {
          node: {
            id: "1",
            ccrn: "alpha",
            objectMetadata: { componentInstanceCount: 1, issueMatchCount: 1, __typename: "ServiceMetadata" },
            owners: { edges: [], __typename: "UserConnection" },
            supportGroups: { edges: [], __typename: "SupportGroupConnection" },
            issueCounts: {
              critical: 0,
              high: 0,
              medium: 0,
              low: 0,
              none: 0,
              total: 0,
              __typename: "SeverityCounts",
            },
            __typename: "Service",
          },
          __typename: "ServiceEdge",
        },
      ],
      issueCounts: null,
      pageInfo: { pageNumber: 1, pages: [], __typename: "PageInfo" },
      __typename: "ServiceConnection",
    },
  },
  loading: false,
  networkStatus: 7,
  error: undefined,
  partial: false,
})

// This mock simulates the response for service filters query
export const mockFiltersPromise: Promise<ApolloQueryResult<GetServiceFiltersQuery>> = Promise.resolve({
  data: {
    ServiceFilterValues: {
      serviceCcrn: { displayName: "Service", filterName: "serviceCcrn", values: [] },
      supportGroupCcrn: { displayName: "Support Group", filterName: "supportGroupCcrn", values: [] },
      __typename: "ServiceFilterValue",
    },
  },
  loading: false,
  networkStatus: 7,
  error: undefined,
  partial: false,
})

// This mock simulates the response for service image versions query
export const mockImageVersionsPromise: Promise<ApolloQueryResult<GetServiceImageVersionsQuery>> = Promise.resolve({
  data: {
    ComponentVersions: {
      totalCount: 1,
      edges: [
        {
          node: {
            tag: "v1.0.0",
            repository: "repo1",
            version: "1.0.0",
            issueCounts: {
              critical: 0,
              high: 0,
              medium: 0,
              low: 0,
              none: 1,
              total: 1,
              __typename: "SeverityCounts",
            },
            component: {
              ccrn: "alpha",
              __typename: "Component",
            },
            componentInstances: {
              totalCount: 1,
              edges: [
                {
                  node: {
                    id: "ci-1",
                    ccrn: "alpha",
                    region: "eu",
                    cluster: "cluster-1",
                    namespace: "ns1",
                    pod: "pod-1",
                    container: "container-1",
                    __typename: "ComponentInstance",
                  },
                  __typename: "ComponentInstanceEdge",
                },
              ],
              pageInfo: {
                pageNumber: 1,
                pages: [],
                __typename: "PageInfo",
              },
              __typename: "ComponentInstanceConnection",
            },
            __typename: "ComponentVersion",
          },
          __typename: "ComponentVersionEdge",
        },
      ],
      pageInfo: {
        pageNumber: 1,
        pages: [],
        __typename: "PageInfo",
      },
      __typename: "ComponentVersionConnection",
    },
  },
  loading: false,
  networkStatus: 7,
  error: undefined,
  partial: false,
})
