/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

// import { useState, useEffect } from "react"
// import { registerConsumer } from "url-state-provider"

// /**
//  * This hook takes over the actual registration with the URL State Provider.
//  * @param {string} stateID
//  * @returns object with state, navigateTo, redirectTo
//  */
// const useURLStateProvider = (stateID) => {
//   const [navigation, setNavigation] = useState()
//   const [state, setState] = useState()

//   useEffect(() => {
//     if (!stateID)
//       throw new Error("stateID is undefined. Please provide an unique ID.")

//     const { push, replace, onChange, currentState } = registerConsumer(stateID)
//     const unregisterConsumer = onChange(setState)

//     setState(currentState() || {})

//     const navigation = {
//       navigateTo: (path, options) => {
//         console.log("=====================================", path, options)
//         const newState = { p: path, o: options }
//         push(newState)
//         // onChange will not be called if the change was triggered by the same consumer
//         // so we need to call setState manually
//         setState(newState)
//       },
//       redirectTo: (path, options) => {
//         const newState = { p: path, o: options }
//         replace(newState)
//         // onChange will not be called if the change was triggered by the same consumer
//         // so we need to call setState manually
//         setState(newState)
//       },
//     }
//     setNavigation(navigation)
//     return unregisterConsumer
//   }, [stateID])

//   // Since the useEffect hook is not executed until after the first rendering,
//   // we are returning null at this point.
//   if (!navigation) return null

//   return {
//     state,
//     navigateTo: navigation.navigateTo,
//     redirectTo: navigation.redirectTo,
//   }
// }

// export default useURLStateProvider

import { useState, useEffect, useCallback } from "react"
import { registerConsumer } from "url-state-provider"

/**
 * This hook takes over the actual registration with the URL State Provider.
 * @param {string} stateID
 * @returns object with state, navigateTo, redirectTo
 */
const useURLStateProvider = (stateID = "_some-state_") => {
  const { push, replace, onChange, currentState } = registerConsumer(stateID)
  const [state, setState] = useState(currentState() || {})

  const navigateTo = useCallback(
    (path, options) => {
      const newState = { p: path, o: options }
      push(newState)
      // onChange will not be called if the change was triggered by the same consumer
      // so we need to call setState manually
      setState(newState)
    },
    [push, setState]
  )

  const redirectTo = useCallback(
    (path, options) => {
      const newState = { p: path, o: options }
      replace(newState)
      // onChange will not be called if the change was triggered by the same consumer
      // so we need to call setState manually
      setState(newState)
    },
    [replace, setState]
  )

  useEffect(() => {
    if (stateID === "_some-state_")
      console.error("stateID is undefined. Please provide an unique ID.")

    const unregisterConsumer = onChange(setState)
    return unregisterConsumer
  }, [stateID])

  return {
    state,
    navigateTo,
    redirectTo,
  }
}

export default useURLStateProvider
