/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

export const fetchSilences = async (endpoint: string) => {
  try {
    const response = await fetch(`${endpoint}/silences`)

    if (!response.ok) {
      // Parse the error object from the response body
      const errorObject = await response.json().catch(() => {
        throw new Error(`Unexpected error: Unable to parse error response.`)
      })

      // Throw the error object directly
      throw errorObject
    }

    const items = await response.json() // Parse JSON data

    // Return the structured result
    return {
      silences: items,
    }
  } catch (error) {
    console.error(error)
    throw error // Let React Query handle the error
  }
}

export const deleteSilences = async (variables: Record<string, any>): Promise<Response> => {
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

export const createSilences = async (variables: Record<string, any>): Promise<Response> => {
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
