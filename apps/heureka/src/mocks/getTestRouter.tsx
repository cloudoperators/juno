import { QueryClient } from "@tanstack/react-query"
import { ApolloClient, InMemoryCache } from "@apollo/client"
import { createRouter, createMemoryHistory, RouterOptions } from "@tanstack/react-router"

export const getTestRouter = ({ routeTree, history }: RouterOptions<any, any, any, any, any>) => {
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
    uri: "/",
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
    routeTree: routeTree,
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
