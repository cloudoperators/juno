/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { useMatches, useNavigate } from "@tanstack/react-router"
import GreenhouseLogo from "../../assets/greenhouse_logo.svg?react"
import SupernovaIcon from "../../assets/juno_supernova.svg?react"
import DoopIcon from "../../assets/juno_doop.svg?react"
import HeurekaIcon from "../../assets/juno_heureka.svg?react"

import { Icon, Stack, Button } from "@cloudoperators/juno-ui-components"
import { usePlugin } from "../../components/StoreProvider"
import Avatar from "../Avatar"

import { useAuth } from "../AuthProvider"

const AppIcon = ({ name }: any) => {
  switch (name) {
    case "supernova":
      return <SupernovaIcon />
    case "doop":
      return <DoopIcon />
    case "heureka":
      return <HeurekaIcon />
    default:
      return <Icon icon="autoAwesomeMosaic" />
  }
}

const navStyles = `
bg-juno-grey-blue-11
py-4
`

const navItem = (active: any) => {
  return `
  px-2
  py-3
  w-full
  hover:text-theme-high

  ${
    active &&
    `
      bg-theme-global-bg  
      border-text-theme-light
      border-l-4
      text-white
      hover:text-white
    `
  }
`
}

const appNameStyles = `
text-xs
break-all
`

const PluginNav = () => {
  const appConfig = usePlugin().appConfig()
  const mngConfig = usePlugin().mngConfig()
  const navigate = useNavigate({ from: "/" })
  const matches = useMatches()
  const activeApp = matches.find((match) => match.routeId === "/$appId/*")?.params.appId
  // @ts-expect-error TS(2339): Property 'data' does not exist on type 'unknown'.
  const { data: authData, loggedIn, login, logout } = useAuth()

  const navigateToApp = (appId: string) => {
    navigate({ to: `/${appId}`, replace: false, search: (prev) => ({ ...prev }) })
  }

  return (
    <Stack direction="vertical" alignment="center" className={`greenhouse-nav ${navStyles}`}>
      <GreenhouseLogo className="mb-6" title="Greenhouse" />

      {appConfig.map((appConf: any, i: any) => (
        <Stack
          key={`apps-${i}`}
          direction="vertical"
          alignment="center"
          className={`greenhouse-nav-item ${navItem(activeApp === appConf.id)}`}
          role="button"
          // @ts-ignore
          tabIndex="0"
          onClick={() => navigateToApp(appConf.id)}
        >
          <AppIcon name={appConf.name} />
          <span className={appNameStyles}>{appConf.displayName}</span>
        </Stack>
      ))}

      <Stack
        direction="vertical"
        gap="3"
        alignment="center"
        className="mt-4 py-4 border-theme-background-lvl-1 border-y-2"
      >
        {mngConfig.map((appConf: any, i: any) => (
          <Stack
            direction="vertical"
            gap="3"
            alignment="center"
            key={`mng-apps-${i}`}
            className={`greenhouse-nav-item ${navItem(activeApp === appConf.id)}`}
            role="button"
            // @ts-ignore
            tabIndex="0"
            onClick={() => navigateToApp(appConf.id)}
          >
            <AppIcon name={appConf.name} />
            <span className={appNameStyles}>{appConf.displayName}</span>
          </Stack>
        ))}

        <Stack direction="vertical" alignment="center" gap="3">
          {loggedIn ? (
            <>
              <Avatar url={authData?.parsed?.avatarUrl?.small} />
              <Button variant="subdued" size="small" onClick={() => logout()}>
                Logout
              </Button>
            </>
          ) : (
            <Button size="small" onClick={() => login()}>
              Login
            </Button>
          )}
        </Stack>
      </Stack>
    </Stack>
  )
}

export default PluginNav
