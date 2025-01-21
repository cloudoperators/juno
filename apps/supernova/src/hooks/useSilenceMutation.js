import { useMutation } from "@tanstack/react-query"
import { useGlobalsApiEndpoint } from "../components/StoreProvider"

export const useSilenceMutation = (key, options = {}) => {
  const endpoint = useGlobalsApiEndpoint()
  const mutationFns = new Map([
    ["createSilences", createSilences],
    ["deleteSilences", deleteSilences],
  ])

  // Get the corresponding mutation function for the given key
  const mutationFn = mutationFns.get(key)

  if (!mutationFn) {
    throw new Error(`No mutation function mapped for key: ${key}`)
  }

  return useMutation({
    mutationFn: (variables) => mutationFn({ ...variables, endpoint }),
    onError: options?.onError,
    ...options,
  })
}

const deleteSilences = async (variables) => {
  try {
    const response = await fetch(`${variables.endpoint}/silence/${variables.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })

    if (!response.ok) {
      const errorDetails = await response.json().catch(() => null)
      const errorMessage = errorDetails?.message || errorDetails || `Error ${response.status}: ${response.statusText}`
      throw new Error(errorMessage)
    }
    return await response
  } catch (error) {
    console.error(error)
    throw error // Let React Query handle the error
  }
}

const createSilences = async (variables) => {
  try {
    const response = await fetch(`${variables.endpoint}/silences`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(variables.silence),
    })

    if (!response.ok) {
      const errorDetails = await response.json().catch(() => null)
      const errorMessage = errorDetails?.message || errorDetails || `Error ${response.status}: ${response.statusText}`
      throw new Error(errorMessage)
    }
    return await response.json()
  } catch (error) {
    console.error(error)
    throw error // Let React Query handle the error
  }
}
