/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

// __webpack_public_path__ = window.location
// console.log(window.location)
// import "custom-event-polyfill"
import React from "react"
import Search from "./Search"
import Results from "./Results"
import { search as searchByInput } from "./actions"
import SearchingIndicator from "./img/Loading_Animation.svg"
import ipBackground from "./img/IP-Background.svg?url"

import {
  AppShellProvider,
  Button,
  Message,
  PageHeader,
  Stack,
} from "juno-ui-components"
import { currentState, push } from "url-state-provider"
import styles from "./styles.scss"

const URL_STATE_KEY = "whois"

const contentClasses = ({ resultsShown }) => {
  return `
    bg-theme-global-bg
    px-6
    
    ${
      !resultsShown
        ? `
      pt-40
      items-center 
    `
        : `
      pt-6
    `
    }
  `
}

/**
 * This Component implements the event interface and controls
 * the visibility state of the login form.
 * @param {object} props
 */
const App = (props) => {
  const [processing, setProcessing] = React.useState(false)
  const [currentSearchTerm, setCurrentSearchTerm] = React.useState(null)
  const [items, setItems] = React.useState(null)
  const [error, setError] = React.useState(null)
  const [statusCode, setStatusCode] = React.useState(null)
  const { embedded, endpoint } = props

  const resultsShown = items !== null

  const search = React.useCallback((term, options) => {
    if (!term) return

    // update URL state
    push(URL_STATE_KEY, { p: term })

    // set/reset status before searching
    setCurrentSearchTerm(term)
    setError(null)
    setStatusCode(200)
    setProcessing(true)

    // search
    searchByInput(endpoint, term, options)
      .then((response) => {
        // get status code from response
        setStatusCode(response.status)
        // read input stream from response and return body as an object
        return response.json()
      })
      .then((data) => {
        console.log("DATA ITEMS", data)
        setItems(data)
      })
      .catch((error) => {
        setItems([]) // if error: set items to empty, otherwise the previous' search items would be shown
        setStatusCode(error.statusCode)
        let message = error.message || error
        try {
          message = JSON.parse(message)
          message = message.error || message
        } catch (e) {}
        if (message === "not found") setError("Couldn't find anything")
        else setError(message)
      })
      .finally(() => {
        setProcessing(false)
      })
  }, [])

  // read current url state and call search if state is presented
  React.useEffect(() => {
    const urlState = currentState(URL_STATE_KEY)
    if (urlState && urlState.p) {
      search(urlState.p)
    }
  }, [search])

  return (
    <div
      className="whois h-full bg-theme-global-bg"
      style={{
        backgroundImage: `url('${
          new URL(ipBackground, import.meta.url).href
        }')`,
        backgroundPosition: "bottom right",
        backgroundRepeat: "no-repeat",
      }}
    >
      {!embedded && <PageHeader heading="Whois" />}
      <Stack
        direction="vertical"
        gap="8"
        className={`${contentClasses({ resultsShown })}`}
      >
        {!resultsShown && (
          <Stack direction="vertical" gap="1" alignment="center">
            <h1 className="text-2xl">WHOIS Search</h1>
            <p className="text-theme-default text-opacity-70">
              Find detailed information for IP addresses
            </p>
          </Stack>
        )}
        <Search
          value={currentSearchTerm}
          onSearch={(searchTerm) => search(searchTerm)}
          resultsShown={resultsShown}
        />
        {processing && (
          <Stack direction="vertical" alignment="center" className="mt-20">
            <SearchingIndicator />
            <span>Searching...</span>
          </Stack>
        )}
        {error && (
          <Message variant="info">
            {error}
            {statusCode === 404 && (
              <Stack gap="4" alignment="center">
                <span>
                  {" "}
                  It might be that we haven't cached this search yet. A live
                  search might find it (this might take a while){" "}
                </span>
                <Button
                  size="small"
                  variant="subdued"
                  onClick={() => search(currentSearchTerm, { realtime: true })}
                  label="Trigger live search"
                  className="whitespace-nowrap"
                />
              </Stack>
            )}
          </Message>
        )}
        {!processing && statusCode === 206 && (
          <Message>
            <Stack gap="4" alignment="center">
              <span>
                {" "}
                Only partial results could be retrieved from the search cache. A
                live search might find the rest (this might take a while){" "}
              </span>
              <Button
                size="small"
                variant="subdued"
                onClick={() => search(currentSearchTerm, { realtime: true })}
                label="Trigger live search"
                className="whitespace-nowrap"
              />
            </Stack>
          </Message>
        )}
        <Results items={items} processing={processing} />
      </Stack>
    </div>
  )
}

const StyledApp = (props) => {
  return (
    <AppShellProvider theme={`${props.theme ? props.theme : "theme-dark"}`}>
      {/* load styles inside the shadow dom */}
      <style>{styles.toString()}</style>
      <App {...props} />
    </AppShellProvider>
  )
}

export default StyledApp
