/* eslint-disable */
/* tslint:disable */

/**
 * Mock Service Worker.
 * @see https://github.com/mswjs/msw
 * - Please do NOT modify this file.
 * - Please do NOT serve this file on production.
 */

// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'PACKAGE_VE... Remove this comment to see the full error message
const PACKAGE_VERSION = "2.6.6"
// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'INTEGRITY_... Remove this comment to see the full error message
const INTEGRITY_CHECKSUM = "ca7800994cc8bfb5eb961e037c877074"
// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'IS_MOCKED_... Remove this comment to see the full error message
const IS_MOCKED_RESPONSE = Symbol("isMockedResponse")
// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'activeClie... Remove this comment to see the full error message
const activeClientIds = new Set()

self.addEventListener("install", function () {
  // @ts-expect-error TS(2339): Property 'skipWaiting' does not exist on type 'Win... Remove this comment to see the full error message
  self.skipWaiting()
})

self.addEventListener("activate", function (event) {
  // @ts-expect-error TS(2339): Property 'waitUntil' does not exist on type 'Event... Remove this comment to see the full error message
  event.waitUntil(self.clients.claim())
})

self.addEventListener("message", async function (event) {
  // @ts-expect-error TS(2531): Object is possibly 'null'.
  const clientId = event.source.id

  // @ts-expect-error TS(2339): Property 'clients' does not exist on type 'Window ... Remove this comment to see the full error message
  if (!clientId || !self.clients) {
    return
  }

  // @ts-expect-error TS(2339): Property 'clients' does not exist on type 'Window ... Remove this comment to see the full error message
  const client = await self.clients.get(clientId)

  if (!client) {
    return
  }

  // @ts-expect-error TS(2339): Property 'clients' does not exist on type 'Window ... Remove this comment to see the full error message
  const allClients = await self.clients.matchAll({
    type: "window",
  })

  switch (event.data) {
    case "KEEPALIVE_REQUEST": {
      sendToClient(client, {
        type: "KEEPALIVE_RESPONSE",
      })
      break
    }

    case "INTEGRITY_CHECK_REQUEST": {
      sendToClient(client, {
        type: "INTEGRITY_CHECK_RESPONSE",
        payload: {
          packageVersion: PACKAGE_VERSION,
          checksum: INTEGRITY_CHECKSUM,
        },
      })
      break
    }

    case "MOCK_ACTIVATE": {
      activeClientIds.add(clientId)

      sendToClient(client, {
        type: "MOCKING_ENABLED",
        payload: {
          client: {
            id: client.id,
            frameType: client.frameType,
          },
        },
      })
      break
    }

    case "MOCK_DEACTIVATE": {
      activeClientIds.delete(clientId)
      break
    }

    case "CLIENT_CLOSED": {
      activeClientIds.delete(clientId)

      const remainingClients = allClients.filter((client: any) => {
        return client.id !== clientId
      })

      // Unregister itself when there are no more clients
      if (remainingClients.length === 0) {
        // @ts-expect-error TS(2339): Property 'registration' does not exist on type 'Wi... Remove this comment to see the full error message
        self.registration.unregister()
      }

      break
    }
  }
})

self.addEventListener("fetch", function (event) {
  // @ts-expect-error TS(2339): Property 'request' does not exist on type 'Event'.
  const { request } = event

  // Bypass navigation requests.
  if (request.mode === "navigate") {
    return
  }

  // Opening the DevTools triggers the "only-if-cached" request
  // that cannot be handled by the worker. Bypass such requests.
  if (request.cache === "only-if-cached" && request.mode !== "same-origin") {
    return
  }

  // Bypass all requests when there are no active clients.
  // Prevents the self-unregistered worked from handling requests
  // after it's been deleted (still remains active until the next reload).
  if (activeClientIds.size === 0) {
    return
  }

  // Generate unique request ID.
  const requestId = crypto.randomUUID()
  // @ts-expect-error TS(2339): Property 'respondWith' does not exist on type 'Eve... Remove this comment to see the full error message
  event.respondWith(handleRequest(event, requestId))
})

