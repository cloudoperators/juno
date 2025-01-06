// useBoundMutation.js
import { useMutation } from "@tanstack/react-query"
import { MUTATION_FUNCTIONS } from "../api/mutationFunctions"
import { useGlobalsApiEndpoint } from "../components/StoreProvider"

export const useBoundMutation = (key, options = {}) => {
  const endpoint = useGlobalsApiEndpoint()

  const mutationFn = MUTATION_FUNCTIONS[key]
  if (!mutationFn) {
    throw new Error(`No mutation function mapped for key: ${key}`)
  }

  return useMutation({
    mutationFn: (variables) => mutationFn({ ...variables, endpoint }),
    onError: options?.onError,
    ...options,
  })
}
