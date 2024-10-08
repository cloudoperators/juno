/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactElement } from "react"
import { SideNavigationItem, SideNavigation } from "@cloudoperators/juno-ui-components"
import { useLocation } from "wouter"

import GreenhouseLogo from "../../assets/greenhouse_logo.svg?react"
import SupernovaIcon from "../../assets/juno_supernova.svg?react"
import DoopIcon from "../../assets/juno_doop.svg?react"
import HeurekaIcon from "../../assets/juno_heureka.svg?react"

const AppIcon = ({ name }: { name: string }) => {
  switch (name) {
    case "greenhouse":
      return <GreenhouseLogo />

    case "supernova":
      return <SupernovaIcon />

    case "doop":
      return <DoopIcon />

    case "heureka":
      return <HeurekaIcon />
  }
}

// TODO: load apps dynamically
const apps = [
  {
    name: "supernova",
    title: "Alerts",
    url: "/admin/supernova",
  },
  {
    name: "doop",
    title: "Doop",
    url: "/admin/doop",
  },
  {
    name: "heureka",
    title: "Heureka",
    url: "/admin/heureka",
  },
]

const NavigationItem = ({ icon, title, url, ...rest }: { icon: ReactElement; title?: string; url?: string }) => (
  <SideNavigationItem {...rest} key={title} value={url} ariaLabel={title}>
    {/* TODO: need to figure out why tailwind classes do not work as expected */}
    <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
      {icon}
      {title}
    </div>
  </SideNavigationItem>
)

const Navigation = () => {
  const [, setLocation] = useLocation()

  return (
    <SideNavigation
      onActiveItemChange={(pageUrl: string) => {
        if (pageUrl) {
          setLocation(pageUrl)
        }
      }}
    >
      <NavigationItem icon={<GreenhouseLogo />} url="/" />
      {apps.map(({ name, title, url }) => (
        <NavigationItem key={name} icon={<AppIcon name={name} />} title={title} url={url} />
      ))}
    </SideNavigation>
  )
}

export default Navigation
