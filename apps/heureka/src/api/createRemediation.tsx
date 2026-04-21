/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ApolloClient } from "@apollo/client"
import {
  CreateRemediationDocument,
  CreateRemediationMutation,
  CreateRemediationMutationVariables,
  RemediationInput,
} from "../generated/graphql"

type CreateRemediationParams = {
  apiClient: ApolloClient
  input: RemediationInput
}

export const createRemediation = async ({
  apiClient,
  input,
}: CreateRemediationParams): Promise<CreateRemediationMutation["createRemediation"]> => {
  try {
    const result = await apiClient.mutate<CreateRemediationMutation, CreateRemediationMutationVariables>({
      mutation: CreateRemediationDocument,
      variables: { input },
    })

    if (!result.data?.createRemediation) {
      throw new Error("Failed to create remediation")
    }

    return result.data.createRemediation
  } catch (error) {
    if (error && typeof error === "object" && "graphQLErrors" in error) {
      const gqlErrors = (error as { graphQLErrors: Array<{ message: string }> }).graphQLErrors
      if (gqlErrors?.length) {
        throw Object.assign(new Error(gqlErrors.map((e) => e.message).join("; ")), { cause: error })
      }
    }
    throw error
  }
}
