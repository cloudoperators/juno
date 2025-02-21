import { ApolloClient, InMemoryCache } from "@apollo/client"

type ClientOptions = {
  uri?: string
}

export const getClient = ({ uri }: ClientOptions) => {
  if (typeof uri === "undefined") {
    throw new Error("No API endpoint provided.")
  }
  return new ApolloClient({
    uri,
    cache: new InMemoryCache(),
  })
}
