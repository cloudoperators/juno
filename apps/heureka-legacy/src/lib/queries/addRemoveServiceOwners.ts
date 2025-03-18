/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { gql } from "graphql-request"

// A function that dynamically generates a GraphQL mutation for adding or removing a user from a service
export default (serviceId: any, userId: any, action: any) => {
  // Determine the mutation based on the action (add or remove)
  const mutationName = action === "add" ? "addOwnerToService" : "removeOwnerFromService"

  // Define the mutation string for a single user
  const mutation = `mutation ($serviceId: ID!, $userId: ID!) {
    ${mutationName}(serviceId: $serviceId, userId: $userId) {
      id
      ccrn
      owners {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  }`
    .replace(/\s+/g, " ")
    .trim() // Remove newlines and excessive spaces

  return {
    mutation: gql`
      ${mutation}
    `,
    variables: { serviceId, userId },
  }
}
