/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

interface ApiErrorType extends Error {
  response?: {
    data?: { message?: string }
  }
}
const apiErrorHandler = async (apiError: ApiErrorType): Promise<never> => {
  const error = apiError.response?.data ? new Error(apiError.response.data.message || apiError.message) : apiError

  return Promise.reject(error)
}

export default apiErrorHandler
