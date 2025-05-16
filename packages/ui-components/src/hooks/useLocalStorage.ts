/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react"

// eslint-disable-next-line no-unused-vars
type LocalStorageSetter<T> = (value: T | ((prev: T) => T)) => void
type LocalStorageReturnType<T> = [T, LocalStorageSetter<T>]

/** 
A hook to handle local storage. 

Local storage can be used like a state variable. To initialize, pass the key and a default value:

const [val, setVal] = useLocalStorage("my-val", "default value");

*/
function useLocalStorage<T>(key: string, initialValue: T): LocalStorageReturnType<T> {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? (JSON.parse(item) as T) : initialValue
    } catch (error) {
      console.log("Juno Error: useLocalStorage error: ", error)
      return initialValue
    }
  })

  const setValue: LocalStorageSetter<T> = (value) => {
    try {
      // Optionally allow value to be a function, so it can be used just as useState:
      // eslint-disable-next-line no-unused-vars
      const valueToStore: T = typeof value === "function" ? (value as (val: T) => T)(storedValue) : value
      // save to our state:
      setStoredValue(valueToStore)
      // persist to local storage:
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.log("Juno Error: useLocalStorage error: ", error)
    }
  }

  return [storedValue, setValue]
}

export default useLocalStorage
