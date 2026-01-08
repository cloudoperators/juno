/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ApolloClient } from "@apollo/client"
import {
  DeleteRemediationDocument,
  DeleteRemediationMutation,
  DeleteRemediationMutationVariables,
} from "../generated/graphql"

type DeleteRemediationParams = {
  apiClient: ApolloClient<unknown>
  remediationId: string
}

export const deleteRemediation = async ({ apiClient, remediationId }: DeleteRemediationParams): Promise<string> => {
  const result = await apiClient.mutate<DeleteRemediationMutation, DeleteRemediationMutationVariables>({
    mutation: DeleteRemediationDocument,
    variables: { id: remediationId },
  })

  if (!result.data?.deleteRemediation) {
    throw new Error("Failed to delete remediation")
  }

  return result.data.deleteRemediation
}
