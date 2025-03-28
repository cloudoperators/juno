/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

export interface K8sApiError extends Error {
  apiVersion?: string
  kind?: string
  message: string
  metadata?: Record<string, any>
  reason?: string
  status?: string
  code?: number
  response?: {
    data?: { message?: string }
    status?: number
  }
}

const apiErrorHandler = async (apiError: K8sApiError): Promise<K8sApiError> => {
  const error = apiError.response?.data ? new Error(apiError.response.data.message ?? apiError.message) : apiError

  return Promise.reject(error)
}

export default apiErrorHandler
