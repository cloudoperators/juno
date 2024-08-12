const apiErrorHandler = async (apiError) => {
  const error = apiError.response
    ? await apiError.response.json().then((e) => new Error(e.message))
    : apiError

  return Promise.reject(error)
}

export default apiErrorHandler
