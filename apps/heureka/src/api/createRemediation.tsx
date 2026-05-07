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
    const messages: string[] = []
    if (error && typeof error === "object" && "graphQLErrors" in error) {
      const gqlErrors = (error as { graphQLErrors: Array<{ message: string }> }).graphQLErrors
      if (gqlErrors?.length) {
        messages.push(...gqlErrors.map((e) => e.message))
      }
    }
    if (!messages.length) {
      messages.push(error instanceof Error ? error.message : "Failed to create remediation")
    }
    throw Object.assign(new Error(messages.join("; ")), { cause: error })
  }
}
