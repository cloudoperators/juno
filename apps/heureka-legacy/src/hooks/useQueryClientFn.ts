/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react"
import { useQueryClient } from "@tanstack/react-query"
import { useGlobalsApiEndpoint, useGlobalsActions } from "../components/StoreProvider"
import { request } from "graphql-request"
import {
  servicesMainQuery,
  servicesDetailsQuery,
  servicesCountQuery,
  componentInstancesOfServiceQuery,
} from "../lib/queries/services"
import { componentsMainQuery, componentsCountQuery } from "../lib/queries/components"
import { issueMatchesMainQuery, issueMatchesDetailsQuery, issueMatchesCountQuery } from "../lib/queries/issueMatches"
import serviceFilterValuesQuery from "../lib/queries/serviceFilterValues"
import issueMatchesFilterValuesQuery from "../lib/queries/issueMatchesFilterValues"
import addRemoveServiceOwners from "../lib/queries/addRemoveServiceOwners"
import usersQuery from "../lib/queries/users"

// hook to register query defaults that depends on the queryClient and options
const useQueryClientFn = () => {
  const queryClient = useQueryClient()
  const endpoint = useGlobalsApiEndpoint()
  // @ts-ignore
  const { setQueryClientFnReady } = useGlobalsActions()
  /*
  As stated in getQueryDefaults, the order of registration of query defaults does matter. Since the first matching defaults are returned by getQueryDefaults, the registration should be made in the following order: from the least generic key to the most generic one. This way, in case of specific key, the first matching one would be the expected one.
  */
  useEffect(() => {
    if (!queryClient) return

    // Services main query
    queryClient.setQueryDefaults(["ServicesMain"], {
      queryFn: async ({ queryKey }: any) => {
        const [_key, options] = queryKey
        // @ts-ignore
        return await request(endpoint, servicesMainQuery(), options)
      },
    })
    // Services details query
    queryClient.setQueryDefaults(["ServicesDetails"], {
      queryFn: async ({ queryKey }: any) => {
        const [_key, options] = queryKey
        // @ts-ignore
        return await request(endpoint, servicesDetailsQuery(), options)
      },
    })

    // ComponentInstances of a service query both for main and count info - for the service details page
    queryClient.setQueryDefaults(["ComponentInstancesOfService"], {
      queryFn: async ({ queryKey }: any) => {
        const [_key, options] = queryKey
        // @ts-ignore
        return await request(endpoint, componentInstancesOfServiceQuery(), options)
      },
    })

    // Services count query (for totalCount and pageInfo)
    queryClient.setQueryDefaults(["ServicesCount"], {
      queryFn: async ({ queryKey }: any) => {
        const [_key, options] = queryKey
        // @ts-ignore
        return await request(endpoint, servicesCountQuery(), options)
      },
    })

    // Components main query
    queryClient.setQueryDefaults(["ComponentsMain"], {
      queryFn: async ({ queryKey }: any) => {
        const [_key, options] = queryKey
        // @ts-ignore
        return await request(endpoint, componentsMainQuery(), options)
      },
    })

    // Components count query (for totalCount and pageInfo)
    queryClient.setQueryDefaults(["ComponentsCount"], {
      queryFn: async ({ queryKey }: any) => {
        const [_key, options] = queryKey
        // @ts-ignore
        return await request(endpoint, componentsCountQuery(), options)
      },
    })

    // IssueMatches main query
    queryClient.setQueryDefaults(["IssueMatchesMain"], {
      queryFn: async ({ queryKey }: any) => {
        const [_key, options] = queryKey
        // @ts-ignore
        return await request(endpoint, issueMatchesMainQuery(), options)
      },
    })

    // IssueMatches details query
    queryClient.setQueryDefaults(["IssueMatchesDetails"], {
      queryFn: async ({ queryKey }: any) => {
        const [_key, options] = queryKey
        // @ts-ignore
        return await request(endpoint, issueMatchesDetailsQuery(), options)
      },
    })

    // IssueMatches count query (for totalCount and pageInfo)
    queryClient.setQueryDefaults(["IssueMatchesCount"], {
      queryFn: async ({ queryKey }: any) => {
        const [_key, options] = queryKey
        // @ts-ignore
        return await request(endpoint, issueMatchesCountQuery(), options)
      },
    })

    queryClient.setQueryDefaults(["ServiceFilterValues"], {
      queryFn: async ({ queryKey }: any) => {
        const [_key, variables] = queryKey
        // @ts-ignore
        return await request(endpoint, serviceFilterValuesQuery(), variables)
      },
      staleTime: Infinity, // this do not change often keep it until reload
    })

    queryClient.setQueryDefaults(["IssueMatchFilterValues"], {
      queryFn: async ({ queryKey }: any) => {
        const [_key, variables] = queryKey
        // @ts-ignore
        return await request(endpoint, issueMatchesFilterValuesQuery(), variables)
      },
      staleTime: Infinity, // this do not change often keep it until reload
    })

    queryClient.setQueryDefaults(["Users"], {
      queryFn: async ({ queryKey }: any) => {
        const [_key, options] = queryKey
        // @ts-ignore
        return await request(endpoint, usersQuery(), options)
      },
    })

    // Set mutation defaults for addOwnerToService
    queryClient.setMutationDefaults(["addOwnerToService"], {
      mutationFn: async ({ serviceId, userId }: any) => {
        const { mutation, variables } = addRemoveServiceOwners(
          serviceId,
          userId,
          "add" // Specify "add" action for adding a user
        )
        // @ts-ignore
        await request(endpoint, mutation, variables)
      },
      onSuccess: () => {
        // @ts-ignore
        queryClient.invalidateQueries(["Services"])
      },
      onError: (error: any) => {
        console.error("Failed to add owner to the service:", error)
      },
    })

    // Set mutation defaults for removeOwnerFromService
    queryClient.setMutationDefaults(["removeOwnerFromService"], {
      mutationFn: async ({ serviceId, userId }: any) => {
        const { mutation, variables } = addRemoveServiceOwners(
          serviceId,
          userId,
          "remove" // Specify "remove" action for removing a user
        )
        // @ts-ignore
        await request(endpoint, mutation, variables)
      },
      onSuccess: () => {
        // @ts-ignore
        queryClient.invalidateQueries(["Services"])
      },
      onError: (error: any) => {
        console.error("Failed to remove owner from the service:", error)
      },
    })

    // Set queryClientFnReady to true once
    setQueryClientFnReady(true)
  }, [queryClient])
}

export default useQueryClientFn