async function handleRequest(event: any, requestId: any) {
  const client = await resolveMainClient(event)
  const response = await getResponse(event, client, requestId)

  // Send back the response clone for the "response:*" life-cycle events.
  // Ensure MSW is active and ready to handle the message, otherwise
  // this message will pend indefinitely.
  if (client && activeClientIds.has(client.id)) {
    ;(async function () {
      const responseClone = response.clone()

      sendToClient(
        client,
        {
          type: "RESPONSE",
          payload: {
            requestId,
            isMockedResponse: IS_MOCKED_RESPONSE in response,
            type: responseClone.type,
            status: responseClone.status,
            statusText: responseClone.statusText,
            body: responseClone.body,
            headers: Object.fromEntries(responseClone.headers.entries()),
          },
        },
        // @ts-expect-error TS(2769): No overload matches this call.
        [responseClone.body]
      )
    })()
  }

  return response
}

// Resolve the main client for the given event.
// Client that issues a request doesn't necessarily equal the client
// that registered the worker. It's with the latter the worker should
// communicate with during the response resolving phase.
async function resolveMainClient(event: any) {
  // @ts-expect-error TS(2339): Property 'clients' does not exist on type 'Window ... Remove this comment to see the full error message
  const client = await self.clients.get(event.clientId)

  if (activeClientIds.has(event.clientId)) {
    return client
  }

  if (client?.frameType === "top-level") {
    return client
  }

  // @ts-expect-error TS(2339): Property 'clients' does not exist on type 'Window ... Remove this comment to see the full error message
  const allClients = await self.clients.matchAll({
    type: "window",
  })

  return allClients
    .filter((client: any) => {
      // Get only those clients that are currently visible.
      return client.visibilityState === "visible"
    })
    .find((client: any) => {
      // Find the client ID that's recorded in the
      // set of clients that have registered the worker.
      return activeClientIds.has(client.id)
    })
}

async function getResponse(event: any, client: any, requestId: any) {
  const { request } = event

  // Clone the request because it might've been already used
  // (i.e. its body has been read and sent to the client).
  const requestClone = request.clone()

  function passthrough() {
    // Cast the request headers to a new Headers instance
    // so the headers can be manipulated with.
    const headers = new Headers(requestClone.headers)

    // Remove the "accept" header value that marked this request as passthrough.
    // This prevents request alteration and also keeps it compliant with the
    // user-defined CORS policies.
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 2.
    headers.delete("accept", "msw/passthrough")

    return fetch(requestClone, { headers })
  }

  // Bypass mocking when the client is not active.
  if (!client) {
    return passthrough()
  }

  // Bypass initial page load requests (i.e. static assets).
  // The absence of the immediate/parent client in the map of the active clients
  // means that MSW hasn't dispatched the "MOCK_ACTIVATE" event yet
  // and is not ready to handle requests.
  if (!activeClientIds.has(client.id)) {
    return passthrough()
  }

  // Notify the client that a request has been intercepted.
  const requestBuffer = await request.arrayBuffer()
  const clientMessage = await sendToClient(
    client,
    {
      type: "REQUEST",
      payload: {
        id: requestId,
        url: request.url,
        mode: request.mode,
        method: request.method,
        headers: Object.fromEntries(request.headers.entries()),
        cache: request.cache,
        credentials: request.credentials,
        destination: request.destination,
        integrity: request.integrity,
        redirect: request.redirect,
        referrer: request.referrer,
        referrerPolicy: request.referrerPolicy,
        body: requestBuffer,
        keepalive: request.keepalive,
      },
    },
    // @ts-expect-error TS(2769): No overload matches this call.
    [requestBuffer]
  )

  // @ts-expect-error TS(2571): Object is of type 'unknown'.
  switch (clientMessage.type) {
    case "MOCK_RESPONSE": {
      // @ts-expect-error TS(2571): Object is of type 'unknown'.
      return respondWithMock(clientMessage.data)
    }

    case "PASSTHROUGH": {
      return passthrough()
    }
  }

  return passthrough()
}

function sendToClient(client: any, message: any, transferrables = []) {
  return new Promise((resolve, reject) => {
    const channel = new MessageChannel()

    channel.port1.onmessage = (event) => {
      if (event.data && event.data.error) {
        return reject(event.data.error)
      }

      resolve(event.data)
    }

    client.postMessage(message, [channel.port2].concat(transferrables.filter(Boolean)))
  })
}

async function respondWithMock(response: any) {
  // Setting response status code to 0 is a no-op.
  // However, when responding with a "Response.error()", the produced Response
  // instance will have status code set to 0. Since it's not possible to create
  // a Response instance with status code 0, handle that use-case separately.
  if (response.status === 0) {
    return Response.error()
  }

  const mockedResponse = new Response(response.body, response)

  Reflect.defineProperty(mockedResponse, IS_MOCKED_RESPONSE, {
    value: true,
    enumerable: true,
  })

  return mockedResponse
}
