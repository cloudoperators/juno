/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ApiError extends Error {
  code?: number
  response?: {
    data?: { message?: string }
    status?: number
  }
}

const apiErrorHandler = async (apiError: ApiError): Promise<never> => {
  const error = apiError.response?.data ? new Error(apiError.response.data.message ?? apiError.message) : apiError

  return Promise.reject(error)
}

export default apiErrorHandler
