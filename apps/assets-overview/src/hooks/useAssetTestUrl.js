/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useInsertionEffect } from "react"
import { stateToQueryParam } from "url-state-provider"
import useStore from "../store"
const searchParams = new URLSearchParams(window.location.search)
const appConfData = searchParams.get("asset-mount-test")

const useAssetTestUrl = () => {
  const urlStateTestingKey = useStore((state) => state.urlStateTestingKey)

  useInsertionEffect(() => {
    if (appConfData) {
      try {
        console.log(atob(searchParams.get("asset-mount-test")))
        const appConf = JSON.parse(atob(appConfData))
        document.body.style.display = "none"

        const params = stateToQueryParam({
          [urlStateTestingKey]: { p: "/testing", o: appConf },
        })
        const url = new URL(window.location.origin)
        url.search = params
        window.location = url
      } catch (e) {
        console.log(e)
      }
    }
  }, [urlStateTestingKey])
}

export default useAssetTestUrl
