/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

export const deleteSilences = async (variables) => {
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

export const createSilences = async (variables) => {
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
