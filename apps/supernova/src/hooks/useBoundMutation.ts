// useBoundMutation.js
import { useMutation } from "@tanstack/react-query"
import { MUTATION_FUNCTIONS } from "../api/mutationFunctions"
import { useGlobalsApiEndpoint } from "../components/StoreProvider"

export const useBoundMutation = (key: any, options = {}) => {
  const endpoint = useGlobalsApiEndpoint()

  // @ts-expect-error TS(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
  const mutationFn = MUTATION_FUNCTIONS[key]
  if (!mutationFn) {
    throw new Error(`No mutation function mapped for key: ${key}`)
  }

  return useMutation({
    mutationFn: (variables: any) => mutationFn({ ...variables, endpoint }),
    // @ts-expect-error TS(2339) FIXME: Property 'onError' does not exist on type '{}'.
    onError: options?.onError,
    ...options,
  })
}
