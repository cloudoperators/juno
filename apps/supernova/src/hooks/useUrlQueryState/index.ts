import React, { useEffect, useLayoutEffect } from "react"
// @ts-expect-error TS(2792) FIXME: Cannot find module '@cloudoperators/juno-url-state... Remove this comment to see the full error message
import { readStateFromUrl, saveStateToUrl } from "@cloudoperators/juno-url-state-provider"
import {
  useFilterLabels,
  useGetStateForUrl,
  useGlobalsActions,
  useSilencesActions,
  useFilterActions,
} from "../../components/StoreProvider"
import { transformAppStateToUrlState, transformUrlStateToAppState } from "./utils"

const useUrlQueryState = () => {
  const urlReadRef = React.useRef(false)
  //@ts-ignore
  const { setActiveFilters, setActivePredefinedFilter, setSearchTerm } = useFilterActions()
  // @ts-ignore
  const { setSilencesRegEx, setSilencesStatus } = useSilencesActions()
  // @ts-ignore
  const { setShowDetailsFor, setActiveSelectedTab } = useGlobalsActions()
  const filterLabels = useFilterLabels()
  const appState = useGetStateForUrl()

  // Reflect app state to the URL
  useEffect(() => {
    if (urlReadRef.current && urlReadRef.current) {
      saveStateToUrl(transformAppStateToUrlState(appState))
    }
  }, [appState])

  // Read URL state and set it to the app state this typically happens on the first render
  useLayoutEffect(() => {
    const stateFromTheUrl = readStateFromUrl()
    if (Object.keys(stateFromTheUrl).length !== 0) {
      const appState = transformUrlStateToAppState(stateFromTheUrl, filterLabels)
      setActiveFilters(appState.activeFilters)
      setSearchTerm(appState.searchTerm)
      setActivePredefinedFilter(appState.activePredefinedFilter)
      setShowDetailsFor(appState.showDetailsFor)
      setActiveSelectedTab(appState.activeSelectedTab)
      setSilencesRegEx(appState.silenceRegEx)
      setSilencesStatus(appState.silenceStatus)
    }
    urlReadRef.current = true
  }, [])
}

export default useUrlQueryState
