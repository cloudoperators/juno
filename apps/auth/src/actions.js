// Check response status
const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    return response.text().then((message) => {
      var error = new Error(message || response.statusText || response.status)
      error.statusCode = response.status
      // throw error
      return Promise.reject(error)
    })
  }
}

const identityEndpoint = (endpoint = "") => {
  var pattern = new RegExp("^((.*)://)?([A-Za-z0-9-.]+)(:([0-9]+))?(.*)$") // port and path
  const urlParts = endpoint.match(pattern)
  if (!urlParts) return ""
  const [_, protocol, __, domain, ___, port, path] = urlParts

  console.log(protocol, domain, port, path)
  let url = `${protocol || "https://"}${domain}`
  if (port) url = `${url}:${port}`
  let resourcePath = path || ""

  url = `${url}${
    resourcePath.indexOf("/v3") <= 0 ? "/v3/auth/tokens" : resourcePath
  }`
  return url
}

export const loginWithPassword = ({ endpoint, domain, user, password }) =>
  fetch(identityEndpoint(endpoint), {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      auth: {
        identity: {
          methods: ["password"],
          password: {
            user: {
              name: user,
              domain: {
                name: domain,
              },
              password: password,
            },
          },
        },
      },
    }),
  })
    .then(checkStatus)
    .then((response) => {
      const authToken = response.headers.get("x-subject-token")
      return Promise.all([authToken, response.json()])
    })

export const loginWithSSO = ({ endpoint, domain }) =>
  fetch(identityEndpoint(endpoint), {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      "X-User-Domain-Name": domain,
    },
    body: JSON.stringify({
      auth: {
        identity: {
          methods: ["external"],
          external: {},
        },
      },
    }),
  })
    .then(checkStatus)
    .then((response) => {
      const authToken = response.headers.get("x-subject-token")
      return Promise.all([authToken, response.json()])
    })

export const rescopeToken = ({ endpoint, token, scope }) =>
  fetch(identityEndpoint(endpoint), {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      auth: {
        identity: {
          methods: ["token"],
          token: {
            id: token,
          },
        },
        scope,
      },
    }),
  })
    .then(checkStatus)
    .then((response) => {
      const authToken = response.headers.get("x-subject-token")
      return Promise.all([authToken, response.json()])
    })
