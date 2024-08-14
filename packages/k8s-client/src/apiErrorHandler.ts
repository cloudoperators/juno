import { AxiosError } from "axios"

interface ApiErrorResponse {
  message?: string
}

const apiErrorHandler = async (apiError: AxiosError): Promise<never> => {
  const error = apiError.response?.data
    ? new Error((apiError.response.data as ApiErrorResponse).message || apiError.message)
    : apiError

  return Promise.reject(error)
}

export default apiErrorHandler
