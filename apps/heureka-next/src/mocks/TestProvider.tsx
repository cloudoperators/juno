/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactNode } from "react"
import { ApolloProvider } from "@apollo/client"
import { getClient } from "../apollo-client"

/**
 * TestProvider provides an Apollo client configured for the test environment
 * which will submit requests to "/" uri and in vitest.setup.ts all graphql requests
 * will be intercepted by "msw" server
 */
export const TestProvider = ({ children }: { children: ReactNode }) => (
  <ApolloProvider client={getClient({ uri: "/" })}>{children}</ApolloProvider>
)
