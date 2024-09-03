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
