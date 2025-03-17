/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

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
