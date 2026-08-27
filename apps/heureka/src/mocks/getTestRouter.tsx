/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { QueryClient } from "@tanstack/react-query"
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client"
import { createRouter, createMemoryHistory } from "@tanstack/react-router"

declare module "@apollo/client" {
  export interface TypeOverrides {
    signatureStyle: "classic"
  }
  namespace ApolloClient {
    namespace DeclareDefaultOptions {
      interface WatchQuery {
        errorPolicy: "ignore"
      }
      interface Query {
        errorPolicy: "all"
      }
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getTestRouter = ({ routeTree, history }: { routeTree: any; history?: any }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        staleTime: 0,
        refetchOnWindowFocus: false,
      },
    },
  })
  const apolloClient = new ApolloClient({
    link: new HttpLink({ uri: "/" }),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "no-cache",
        errorPolicy: "ignore",
      },
      query: {
        fetchPolicy: "no-cache",
        errorPolicy: "all",
      },
    },
  })

  const options = {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    routeTree: routeTree,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    history: history || createMemoryHistory(),
    defaultPendingMinMs: 0,
    context: {
      appProps: {},
      queryClient,
      apiClient: apolloClient,
    },
  }

  return createRouter(options)
}
