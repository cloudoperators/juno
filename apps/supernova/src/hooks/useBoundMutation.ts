/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useMutation } from "@tanstack/react-query"
import { MUTATION_FUNCTIONS } from "../api/mutationFunctions"
import { useGlobalsApiEndpoint } from "../components/StoreProvider"

export const useBoundMutation = (key: keyof typeof MUTATION_FUNCTIONS, options: Record<string, any> = {}) => {
  const endpoint = useGlobalsApiEndpoint()

  const mutationFn = MUTATION_FUNCTIONS[key]
  if (!mutationFn) {
    throw new Error(`No mutation function mapped for key: ${key}`)
  }

  return useMutation({
    mutationFn: (variables: any) => mutationFn({ ...variables, endpoint }),
    onError: options?.onError,
    ...options,
  })
}
